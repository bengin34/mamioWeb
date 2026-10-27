# ro locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Major | …creșterea, sănătatea, vaccinurile, consultațiile la medic și memento-urile… | …creșterea, etapele de dezvoltare, dinții, sănătatea, vaccinurile și consultațiile la medic… | Dropped milestones + teeth, added reminders not in EN |
| home.features[2].body | Major | …vaccinurile, consultațiile și notițele rapide. | …creșterea, etapele de dezvoltare, primele cuvinte, dinții, … vaccinurile și consultațiile. | Dropped milestones, first words, teeth; added "quick notes" |
| home.metaTitle | Major | Aplicație pentru alăptare și îngrijirea bebelușului | Aplicație pentru hrănirea și îngrijirea bebelușului | EN "feeding" (all types), not only breastfeeding |
| home.metaDescription | Major | …creștere, vaccinuri și memento-uri. | …creștere, sănătate, vaccinuri, consultații, memento-uri. (shortened to 175) | Dropped health records + doctor visits |
| home.plans.eyebrow | Major | Gratuită la început | Începi gratuit | Original implied "free at first" (trial), EN means free to start using |
| breastfeeding/feeding/mixedFeeding.faq answers (3x) | Major | Mamio este offline mai întâi | Mamio funcționează în primul rând offline | Calque of "offline-first", ungrammatical |
| home.privacy.title | Major | Mai întâi offline. | Offline în primul rând. | Same calque |
| home.screens[3].title/body | Major | Primele și reperele de dezvoltare / Reperele, … | Primele momente și etapele de dezvoltare / Etapele de dezvoltare, … | File term for milestones is "etape de dezvoltare"; "Primele" alone incomplete |
| home.plans.pro[3] | Minor | percentile de creștere WHO | percentile de creștere OMS | File uses OMS elsewhere |
| reminders.sections[1].title | Minor | Alină încărcarea memoriei | Ușurează-ți memoria | Unidiomatic |
| pumping.faq[2].question, reminders.faq[0].question | Minor | Mă poate Mamio avertiza… | Îmi poate aminti Mamio… | "avertiza" = warn; reminder sense is "a aminti" |
| home.features[1].body | Minor | pozițiile pe burtică | poziția pe burtică | Consistent term |
| home.proof[0].value | Minor | 3:00 AM | 03:00 | 24h clock in Romania |

Checked and kept: safety negations ("nu pun diagnostice", "nu înlocuiesc"), Pro-only PDF, offline/no-account claims, "complet offline" kept per open product question. Live slugs unchanged; none misleading. `{languages}` intact. Note: blog-1.js has the same "avertiza" question (out of scope, not touched).

Unfixed / needs a human: none
Verdict: ready after fixes
