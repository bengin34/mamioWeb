# cs locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Major | …odsávání, růst, zdraví, očkování, návštěvy u lékaře a připomínky… | …odsávání, růst, milníky, zuby, zdraví, očkování a návštěvy u lékaře… | Product-claim drift: dropped milestones + teeth, added reminders not in EN |
| home.features[2].body | Major | Růst, příznaky, teplotu, léky, očkování, návštěvy u lékaře i rychlé poznámky… | Růst, milníky, první slova, zuby, příznaky, teplotu, léky, očkování i návštěvy u lékaře… | Dropped milestones, first words, teeth; added "quick notes" |
| health.sections[2].body | Minor | …a neměl by nahradit odbornou péči. | …a nemělo by nahrazovat odbornou péči. | Gender agreement: file treats Mamio as neuter ("navrženo", "stvořené") |
| breastfeeding.title | Minor | …pro ospalá a skutečná krmení. | …pro rozespalá krmení v reálném životě. | "ospalá a skutečná" reads as a list of two adjectives, unnatural |
| reports.title | Minor | Změň denní záznamy v… | Proměň denní záznamy v… | "proměnit v" is the idiomatic verb |

Checked and kept: all safety negations ("nenahrazuje", "nestanovují diagnózu"), Pro-only PDF export, offline/no-account/on-device claims, "kompletně offline" kept per open product question. Informal "ty" + feminine past forms consistent. Slugs (live) unchanged; all fine. `{languages}` placeholder intact.

Unfixed / needs a human: none
Verdict: ready after fixes
