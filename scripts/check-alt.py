#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

IGNORE_DIRS = {'.git', '_site', '.jekyll-cache', 'node_modules'}
TEXT_EXTS = {'.md', '.html'}

img_tag = re.compile(r'<img\b[^>]*>', re.IGNORECASE)
alt_attr = re.compile(r'\balt\s*=\s*(["\"]).*?\1', re.IGNORECASE)
aria_hidden = re.compile(r'\baria-hidden\s*=\s*(["\"])true\1', re.IGNORECASE)

issues = {}

for path in ROOT.rglob('*'):
    if path.is_dir():
        continue
    if any(part in IGNORE_DIRS for part in path.parts):
        continue
    if path.suffix.lower() not in TEXT_EXTS:
        continue

    try:
        text = path.read_text()
    except Exception:
        continue

    for tag in img_tag.findall(text):
        if aria_hidden.search(tag):
            continue
        if not alt_attr.search(tag):
            issues.setdefault(str(path.relative_to(ROOT)), []).append(tag)

if not issues:
    print('No missing alt attributes found.')
    raise SystemExit(0)

print('Images missing alt attributes:')
for file, tags in sorted(issues.items()):
    print(f"- {file}")
    for t in tags:
        print(f"  {t}")

raise SystemExit(1)
