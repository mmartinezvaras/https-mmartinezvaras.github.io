---
name: cv-create
description: Use when the user wants to create a resume or CV from scratch, review an existing one, or improve their bullet points. Covers format selection, accomplishment writing with STAR/XYZ frameworks, and ATS optimization.
---

# CV Create

## When to Use

Activate when the user:
- Wants to create a resume or CV from scratch
- Asks for a resume review or critique
- Wants to rewrite bullet points or accomplishments
- Needs help choosing a resume format
- Asks about ATS optimization

Do NOT use for:
- Tailoring a CV for a specific job description (use `cv-tailor`)
- Generating a PDF (use `cv-pdf`)

## Workflow

### Creating from Scratch

**Step 1: Gather information through conversation**
- Career stage and target role/industry
- Work history: companies, titles, dates, key accomplishments
- Education, certifications, skills
- Context: career transition? Employment gaps? Geographic preferences?

**Step 2: Choose format**

| Format | Best For |
|--------|----------|
| Chronological | Consistent work history, clear progression, same field |
| Functional | Career changers, employment gaps, diverse experience |
| Hybrid | Mid-career with both deep skills and solid progression |

**Step 3: Write content**

Use these frameworks for bullet points:

**XYZ Formula** (concise, metrics-driven):
- Accomplished [X] as measured by [Y] by doing [Z]
- Example: "Grew company from $5M to $10M ARR by building enterprise demand gen function from scratch"

**STAR Method** (detailed, interview-prep friendly):
- Situation → Task → Action → Result
- Example: "When pipeline coverage dropped below 2x, rebuilt enterprise outbound by hiring a 3-person BDR team with new ICP playbooks, generating $2M in qualified pipeline within 6 months"

**Rules for bullets:**
- Start with a strong action verb
- Quantify impact whenever possible
- One accomplishment per bullet, not a list of duties
- Past tense for previous roles, present for current
- Prioritize relevance over completeness

**Step 4: Apply ATS optimization**

Do:
- Use standard section headings: "Experience", "Education", "Skills"
- Include keywords from target industry naturally
- Standard fonts, no tables for layout, no text boxes
- Spell out abbreviations at least once (except universal ones: SEM, ABM, ROI, SaaS, B2B)

Don't:
- Creative section headings ("Where I've Made My Mark")
- Images, icons, or graphics
- Critical info in headers/footers
- Keyword stuffing

### Reviewing an Existing CV

When the user shares an existing CV:

1. **Structure** – Is the format right for their career stage? Sections in the right order?
2. **Content** – Are bullets achievement-oriented? Metrics included? Any filler?
3. **ATS** – Standard headings? Keywords? Formatting traps?
4. **Positioning** – Does the summary accurately position them for their target?

Provide feedback as:
- **Must fix** – Will likely get the resume rejected
- **Should fix** – Meaningfully strengthens the resume
- **Nice to have** – Polish, not critical

## Output

Generate CVs in markdown format. Structure:
1. Name (H1)
2. Title (bold)
3. Contact line
4. Profile/Summary (H2)
5. Experience (H2) with roles
6. Education (H2)
7. Skills (H2)
8. Awards (H2, if relevant)
9. Languages (H2, if applicable)

## Career Stage Guidelines

- **Entry-level (0-2 years):** Lead with education, internships, projects. 1 page.
- **Mid-career (3-8 years):** Balance skills and progression. Quantify impact. 1 page.
- **Senior (8+ years):** Lead with strategic impact, leadership, scale. 1-2 pages max.
- **Career changers:** Lead with transferable skills. Reframe experience for target industry.
