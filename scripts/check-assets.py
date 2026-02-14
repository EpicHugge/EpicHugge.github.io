#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

IGNORE_DIRS = {
    '.git',
    '_site',
    '.jekyll-cache',
    'node_modules',
}

TEXT_EXTS = {'.md', '.html', '.css', '.js', '.yml', '.yaml'}

patterns = [
    re.compile(r"['\"](/assets/[^'\"\s)]+)['\"]"),
    re.compile(r"url\((/assets/[^)\s]+)\)"),
]

missing = {}

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

    for pattern in patterns:
        for match in pattern.findall(text):
            asset_path = match.split('?')[0].split('#')[0]
            asset_file = ROOT / asset_path.lstrip('/')
            if not asset_file.exists():
                missing.setdefault(asset_path, set()).add(str(path.relative_to(ROOT)))

if not missing:
    print('No missing asset references found.')
    raise SystemExit(0)

print('Missing asset references:')
for asset, files in sorted(missing.items()):
    print(f"- {asset}")
    for f in sorted(files):
        print(f"  - {f}")

raise SystemExit(1)
