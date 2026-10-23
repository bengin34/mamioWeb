# Review notes — de-DE / honig (`beikost-honig`)

Draft status: DRAFT. `reviewedBy` is empty, so the page renders
"Dieser Artikel ist noch in fachlicher Prüfung."

Reviewer must be: Kinderärztin/Kinderarzt, Hebamme or Ernährungsberater:in (DGE/VDD),
name + qualification shown on the page.

## Claims below "high" confidence

1. **"Beim Säuglingsbotulismus entsteht das Nervengift erst im Körper des Kindes — nicht vorher im Lebensmittel."**
   Restatement of two sources, not a direct quote: BfR says the spores do not become
   toxin-producing cells in honey but are a risk for infants under one year (Q1.3);
   BIÖG says the germs settle in the gut and form a toxin there (Q2.2). Confidence: medium-high.
   Please confirm the mechanism is phrased correctly for lay readers.

2. **"Honig zu Hause zu erwärmen ist deshalb keine Lösung."**
   Inference combining ESPGHAN (spores inactivated only by adequate high-pressure and
   high-temperature treatment "as used in industry", Q3.1) with BfR (boiling to 100 °C
   inactivates the *neurotoxins*, Q1 measures list). No source says in so many words
   "household heating is insufficient". Confidence: medium. This is the sentence most
   worth a second opinion.

3. **"Die Einschränkung gilt für das erste Lebensjahr" / "nach dem ersten Geburtstag"**
   Both national sources state the restriction (under one year), neither states an
   explicit permission afterwards. Deliberately phrased as the end of the restriction,
   never as "ab 12 Monaten empfohlen".

4. **"am Schnuller"** (honey on a pacifier) is an illustration of "reiner Bienenhonig",
   not a sourced claim about that specific practice.

## Where sources disagree
Nothing material. The German authorities (under one year) and ESPGHAN (not before
12 months) agree. ESPGHAN adds the industrial-processing exception, which the German
sources express differently (honey in Fertigprodukten is unbedenklich). Both are given,
each attributed to its own source; ESPGHAN is labelled international in the source list.

## Numbers used
- "weniger als zehn Botulismus-Fälle pro Jahr" — BfR, verbatim. Explicitly flagged in
  the article as covering **all** forms of botulism; the source gives no separate figure
  for Säuglingsbotulismus.
- No nutrient values, no portion sizes, no gram amounts anywhere in the article (none
  were available from an opened source).

## Claims removed during the claim-table pass
- Ahornsirup should also be avoided → the BfR page does not mention it. Removed.
- Case numbers for infant botulism specifically → no RKI source opened. Removed.
- "Honig ist gesünder als Zucker" / nutrient benefits → no source. Removed.
- A symptom list specific to infants → BfR lists symptoms for botulism in general only;
  the article says so explicitly instead of inventing an infant-specific list.

That is 4 removed claims (> the 3-claim threshold in the audit checklist). The removals
were all peripheral; the core recommendation is covered by two Tier-1 sources plus one
Tier-2. No further sourcing needed before review, but an RKI source would let us add
infant-specific figures and symptoms later.

## What the reviewer should double-check
- The mechanism sentence (item 1) and the home-heating sentence (item 2).
- Whether "Fertigprodukte" needs a sharper boundary for German readers (industrially
  produced vs. a honey cake baked at home — the sources do not address home baking, and
  the article does not claim anything about it).
- That the closing Mamio sentence reads as context, not as a health claim.

## Deviations from the skill
- **Length: 800 words** instead of the 1,500–2,500 guide range. mamio-baby-tracker.com
  articles run 600–900 words and the postbuild template is built for that; padding would
  have meant unsourced filler. Agreed with the user to follow the site format.
- **Format: JS module, not MDX.** The site has no MDX pipeline; content lives in
  `src/beikost-content.js` with the YMYL fields added to the existing blog schema.
- **Path: `/de/blog/honig-fuer-babys/`** instead of `/beikost/ratgeber/honig` — the site's
  existing blog route was kept rather than introducing a second content tree.

## Open questions
None blocking. `openQuestions: []` in the article data.
