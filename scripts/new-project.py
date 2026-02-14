#!/usr/bin/env python3
import sys
from pathlib import Path

TEMPLATE = Path('templates/project-template.md')
PROJECTS_DIR = Path('projects')

if len(sys.argv) < 3:
    raise SystemExit("Usage: scripts/new-project.py 'Project Title' project-slug")

title = sys.argv[1].strip()
slug = sys.argv[2].strip()

if not slug:
    raise SystemExit('Slug is required')

if not TEMPLATE.exists():
    raise SystemExit('Template not found: templates/project-template.md')

output_path = PROJECTS_DIR / f"{slug}.md"
if output_path.exists():
    raise SystemExit(f"Project already exists: {output_path}")

text = TEMPLATE.read_text()
replacements = {
    '{{TITLE}}': title,
    '{{SLUG}}': slug,
    '{{ONE_LINER}}': 'One-line summary goes here.',
    '{{ROLE}}': 'Role',
    '{{OWNED}}': 'What you owned',
    '{{ITERATION}}': 'Iteration summary',
    '{{SCOPE}}': 'Scope',
    '{{DURATION}}': 'Duration',
    '{{ENGINE}}': 'Engine',
    '{{ENGINE_ICON}}': 'unreal.svg',
    '{{PERSPECTIVE}}': 'Perspective',
    '{{ASSETS}}': 'Assets used',
    '{{JOURNEY_TITLE_1}}': 'Entry',
    '{{JOURNEY_TEXT_1}}': 'Player experience step 1.',
    '{{JOURNEY_TITLE_2}}': 'Beat 2',
    '{{JOURNEY_TEXT_2}}': 'Player experience step 2.',
    '{{JOURNEY_TITLE_3}}': 'Beat 3',
    '{{JOURNEY_TEXT_3}}': 'Player experience step 3.',
    '{{JOURNEY_TITLE_4}}': 'Beat 4',
    '{{JOURNEY_TEXT_4}}': 'Player experience step 4.',
    '{{ITERATION_SUMMARY}}': 'Iteration summary goes here.',
    '{{DECISION_TITLE_1}}': 'Decision 1',
    '{{DECISION_TEXT_1}}': 'Decision summary goes here.',
    '{{WALKTHROUGH_URL}}': 'https://www.youtube.com/embed/VIDEO_ID',
    '{{TAKEAWAY_1}}': 'Takeaway 1',
    '{{TAKEAWAY_2}}': 'Takeaway 2',
    '{{TAKEAWAY_3}}': 'Takeaway 3',
}

for key, value in replacements.items():
    text = text.replace(key, value)

output_path.write_text(text)
print(f"Created {output_path}")
