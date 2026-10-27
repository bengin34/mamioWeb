# Review notes — de-DE / erstickungsgefahr (`beikost-erstickungsgefahr`)

Draft status: DRAFT. `reviewedBy` empty → page renders "Dieser Artikel ist noch in fachlicher Prüfung."
Reviewer must be: Kinderärztin/Kinderarzt, Hebamme or Ernährungsberater:in (DGE/VDD).

Sources: 4 × Tier-1 German (2 × BfR, BIÖG, Netzwerk Gesund ins Leben) + 1 × Tier-2 (ESPGHAN 2017).
All quotes verified against raw HTML/PDF text, not against a fetch summary.

## Claims below "high" confidence

1. **"Kleiner schneiden ist also nicht die Lösung, auf die diese Empfehlung hinausläuft."**
   Editorial reading of the BIÖG sentence that even very finely cut firm fruit and vegetables can
   reach the windpipe [3]. The source states the risk; it does not say "cutting is not the solution".
   Confidence: medium. Kept because the alternative — leaving it implicit — invites exactly the
   Anglo cutting rules the German sources do not give. Please confirm the phrasing.

2. **"Der Rettungsdienst ist in Deutschland über 112 erreichbar."** and
   **"wer sie lernen möchte, ist in einem Erste-Hilfe-Kurs für Säuglinge und Kleinkinder richtig"**
   Neither is from an opened source. Both are generic, non-medical pointers, not dosing or age
   advice. Remove if the reviewer prefers strict sourcing.

3. **Attribution split between infants and toddlers.** The BfR documents and the Netzwerk Gesund ins
   Leben pages speak about *Kleinkinder*; only BIÖG [3] is explicitly about the first year. Every
   sentence is attributed to the source that actually covers that age group, and the toddler
   sections say so. This is the thing most likely to drift in a later edit — please check it reads
   correctly.

## Dates and numbers
- The case series (98 aspirations, 50 nut cases, 29 peanuts, 16 other foods, 10 toy parts) is from
  **2004–2005**, six clinics, published by the BfR in 2009 from Deutsche Gesellschaft für
  Pädiatrische Pneumonologie figures [1]. The article states the year, the clinic count and that
  aspiration accidents are not systematically recorded in Germany [1]. No figure is presented as
  current national incidence, and no infant-specific figure is given — the source has none.
- Both BfR documents are from 2009. They are still the BfR's published position on nuts and
  choking; no newer BfR statement on this was found. Worth re-checking before the next update.

## Claims removed during the claim-table pass
- Cutting/preparation rules (halving grapes, quartering blueberries, stick sizes) — no German
  Tier-1 source gives any. Explicitly called out in the article as something the guidance does not say.
- First-aid technique (back blows, Heimlich, positioning) — no source opened. Only the BfR's one
  sourced step remains: persistent cough or breathing trouble → call the emergency doctor [1].
- "Whole nuts are fine from age four" — the BfR mentions children under four only as the age group
  that puts objects in the mouth [1], not as a clearance age.
- Infant-specific case numbers — the series covers Kleinkinder.
- "Always eat sitting / never in the car seat" as a general rule — the BfR says only "ruhige
  Essenssituationen unter Aufsicht", and says it about nuts. Kept exactly that narrow.

Five claims were dropped, above the audit checklist's 3-claim threshold. Unlike the honey article
the removals are not a sourcing gap but a genuine difference in national guidance: German bodies
answer "which foods are off the plate", not "how to cut them". Flagging it because the search intent
behind this topic in Germany partly *is* the cutting question, and the article deliberately does not
answer it.

## What the reviewer should double-check
- Item 1 and the infant/toddler attribution (item 3).
- Whether the omission of first-aid technique is right for this page, or whether it should link to
  a separate, properly sourced Erste-Hilfe page.
- That the closing Mamio sentence reads as context, not as a safety feature claim.

## Deviations from the skill
- Length 1,137 words (guide range is 1,500–2,500); the site template and sibling articles are
  shorter, and the sourced material does not stretch further without padding.
- Output is `src/beikost-content.js`, not MDX; path is `/de/blog/erstickungsgefahr-beikost/`.

## Open questions
None blocking. `openQuestions: []`.
