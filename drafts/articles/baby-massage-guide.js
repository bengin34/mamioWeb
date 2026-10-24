// Researched article: baby massage step by step (timing, oils, evidence, when not to massage). Sources verified 2026-10-24.
const NHS_BATHING = { publisher: `NHS (Best Start in Life)`, title: `Bathing your baby`, url: `https://www.nhs.uk/best-start-in-life/baby/baby-basics/caring-for-your-baby/bathing-your-baby/` };
const NHS_WASHING = { publisher: `NHS`, title: `Washing and bathing your baby`, url: `https://www.nhs.uk/baby/caring-for-a-newborn/washing-and-bathing-your-baby/` };
const NHS_COLIC = { publisher: `NHS`, title: `Colic`, url: `https://www.nhs.uk/conditions/colic/` };
const NHS_URGENT = { publisher: `NHS`, title: `When to get urgent medical help for babies and children under 5`, url: `https://www.nhs.uk/baby/health/when-to-get-urgent-medical-help-for-babies-and-children-under-5/` };
const COCHRANE = { publisher: `Cochrane Library`, title: `Massage for promoting mental and physical health in typically developing infants under the age of six months`, url: `https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005038.pub3/abstract` };
const AAP = { publisher: `American Academy of Pediatrics (HealthyChildren.org)`, title: `The Benefits of Baby Massage`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Benefits-of-Baby-Massage.aspx` };
const RAISING_CHILDREN = { publisher: `Raising Children Network (Australia)`, title: `Baby massage guide in pictures`, url: `https://raisingchildren.net.au/newborns/health-daily-care/massage/baby-massage` };
const TRESILLIAN = { publisher: `Tresillian (NSW Health)`, title: `Baby Massage`, url: `https://www.tresillian.org.au/baby/health/baby-massage/` };
const CUH = { publisher: `Cambridge University Hospitals NHS Foundation Trust`, title: `Infant massage`, url: `https://www.cuh.nhs.uk/patient-information/infant-massage/` };
const CUH_NEONATAL = { publisher: `Cambridge University Hospitals NHS Foundation Trust`, title: `Infant massage on the neonatal unit`, url: `https://www.cuh.nhs.uk/patient-information/infant-massage-on-the-neonatal-unit/` };
const MANCHESTER = { publisher: `University of Manchester`, title: `Olive and sunflower oil on baby skin weakens natural defences`, url: `https://www.manchester.ac.uk/discover/news/olive-and-sunflower-oil-on-baby-skin-weakens-natural-defences` };
const NHS_GRAMPIAN = { publisher: `NHS Grampian`, title: `Colic Leaflet`, url: `https://www.birthingrampian.scot.nhs.uk/wp-content/uploads/2020/09/Colic-Leaflet.pdf` };
const NORFOLK = { publisher: `Just One Norfolk (NHS)`, title: `Baby Massage`, url: `https://www.justonenorfolk.nhs.uk/pregnancy-early-days/new-baby/baby-massage/` };

const GLOBAL_SOURCES = [NHS_BATHING, NHS_WASHING, COCHRANE, AAP, RAISING_CHILDREN, TRESILLIAN, CUH_NEONATAL, MANCHESTER, NHS_GRAMPIAN, NHS_COLIC, NHS_URGENT];

export default {
  relatedPageId: 'babyExercises',
  slugs: {
    en: 'baby-massage-how-to',
    de: 'babymassage-anleitung',
    fr: 'massage-bebe-comment-faire',
    'pt-br': 'massagem-para-bebe-passo-a-passo',
    tr: 'bebek-masaji-nasil-yapilir',
  },
  locales: {
    en: {
      metaTitle: `Baby Massage: How to Do It Step by Step | Mamio`,
      metaDescription: `How to massage your baby step by step: when to start, which oil (if any), legs, tummy, chest, arms and back, what the evidence says and when not to massage.`,
      title: `Baby massage: a step-by-step guide for parents`,
      date: `2026-10-24`,
      reviewed: `2026-10-24`,
      intro: `To massage your baby, choose a moment when they are calm and alert, lay them on a towel in a warm room, and use slow, gentle but firm strokes, usually starting with the legs and feet, then the tummy in clockwise circles, the chest, the arms and finally the back. The NHS advises not using any oils or lotions until your baby is at least a month old, and you should stop whenever your baby shows they have had enough. Below you will find each step, how to choose an oil, what research really shows about the benefits, and when to skip massage altogether.`,
      sections: [
        {
          title: `When can you start baby massage?`,
          body: `Gentle, loving touch is fine from birth: holding, stroking and skin-to-skin contact are part of everyday care. A more structured massage routine usually comes a little later. The Australian Raising Children Network suggests starting a few weeks after birth, and some NHS services, such as Just One Norfolk, recommend waiting until about 4 to 6 weeks so your baby's skin has time to adapt to life outside the womb.\n\nThe skin itself is the other reason to go slowly. The NHS explains that newborn skin matures over the first month and builds its own protective barrier, which is why it advises plain water only and no oils or lotions until your baby is at least one month old. If your baby was born prematurely or has a medical condition, ask your midwife, health visitor or doctor before you start, because babies on neonatal units follow their own guidance.`,
        },
        {
          title: `Choosing a good moment: read your baby's cues`,
          body: `Timing matters more than technique. The best moment is when your baby is awake, calm and interested in you, often called the quiet alert state. Cambridge University Hospitals' neonatal guidance lists times not to massage: when your baby is asleep, hungry, crying, or has a raised temperature or a known infection.\n\nAvoid massaging straight after a feed, when a full tummy and pressure on it can lead to spitting up, and avoid the moment just before a feed, when hunger makes babies impatient. Somewhere in between usually works best. The NHS suggests that after a bath can be a good time, as massage can help babies relax and sleep.\n\nYour own state counts too. Tresillian, an Australian early-parenting service, advises waiting if you feel stressed or overtired, because babies pick up on tension. Talking softly or humming while you massage, as the Cambridge University Hospitals leaflet suggests, helps make it a shared, calm moment rather than a task.`,
          list: [
            `A warm, draught-free room, as your baby will be undressed`,
            `A soft towel on the floor, a bed or a changing mat (never leave your baby unattended on a raised surface)`,
            `Warm hands, short nails, no rings or bracelets`,
            `A clean nappy within reach, or the nappy kept on`,
            `Ten quiet minutes without phone interruptions`,
          ],
        },
        {
          title: `Oil or no oil? What official guidance says`,
          body: `You do not need any oil at all: massage works perfectly well with dry, warm hands. For the first month, the NHS advises against all oils and lotions. After that, the NHS says that if you want to use an oil or lotion, check it is suitable for babies.\n\nThe evidence on vegetable oils is less settled than many parents expect. Olive oil and sunflower oil have long been traditional choices, but a small UK pilot trial of 115 newborns, led by the University of Manchester, found signs that both oils might weaken the development of the skin barrier, and its researchers said they could not recommend either oil on healthy newborn skin until there is more evidence. Advice from local services still varies, so if your baby has dry skin, eczema or a family history of allergy, it is worth asking your health visitor or doctor what they recommend for your child.\n\nA few general principles are widely shared:`,
          list: [
            `Choose a product that is fragrance-free and made for babies; perfumes and scented oils can irritate sensitive skin`,
            `Avoid nut oils (such as peanut or almond oil), especially if there are nut allergies in the family`,
            `Do a patch test first: put a small amount on a small area of skin and wait a day to check for redness`,
            `Warm the oil between your hands before you touch your baby, and use only a little`,
            `Keep oil away from the eyes and from your baby's hands, which go straight into the mouth`,
          ],
        },
        {
          title: `Baby massage step by step`,
          body: `There is no single correct order. The American Academy of Pediatrics (AAP) notes on HealthyChildren.org that you do not need to use every technique or follow a fixed sequence: try different strokes and see what your baby enjoys. Many parents start with the legs, because most babies find them the least sensitive part of the body. Use slow, rhythmic strokes with gentle but firm pressure; very light, fast strokes can tickle or overstimulate. Start with just a few minutes and let your baby decide how long a session lasts.`,
          list: [
            `Ask first: rub your warm hands together where your baby can see them and say what you are about to do. If they turn away or fuss, try another time.`,
            `Legs: with your baby on their back, hold one ankle and stroke slowly from the thigh down to the foot with your other hand, then switch hands. Repeat a few times on each leg.`,
            `Feet: stroke the sole from heel to toes with your thumbs and gently roll each toe. The AAP suggests firm, deep pressure on the feet, as light strokes tickle.`,
            `Tummy: only if your baby is relaxed and the tummy feels soft. Using flat fingers, make slow circles in a clockwise direction around the belly button (clockwise from your baby's point of view as you look down). Leave out the belly button area completely until the umbilical cord has fully healed.`,
            `Chest: place both hands flat in the middle of the chest and stroke outwards towards the shoulders, as if smoothing the pages of a book.`,
            `Arms and hands: stroke from the shoulder down to the wrist, open the palm gently with your thumb and roll each finger. If your baby keeps a fist, do not force it open.`,
            `Back: if your baby is still content, turn them onto their tummy across your legs or on the towel and make long, smooth strokes from the shoulders down to the bottom, keeping your hands either side of the spine, never pressing on it.`,
            `Finish: rest your hands on your baby for a moment, then dress them warmly and give them a cuddle. Many babies are ready for a feed or a nap afterwards.`,
          ],
        },
        {
          title: `Bicycle legs for wind: an honest look`,
          body: `Bicycle legs means lying your baby on their back and gently moving their legs as if pedalling, or bringing both knees softly towards the tummy and holding for a moment. Many parents feel it helps their baby pass wind, and it is often shown alongside clockwise tummy strokes.\n\nThe honest answer is that there is no good research showing that bicycle legs or tummy massage prevent or treat colic or trapped wind. NHS Grampian's colic leaflet lists cycling the legs among things some parents find helpful, and advises waiting until after your baby's 6 to 8 week check before doing it, because that check includes the hips. The NHS colic page recommends practical comfort measures instead: holding your baby during crying, keeping them upright during feeds, winding them after feeds, gentle rocking and a warm bath. It also points out that colic drops and probiotic or herbal supplements have no evidence of helping.\n\nIf you try bicycle legs, keep the movements slow and small, never push against resistance, and stop if your baby cries or stiffens. If it seems to comfort your baby, there is no harm in it; if it does not, you are not missing a cure.`,
        },
        {
          title: `What the evidence really says about the benefits`,
          body: `You will often read that baby massage improves sleep, digestion, weight gain, development and bonding. The research is more modest. The most thorough look at the question is a Cochrane review that pooled 34 randomised trials involving 3,984 healthy, full-term babies under six months. Twenty of those trials were judged at high risk of bias, meaning their results are less reliable. Some outcomes, such as weight gain, favoured massage in individual analyses, but no significant differences were found for infant temperament, parent-infant interaction or mental development. The authors concluded that the findings do not currently support using infant massage with low-risk parents and babies, and that future research should focus on higher-risk groups.\n\nThat does not mean massage is pointless. It is a calm, low-risk way to spend close time with your baby, and NHS and AAP materials present it as a way to connect, relax and help a fussy baby settle. Cambridge University Hospitals describes it as supporting bonding and attachment. What it is not is a proven treatment for colic, sleep problems or development. Enjoy it for what it is: a pleasant routine, not a medical intervention you have to get right.`,
        },
        {
          title: `When not to massage and signs to stop`,
          body: `Skip massage, or leave out the affected area, in these situations. When in doubt, ask your health visitor or doctor first.`,
          list: [
            `Your baby is unwell, has a raised temperature or an infection`,
            `Your baby is asleep, hungry, crying or upset`,
            `Right after a feed, or just before one`,
            `The umbilical cord is not fully healed: leave out the belly button area`,
            `A skin rash, eczema flare, broken or infected skin: avoid that area and ask about suitable care`,
            `After vaccinations: leave the injection site alone while it is red, swollen or sore, and skip the session if your baby is unsettled or feverish (class providers give different waiting times; there is no single official rule)`,
            `Before the 6 to 8 week check, avoid vigorous leg movements such as bicycling`,
            `Any recent surgery, injury or known hip problem, unless your doctor or physiotherapist agrees`,
          ],
        },
        {
          title: `Normal reactions vs when to get medical help`,
          body: `Babies tell you clearly when massage is not working for them. Tresillian advises stopping as soon as your baby seems uncomfortable or has had enough. Typical signs are turning the head away, avoiding eye contact, frowning or grimacing, arching the back, clenching fists, crying, sneezing or hiccups, yawning, or skin going blotchy. These are normal reactions, not signs of harm: stop, cuddle your baby and try another day.\n\nA little redness where oil was applied that fades quickly is usually not a concern, but stop using that product if a rash appears. Massage does not cause illness, yet it often happens to be the moment you notice something. Get medical advice if anything about your baby worries you. The NHS lists a temperature of 38C or higher in a baby under 3 months as a sign to get urgent help, and says a weak, high-pitched cry or one that does not sound like your baby's normal cry also needs urgent attention. In an emergency, call your local emergency number (999 in the UK, 911 in the US). If you are struggling with a baby who cries a lot, talk to your health visitor or doctor; you do not have to manage it alone.`,
        },
        {
          title: `Making it a routine and keeping track`,
          body: `Short, regular sessions tend to work better than long, occasional ones. Many families fit massage into the evening after a bath, others after a morning nap. Keeping a simple record can help you see patterns: what time of day your baby enjoys it, which strokes calm them and which make them fussy, and whether anything seems linked to a new oil.\n\nThe baby exercises and massage guide in Mamio walks you through illustrated exercises such as massage, tummy time and bicycle legs, each with an age to start from and safety notes. You can log tummy time and add notes to your daily timeline, so a quick note such as "massage after bath, loved legs, fussed on tummy" sits right next to feeds and sleep. If you ever do need to talk to your doctor about skin, crying or feeding, that history is easy to bring along.`,
        },
      ],
      faq: [
        {
          question: `At what age can I start massaging my baby?`,
          answer: `Gentle touch and cuddles are fine from birth. Many sources suggest starting a more structured massage a few weeks after birth, and some NHS services suggest waiting until about 4 to 6 weeks. The NHS advises no oils or lotions until your baby is at least one month old.`,
        },
        {
          question: `Which direction should I massage my baby's tummy?`,
          answer: `Clockwise, in slow circles around the belly button, only when the tummy feels soft and your baby is relaxed. Leave out the belly button area until the umbilical cord has completely healed.`,
        },
        {
          question: `Is olive oil good for baby massage?`,
          answer: `It is a traditional choice, but a small UK trial found olive and sunflower oil might weaken the developing skin barrier, and its researchers could not recommend either for healthy newborn skin. You can massage without oil; if you use one, choose a fragrance-free product suitable for babies, do a patch test and ask your health visitor if your baby has dry skin or eczema.`,
        },
        {
          question: `Does baby massage help with colic or wind?`,
          answer: `Many parents find tummy massage and bicycle legs comforting, but there is no good evidence that they treat colic. The NHS recommends holding, upright feeding, winding, rocking and a warm bath, and says colic drops and supplements have no evidence of helping.`,
        },
        {
          question: `How long should a baby massage last?`,
          answer: `Start with a few minutes and let your baby set the pace. Some babies enjoy longer sessions as they get used to it; others are done after one leg. Stop as soon as they turn away, fuss or cry.`,
        },
      ],
      ctaText: `Open Mamio's baby massage and exercise guide`,
      sources: GLOBAL_SOURCES,
    },

    de: {
      metaTitle: `Babymassage Anleitung: Schritt für Schritt | Mamio`,
      metaDescription: `Babymassage Schritt für Schritt: ab wann, welches Öl (oder keins), Beine, Bauch, Brust, Arme, Rücken, was Studien wirklich zeigen und wann du besser nicht massierst.`,
      title: `Babymassage: Schritt-für-Schritt-Anleitung für Eltern`,
      date: `2026-10-24`,
      reviewed: `2026-10-24`,
      intro: `Für eine Babymassage wählst du einen Moment, in dem dein Baby wach, ruhig und aufmerksam ist, legst es in einem warmen Raum auf ein Handtuch und streichst langsam, sanft, aber bestimmt: meist zuerst Beine und Füße, dann den Bauch im Uhrzeigersinn, die Brust, die Arme und zum Schluss den Rücken. Der britische Gesundheitsdienst NHS rät, im ersten Lebensmonat noch keine Öle oder Lotionen zu verwenden, und sobald dein Baby zeigt, dass es genug hat, hörst du auf. Hier findest du jeden Schritt, Tipps zur Ölwahl, was die Forschung tatsächlich über den Nutzen sagt und wann du die Massage besser auslässt.`,
      sections: [
        {
          title: `Ab wann kann ich mein Baby massieren?`,
          body: `Sanfte, liebevolle Berührung ist von Geburt an gut: Halten, Streicheln und Hautkontakt gehören einfach zur Pflege. Eine richtige Massage-Routine beginnt meist etwas später. Das australische Raising Children Network empfiehlt, einige Wochen nach der Geburt anzufangen, und manche NHS-Angebote wie Just One Norfolk raten, etwa 4 bis 6 Wochen zu warten, damit sich die Haut an die Welt außerhalb des Bauchs gewöhnen kann.\n\nDie Haut ist auch der zweite Grund, es ruhig angehen zu lassen. Laut NHS reift die Haut eines Neugeborenen im ersten Monat und baut erst dann ihre eigene Schutzbarriere auf. Deshalb empfiehlt der NHS in dieser Zeit nur klares Wasser und keine Öle oder Lotionen, bis dein Baby mindestens einen Monat alt ist. War dein Baby ein Frühchen oder hat es eine Erkrankung, sprich vorher mit deiner Hebamme oder Kinderärztin bzw. deinem Kinderarzt.\n\nEine Altersgrenze nach oben gibt es nicht. Viele Eltern massieren auch im Kleinkindalter weiter und passen die Griffe einfach an.`,
        },
        {
          title: `Der richtige Moment: die Signale deines Babys lesen`,
          body: `Der Zeitpunkt ist wichtiger als die perfekte Technik. Ideal ist eine Phase, in der dein Baby wach, entspannt und dir zugewandt ist. Die Cambridge University Hospitals nennen Situationen, in denen man nicht massieren sollte: wenn das Baby schläft, Hunger hat, weint, erhöhte Temperatur oder eine bekannte Infektion hat.\n\nMassiere nicht direkt nach dem Stillen oder der Flasche, denn mit vollem Bauch und Druck darauf spucken Babys leichter, und auch nicht kurz vor der Mahlzeit, wenn der Hunger ungeduldig macht. Am besten passt es meist irgendwo dazwischen. Der NHS nennt die Zeit nach dem Baden als guten Moment, weil eine Massage beim Entspannen und Einschlafen helfen kann.\n\nAuch deine eigene Verfassung zählt. Tresillian, ein australischer Elternberatungsdienst, rät, zu warten, wenn du gestresst oder übermüdet bist, weil Babys Anspannung spüren. Leise reden oder summen, wie es die Cambridge University Hospitals vorschlagen, macht die Massage zu einem gemeinsamen, ruhigen Moment statt zu einer Pflichtaufgabe.`,
          list: [
            `Ein warmer Raum ohne Zugluft, denn dein Baby ist ausgezogen`,
            `Ein weiches Handtuch auf dem Boden, dem Bett oder der Wickelauflage (lass dein Baby auf erhöhten Flächen nie allein)`,
            `Warme Hände, kurze Nägel, keine Ringe oder Armbänder`,
            `Eine frische Windel griffbereit oder die Windel einfach anlassen`,
            `Zehn ruhige Minuten ohne Handy`,
          ],
        },
        {
          title: `Mit oder ohne Öl? Was offizielle Empfehlungen sagen`,
          body: `Öl ist kein Muss: Eine Massage funktioniert genauso gut mit trockenen, warmen Händen. Im ersten Monat rät der NHS von allen Ölen und Lotionen ab. Danach gilt laut NHS: Wenn du ein Öl oder eine Lotion verwenden willst, prüfe, ob das Produkt für Babys geeignet ist.\n\nDie Studienlage zu Pflanzenölen ist weniger eindeutig, als viele denken. Oliven- und Sonnenblumenöl sind klassische Babyöle, doch eine kleine britische Pilotstudie der University of Manchester mit 115 Neugeborenen fand Hinweise, dass beide Öle die Entwicklung der Hautbarriere beeinträchtigen könnten. Die Forschenden konnten deshalb keines der beiden Öle für gesunde Neugeborenenhaut empfehlen, solange es keine besseren Daten gibt. Die Ratschläge vor Ort fallen unterschiedlich aus. Hat dein Baby trockene Haut, Neurodermitis oder gibt es Allergien in der Familie, frag deine Hebamme oder Kinderarztpraxis, was sie für dein Kind empfiehlt.\n\nEinige Grundsätze gelten aber allgemein:`,
          list: [
            `Wähle ein parfümfreies Produkt, das für Babys gedacht ist; Duftstoffe können empfindliche Haut reizen`,
            `Verzichte auf Nussöle (etwa Erdnuss- oder Mandelöl), vor allem bei Nussallergien in der Familie`,
            `Mach vorher einen Hauttest: etwas Öl auf eine kleine Stelle geben und einen Tag lang auf Rötungen achten`,
            `Wärme das Öl zwischen deinen Händen an und nimm nur wenig`,
            `Halte Öl von Augen und Händen fern, denn die landen sofort im Mund`,
          ],
        },
        {
          title: `Babymassage Schritt für Schritt`,
          body: `Eine einzig richtige Reihenfolge gibt es nicht. Die American Academy of Pediatrics (AAP) betont auf HealthyChildren.org, dass du weder alle Griffe noch eine feste Abfolge brauchst: Probier aus, was deinem Baby gefällt. Viele Eltern beginnen mit den Beinen, weil die meisten Babys dort am wenigsten empfindlich sind. Streiche langsam und rhythmisch mit sanftem, aber festem Druck; sehr leichte, schnelle Bewegungen kitzeln oder überreizen eher. Fang mit wenigen Minuten an und lass dein Baby bestimmen, wie lange es dauert.`,
          list: [
            `Erst fragen: Reib deine warmen Hände sichtbar aneinander und sag, was du vorhast. Dreht sich dein Baby weg oder quengelt, versuch es später noch einmal.`,
            `Beine: Dein Baby liegt auf dem Rücken. Halte ein Fußgelenk und streiche mit der anderen Hand langsam vom Oberschenkel zum Fuß, dann Hände wechseln. Ein paar Mal pro Bein.`,
            `Füße: Streiche mit den Daumen von der Ferse zu den Zehen und roll jeden Zeh sanft zwischen den Fingern. Die AAP empfiehlt an den Füßen festen Druck, weil leichtes Streicheln kitzelt.`,
            `Bauch: Nur wenn dein Baby entspannt und der Bauch weich ist. Mit flachen Fingern langsame Kreise im Uhrzeigersinn um den Nabel ziehen. Den Nabelbereich komplett aussparen, bis der Nabel vollständig verheilt ist.`,
            `Brust: Leg beide Hände flach in die Mitte der Brust und streich nach außen zu den Schultern, als würdest du die Seiten eines Buches glätten.`,
            `Arme und Hände: Von der Schulter zum Handgelenk streichen, die Handfläche mit dem Daumen sanft öffnen und jeden Finger ausstreichen. Macht dein Baby eine Faust, nicht aufzwingen.`,
            `Rücken: Ist dein Baby noch zufrieden, leg es auf den Bauch, quer über deine Beine oder aufs Handtuch, und streiche lang und ruhig von den Schultern bis zum Po, die Hände links und rechts der Wirbelsäule, nie direkt darauf drücken.`,
            `Abschluss: Lass deine Hände kurz ruhig auf deinem Baby liegen, zieh es warm an und kuschel mit ihm. Viele Babys wollen danach trinken oder schlafen.`,
          ],
        },
        {
          title: `Fahrradfahren gegen Blähungen: ein ehrlicher Blick`,
          body: `Beim Fahrradfahren liegt dein Baby auf dem Rücken, und du bewegst seine Beinchen sanft wie beim Treten oder führst beide Knie behutsam Richtung Bauch und hältst kurz. Viele Eltern haben das Gefühl, dass ihr Baby so leichter Luft loswird, und die Übung wird oft zusammen mit der Bauchmassage im Uhrzeigersinn gezeigt.\n\nEhrlich gesagt gibt es keine gute Forschung, die zeigt, dass Fahrradfahren oder Bauchmassage Koliken oder Blähungen verhindern oder behandeln. Das Kolik-Merkblatt von NHS Grampian nennt das Beinchen-Radeln als etwas, das manche Eltern hilfreich finden, rät aber, damit bis nach der Untersuchung in der 6. bis 8. Lebenswoche zu warten, weil dabei auch die Hüften kontrolliert werden. In Deutschland entspricht das ungefähr der U3, bei der die Hüfte per Ultraschall untersucht wird. Der NHS empfiehlt bei Koliken stattdessen ganz praktische Dinge: dein Baby beim Weinen halten, beim Füttern aufrecht halten, nach dem Trinken aufstoßen lassen, sanft wiegen, ein warmes Bad. Für Kolik-Tropfen sowie probiotische oder pflanzliche Mittel gibt es laut NHS keinen Wirksamkeitsnachweis.\n\nWenn du das Radeln ausprobierst, bewege die Beine langsam und nur ein kleines Stück, drück nie gegen Widerstand und hör auf, wenn dein Baby weint oder sich versteift. Tut es ihm gut, spricht nichts dagegen; wenn nicht, verpasst du kein Heilmittel.`,
        },
        {
          title: `Was Studien wirklich über den Nutzen sagen`,
          body: `Oft liest man, Babymassage verbessere Schlaf, Verdauung, Gewichtszunahme, Entwicklung und Bindung. Die Forschung ist zurückhaltender. Die gründlichste Auswertung ist ein Cochrane-Review mit 34 randomisierten Studien und 3.984 gesunden, reif geborenen Babys unter sechs Monaten. Zwanzig dieser Studien hatten ein hohes Verzerrungsrisiko, ihre Ergebnisse sind also weniger verlässlich. Einzelne Auswertungen, etwa zum Gewicht, fielen zugunsten der Massage aus, für Temperament, Eltern-Kind-Interaktion und geistige Entwicklung zeigten sich aber keine signifikanten Unterschiede. Die Autorinnen und Autoren folgerten, dass die Ergebnisse den Einsatz von Babymassage bei Familien ohne besondere Risiken derzeit nicht stützen, und dass künftige Forschung sich auf Familien mit höherem Risiko konzentrieren sollte.\n\nDas heißt nicht, dass Massage sinnlos ist. Sie ist eine ruhige, risikoarme Art, nah beieinander zu sein, und Materialien von NHS und AAP beschreiben sie als Möglichkeit, Kontakt aufzubauen, zu entspannen und einem quengeligen Baby beim Runterkommen zu helfen. Die Cambridge University Hospitals beschreiben sie als Unterstützung für Bindung. Eine erwiesene Behandlung gegen Koliken, Schlafprobleme oder Entwicklungsverzögerungen ist sie aber nicht. Genieß sie als schönes Ritual, nicht als Therapie, die du perfekt machen musst.`,
        },
        {
          title: `Wann du nicht massieren solltest und Zeichen zum Aufhören`,
          body: `In diesen Situationen lässt du die Massage aus oder sparst die betroffene Stelle aus. Im Zweifel frag vorher deine Hebamme oder Kinderarztpraxis.`,
          list: [
            `Dein Baby ist krank, hat erhöhte Temperatur oder eine Infektion`,
            `Dein Baby schläft, hat Hunger, weint oder ist aufgebracht`,
            `Direkt nach einer Mahlzeit oder kurz davor`,
            `Der Nabel ist noch nicht verheilt: Nabelbereich aussparen`,
            `Hautausschlag, Neurodermitis-Schub, verletzte oder entzündete Haut: diese Stelle aussparen und nach passender Pflege fragen`,
            `Nach Impfungen: die Einstichstelle in Ruhe lassen, solange sie gerötet, geschwollen oder empfindlich ist, und die Massage auslassen, wenn dein Baby unruhig ist oder fiebert (Kursanbieter nennen unterschiedliche Wartezeiten; eine einheitliche offizielle Regel gibt es nicht)`,
            `Vor der Untersuchung in der 6. bis 8. Woche (U3): keine kräftigen Beinbewegungen wie Radeln`,
            `Nach Operationen, Verletzungen oder bei bekannten Hüftproblemen nur nach Rücksprache mit Ärztin, Arzt oder Physiotherapie`,
          ],
        },
        {
          title: `Normale Reaktionen und wann du ärztliche Hilfe brauchst`,
          body: `Babys zeigen sehr deutlich, wenn ihnen eine Massage nicht guttut. Tresillian rät, sofort aufzuhören, wenn dein Baby sich unwohl fühlt oder genug hat. Typische Signale: Kopf wegdrehen, Blickkontakt meiden, Stirnrunzeln oder Grimassen, Rücken überstrecken, Fäuste ballen, Weinen, Niesen oder Schluckauf, Gähnen oder fleckige Haut. Das sind normale Reaktionen und kein Zeichen von Schaden: aufhören, kuscheln, an einem anderen Tag wieder probieren.\n\nEine leichte Rötung nach dem Ölen, die schnell verschwindet, ist meist unbedenklich; tritt ein Ausschlag auf, verwende das Produkt nicht mehr. Massage macht nicht krank, aber oft fällt einem dabei etwas auf. Hol dir ärztlichen Rat, wenn dich etwas an deinem Baby beunruhigt. Fieber bei einem Baby unter 3 Monaten (laut NHS ab 38 °C) ist immer ein Grund, sofort ärztliche Hilfe zu suchen, ebenso ein schwaches, schrilles oder ungewohntes Weinen. Außerhalb der Praxiszeiten erreichst du den ärztlichen Bereitschaftsdienst unter 116 117, im Notfall wählst du die 112. Wenn dich viel Weinen an deine Grenzen bringt, sprich mit deiner Hebamme oder Kinderarztpraxis; damit musst du nicht allein bleiben.`,
        },
        {
          title: `Eine Routine finden und den Überblick behalten`,
          body: `Kurze, regelmäßige Einheiten klappen meist besser als lange, seltene. Viele Familien massieren abends nach dem Baden, andere nach dem Vormittagsschlaf. Ein paar Notizen helfen, Muster zu erkennen: Zu welcher Tageszeit genießt dein Baby es, welche Griffe beruhigen, welche machen es unruhig, und hängt etwas mit einem neuen Öl zusammen?\n\nDer Übungs- und Massage-Guide in Mamio führt dich durch bebilderte Übungen wie Massage, Bauchlage und Fahrradfahren, jeweils mit Startalter und Sicherheitshinweisen. Bauchlage-Zeiten kannst du protokollieren und Notizen in deine Tages-Timeline schreiben, sodass ein kurzes „nach dem Baden massiert, Beine geliebt, auf dem Bauch gequengelt“ direkt neben Mahlzeiten und Schlaf steht. Musst du mit der Kinderarztpraxis über Haut, Weinen oder Trinken sprechen, hast du den Verlauf schnell zur Hand.`,
        },
      ],
      faq: [
        {
          question: `Ab welchem Alter darf ich mein Baby massieren?`,
          answer: `Sanfte Berührung und Kuscheln sind ab Geburt gut. Viele Quellen empfehlen, mit einer richtigen Massage einige Wochen nach der Geburt zu beginnen, manche NHS-Angebote raten zu etwa 4 bis 6 Wochen. Öle und Lotionen empfiehlt der NHS erst ab einem Alter von einem Monat.`,
        },
        {
          question: `In welche Richtung massiert man den Babybauch?`,
          answer: `Im Uhrzeigersinn, in langsamen Kreisen um den Nabel, und nur, wenn der Bauch weich und dein Baby entspannt ist. Den Nabelbereich sparst du aus, bis der Nabel komplett verheilt ist.`,
        },
        {
          question: `Ist Olivenöl gut für die Babymassage?`,
          answer: `Es ist ein Klassiker, aber eine kleine britische Studie fand Hinweise, dass Oliven- und Sonnenblumenöl die sich entwickelnde Hautbarriere schwächen könnten. Du kannst auch ohne Öl massieren. Wenn du eins nimmst, dann parfümfrei und für Babys geeignet, mit Hauttest vorher, und bei trockener Haut oder Neurodermitis nach Rücksprache mit Hebamme oder Kinderarztpraxis.`,
        },
        {
          question: `Hilft Babymassage gegen Dreimonatskoliken?`,
          answer: `Viele Eltern empfinden Bauchmassage und Radeln als wohltuend, einen guten Wirksamkeitsnachweis gegen Koliken gibt es aber nicht. Der NHS empfiehlt Halten, aufrechtes Füttern, Aufstoßen lassen, Wiegen und ein warmes Bad.`,
        },
        {
          question: `Wie lange sollte eine Babymassage dauern?`,
          answer: `Fang mit wenigen Minuten an und lass dein Baby das Tempo bestimmen. Manche genießen mit der Zeit längere Einheiten, andere haben nach einem Bein genug. Hör auf, sobald es sich wegdreht, quengelt oder weint.`,
        },
      ],
      ctaText: `Massage- und Übungsguide in Mamio öffnen`,
      sources: GLOBAL_SOURCES,
    },

    fr: {
      metaTitle: `Massage bébé : comment faire, étape par étape | Mamio`,
      metaDescription: `Masser bébé étape par étape : à partir de quand, quelle huile (ou aucune), jambes, ventre, torse, bras, dos, ce que disent les études et quand s'abstenir.`,
      title: `Massage bébé : comment faire, étape par étape`,
      date: `2026-10-24`,
      reviewed: `2026-10-24`,
      intro: `Pour masser votre bébé, choisissez un moment où il est éveillé, calme et attentif, allongez-le sur une serviette dans une pièce chaude et faites des gestes lents, doux mais fermes : en général d'abord les jambes et les pieds, puis le ventre dans le sens des aiguilles d'une montre, le torse, les bras et enfin le dos. Le service de santé britannique (NHS) conseille de n'utiliser aucune huile ni lotion avant le premier mois, et vous arrêtez dès que votre bébé montre qu'il en a assez. Voici chaque étape, comment choisir une huile, ce que la recherche dit réellement des bienfaits et quand mieux vaut s'abstenir.`,
      sections: [
        {
          title: `À partir de quand peut-on masser un bébé ?`,
          body: `Le toucher doux et affectueux est bienvenu dès la naissance : porter, caresser, faire du peau à peau font partie des soins de tous les jours. Un vrai rituel de massage vient en général un peu plus tard. Le Raising Children Network australien propose de commencer quelques semaines après la naissance, et certains services du NHS, comme Just One Norfolk, conseillent d'attendre environ 4 à 6 semaines pour laisser à la peau le temps de s'adapter à la vie hors du ventre.\n\nLa peau est justement la deuxième raison d'y aller doucement. Selon le NHS, la peau du nouveau-né mûrit pendant le premier mois et construit sa propre barrière protectrice ; c'est pourquoi il recommande de l'eau claire uniquement, sans huile ni lotion, jusqu'à ce que le bébé ait au moins un mois. Si votre enfant est né prématuré ou a un problème de santé, parlez-en d'abord à votre sage-femme, à votre médecin ou au pédiatre.\n\nIl n'y a pas d'âge limite. Beaucoup de parents continuent pendant la petite enfance en adaptant simplement les gestes.`,
        },
        {
          title: `Choisir le bon moment : lire les signaux de bébé`,
          body: `Le moment compte plus que la technique. L'idéal est un temps d'éveil calme, où votre bébé est détendu et tourné vers vous. Les Cambridge University Hospitals indiquent quand ne pas masser : lorsque le bébé dort, a faim, pleure, a de la température ou une infection connue.\n\nÉvitez de masser juste après la tétée ou le biberon, car un ventre plein qu'on presse favorise les régurgitations, et juste avant, quand la faim rend impatient. Entre deux repas, c'est souvent le mieux. Le NHS cite l'après-bain comme un bon moment, le massage pouvant aider le bébé à se détendre et à s'endormir.\n\nVotre propre état compte aussi. Tresillian, un service australien d'accompagnement parental, conseille d'attendre si vous êtes stressé ou épuisé, car les bébés perçoivent la tension. Parler doucement ou fredonner, comme le suggèrent les Cambridge University Hospitals, fait du massage un moment partagé plutôt qu'une corvée.`,
          list: [
            `Une pièce chaude, sans courant d'air, puisque bébé sera déshabillé`,
            `Une serviette douce au sol, sur le lit ou sur le matelas à langer (ne laissez jamais votre bébé seul sur une surface en hauteur)`,
            `Des mains chaudes, des ongles courts, sans bagues ni bracelets`,
            `Une couche propre à portée de main, ou la couche gardée`,
            `Dix minutes au calme, sans téléphone`,
          ],
        },
        {
          title: `Avec ou sans huile ? Ce que disent les recommandations`,
          body: `L'huile n'est pas obligatoire : un massage fonctionne très bien avec des mains sèches et chaudes. Pendant le premier mois, le NHS déconseille toute huile et toute lotion. Ensuite, si vous souhaitez en utiliser, le NHS demande de vérifier que le produit convient aux bébés.\n\nLes données sur les huiles végétales sont moins claires qu'on ne le croit. L'huile d'olive et l'huile de tournesol sont des choix traditionnels, mais un petit essai britannique de l'Université de Manchester portant sur 115 nouveau-nés a trouvé des signes que ces deux huiles pourraient fragiliser le développement de la barrière cutanée ; les chercheurs n'ont pas pu recommander l'une ou l'autre sur la peau d'un nouveau-né en bonne santé tant que les preuves manquent. Les conseils varient d'un professionnel à l'autre : si votre bébé a la peau sèche, de l'eczéma ou des antécédents d'allergie dans la famille, demandez à votre sage-femme ou à votre médecin ce qu'ils recommandent pour lui.\n\nQuelques principes font toutefois consensus :`,
          list: [
            `Choisissez un produit sans parfum, adapté aux bébés ; les parfums et huiles parfumées peuvent irriter une peau sensible`,
            `Évitez les huiles de fruits à coque (arachide, amande douce…), surtout en cas d'allergies dans la famille`,
            `Faites un test cutané : un peu de produit sur une petite zone, puis surveillez une rougeur pendant une journée`,
            `Réchauffez l'huile entre vos mains et utilisez-en très peu`,
            `Gardez l'huile loin des yeux et des mains de bébé, qui finissent toujours à la bouche`,
          ],
        },
        {
          title: `Le massage bébé étape par étape`,
          body: `Il n'existe pas d'ordre unique. L'American Academy of Pediatrics (AAP) rappelle sur HealthyChildren.org qu'il n'est pas nécessaire de faire tous les gestes ni de suivre une séquence fixe : essayez et observez ce que votre bébé aime. Beaucoup de parents commencent par les jambes, la zone que la plupart des bébés trouvent la moins sensible. Faites des gestes lents et rythmés, avec une pression douce mais ferme ; des effleurements trop légers et rapides chatouillent ou excitent. Commencez par quelques minutes et laissez votre bébé décider de la durée.`,
          list: [
            `Demander d'abord : frottez vos mains chaudes devant lui et dites-lui ce que vous allez faire. S'il détourne la tête ou s'agite, réessayez plus tard.`,
            `Jambes : bébé sur le dos, tenez une cheville et, de l'autre main, glissez lentement de la cuisse jusqu'au pied, puis changez de main. Quelques fois par jambe.`,
            `Pieds : avec les pouces, lissez la plante du talon vers les orteils et faites rouler doucement chaque orteil. L'AAP conseille une pression ferme sur les pieds, car les effleurements chatouillent.`,
            `Ventre : seulement si bébé est détendu et que le ventre est souple. Doigts à plat, faites de lents cercles dans le sens des aiguilles d'une montre autour du nombril. Évitez complètement la zone du nombril tant que le cordon n'est pas totalement cicatrisé.`,
            `Torse : posez les deux mains à plat au milieu de la poitrine et glissez vers les épaules, comme pour lisser les pages d'un livre.`,
            `Bras et mains : glissez de l'épaule au poignet, ouvrez doucement la paume avec le pouce et lissez chaque doigt. S'il garde le poing fermé, ne forcez pas.`,
            `Dos : s'il est toujours content, installez-le sur le ventre, en travers de vos jambes ou sur la serviette, et faites de longs gestes des épaules jusqu'aux fesses, mains de chaque côté de la colonne, sans jamais appuyer dessus.`,
            `Fin : laissez vos mains posées un instant, rhabillez-le chaudement et faites-lui un câlin. Beaucoup de bébés réclament ensuite à manger ou s'endorment.`,
          ],
        },
        {
          title: `Le pédalage contre les gaz : un regard honnête`,
          body: `Le pédalage consiste à allonger bébé sur le dos et à faire bouger doucement ses jambes comme sur un vélo, ou à ramener les deux genoux vers le ventre quelques secondes. Beaucoup de parents ont l'impression que cela aide bébé à évacuer ses gaz, et le geste est souvent montré avec les cercles sur le ventre.\n\nPour être honnête, aucune étude solide ne montre que le pédalage ou le massage du ventre préviennent ou soignent les coliques ou les gaz. La fiche sur les coliques du NHS Grampian cite le pédalage parmi ce que certains parents trouvent utile, mais conseille d'attendre l'examen des 6 à 8 semaines, qui comprend le contrôle des hanches ; en France, il correspond à peu près à l'examen obligatoire de la 8e semaine. Le NHS recommande plutôt des gestes concrets : porter bébé quand il pleure, le garder redressé pendant les repas, lui faire faire son rot, le bercer doucement, un bain tiède. Il précise que les gouttes anti-coliques et les compléments probiotiques ou à base de plantes n'ont pas fait la preuve de leur efficacité.\n\nSi vous essayez le pédalage, faites des mouvements lents et de faible amplitude, ne forcez jamais contre une résistance et arrêtez si bébé pleure ou se raidit. Si cela l'apaise, aucun problème ; sinon, vous ne passez pas à côté d'un remède.`,
        },
        {
          title: `Ce que disent vraiment les études sur les bienfaits`,
          body: `On lit souvent que le massage améliore le sommeil, la digestion, la prise de poids, le développement et le lien parent-enfant. La recherche est plus nuancée. L'analyse la plus complète est une revue Cochrane regroupant 34 essais randomisés et 3 984 bébés nés à terme, en bonne santé, âgés de moins de six mois. Vingt de ces essais présentaient un risque de biais élevé, donc des résultats moins fiables. Certaines analyses, comme celle sur le poids, étaient favorables au massage, mais aucune différence significative n'a été trouvée pour le tempérament, l'interaction parent-enfant ou le développement mental. Les auteurs concluent que les résultats ne soutiennent pas, à ce jour, le massage chez des parents et bébés sans facteur de risque, et que la recherche devrait se concentrer sur des familles plus vulnérables.\n\nCela ne veut pas dire que le massage est inutile. C'est une façon calme et peu risquée de partager un moment de proximité, et les documents du NHS et de l'AAP le présentent comme un moyen de créer du lien, de se détendre et d'aider un bébé agité à s'apaiser. Les Cambridge University Hospitals le décrivent comme un soutien à l'attachement. Ce n'est en revanche pas un traitement prouvé des coliques, des troubles du sommeil ou du développement. Profitez-en comme d'un rituel agréable, pas comme d'un soin médical à réussir.`,
        },
        {
          title: `Quand ne pas masser et signes pour arrêter`,
          body: `Dans ces situations, renoncez au massage ou évitez la zone concernée. En cas de doute, demandez d'abord à votre sage-femme ou à votre médecin.`,
          list: [
            `Votre bébé est malade, a de la température ou une infection`,
            `Votre bébé dort, a faim, pleure ou est contrarié`,
            `Juste après un repas ou juste avant`,
            `Le cordon n'est pas totalement cicatrisé : évitez la zone du nombril`,
            `Éruption cutanée, poussée d'eczéma, peau abîmée ou infectée : évitez la zone et demandez quels soins conviennent`,
            `Après un vaccin : ne touchez pas le point d'injection tant qu'il est rouge, gonflé ou sensible, et renoncez à la séance si bébé est grognon ou fébrile (les formateurs donnent des délais différents ; il n'existe pas de règle officielle unique)`,
            `Avant l'examen des 6 à 8 semaines : pas de mouvements de jambes appuyés comme le pédalage`,
            `Après une opération, une blessure ou en cas de problème de hanche connu, seulement avec l'accord du médecin ou du kinésithérapeute`,
          ],
        },
        {
          title: `Réactions normales et quand consulter`,
          body: `Les bébés montrent très clairement quand le massage ne leur convient pas. Tresillian conseille d'arrêter dès que bébé semble mal à l'aise ou en a assez. Signes typiques : il détourne la tête, évite le regard, fronce les sourcils ou grimace, se cambre, serre les poings, pleure, éternue ou a le hoquet, bâille, ou sa peau devient marbrée. Ce sont des réactions normales, pas des signes de danger : arrêtez, faites-lui un câlin et réessayez un autre jour.\n\nUne légère rougeur après l'huile, qui disparaît vite, n'est en général pas inquiétante ; en cas d'éruption, n'utilisez plus le produit. Le massage ne rend pas malade, mais c'est souvent à ce moment-là qu'on remarque quelque chose. Demandez un avis médical si quelque chose vous inquiète. Une fièvre chez un bébé de moins de 3 mois (38 °C ou plus) impose de consulter sans attendre, tout comme des pleurs faibles, aigus ou inhabituels. En cas d'urgence, appelez le 15 (SAMU) ou le 112. Si les pleurs vous épuisent, parlez-en à votre médecin ou à la PMI : vous n'avez pas à gérer cela seul.`,
        },
        {
          title: `En faire un rituel et garder une trace`,
          body: `Des séances courtes et régulières marchent souvent mieux que de longues séances occasionnelles. Beaucoup de familles massent le soir après le bain, d'autres après la sieste du matin. Quelques notes aident à repérer ce qui fonctionne : à quel moment de la journée bébé apprécie, quels gestes l'apaisent ou l'agacent, et si une réaction coïncide avec une nouvelle huile.\n\nLe guide d'exercices et de massage de Mamio vous accompagne avec des exercices illustrés comme le massage, le temps sur le ventre ou le pédalage, chacun avec un âge de départ et des consignes de sécurité. Vous pouvez enregistrer le temps sur le ventre et ajouter des notes à la chronologie du jour, pour qu'un simple « massage après le bain, adore les jambes, râle sur le ventre » apparaisse à côté des repas et du sommeil. Si vous devez parler de peau, de pleurs ou d'alimentation avec votre médecin, l'historique est facile à retrouver.`,
        },
      ],
      faq: [
        {
          question: `À quel âge peut-on commencer à masser bébé ?`,
          answer: `Le toucher doux et les câlins sont bienvenus dès la naissance. Beaucoup de sources proposent un vrai massage quelques semaines après la naissance, certains services du NHS vers 4 à 6 semaines. Le NHS déconseille huiles et lotions avant le premier mois.`,
        },
        {
          question: `Dans quel sens masser le ventre de bébé ?`,
          answer: `Dans le sens des aiguilles d'une montre, par lents cercles autour du nombril, seulement si le ventre est souple et que bébé est détendu. Évitez la zone du nombril tant que le cordon n'est pas cicatrisé.`,
        },
        {
          question: `Quelle huile pour masser bébé ?`,
          answer: `Aucune n'est indispensable. Après le premier mois, choisissez un produit sans parfum, adapté aux bébés, sans fruits à coque, et faites un test cutané. Une petite étude britannique suggère que l'huile d'olive et l'huile de tournesol pourraient fragiliser la barrière cutanée du nouveau-né ; en cas de peau sèche ou d'eczéma, demandez conseil.`,
        },
        {
          question: `Le massage soulage-t-il les coliques ?`,
          answer: `Beaucoup de parents trouvent le massage du ventre et le pédalage apaisants, mais rien ne prouve qu'ils traitent les coliques. Le NHS recommande de porter bébé, de le garder redressé pendant les repas, de lui faire faire son rot, de le bercer et de lui donner un bain tiède.`,
        },
        {
          question: `Combien de temps doit durer un massage bébé ?`,
          answer: `Commencez par quelques minutes et laissez votre bébé donner le rythme. Certains apprécient ensuite des séances plus longues, d'autres en ont assez après une jambe. Arrêtez dès qu'il détourne la tête, s'agite ou pleure.`,
        },
      ],
      ctaText: `Ouvrir le guide massage et exercices de Mamio`,
      sources: GLOBAL_SOURCES,
    },

    'pt-br': {
      metaTitle: `Massagem para bebê: passo a passo e shantala | Mamio`,
      metaDescription: `Massagem para bebê passo a passo: quando começar, qual óleo (ou nenhum), pernas, barriga, peito, braços e costas, o que a ciência mostra e quando não massagear.`,
      title: `Massagem para bebê: passo a passo para pais e mães`,
      date: `2026-10-24`,
      reviewed: `2026-10-24`,
      intro: `Para fazer massagem no bebê, escolha um momento em que ele esteja acordado, calmo e atento, deite-o sobre uma toalha em um ambiente aquecido e faça movimentos lentos, suaves mas firmes: em geral primeiro pernas e pés, depois a barriga em círculos no sentido horário, o peito, os braços e por fim as costas. O serviço de saúde britânico (NHS) orienta não usar óleos nem loções antes de o bebê completar um mês, e você para assim que ele mostrar que já cansou. A shantala, técnica muito popular no Brasil, segue essa mesma lógica. Abaixo você encontra cada passo, como escolher um óleo, o que as pesquisas realmente mostram e quando é melhor não massagear.`,
      sections: [
        {
          title: `Com quantos dias ou semanas posso começar?`,
          body: `O toque carinhoso é bem-vindo desde o nascimento: colo, carinho e contato pele a pele fazem parte do cuidado diário. Uma rotina de massagem mais estruturada costuma vir um pouco depois. O Raising Children Network, da Austrália, sugere começar algumas semanas após o nascimento, e alguns serviços do NHS, como o Just One Norfolk, recomendam esperar cerca de 4 a 6 semanas, para que a pele do bebê se adapte à vida fora do útero.\n\nA pele é justamente o outro motivo para ir com calma. Segundo o NHS, a pele do recém-nascido amadurece durante o primeiro mês e forma sua própria barreira de proteção; por isso a recomendação é só água, sem óleos ou loções, até o bebê ter pelo menos um mês. Se o seu bebê nasceu prematuro ou tem alguma condição de saúde, converse antes com o pediatra.\n\nNão existe idade máxima. Muitas famílias continuam fazendo massagem na fase de criança pequena, só adaptando os movimentos.`,
        },
        {
          title: `O momento certo: leia os sinais do bebê`,
          body: `A hora certa importa mais do que a técnica. O ideal é um momento em que o bebê esteja acordado, tranquilo e interessado em você. O Cambridge University Hospitals lista situações em que não se deve massagear: quando o bebê está dormindo, com fome, chorando, com temperatura elevada ou uma infecção conhecida.\n\nEvite massagear logo depois da mamada, porque a barriga cheia sob pressão favorece o golfo, e também logo antes, quando a fome deixa o bebê impaciente. Entre uma mamada e outra costuma funcionar melhor. O NHS cita o pós-banho como um bom momento, já que a massagem pode ajudar o bebê a relaxar e dormir.\n\nO seu estado também conta. A Tresillian, serviço australiano de apoio a famílias, recomenda esperar se você estiver estressado ou exausto, porque o bebê percebe a tensão. Conversar baixinho ou cantarolar, como sugere o Cambridge University Hospitals, transforma a massagem em um momento a dois, e não em mais uma tarefa.`,
          list: [
            `Ambiente aquecido e sem correntes de ar, já que o bebê vai estar sem roupa`,
            `Uma toalha macia no chão, na cama ou no trocador (nunca deixe o bebê sozinho em superfícies altas)`,
            `Mãos quentes, unhas curtas, sem anéis ou pulseiras`,
            `Uma fralda limpa por perto, ou a fralda mantida`,
            `Dez minutos de calma, sem celular`,
          ],
        },
        {
          title: `Com ou sem óleo? O que dizem as orientações`,
          body: `Óleo não é obrigatório: a massagem funciona muito bem com as mãos secas e quentes. No primeiro mês, o NHS desaconselha qualquer óleo ou loção. Depois disso, se você quiser usar algum, o NHS orienta verificar se o produto é adequado para bebês.\n\nAs evidências sobre óleos vegetais são menos claras do que muita gente imagina. Azeite de oliva e óleo de girassol são escolhas tradicionais, mas um pequeno estudo britânico da Universidade de Manchester, com 115 recém-nascidos, encontrou sinais de que esses dois óleos podem prejudicar o desenvolvimento da barreira da pele; os pesquisadores disseram não poder recomendar nenhum deles para a pele de recém-nascidos saudáveis até haver mais evidências. As orientações variam entre profissionais; se o seu bebê tem pele seca, dermatite atópica ou há alergias na família, pergunte ao pediatra o que ele indica para o seu filho.\n\nAlguns princípios, porém, são consenso:`,
          list: [
            `Prefira um produto sem perfume, feito para bebês; fragrâncias e óleos perfumados podem irritar a pele sensível`,
            `Evite óleos de castanhas e oleaginosas (como amendoim ou amêndoas), principalmente se houver alergia na família`,
            `Faça um teste antes: passe um pouco em uma área pequena e observe vermelhidão por um dia`,
            `Aqueça o óleo entre as mãos e use pouca quantidade`,
            `Mantenha o óleo longe dos olhos e das mãozinhas, que vão direto para a boca`,
          ],
        },
        {
          title: `Massagem para bebê passo a passo`,
          body: `Não existe uma ordem única. A American Academy of Pediatrics (AAP) lembra, no HealthyChildren.org, que não é preciso usar todas as técnicas nem seguir uma sequência fixa: experimente e veja o que o seu bebê gosta. Muitas famílias começam pelas pernas, a parte que a maioria dos bebês acha menos sensível. Faça movimentos lentos e ritmados, com pressão suave mas firme; toques muito leves e rápidos fazem cócegas ou agitam. Comece com poucos minutos e deixe o bebê decidir quanto tempo dura.`,
          list: [
            `Peça licença: esfregue as mãos quentes onde ele possa ver e diga o que vai fazer. Se ele virar o rosto ou resmungar, tente outra hora.`,
            `Pernas: com o bebê de barriga para cima, segure um tornozelo e, com a outra mão, deslize devagar da coxa até o pé; depois troque de mão. Algumas vezes em cada perna.`,
            `Pés: com os polegares, deslize do calcanhar até os dedos e role cada dedinho com delicadeza. A AAP recomenda pressão firme nos pés, porque toques leves fazem cócegas.`,
            `Barriga: só se o bebê estiver relaxado e a barriga macia. Com os dedos esticados, faça círculos lentos no sentido horário ao redor do umbigo. Evite totalmente a região do umbigo até o coto estar completamente cicatrizado.`,
            `Peito: apoie as duas mãos espalmadas no meio do peito e deslize para fora, em direção aos ombros, como quem alisa as páginas de um livro.`,
            `Braços e mãos: deslize do ombro até o punho, abra a palma com o polegar e alise cada dedo. Se ele mantiver a mão fechada, não force.`,
            `Costas: se ele continuar tranquilo, coloque-o de bruços sobre suas pernas ou na toalha e faça movimentos longos dos ombros até o bumbum, com as mãos dos dois lados da coluna, nunca pressionando sobre ela.`,
            `Final: deixe as mãos paradas sobre ele por um instante, vista-o bem e dê um abraço. Muitos bebês querem mamar ou dormir em seguida.`,
          ],
        },
        {
          title: `Bicicletinha para gases: um olhar honesto`,
          body: `A bicicletinha consiste em deitar o bebê de barriga para cima e mexer as perninhas devagar, como se pedalasse, ou levar os dois joelhos com suavidade em direção à barriga e segurar um pouco. Muitas famílias sentem que isso ajuda o bebê a soltar gases, e o movimento costuma aparecer junto com os círculos na barriga.\n\nSendo honesto: não há boas pesquisas mostrando que a bicicletinha ou a massagem na barriga previnem ou tratam cólica ou gases. O folheto sobre cólica do NHS Grampian cita pedalar as pernas entre as coisas que alguns pais acham úteis, mas recomenda esperar até depois da consulta das 6 a 8 semanas, que inclui o exame do quadril. O NHS recomenda medidas práticas: pegar o bebê no colo durante o choro, mantê-lo mais em pé durante as mamadas, ajudá-lo a arrotar, embalar com calma e dar um banho morno. Também diz que gotas para cólica e suplementos probióticos ou à base de ervas não têm evidência de ajudar.\n\nSe for tentar a bicicletinha, faça movimentos lentos e pequenos, nunca force contra resistência e pare se o bebê chorar ou ficar rígido. Se acalmar, ótimo; se não, você não está deixando de lado nenhuma cura.`,
        },
        {
          title: `O que a ciência realmente diz sobre os benefícios`,
          body: `É comum ler que a massagem melhora sono, digestão, ganho de peso, desenvolvimento e vínculo. As pesquisas são mais modestas. A análise mais completa é uma revisão Cochrane que reuniu 34 estudos randomizados com 3.984 bebês saudáveis, nascidos a termo e com menos de seis meses. Vinte desses estudos tinham alto risco de viés, ou seja, resultados menos confiáveis. Algumas análises, como a de peso, foram favoráveis à massagem, mas não houve diferença significativa em temperamento, interação entre pais e bebê ou desenvolvimento mental. Os autores concluíram que os resultados, por enquanto, não sustentam o uso da massagem em famílias sem fatores de risco, e que novas pesquisas deveriam focar em grupos mais vulneráveis.\n\nIsso não quer dizer que a massagem seja inútil. Ela é uma forma calma e de baixo risco de passar um tempo bem perto do bebê, e materiais do NHS e da AAP a apresentam como um jeito de criar vínculo, relaxar e ajudar um bebê agitado a se acalmar. O Cambridge University Hospitals a descreve como apoio ao vínculo afetivo. O que ela não é: um tratamento comprovado para cólica, problemas de sono ou desenvolvimento. Aproveite como um ritual gostoso, não como um procedimento médico que precisa sair perfeito.`,
        },
        {
          title: `Quando não massagear e sinais para parar`,
          body: `Nestas situações, deixe a massagem para outro dia ou evite a área afetada. Na dúvida, pergunte antes ao pediatra.`,
          list: [
            `O bebê está doente, com temperatura elevada ou infecção`,
            `O bebê está dormindo, com fome, chorando ou irritado`,
            `Logo depois de mamar ou logo antes`,
            `O coto umbilical ainda não cicatrizou: evite a região do umbigo`,
            `Assaduras, manchas, crise de dermatite, pele machucada ou infeccionada: evite a área e pergunte sobre os cuidados adequados`,
            `Depois das vacinas: não mexa no local da aplicação enquanto estiver vermelho, inchado ou dolorido, e pule a massagem se o bebê estiver irritado ou febril (instrutores de cursos indicam prazos diferentes; não há uma regra oficial única)`,
            `Antes da consulta das 6 a 8 semanas: nada de movimentos fortes de perna, como a bicicletinha`,
            `Após cirurgia, lesão ou problema de quadril conhecido, só com liberação do médico ou fisioterapeuta`,
          ],
        },
        {
          title: `Reações normais e quando procurar atendimento`,
          body: `O bebê mostra com clareza quando a massagem não está agradando. A Tresillian orienta parar assim que ele parecer desconfortável ou cansado. Sinais típicos: virar o rosto, evitar o olhar, franzir a testa ou fazer careta, arquear as costas, fechar os punhos, chorar, espirrar ou soluçar, bocejar, ou a pele ficar manchada. São reações normais, não sinais de perigo: pare, abrace e tente outro dia.\n\nUma leve vermelhidão depois do óleo, que some rápido, em geral não preocupa; se aparecer uma erupção, pare de usar o produto. A massagem não causa doença, mas muitas vezes é nesse momento que a gente repara em algo. Procure orientação médica se algo no bebê te preocupar. Febre (38 °C ou mais) em bebê com menos de 3 meses é motivo para procurar atendimento sem demora, assim como choro fraco, muito agudo ou diferente do habitual. Em emergência, ligue para o SAMU, 192. Se o choro frequente estiver te esgotando, converse com o pediatra ou a equipe da sua UBS; você não precisa dar conta de tudo sozinho.`,
        },
        {
          title: `Criando uma rotina e registrando`,
          body: `Sessões curtas e regulares costumam funcionar melhor do que longas e esporádicas. Muitas famílias fazem a massagem à noite, depois do banho; outras, depois da soneca da manhã. Algumas anotações ajudam a perceber padrões: em que hora do dia o bebê aproveita mais, quais movimentos acalmam e quais irritam, e se alguma reação coincide com um óleo novo.\n\nO guia de exercícios e massagem do Mamio mostra exercícios ilustrados como massagem, tempo de bruços e bicicletinha, cada um com idade a partir da qual fazer e cuidados de segurança. Você pode registrar o tempo de bruços e adicionar notas à linha do tempo do dia, para que um simples "massagem depois do banho, adorou as pernas, reclamou de bruços" fique ao lado das mamadas e do sono. Se precisar conversar com o pediatra sobre pele, choro ou alimentação, o histórico está à mão.`,
        },
      ],
      faq: [
        {
          question: `A partir de quando posso fazer shantala no bebê?`,
          answer: `Toque carinhoso e colo são bem-vindos desde o nascimento. Muitas fontes sugerem começar uma massagem mais estruturada, como a shantala, algumas semanas após o nascimento; alguns serviços do NHS falam em 4 a 6 semanas. O NHS desaconselha óleos e loções antes de o bebê completar um mês.`,
        },
        {
          question: `Massagem na barriga do bebê é no sentido horário?`,
          answer: `Sim, em círculos lentos no sentido horário ao redor do umbigo, só quando a barriga estiver macia e o bebê relaxado. Evite a região do umbigo até o coto estar totalmente cicatrizado.`,
        },
        {
          question: `Qual óleo usar na massagem do bebê?`,
          answer: `Nenhum é obrigatório. Depois do primeiro mês, prefira um produto sem perfume, próprio para bebês, sem oleaginosas, e faça um teste na pele. Um pequeno estudo britânico sugere que azeite de oliva e óleo de girassol podem prejudicar a barreira da pele do recém-nascido; em caso de pele seca ou dermatite, pergunte ao pediatra.`,
        },
        {
          question: `Massagem e bicicletinha ajudam na cólica?`,
          answer: `Muitas famílias acham reconfortante, mas não há boa evidência de que tratem a cólica. O NHS recomenda colo, mamada em posição mais vertical, ajudar a arrotar, embalar e banho morno.`,
        },
        {
          question: `Quanto tempo deve durar a massagem?`,
          answer: `Comece com poucos minutos e deixe o bebê ditar o ritmo. Alguns passam a gostar de sessões mais longas; outros cansam depois de uma perna. Pare assim que ele virar o rosto, resmungar ou chorar.`,
        },
      ],
      ctaText: `Abrir o guia de massagem e exercícios do Mamio`,
      sources: GLOBAL_SOURCES,
    },

    tr: {
      metaTitle: `Bebek Masajı Nasıl Yapılır? Adım Adım Rehber | Mamio`,
      metaDescription: `Bebek masajı adım adım: ne zaman başlanır, hangi yağ (ya da hiç), bacaklar, karın, göğüs, kollar, sırt, araştırmalar ne diyor ve hangi durumlarda masaj yapılmaz.`,
      title: `Bebek masajı nasıl yapılır? Adım adım rehber`,
      date: `2026-10-24`,
      reviewed: `2026-10-24`,
      intro: `Bebeğine masaj yapmak için onun uyanık, sakin ve sana ilgili olduğu bir anı seç, ılık bir odada bir havlunun üzerine yatır ve yavaş, yumuşak ama kararlı hareketler yap: genellikle önce bacaklar ve ayaklar, sonra saat yönünde karın, göğüs, kollar ve en son sırt. İngiltere'nin ulusal sağlık hizmeti NHS, bebek en az bir aylık olana kadar hiçbir yağ ya da losyon kullanılmamasını öneriyor; bebeğin yeterli olduğunu gösterdiği anda da masajı bırakıyorsun. Aşağıda her adımı, yağ seçimini, araştırmaların faydalar hakkında gerçekte ne söylediğini ve masajın hangi durumlarda yapılmaması gerektiğini bulacaksın.`,
      sections: [
        {
          title: `Bebek masajına ne zaman başlanır?`,
          body: `Yumuşak, şefkatli dokunuş doğumdan itibaren iyidir: kucağa almak, okşamak ve ten tene temas günlük bakımın bir parçası. Daha düzenli bir masaj rutini genellikle biraz sonra başlar. Avustralya'nın Raising Children Network kaynağı doğumdan birkaç hafta sonra başlamayı öneriyor; Just One Norfolk gibi bazı NHS hizmetleri ise cildin anne karnı dışındaki hayata alışması için yaklaşık 4–6 hafta beklemeyi tavsiye ediyor.\n\nYavaş gitmenin ikinci nedeni de cilt. NHS'e göre yenidoğan cildi ilk ay boyunca olgunlaşır ve kendi koruyucu bariyerini oluşturur; bu yüzden bebek en az bir aylık olana kadar sadece su, yağ ya da losyon olmadan bakım öneriliyor. Bebeğin prematüre doğduysa ya da bir sağlık sorunu varsa, başlamadan önce çocuk doktoruna danış.\n\nÜst yaş sınırı yok. Pek çok aile, hareketleri uyarlayarak masaja yürüme çağında da devam ediyor.`,
        },
        {
          title: `Doğru an: bebeğinin işaretlerini oku`,
          body: `Zamanlama tekniğe göre daha önemli. En iyi an, bebeğinin uyanık, sakin ve sana dönük olduğu zamanlardır. Cambridge University Hospitals, masaj yapılmaması gereken durumları şöyle sıralıyor: bebek uyurken, açken, ağlarken, ateşi yüksekken ya da bilinen bir enfeksiyonu varken.\n\nEmzirme ya da biberondan hemen sonra masaj yapma; dolu bir karna baskı kusmayı kolaylaştırabilir. Beslenmeden hemen önce de yapma, çünkü açlık bebeği sabırsızlaştırır. İki öğün arası genellikle en iyisi. NHS banyodan sonrasını iyi bir zaman olarak gösteriyor; masaj bebeğin rahatlamasına ve uykuya geçmesine yardım edebilir.\n\nSenin halin de önemli. Avustralyalı ebeveyn destek kurumu Tresillian, stresli ya da çok yorgunsan beklemeni öneriyor; bebekler gerginliği hisseder. Cambridge University Hospitals'ın önerdiği gibi alçak sesle konuşmak ya da mırıldanmak, masajı bir görev değil, birlikte geçirilen sakin bir ana dönüştürür.`,
          list: [
            `Bebeğin çıplak olacağı için ılık ve cereyansız bir oda`,
            `Yerde, yatakta ya da alt değiştirme minderinde yumuşak bir havlu (yüksek yüzeylerde bebeğini asla yalnız bırakma)`,
            `Sıcak eller, kısa tırnaklar, yüzük ya da bileklik yok`,
            `El altında temiz bir bez ya da bez üzerinde kalabilir`,
            `Telefonsuz, sakin on dakika`,
          ],
        },
        {
          title: `Yağla mı, yağsız mı? Resmi öneriler ne diyor?`,
          body: `Yağ şart değil: masaj kuru ve sıcak ellerle de gayet iyi olur. NHS ilk ay boyunca hiçbir yağ ve losyonu önermiyor. Sonrasında bir yağ ya da losyon kullanmak istersen, NHS ürünün bebekler için uygun olup olmadığını kontrol etmeni söylüyor.\n\nBitkisel yağlarla ilgili kanıtlar sanıldığı kadar net değil. Zeytinyağı ve ayçiçek yağı geleneksel tercihler, ancak Manchester Üniversitesi'nin 115 yenidoğanla yaptığı küçük bir İngiliz pilot çalışması, bu iki yağın cilt bariyerinin gelişimini zayıflatabileceğine dair işaretler buldu; araştırmacılar daha fazla kanıt olana kadar ikisini de sağlıklı yenidoğan cildi için öneremeyeceklerini belirtti. Öneriler sağlık profesyonelleri arasında değişebiliyor; bebeğinin cildi kuruysa, egzaması varsa ya da ailede alerji öyküsü bulunuyorsa, çocuk doktoruna senin bebeğin için neyi önerdiğini sor.\n\nYine de bazı ilkelerde genel uzlaşı var:`,
          list: [
            `Kokusuz ve bebekler için üretilmiş bir ürün seç; parfüm ve kokulu yağlar hassas cildi tahriş edebilir`,
            `Fındık, fıstık, badem gibi kuruyemiş yağlarından kaçın, özellikle ailede kuruyemiş alerjisi varsa`,
            `Önce deri testi yap: küçük bir bölgeye biraz sür ve bir gün boyunca kızarıklık olup olmadığına bak`,
            `Yağı ellerinin arasında ısıt ve çok az kullan`,
            `Yağı gözlerden ve doğrudan ağza giden küçük ellerden uzak tut`,
          ],
        },
        {
          title: `Adım adım bebek masajı`,
          body: `Tek doğru bir sıra yok. Amerikan Pediatri Akademisi (AAP), HealthyChildren.org'da her tekniği kullanmanın ya da sabit bir sırayı izlemenin gerekmediğini vurguluyor: dene ve bebeğinin neyi sevdiğini gözlemle. Birçok ebeveyn bacaklardan başlıyor, çünkü çoğu bebek bu bölgeyi en az hassas bölge olarak hissediyor. Yavaş ve ritmik, yumuşak ama kararlı bir baskıyla çalış; çok hafif ve hızlı dokunuşlar gıdıklar ya da fazla uyarır. Birkaç dakikayla başla, sürenin ne kadar olacağına bebeğin karar versin.`,
          list: [
            `Önce izin iste: sıcak ellerini onun görebileceği şekilde ovuştur ve ne yapacağını söyle. Başını çevirir ya da huzursuzlanırsa başka zaman dene.`,
            `Bacaklar: Bebeğin sırtüstü yatarken bir bileğini tut ve diğer elinle uyluktan ayağa doğru yavaşça kaydır, sonra el değiştir. Her bacakta birkaç kez tekrarla.`,
            `Ayaklar: Başparmaklarınla topuktan parmaklara doğru tabanı sıvazla, her parmağı nazikçe yuvarla. AAP ayaklarda sıkı bir baskı öneriyor, çünkü hafif dokunuş gıdıklar.`,
            `Karın: Sadece bebeğin rahatsa ve karnı yumuşaksa. Parmaklarını düz tutarak göbeğin çevresinde saat yönünde yavaş daireler çiz. Göbek kordonu tamamen iyileşene kadar göbek bölgesine hiç dokunma.`,
            `Göğüs: İki elini göğsün ortasına düz koy ve bir kitabın sayfalarını düzeltir gibi omuzlara doğru dışarı kaydır.`,
            `Kollar ve eller: Omuzdan bileğe doğru kaydır, başparmağınla avucunu nazikçe aç ve her parmağı sıvazla. Yumruğunu sıkı tutuyorsa zorlama.`,
            `Sırt: Hâlâ keyifliyse onu bacaklarının üzerine ya da havluya yüzüstü yatır; omuzlardan kalçaya doğru uzun, yumuşak hareketler yap. Ellerin omurganın iki yanında olsun, omurganın üzerine asla bastırma.`,
            `Bitiriş: Ellerini bir an bebeğinin üzerinde hareketsiz bırak, sonra sıcak tutacak şekilde giydir ve sarıl. Birçok bebek ardından beslenmek ya da uyumak ister.`,
          ],
        },
        {
          title: `Gaz için bisiklet hareketi: dürüst bir bakış`,
          body: `Bisiklet hareketi, bebeği sırtüstü yatırıp bacaklarını pedal çevirir gibi yavaşça hareket ettirmek ya da iki dizini nazikçe karnına doğru getirip kısa süre tutmaktır. Birçok ebeveyn bunun bebeğin gaz çıkarmasına yardım ettiğini düşünüyor ve hareket genellikle saat yönünde karın masajıyla birlikte gösteriliyor.\n\nDürüst olmak gerekirse, bisiklet hareketinin ya da karın masajının koliği veya gazı önlediğini ya da tedavi ettiğini gösteren iyi bir araştırma yok. NHS Grampian'ın kolik broşürü bacakları pedal çevirtmeyi bazı ebeveynlerin faydalı bulduğu yöntemler arasında sayıyor, ama kalça muayenesini de içeren 6–8. hafta kontrolünden sonrasına kadar beklemeyi öneriyor. NHS koliğe karşı bunun yerine pratik adımlar öneriyor: ağlarken bebeğini kucakta tutmak, beslerken dik tutmak, beslendikten sonra gazını çıkarmak, nazikçe sallamak ve ılık bir banyo. Kolik damlaları ile probiyotik ya da bitkisel takviyelerin işe yaradığına dair kanıt olmadığını da belirtiyor.\n\nBisiklet hareketini denersen, yavaş ve küçük hareketler yap, dirençle karşılaşınca asla zorlama ve bebeğin ağlar ya da kasılırsa dur. Onu rahatlatıyorsa sorun yok; rahatlatmıyorsa bir tedaviyi kaçırmış olmuyorsun.`,
        },
        {
          title: `Araştırmalar faydalar hakkında gerçekte ne diyor?`,
          body: `Bebek masajının uykuyu, sindirimi, kilo alımını, gelişimi ve bağlanmayı iyileştirdiği sık sık yazılır. Araştırmalar daha temkinli. Bu konudaki en kapsamlı inceleme, altı aydan küçük, sağlıklı ve zamanında doğmuş 3.984 bebeği içeren 34 randomize çalışmayı bir araya getiren bir Cochrane derlemesi. Bu çalışmaların yirmisinde yüksek yanlılık riski vardı, yani sonuçları daha az güvenilir. Kilo gibi bazı analizler masaj lehine çıktı, ama mizaç, ebeveyn-bebek etkileşimi ve zihinsel gelişim açısından anlamlı bir fark bulunmadı. Yazarlar, bulguların şu an için risk taşımayan aile ve bebeklerde masaj kullanımını desteklemediği ve gelecekteki araştırmaların daha yüksek riskli gruplara odaklanması gerektiği sonucuna vardı.\n\nBu, masajın anlamsız olduğu demek değil. Bebeğinle yakın vakit geçirmenin sakin ve düşük riskli bir yolu; NHS ve AAP kaynakları da onu bağ kurmanın, rahatlamanın ve huzursuz bir bebeği sakinleştirmenin bir yolu olarak anlatıyor. Cambridge University Hospitals masajı bağlanmayı destekleyen bir uygulama olarak tanımlıyor. Ancak kolik, uyku sorunları ya da gelişim için kanıtlanmış bir tedavi değil. Onu kusursuz yapman gereken tıbbi bir uygulama olarak değil, keyifli bir ritüel olarak gör.`,
        },
        {
          title: `Ne zaman masaj yapılmaz ve bırakma işaretleri`,
          body: `Bu durumlarda masajı başka bir güne bırak ya da ilgili bölgeye dokunma. Emin değilsen önce çocuk doktoruna sor.`,
          list: [
            `Bebeğin hasta, ateşli ya da enfeksiyonlu`,
            `Bebeğin uyuyor, aç, ağlıyor ya da huzursuz`,
            `Beslenmeden hemen sonra ya da hemen önce`,
            `Göbek kordonu tamamen iyileşmedi: göbek bölgesine dokunma`,
            `Döküntü, egzama alevlenmesi, yara ya da enfekte cilt: o bölgeyi atla ve uygun bakımı sor`,
            `Aşıdan sonra: aşı yeri kızarık, şiş ya da hassas olduğu sürece dokunma; bebeğin huzursuz ya da ateşliyse masajı atla (kurs eğitmenleri farklı bekleme süreleri veriyor; tek bir resmi kural yok)`,
            `6–8. hafta kontrolünden önce bisiklet gibi kuvvetli bacak hareketleri yapma`,
            `Yakın zamanda ameliyat, yaralanma ya da bilinen bir kalça sorunu varsa, ancak doktor ya da fizyoterapist onaylarsa`,
          ],
        },
        {
          title: `Normal tepkiler ve ne zaman doktora başvurmalı?`,
          body: `Bebekler masajdan hoşlanmadıklarını çok net gösterir. Tresillian, bebeğin rahatsız görünür ya da yeterli olduğunu belli eder etmez durmayı öneriyor. Tipik işaretler: başını çevirmek, göz temasından kaçınmak, kaşlarını çatmak ya da yüzünü buruşturmak, sırtını kavislendirmek, yumruklarını sıkmak, ağlamak, hapşırmak ya da hıçkırmak, esnemek veya cildinin alaca bulaca olması. Bunlar zarar belirtisi değil, normal tepkiler: dur, sarıl ve başka bir gün tekrar dene.\n\nYağ sürülen yerde hızla geçen hafif bir kızarıklık genellikle sorun değildir; döküntü çıkarsa o ürünü kullanmayı bırak. Masaj hastalığa yol açmaz, ama çoğu zaman bir şeyi tam o sırada fark edersin. Bebeğinle ilgili seni endişelendiren bir şey varsa tıbbi destek al. 3 aydan küçük bir bebekte ateş (38 °C ve üzeri) beklemeden doktora başvurmayı gerektirir; zayıf, tiz ya da alışılmadık bir ağlama da öyle. Acil durumda 112'yi ara. Sık ağlama seni tüketiyorsa çocuk doktoruna ya da aile hekimine anlat; bununla tek başına baş etmek zorunda değilsin.`,
        },
        {
          title: `Rutin oluşturmak ve kayıt tutmak`,
          body: `Kısa ve düzenli seanslar genellikle uzun ama seyrek seanslardan daha iyi işler. Birçok aile akşam banyodan sonra, bazıları da sabah uykusunun ardından masaj yapıyor. Birkaç not, kalıpları görmene yardım eder: bebeğin günün hangi saatinde keyif alıyor, hangi hareketler onu sakinleştiriyor ya da huzursuz ediyor, bir tepki yeni bir yağla mı çakışıyor?\n\nMamio'daki bebek egzersizleri ve masaj rehberi, masaj, karın üstü zaman ve bisiklet hareketi gibi resimli egzersizleri başlangıç yaşı ve güvenlik notlarıyla birlikte gösteriyor. Karın üstü zamanı kaydedebilir ve günlük zaman çizelgene notlar ekleyebilirsin; böylece "banyodan sonra masaj, bacakları çok sevdi, yüzüstü huzursuzlandı" gibi kısa bir not beslenme ve uykunun hemen yanında durur. Cilt, ağlama ya da beslenme konusunda doktorla konuşman gerektiğinde geçmiş kolayca elinin altında olur.`,
        },
      ],
      faq: [
        {
          question: `Bebeğe kaç haftalıkken masaj yapılabilir?`,
          answer: `Yumuşak dokunuş ve kucaklamak doğumdan itibaren iyidir. Birçok kaynak daha düzenli bir masaja doğumdan birkaç hafta sonra başlamayı öneriyor; bazı NHS hizmetleri 4–6 hafta diyor. NHS bebek bir aylık olmadan yağ ve losyon kullanılmamasını öneriyor.`,
        },
        {
          question: `Bebeğin karnına masaj hangi yönde yapılır?`,
          answer: `Saat yönünde, göbeğin çevresinde yavaş dairelerle; yalnızca karın yumuşak ve bebek rahatken. Göbek kordonu tamamen iyileşene kadar göbek bölgesine dokunma.`,
        },
        {
          question: `Bebek masajında zeytinyağı kullanılır mı?`,
          answer: `Geleneksel bir tercih, ancak küçük bir İngiliz çalışması zeytinyağı ve ayçiçek yağının gelişmekte olan cilt bariyerini zayıflatabileceğine işaret ediyor. Yağsız da masaj yapabilirsin; kullanacaksan kokusuz, bebeklere uygun bir ürün seç, deri testi yap ve cilt kuruysa ya da egzama varsa doktoruna danış.`,
        },
        {
          question: `Bebek masajı gaz ve koliğe iyi gelir mi?`,
          answer: `Birçok aile karın masajını ve bisiklet hareketini rahatlatıcı buluyor, ama koliği tedavi ettiğine dair iyi bir kanıt yok. NHS kucakta tutmayı, dik pozisyonda beslemeyi, gaz çıkarmayı, sallamayı ve ılık banyoyu öneriyor.`,
        },
        {
          question: `Bebek masajı ne kadar sürmeli?`,
          answer: `Birkaç dakikayla başla, temposu bebeğin belirlesin. Bazıları zamanla daha uzun seanslardan hoşlanır, bazıları tek bacaktan sonra yeter der. Başını çevirdiği, huzursuzlandığı ya da ağladığı anda dur.`,
        },
      ],
      ctaText: `Mamio'daki masaj ve egzersiz rehberini aç`,
      sources: GLOBAL_SOURCES,
    },
  },
};
