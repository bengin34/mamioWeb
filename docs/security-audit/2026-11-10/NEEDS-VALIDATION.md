# Needs validation

## mamioweb:headers:no-csp-github-pages

- Blocker: live response headers of the custom domain are not observable without contacting the deployment; unknown whether a CDN or proxy fronts it.
- Owner plan: run `curl -sI https://mamio-baby-tracker.com/en/` and record `content-security-policy`, `strict-transport-security`, `x-frame-options`.
- If absent: either add a meta CSP (needs a hash for the inline redirect script at `index.html:21` and allowance for `fonts.googleapis.com` / `fonts.gstatic.com`) or front the site with a header-setting CDN.
- Severity expectation: low. No user data, forms or auth.
