# pt-br locale review: 2026-10-24

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, plus home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …crescimento, saúde, vacinas, consultas e lembretes… | …crescimento, marcos do desenvolvimento, dentes, saúde, vacinas e consultas… | Dropped milestones + teeth, added reminders not in EN list |
| home.features[2].body | Critical | Mantenha crescimento, sintomas, …, consultas e anotações rápidas… | Mantenha crescimento, marcos do desenvolvimento, primeiras palavras, dentes, sintomas, … | Dropped milestones, first words, teeth; invented "quick notes" |
| home.plans.pro[3] | Major | percentis de crescimento da WHO | percentis de crescimento da OMS | Brazil uses OMS; matches growthPercentiles page |
| home.privacy.title | Major | Offline em primeiro lugar. | Feito para funcionar offline. | Calque |
| breastfeeding.faq[1].answer, feeding.faq[2].answer, mixedFeeding.faq[2].answer | Major | O Mamio é offline em primeiro lugar | O Mamio foi feito para funcionar offline | Calque |
| home.privacy.body, feeding.sections[2].body, mixedFeeding.sections[2].body | Minor | consultora(s) | consultora(s) de amamentação | Bare "consultora" ambiguous |
| home.features[5].title | Minor | Privado desde o projeto | Privado por natureza | Calque of "by design" |
| home.proof[0].label | Minor | feito para mamadas sonolentas | feito para as mamadas da madrugada | "Mamadas sonolentas" odd |
| breastfeeding.title | Minor | …para mamadas sonolentas e dias reais. | …para as mamadas da vida real, mesmo com sono. | Same |
| reminders.sections[1].title | Minor | Alivie a carga da memória | Alivie a carga mental | Natural BR phrase |
| sleep.faq[2].answer | Minor | Os registros de sono funcionam offline | O registro de sono funciona offline, e os dados ficam… | Records don't "work" |
| careTimeline.faq[2].answer | Minor | …no seu aparelho e funcionam offline. | …no seu aparelho, e a linha do tempo funciona offline. | Same |

Notes: você register consistent; "tummy time (tempo de bruços)", "ordenha", "papinhas", "linha do tempo", "marcos" consistent with newer pages. No slug changes. "Completely offline" claim kept as in English (open product question). `languages.body` keeps `{languages}`.

Unfixed / needs a human: none
Verdict: ready after fixes
