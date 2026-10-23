# Review notes — de-DE / allergene-einfuehren (`beikost-allergene`)

Draft status: DRAFT. `reviewedBy` empty → "Dieser Artikel ist noch in fachlicher Prüfung."
This is the most consequential of the three Beikost pages so far: it tells parents to *introduce*
allergens, and one of its recommendations (peanut) has a hard precondition. Please read it closely.

Sources: 3 × Tier-1 German (S3-Leitlinie Allergieprävention, BIÖG, Netzwerk Gesund ins Leben)
+ 1 × Tier-2 (ESPGHAN 2017). 1,322 words, 4 sources, 30 mapped claims.

## Two things that must be checked before this page goes live

1. **Guideline validity.** The BIÖG page lists the S3 guideline as "Update 2022. gültig bis
   1.1.2026" — a date that has already passed. The AWMF register (register.awmf.org) is behind a
   bot challenge and neither the detail page nor the PDF assets could be opened, so the live
   register version, the apparent extension (an AWMF asset filename contains "verlaengert") and
   the current validity date are **unverified**. The article states only what the two opened
   documents say and adds a line telling readers to check the register for a newer or extended
   version. A human with browser access must confirm this, and the page's `lastVerified` should be
   re-set at that point.

2. **The guideline document was read from a DGAKI mirror**, not from the AWMF register:
   https://archiv.dgaki.de/.../Kopp-22-S3-Leitlinie-Allergiepraevention.pdf — the journal
   reprint (Allergologie 45(3):153–194, 2022), carrying "Stand: 28. November 2021" and
   AWMF-Registernr. 061-016. DGAKI is one of the guideline's coordinating societies, so this is
   the primary document and not a secondary summary, but please confirm the recommendation
   wordings against the register version.

## Extraction incident worth knowing about
The first text extraction of the S3 PDF (two-column journal layout) produced scrambled text that
interleaved the issue's CME quiz items with the real recommendations. One fragment read
"Hühnerei in der Beikost erst ab dem 2. Lebensjahr eingeführt werden" — the opposite of the actual
recommendation, and it would have passed as plausible. Nothing from that pass was used; every
German quote in `sources.md` comes from a clean page-ordered extraction. Same class of error as the
paraphrased "quotes" on the honey article, and the reason both now get verified against raw text.

## Claims below "high" confidence
None of the 30 claims is below high: every one maps to a recommendation or sentence quoted verbatim.
The judgement calls are in framing, not in facts:

1. **Scope difference on egg, stated rather than merged.** The guideline states the egg
   recommendation generally [1]; the BIÖG page presents it "bei Allergierisikokindern" [2]. The
   article attributes each to its own source and does not harmonise them. Please confirm this is
   the right call for a parent-facing page — it is the one place where a reader could come away
   unsure whether the egg advice applies to their child.
2. **Peanut framing.** The article leads with the grade-C "kann erwogen werden" and puts the
   grade-A precondition (exclude peanut allergy, especially in moderate to severe AD) immediately
   after it, plus the BIÖG instruction to discuss it with the paediatric practice beforehand. It
   deliberately does not read as "give your baby peanut butter".
3. **No efficacy numbers.** LEAP/EAT risk reductions are reported in [4] but are not part of a
   German recommendation, so no percentage appears in the article — it would promise a benefit the
   German guideline does not state.

## Quote lengths
Three recommendation quotes exceeded the 25-word verbatim limit in the audit checklist (peanut 35,
egg 27, Beikost window 26). Rule 9 (mirror the source's strength) and rule 10 (no verbatim runs
over 25 words) pull against each other on graded recommendations. Resolution: the graded core is
quoted and the frame paraphrased, so no continuous verbatim run exceeds the limit and no
"soll/sollte/kann" is changed. Worth confirming the strength still reads correctly.

## Claims removed
- An introduction schedule (order of allergens, waiting days between new foods) — no opened source
  gives one. Called out in the article and in the FAQ as something the guidance does not specify.
- Amounts for egg or peanut butter — the guideline says "regelmäßig" without grams or spoons.
- Efficacy percentages from LEAP/EAT (see above).
- Statements about HA ("hypoallergene") formula beyond the milk recommendations — the guideline
  notes controversial data and no short citable statement could be lifted cleanly.
- Allergy testing procedure (prick test details, blood values) — not in an opened source; only the
  guideline's "exclude peanut allergy first" and the BIÖG's "negative peanut allergy test" remain.
- Any claim about the guideline's current validity (see point 1).

## Divergence from international guidance — stated, not resolved
The article has its own section for this. Germany explicitly declined the international targeted
peanut-introduction recommendation because it does not classify as a high-prevalence country [1],
and its own recommendation has a different trigger (AD + regular peanut consumption in the family)
and a weaker grade than the ESPGHAN one (severe eczema and/or egg allergy, "should", 4–11 months,
after specialist evaluation) [4]. Gluten appears only as international guidance [4] because no
opened German allergy source covers it.

## Cross-link worth adding later
The guideline's "altersgerechte Form (wegen der Aspirationsgefahr nicht „ganze Erdnüsse" oder in
Stücken)" ties directly to the choking article (`beikost-erstickungsgefahr`). Both pages already
state it; an internal link between them would help once there are more Beikost pages.

## Deviations from the skill
- 1,322 words, below the 1,500–2,500 guide range; site template and sibling articles are shorter.
- Output is `src/beikost-content.js`, not MDX. Path `/de/blog/allergene-einfuehren-beikost/`.

## Open questions
Blocking for publication, not for review: the guideline validity (point 1). `openQuestions: []` in
the article data because nothing in the body is marked [UNVERIFIED] — the validity question is
about which document version to cite, not about an unsourced sentence.
