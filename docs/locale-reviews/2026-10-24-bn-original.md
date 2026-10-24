# bn locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline + home. Reviewer: site-locale-review skill (model-based; no human native review). Slugs untouched (all English, live).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Critical | বৃদ্ধি, স্বাস্থ্য, টিকা, ডাক্তারের ভিজিট আর রিমাইন্ডার | বৃদ্ধি, মাইলস্টোন, দাঁত, স্বাস্থ্য, টিকা আর ডাক্তারের ভিজিট | Dropped milestones + teeth, added reminders |
| home.features[2].body | Critical | বৃদ্ধি, উপসর্গ, …, ডাক্তারের ভিজিট আর ছোট নোট | বৃদ্ধি, মাইলস্টোন, প্রথম কথা, দাঁত, উপসর্গ, …, টিকা আর ডাক্তারের ভিজিট | Dropped milestones, first words, teeth; added notes |
| home.features[0].body | Major | বোতলে কত মিলি | বোতলে কতটা | Added a unit (ml) EN doesn't state |
| home.features[4].body | Major | ডায়াপারের ধরন | ডায়াপারের প্রবণতা | "ধরন" = type; EN is trends |
| home.screens[4].body | Major | চিন্তার মতো ডায়াপারে ব্যক্তিগত ছবি যোগ করুন | ডায়াপারে দুশ্চিন্তার মতো কিছু দেখলে ব্যক্তিগত ছবি যোগ করুন | Ungrammatical calque |
| home.privacy.title | Major | আগে অফলাইন। | অফলাইন-ফার্স্ট। | Calque "offline earlier"; file term is অফলাইন-ফার্স্ট |
| home.hero.imageAlt | Minor | কোন পাশ, এবং | পাশের ভারসাম্য ও | Side balance, consistent with seo pages |
| home.features[0].title | Minor | সহজ থাকা খাওয়ানোর হিসাব | খাওয়ানোর সহজ হিসাব | Calque |
| home.languages.body | Minor | অ্যাপটি সমর্থন করে {languages}। | অ্যাপটি এই ভাষাগুলোতে পাওয়া যায়: {languages}। | Unnatural verb-first order; placeholder kept |
| breastfeeding.metaDescription | Minor | (missing) | পাশের ভারসাম্য দেখুন | Dropped "review side balance" |
| breastfeeding.faq[0].question, bottleFeeding.faq[1].question | Minor | … ঘটার পরে | … শেষ হওয়ার পরে / হয়ে যাওয়ার পরে | "ঘটা" (occur) unnatural for a feed |
| diaper.title | Minor | ব্যস্ত ডায়াপার বদলানোর সময়ের জন্য যথেষ্ট দ্রুত … | এত দ্রুত ডায়াপার ট্র্যাকিং যে তাড়াহুড়োর ডায়াপার বদলেও কাজে আসে। | Calque |
| sleep.sections[0].title | Minor | ঘুম ঘটার সময়ই লিখুন | ঘুমের সময়ই লিখে রাখুন | Awkward |
| health.sections[2].body | Minor | চিকিৎসা রোগ নির্ণয় দেয় না | রোগ নির্ণয় করে না | Clunky; negation kept |

Checked, no change: register (আপনি, neutral passive FAQs) consistent; Pro claims intact; diagnosis/medical-advice negations intact; tummy time "নজরদারিতে" kept (used site-wide incl. reviewed pages); `{languages}` present.

Unfixed / needs a human: Latin digits (3:00, 28টি) vs Bengali numerals — left, consistent across file. "completely offline" kept per open product question.
Verdict: ready after fixes
