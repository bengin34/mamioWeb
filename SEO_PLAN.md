# Mamio SEO Plan

## Sprint 1 implemented

- Added indexable EN/TR feature pages for breastfeeding, baby feeding, diaper tracking, baby sleep, and baby health records.
- Added homepage internal links to the new SEO pages for crawl discovery.
- Updated postbuild generation so every SEO page gets localized static HTML, canonical tags, reciprocal hreflang tags, structured data, and sitemap entries.
- Added root-page browser language routing so visitors landing on `/` are sent to `/en/`, `/de/`, or `/tr/` based on their browser or laptop language preference.
- Verified with `npm run build` and `npm run lint`.

## Sprint 2 implemented

- Added a localized homepage guide section that links every existing EN/DE/TR blog article through normal anchors.
- Linked SEO feature pages to their most relevant localized blog guides, such as breastfeeding pages to side-balance and newborn-feed articles.
- Added postbuild static fallback internal links so generated home and feature HTML exposes tracker, guide, and support links before JavaScript runs.
- Verified with `npm run build` and `npm run lint`.

## Sprint 3 implemented

- Added localized EN/DE/TR landing pages for the next high-intent growth clusters: bottle feeding tracker, pumping tracker, mixed feeding tracker, tummy time tracker, vaccine/medication reminders, and growth/doctor visit reports.
- Connected the new cluster pages to the existing static generation flow so each gets canonical tags, reciprocal hreflang tags, structured data, fallback links, and sitemap entries.
- Linked the new tracker pages to the closest existing parent guides while leaving room for dedicated cluster articles.

## Sprint 4 implemented

- Added dedicated EN/DE/TR blog guides for bottle feeding logs, pumping output, mixed feeding routines, tummy time progress, vaccine/medication reminders, and growth/doctor visit reports.
- Updated feature-to-guide relationships so the new landing pages surface their matching articles and broad feeding/health/care pages expose stronger cluster coverage.
- Added static guide-to-tracker links in generated blog HTML, creating crawlable internal links from every new article back to its matching landing page.

## Next SEO priorities

1. Submit and monitor Search Console
   - Verify `mamio-baby-tracker.com` in Google Search Console.
   - Submit `https://mamio-baby-tracker.com/sitemap.xml`.
   - Check indexing, crawl errors, Core Web Vitals, and top queries weekly during launch.

2. Expand localized landing pages
   - Add Spanish, French, Italian, Portuguese, Arabic, Hebrew, Japanese, Korean, Hindi, Russian, and Ukrainian only when the website content is translated with the same quality as the app.
   - After each language is added, update `locales`, screenshots, `hreflang`, sitemap generation, and the browser-language redirect allowlist.

3. Build keyword-focused content clusters
   - Add secondary long-tail guides for breastfeeding timer, bottle amounts by age intent, pumping schedule support, medication log exports, and doctor visit checklist queries.
   - Add more cross-links between sibling guides inside the same cluster once article volume grows.
   - Keep medical/developmental language careful: Mamio records observations and reminders; clinicians provide advice.

4. Improve conversion signals
   - Add store badges or platform-specific download sections once both App Store and Google Play pages are final.
   - Add App Store rating/review snippets only if they are accurate and can be kept current.
   - Add support, privacy, and offline-data claims consistently on every high-intent landing page.

5. Measure technical quality
   - Keep screenshots compressed and verify LCP image weight after each redesign.
   - Test mobile layout, structured data, canonical tags, and reciprocal `hreflang` after every build.
   - Avoid thin pages: every new SEO page should answer a real parent search intent with useful, non-medical-advice content.

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
