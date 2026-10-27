# pt locale review: 2026-10-24

Scope: 12 original live pages (breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline) + home. Reviewer: site-locale-review skill (model-based; no human native review). No slugs changed.

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …crescimento, saúde, vacinas, consultas e lembretes… | …crescimento, marcos, dentes, saúde, vacinas e consultas… | EN lists milestones and teeth; target dropped them and added reminders |
| home.features[2].body | Critical | …vacinas, consultas e notas rápidas… | …crescimento, marcos, primeiras palavras, dentes, … vacinas e consultas… | Dropped milestones, first words, teeth; added "quick notes" |
| breastfeeding.title | Major | …para mamadas de sono pesado e do dia a dia. | …para as mamadas reais, mesmo as da madrugada. | "sono pesado" = deep sleep; mistranslates "sleepy feeds" |
| home.proof[0].label | Major | pensado para mamadas de sono pesado | pensado para as mamadas da madrugada | Same |
| breastfeeding.faq[1].answer, feeding.faq[2].answer, mixedFeeding.faq[2].answer | Major | funciona primeiro offline | foi pensado para funcionar offline | Calque of "offline-first" |
| home.privacy.title | Major | Primeiro offline. | Pensado para funcionar offline. | Same calque |
| home.plans.pro[3] | Major | percentis de crescimento da WHO | percentis de crescimento da OMS | pt-PT uses OMS; consistent with growthPercentiles page |
| home.hero.primaryCta, home.download.cta | Minor | Transferir na App Store | Descarregar na App Store | Apple's pt-PT badge wording |
| home.metaDescription | Minor | …crescimento, vacinas… | …crescimento, registos de saúde, vacinas… | Health records missing |
| home.proof[0].value | Minor | 3:00 AM | 3:00 | AM is English style |

Unfixed / needs a human: "completely offline" kept as in English (open product question). "tempo de barriga para baixo" is long but consistent with newer pages; left.
Verdict: ready after fixes
