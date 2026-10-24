# nl locale review: 2026-10-24

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline + home (original, live pages; slugs unchanged). Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | major | voeding, luiers, slaap, kolven, groei, gezondheid, vaccinaties, artsbezoeken en herinneringen | voeding, luiers, slaap, kolven, groei, mijlpalen, tandjes, gezondheid, vaccinaties en artsbezoeken | Dropped milestones and teeth, added reminders; feature list must match EN |
| home.features[2].body | major | groei, klachten, temperatuur, medicijnen, vaccinaties, artsbezoeken en snelle notities | groei, mijlpalen, eerste woordjes, tandjes, klachten, temperatuur, medicijnen, vaccinaties en artsbezoeken | Dropped milestones, first words, teeth; invented "quick notes" |
| breastfeeding/feeding/mixedFeeding.faq (3x) | major | Mamio werkt eerst offline | Mamio werkt in de eerste plaats offline | Literal calque of "offline-first", reads as "works offline first (then online)" |
| breastfeeding/feeding/bottleFeeding/pumping/mixedFeeding/tummyTime/diaper/sleep .shortTitle/.eyebrow/.imageAlt (+feeding/sleep metaDescription) | minor | Borstvoeding tracker, Kolven tracker, Luier tracker, Babyslaap tracker, Babyvoeding tracker, Gecombineerde voeding tracker, Buikligtijd tracker... | Borstvoedingstracker, Kolftracker, Luiertracker, Babyslaaptracker, Voedingstracker voor je baby, Tracker voor gecombineerde voeding, Buikligtijd bijhouden... | Split compounds are a Dutch spelling error; "babyvoeding" also reads as baby food/formula |
| pumping.metaTitle | minor | Kolven Tracker App | Kolftracker App | Ungrammatical compound |
| mixedFeeding.metaTitle | minor | Gecombineerde Voeding Tracker App | Gecombineerde voeding bijhouden: tracker-app | Ungrammatical word order |
| breastfeeding.title | minor | Borstvoeding bijhouden bij slaperige voedingen in het echte leven. | Borstvoeding bijhouden zoals het echt gaat, ook bij slaperige nachtvoedingen. | Literal, clunky |
| breastfeeding.lead | minor | borstvoedinggeschiedenis | borstvoedingsgeschiedenis | Missing linking -s |
| breastfeeding.sections[1].body | minor | Recente notities helpen | Recente invoer helpt | "entries", not "notes" |
| diaper.title | minor | Luiers bijhouden dat snel genoeg is voor... | Luiers bijhouden, snel genoeg voor... | Ungrammatical relative clause |
| home.features[5].title | minor | Privé door ontwerp | Ontworpen voor privacy | Calque |
| home.features[4].title | minor | Patronen zonder overweldiging | Patronen, zonder dat het te veel wordt | Unnatural noun |
| home.proof[0].value | minor | 3:00 uur 's nachts | 3 uur 's nachts | "3:00 uur" redundant |
| home.privacy.title | minor | Eerst offline. | Offline voorop. | Calque |
| home.download.eyebrow | minor | Haal Mamio | Download Mamio | Unnatural |

Not changed: metaTitles in "X Tracker App" keyword style (consistent with the already reviewed newer pages); all slugs (live; none misleading); "toestel" (fine in NL); "completely offline" kept as "volledig offline" per open product question.

Unfixed / needs a human: none
Verdict: ready after fixes
