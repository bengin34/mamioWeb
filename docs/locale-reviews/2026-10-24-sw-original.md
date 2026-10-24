# sw locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline + home. Reviewer: site-locale-review skill (model-based; no human native review). Slugs untouched (Swahili slugs are live and not misleading).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | ukuaji, afya, chanjo, ziara za daktari na vikumbusho | ukuaji, hatua za ukuaji, meno, afya, chanjo na ziara za daktari | Dropped milestones + teeth, added reminders |
| home.features[2].body | Critical | ukuaji, dalili, …, ziara za daktari na maelezo mafupi | ukuaji, hatua za ukuaji, maneno ya kwanza, meno, dalili, …, chanjo na ziara za daktari | Dropped milestones, first words, teeth; added notes |
| feeding.lead | Major | kilichofuata | kilichokuwa cha mwisho | "what followed" ≠ "what came last" |
| breastfeeding.faq[1], feeding.faq[2], mixedFeeding.faq[2] answers | Major | hufanya kazi bila intaneti kwanza | imeundwa kufanya kazi bila intaneti | "works without internet first" calque |
| home.privacy.title | Major | Bila intaneti kwanza. | Imeundwa kufanya kazi bila intaneti. | Same calque |
| diaper.title | Major | … wakati wa kubadilisha kwa pupa. | Kufuatilia nepi kwa haraka, hata wakati wa kubadilisha nepi kwa pilikapilika. | "pupa" = greed/rashness |
| diaper.sections[0].title | Major | Rekodi mabadiliko ndani ya sekunde | Rekodi nepi ndani ya sekunde chache | "mabadiliko" = alterations, not diaper changes |
| home.screens[4].body | Major | kwenye mabadiliko ya nepi yanayokutia wasiwasi | za nepi zinazokutia wasiwasi | Same calque |
| home.metaDescription | Minor | (missing) | rekodi za afya | Dropped "health records" |
| breastfeeding.metaDescription | Minor | (missing) | kagua usawa wa pande | Dropped "review side balance" |
| breastfeeding.title, home.proof[0].label | Minor | milisho … ya usingizini / mlisho wa usingizini | … hata ukiwa na usingizi / milisho ukiwa na usingizi | Ungrammatical |
| pumping.sections[1].body | Minor | kuna maana zaidi likiwa | … kukiwa | Noun-class agreement (ku-) |
| tummyTime.sections[2].body | Minor | mahali kinapoingia | mahali kunapoingia | Agreement |
| careTimeline.lead | Minor | ili hakuna kitu kinachopotea | ili usipitwe na chochote | Needs subjunctive |
| health.faq[1].question | Minor | Naweza kutoa rekodi? | Naweza kutoa rekodi kutoka Mamio? | "kutoa" alone can read "remove"; matches blog phrasing |
| home.plans.eyebrow | Minor | Bure kuanza | Anza bure | Natural order |

Checked, no change: Pro claims intact; diagnosis/medical-advice negations intact; "Saa 9:00 usiku" correct Swahili time for 3 AM; `{languages}` present; "ratiba" (timeline) and "mifumo" (patterns) kept for file-wide consistency.

Unfixed / needs a human: tummy time = "kulala kifudifudi" site-wide (live slug kufuatilia-kulala-kifudifudi, blog, reviewed newer pages). "kulala" also means "sleep", so it can read as "sleeping face-down", the unsafe SIDS position. Text mostly qualifies it with "vinavyosimamiwa" (supervised). Native reviewer should decide whether to change to e.g. "muda wa kucheza kwa tumbo" across all sw files; not changed here because slug is live and term is shared. "completely offline" kept per open product question.
Verdict: ready after fixes (human check of tummy-time term recommended)
