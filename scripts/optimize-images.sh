#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if command -v oxipng >/dev/null 2>&1; then
  echo "Running oxipng (lossless) on PNGs..."
  find "$ROOT_DIR/assets" -type f -name "*.png" -print0 | xargs -0 oxipng -o4 -strip safe
else
  echo "oxipng not found. Install with: brew install oxipng"
  echo "Then rerun: scripts/optimize-images.sh"
fi

if command -v jpegoptim >/dev/null 2>&1; then
  echo "Running jpegoptim (lossless) on JPGs..."
  find "$ROOT_DIR/assets" -type f \( -name "*.jpg" -o -name "*.jpeg" \) -print0 | xargs -0 jpegoptim --strip-all --all-progressive
else
  echo "jpegoptim not found. Install with: brew install jpegoptim"
  echo "Then rerun: scripts/optimize-images.sh"
fi
