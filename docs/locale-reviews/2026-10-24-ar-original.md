# ar locale review: 2026-10-24

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, plus home. Reviewer: site-locale-review skill (model-based; no human native review). Slugs untouched (live, English, not misleading).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | …والنمو والصحة والتطعيمات وزيارات الطبيب والتذكيرات… | …وقياسات النمو ومراحل النمو والأسنان والصحة والتطعيمات وزيارات الطبيب… | EN lists milestones and teeth, not reminders; feature list drifted |
| home.features[2].body | Critical | نظّم النمو والأعراض … والملاحظات السريعة في مكان واحد. | نظّم قياسات النمو ومراحل النمو والكلمات الأولى والأسنان والأعراض … في مكان واحد. | Dropped milestones, first words, teeth; added "quick notes" |
| home.metaDescription | Major | …الرضاعة والحفاضات والنوم وشفط الحليب والنمو والتطعيمات… | …الرضاعة الطبيعية والزجاجات والحفاضات والنوم والشفط والنمو والسجلات الصحية والتطعيمات… | Missing bottles and health records; kept under 175 chars |
| breastfeeding.faq[1].answer, feeding.faq[2].answer, mixedFeeding.faq[2].answer | Major | يعمل Mamio بدون إنترنت أولًا | صُمم Mamio ليعمل بدون إنترنت في المقام الأول | "works without internet first" is an unnatural calque of "offline-first" |
| home.privacy.title | Major | بدون إنترنت أولًا. بدون حساب. بدون الاعتماد على خادم. | بدون إنترنت في المقام الأول. بدون حساب. بلا اعتماد على خادم. | Same calque |
| home.screens[3].title | Major | الأوائل والإنجازات | المرات الأولى ومراحل النمو | "الأوائل" reads as "top-ranked"; milestones term aligned with newer pages (مراحل النمو) |
| home.screens[3].body | Major | الإنجازات والنمو والتطعيمات… | مراحل النمو وقياسات النمو والتطعيمات… | Terminology consistency with milestone pages |
| home.plans.pro[3] | Major | رؤى منحنيات النمو WHO | رؤى النسب المئوية للنمو وفق منظمة الصحة العالمية | Latin acronym in Arabic genitive; EN says percentiles; aligned with growthPercentiles page |
| diaper.title | Minor | تتبّع للحفاضات سريع بما يكفي لتغييرات الحفاض المزدحمة. | تتبّع سريع للحفاضات يناسب حتى أكثر لحظات التغيير انشغالًا. | "crowded diaper changes" is odd |
| careTimeline.metaTitle | Minor | الجدول الزمني لرعاية الطفل \| Mamio | تطبيق الجدول الزمني لرعاية الطفل \| Mamio | EN says "App"; matches other metaTitles |

Notes: "works completely offline" kept as in EN (open product question). `{languages}` placeholder intact. Masculine singular address used consistently; left as is.

Unfixed / needs a human: "الجدول الزمني" for "timeline" can also read as "schedule"; used file-wide, left for consistency.
Verdict: ready after fixes
