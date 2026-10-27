# fr locale review: 2026-10-24

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, plus home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …la croissance, la santé, les vaccins, les rendez-vous médicaux et les rappels… | …la croissance, les étapes du développement, les dents, la santé, les vaccins et les rendez-vous médicaux… | Dropped milestones + teeth, added reminders not in EN list |
| home.features[2].body | Critical | …la croissance, les symptômes, …, les rendez-vous médicaux et tes notes rapides. | …la croissance, les étapes du développement, les premiers mots, les dents, les symptômes, … | Dropped milestones, first words, teeth; invented "quick notes" |
| home.privacy.title | Major | Hors ligne d'abord. | Pensé pour le hors-ligne. | Calque of "offline first" |
| breastfeeding.faq[1].answer, feeding.faq[2].answer, mixedFeeding.faq[2].answer | Major | Mamio fonctionne d'abord hors ligne | Mamio est pensé pour fonctionner hors ligne | Calque; reads as "works offline first, then…" |
| home.privacy.body, feeding.sections[2].body, mixedFeeding.sections[2].body | Minor | une consultante / les consultantes | une consultante en lactation | Bare "consultante" is ambiguous in French |
| home.features[5].title | Minor | Confidentiel par conception | Confidentiel par nature | Calque of "by design" |
| tummyTime.sections[0].body | Minor | construis peu à peu une image douce des progrès du jour | vois peu à peu se dessiner les progrès au fil des jours | Odd image; EN = progress over time |
| sleep.faq[2].answer | Minor | Les données de sommeil fonctionnent hors ligne | Le suivi du sommeil fonctionne hors ligne et les données restent… | Data don't "work" |
| careTimeline.faq[2].answer | Minor | …sur ton appareil et fonctionnent hors ligne. | …sur ton appareil et la chronologie fonctionne hors ligne. | Same |

Notes: tutoiement consistent; "temps sur le ventre", "chronologie", "tire-lait", OMS consistent with newer pages. No slug changes. "Completely offline" claim kept as in English (open product question). `languages.body` keeps `{languages}`.

Unfixed / needs a human: none
Verdict: ready after fixes
