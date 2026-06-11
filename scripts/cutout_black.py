"""Cut out black backgrounds from the new high-quality portraits.

Uses corner flood-fill targeting near-black pixels, preserving internal
dark details (shadows, suit creases, hair) that aren't connected to the
background.
"""
import os
import urllib.request
from PIL import Image, ImageFilter

ASSETS = {
    "hero-suit-v2": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/jz6xuewc_07ca34dc-8a36-4031-9950-9407697e330a.png",
    "thanks-pointing-v2": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/gf351eoh_92a8bd98-040d-4053-9ac0-3ba9b5398e98.png",
    "super-flying-v2": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/rxsmi2tf_26beca01-1e69-4234-93c0-4dacc7b61b43.png",
    "super-standing-v2": "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/6nk5nwy7_a2150b91-7f5b-423b-9bde-f90486e8f226.png",
}

OUT_DIR = "/app/frontend/public/portraits"
os.makedirs(OUT_DIR, exist_ok=True)

BLACK_SEED_TOL = 14   # corner seeds within this distance from pure black
BLACK_GROW_TOL = 28   # how far the flood fill may grow
SOFT_RADIUS = 1


def is_near_black(px, tol):
    r, g, b = px[:3]
    return r <= tol and g <= tol and b <= tol


def remove_black_bg(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    mask = Image.new("L", (w, h), 255)
    px = img.load()
    mp = mask.load()

    visited = bytearray(w * h)
    seeds = []
    # Corner seeds
    for corner in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if is_near_black(px[corner], BLACK_SEED_TOL):
            seeds.append(corner)
    # Add additional edge seeds at intervals
    step = max(1, min(w, h) // 200)
    for x in range(0, w, step):
        for y in (0, h - 1):
            if is_near_black(px[x, y], BLACK_SEED_TOL):
                seeds.append((x, y))
    for y in range(0, h, step):
        for x in (0, w - 1):
            if is_near_black(px[x, y], BLACK_SEED_TOL):
                seeds.append((x, y))

    stack = list(seeds)
    while stack:
        x, y = stack.pop()
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        idx = y * w + x
        if visited[idx]:
            continue
        visited[idx] = 1
        if not is_near_black(px[x, y], BLACK_GROW_TOL):
            continue
        mp[x, y] = 0
        stack.append((x + 1, y))
        stack.append((x - 1, y))
        stack.append((x, y + 1))
        stack.append((x, y - 1))

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
        print(f"[{name}] removing black bg ({img.size})…")
        out_img = remove_black_bg(img)
        out_img.save(out, "PNG", optimize=True)
        print(f"[{name}] -> {out} ({os.path.getsize(out)//1024} KB)")


if __name__ == "__main__":
    main()
