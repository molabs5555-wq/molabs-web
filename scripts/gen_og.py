from PIL import Image, ImageDraw, ImageFont

S = 2
W, H = 1200 * S, 630 * S
img = Image.new("RGB", (W, H), "#FFFFFF")
d = ImageDraw.Draw(img)

cx, cy, r = 600 * S, 195 * S, 105 * S
mark = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(mark)
md.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(10, 10, 10, 255), width=5 * S)
for angle in (45, -45):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.ellipse([cx - r, cy - 45 * S, cx + r, cy + 45 * S], outline=(10, 10, 10, 255), width=5 * S)
    mark.alpha_composite(layer.rotate(angle, center=(cx, cy)))
img.paste(mark, (0, 0), mark)

fb = ImageFont.truetype("/usr/share/fonts/truetype/freefont/FreeSansBold.ttf", 58 * S)
fs = ImageFont.truetype("/usr/share/fonts/truetype/freefont/FreeSansBold.ttf", 32 * S)
ft = ImageFont.truetype("/usr/share/fonts/truetype/freefont/FreeSans.ttf", 25 * S)


def centered(draw, text, font, y, fill, spacing=0):
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x = (W - total) / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + spacing


centered(d, "MODUS OPERANDI", fb, 355 * S, "#0A0A0A", spacing=6 * S)
centered(d, "M.O. LABS", fs, 440 * S, "#0A0A0A", spacing=4 * S)
d.line([(510 * S, 512 * S), (690 * S, 512 * S)], fill="#0A0A0A", width=2 * S)
centered(d, "Building operating systems for the modern world.", ft, 540 * S, "#4B5563", spacing=1 * S)

img.resize((1200, 630), Image.LANCZOS).save("/app/frontend/public/og-image.png")
print("og-image.png written")
