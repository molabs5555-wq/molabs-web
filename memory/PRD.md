# MO LABS — PRD

## Original Problem Statement
Multi-page B2B SaaS marketing website for "MO LABS": dark theme (charcoal/deep navy, emerald green accents, high-contrast typography), 8 pages with shared header/footer, product dropdown nav, "Request Beta Access" modal, functional contact forms. User chose: sleek technical art direction; submissions stored in DB + admin view (email sending skipped for now; owner email on file: molabs5555@gmail.com).

## Architecture
- Frontend: React 19 + react-router-dom v7, Tailwind, framer-motion (scroll reveals, kinetic masked hero lines, parallax), Lenis smooth scrolling, sonner toasts. Fonts: Chakra Petch (display), Archivo (body), JetBrains Mono (accents).
- Backend: FastAPI, /api prefix. POST /api/contact (validated via Pydantic + EmailStr), GET /api/contact/submissions (X-Admin-Key header auth).
- DB: MongoDB `contact_submissions` collection (uuid ids, ISO timestamps, source_page tracking).

## User Personas
- B2B operator/founder evaluating tools (main visitor, requests beta access)
- Procurement/security reviewer (reads /security, /legal)
- Site owner (reads submissions in /admin inbox)

## Core Requirements (static)
- 8 pages: Home, /clarity-dispatch, /linkedin-engine, /product-catalogue, /custom-inventory, /company, /security, /legal
- Shared sticky header with Products + Resources dropdowns, footer, beta modal
- Contact forms on Home + all 4 product pages + Company
- Pricing: Catalogue $350 setup + $29/mo; Inventory $2,000 setup + $200/mo

## Implemented (2026-07-20)
- All 8 pages + bonus /admin submissions inbox
- Kinetic hero (masked line reveal), live terminal card, editorial marquee, waveform animation, scroll reveals, Lenis smooth scroll, hero parallax
- Working contact forms (modal + 6 page sections) storing to MongoDB with success/error toasts
- Admin inbox at /admin with key auth (see test_credentials.md)
- SEO: per-page Seo component (canonical, OG, JSON-LD on home), llms.txt
- Verified: API POST/GET/401/422, UI form submission, beta modal, admin inbox (4 test submissions visible), legal tabs, nav dropdowns

## Rebrand (2026-07-20, second pass)
- Brand renamed to M.O. LABS; palette switched from emerald-on-navy to the official monochrome system: #000000 canvas, #FFFFFF headings/CTAs, #868E95 body text, #2A3037/#5D6670 structural elements, #F0F4F8 accents
- Implemented via Tailwind palette remap (emerald-* -> white/silver, slate-400/500 -> muted/cool slate) so all components inherit without markup churn
- New identity live: hero H1 "Building operating systems for the modern world." (old data-clerk line kept as subheadline), marquee = RESEARCH / BUILD / OPERATE / TRANSFORM, Technical Pillars section on Home (AI & Advanced Technologies, Product Engineering, Systems Thinking, Scalable Impact), Methodology section on Company

## Rebrand v2 (2026-07-21, third pass) — LIGHT MODE INVERSION
- Full theme inversion to light mode: #FFFFFF canvas, #F9FAFB secondary surfaces, #E5E7EB borders, #0A0A0A/#111827 headlines, #4B5563/#6B7280 secondary text, solid black primary buttons / white secondary buttons with 1px black border
- Implemented via Tailwind remap: ink->#FFF, panel->#F9FAFB, line->#E5E7EB, white->#0A0A0A (headings), emerald->black scale, slate-> light-mode gray scale. NOTE: tailwind `white` is remapped to obsidian — never use bg-white for true white, use bg-ink
- Official logo: geometric orbital wireframe mark (circle + two intersecting diagonal ellipses) as inline SVG component src/components/Logo.jsx, with MODUS OPERANDI / M.O. LABS lockup in header + footer; favicon.svg replaced with the orbital mark; old Terminal-icon placeholder removed everywhere

## Email + Hero Terminal (2026-07-21)
- Managed Resend notifications ACTIVE: POST /api/contact stores the submission AND emails molabs5555@gmail.com (sender display name "M.O. LABS", server-side template, all fields escaped, guardrail gate enforced). Email failure never blocks a submission (logged, DB record kept). Verified: provider returned 202 + email id on a live test submission.
- Hero terminal card is now solid black (bg-black, neutral text) as a contrast anchor on the white page. Note: tailwind `white` is remapped to obsidian globally — inside dark components use neutral-100 for true light text.

