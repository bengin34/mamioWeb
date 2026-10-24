# uk locale review: 2026-10-24 (original pages + home)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, plus home. Reviewer: site-locale-review skill (model-based; no human native review). Slugs untouched (live, English, not misleading).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …росту, здоров'я, щеплень, візитів до лікаря та нагадувань… | …росту, віх розвитку, зубів, здоров'я, щеплень і візитів до лікаря… | Dropped milestones and teeth, added reminders |
| home.features.2.body | Critical | Ріст, симптоми, … та швидкі нотатки | Ріст, віхи розвитку, перші слова, зуби, симптоми, … візити до лікаря | Dropped milestones, first words, teeth; invented "quick notes" |
| home.metaDescription | Major | …ріст, щеплення… (годування та догляду) | …ріст, медичні записи, щеплення… (догляду; trimmed to ≤175) | "health records" missing; length limit |
| home.plans.pro.3 | Major | за WHO | за ВООЗ | Consistency with seo.js (ВООЗ 8x) |
| diaper.title, diaper.sections.0.title | Major | переодягань / переодягання | зміни підгузка | "переодягання" = changing clothes |
| diaper.sections.0.body | Major | вказуйте тип підгузка | позначайте, що було в підгузку | "type" reads as diaper kind, not wet/dirty |
| diaper.sections.1.body | Major | обговорювати турботи | обговорювати свої занепокоєння | "турботи" = chores/cares, not concerns |
| feeding.title | Major | місце для грудей, пляшечки… | місце для грудного вигодовування, пляшечки… | "for breasts" |
| breastfeeding.metaDescription, home.features.0.body | Major | за боками / за грудьми | з лівої та правої груди | Calque |
| feeding.sections.0.body | Major | в межах одного процесу догляду | там само, де ви ведете весь догляд | Calque of "flow" |
| mixedFeeding.title, mixedFeeding.metaDescription | Minor | Груди, пляшечка… | Грудне вигодовування, пляшечка… | Odd "breasts" |
| breastfeeding.title | Minor | сонних, справжніх годувань | сонних годувань у реальному житті | Awkward |
| breastfeeding.faq.2.question | Minor | вести облік пляшечки теж | відстежувати й годування з пляшечки | Awkward |
| pumping.lead | Minor | ваш режим молока | режимом зціджування й годувань | Awkward |
| pumping.sections.2.title/body | Minor | Користуйтеся нагадуваннями м'яко / легкого підштовхування | Делікатні нагадування / щоб вам нагадали | Calques |
| diaper.sections.2.body | Minor | полегшує помічати | з нею легше помічати | Grammar |
| sleep.sections.1.body | Minor | Сон набуває сенсу | Сон зрозуміліший | "gains meaning" |
| sleep.faq.2.answer, careTimeline.faq.2.answer | Minor | записи … працюють офлайн | облік / стрічка працює офлайн | Records don't "work" |
| careTimeline.bullets.2 | Minor | Один перегляд для всього дня | Увесь день на одному екрані | Calque |
| home.intro.title | Minor | розумовим безладом | безлад у голові | Calque |
| home.features.5.title | Minor | Приватність за задумом | Приватність закладено в основу | Calque |
| home.privacy.title | Minor | Спершу офлайн. | Насамперед офлайн. | Matches "працює насамперед офлайн" |
| 9 fields (seo.js + home.js) | Minor | " - " | " — " | Ukrainian dash typography |

Checked and kept: ви-register consistent; "баланс грудей" kept (used consistently); all medical-disclaimer negatives intact; Pro statements match EN; "повністю офлайн" kept per open product question; `{languages}` placeholder intact.

Unfixed / needs a human: none.
Verdict: ready after fixes
