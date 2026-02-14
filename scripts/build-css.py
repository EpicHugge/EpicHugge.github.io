#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_DIR = ROOT / 'assets' / 'css'
ORDER = [
    'base.css',
    'layout.css',
    'components.css',
    'pages.css',
    'utilities.css',
    'responsive.css',
]

header = """/*
  NOTE: This file is generated from:
  - assets/css/base.css
  - assets/css/layout.css
  - assets/css/components.css
  - assets/css/pages.css
  - assets/css/utilities.css
  - assets/css/responsive.css
  Edit those partials, then rebuild this file.
*/

"""

parts = []
for name in ORDER:
    path = CSS_DIR / name
    if not path.exists():
        raise SystemExit(f"Missing CSS partial: {path}")
    parts.append(path.read_text().rstrip())

output = header + "\n\n".join(parts) + "\n"
(CSS_DIR / 'style.css').write_text(output)
print('Rebuilt assets/css/style.css')