## Team Section (2026-07-21)
- Company page operators updated to real team: Samvit Paliwal (Co-Founder, SP), Rudra Pratap Singh (Co-Founder, RS), Devendra M (Head of Systems Architecture, DM). Each card is a dark panel with monogram + working LinkedIn button (target=_blank, verified hrefs in DOM).

## Global Updates Batch (2026-07-22)
- Em-dashes replaced with hyphens across all pages, backend email subject, and copy files
- Footer links + logo smooth-scroll to top (Lenis-aware, event delegation on footer)
- Team cards now use real photos (public/team/samvit.jpg, rudra.jpg, devendra.jpg) - grayscale, color on hover; LinkedIn links unchanged and verified
- Clarity Dispatch multi-language copy now says capacity is being built (not shipped)
- Product Catalogue + Custom Inventory pricing: fixed numbers removed, "Contact for pricing" + Request Pricing lead button (opens beta modal); SEO descriptions and llms.txt updated to match
- All contact forms + beta modal now have a mandatory "I agree to the Terms & Privacy Policy" checkbox (native required validation, links to /legal in new tab)
- Privacy Policy section 3 already matched the requested wording verbatim - no change needed
- SEO/AEO: global meta description in index.html; per-page canonical/OG/Twitter via Seo component; JSON-LD added - Organization + FAQPage on Home, SoftwareApplication on all 4 product pages
- API auth hardened: admin key check uses secrets.compare_digest; verified 401 wrong key / 200 correct key

## Auto-Reply + OG + Photo Crop (2026-07-22)
- Auto-reply implemented: every submission triggers a branded "We received your transmission" confirmation to the submitter. VERIFIED working only to molabs5555@gmail.com (202 Accepted); external addresses get 422 from the managed Resend sandbox (unverified sender domain restriction). Code stays active and fails gracefully - starts delivering to everyone once a sending domain is verified.
- OG share card: /og-image.png (1200x630, orbital mark + MODUS OPERANDI / M.O. LABS + tagline) generated via scripts/gen_og.py, wired as og:image on all 8 public pages.
- Rudra's photo cropped from wide scenic shot to 537x537 headshot framing.

## Plain-Language Copy Overhaul (2026-10-02)
- Goal: remove agency jargon. All routes unchanged (/clarity-dispatch, /linkedin-engine, /product-catalogue, /custom-inventory, /company, /security, /legal all intact)
- Nav CTA is now SEE OUR PRODUCTS (scrolls to #arsenal on home, navigates to /#arsenal from other pages via hash-aware ScrollToTop + Lenis)
- Hero: "We build automations that delete your busywork." + TELL US WHAT TO AUTOMATE (scrolls to #contact); terminal graphic replaced with voice-note-bubble -> Notion-row visual (no code)
- Product renames (site.js drives nav dropdown, footer, cards): Voice-to-Workspace Sync, LinkedIn Post Generator, Digital Catalog Builder, Custom Business Automations. Product page H1s = new names; everything else on those pages untouched
- Benefits section (3 boxes: Fast Setup / Custom to You / Private & Secure) replaced Technical Pillars; integrations row regrouped chat apps -> arrow -> database apps; scale metric sub updated
- Contact form: "Get in touch." header, new sub copy, Email/Company (optional) placeholders, consent checkbox REMOVED, muted "By sending this, you agree to our Terms & Privacy Policy" line under TRANSMIT. Submission flow verified working without checkbox
- BetaModal still in use by product-page CTAs only

## Homepage Update (2026-10-07)
- Hero: "Deleting your busywork." + new sub-headline; primary CTA renamed DELETE YOUR BUSYWORK (still scrolls to #contact); secondary button and voice-note visual unchanged
- Integrations section: header "Adapts instantly to the tools you already use."; brand logos removed, replaced by generic flow: Chat + Email -> arrow -> Your database + Your sheets (vertical with down-arrow on mobile)
- New video section below Products: "See how it works", 16:9 player driven by VIDEO_URL const at top of Home.jsx (mp4 or YouTube/Vimeo embed via toEmbedUrl); empty = "Demo video coming soon" placeholder; no autoplay. Section tags renumbered (Demo 02, Benefits 03, Integrations 04)

## Backlog / Next Tasks
- P0: (none blocking)
- P1: Email notifications to molabs5555@gmail.com via managed Resend when user opts in
- P1: Real brand logos for integrations strip (currently icon representations)
- P2: Interactive voice-demo on Clarity Dispatch (record -> simulated structuring)
- P2: Blog/changelog section, analytics events on CTA clicks
- P2: Custom favicon/logo mark
