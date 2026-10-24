# id locale review: 2026-10-24 (original pages)

Scope: breastfeeding, feeding, bottleFeeding, pumping, mixedFeeding, tummyTime, reminders, reports, diaper, sleep, health, careTimeline, home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| reports.*, health.*, reminders.faq[1], careTimeline.faq[0], home (metaDescription, hero.lead, features[2/4], screens[3], plans.free[1], download.body) — 17 lines in seo.js, 7 in home.js | Major | tumbuh kembang | pertumbuhan | "Tumbuh kembang" = growth *and development*; EN is growth (weight/length/head). Reviewed growthPercentiles/multipleBabies pages use "pertumbuhan" |
| home.hero.lead | Major | …pompa ASI, tumbuh kembang, kesehatan, vaksin, kunjungan dokter, dan pengingat… | …pompa ASI, pertumbuhan, milestone, gigi, kesehatan, vaksin, dan kunjungan dokter… | Dropped milestones + teeth, added reminders |
| home.features[2].body | Major | Simpan tumbuh kembang, gejala, … dan catatan singkat… | Simpan pertumbuhan, milestone, kata pertama, gigi, gejala, … dan kunjungan dokter… | Dropped milestones, first words, teeth |
| home.metaDescription | Minor | …tumbuh kembang, vaksin… | …pertumbuhan, kesehatan, vaksin… | "health records" missing (kept under length limit) |
| home.screens[3].title/body | Minor | tonggak perkembangan | milestone | Match term on reviewed development page |
| home.features[1], screens[1], plans.free[0]; breastfeeding.faq[2] | Minor | makanan padat | MPASI | File-wide term for solids is MPASI |
| sleep.lead | Major | …bukan mencatat tidur sendirian. | …bukan mencatat tidur secara terpisah. | "sendirian" = (person) alone; EN "in isolation" |
| breastfeeding.title | Minor | Mencatat menyusui untuk sesi yang nyata dan serba mengantuk. | Catat menyusui di dunia nyata, bahkan saat sedang mengantuk. | Awkward |
| diaper.title | Minor | …untuk ganti popok yang sibuk. | …bahkan saat ganti popok sedang repot. | Literal "busy changes" |
| tummyTime.sections[0].title | Minor | Tangkap sesi-sesi kecil | Catat sesi-sesi singkat | Calque of "capture" |

Slugs: all live, kept. `reports` slug `laporan-tumbuh-kembang-dokter` still says "tumbuh kembang"; not misleading enough to break a live URL. All other product facts intact.

Unfixed / needs a human: whether "tumbuh kembang" (higher search volume in Indonesia) should be kept in the reports metaTitle purely for SEO; changed for accuracy here.
Verdict: ready after fixes
