# SEO health log

## 2026-11-24
Crawl (1184 URLs, 594 issues): FATAL 0 · REVENUE 441 (THIN 438, dup title 1, dup desc 2) · FLUFF 153.
GSC: not queried (no access check run this pass).
Fixed: trimmed over-long home meta descriptions (en, tr, pt, ro, uk, id, sw).
Not issues (crawler artifacts): fr/uk/ja "short" descriptions and fr duplicate description (apostrophe truncates the crawler's regex; real descriptions are full and distinct); `/` vs `/en/` same title/description (root is x-default, own canonical); `/impressum/` not in sitemap (noindex by design).
Left: THIN prerendered landing pages (~100-145 words, 438 URLs; needs a content-template change), CJK descriptions under 50 chars (normal for CJK), blog titles 71-77 chars (52), native review of translations.
