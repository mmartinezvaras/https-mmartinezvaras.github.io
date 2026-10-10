---
name: cv-pdf
description: Use when the user wants to generate a professional PDF from their markdown CV. Creates a clean, ATS-compatible, single-page PDF using Python's reportlab library.
---

# CV PDF Generator

## When to Use

Activate when:
- User asks to generate a PDF from their CV
- User asks to convert their markdown resume to PDF
- User wants a printable version of their CV

## Prerequisites

Requires Python with `reportlab` installed:
```bash
pip install reportlab
```

## How to Generate

Write a Python script using reportlab's Platypus framework. The script should:

1. **Read the user's markdown CV** and extract sections
2. **Build a PDF** with the styling rules below
3. **Save to the working directory** as `[Name]_CV.pdf`

### Page Setup

```python
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate

doc = SimpleDocTemplate(
    "output.pdf",
    pagesize=letter,
    leftMargin=0.7 * inch,
    rightMargin=0.7 * inch,
    topMargin=0.5 * inch,
    bottomMargin=0.4 * inch,
)
```

### Typography

| Element | Font | Size | Leading | Color |
|---------|------|------|---------|-------|
| Name | Helvetica-Bold | 16pt | 19pt | #000000 |
| Title | Helvetica | 10pt | 13pt | #555555 |
| Contact | Helvetica | 8.5pt | 11pt | #999999 |
| Section heading | Helvetica-Bold | 10pt | 13pt | #000000 |
| Role title | Helvetica-Bold | 9pt | 11.5pt | #333333 |
| Company description | Helvetica-Oblique | 8pt | 10pt | #555555 |
| Body text | Helvetica | 8.5pt | 11pt | #333333 |
| Bullets | Helvetica | 8.5pt | 11pt | #333333 |

### Layout Rules

- **Header:** Name centered, title below, contact below that
- **Sections:** Separated by thin horizontal rules (#CCCCCC, 0.5pt)
- **Spacing:** Keep tight – spaceBefore=4-6pt on sections, spaceBefore=4pt on role titles
- **Bullets:** Use "•" character with leftIndent=10pt
- **Target:** 1 page for most CVs. If it overflows, tighten spacing before going to 2 pages.

### Section Order

1. Name + Title + Contact (centered)
2. Horizontal rule
3. PROFILE
4. EXPERIENCE (roles with bullets)
5. EDUCATION
6. SKILLS (single line, separated by " · ")
7. AWARDS (if present)
8. LANGUAGES (if present)

### ATS Compatibility

- No tables for layout
- No text boxes or images
- Standard fonts only (Helvetica family)
- Flat structure – no nested columns

### Key Platypus Components

```python
from reportlab.platypus import Paragraph, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.colors import HexColor

# Horizontal rule between sections
HRFlowable(width="100%", thickness=0.5, color=HexColor("#CCCCCC"),
           spaceAfter=3, spaceBefore=1)

# Bullet point
Paragraph("• Grew revenue from $5M to $10M ARR", bullet_style)

# Bold within text
Paragraph("<b>Won Bronze Effie Award</b> – details here", body_style)
```

### One-Page Fit Strategy

If the CV overflows to page 2:
1. First: reduce spaceBefore on sections (6→4) and role titles (4→2)
2. Then: reduce font sizes by 0.5pt across the board
3. Then: reduce margins (0.7→0.6 inch sides, 0.5→0.4 top)
4. Last resort: cut the least relevant content
