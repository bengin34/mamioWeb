// Researched article: how to read baby growth charts and percentiles. Sources opened and fact-checked 2026-11-04 (see docs/article-reviews/growth-percentiles-explained.md).
export default {
  relatedPageId: 'growthPercentiles',
  slugs: {
    en: 'baby-growth-chart-percentiles-explained',
    de: 'perzentile-baby-bedeutung-wachstumskurven',
    fr: 'courbe-de-croissance-bebe-percentile',
    'pt-br': 'percentil-bebe-o-que-significa-curva-de-crescimento',
    tr: 'bebek-persentil-nasil-okunur-buyume-egrisi',
  },
  locales: {
    en: {
      metaTitle: `Baby Growth Chart Percentiles Explained | Mamio`,
      metaDescription: `What a baby percentile really means, how WHO growth charts work, why the trend matters more than one number, and when crossing centile lines is worth a check.`,
      title: `Baby growth chart percentiles explained: how to read your baby's chart`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `A percentile (or centile) compares your baby's weight, length or head size with other babies of the same age and sex. If your baby is on the 25th percentile for weight, about 25 out of 100 babies that age weigh less and about 75 weigh more. It is not a score to beat: a baby on the 10th percentile is no less healthy than one on the 90th. What matters most is that your baby keeps growing steadily along their own curve over time.`,
      sections: [
        {
          title: `What a percentile means, with a worked example`,
          body: `Growth charts are built from measurements of many healthy children. The curved lines show the spread of those measurements at each age. The 50th percentile line is the middle: half of the babies in the reference group are above it, half below.\n\nThe Royal College of Paediatrics and Child Health (RCPCH) puts it like this: if your child's height is on the 25th centile, then if you lined up 100 children of the same age and sex in order of height, your child would probably be number 25. The same logic works for weight and head circumference. A baby on the 75th percentile for weight is heavier than roughly 75 of 100 same-age, same-sex babies.\n\nThe American Academy of Pediatrics (AAP) stresses that growth percentiles are not like school grades: coming in at the 10th percentile is no better or worse than the 90th. Genetics, environment, nutrition, activity and health problems can all influence how a child grows. Doctors sometimes use z-scores as well, especially for measurements outside the printed curves: a z-score of 0 equals the 50th percentile.`,
          list: [
            `50th percentile: the middle of the reference group, not a target.`,
            `Below the 50th: smaller than average, which on its own is not a problem.`,
            `Above the 50th: bigger than average, which on its own is not a problem either.`,
            `Weight, length and head circumference each have their own percentile and they do not have to match.`,
          ],
        },
        {
          title: `The WHO Child Growth Standards and why they are used for babies`,
          body: `In 2006 the World Health Organization published the WHO Child Growth Standards for children from birth to five years. They are based on the WHO Multicentre Growth Reference Study, which followed healthy children in Brazil, Ghana, India, Norway, Oman and the USA who were raised in good conditions and breastfed. WHO treats the breastfed child as the normative model for growth. The previous reference had been based on artificially fed children.\n\nBecause the WHO charts show how children should grow under optimal conditions, they are called standards rather than references. The US Centers for Disease Control and Prevention (CDC) recommends the WHO growth standards for all children under 2 in the United States, whatever the feeding method, and the CDC growth charts from age 2. To identify possible adverse health conditions before 24 months, the CDC report recommends the 2.3rd and 97.7th percentiles on the WHO curves (printed on US charts as the 2nd and 98th).\n\nMamio uses the WHO Child Growth Standards from birth to 24 months. To show percentiles, the app needs your baby's sex, because boys and girls have separate charts. Mamio does not include CDC charts, and it does not calculate percentiles after 24 months. Percentile labels, WHO percentile bands and the comparison with the WHO average are part of Mamio Pro.`,
        },
        {
          title: `Which growth charts different countries use`,
          body: `Not every country prints the same curves in its child health record. That is one reason why a percentile in an app can differ a little from the one in your baby's booklet.`,
          list: [
            `United States: WHO standards from birth to 2 years, then CDC charts.`,
            `United Kingdom: UK-WHO charts in the Personal Child Health Record (Red Book). From 2 weeks to 4 years they are based on the WHO standard; the preterm and birth section uses British data from around 1990. There are no centile lines between birth and 2 weeks because most babies lose some weight and regain it in that time and growth patterns vary widely.`,
            `Germany: the yellow check-up booklet (Gelbes Heft) uses German reference curves (Kromeyer-Hauschild 2001 or Prader 1982 data), not the WHO standards.`,
            `France: health records issued from April 2018 contain French curves (AFPA-CRESS/Inserm-CompuGroup Medical 2018), built from about 5 million measurements of children seen by paediatricians and general practitioners.`,
            `Brazil: the Ministry of Health's Caderneta de Saúde da Criança uses the charts recommended by WHO and marks cut-offs in z-scores. Turkey: the Ministry of Health's follow-up protocols refer to WHO Child Growth Standards z-scores; ask your doctor which curves are printed in your child's record.`,
          ],
        },
        {
          title: `Weight, length and head circumference: what each one tells you`,
          body: `For babies under 2, doctors track three measurements: weight, length (measured lying down) and head circumference.\n\nWeight responds fastest to feeding and illness, so it moves around the most. Length changes more slowly and is difficult to measure accurately, which is why it is not measured at every visit and why home readings are only rough. The AAP notes that head circumference is watched in infancy because the brain is growing. RCPCH advises that a head circumference above the 99.6th centile, or one that climbs through two centile spaces, should only cause concern if it keeps rising after 6 months or there are other signs.\n\nIt also helps to look at the measurements together. Each one has its own percentile, and every child is different: RCPCH points out that even twins can have different growth patterns.`,
        },
        {
          title: `Why the trend matters more than one number`,
          body: `One measurement is a snapshot. Several measurements plotted over weeks and months show the pattern, and the pattern is what your health team is looking at. The AAP advises parents to focus on the rate and trend of growth rather than any specific number.\n\nWeight rarely follows one line exactly, especially in the first year. RCPCH says weight usually tracks within one centile space and that it is normal for the dots to wiggle up and down a bit or move gradually towards the next line. Crossing two lines is less common. The NHS gives the same message: moving across one centile line is common, but if your baby's weight crosses two centile lines, talk to your health visitor. If a pattern looks unusual, RCPCH says a health professional may take more measurements, look closely at feeding or investigate other things, and most children who have such checks turn out to be perfectly normal.\n\nShort illnesses can cause a dip. According to RCPCH, once a child recovers, their weight should go back to the centile it was on within 2 to 3 weeks; if it does not, speak to your health visitor.`,
        },
        {
          title: `Newborn weight loss and regaining birth weight`,
          body: `Almost every newborn loses some weight in the first days, partly because they are born with extra body fluid. According to HealthyChildren.org (AAP), weight gain should start again around day 5, most babies are back to their birth weight by about two weeks, and almost all have regained it by three weeks.\n\nThe NHS says babies are weighed during their first two weeks to make sure they are regaining their birth weight, and your midwife or health visitor will support you if your baby loses a lot of weight or is slow to regain it. In the UK, a loss of 10% or more of birth weight usually leads to a check of how the baby is feeding. Guidance in other countries can be stricter: German parent information, for example, expects birth weight to be regained within about 7 and at the latest around 10 days. Follow the advice of your own midwife or doctor.\n\nThis early dip is also why UK charts leave out centile lines between birth and 2 weeks. Do not compare a 5-day-old's weight with the percentile they were born on and assume something is wrong.`,
        },
        {
          title: `Premature babies and corrected age`,
          body: `If your baby was born early, comparing them with babies born at term on the same day gives a misleading picture. Doctors therefore use corrected (adjusted) age. To work it out, subtract the number of weeks your baby was born early from their actual age in weeks. A baby born at 32 weeks is 8 weeks early, so at 4 months old they have a corrected age of about 2 months.\n\nThe AAP says that during the first 2 years, corrected age gives a better idea of when babies reach developmental goals. In the UK, the standard 0 to 4 years chart is suitable for moderately preterm babies born at 32 to 36 weeks, and the weeks of prematurity are shown by drawing an arrow back from the baby's actual age on the chart. Ask your health team how your baby's measurements should be plotted.\n\nMamio's percentiles use your baby's actual age, not corrected age, and the WHO standards describe babies born at term. If your baby was premature, ask your paediatrician how to interpret the numbers and which age to use.`,
        },
        {
          title: `Measuring accurately and keeping track at home`,
          body: `Many worrying jumps on a chart turn out to be differences in how the baby was measured or plotted rather than real changes. RCPCH explains that a plotting mistake can make a normal pattern look like a problem, and anyone who measures or plots growth should be trained. A few habits make home records more useful:`,
          list: [
            `Write down where each measurement came from (clinic, hospital, home) and use the same scale when you can. A home weight may not be a medically accurate weight.`,
            `Weigh at a similar time of day: a weight taken just after a big feed and one taken before the next feed can make it look as if your baby has not gained.`,
            `Length is hard to measure accurately and is not measured at every visit, so treat home readings as rough.`,
            `Bring your home numbers to your clinic instead of judging growth from one reading, and speak to your health visitor before changing how you feed your baby because of a number.`,
            `In the UK, RCPCH advises weighing no more often than once a month from 2 weeks to 6 months and every 2 months up to 1 year, unless there is a special reason, because frequent weighing can cause unnecessary worry.`,
          ],
        },
        {
          title: `When to talk to your doctor or health visitor`,
          body: `Most babies who are not on the 50th percentile are perfectly healthy. Contact your doctor, midwife or health visitor if you notice any of the points below, which reflect NHS, RCPCH and CDC guidance, or if you want advice at any time.\n\nIf your baby seems seriously unwell, call your local emergency number (999 in the UK, 911 in the US).`,
          list: [
            `Weight crosses two or more centile lines, especially downwards.`,
            `Your baby's weight keeps moving down from one measurement to the next.`,
            `Your baby has not regained birth weight within the time your midwife or doctor expects (most babies are back at or above birth weight by 3 weeks).`,
            `Weight does not return to its usual centile within 2 to 3 weeks after an illness.`,
            `Head circumference is above the top line of the chart or climbs through two centile spaces and keeps rising after 6 months, or there are other worrying signs.`,
            `A measurement falls outside the outer lines of the chart (a closer look is warranted), or you are simply worried about feeding or growth.`,
          ],
        },
      ],
      faq: [
        {
          question: `Is the 50th percentile the ideal weight for a baby?`,
          answer: `No. The 50th percentile is the middle of the reference group, not a goal. A baby can be healthy on the 10th or the 90th percentile as long as they grow steadily along their own curve.`,
        },
        {
          question: `Is it bad if my baby is on a low percentile?`,
          answer: `Not by itself. Some babies are naturally small. What doctors watch is the trend: a baby who stays around the same low centile is usually growing well, while one whose weight keeps dropping across lines should be checked.`,
        },
        {
          question: `How many percentile lines can a baby drop before it is a concern?`,
          answer: `Moving across one centile line is common. The NHS advises talking to your health visitor if weight crosses two centile lines, and RCPCH describes crossing two lines as less common and worth a closer look.`,
        },
        {
          question: `Why is my baby's percentile different in the app and in the health booklet?`,
          answer: `Countries print different curves. For example, the German Gelbes Heft and the French carnet de santé use national reference data, while Mamio uses the WHO standards. Small differences in percentile are expected; the trend on one consistent chart is what counts.`,
        },
        {
          question: `Should I use WHO or CDC growth charts for my baby?`,
          answer: `For children under 2, the CDC itself recommends the WHO growth standards. CDC charts are recommended from age 2 onwards in the United States.`,
        },
        {
          question: `Do breastfed and formula-fed babies grow differently?`,
          answer: `The WHO standards were built from breastfed babies, and WHO treats the breastfed baby as the normative model for growth. RCPCH and the CDC still recommend the WHO-based charts for all babies, regardless of how they are fed.`,
        },
      ],
      ctaText: `Log weight, length and head size in Mamio`,
      sources: [
        { publisher: `NHS`, title: `Your baby's weight and height`, url: `https://www.nhs.uk/baby/babys-development/height-weight-and-reviews/baby-height-and-weight/` },
        { publisher: `RCPCH`, title: `Growth charts - information for parents and carers`, url: `https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers` },
        { publisher: `RCPCH`, title: `UK-WHO Growth Charts - Fact Sheet for Parents`, url: `https://www.rcpch.ac.uk/sites/default/files/Fact_Sheet_for_Parents.pdf` },
        { publisher: `RCPCH`, title: `Chart information for Health staff`, url: `https://growth.rcpch.ac.uk/clinician/chart-information-health-staff/` },
        { publisher: `RCPCH`, title: `UK-WHO growth charts - 0-4 years`, url: `https://www.rcpch.ac.uk/resources/uk-who-growth-charts-0-4-years` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Understanding Growth Charts: A Parent's Guide to Percentiles & Z-Scores`, url: `https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/growth-charts-by-the-numbers.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Your Baby's First Month: Growth & Physical Appearance`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Corrected Age For Preemies`, url: `https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx` },
        { publisher: `CDC`, title: `Use of World Health Organization and CDC Growth Charts for Children Aged 0--59 Months in the United States`, url: `https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5909a1.htm` },
        { publisher: `CDC`, title: `What Growth Charts Are Recommended?`, url: `https://www.cdc.gov/growth-chart-training/hcp/overview/recommended.html` },
        { publisher: `WHO`, title: `Child growth standards`, url: `https://www.who.int/news-room/questions-and-answers/item/child-growth-standards` },
      ],
    },
    de: {
      metaTitle: `Perzentile beim Baby: Bedeutung einfach erklärt | Mamio`,
      metaDescription: `Was bedeutet die Perzentile beim Baby? So liest du Wachstumskurven, warum der Verlauf wichtiger ist als ein Wert und wann du mit der Kinderärztin sprechen solltest.`,
      title: `Perzentilen beim Baby: Was sie bedeuten und wie du die Wachstumskurve liest`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Eine Perzentile zeigt, wo dein Baby bei Gewicht, Länge oder Kopfumfang im Vergleich zu gleichaltrigen Kindern desselben Geschlechts liegt. Liegt dein Baby beim Gewicht auf der 25. Perzentile, wiegen etwa 25 von 100 gleichaltrigen Babys weniger und etwa 75 mehr. Das ist keine Note: Ein Baby auf der 10. Perzentile ist nicht weniger gesund als eines auf der 90. Entscheidend ist, dass dein Kind über die Zeit gleichmäßig entlang seiner eigenen Kurve wächst.`,
      sections: [
        {
          title: `Was eine Perzentile bedeutet: ein Rechenbeispiel`,
          body: `Wachstumskurven entstehen aus den Messwerten vieler Kinder. Die geschwungenen Linien zeigen, wie sich diese Werte in jedem Alter verteilen. Die 50. Perzentile ist die Mittellinie: Die Hälfte der Kinder der Referenzgruppe liegt darüber, die andere Hälfte darunter.\n\nStell dir 100 gleichaltrige Mädchen vor, der Größe nach aufgereiht. Liegt deine Tochter bei der Länge auf der 25. Perzentile, stünde sie ungefähr an Platz 25: Rund 24 Kinder sind kleiner, rund 75 größer. Genauso funktioniert es beim Gewicht und beim Kopfumfang. Kinderärzte im Netz (BVKJ) erklärt es so: Liegt ein Kind auf der 50. Perzentile, sind 50 % der Kinder seiner Altersgruppe größer und 50 % kleiner. Die Größenentwicklung verläuft in der Regel parallel zu einer der Perzentilen zwischen der 3. und der 97.; Kinder, die zu den kleinsten 3 % ihrer Altersgruppe gehören, gelten als kleinwüchsig.\n\nWichtig: Eine Perzentile ist kein Wettbewerb. Laut der amerikanischen Kinderärzte-Akademie (AAP) ist die 10. Perzentile weder besser noch schlechter als die 90. Erbanlagen, Umwelt, Ernährung, Aktivität und Erkrankungen beeinflussen, wie ein Kind wächst. Ärztinnen und Ärzte nutzen manchmal auch sogenannte z-Scores (Standardabweichungen); ein z-Score von 0 entspricht der 50. Perzentile.`,
          list: [
            `50. Perzentile: Mitte der Referenzgruppe, kein Zielwert.`,
            `Unter der 50. Perzentile: kleiner oder leichter als der Durchschnitt, für sich genommen kein Problem.`,
            `Über der 50. Perzentile: größer oder schwerer als der Durchschnitt, ebenfalls für sich genommen kein Problem.`,
            `Gewicht, Länge und Kopfumfang haben jeweils eigene Perzentilen, die nicht gleich sein müssen.`,
          ],
        },
        {
          title: `Die WHO-Wachstumsstandards: Woher die Kurven kommen`,
          body: `2006 hat die Weltgesundheitsorganisation (WHO) die WHO Child Growth Standards für Kinder von der Geburt bis fünf Jahre veröffentlicht. Grundlage ist eine große Studie mit gesunden, gestillten Kindern aus Brasilien, Ghana, Indien, Norwegen, Oman und den USA, die unter guten Bedingungen aufwuchsen. Die WHO sieht das gestillte Kind als Norm für gesundes Wachstum; die frühere Referenz beruhte auf Kindern, die künstlich ernährt wurden.\n\nWeil die WHO-Kurven zeigen, wie Kinder unter optimalen Bedingungen wachsen sollten, spricht man von Standards. Die US-Gesundheitsbehörde CDC empfiehlt sie für alle Kinder unter zwei Jahren, unabhängig von der Ernährung.\n\nMamio nutzt die WHO-Standards von der Geburt bis 24 Monate. Damit Perzentilen angezeigt werden, musst du das Geschlecht deines Babys angeben, denn für Jungen und Mädchen gibt es getrennte Kurven. Nach 24 Monaten berechnet die App keine Perzentilen mehr. Perzentil-Angaben, WHO-Perzentilbänder und der Vergleich mit dem WHO-Durchschnitt gehören zu Mamio Pro.`,
        },
        {
          title: `Welche Kurven im Gelben Heft stehen und wie andere Länder es machen`,
          body: `Nicht jedes Land druckt dieselben Kurven in sein Vorsorgeheft. Deshalb kann eine Perzentile in einer App leicht von der im Gelben Heft abweichen, ohne dass einer der Werte falsch ist.\n\nIm Gelben Kinderuntersuchungsheft beruhen die Perzentilkurven für Länge und Gewicht laut einem Positionspapier der Deutschen Gesellschaft für Sozialpädiatrie und Jugendmedizin (DGSPJ) auf deutschen Daten nach Kromeyer-Hauschild (2001) bzw. auf den Kurven von Prader (1982), nicht auf den WHO-Standards. Das Papier weist auch darauf hin, dass in Deutschland mehrere Perzentilen parallel genutzt werden.`,
          list: [
            `Deutschland: Gelbes Heft mit deutschen Referenzkurven (Kromeyer-Hauschild bzw. Prader).`,
            `USA: WHO-Standards bis 2 Jahre, danach CDC-Kurven.`,
            `Großbritannien: UK-WHO-Kurven im „Red Book“, ab 2 Wochen auf Basis der WHO-Standards; zwischen Geburt und 2 Wochen gibt es dort bewusst keine Perzentillinien.`,
            `Frankreich: ab April 2018 französische Kurven (AFPA-CRESS/Inserm) im Carnet de santé.`,
          ],
        },
        {
          title: `Gewicht, Länge und Kopfumfang: Was die drei Werte zeigen`,
          body: `Bei Babys und Kleinkindern unter zwei Jahren werden drei Werte verfolgt: Gewicht, Länge (im Liegen gemessen) und Kopfumfang. Das Wachstum wird bei den Früherkennungsuntersuchungen (U-Untersuchungen) im Gelben Heft festgehalten, sodass deine Kinderärztin die Entwicklung über einen längeren Zeitraum beurteilen kann.\n\nLaut kindergesundheit-info.de nehmen Babys in den ersten zwei Monaten typischerweise etwa 170 bis 330 Gramm pro Woche zu, zwischen 6 und 12 Monaten noch etwa 40 bis 110 Gramm; kurzfristig kann die Zunahme auch einmal darüber oder darunter liegen. Die Länge ist schwer genau zu messen und wird deshalb nicht bei jedem Termin erhoben; Werte von zu Hause sind nur grob. Die AAP weist darauf hin, dass der Kopfumfang im Säuglingsalter beobachtet wird, weil man wissen will, dass das Gehirn wächst. Die britischen Kinderärzte (RCPCH) sehen einen Kopfumfang über der 99,6. Perzentile nur dann als Grund zur Sorge, wenn er nach dem 6. Monat weiter ansteigt oder weitere Auffälligkeiten dazukommen.\n\nSchau dir die Werte auch zusammen an. Jeder Wert hat seine eigene Perzentile, und jedes Kind ist anders: Laut RCPCH können sogar Zwillinge unterschiedlich wachsen.`,
        },
        {
          title: `Warum der Verlauf wichtiger ist als ein einzelner Wert`,
          body: `Eine einzelne Messung ist eine Momentaufnahme. Erst mehrere Werte über Wochen und Monate zeigen, ob dein Kind gleichmäßig wächst. Kinderärzte im Netz betont: Die Größenentwicklung verläuft in der Regel parallel zu einer Perzentile. Die AAP rät, auf Tempo und Verlauf des Wachstums zu achten statt auf eine einzelne Zahl.\n\nGerade das Gewicht folgt im ersten Lebensjahr selten exakt einer Linie. Britische Kinderärzte (RCPCH) halten es für normal, wenn die Gewichtspunkte etwas auf und ab wandern oder allmählich in Richtung der nächsten Linie rutschen; das Überqueren von zwei Linien ist seltener, dann behält die Gesundheitsfachkraft das Kind länger im Blick. Wirkt ein Verlauf auffällig, werden laut RCPCH vielleicht weitere Messungen gemacht, das Trinken genauer angeschaut oder anderes abgeklärt; bei den meisten Kindern stellt sich dabei heraus, dass alles in Ordnung ist.\n\nNach einem Infekt kann das Gewicht kurz einknicken. Laut RCPCH sollte es nach der Genesung innerhalb von 2 bis 3 Wochen wieder auf die gewohnte Perzentile zurückkehren; falls nicht, sprich mit der Kinderärztin.`,
        },
        {
          title: `Gewichtsabnahme nach der Geburt und das Geburtsgewicht`,
          body: `Fast alle Neugeborenen nehmen in den ersten Lebenstagen etwas ab. Das ist normal. Laut kindergesundheit-info.de sollte das Geburtsgewicht in der Regel innerhalb von etwa 7 Tagen, spätestens nach etwa 10 Tagen wieder erreicht sein.\n\nInternationale Quellen sind hier etwas großzügiger: Die AAP schreibt, dass die meisten Babys ihr Geburtsgewicht nach etwa zwei Wochen wieder haben und fast alle nach drei Wochen. In Deutschland orientierst du dich an der Empfehlung deiner Hebamme und deiner Kinderärztin; sie begleiten die ersten Tage und wissen, wie dein Baby trinkt.\n\nWegen dieser Abnahme ergibt es wenig Sinn, das Gewicht eines fünf Tage alten Babys mit der Perzentile bei der Geburt zu vergleichen. In britischen Kurven fehlen aus genau diesem Grund die Perzentillinien zwischen Geburt und zwei Wochen.`,
        },
        {
          title: `Frühgeborene und korrigiertes Alter`,
          body: `Kam dein Baby zu früh zur Welt, wäre der Vergleich mit termingerecht geborenen Kindern gleichen Lebensalters unfair. Deshalb wird mit dem korrigierten Alter gerechnet: Du ziehst die Wochen, die dein Kind zu früh kam, von seinem tatsächlichen Alter in Wochen ab. Ein Baby, das in der 32. Schwangerschaftswoche geboren wurde, kam 8 Wochen zu früh; mit 4 Lebensmonaten hat es ein korrigiertes Alter von etwa 2 Monaten.\n\nDie AAP sagt, dass das korrigierte Alter in den ersten 2 Lebensjahren ein besseres Bild davon gibt, wann Babys Entwicklungsschritte erreichen. Das DGSPJ-Positionspapier für Sozialpädiatrische Zentren sieht die Alterskorrektur bei Frühgeborenen dagegen für die ganze Kindheit vor. Welche Empfehlung und welche Kurven für dein Kind passen, entscheidet die Kinderärztin oder das Sozialpädiatrische Zentrum.\n\nMamio berechnet Perzentilen mit dem tatsächlichen Alter, nicht mit dem korrigierten Alter, und die WHO-Standards beschreiben termingerecht geborene Kinder. Wenn dein Baby ein Frühchen ist, frag deine Kinderärztin, wie die Werte einzuordnen sind.`,
        },
        {
          title: `Richtig messen und zu Hause mitschreiben`,
          body: `Viele scheinbare Sprünge in der Kurve sind in Wahrheit Unterschiede beim Messen oder Eintragen. Laut RCPCH kann ein Eintragsfehler ein normales Wachstum auffällig aussehen lassen, und wer misst oder einträgt, sollte geschult sein. Mit ein paar Gewohnheiten werden deine Aufzeichnungen aussagekräftiger:`,
          list: [
            `Notiere, wo gemessen wurde (Praxis, Klinik, zu Hause), und nutze möglichst immer dieselbe Waage. Ein Gewicht von zu Hause ist nicht unbedingt medizinisch genau.`,
            `Wiege zu ähnlichen Zeiten: Ein Gewicht direkt nach einer großen Mahlzeit und eines vor der nächsten Mahlzeit können den Eindruck erwecken, dein Baby habe nicht zugenommen.`,
            `Die Länge ist schwer genau zu messen und wird nicht bei jedem Termin erhoben; Werte von zu Hause sind nur grob.`,
            `Laut kindergesundheit-info.de reicht es mit vier, fünf Monaten in der Regel, dein Kind einmal im Monat zu wiegen.`,
            `Bring deine Werte in die Praxis, statt aus einem einzelnen Wert Schlüsse zu ziehen, und ändere nicht allein wegen einer Zahl, wie du dein Baby fütterst.`,
          ],
        },
        {
          title: `Wann du mit der Kinderärztin oder Hebamme sprechen solltest`,
          body: `Die meisten Babys, die nicht auf der 50. Perzentile liegen, sind völlig gesund. Sprich trotzdem mit deiner Kinderärztin, deinem Kinderarzt oder deiner Hebamme, wenn dir einer der folgenden Punkte auffällt oder wenn du dir generell Sorgen um das Gewicht deines Babys machst.\n\nWirkt dein Baby ernsthaft krank, ruf den Notruf 112. Außerhalb der Sprechzeiten erreichst du den ärztlichen Bereitschaftsdienst unter 116 117.`,
          list: [
            `Das Gewicht rutscht über zwei oder mehr Perzentillinien, vor allem nach unten.`,
            `Das Gewicht deines Babys wandert von Messung zu Messung immer weiter nach unten.`,
            `Das Geburtsgewicht ist nicht in der Zeit wieder erreicht, die deine Hebamme oder Kinderärztin erwartet (in der Regel nach etwa 7, spätestens nach etwa 10 Tagen).`,
            `Das Gewicht kehrt nach einem Infekt nicht innerhalb von 2 bis 3 Wochen auf die gewohnte Perzentile zurück.`,
            `Der Kopfumfang liegt über der obersten Linie und steigt nach dem 6. Monat weiter an, oder es gibt weitere Auffälligkeiten.`,
            `Die Körperlänge liegt unter der 3. oder über der 97. Perzentile, oder du machst dir einfach Sorgen ums Trinken, Essen oder Wachsen.`,
          ],
        },
      ],
      faq: [
        {
          question: `Ist die 50. Perzentile das Idealgewicht für ein Baby?`,
          answer: `Nein. Die 50. Perzentile ist nur die Mitte der Vergleichsgruppe. Ein Baby kann auf der 10. oder 90. Perzentile genauso gesund sein, solange es gleichmäßig entlang seiner Kurve wächst.`,
        },
        {
          question: `Ist eine niedrige Perzentile schlimm?`,
          answer: `Nicht für sich allein. Manche Kinder sind von Natur aus zierlich. Ärztinnen und Ärzte achten auf den Verlauf: Bleibt dein Baby ungefähr auf seiner Perzentile, wächst es meist gut. Fällt das Gewicht immer weiter ab, sollte das abgeklärt werden.`,
        },
        {
          question: `Warum zeigt die App eine andere Perzentile als das Gelbe Heft?`,
          answer: `Im Gelben Heft stehen deutsche Referenzkurven (Kromeyer-Hauschild bzw. Prader), Mamio nutzt die WHO-Standards. Kleine Unterschiede sind deshalb normal. Wichtig ist der Verlauf auf ein und derselben Kurve.`,
        },
        {
          question: `Ab wann muss mein Baby sein Geburtsgewicht wieder erreicht haben?`,
          answer: `Laut kindergesundheit-info.de in der Regel innerhalb von etwa 7 Tagen, spätestens nach etwa 10 Tagen. Die AAP nennt etwa zwei Wochen für die meisten und drei Wochen für fast alle Babys. Deine Hebamme oder Kinderärztin sagt dir, was für dein Baby gilt.`,
        },
        {
          question: `Was bedeutet die 3. und die 97. Perzentile?`,
          answer: `Bei der Körpergröße verläuft das Wachstum in der Regel zwischen diesen beiden Linien; die kleinsten 3 % einer Altersgruppe gelten als kleinwüchsig. Liegt ein Wert außerhalb, schaut die Kinderärztin genauer hin. Ein einzelner Wert ist aber noch keine Diagnose, entscheidend ist der Verlauf.`,
        },
      ],
      ctaText: `Gewicht, Länge und Kopfumfang in Mamio eintragen`,
      sources: [
        { publisher: `BIÖG / kindergesundheit-info.de`, title: `Gewichtsentwicklung des Babys`, url: `https://www.kindergesundheit-info.de/themen/ernaehrung/0-12-monate/gewichtsentwicklung/` },
        { publisher: `BIÖG / kindergesundheit-info.de`, title: `Wann haben Babys meist ihr Geburtsgewicht wieder erreicht?`, url: `https://www.kindergesundheit-info.de/themen/faq/wann-haben-babys-meist-ihr-geburtsgewicht-wieder-erreicht/` },
        { publisher: `Kinderärzte im Netz (BVKJ)`, title: `Was ist Kleinwuchs?`, url: `https://www.kinderaerzte-im-netz.de/krankheiten/kleinwuchs-wachstumsstoerungen/was-ist-kleinwuchs/` },
        { publisher: `DGSPJ`, title: `Qualitätspapier für die Nutzung einheitlicher Perzentilen in Deutschland`, url: `https://www.dgspj.de/wp-content/uploads/Perzentilen-Endversion.pdf` },
        { publisher: `RCPCH`, title: `Growth charts - information for parents and carers`, url: `https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers` },
        { publisher: `RCPCH`, title: `UK-WHO Growth Charts - Fact Sheet for Parents`, url: `https://www.rcpch.ac.uk/sites/default/files/Fact_Sheet_for_Parents.pdf` },
        { publisher: `RCPCH`, title: `Chart information for Health staff`, url: `https://growth.rcpch.ac.uk/clinician/chart-information-health-staff/` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Understanding Growth Charts: A Parent's Guide to Percentiles & Z-Scores`, url: `https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/growth-charts-by-the-numbers.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Your Baby's First Month: Growth & Physical Appearance`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Corrected Age For Preemies`, url: `https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx` },
        { publisher: `CDC`, title: `Use of World Health Organization and CDC Growth Charts for Children Aged 0--59 Months in the United States`, url: `https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5909a1.htm` },
        { publisher: `WHO`, title: `Child growth standards`, url: `https://www.who.int/news-room/questions-and-answers/item/child-growth-standards` },
      ],
    },
    fr: {
      metaTitle: `Courbe de croissance bébé : comprendre les percentiles | Mamio`,
      metaDescription: `Que signifie le percentile de votre bébé ? Lire la courbe de croissance, l'OMS et le carnet de santé, pourquoi l'évolution compte plus qu'un chiffre et quand consulter`,
      title: `Courbe de croissance de bébé : comment lire les percentiles`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Un percentile situe le poids, la taille ou le périmètre crânien de votre bébé par rapport aux enfants du même âge et du même sexe. Si votre bébé est au 25e percentile pour le poids, environ 25 bébés sur 100 de son âge pèsent moins que lui et environ 75 pèsent plus. Ce n'est pas une note : un bébé au 10e percentile n'est pas en moins bonne santé qu'un bébé au 90e. L'essentiel est qu'il grandisse régulièrement, dans son propre couloir.`,
      sections: [
        {
          title: `Ce que signifie un percentile : un exemple concret`,
          body: `Les courbes de croissance sont construites à partir des mesures de très nombreux enfants. Les lignes courbes montrent comment ces mesures se répartissent à chaque âge. Le 50e percentile est la ligne du milieu : la moitié des enfants de la population de référence se situe au-dessus, l'autre moitié en dessous.\n\nImaginez 100 petites filles du même âge alignées par ordre de taille. Si votre fille est au 25e percentile pour la taille, elle se trouverait à peu près à la 25e place : environ 24 sont plus petites, environ 75 plus grandes. Le principe est le même pour le poids et le périmètre crânien.\n\nEn France, on parle souvent de « couloir » : selon mpedia.fr (AFPA), un enfant évolue normalement dans son couloir de départ (selon les données notées à sa naissance), entre +2 et -2 DS. Les écarts-types (DS) ou z-scores sont aussi utilisés par les médecins ; selon l'Académie américaine de pédiatrie, un z-score de 0 correspond au 50e percentile, et le 10e percentile n'est ni meilleur ni moins bon que le 90e.`,
          list: [
            `50e percentile : le milieu de la population de référence, pas un objectif.`,
            `En dessous du 50e : plus petit ou plus léger que la moyenne, ce qui n'est pas un problème en soi.`,
            `Au-dessus du 50e : plus grand ou plus lourd que la moyenne, pas un problème en soi non plus.`,
            `Poids, taille et périmètre crânien ont chacun leur percentile, qui n'ont pas à coïncider.`,
          ],
        },
        {
          title: `Les standards de croissance de l'OMS`,
          body: `En 2006, l'Organisation mondiale de la santé (OMS) a publié ses standards de croissance de l'enfant, de la naissance à 5 ans. Ils reposent sur une vaste étude menée auprès d'enfants en bonne santé, allaités, vivant dans de bonnes conditions au Brésil, au Ghana, en Inde, en Norvège, à Oman et aux États-Unis. L'OMS considère l'enfant allaité comme le modèle normatif de la croissance ; l'ancienne référence reposait sur des enfants nourris artificiellement.\n\nCes courbes décrivent la façon dont un enfant devrait grandir dans des conditions optimales, d'où le terme de standards. Aux États-Unis, les CDC les recommandent pour tous les enfants de moins de 2 ans, quel que soit le mode d'alimentation. En France, les chercheurs de l'Inserm ont montré que les courbes de l'OMS n'étaient pas optimales pour suivre la croissance des enfants français d'aujourd'hui, d'où les courbes françaises du carnet de santé.\n\nMamio utilise les standards de l'OMS de la naissance à 24 mois. Pour afficher les percentiles, l'application a besoin du sexe de votre bébé, car les courbes sont différentes pour les filles et les garçons. Après 24 mois, l'application ne calcule plus de percentiles. Les percentiles affichés, les bandes de percentiles OMS et la comparaison avec la moyenne OMS font partie de Mamio Pro.`,
        },
        {
          title: `Les courbes du carnet de santé et celles des autres pays`,
          body: `Tous les pays n'impriment pas les mêmes courbes dans leur carnet de suivi. C'est l'une des raisons pour lesquelles un percentile affiché dans une application peut légèrement différer de celui du carnet, sans que l'un des deux soit faux.\n\nLes carnets de santé distribués à partir d'avril 2018 contiennent les courbes françaises AFPA-CRESS/Inserm-CompuGroup Medical 2018, établies à la demande de la Direction générale de la santé à partir de millions de mesures recueillies auprès de pédiatres et de médecins généralistes. Elles distinguent filles et garçons dès 0-3 ans, et les courbes de périmètre crânien vont jusqu'à 5 ans. Seules les données d'enfants nés avec un poids supérieur à 2 500 grammes ont été utilisées.`,
          list: [
            `France : courbes AFPA-CRESS/Inserm 2018 dans le carnet de santé.`,
            `États-Unis : standards OMS jusqu'à 2 ans, puis courbes des CDC.`,
            `Royaume-Uni : courbes UK-WHO dans le « Red Book », fondées sur l'OMS à partir de 2 semaines ; aucune ligne de centile entre la naissance et 2 semaines.`,
            `Allemagne : courbes de référence allemandes dans le carnet jaune (Gelbes Heft).`,
          ],
        },
        {
          title: `Poids, taille, périmètre crânien : ce que dit chaque mesure`,
          body: `À chaque consultation, le médecin reporte dans le carnet de santé le poids, la taille (mesurée allongé chez le nourrisson) et le périmètre crânien sur les courbes correspondantes. Cette surveillance régulière permet d'être alerté tôt en cas d'anomalie.\n\nLe poids réagit le plus vite à l'alimentation et aux maladies, il varie donc davantage. La taille est difficile à mesurer précisément, ce qui explique qu'elle ne soit pas mesurée à chaque consultation et que les mesures à la maison restent approximatives. L'Académie américaine de pédiatrie indique que l'on surveille le périmètre crânien chez le nourrisson pour s'assurer que le cerveau se développe ; les pédiatres britanniques (RCPCH) précisent qu'un périmètre au-dessus du 99,6e centile ne doit inquiéter que s'il continue à augmenter après 6 mois ou s'il existe d'autres signes.\n\nRegardez aussi les courbes ensemble. Chaque mesure a son propre percentile et chaque enfant est différent : selon le RCPCH, même des jumeaux peuvent avoir des courbes différentes.`,
        },
        {
          title: `Pourquoi l'évolution compte plus qu'un seul chiffre`,
          body: `Une mesure isolée n'est qu'une photo. Plusieurs points reportés sur des semaines et des mois montrent la tendance, et c'est elle que regarde le médecin. mpedia.fr explique que toute cassure ou accélération de la vitesse de croissance est un signe d'alerte à ne pas négliger, tandis qu'un petit écart peut avoir une explication logique, par exemple une maladie ou une hospitalisation avec une petite perte de poids. L'Académie américaine de pédiatrie recommande de se concentrer sur le rythme et la tendance de la croissance plutôt que sur un chiffre précis.\n\nLe poids suit rarement une ligne parfaite pendant la première année. Les pédiatres britanniques jugent normal que les points montent et descendent un peu ou se rapprochent progressivement de la ligne voisine ; franchir deux lignes est moins fréquent et le professionnel de santé surveille alors l'enfant de plus près. Si l'évolution paraît inhabituelle, il peut refaire des mesures, examiner l'alimentation ou chercher d'autres causes ; la plupart des enfants ainsi examinés vont très bien.\n\nD'après le RCPCH, une fois l'enfant guéri d'une maladie, son poids revient en général à son centile habituel en 2 à 3 semaines ; si ce n'est pas le cas, parlez-en à un professionnel de santé.`,
        },
        {
          title: `Perte de poids du nouveau-né et retour au poids de naissance`,
          body: `Presque tous les nouveau-nés perdent un peu de poids pendant leurs premiers jours, en partie parce qu'ils naissent avec un excès de liquide. Selon l'Académie américaine de pédiatrie (HealthyChildren.org), la prise de poids reprend vers le 5e jour, la plupart des bébés retrouvent leur poids de naissance vers deux semaines et presque tous l'ont retrouvé à trois semaines.\n\nEn France, mpedia.fr (AFPA) est plus précis : une perte dépassant 8 à 10 % du poids de naissance attire la vigilance des équipes, le poids remonte en général vers le 5e ou le 6e jour, et si le bébé n'a pas dépassé son poids de naissance à 10 jours de vie, il faut prendre rendez-vous avec le pédiatre ou le médecin généraliste. Le carnet de santé contient une page pour tracer la courbe de poids des premiers jours et conseille de faire examiner le bébé dans les 15 premiers jours de vie. Suivez les indications de votre sage-femme, de la PMI ou de votre pédiatre.\n\nInutile donc de comparer le poids d'un bébé de 5 jours au percentile de sa naissance : la petite baisse initiale est attendue.`,
        },
        {
          title: `Bébés prématurés et âge corrigé`,
          body: `Si votre bébé est né avant terme, le comparer aux bébés nés à terme le même jour donnerait une image faussée. On utilise donc l'âge corrigé : on retire de son âge réel en semaines le nombre de semaines d'avance à la naissance. Un bébé né à 32 semaines d'aménorrhée est né environ 8 semaines en avance ; à 4 mois, son âge corrigé est d'environ 2 mois.\n\nSelon l'Académie américaine de pédiatrie, pendant les 2 premières années, l'âge corrigé donne une meilleure idée du moment où les bébés atteignent les étapes du développement. Les courbes françaises du carnet de santé ont été construites sans les enfants nés avec un poids inférieur à 2 500 grammes ; votre pédiatre ou l'équipe de néonatologie vous dira comment suivre la croissance de votre bébé.\n\nMamio calcule les percentiles avec l'âge réel, pas l'âge corrigé, et les standards OMS décrivent des bébés nés à terme. Si votre bébé est prématuré, demandez à votre médecin comment interpréter les chiffres.`,
        },
        {
          title: `Bien mesurer et garder une trace à la maison`,
          body: `Beaucoup de « sauts » inquiétants sur une courbe sont en réalité des écarts de mesure ou de report sur la courbe. Selon le RCPCH, une erreur de report peut faire paraître anormale une croissance normale, et toute personne qui mesure ou reporte doit être formée. Quelques habitudes rendent vos relevés plus utiles :`,
          list: [
            `Notez où la mesure a été prise (cabinet, PMI, maternité, maison) et pesez si possible toujours sur la même balance ; une pesée à domicile n'est pas forcément médicalement exacte.`,
            `Pesez à des moments comparables : une pesée juste après un gros repas et une autre avant le suivant peuvent donner l'impression que bébé n'a pas grossi.`,
            `La taille est difficile à mesurer précisément et n'est pas mesurée à chaque consultation ; considérez les mesures faites à la maison comme approximatives.`,
            `Pendant le premier mois, mpedia.fr conseille une pesée par semaine chez la sage-femme ou en PMI plutôt que sur une balance louée, dont la fiabilité n'est pas garantie ; si bébé va bien, ce n'est pas indispensable.`,
            `Apportez vos relevés au médecin plutôt que de tirer une conclusion d'une seule mesure.`,
          ],
        },
        {
          title: `Quand en parler à votre médecin`,
          body: `La plupart des bébés qui ne sont pas au 50e percentile sont en parfaite santé. Parlez-en toutefois à votre médecin, à votre sage-femme ou à la PMI si vous remarquez l'un des points ci-dessous, ou si vous êtes simplement inquiet.\n\nSi votre bébé semble gravement malade, appelez le 15 (SAMU) ou le 112.`,
          list: [
            `Le poids franchit deux lignes de percentiles ou plus, surtout vers le bas.`,
            `La courbe de poids s'infléchit et continue de baisser d'une mesure à l'autre.`,
            `Votre bébé n'a pas retrouvé son poids de naissance dans le délai attendu par votre sage-femme ou votre médecin (en France, mpedia.fr conseille de consulter s'il ne l'a pas dépassé à 10 jours).`,
            `Le poids ne revient pas à son couloir habituel dans les 2 à 3 semaines après une maladie.`,
            `Le périmètre crânien est au-dessus de la ligne du haut et continue de monter après 6 mois, ou il y a d'autres signes inquiétants.`,
            `La courbe de taille sort de son couloir (au-delà de +2 ou -2 DS), présente une cassure ou une accélération suspecte, ou vous êtes simplement inquiet pour l'alimentation ou la croissance.`,
          ],
        },
      ],
      faq: [
        {
          question: `Le 50e percentile est-il le poids idéal pour un bébé ?`,
          answer: `Non. Le 50e percentile n'est que le milieu de la population de référence. Un bébé peut être en parfaite santé au 10e ou au 90e percentile s'il grandit régulièrement dans son couloir.`,
        },
        {
          question: `Mon bébé est en bas de la courbe, est-ce grave ?`,
          answer: `Pas en soi. Certains enfants sont naturellement menus. Ce qui compte, c'est la régularité : un bébé qui reste dans son couloir grandit en général bien, alors qu'un infléchissement ou une cassure de la courbe doit être vérifié par le médecin.`,
        },
        {
          question: `Pourquoi le percentile de l'application diffère-t-il de celui du carnet de santé ?`,
          answer: `Le carnet de santé utilise les courbes françaises AFPA-CRESS/Inserm 2018, tandis que Mamio utilise les standards de l'OMS. De petites différences sont normales ; l'important est l'évolution sur une même courbe.`,
        },
        {
          question: `Quand un bébé retrouve-t-il son poids de naissance ?`,
          answer: `Selon l'Académie américaine de pédiatrie, la plupart des bébés le retrouvent vers deux semaines et presque tous à trois semaines. En France, mpedia.fr conseille de consulter si le poids de naissance n'est pas dépassé à 10 jours. Votre sage-femme ou votre pédiatre vous dira ce qui est attendu pour votre bébé.`,
        },
        {
          question: `Que signifie un écart de +2 ou -2 DS ?`,
          answer: `Selon mpedia.fr, un enfant évolue normalement dans son couloir de départ, entre +2 et -2 DS. Une courbe qui en sort, ou qui marque une cassure ou une accélération suspecte, intéresse le médecin, mais c'est l'évolution qui permet de juger.`,
        },
      ],
      ctaText: `Notez poids, taille et périmètre crânien dans Mamio`,
      sources: [
        { publisher: `mpedia.fr (AFPA)`, title: `Courbes de croissance et de poids : leur utilité`, url: `https://www.mpedia.fr/art-les-courbes-croissance/` },
        { publisher: `Inserm`, title: `De nouvelles courbes de croissance de référence françaises`, url: `https://presse.inserm.fr/de-nouvelles-courbes-de-croissance-de-reference-francaises/30775/` },
        { publisher: `AFPA`, title: `Notice explicative des nouvelles courbes de croissance des enfants français`, url: `https://afpa.org/content/uploads/2018/03/Notice-des-nouvelles-courbes-de-croissance-AFPA-CRESS-INSERM-CGM-2018.pdf` },
        { publisher: `OMS (WHO)`, title: `Child growth standards`, url: `https://www.who.int/news-room/questions-and-answers/item/child-growth-standards` },
        { publisher: `CDC`, title: `Use of World Health Organization and CDC Growth Charts for Children Aged 0--59 Months in the United States`, url: `https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5909a1.htm` },
        { publisher: `RCPCH`, title: `Growth charts - information for parents and carers`, url: `https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers` },
        { publisher: `RCPCH`, title: `UK-WHO Growth Charts - Fact Sheet for Parents`, url: `https://www.rcpch.ac.uk/sites/default/files/Fact_Sheet_for_Parents.pdf` },
        { publisher: `RCPCH`, title: `Chart information for Health staff`, url: `https://growth.rcpch.ac.uk/clinician/chart-information-health-staff/` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Understanding Growth Charts: A Parent's Guide to Percentiles & Z-Scores`, url: `https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/growth-charts-by-the-numbers.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Your Baby's First Month: Growth & Physical Appearance`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Corrected Age For Preemies`, url: `https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx` },
      ],
    },
    'pt-br': {
      metaTitle: `Percentil do bebê: o que significa e como ler | Mamio`,
      metaDescription: `Entenda o que é o percentil do bebê, como ler a curva de crescimento da OMS, por que a tendência importa mais que um número e quando conversar com o pediatra.`,
      title: `Percentil do bebê: o que significa e como ler a curva de crescimento`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `O percentil compara o peso, o comprimento ou o perímetro cefálico do seu bebê com o de outras crianças da mesma idade e do mesmo sexo. Se o seu bebê está no percentil 25 de peso, cerca de 25 em cada 100 bebês da mesma idade pesam menos e cerca de 75 pesam mais. Não é uma nota: um bebê no percentil 10 não é menos saudável do que um no percentil 90. O mais importante é que ele cresça de forma constante, seguindo a própria curva.`,
      sections: [
        {
          title: `O que é percentil: um exemplo prático`,
          body: `As curvas de crescimento são feitas a partir das medidas de muitas crianças saudáveis. As linhas curvas mostram como essas medidas se distribuem em cada idade. O percentil 50 é a linha do meio: metade das crianças da referência fica acima dela e metade abaixo.\n\nImagine 100 meninas da mesma idade enfileiradas por altura. Se a sua filha está no percentil 25 de comprimento, ela estaria mais ou menos na 25ª posição: cerca de 24 são menores e cerca de 75 são maiores. O raciocínio é o mesmo para o peso e para o perímetro cefálico.\n\nA Academia Americana de Pediatria (AAP) lembra que percentil não é boletim escolar: estar no percentil 10 não é melhor nem pior do que estar no 90. Os médicos também usam o escore z; um escore z igual a 0 corresponde ao percentil 50. Na Caderneta de Saúde da Criança, do Ministério da Saúde, os pontos de corte dos gráficos são marcados em escores z, e o escore z -2 corresponde a cerca do percentil 2,3 (97,7 para +2).`,
          list: [
            `Percentil 50: o meio do grupo de referência, não uma meta.`,
            `Abaixo do 50: menor ou mais leve que a média, o que sozinho não é problema.`,
            `Acima do 50: maior ou mais pesado que a média, o que sozinho também não é problema.`,
            `Peso, comprimento e perímetro cefálico têm percentis próprios, que não precisam coincidir.`,
          ],
        },
        {
          title: `Os padrões de crescimento da OMS`,
          body: `Em 2006, a Organização Mundial da Saúde (OMS) publicou os Padrões de Crescimento Infantil, do nascimento aos 5 anos. Eles se baseiam em um grande estudo com crianças saudáveis e amamentadas, criadas em boas condições, no Brasil, em Gana, na Índia, na Noruega, em Omã e nos Estados Unidos. A OMS considera a criança amamentada o modelo normativo de crescimento; a referência anterior se baseava em crianças alimentadas artificialmente.\n\nComo mostram como as crianças devem crescer em condições ideais, essas curvas são chamadas de padrões. Nos Estados Unidos, o CDC as recomenda para todas as crianças menores de 2 anos, independentemente da forma de alimentação.\n\nO Mamio usa os padrões da OMS do nascimento aos 24 meses. Para mostrar os percentis, o app precisa saber o sexo do bebê, porque meninos e meninas têm curvas diferentes. Depois dos 24 meses, o app não calcula percentis. Os rótulos de percentil, as faixas de percentil da OMS e a comparação com a média da OMS fazem parte do Mamio Pro.`,
        },
        {
          title: `Quais curvas cada país usa`,
          body: `Nem todo país imprime as mesmas curvas na caderneta de saúde. Por isso o percentil de um aplicativo pode diferir um pouco do registrado pelo pediatra, sem que nenhum dos dois esteja errado.\n\nNo Brasil, a Caderneta de Saúde da Criança do Ministério da Saúde traz gráficos de perímetro cefálico (0 a 2 anos), peso para idade e comprimento/altura para idade, e informa que os gráficos adotados são os recomendados pela OMS. Se tiver dúvida sobre qual curva foi usada em uma consulta, pergunte ao pediatra ou à equipe da unidade de saúde.`,
          list: [
            `Brasil: Caderneta de Saúde da Criança com gráficos recomendados pela OMS, com pontos de corte em escores z.`,
            `Estados Unidos: padrões da OMS até 2 anos, depois curvas do CDC.`,
            `Reino Unido: curvas UK-WHO no "Red Book", baseadas na OMS a partir de 2 semanas; não há linhas de percentil entre o nascimento e 2 semanas.`,
            `Alemanha e França: curvas de referência nacionais nas cadernetas.`,
          ],
        },
        {
          title: `Peso, comprimento e perímetro cefálico: o que cada medida mostra`,
          body: `Em crianças menores de 2 anos, o acompanhamento usa três medidas: peso, comprimento (medido deitado) e perímetro cefálico. A Caderneta lembra que crianças menores de 2 anos devem ser medidas deitadas.\n\nO peso é o que reage mais rápido à alimentação e às doenças, por isso varia mais. O comprimento é difícil de medir com precisão, por isso não é medido em toda consulta e as medidas caseiras são apenas aproximadas. A AAP explica que o perímetro cefálico é acompanhado nos bebês porque se quer saber se o cérebro está crescendo. Na Caderneta, um perímetro cefálico abaixo de -2 ou acima de +2 escores z está entre os sinais que pedem atenção do profissional de saúde; pelo RCPCH (Reino Unido), um perímetro acima do percentil 99,6 só preocupa se continuar subindo depois dos 6 meses ou se houver outros sinais.\n\nVale olhar as medidas em conjunto. Cada uma tem o seu percentil, e cada criança é diferente: segundo o RCPCH, até gêmeos podem ter padrões de crescimento diferentes.`,
        },
        {
          title: `Por que a tendência importa mais que um número`,
          body: `Uma medida isolada é só uma fotografia. Várias medidas ao longo de semanas e meses mostram o desenho da curva, e é isso que o pediatra avalia. A AAP orienta os pais a prestar atenção ao ritmo e à tendência do crescimento, e não a um número específico.\n\nA Caderneta explica que a curva de uma criança que cresce bem tende a seguir um traçado paralelo à linha da mediana; qualquer mudança rápida nessa tendência deve ser investigada, um traçado horizontal indica que a criança não está crescendo, e um traçado que cruza uma linha de escore z pode indicar risco, que o profissional de saúde interpreta pela posição do ponto e pela velocidade da mudança.\n\nNo primeiro ano, o peso raramente segue uma linha perfeita. Para o RCPCH, é normal os pontos subirem e descerem um pouco ou se aproximarem aos poucos da linha vizinha; cruzar duas linhas é menos comum, e então o profissional de saúde acompanha a criança mais de perto.\n\nUma doença passageira pode causar uma queda. Segundo o RCPCH, depois que a criança se recupera, o peso costuma voltar ao percentil de antes em 2 a 3 semanas; se isso não acontecer, converse com o pediatra ou a equipe de saúde.`,
        },
        {
          title: `Perda de peso do recém-nascido e recuperação do peso de nascimento`,
          body: `Quase todo recém-nascido perde um pouco de peso nos primeiros dias, em parte porque nasce com excesso de líquido no corpo. Segundo a AAP (HealthyChildren.org), o ganho de peso volta por volta do 5º dia, a maioria dos bebês recupera o peso de nascimento em cerca de duas semanas e quase todos já o recuperaram com três semanas.\n\nA Caderneta de Saúde da Criança, do Ministério da Saúde, diz que nos primeiros dias o bebê perde um pouco de peso, mas por volta do décimo dia já recupera o peso de nascimento. Siga as orientações da maternidade, da unidade de saúde e do pediatra, que acompanham o bebê e a amamentação.\n\nPor isso não faz sentido comparar o peso de um bebê de 5 dias com o percentil do nascimento: a pequena queda inicial é esperada.`,
        },
        {
          title: `Bebês prematuros e idade corrigida`,
          body: `Se o seu bebê nasceu antes do tempo, compará-lo com bebês nascidos a termo na mesma data dá uma ideia distorcida. Por isso usa-se a idade corrigida: subtraia da idade real em semanas o número de semanas que ele nasceu antes. Um bebê nascido com 32 semanas nasceu 8 semanas antes; aos 4 meses, tem idade corrigida de cerca de 2 meses.\n\nA Caderneta de Saúde da Criança diz que o acompanhamento do crescimento de crianças pré-termo exige curvas específicas e que a curva da OMS pode ser usada, mas com correção da idade cronológica até os 2 anos. A AAP também aponta os 2 primeiros anos para usar a idade corrigida. O pediatra ou a equipe de neonatologia dirá qual curva usar.\n\nO Mamio calcula os percentis com a idade real, não com a idade corrigida, e os padrões da OMS descrevem bebês nascidos a termo. Se o seu bebê é prematuro, pergunte ao pediatra como interpretar os números.`,
        },
        {
          title: `Como medir direito e registrar em casa`,
          body: `Muitos "saltos" assustadores na curva são, na verdade, diferenças de medição ou de marcação no gráfico. Segundo o RCPCH, um erro de marcação pode fazer um crescimento normal parecer um problema, e quem mede ou marca o gráfico deve ser treinado. Alguns hábitos tornam seus registros mais úteis:`,
          list: [
            `Anote onde a medida foi feita (consultório, unidade de saúde, casa) e use sempre a mesma balança, se possível. Um peso feito em casa pode não ser medicamente exato.`,
            `Pese em horários parecidos: um peso logo depois de uma mamada grande e outro antes da mamada seguinte podem dar a impressão de que o bebê não ganhou peso.`,
            `O comprimento é difícil de medir com precisão e não é medido em toda consulta; trate as medidas caseiras como aproximadas.`,
            `Leve seus registros ao pediatra em vez de tirar conclusões de uma única medida e não mude a alimentação do bebê só por causa de um número sem falar com a equipe de saúde.`,
          ],
        },
        {
          title: `Quando conversar com o pediatra`,
          body: `A maioria dos bebês fora do percentil 50 é perfeitamente saudável. Mesmo assim, converse com o pediatra ou com a equipe da unidade de saúde se notar algum dos pontos abaixo, ou se simplesmente estiver preocupado.\n\nSe o bebê parecer gravemente doente, ligue para o SAMU 192.`,
          list: [
            `O peso cruza duas ou mais linhas de percentil, principalmente para baixo.`,
            `O peso do bebê continua caindo de uma medida para a outra, ou o traçado fica horizontal.`,
            `O bebê não recuperou o peso de nascimento no prazo esperado pela equipe (a Caderneta indica por volta do 10º dia; quase todos recuperam até 3 semanas).`,
            `O peso não volta ao percentil habitual em 2 a 3 semanas depois de uma doença.`,
            `O perímetro cefálico está abaixo de -2 ou acima de +2 escores z, ou fica acima da linha de cima e continua subindo depois dos 6 meses, ou há outros sinais preocupantes.`,
            `Um ponto do gráfico sai da área entre as duas linhas vermelhas da Caderneta, ou você simplesmente está preocupado com a alimentação ou o crescimento.`,
          ],
        },
      ],
      faq: [
        {
          question: `O percentil 50 é o peso ideal do bebê?`,
          answer: `Não. O percentil 50 é só o meio do grupo de referência. Um bebê pode ser saudável no percentil 10 ou 90, desde que cresça de forma constante na própria curva.`,
        },
        {
          question: `Percentil baixo é preocupante?`,
          answer: `Não por si só. Algumas crianças são naturalmente menores. O que importa é a tendência: um bebê que se mantém perto do mesmo percentil costuma estar crescendo bem; quedas repetidas devem ser avaliadas.`,
        },
        {
          question: `Quantas linhas de percentil o bebê pode cair?`,
          answer: `Mudar uma linha é comum. Cruzar duas linhas é menos comum e merece atenção do pediatra, segundo o RCPCH e o NHS britânicos. Na Caderneta, qualquer mudança rápida na tendência da curva deve ser investigada.`,
        },
        {
          question: `Quando o bebê recupera o peso de nascimento?`,
          answer: `Segundo a Caderneta de Saúde da Criança, por volta do décimo dia. A AAP diz que a maioria recupera em cerca de duas semanas e quase todos até três semanas. A equipe que acompanha o bebê dirá o que esperar no caso dele.`,
        },
      ],
      ctaText: `Registre peso, comprimento e perímetro cefálico no Mamio`,
      sources: [
        { publisher: `Ministério da Saúde`, title: `Caderneta de Saúde da Criança - Menina (8ª edição)`, url: `https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_saude_crianca_menina.pdf` },
        { publisher: `OMS (WHO)`, title: `Child growth standards`, url: `https://www.who.int/news-room/questions-and-answers/item/child-growth-standards` },
        { publisher: `OMS (WHO)`, title: `World Health Organization releases new Child Growth Standards`, url: `https://www.who.int/news/item/27-04-2006-world-health-organization-releases-new-child-growth-standards` },
        { publisher: `CDC`, title: `Use of World Health Organization and CDC Growth Charts for Children Aged 0--59 Months in the United States`, url: `https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5909a1.htm` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Understanding Growth Charts: A Parent's Guide to Percentiles & Z-Scores`, url: `https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/growth-charts-by-the-numbers.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Your Baby's First Month: Growth & Physical Appearance`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Corrected Age For Preemies`, url: `https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx` },
        { publisher: `RCPCH`, title: `Growth charts - information for parents and carers`, url: `https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers` },
        { publisher: `RCPCH`, title: `UK-WHO Growth Charts - Fact Sheet for Parents`, url: `https://www.rcpch.ac.uk/sites/default/files/Fact_Sheet_for_Parents.pdf` },
        { publisher: `RCPCH`, title: `Chart information for Health staff`, url: `https://growth.rcpch.ac.uk/clinician/chart-information-health-staff/` },
        { publisher: `NHS`, title: `Your baby's weight and height`, url: `https://www.nhs.uk/baby/babys-development/height-weight-and-reviews/baby-height-and-weight/` },
      ],
    },
    tr: {
      metaTitle: `Bebek Persentil Nasıl Okunur? Büyüme Eğrisi | Mamio`,
      metaDescription: `Bebek persentili ne anlama gelir, DSÖ büyüme eğrisi nasıl okunur, neden tek bir sayıdan çok gidişat önemlidir ve ne zaman doktora danışmalısınız? Hepsi bu rehberde.`,
      title: `Bebek persentili nasıl okunur? Büyüme eğrisi rehberi`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Persentil, bebeğinizin kilosunu, boyunu veya baş çevresini aynı yaş ve cinsiyetteki çocuklarla karşılaştırır. Bebeğiniz kiloda 25. persentildeyse, aynı yaştaki 100 bebekten yaklaşık 25'i ondan hafif, yaklaşık 75'i ondan ağırdır. Bu bir not değildir: 10. persentildeki bir bebek, 90. persentildekinden daha az sağlıklı değildir. Asıl önemli olan, bebeğinizin zaman içinde kendi eğrisinde düzenli büyümesidir.`,
      sections: [
        {
          title: `Persentil ne demek: örnekle anlatım`,
          body: `Büyüme eğrileri çok sayıda sağlıklı çocuğun ölçümlerinden oluşturulur. Eğri çizgiler, her yaşta bu ölçümlerin nasıl dağıldığını gösterir. 50. persentil ortadaki çizgidir: referans grubundaki çocukların yarısı bunun üstünde, yarısı altındadır.\n\nAynı yaştaki 100 kız bebeği boy sırasına dizdiğinizi düşünün. Kızınız boyda 25. persentildeyse yaklaşık 25. sırada durur: Yaklaşık 24'ü ondan kısa, yaklaşık 75'i ondan uzundur. Kilo ve baş çevresi için de mantık aynıdır.\n\nAmerikan Pediatri Akademisi (AAP), persentilin okul notu gibi olmadığını vurgular: 10. persentilde olmak 90. persentilde olmaktan daha iyi ya da kötü değildir. Genetik, çevre, beslenme, aktivite ve sağlık sorunları çocuğun nasıl büyüdüğünü etkileyebilir. Doktorlar bazen z-skoru da kullanır; z-skoru 0, 50. persentile karşılık gelir. T.C. Sağlık Bakanlığı izlem protokolü de çocukların çoğunun genetik olarak belirlenmiş bir persentili izlediğini, daha önce stabil olan eğriden önemli sapmaların araştırılması gerektiğini belirtir.`,
          list: [
            `50. persentil: referans grubunun ortası, bir hedef değil.`,
            `50'nin altı: ortalamadan küçük veya hafif; tek başına sorun değildir.`,
            `50'nin üstü: ortalamadan büyük veya ağır; bu da tek başına sorun değildir.`,
            `Kilo, boy ve baş çevresinin her birinin ayrı persentili vardır ve aynı olmaları gerekmez.`,
          ],
        },
        {
          title: `Dünya Sağlık Örgütü (DSÖ) büyüme standartları`,
          body: `Dünya Sağlık Örgütü 2006'da doğumdan 5 yaşa kadar çocuklar için Çocuk Büyüme Standartları'nı yayımladı. Bu standartlar Brezilya, Gana, Hindistan, Norveç, Umman ve ABD'de iyi koşullarda büyüyen, anne sütüyle beslenen sağlıklı çocukları izleyen büyük bir çalışmaya dayanır. DSÖ, anne sütüyle beslenen çocuğu büyüme için normatif model olarak kabul eder; önceki referans ise yapay beslenen çocuklara dayanıyordu.\n\nBu eğriler çocukların en uygun koşullarda nasıl büyümesi gerektiğini gösterdiği için "standart" olarak adlandırılır. ABD'de CDC, beslenme şekli ne olursa olsun 2 yaş altındaki tüm çocuklar için DSÖ standartlarını önerir.\n\nMamio, doğumdan 24 aya kadar DSÖ standartlarını kullanır. Persentilleri gösterebilmek için bebeğinizin cinsiyetini bilmesi gerekir, çünkü kız ve erkek bebeklerin eğrileri ayrıdır. 24 aydan sonra uygulama persentil hesaplamaz. Persentil etiketleri, DSÖ persentil bantları ve DSÖ ortalamasıyla karşılaştırma Mamio Pro'ya dahildir.`,
        },
        {
          title: `Hangi ülke hangi eğrileri kullanıyor`,
          body: `Her ülke sağlık kayıtlarında aynı eğrileri kullanmaz. Bu yüzden bir uygulamadaki persentil, doktorunuzun söylediğinden biraz farklı çıkabilir ve bu, ikisinden birinin yanlış olduğu anlamına gelmez.\n\nT.C. Sağlık Bakanlığı'nın (Türkiye Halk Sağlığı Kurumu) bebek, çocuk, ergen izlem protokolleri, muayenede ölçümlerin büyüme eğrilerine işaretlenmesini ister ve zayıflık ile fazla kiloyu DSÖ Çocuk Büyüme Standartları'ndaki z-skorlarıyla tanımlar. Bebeğinizin kayıtlarında hangi eğrinin kullanıldığını merak ediyorsanız aile hekiminize veya çocuk doktorunuza sormanız en doğrusudur.`,
          list: [
            `Türkiye: Sağlık Bakanlığı izlem protokolleri DSÖ z-skorlarına dayanır; kayıtlarınızdaki eğriyi doktorunuza sorun.`,
            `ABD: 2 yaşa kadar DSÖ standartları, sonrasında CDC eğrileri.`,
            `Birleşik Krallık: "Red Book" içinde UK-WHO eğrileri; 2 haftadan itibaren DSÖ'ye dayanır, doğum ile 2 hafta arasında persentil çizgisi yoktur.`,
            `Almanya ve Fransa: sağlık kitapçıklarında ulusal referans eğrileri.`,
          ],
        },
        {
          title: `Kilo, boy ve baş çevresi: her ölçüm ne anlatır`,
          body: `2 yaş altındaki çocuklarda üç ölçüm izlenir: kilo, boy (yatarak ölçülür) ve baş çevresi.\n\nKilo beslenmeye ve hastalığa en hızlı tepki veren ölçümdür, bu yüzden en çok dalgalanan da odur. Boy evde doğru ölçmek zor olduğundan her kontrolde ölçülmez ve evdeki ölçümler yaklaşıktır. AAP, bebeklikte baş çevresinin beynin büyüdüğünden emin olmak için izlendiğini belirtir. İngiliz çocuk doktorları (RCPCH), baş çevresinin 99,6. persentilin üstünde olmasının ancak 6 aydan sonra yükselmeye devam ederse veya başka belirtiler varsa endişe nedeni olduğunu söyler.\n\nÖlçümlere birlikte bakmak da faydalıdır. Her ölçümün kendi persentili vardır ve her çocuk farklıdır: RCPCH'ye göre ikizlerin bile büyüme örüntüleri farklı olabilir.`,
        },
        {
          title: `Neden tek bir sayı değil, gidişat önemli`,
          body: `Tek bir ölçüm sadece bir fotoğraftır. Haftalar ve aylar boyunca alınan ölçümler eğrinin gidişatını gösterir ve doktorun baktığı şey budur. AAP, ebeveynlerin belirli bir sayıya değil büyümenin hızına ve eğilimine odaklanmasını önerir.\n\nT.C. Sağlık Bakanlığı izlem protokolü, çocuğun eğrisinin standart eğriye paralel gitmesi gerektiğini, eğri düzleşir ya da aşağı inmeye başlarsa araştırma yapılması gerektiğini belirtir; büyüme yetersizliği için bulunduğu persentilden iki majör persentil düşme aranır.\n\nİlk yılda kilo nadiren tek bir çizgiyi birebir izler. RCPCH'ye göre noktaların biraz inip çıkması veya yavaş yavaş yandaki çizgiye yaklaşması normaldir; iki çizgiyi geçmek daha az görülür ve sağlık çalışanı çocuğu daha yakından izler.\n\nKısa süreli bir hastalık kiloda geçici bir düşüşe yol açabilir. RCPCH'ye göre çocuk iyileştikten sonra kilo genellikle 2–3 hafta içinde eski persentiline döner; dönmezse sağlık çalışanınıza danışın.`,
        },
        {
          title: `Yenidoğanda kilo kaybı ve doğum kilosuna dönüş`,
          body: `Neredeyse tüm yenidoğanlar ilk günlerde biraz kilo kaybeder; bunun bir nedeni vücuttaki fazla sıvının atılmasıdır. AAP'nin HealthyChildren.org sitesine göre kilo alımı 5. gün civarında yeniden başlar, bebeklerin çoğu yaklaşık iki haftada doğum kilosuna döner ve neredeyse tamamı üç haftaya kadar döner.\n\nBu dönemde ebeniz, aile hekiminiz veya çocuk doktorunuz bebeğinizi tartar ve beslenmesini izler; onların önerilerini takip edin.\n\nBu yüzden 5 günlük bir bebeğin kilosunu doğumdaki persentiliyle karşılaştırıp endişelenmeyin: ilk günlerdeki küçük düşüş beklenen bir durumdur.`,
        },
        {
          title: `Prematüre bebekler ve düzeltilmiş yaş`,
          body: `Bebeğiniz erken doğduysa, onu aynı gün doğmuş zamanında doğan bebeklerle karşılaştırmak yanıltıcı olur. Bu nedenle düzeltilmiş yaş kullanılır: Bebeğin hafta olarak gerçek yaşından, kaç hafta erken doğduğunu çıkarırsınız. 32. haftada doğan bir bebek yaklaşık 8 hafta erken doğmuştur; 4 aylıkken düzeltilmiş yaşı yaklaşık 2 aydır.\n\nAAP, ilk 2 yılda düzeltilmiş yaşın bebeklerin gelişim basamaklarına ne zaman ulaştığı konusunda daha iyi fikir verdiğini söyler. T.C. Sağlık Bakanlığı izlem protokolü ise 37 hafta ve altında doğan bebekler için iki ya da üç yaşa kadar düzeltilmiş yaş kullanılmasını önerir; yani yerel rehber küresel rehberden biraz farklıdır. Hangisinin bebeğiniz için uygun olduğunu çocuk doktorunuz söyleyecektir.\n\nMamio persentilleri gerçek yaşa göre hesaplar, düzeltilmiş yaşa göre değil; kullandığı DSÖ standartları da zamanında doğan bebekleri tanımlar. Bebeğiniz prematüre doğduysa sayıları nasıl yorumlayacağınızı doktorunuza sorun.`,
        },
        {
          title: `Doğru ölçüm ve evde kayıt tutma`,
          body: `Eğrideki endişe verici "sıçramaların" çoğu aslında ölçüm veya eğriye işaretleme farkıdır. RCPCH'ye göre bir işaretleme hatası normal büyümeyi sorunlu gösterebilir; ölçen ve işaretleyen kişinin eğitimli olması gerekir. Birkaç alışkanlık kayıtlarınızı daha faydalı hale getirir:`,
          list: [
            `Ölçümün nerede yapıldığını not edin (muayenehane, aile sağlığı merkezi, ev) ve mümkünse hep aynı tartıyı kullanın. Evde yapılan tartı tıbbi olarak kesin olmayabilir.`,
            `Benzer saatlerde tartın: büyük bir öğünden hemen sonra yapılan tartı ile bir sonraki öğünden önce yapılan tartı, bebeğin kilo almadığı izlenimi verebilir.`,
            `Boy doğru ölçülmesi zor bir ölçümdür ve her kontrolde ölçülmez; evdeki ölçümleri yaklaşık kabul edin.`,
            `Tek bir ölçümden sonuç çıkarmak yerine kayıtlarınızı doktorunuza götürün ve yalnızca bir sayı yüzünden bebeğinizin beslenmesini sağlık ekibine danışmadan değiştirmeyin.`,
          ],
        },
        {
          title: `Ne zaman doktora danışmalısınız`,
          body: `50. persentilde olmayan bebeklerin çoğu tamamen sağlıklıdır. Yine de aşağıdakilerden birini fark ederseniz ya da sadece içiniz rahat değilse aile hekiminize veya çocuk doktorunuza danışın.\n\nBebeğiniz ciddi şekilde hasta görünüyorsa 112'yi arayın.`,
          list: [
            `Kilo iki veya daha fazla persentil çizgisini, özellikle aşağı doğru geçiyor.`,
            `Bebeğinizin kilosu ölçümden ölçüme düşmeye devam ediyor ya da eğri düzleşiyor.`,
            `Bebeğiniz doğum kilosuna ebenizin veya doktorunuzun beklediği sürede dönmedi (neredeyse tüm bebekler 3 haftaya kadar döner).`,
            `Bir hastalıktan sonra kilo 2–3 hafta içinde eski persentiline dönmüyor.`,
            `Baş çevresi grafiğin en üst çizgisinin üstünde ve 6 aydan sonra yükselmeye devam ediyor veya başka endişe verici belirtiler var.`,
            `Bir ölçüm grafiğin dış çizgilerinin dışında kalıyor ya da beslenme veya büyüme konusunda içiniz rahat değil.`,
          ],
        },
      ],
      faq: [
        {
          question: `50. persentil bebek için ideal kilo mu?`,
          answer: `Hayır. 50. persentil sadece referans grubunun ortasıdır. Bebek kendi eğrisinde düzenli büyüdüğü sürece 10. veya 90. persentilde de sağlıklı olabilir.`,
        },
        {
          question: `Bebeğimin persentili düşük, bu kötü mü?`,
          answer: `Tek başına değil. Bazı çocuklar doğal olarak ufak tefektir. Önemli olan gidişattır: Aynı persentil civarında kalan bebek genellikle iyi büyüyordur; sürekli düşüş ise değerlendirilmelidir.`,
        },
        {
          question: `Bebeğin persentili kaç çizgi düşerse endişelenmeliyim?`,
          answer: `Bir çizgi değişmesi sık görülür. RCPCH ve NHS, iki çizgi geçmenin daha az görüldüğünü ve doktorla konuşmayı gerektirdiğini belirtir. T.C. Sağlık Bakanlığı izlem protokolü ise büyüme yetersizliği için bulunduğu persentilden iki majör persentil düşme arar.`,
        },
        {
          question: `Bebek doğum kilosuna ne zaman döner?`,
          answer: `AAP'ye göre bebeklerin çoğu yaklaşık iki haftada, neredeyse tamamı üç haftaya kadar doğum kilosuna döner. Bebeğinizi izleyen sağlık ekibi sizin için neyin beklendiğini söyleyecektir.`,
        },
      ],
      ctaText: `Mamio'da kilo, boy ve baş çevresini kaydedin`,
      sources: [
        { publisher: `T.C. Sağlık Bakanlığı (Türkiye Halk Sağlığı Kurumu)`, title: `Bebek, Çocuk, Ergen İzlem Protokolleri`, url: `https://dosyaism.saglik.gov.tr/Eklenti/9010,bebek-cocuk-izlem-protokolleripdf.pdf` },
        { publisher: `DSÖ (WHO)`, title: `Child growth standards`, url: `https://www.who.int/news-room/questions-and-answers/item/child-growth-standards` },
        { publisher: `DSÖ (WHO)`, title: `World Health Organization releases new Child Growth Standards`, url: `https://www.who.int/news/item/27-04-2006-world-health-organization-releases-new-child-growth-standards` },
        { publisher: `CDC`, title: `Use of World Health Organization and CDC Growth Charts for Children Aged 0--59 Months in the United States`, url: `https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5909a1.htm` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Understanding Growth Charts: A Parent's Guide to Percentiles & Z-Scores`, url: `https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/growth-charts-by-the-numbers.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Your Baby's First Month: Growth & Physical Appearance`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx` },
        { publisher: `HealthyChildren.org (AAP)`, title: `Corrected Age For Preemies`, url: `https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx` },
        { publisher: `RCPCH`, title: `Growth charts - information for parents and carers`, url: `https://www.rcpch.ac.uk/resources/growth-charts-information-parents-carers` },
        { publisher: `RCPCH`, title: `UK-WHO Growth Charts - Fact Sheet for Parents`, url: `https://www.rcpch.ac.uk/sites/default/files/Fact_Sheet_for_Parents.pdf` },
        { publisher: `RCPCH`, title: `Chart information for Health staff`, url: `https://growth.rcpch.ac.uk/clinician/chart-information-health-staff/` },
        { publisher: `NHS`, title: `Your baby's weight and height`, url: `https://www.nhs.uk/baby/babys-development/height-weight-and-reviews/baby-height-and-weight/` },
      ],
    },
  },
};
