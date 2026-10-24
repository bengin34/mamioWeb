# ru locale review: 2026-10-24 (original pages + home)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, plus home. Reviewer: site-locale-review skill (model-based; no human native review). Slugs untouched (live, English, not misleading).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …роста, здоровья, прививок, визитов к врачу и напоминаний… | …роста, этапов развития, зубов, здоровья, прививок и визитов к врачу… | Feature list drifted: dropped milestones and teeth, added reminders not in EN |
| home.features.2.body | Critical | Рост, симптомы, температура, лекарства, прививки, визиты к врачу и быстрые заметки | Рост, этапы развития, первые слова, зубы, симптомы, температура, лекарства, прививки и визиты к врачу | Dropped milestones, first words, teeth; invented "quick notes" |
| home.metaDescription | Major | …рост, прививки… | …рост, записи о здоровье, прививки… | "health records" missing |
| home.plans.pro.3 | Major | перцентили роста WHO | перцентили роста ВОЗ | Term consistency with seo.js (ВОЗ used 9x) |
| diaper.title | Major | …быстрый для загруженных смен | …быстрый даже для смены в спешке | "загруженные смены" reads as busy work shifts |
| diaper.sections.0.body | Major | Быстро отметьте тип подгузника | Быстро отметьте, что было в подгузнике | "тип подгузника" reads as diaper brand/kind, not wet/dirty |
| feeding.sections.0.body | Major | в одном рабочем потоке ухода | там же, где вы ведёте остальной уход | Calque of "flow" |
| feeding.lead | Minor | без бумажных заметок | не перебирая разрозненные заметки | EN "juggling notes", not paper |
| pumping.lead | Minor | вашим режимом с молоком было проще управлять | за режимом сцеживания и кормлений было проще следить | Awkward; EN "follow" |
| pumping.faq.2.answer, reminders.faq.0.answer | Minor | других заботах об уходе | других делах по уходу | Awkward |
| sleep.sections.0.body | Minor | Запускайте и сохраняйте сон малыша | Запускайте таймер сна и сохраняйте запись | Odd "start the baby's sleep" |
| sleep.faq.0.answer | Minor | если не включили запись в начале | если не начали отслеживать, когда малыш уснул | Clearer |
| sleep.faq.2.answer, careTimeline.faq.2.answer | Minor | записи … работают офлайн | учёт сна / лента работает офлайн | Records don't "work" |
| home.hero.imageAlt | Minor | баланс грудей | баланс сторон | Consistent with pages |
| home.privacy.title | Minor | Сначала офлайн. | В первую очередь офлайн. | Calque; matches "работает в первую очередь офлайн" |

Checked and kept: вы-register consistent; all "not a diagnosis / does not replace medical advice" negatives intact; Pro statements (PDF reports) match EN; "полностью офлайн" kept per open product question; `{languages}` placeholder intact.

Unfixed / needs a human: none.
Verdict: ready after fixes
