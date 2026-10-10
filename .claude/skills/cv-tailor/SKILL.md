---
name: cv-tailor
description: Use when the user shares a job description and wants their CV tailored for that specific role. Parses the JD, maps requirements against the user's experience, discovers undocumented skills through conversation, and generates a tailored CV. NEVER fabricates experience.
---

# CV Tailor

## When to Use

Activate when:
- User pastes or shares a job description
- User asks to tailor, customize, or adapt their CV for a role
- User says "tailor my resume" or similar

Do NOT use for:
- Creating a CV from scratch without a target JD (use `cv-create`)
- Generating a PDF (use `cv-pdf`)
- Cover letters

## Critical Rule: No Fabrication

You may ONLY use information from the user's CV files and what they tell you in conversation. NEVER:
- Invent projects, roles, or responsibilities
- Fabricate metrics or numbers
- Add skills the user hasn't mentioned
- Attribute accomplishments from one role to another

If the JD requires something the user's CV doesn't cover, flag it as a gap. Don't fill it with fiction.

## Workflow

### Phase 1: Gather Inputs

Ask the user for:
1. **The job description** – pasted text or a URL (use WebFetch if URL provided)
2. **Their CV file(s)** – path to their existing CV in markdown. If not provided, check for common filenames: `cv.md`, `resume.md`, `cv-extended.md`, `cv-short.md` in the working directory.

### Phase 2: Parse the Job Description

Extract and organize:
- **Company and role title**
- **Must-have requirements** (explicitly required)
- **Nice-to-have requirements** (preferred, bonus)
- **Key responsibilities** (day-to-day work)
- **Keywords** (for ATS matching)
- **Seniority signals** (IC vs manager, years, scope)
- **Personas/stakeholders** mentioned

Present a brief summary: "Here's what I see this role needing: [summary]. Let me tailor your CV."

### Phase 3: Map Requirements to Experience

For each requirement from Phase 2, find the closest match in the user's CV:

| Match Strength | Meaning | Action |
|---------------|---------|--------|
| **Direct** | Exact match in CV | Prioritize, use JD keywords |
| **Adjacent** | Related experience, reframeable | Reframe to emphasize relevant aspect |
| **Gap** | No match in CV | Flag, move to Phase 4 |

### Phase 4: Experience Discovery (for gaps)

For each gap, ask branching questions to surface undocumented experience. See `branching-questions.md` for patterns.

Key principles:
- Start broad, go narrow based on answers
- If user says "no" after 2-3 probes, move on
- Cross-reference: "Earlier you mentioned X – does that relate?"
- Some gaps are OK – flag for cover letter or interview prep

### Phase 5: Generate Tailored CV

**Profile/Summary:**
- Rewrite to position the user for THIS role
- Mirror the JD's language where it authentically applies
- Lead with most relevant value proposition

**Experience:**
- Keep chronological order (usually)
- Select the most relevant bullets per role – not everything from the source CV
- Reframe bullets to emphasize JD-relevant aspects, using JD language
- Add context where helpful (e.g., "AI-native platform" → "enterprise SaaS" for a non-AI role)
- Expand roles that directly match, compress those that don't

**Skills:**
- Reorder to lead with JD-relevant skills
- Add skills surfaced during experience discovery (Phase 4)

**Output:** Save as `cv-tailored-[company]-[role].md` in the working directory.

### Phase 6: Gap Report

After generating, briefly report:
- **Strong matches** – Requirements where experience directly applies
- **Reframed matches** – Adjacent experience positioned to fit
- **Gaps** – Requirements with no direct or adjacent match
- **Suggested talking points** – How to address gaps in interviews

## Quick Mode

If user says "quick tailor" or "fast" – skip the experience discovery (Phase 4) and gap report (Phase 6). Just parse, map, and generate.
