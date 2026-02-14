# Portfolio Website

## Structure
- `index.markdown` — Portfolio landing page
- `projects/` — Project pages
- `assets/media/` — Project + about media
- `assets/icons/` — Tool + social icons
- `assets/brand/` — Favicons + manifest
- `assets/docs/` — CV PDF
- `assets/css/` — Styles (split into partials)

## CSS Workflow
Edit the partials below, then rebuild `assets/css/style.css`:
- `assets/css/base.css`
- `assets/css/layout.css`
- `assets/css/components.css`
- `assets/css/pages.css`
- `assets/css/utilities.css`
- `assets/css/responsive.css`

Rebuild command:
```bash
scripts/build-css.py
```

## Scripts
- `scripts/build-css.py` — Rebuilds `assets/css/style.css` from the partials.
- `scripts/check-assets.py` — Scans for missing `/assets/...` references.
- `scripts/check-alt.py` — Finds images missing `alt` text.
- `scripts/check-headings.py` — Flags heading order jumps (e.g. H2 → H4).
- `scripts/new-project.py` — Generates a new project page from `templates/project-template.md`.
- `scripts/optimize-images.sh` — Optional lossless image optimization (requires `oxipng` and `jpegoptim`).

## Jekyll
Run locally:
```bash
bundle exec jekyll serve
```

Generate a production build:
```bash
bundle exec jekyll build
```

## Sitemap / Robots
`jekyll-sitemap` is enabled. Set your domain in `_config.yml`:
```
url: "https://your-domain.com"
```

This ensures `/sitemap.xml` and `robots.txt` have correct absolute URLs.
