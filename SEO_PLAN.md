# Mamio SEO Plan

## Sprint 1 implemented

- Added indexable EN/TR feature pages for breastfeeding, baby feeding, diaper tracking, baby sleep, and baby health records.
- Added homepage internal links to the new SEO pages for crawl discovery.
- Updated postbuild generation so every SEO page gets localized static HTML, canonical tags, reciprocal hreflang tags, structured data, and sitemap entries.
- Verified with `npm run build` and `npm run lint`.

## Launch foundation

- Point `mamio-baby-tracker.com` to the static host and force HTTPS.
- Publish the localized routes: `/` as x-default, plus `/en/`, `/de/`, and `/tr/`.
- Keep the existing `hreflang`, canonical tags, `robots.txt`, and `sitemap.xml` in sync when new languages or pages are added.
- Keep the App Store URL wired into the main CTA, footer link, and SoftwareApplication structured data.

## Core keyword map

- English: `baby feeding tracker`, `breastfeeding tracker`, `baby care tracker`, `diaper tracker`, `offline baby tracker`.
- German: `Baby Tracker`, `Still Tracker`, `Baby Pflege App`, `Windel Tracker`, `Baby Schlaf Tracker`.
- Turkish: `bebek takip uygulaması`, `emzirme takip uygulaması`, `bebek bakım takibi`, `bez takip uygulaması`, `bebek uyku takibi`.

## Page plan

- Homepage: broad product positioning, privacy, screenshots, Free vs Pro, language support.
- `/features/breastfeeding-tracker/`: breastfeeding timer, left/right side, side balance, missed sessions.
- `/features/baby-care-timeline/`: bottles, diapers, solids, sleep, pumping, and daily timeline.
- `/features/health-growth/`: growth, vaccines, symptoms, medication, doctor visits, PDF reports.
- `/privacy/`: offline-first data ownership, local storage, no account required.
- `/support/`: FAQ, export reports, subscription basics, and contact.

## Content plan

- Publish 3 to 5 practical articles per language around parent search intent:
  - "How to track newborn feeds without overthinking it"
  - "Breastfeeding side balance: what to record and why"
  - "When diaper color should be monitored"
  - "Preparing a baby health report for a doctor visit"
- Keep medical language careful: explain that Mamio helps record care events and does not replace medical advice.

## Technical SEO checklist

- Keep each localized route self-canonical.
- Add reciprocal `hreflang` entries for every translated page.
- Use one clear H1 per page and descriptive H2 sections.
- Compress screenshots and add descriptive alt text.
- Submit the sitemap in Google Search Console after DNS is live.
- Monitor indexed pages, Core Web Vitals, image weight, and search queries monthly.

References:

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google localized versions / hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google structured data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
