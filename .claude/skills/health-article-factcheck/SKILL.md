---
name: health-article-factcheck
description: Fact-check, source-verify and fix a researched Mamio guide in src/articles/<id>.js (en, de, fr, pt-br, tr) before it is published. Opens every cited source, checks each health claim, number, age range, red-flag list and emergency number against the official page, adds missing local official sources, removes or rewrites anything unsupported, checks Mamio product claims against the app facts, and records the result. Use before registering an article in src/articles/index.js, when asked to "fact-check", "kaynakları doğrula", "makaleyi kontrol et", "verify sources", or when an article draft was written without being able to fetch its sources. Run one fresh agent per article; the writer of an article must not fact-check it.
---

# Health article fact-check

Mamio's guides are YMYL health content read by tired parents. A wrong threshold or a softened red flag can cause harm. Your job is to make every claim in the article traceable to an official page you have actually opened, in every language.

## Hard requirements

- **Fetch every source URL** (WebFetch). A source you could not open is not a source. If fetching is blocked (DNS errors, proxy 403), **stop**: do not verify from search snippets, and report `BLOCKED` with the host names. The orchestrator then asks the user to allow those domains under the environment's Network access settings.
- Only official or professional bodies count: WHO, AAP/HealthyChildren.org, CDC, NHS (incl. NHS trusts for practical detail only), NICE, AAPD/ADA, FDA; DE: BIÖG/kindergesundheit-info.de, Kinderärzte im Netz (BVKJ), Netzwerk Gesund ins Leben, DGKJ, RKI/STIKO, G-BA; FR: Santé publique France, 1000-premiers-jours.fr, mpedia.fr (AFPA), ameli.fr, HAS, SFP, Inserm; BR: Ministério da Saúde (gov.br, Caderneta da Criança), SBP; TR: T.C. Sağlık Bakanlığı (saglik.gov.tr and its hospitals), Türkiye Milli Pediatri Derneği, Türk Pediatri Kurumu, university hospital pages only when no national page exists. Never blogs, brands, forums, Wikipedia, or class providers.
- Each language needs at least 3 sources, and **local official sources for de, fr, pt-br, tr** whenever such a page exists for the topic. If local guidance differs from global guidance, the local language follows local guidance and says the guidance differs.

## What to check, claim by claim

1. Extract every factual claim per language: numbers, ages, durations, temperatures, doses (there must be none), "normal" ranges, red flags, "when to call a doctor", emergency numbers, safety rules (sleep, oils, walkers, honey, gels, necklaces), statements about what a body recommends.
2. For each claim find the sentence on an opened source page that supports it. Record `claim → source URL → supporting quote (short)`.
3. Unsupported claim: find a supporting official page, or rewrite it to what the sources do say, or delete it. Do not keep "general advice" that no official page states if it involves health or safety.
4. Red-flag and emergency lists must match the official source in meaning and completeness. Do not shorten them into something weaker. Emergency numbers: en "your local emergency number (999 in the UK, 911 in the US)", de 112 (116 117 for out-of-hours non-emergencies), fr 15 or 112, pt-br SAMU 192, tr 112.
5. Source metadata: the `title` must be the page's real title; `publisher` the body; no URL that redirects to a generic home page.
6. Mamio claims: only what is in the "Product facts" list of `.claude/skills/site-locale-review/SKILL.md`. At most 2–3 mentions per language. Never say a Pro feature is free.
7. Language quality: the five languages must say the same thing medically, except for the deliberate local differences you documented. Read each as a native parenting editor: natural, correct terms, correct register (de du, fr vous, pt-br você, tr sen).

## Fix and validate

- Edit only `src/articles/<id>.js`. Keep the same section count in every language.
- Set `reviewed` to today's date in every language once the check passes.
- Run `node scripts/check-article.mjs <id>` until it prints OK.
- Write `docs/article-reviews/<id>.md`:

```markdown
# <id>: fact-check <date>

Sources opened: <n>. Claims checked: <n>. Changed: <n>. Removed: <n>.

## Claims by language
| Lang | Claim | Source | Status (ok / rewritten / removed) |

## Local vs global differences
## Open questions for a clinician (if any)
Verdict: publish | publish after fixes (done) | do not publish (why)
```

- Report back: verdict, counts, the riskiest changes.

The orchestrator registers the article in `src/articles/index.js` only after a `publish` verdict, then runs `node scripts/validate-locales.mjs`, `npm run lint` and `npm run build`.
