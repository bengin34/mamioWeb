# Security audit — mamioWeb (2026-11-10)

**Coverage: partial (quick profile).** No prior ledger existed for this repo. This is a first, bounded source-only pass; it does not claim the rest of the site is clean. The pass was done by one parent reviewer, not by independent hunter and verifier subagents, so each record has had a single review only.

Source: `bengin34/mamioWeb` at the commit in `run-metadata.json`. Source and lockfile only; no site code was run and no deployed endpoint was contacted. `npm audit` read the lockfile.

## Result

| Verdict | Count |
|---|---|
| confirmed critical / high / medium / low | 0 |
| needs_validation | 1 |
| rejected | 5 |

No confirmed vulnerability. Nothing to fix in code, so this PR only adds the report.

## Surface summary

Static React SPA built by Vite and deployed to GitHub Pages. No backend, forms, API calls, auth, cookies or storage. URL input only selects among static locale and page ids. No HTML sinks (`dangerouslySetInnerHTML`, `innerHTML`, `eval`, `document.write`) in `src/`. All 8 `target=_blank` links carry `rel="noreferrer"`. No third-party scripts; the only third-party load is a Google Fonts stylesheet.

Secrets: all 89 commits on all refs scanned for AWS, GitHub, OpenAI/Stripe-style, Slack, Google API, JWT and PEM patterns, and for committed `.env`, `.p8`, `.p12`, `.pem`, `.key`, `.keystore`, `.jks`, `auth.json` paths: 0 hits. No secret in git history, so no rotation is needed.

## needs_validation

- `mamioweb:headers:no-csp-github-pages` — No CSP/HSTS/frame headers defined in the repo; GitHub Pages cannot set them, and a CDN in front of the custom domain is not visible from source. Owner check: `curl -sI https://mamio-baby-tracker.com/en/`. Low impact (no user data). See `NEEDS-VALIDATION.md`.

## rejected (kept so they are not re-raised)

- `mamioweb:open-redirect:index-locale-redirect` — target is `"/" + allowlisted locale + "/"` plus search/hash, same origin.
- `mamioweb:reverse-tabnabbing:store-links` — `rel="noreferrer"` implies noopener.
- `mamioweb:deps:npm-audit-dev-only` — 7 high / 1 moderate advisories, all in build/dev tooling not shipped in `dist/`. Hygiene only: `npm audit fix` is available.
- `mamioweb:ci:actions-pinned-by-tag` — first-party actions only, least-privilege token, no untrusted triggers.
- `mamioweb:third-party:google-fonts-css` — stylesheet only; cannot execute script.

## Not covered

`scripts/*.mjs` other than `postbuild.mjs` (owner-run dev tools), deep/standard profile, live header probing, the mamio mobile app.
