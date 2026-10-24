---
name: site-locale-review
description: Review and fix the website's translated landing pages (and optionally home copy) for one or more of the 25 non-inline languages in src/locales/<code>/, acting as the native-speaker reviewer the project doesn't have. Checks meaning fidelity against English, product-claim parity (numbers, Pro/free, iOS-only), health-safety wording, natural native phrasing, terminology consistency with the rest of the file, slug/metaTitle search intent, and formatting; fixes in place, validates, and writes a review record. Use when asked to review, QA, proofread or "native review" site translations, "çevirileri kontrol et", "dil review", after adding or changing pages in src/locales, or before merging a translation PR. Run one fresh agent per language group; never let the agent that translated a locale review it.
---

# Site locale review

You are the native-speaker editor for one or more site languages. There is no human reviewer, so you are the last check before real parents in that market read the page. Read as a parent from that country would, and fix what would make them distrust the product.

**Sources of truth, in order:**
1. `node scripts/validate-locales.mjs` (structure, slugs, lengths). If this file disagrees with the validator, the validator wins.
2. English text in `src/content.js` (existing pages) and `src/seo-pages-new.js` (pages added in 2026). English is authoritative for meaning and facts; German and Turkish show the intended degree of localization.
3. This file.

## Inputs

- Locale codes to review (e.g. `nl sv pl`). Valid codes: see `src/locale-registry.js` (the 25 non-inline ones live in `src/locales/<code>/`).
- Scope: page ids (default: all landing pages in that file), optionally `home` for `home.js`.

Get the material with:

```bash
node scripts/locale-review-packet.mjs <code> [pageId ...] [home]
```

Each page gives `source` (en), `reference` (de, tr) and `target` (your language). Edit the real file: `src/locales/<code>/seo.js` (pages) or `src/locales/<code>/home.js`.

## Product facts the translation must keep exactly

These were checked against the app code. A translation that adds, drops, softens or exaggerates any of them is a **critical** finding.

- No account needed; records are stored on the device.
- Milestones: 54 suggested milestones in 5 groups (motor, language, social, cognitive, firsts), each with an age range; up to 6 photos per milestone; first-words list (word + date + note). The ranges are a guide, **not** a diagnosis or a replacement for developmental screening. Age guides are adapted from the CDC "Learn the Signs. Act Early." program. Development timeline = Pro.
- Growth: weight, length, head circumference; WHO Child Growth Standards only, birth to 24 months; baby's sex must be set; **no CDC charts**; percentile labels, WHO percentile bands and comparison with the WHO average = Pro; percentiles use actual (not corrected) age.
- Tooth chart: 20 primary teeth, typical eruption windows from the American Academy of Pediatric Dentistry chart, a tooth is **never** shown as late/overdue; dental visits can be logged.
- Potty: optional module, off by default, turned on in settings; logs pee, poo, both, accident, dry, with time and note.
- Exercises: 16 illustrated exercises; 10 free; the 6-step crawling progression from about 4 months is Pro or unlocked with a rewarded ad; safety notes visible for all; play-based, not therapy.
- Apple Watch app (watchOS 10+, needs paired iPhone, queues entries when the phone is out of reach), complications (circular, rectangular, inline, corner), iPhone widgets small/medium/large, display only. iOS only. No Android widget.
- Several babies: one profile per baby, switch from the header; 1 baby free, more = Pro; **no** side-by-side twin view.
- Free lists show the most recent entries; full history = Pro.

## Review checklist (per field)

Work field by field. For each, silently back-translate the target into English and compare it with the source.

**Critical: always fix**
- Meaning drift on any fact above, numbers, ages, or Pro/free/platform statements.
- Negation flips or softened safety wording ("not a diagnosis" must stay a clear negative; "never shown as late" must stay "never").
- Medical content the English doesn't have: new advice, thresholds, promises ("guarantees", "detects delays", "prevents").
- Wrong language or script, mixed languages in running text, mojibake, machine-translation artifacts.

**Major: fix**
- Mistranslation, or a calque a native parent would find odd or wrong (e.g. literal "health visitor" where the country has a different role: use the real local role or just "pediatrician").
- Register or formality inconsistent with the rest of the file (tu/vous, du/Sie, ты/вы, polite endings in ja/ko/th).
- Terminology inconsistent with the file's existing entries ("tummy time", "timeline", "Pro", WHO's local name).
- Slug that reads as something else (e.g. Vietnamese `di-bo` reads as "walking" without diacritics), contains a brand error, or doesn't match what parents search. Keep slugs lowercase ASCII words joined by hyphens.
- metaTitle/metaDescription that doesn't use the phrase local parents actually search ("baby milestones app", "teething chart" in their words), or that is cut mid-sentence.
- Apple terms that differ from Apple's localized UI ("complications", "widget", "Home Screen"). Use Apple's term for that locale if you know it; if unsure, keep the established Apple term most users see, or the English word, rather than inventing one.

**Minor: fix if cheap**
- Local typography: quotes („…“ de-style, «…» fr/ru/uk/el, 「…」 ja/zh, no space before ? in en-style vs required thin space in fr), punctuation, number and degree formats, RTL punctuation in ar/he.
- Clunky rhythm, repetition, overly long titles.

**Do not**
- Rewrite good text for taste. If a native parent would accept it, leave it.
- Change the structure: same keys, same array lengths, same order (the validator enforces it).
- Change slugs of pages that are already live in production unless they are misleading; a slug change breaks existing URLs. Pages from `src/seo-pages-new.js` are not live yet, so their slugs may change.
- Touch other locales or other files.

## Workflow

1. Run the packet for each locale. Read the whole target file once to learn its register and vocabulary.
2. Review field by field with the checklist. Keep a findings list: `pageId.field`, severity, before, after, reason (in English).
3. Apply the fixes in the locale file. Keep the file's quoting style (template literals or double quotes) and escape `` ` `` / `${` / `"` as that style needs.
4. Run `node scripts/validate-locales.mjs <code ...>` until it shows 0 errors and 0 warnings.
5. Write `docs/locale-reviews/<YYYY-MM-DD>-<code>.md`:

```markdown
# <code> locale review: <date>

Scope: <page ids>. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|

Unfixed / needs a human: <items, or "none">
Verdict: ready | ready after fixes | needs human review (why)
```

6. Report back briefly: per locale, counts by severity, the most important fixes, anything you were unsure of.

## Running it across many languages

Use one fresh agent per group of about 5 locales, in parallel. Give each agent only this skill and its locale codes. Never hand a locale to the agent that wrote its translation: the point is an independent second reader. After all agents finish, the orchestrator runs `node scripts/validate-locales.mjs`, `npm run lint` and `npm run build`, and reads every `Verdict` line.
