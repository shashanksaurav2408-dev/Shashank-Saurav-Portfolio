"""Strip white background from Shashank's portraits and save as transparent PNGs.

Uses a corner flood-fill approach so internal light areas (skin, helmet, etc.)
are preserved while the surrounding white canvas becomes transparent.
"""
import os
import urllib.request
from PIL import Image, ImageFilter

ASSETS = {
    # filename -> source URL
    "hero-suit": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/rnsqo3p1_image.png",
    "thanks-pointing": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/zwm7fycw_image.png",
    "coffee": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/85rfuhj4_image.png",
    "engineer": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/nspkyfti_image.png",
    "super-flying": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/td2tpnks_image.png",
    "super-standing": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/zqaq6egz_image.png",
}

OUT_DIR = "/app/frontend/public/portraits"
os.makedirs(OUT_DIR, exist_ok=True)

WHITE_TOL = 18  # pixels within this distance from pure white are seeds
SOFT_RADIUS = 1


def is_near_white(px, tol=WHITE_TOL):
    r, g, b = px[:3]
    return r >= 255 - tol and g >= 255 - tol and b >= 255 - tol


def remove_white_bg(img: Image.Image) -> Image.Image:
    """Flood-fill near-white from all four corners, then alpha-mask."""
    img = img.convert("RGBA")
    w, h = img.size

    # Mask: 255 = keep, 0 = transparent. Start fully opaque.
    mask = Image.new("L", (w, h), 255)
    px = img.load()
    mp = mask.load()

    visited = bytearray(w * h)
    seeds = []
    for corner in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if is_near_white(px[corner]):
            seeds.append(corner)
    # Add edge pixels that are clearly white as additional seeds.
    step = max(1, min(w, h) // 200)
    for x in range(0, w, step):
        for y in (0, h - 1):
            if is_near_white(px[x, y]):
                seeds.append((x, y))
    for y in range(0, h, step):
        for x in (0, w - 1):
            if is_near_white(px[x, y]):
                seeds.append((x, y))

    # BFS flood fill (4-connected) over near-white pixels
    stack = list(seeds)
    while stack:
        x, y = stack.pop()
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        idx = y * w + x
        if visited[idx]:
            continue
        visited[idx] = 1
        if not is_near_white(px[x, y], tol=24):
            continue
        mp[x, y] = 0
        stack.append((x + 1, y))
        stack.append((x - 1, y))
        stack.append((x, y + 1))
        stack.append((x, y - 1))

    # Slight feather to soften edges
    mask = mask.filter(ImageFilter.GaussianBlur(SOFT_RADIUS))
    img.putalpha(mask)
    return img


def main():
    for name, url in ASSETS.items():
        out = os.path.join(OUT_DIR, f"{name}.png")
        tmp = f"/tmp/{name}_src.png"
        print(f"[{name}] downloading…")
        urllib.request.urlretrieve(url, tmp)
        img = Image.open(tmp)
        print(f"[{name}] removing background ({img.size})…")
        out_img = remove_white_bg(img)
        out_img.save(out, "PNG", optimize=True)
        print(f"[{name}] -> {out} ({os.path.getsize(out)//1024} KB)")


if __name__ == "__main__":
    main()
