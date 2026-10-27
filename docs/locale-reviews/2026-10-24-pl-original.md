# pl locale review: 2026-10-24

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline + home (original, live pages; slugs unchanged). Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | major | ...wzrostu, zdrowia, szczepień, wizyt u lekarza i przypomnień | ...wzrostu, kamieni milowych, ząbków, zdrowia, szczepień i wizyt u lekarza | Dropped milestones and teeth, added reminders |
| home.features[2].body | major | Wzrost, objawy, temperatura, leki, szczepienia, wizyty u lekarza i szybkie notatki | Wzrost, kamienie milowe, pierwsze słowa, ząbki, objawy, temperatura, leki, szczepienia i wizyty u lekarza | Dropped milestones, first words, teeth; invented "quick notes" |
| home.features[4].body | major | wskazówki dotyczące wzrostu | dane o wzroście | "wskazówki" = guidance/advice; EN "growth insights" is not advice |
| sleep.lead | major | żebyś rozumiała... śledziła | żeby dzień było widać jako całość, a sen nie był śledzony... | Feminine 2nd person; rest of file is gender-neutral |
| feeding.shortTitle/eyebrow/imageAlt | major | Monitor karmienia dziecka | Aplikacja do karmienia dziecka | "monitor" reads as a hardware device (baby monitor); matches the other pages' "Aplikacja do..." pattern. Slug left as is |
| home.metaDescription | minor | ...szczepień i wizyt u lekarza. | ...szczepień, wizyt u lekarza i przypomnień. | Reminders missing vs EN |
| feeding.sections[0].body | minor | w jednym przepływie opieki nad dzieckiem | w jednym miejscu | Calque of "flow" |
| feeding.sections[1].title | minor | na raz | naraz | Spelling |
| breastfeeding.title | minor | dla sennych, prawdziwych karmień | na senne noce i prawdziwe życie | Unnatural |
| bottleFeeding.title | minor | Śledź karmienie butelką wyraźnie, nawet w pracowite dni. | Przejrzyście zapisuj karmienie butelką, nawet w zabiegane dni. | Unnatural adverb |
| reminders/sleep/careTimeline | minor | pracowite/pracowity/pracowitych | zabiegane/zabiegany/zabieganych | "busy" day = zabiegany |
| diaper.title | minor | Śledzenie pieluszek, które jest wystarczająco szybkie przy każdej zmianie. | Zapisywanie pieluszek na tyle szybkie, że zdążysz przy każdej zmianie. | Clunky |
| home.footer.tagline | minor | Prosto. Cicho. Rzetelnie. | Prosto. Spokojnie. Rzetelnie. | "Cicho" = silent |

Not changed: all slugs (live; "monitor-karmienia-dziecka" is odd but not actively misleading, so kept); "Najpierw offline" (acceptable); "całkowicie offline" kept per open product question.

Unfixed / needs a human: feeding slug "monitor-karmienia-dziecka" could be renamed with a redirect if ever desired.
Verdict: ready after fixes
