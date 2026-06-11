"""Re-process ONLY the thanks-pointing-v2 image with strict tolerance.

The previous black-bg flood-fill ate into the subject's beard/hair shadows.
Lower tolerance limits the fill to only near-pure-black pixels.
"""
import os
import urllib.request
from PIL import Image, ImageFilter

URL = "https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/rxsmi2tf_26beca01-1e69-4234-93c0-4dacc7b61b43.png"
OUT = "/app/frontend/public/portraits/thanks-pointing-v2.png"

BLACK_SEED_TOL = 8
BLACK_GROW_TOL = 14
SOFT_RADIUS = 1


def is_near_black(px, tol):
    r, g, b = px[:3]
    return r <= tol and g <= tol and b <= tol


def remove_black_bg(img):
    img = img.convert("RGBA")
    w, h = img.size
    mask = Image.new("L", (w, h), 255)
    px = img.load()
    mp = mask.load()

    visited = bytearray(w * h)
    seeds = []
    for corner in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if is_near_black(px[corner], BLACK_SEED_TOL):
            seeds.append(corner)
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
    tmp = "/tmp/thanks_strict.png"
    print("downloading…")
    urllib.request.urlretrieve(URL, tmp)
    img = Image.open(tmp)
    print(f"removing black bg (strict) {img.size}…")
    out_img = remove_black_bg(img)
    out_img.save(OUT, "PNG", optimize=True)
    print(f"-> {OUT} ({os.path.getsize(OUT)//1024} KB)")


if __name__ == "__main__":
    main()
