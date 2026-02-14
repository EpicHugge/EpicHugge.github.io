#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
IGNORE_DIRS = {'.git', '_site', '.jekyll-cache', 'node_modules'}
TEXT_EXTS = {'.md', '.html'}

md_heading = re.compile(r'^(#{1,6})\s+.+')
html_heading = re.compile(r'<h([1-6])[^>]*>')

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

    levels = []
    for line in text.splitlines():
        m = md_heading.match(line.strip())
        if m:
            levels.append(len(m.group(1)))
    for m in html_heading.finditer(text):
        levels.append(int(m.group(1)))

    if not levels:
        continue

    prev = levels[0]
    for level in levels[1:]:
        if level > prev + 1:
            issues.setdefault(str(path.relative_to(ROOT)), []).append((prev, level))
        prev = level

if not issues:
    print('No heading order issues found.')
    raise SystemExit(0)

print('Potential heading order issues:')
for file, pairs in sorted(issues.items()):
    print(f"- {file}")
    for prev, cur in pairs:
        print(f"  H{prev} -> H{cur}")

raise SystemExit(1)
