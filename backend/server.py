from fastapi import FastAPI, APIRouter, Header, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
import httpx
import secrets
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
ADMIN_KEY = os.environ.get('ADMIN_KEY')

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan(); scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} ≠ real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    company: str = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)
    source_page: str = Field(default="/", max_length=120)


class Contact(ContactIn):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "M.O. LABS API online"}


@api_router.post("/contact")
async def create_contact(payload: ContactIn):
    doc = Contact(**payload.model_dump()).model_dump()
    await db.contact_submissions.insert_one(doc)
    subject = f"New beta request - {doc['name']}"
    html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif;color:#111827">'
        f'<p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#6b7280">M.O. LABS // New transmission</p>'
        f'<p><strong>Name:</strong> {escape(doc["name"])}</p>'
        f'<p><strong>Email:</strong> {escape(doc["email"])}</p>'
        f'<p><strong>Company:</strong> {escape(doc["company"]) or "-"}</p>'
        f'<p><strong>Source page:</strong> {escape(doc["source_page"])}</p>'
        f'<p><strong>Message:</strong><br/>{escape(doc["message"]).replace(chr(10), "<br/>")}</p>'
        f'<p style="font-size:12px;color:#6b7280">Sent by the {escape(EMAIL_FROM_NAME)} website contact form. '
        'We never ask for your password or card details by email.</p></td></tr></table>'
    )
    try:
        email_id = await send_email(to=OWNER_EMAIL, subject=subject, html=html)
        logger.info(f"Owner notification sent: {email_id}")
    except Exception as e:
        logger.error(f"Owner notification failed (submission stored): {e}")
    reply_subject = "We received your transmission - M.O. LABS"
    reply_html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif;color:#111827">'
        '<p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#6b7280">M.O. LABS // Transmission received</p>'
        f'<p>Hi {escape(doc["name"])},</p>'
        "<p>Thanks for reaching out. An operator will reply within 24 hours - a human, not an autoresponder sequence.</p>"
        "<p>In the meantime: we never ask for passwords or card details by email, and your data is never used to train AI models.</p>"
        '<p style="font-size:12px;color:#6b7280">M.O. LABS - Building operating systems for the modern world.</p></td></tr></table>'
    )
    try:
        reply_id = await send_email(to=doc["email"], subject=reply_subject, html=reply_html)
        logger.info(f"Auto-reply sent: {reply_id}")
    except Exception as e:
        logger.error(f"Auto-reply failed (submission stored): {e}")
    return {"status": "received", "id": doc["id"]}


@api_router.get("/contact/submissions")
async def list_submissions(x_admin_key: str = Header(default="")):
    if not ADMIN_KEY or not secrets.compare_digest(x_admin_key, ADMIN_KEY):
        raise HTTPException(status_code=401, detail="Invalid admin key")
    docs = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"submissions": docs}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
