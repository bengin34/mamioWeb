# Review notes — de-DE / salz-und-zucker (`beikost-salz-zucker`)

DRAFT. Editorial byline + DE_MEDICAL_DISCLAIMER, no clinician review.
1,070 words, 6 sources (5 × Tier-1 German, 1 × Tier-2), 17 mapped claims.

## The thing to look at first
**There is no German Tier-1 sentence that forbids salt in homemade Beikost.** What actually exists:
- the Fertigprodukt purchase criterion — "Ein Zusatz von Salz und ein starker Süßgeschmack sollten vermieden werden" [1],
- the official first-puree recipe, whose complete ingredient list contains neither salt nor sugar [4],
- the toddler (1–3 years) ranking "sparsam: Zucker und Süßigkeiten, (Jod)Salz …" [3],
- and the international principle that adding salt and sugar to complementary food should be discouraged [6].

The article states each of those with its own source and says in the closing section that the
literal first-year prohibition parents expect is not in the German documents. That is the honest
reading, but it is also the part most likely to read as permissive. If you want the page to land
harder on "don't salt the puree", the lever is the ESPGHAN sentence [6], not a German one.

The recipe observation [4] is phrased as what the recipe contains, not as a rule the source states.

## No quantities anywhere
The DGE reference-value pages render their tables via JavaScript; nothing numeric could be read
from an opened source. So the page carries no milligrams of sodium, no grams of sugar, no daily
limit for infants — and says so in the FAQ. If you want numbers, the DGE reference values have to
be read from the printed/PDF edition and added as a source.

## Phrasings worth checking
- C8 is reported exactly as the source frames it: *associated*, in *observational studies*, with
  overweight/obesity at school age [2]. Not "sugar drinks make babies obese".
- C7 names breast milk and formula explicitly, because the source does — the point is constant
  tooth contact from a permanently offered bottle, not the feed itself. This is the sentence most
  easily misread as "breast milk causes caries", so the article frames it as the Dauerflasche.
- C16 is a single study reported inside [6]; it is attributed as such, not as a recommendation.
- Honey appears once, inside the toddler sugar quote [3]; the first-year honey restriction has its
  own page (`beikost-honig`) and is cross-referenced in one clause.

## Dropped
Sodium/sugar quantities · "salt strains the infant kidney" (no source) · a German literal ban on
salting homemade puree (does not exist in the opened sources) · any causal claim about taste
addiction — [6] reports associations and one study.

## Deviations
1,070 words (guide range 1,500–2,500); output is `src/beikost-content.js`, path
`/de/blog/salz-und-zucker-in-der-beikost/`.
