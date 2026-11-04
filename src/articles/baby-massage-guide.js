// Researched article: baby massage step by step (timing, oils, evidence, when not to massage). Fact-checked against opened sources 2026-11-04.
const NHS_BATHING = { publisher: `NHS (Best Start in Life)`, title: `Bathing your baby`, url: `https://www.nhs.uk/best-start-in-life/baby/baby-basics/caring-for-your-baby/bathing-your-baby/` };
const NHS_WASHING = { publisher: `NHS`, title: `Washing and bathing your baby`, url: `https://www.nhs.uk/baby/caring-for-a-newborn/washing-and-bathing-your-baby/` };
const NHS_COLIC = { publisher: `NHS`, title: `Colic`, url: `https://www.nhs.uk/conditions/colic/` };
const NHS_URGENT = { publisher: `NHS`, title: `When to get urgent medical help for babies and children under 5`, url: `https://www.nhs.uk/baby/health/when-to-get-urgent-medical-help-for-babies-and-children-under-5/` };
const NHS_REVIEWS = { publisher: `NHS`, title: `Your baby's health and development reviews`, url: `https://www.nhs.uk/conditions/baby/babys-development/height-weight-and-reviews/baby-reviews/` };
const COCHRANE = { publisher: `Cochrane Database of Systematic Reviews`, title: `Massage for promoting mental and physical health in typically developing infants under the age of six months`, url: `https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005038.pub3/abstract` };
const AAP = { publisher: `American Academy of Pediatrics (HealthyChildren.org)`, title: `The Benefits of Baby Massage`, url: `https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Benefits-of-Baby-Massage.aspx` };
const TRESILLIAN = { publisher: `Tresillian (NSW Health)`, title: `Baby Massage`, url: `https://www.tresillian.org.au/baby/health/baby-massage/` };
const CUH_NEONATAL = { publisher: `Cambridge University Hospitals NHS Foundation Trust`, title: `Infant massage on the neonatal unit`, url: `https://www.cuh.nhs.uk/patient-information/infant-massage-on-the-neonatal-unit/` };
const MANCHESTER = { publisher: `University of Manchester`, title: `Olive and sunflower oil on baby skin weakens natural defences`, url: `https://www.manchester.ac.uk/about/news/olive-and-sunflower-oil-on-baby-skin-weakens-natural-defences` };
const LIFIB = { publisher: `Local Infant Feeding Information Board (published by NHS Grampian)`, title: `Colic in Infants: Information for Parents & Carers`, url: `https://www.birthingrampian.scot.nhs.uk/wp-content/uploads/2020/09/Colic-Leaflet.pdf` };
const NORFOLK = { publisher: `Just One Norfolk (NHS)`, title: `Baby Massage`, url: `https://www.justonenorfolk.nhs.uk/pregnancy-early-days/new-baby/baby-massage/` };
const KIN_MASSAGE = { publisher: `Kinderärzte im Netz (BVKJ)`, title: `Babymassage: Allgemeines`, url: `https://www.kinderaerzte-im-netz.de/altersgruppen/das-erste-jahr/babypflege/babymassage/allgemeines/` };

const GLOBAL_SOURCES = [NHS_BATHING, NHS_WASHING, COCHRANE, AAP, TRESILLIAN, CUH_NEONATAL, MANCHESTER, LIFIB, NORFOLK, KIN_MASSAGE, NHS_COLIC, NHS_URGENT, NHS_REVIEWS];
const KIN_BELLY = { publisher: `Kinderärzte im Netz (BVKJ)`, title: `Massage von Brust, Armen und Bauch`, url: `https://www.kinderaerzte-im-netz.de/altersgruppen/das-erste-jahr/babypflege/babymassage/massage-von-brust-armen-und-bauch/` };
const KGI_FIEBER = { publisher: `kindergesundheit-info.de (BIÖG)`, title: `Fieber bei Babys und Kindern`, url: `https://www.kindergesundheit-info.de/themen/krankes-kind/krankheitszeichen/fieber/` };
const KGI_U3 = { publisher: `kindergesundheit-info.de (BIÖG)`, title: `U3-Untersuchung – 4. bis 5. Lebenswoche`, url: `https://www.kindergesundheit-info.de/themen/frueherkennung-u1-u9-und-j1/untersuchungen-u1-bis-u9/u3-untersuchung/` };
const MPEDIA = { publisher: `mpedia.fr (AFPA)`, title: `Les massages de bébé : détente et partage`, url: `https://www.mpedia.fr/art-massages-pour-mon-enfant/` };
const AMELI = { publisher: `Assurance Maladie (ameli.fr)`, title: `Votre enfant a de la fièvre : que faire et quand consulter ?`, url: `https://www.ameli.fr/assure/sante/themes/fievre-enfant/bons-reflexes-cas-faut-consulter` };
const GOVBR = { publisher: `Ministério da Saúde`, title: `Shantala`, url: `https://www.gov.br/saude/pt-br/composicao/saps/pics/recursos-teraupeticos/shantala` };
const BEHCET = { publisher: `T.C. Sağlık Bakanlığı (Behçet Uz Çocuk Hastanesi)`, title: `Ateş`, url: `https://behcetuzch.saglik.gov.tr/TR,107608/ates.html` };

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
      reviewed: `2026-11-04`,
      intro: `To massage your baby, choose a moment when they are calm and alert, lay them on a towel in a warm room, and use slow, gentle but firm strokes, usually starting with the legs and feet, then the tummy in clockwise circles, the chest, the arms and finally the back. The NHS advises not using any oils or lotions until your baby is at least a month old, and you should stop whenever your baby shows they have had enough. Below you will find each step, how to choose an oil, what research really shows about the benefits, and when to skip massage altogether.`,
      sections: [
        {
          title: `When can you start baby massage?`,
          body: `Gentle, loving touch is fine from birth: holding, stroking and skin-to-skin contact are part of everyday care. A more structured massage routine usually comes a little later. Tresillian, an Australian early-parenting service, says you can start when your baby is a newborn or a bit older, while some NHS services, such as Just One Norfolk, recommend waiting until 4 to 6 weeks so your baby's skin can adapt and your baby is more settled outside the womb. Kinderärzte im Netz, a German paediatricians' information site, adds that the belly button should be well healed before you begin.\n\nThe NHS is clear about products: plain water is best for your baby's skin in the first month, and it advises avoiding lotions and oils until your baby is at least 1 month old. If your baby was born prematurely or has a medical condition, ask your midwife, health visitor or doctor before you start, because babies on neonatal units follow their own guidance.`,
        },
        {
          title: `Choosing a good moment: read your baby's cues`,
          body: `Timing matters more than technique. The best moment is when your baby is awake, calm and interested in you, often called the quiet alert state (Tresillian). Cambridge University Hospitals' neonatal guidance lists times not to massage: when your baby is asleep, hungry, crying, or has a raised temperature or a known infection.\n\nAvoid massaging on a full stomach: Kinderärzte im Netz advises against it, and the AAP suggests (for colic relief) waiting at least 30 minutes after a feed. Hunger is also on Cambridge's list, so somewhere between feeds usually works best. The NHS suggests that after a bath can be a good time, as massage can help babies relax and sleep.\n\nYour own state counts too. Tresillian advises waiting until you are calm and positive if you feel stressed or overtired. Kinderärzte im Netz suggests a quiet room without phone calls or other interruptions, so massage becomes a shared, calm moment rather than a task.`,
          list: [
            `A warm, draught-free room, as your baby will be undressed`,
            `A soft towel or mat on the floor or a bed`,
            `Warm hands, short nails, no rings or bracelets`,
            `A clean nappy within reach, or the nappy kept on`,
            `Ten quiet minutes without phone interruptions`,
          ],
        },
        {
          title: `Oil or no oil? What official guidance says`,
          body: `You do not need any oil at all: massage works perfectly well with dry, warm hands. For the first month, the NHS advises against all oils and lotions. After that, the NHS says that if you want to use an oil or lotion, check it is suitable for babies.\n\nThe evidence on vegetable oils is less settled than many parents expect. Olive oil and sunflower oil have long been traditional choices, and Tresillian still calls olive or any vegetable oil usually a good choice. But a small UK pilot trial of 115 newborns, led by the University of Manchester, applied a few drops of olive oil, sunflower oil or no oil twice a day for 28 days and found that the skin barrier developed more slowly with both oils. Its researchers advised that healthy UK babies should not have either oil applied until there is more evidence. If your baby has dry skin, eczema or a family history of allergy, ask your health visitor or doctor what they recommend for your child.\n\nPoints that come up in official guidance:`,
          list: [
            `Check the product is suitable for babies (NHS) and choose a non-scented one rather than adult massage oil or hand lotion (Just One Norfolk, AAP)`,
            `Avoid nut-based oils, which may cause allergic reactions (AAP), and always read the ingredients on the label (Tresillian)`,
            `Avoid essential oils such as lavender or eucalyptus for babies under two (Tresillian)`,
            `If your baby has eczema or broken skin, avoid oils with potential allergens such as peanut or sesame, and ask your health visitor or doctor (Just One Norfolk)`,
          ],
        },
        {
          title: `Baby massage step by step`,
          body: `There is no single correct order. The American Academy of Pediatrics (AAP) notes on HealthyChildren.org that you do not need to use every technique or follow a fixed sequence: try different strokes and see what your baby enjoys. Many parents start with the legs. Use slow, rhythmic strokes with firm but gentle, consistent pressure; very light strokes can tickle rather than soothe. Start with just a few minutes (Tresillian says a session can be as short as a minute) and let your baby decide how long it lasts.`,
          list: [
            `Ask first: rub your warm hands together where your baby can see them and say what you are about to do. If they turn away or fuss, try another time.`,
            `Legs: with your baby on their back, hold one ankle and stroke slowly from the thigh down to the foot with your other hand, then switch hands. Repeat a few times on each leg.`,
            `Feet: stroke the sole from heel to toes with your thumbs and gently roll each toe. The AAP suggests firm, deep pressure on the feet, as light strokes tickle.`,
            `Tummy: do not massage the tummy until the belly button has healed well. Then, using flat fingers, make slow circles in a clockwise direction around the belly button.`,
            `Chest: place both hands flat in the middle of the chest and stroke outwards towards the shoulders, as if smoothing the pages of a book.`,
            `Arms and hands: stroke from the shoulder down to the wrist, open the palm gently with your thumb and roll each finger. If your baby keeps a fist, do not force it open.`,
            `Back: if your baby is still content, turn them onto their tummy across your legs or on the towel and make firm, smooth strokes from the shoulders down to the lower back (AAP).`,
            `Finish: rest your hands on your baby for a moment, then dress them warmly and give them a cuddle. Many babies are ready for a feed or a nap afterwards.`,
          ],
        },
        {
          title: `Bicycle legs for wind: an honest look`,
          body: `Bicycle legs means lying your baby on their back and gently moving their legs as if pedalling, or bringing both knees softly towards the tummy and holding for a moment. Many parents feel it helps their baby pass wind, and it is often shown alongside clockwise tummy strokes.\n\nThe honest answer is that the evidence is thin. The AAP lists fewer colic symptoms among the possible benefits of massage, but the Cochrane review below rated much of the evidence as poor quality and does not support massage for low-risk babies, and the NHS colic page mentions neither massage nor leg movements. A leaflet from the Local Infant Feeding Information Board, published by NHS Grampian, lists cycling the legs among things some parents find helpful but says not to do it until after your baby's paediatric check at around 6 weeks. The NHS says the 6 to 8 week check includes the hips, so ask the doctor or nurse who does it if you are unsure. For colic, the NHS recommends practical comfort measures: holding or cuddling your baby when they cry a lot, keeping them upright during feeds, winding them after feeds, gently rocking them and a warm bath. It does not recommend anti-colic drops or herbal or probiotic supplements, as there is no evidence they help.\n\nIf you try bicycle legs, keep it gentle and stop if your baby cries or seems uncomfortable. If it comforts your baby, fine; if it does not, you are not missing a cure.`,
        },
        {
          title: `What the evidence really says about the benefits`,
          body: `You will often read that baby massage improves sleep, digestion, weight gain, development and bonding. The research is more modest. The most thorough look at the question is a Cochrane review, published in 2013, of 34 randomised trials of healthy babies under six months. Twenty of those trials were judged at high risk of bias, meaning their results are less reliable. Some analyses favoured massage, for example for weight, length, sleep duration and time spent crying, but most of the significant results disappeared at later follow-up or when the high-risk studies were removed. No significant differences were found for infant temperament, parent-infant interaction or mental development. The authors concluded that the findings do not currently support using infant massage with low-risk groups of parents and infants, and that future research should focus on higher-risk groups.\n\nThat does not mean massage is pointless. It is a calm way to spend close time with your baby, and NHS and AAP materials present it as a way to relax and bond. Cambridge University Hospitals describes it as supporting bonding and attachment. What it is not is a proven treatment for colic, sleep problems or development. Enjoy it for what it is: a pleasant routine, not a medical intervention you have to get right.`,
        },
        {
          title: `When not to massage and signs to stop`,
          body: `Skip massage, or leave out the affected area, in these situations. When in doubt, ask your health visitor or doctor first.`,
          list: [
            `Your baby is unwell, has a raised temperature or an infection`,
            `Your baby is asleep, hungry, crying or upset`,
            `Right after a feed, or just before one`,
            `The belly button has not healed well yet: wait until it has`,
            `A skin condition, bruises, broken or infected skin or open wounds: ask your health visitor or doctor first`,
            `Within 3 days of a vaccination: ask your health visitor or doctor first (the Cambridge neonatal unit leaflet lists this)`,
            `Until your baby's check at around 6 weeks, no bicycle-leg movements (UK leaflet advice)`,
            `Recent surgery, fractures or injury: only if your doctor or therapist agrees`,
          ],
        },
        {
          title: `Normal reactions vs when to get medical help`,
          body: `Babies tell you when massage is not working for them. Tresillian and the AAP advise stopping as soon as your baby seems uncomfortable or has had enough, for example if they turn away, fuss or cry. Stop, cuddle your baby and try another day: not all babies enjoy massage at first, as Just One Norfolk points out.\n\nIf a rash appears after using a product, stop using it and ask your health visitor or doctor. Massage is often the moment you notice something, so get medical advice if anything about your baby worries you (in the UK, NHS 111). The NHS says to call 999 or go to A&E if your baby has a temperature of 38C or higher when under 3 months old (39C or higher at 3 to 6 months), a very low temperature (below 36C, or feels cold or shivery), a weak, high-pitched or continuous cry, very fast or difficult breathing, a rash that does not fade when you press it, blue, grey, pale or blotchy skin, is difficult to wake, is having a seizure, or has not had a pee in 12 hours. That is not the full list; the NHS page linked below has more. In an emergency, call your local emergency number (999 in the UK, 911 in the US). If you are struggling with a baby who cries a lot, talk to your health visitor or doctor; you do not have to manage it alone.`,
        },
        {
          title: `Making it a routine and keeping track`,
          body: `Short, regular sessions tend to work better than long, occasional ones. Many families fit massage into the evening after a bath, others after a morning nap. Keeping a simple record can help you see patterns: what time of day your baby enjoys it, which strokes calm them and which make them fussy, and whether anything seems linked to a new oil.\n\nThe baby exercises and massage guide in Mamio walks you through illustrated exercises such as massage, tummy time and bicycle legs, each with an age to start from and safety notes. You can log tummy time and add notes to your daily timeline, so a quick note such as "massage after bath, loved legs, fussed on tummy" sits right next to feeds and sleep. If you ever do need to talk to your doctor about skin, crying or feeding, that history is easy to bring along.`,
        },
      ],
      faq: [
        {
          question: `At what age can I start massaging my baby?`,
          answer: `Gentle touch and cuddles are fine from birth. Tresillian says you can start a more structured massage when your baby is a newborn or a bit older, while some NHS services suggest waiting until 4 to 6 weeks. The NHS advises no oils or lotions until your baby is at least 1 month old.`,
        },
        {
          question: `Which direction should I massage my baby's tummy?`,
          answer: `Clockwise, in slow circles around the belly button. Wait until the belly button has healed well before massaging the tummy.`,
        },
        {
          question: `Is olive oil good for baby massage?`,
          answer: `It is a traditional choice, but a small UK trial found that the skin barrier of newborns developed more slowly with olive or sunflower oil than with no oil, and its researchers advised that healthy babies should not have either oil applied until there is more evidence. You can massage without oil. If you use one, check it is suitable for babies, choose a non-scented one, and ask your health visitor or doctor if your baby has dry skin or eczema.`,
        },
        {
          question: `Does baby massage help with colic or wind?`,
          answer: `Some parents find tummy massage and bicycle legs comforting, but the evidence is thin: the Cochrane review does not support massage for low-risk babies, and the NHS colic page does not list massage. The NHS recommends holding, upright feeding, winding, rocking and a warm bath, and does not recommend colic drops or supplements, as there is no evidence they help.`,
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
      reviewed: `2026-11-04`,
      intro: `Für eine Babymassage wählst du einen Moment, in dem dein Baby wach, ruhig und aufmerksam ist, legst es in einem warmen Raum auf ein Handtuch und streichst langsam, sanft, aber bestimmt: meist zuerst Beine und Füße, dann den Bauch im Uhrzeigersinn, die Brust, die Arme und zum Schluss den Rücken. Der britische Gesundheitsdienst NHS rät, im ersten Lebensmonat noch keine Öle oder Lotionen zu verwenden, und sobald dein Baby zeigt, dass es genug hat, hörst du auf. Hier findest du jeden Schritt, Tipps zur Ölwahl, was die Forschung tatsächlich über den Nutzen sagt und wann du die Massage besser auslässt.`,
      sections: [
        {
          title: `Ab wann kann ich mein Baby massieren?`,
          body: `Sanfte, liebevolle Berührung ist von Geburt an gut: Halten, Streicheln und Hautkontakt gehören einfach zur Pflege. Eine richtige Massage-Routine beginnt meist etwas später. Tresillian, ein australischer Elternberatungsdienst, sagt, du kannst als Neugeborenes oder etwas später anfangen, und manche NHS-Angebote wie Just One Norfolk raten, 4 bis 6 Wochen zu warten, damit sich die Haut anpassen kann und dein Baby außerhalb des Bauchs ruhiger geworden ist. Kinderärzte im Netz ergänzt, dass der Nabel gut verheilt sein sollte, bevor du mit der Massage beginnst.\n\nDer NHS ist bei Pflegeprodukten eindeutig: Im ersten Monat ist klares Wasser am besten für die Babyhaut, und bis dein Baby mindestens einen Monat alt ist, solltest du auf Lotionen und Öle verzichten. War dein Baby ein Frühchen oder hat es eine Erkrankung, sprich vorher mit deiner Hebamme oder Kinderärztin bzw. deinem Kinderarzt, denn Babys auf Neugeborenenstationen folgen eigenen Empfehlungen.`,
        },
        {
          title: `Der richtige Moment: die Signale deines Babys lesen`,
          body: `Der Zeitpunkt ist wichtiger als die perfekte Technik. Ideal ist eine Phase, in der dein Baby wach, ruhig und aufmerksam ist (Tresillian nennt das „quiet alert“). Die Cambridge University Hospitals nennen Situationen, in denen man nicht massieren sollte: wenn das Baby schläft, Hunger hat, weint, erhöhte Temperatur oder eine bekannte Infektion hat.\n\nMassiere nicht mit vollem Bauch: Kinderärzte im Netz rät davon ab, und die AAP empfiehlt (zur Linderung von Koliken), mindestens 30 Minuten nach der Mahlzeit zu warten. Auch Hunger steht auf der Liste aus Cambridge, deshalb passt es meist irgendwo zwischen den Mahlzeiten am besten. Der NHS nennt die Zeit nach dem Baden als guten Moment, weil eine Massage beim Entspannen und Einschlafen helfen kann.\n\nAuch deine eigene Verfassung zählt. Tresillian rät, bei Stress oder Übermüdung zu warten, bis du ruhig und positiv gestimmt bist. Kinderärzte im Netz empfiehlt einen ruhigen Raum ohne Telefonate und andere Störungen, damit die Massage zu einem gemeinsamen, ruhigen Moment statt zu einer Pflichtaufgabe wird.`,
          list: [
            `Ein warmer Raum ohne Zugluft, denn dein Baby ist ausgezogen`,
            `Ein weiches Handtuch oder eine Matte auf dem Boden oder dem Bett`,
            `Warme Hände, kurze Nägel, keine Ringe oder Armbänder`,
            `Eine frische Windel griffbereit oder die Windel einfach anlassen`,
            `Zehn ruhige Minuten ohne Handy`,
          ],
        },
        {
          title: `Mit oder ohne Öl? Was offizielle Empfehlungen sagen`,
          body: `Öl ist kein Muss: Eine Massage funktioniert genauso gut mit trockenen, warmen Händen. Im ersten Monat rät der NHS von allen Ölen und Lotionen ab. Danach gilt laut NHS: Wenn du ein Öl oder eine Lotion verwenden willst, prüfe, ob das Produkt für Babys geeignet ist.\n\nDie Studienlage zu Pflanzenölen ist weniger eindeutig, als viele denken. Oliven- und Sonnenblumenöl sind klassische Babyöle, und Tresillian nennt Olivenöl oder jedes Pflanzenöl meist eine gute Wahl. Eine kleine britische Pilotstudie der University of Manchester mit 115 Neugeborenen trug jedoch 28 Tage lang zweimal täglich ein paar Tropfen Oliven- oder Sonnenblumenöl auf (oder gar kein Öl) und stellte fest, dass sich die Hautbarriere mit beiden Ölen langsamer entwickelte. Die Forschenden rieten, gesunden britischen Babys keines der beiden Öle aufzutragen, solange es keine besseren Daten gibt. Hat dein Baby trockene Haut, Neurodermitis oder gibt es Allergien in der Familie, frag deine Hebamme oder Kinderarztpraxis, was sie für dein Kind empfiehlt. Eine deutsche Empfehlung zu Massageölen für Babys haben wir in den geprüften Quellen nicht gefunden.\n\nDas taucht in offiziellen Empfehlungen auf:`,
          list: [
            `Prüfe, ob das Produkt für Babys geeignet ist (NHS), und nimm ein unparfümiertes statt Massageöl für Erwachsene oder Handlotion (Just One Norfolk, AAP)`,
            `Verzichte auf Öle aus Nüssen, die allergische Reaktionen auslösen können (AAP), und lies immer die Zutatenliste (Tresillian)`,
            `Verwende bei Babys unter zwei Jahren keine ätherischen Öle wie Lavendel oder Eukalyptus (Tresillian)`,
            `Hat dein Baby Neurodermitis oder verletzte Haut, meide Öle mit möglichen Allergenen wie Erdnuss oder Sesam und frag deine Hebamme oder Kinderarztpraxis (Just One Norfolk)`,
          ],
        },
        {
          title: `Babymassage Schritt für Schritt`,
          body: `Eine einzig richtige Reihenfolge gibt es nicht. Die American Academy of Pediatrics (AAP) betont auf HealthyChildren.org, dass du weder alle Griffe noch eine feste Abfolge brauchst: Probier aus, was deinem Baby gefällt. Viele Eltern beginnen mit den Beinen. Streiche langsam und rhythmisch mit festem, aber sanftem, gleichmäßigem Druck; sehr leichtes Streicheln kitzelt eher, als dass es beruhigt. Fang mit wenigen Minuten an (laut Tresillian kann eine Einheit auch nur eine Minute dauern) und lass dein Baby bestimmen, wie lange es dauert.`,
          list: [
            `Erst fragen: Reib deine warmen Hände sichtbar aneinander und sag, was du vorhast. Dreht sich dein Baby weg oder quengelt, versuch es später noch einmal.`,
            `Beine: Dein Baby liegt auf dem Rücken. Halte ein Fußgelenk und streiche mit der anderen Hand langsam vom Oberschenkel zum Fuß, dann Hände wechseln. Ein paar Mal pro Bein.`,
            `Füße: Streiche mit den Daumen von der Ferse zu den Zehen und roll jeden Zeh sanft zwischen den Fingern. Die AAP empfiehlt an den Füßen festen Druck, weil leichtes Streicheln kitzelt.`,
            `Bauch: Massiere den Bauch erst, wenn der Nabel gut verheilt ist. Dann mit flachen Fingern langsame Kreise im Uhrzeigersinn um den Nabel ziehen.`,
            `Brust: Leg beide Hände flach in die Mitte der Brust und streich nach außen zu den Schultern, als würdest du die Seiten eines Buches glätten.`,
            `Arme und Hände: Von der Schulter zum Handgelenk streichen, die Handfläche mit dem Daumen sanft öffnen und jeden Finger ausstreichen. Macht dein Baby eine Faust, nicht aufzwingen.`,
            `Rücken: Ist dein Baby noch zufrieden, leg es auf den Bauch, quer über deine Beine oder aufs Handtuch, und streiche mit festem, ruhigem Druck von den Schultern bis zum unteren Rücken (AAP).`,
            `Abschluss: Lass deine Hände kurz ruhig auf deinem Baby liegen, zieh es warm an und kuschel mit ihm. Viele Babys wollen danach trinken oder schlafen.`,
          ],
        },
        {
          title: `Fahrradfahren gegen Blähungen: ein ehrlicher Blick`,
          body: `Beim Fahrradfahren liegt dein Baby auf dem Rücken, und du bewegst seine Beinchen sanft wie beim Treten oder führst beide Knie behutsam Richtung Bauch und hältst kurz. Viele Eltern haben das Gefühl, dass ihr Baby so leichter Luft loswird, und die Übung wird oft zusammen mit der Bauchmassage im Uhrzeigersinn gezeigt.\n\nEhrlich gesagt ist die Beleglage dünn. Die AAP nennt weniger Kolik-Beschwerden unter den möglichen Vorteilen von Massage, aber der Cochrane-Review unten stufte einen Großteil der Belege als wenig verlässlich ein und stützt Massage bei Babys ohne besondere Risiken nicht; die NHS-Seite zu Koliken erwähnt weder Massage noch Beinbewegungen. Ein Merkblatt der britischen Local Infant Feeding Information Board, veröffentlicht von NHS Grampian, nennt das Beinchen-Radeln als etwas, das manche Eltern hilfreich finden, rät aber, damit bis nach der Kinderuntersuchung um die 6. Lebenswoche zu warten. Das ist eine britische Empfehlung: In Deutschland findet die U3 mit Hüftultraschall bereits in der 4. bis 5. Lebenswoche statt (kindergesundheit-info.de). Eine deutsche Empfehlung zum Radeln haben wir nicht gefunden, frag deshalb bei der U3 deine Kinderärztin oder deinen Kinderarzt. Bei Koliken empfiehlt der NHS stattdessen ganz praktische Dinge: dein Baby bei viel Weinen halten oder kuscheln, beim Füttern aufrecht halten, nach dem Trinken aufstoßen lassen, sanft wiegen und ein warmes Bad. Kolik-Tropfen sowie pflanzliche oder probiotische Mittel empfiehlt der NHS nicht, weil es keinen Nachweis gibt, dass sie helfen.\n\nWenn du das Radeln ausprobierst, mach es sanft und hör auf, wenn dein Baby weint oder sich unwohl zu fühlen scheint. Tut es ihm gut, ist das in Ordnung; wenn nicht, verpasst du kein Heilmittel.`,
        },
        {
          title: `Was Studien wirklich über den Nutzen sagen`,
          body: `Oft liest man, Babymassage verbessere Schlaf, Verdauung, Gewichtszunahme, Entwicklung und Bindung. Die Forschung ist zurückhaltender. Die gründlichste Auswertung ist ein 2013 veröffentlichter Cochrane-Review mit 34 randomisierten Studien an gesunden Babys unter sechs Monaten. Zwanzig dieser Studien hatten ein hohes Verzerrungsrisiko, ihre Ergebnisse sind also weniger verlässlich. Einzelne Auswertungen, etwa zu Gewicht, Länge, Schlafdauer und Weinzeit, fielen zugunsten der Massage aus, doch die meisten signifikanten Ergebnisse verschwanden beim späteren Follow-up oder wenn die Studien mit hohem Verzerrungsrisiko herausgerechnet wurden. Für Temperament, Eltern-Kind-Interaktion und geistige Entwicklung zeigten sich keine signifikanten Unterschiede. Die Autorinnen und Autoren folgerten, dass die Ergebnisse den Einsatz von Babymassage bei Gruppen ohne besondere Risiken derzeit nicht stützen, und dass künftige Forschung sich auf Gruppen mit höherem Risiko konzentrieren sollte.\n\nDas heißt nicht, dass Massage sinnlos ist. Sie ist eine ruhige Art, nah beieinander zu sein, und Materialien von NHS und AAP beschreiben sie als Möglichkeit, zu entspannen und Bindung aufzubauen. Die Cambridge University Hospitals beschreiben sie als Unterstützung für Bindung. Eine erwiesene Behandlung gegen Koliken, Schlafprobleme oder Entwicklungsverzögerungen ist sie aber nicht. Genieß sie als schönes Ritual, nicht als Therapie, die du perfekt machen musst.`,
        },
        {
          title: `Wann du nicht massieren solltest und Zeichen zum Aufhören`,
          body: `In diesen Situationen lässt du die Massage aus oder sparst die betroffene Stelle aus. Im Zweifel frag vorher deine Hebamme oder Kinderarztpraxis.`,
          list: [
            `Dein Baby ist krank, hat erhöhte Temperatur oder eine Infektion`,
            `Dein Baby schläft, hat Hunger, weint oder ist aufgebracht`,
            `Direkt nach einer Mahlzeit oder kurz davor`,
            `Der Nabel ist noch nicht gut verheilt: warte, bis er verheilt ist`,
            `Eine Hauterkrankung, Blutergüsse, verletzte oder entzündete Haut oder offene Wunden: vorher Hebamme oder Kinderarztpraxis fragen`,
            `Innerhalb von 3 Tagen nach einer Impfung: vorher Hebamme oder Kinderarztpraxis fragen (so steht es im Merkblatt der Neugeborenenstation in Cambridge)`,
            `Bis zur Untersuchung um die 6. Lebenswoche: keine Radel-Bewegungen mit den Beinen (Empfehlung aus einem britischen Merkblatt; in Deutschland ist die U3 schon in der 4. bis 5. Woche)`,
            `Nach kürzlichen Operationen, Knochenbrüchen oder Verletzungen nur nach Rücksprache mit Ärztin, Arzt oder Physiotherapie`,
          ],
        },
        {
          title: `Normale Reaktionen und wann du ärztliche Hilfe brauchst`,
          body: `Babys zeigen dir, wenn ihnen eine Massage nicht guttut. Tresillian und die AAP raten, aufzuhören, sobald dein Baby sich unwohl fühlt oder genug hat, zum Beispiel wenn es sich wegdreht, quengelt oder weint. Hör auf, kuschle mit ihm und probier es an einem anderen Tag wieder: Nicht jedes Baby mag Massage von Anfang an, wie Just One Norfolk betont.\n\nTritt nach einem Produkt ein Ausschlag auf, verwende es nicht mehr und frag Hebamme oder Kinderarztpraxis. Bei einer Massage fällt einem oft etwas auf, also hol dir ärztlichen Rat, wenn dich etwas an deinem Baby beunruhigt. Bei einem Baby unter 3 Monaten gilt 38 °C und mehr als Fieber, bei dem du laut kindergesundheit-info.de nicht zögern, sondern mit ihm in die Kinderarztpraxis gehen sollst; auch unter 38 °C brauchst du ärztlichen Rat, wenn dein Baby sehr schlapp ist, nicht trinken will oder die Haut sich verfärbt. Der NHS nennt als Warnzeichen für sofortige Hilfe außerdem eine sehr niedrige Temperatur (unter 36 °C oder kalt und zitternd), ein schwaches, schrilles oder anhaltendes Weinen, sehr schnelle oder schwere Atmung, einen Hautausschlag, der beim Draufdrücken nicht verblasst, blaue, graue, blasse oder fleckige Haut, schwere Weckbarkeit, einen Krampfanfall oder 12 Stunden ohne Urin. Das ist nicht die ganze Liste; sie steht auf der verlinkten NHS-Seite. Im Zweifelsfall wählst du die 112. Außerhalb der Praxiszeiten erreichst du den ärztlichen Bereitschaftsdienst unter 116 117. Wenn dich viel Weinen an deine Grenzen bringt, sprich mit deiner Hebamme oder Kinderarztpraxis; damit musst du nicht allein bleiben.`,
        },
        {
          title: `Eine Routine finden und den Überblick behalten`,
          body: `Kurze, regelmäßige Einheiten klappen meist besser als lange, seltene. Viele Familien massieren abends nach dem Baden, andere nach dem Vormittagsschlaf. Ein paar Notizen helfen, Muster zu erkennen: Zu welcher Tageszeit genießt dein Baby es, welche Griffe beruhigen, welche machen es unruhig, und hängt etwas mit einem neuen Öl zusammen?\n\nDer Übungs- und Massage-Guide in Mamio führt dich durch bebilderte Übungen wie Massage, Bauchlage und Fahrradfahren, jeweils mit Startalter und Sicherheitshinweisen. Bauchlage-Zeiten kannst du protokollieren und Notizen in deine Tages-Timeline schreiben, sodass ein kurzes „nach dem Baden massiert, Beine geliebt, auf dem Bauch gequengelt“ direkt neben Mahlzeiten und Schlaf steht. Musst du mit der Kinderarztpraxis über Haut, Weinen oder Trinken sprechen, hast du den Verlauf schnell zur Hand.`,
        },
      ],
      faq: [
        {
          question: `Ab welchem Alter darf ich mein Baby massieren?`,
          answer: `Sanfte Berührung und Kuscheln sind ab Geburt gut. Tresillian sagt, du kannst eine richtige Massage als Neugeborenes oder etwas später beginnen, manche NHS-Angebote raten zu 4 bis 6 Wochen, und Kinderärzte im Netz will den Nabel vorher gut verheilt wissen. Öle und Lotionen empfiehlt der NHS erst ab einem Alter von mindestens einem Monat.`,
        },
        {
          question: `In welche Richtung massiert man den Babybauch?`,
          answer: `Im Uhrzeigersinn, in langsamen Kreisen um den Nabel. Massiere den Bauch erst, wenn der Nabel gut verheilt ist.`,
        },
        {
          question: `Ist Olivenöl gut für die Babymassage?`,
          answer: `Es ist ein Klassiker, aber in einer kleinen britischen Studie entwickelte sich die Hautbarriere von Neugeborenen mit Oliven- oder Sonnenblumenöl langsamer als ohne Öl, und die Forschenden rieten, gesunden Babys keines der beiden Öle aufzutragen, bis es mehr Belege gibt. Du kannst auch ohne Öl massieren. Wenn du eins nimmst, prüfe, ob es für Babys geeignet ist, nimm ein unparfümiertes, und frag bei trockener Haut oder Neurodermitis deine Hebamme oder Kinderarztpraxis.`,
        },
        {
          question: `Hilft Babymassage gegen Dreimonatskoliken?`,
          answer: `Manche Eltern empfinden Bauchmassage und Radeln als wohltuend, aber die Beleglage ist dünn: Der Cochrane-Review stützt Massage bei Babys ohne besondere Risiken nicht, und die NHS-Seite zu Koliken nennt Massage nicht. Der NHS empfiehlt Halten, aufrechtes Füttern, Aufstoßen lassen, Wiegen und ein warmes Bad, aber keine Kolik-Tropfen oder Mittel, weil es keinen Nachweis gibt, dass sie helfen.`,
        },
        {
          question: `Wie lange sollte eine Babymassage dauern?`,
          answer: `Fang mit wenigen Minuten an und lass dein Baby das Tempo bestimmen. Manche genießen mit der Zeit längere Einheiten, andere haben nach einem Bein genug. Hör auf, sobald es sich wegdreht, quengelt oder weint.`,
        },
      ],
      ctaText: `Massage- und Übungsguide in Mamio öffnen`,
      sources: [...GLOBAL_SOURCES, KIN_BELLY, KGI_FIEBER, KGI_U3],
    },

    fr: {
      metaTitle: `Massage bébé : comment faire, étape par étape | Mamio`,
      metaDescription: `Masser bébé étape par étape : à partir de quand, quelle huile (ou aucune), jambes, ventre, torse, bras, dos, ce que disent les études et quand s'abstenir.`,
      title: `Massage bébé : comment faire, étape par étape`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Pour masser votre bébé, choisissez un moment où il est éveillé, calme et attentif, allongez-le sur une serviette dans une pièce chaude et faites des gestes lents, doux mais fermes : en général d'abord les jambes et les pieds, puis le ventre dans le sens des aiguilles d'une montre, le torse, les bras et enfin le dos. Le service de santé britannique (NHS) conseille de n'utiliser aucune huile ni lotion avant le premier mois, et vous arrêtez dès que votre bébé montre qu'il en a assez. Voici chaque étape, comment choisir une huile, ce que la recherche dit réellement des bienfaits et quand mieux vaut s'abstenir.`,
      sections: [
        {
          title: `À partir de quand peut-on masser un bébé ?`,
          body: `Le toucher doux et affectueux est bienvenu dès la naissance : porter, caresser, faire du peau à peau font partie des soins de tous les jours. Un vrai rituel de massage vient en général un peu plus tard. Mpedia (association française de pédiatrie ambulatoire) indique qu'on peut commencer dès les premières semaines. Tresillian, un service australien d'accompagnement parental, dit qu'on peut commencer nouveau-né ou un peu plus tard, et certains services du NHS, comme Just One Norfolk, conseillent d'attendre 4 à 6 semaines pour que la peau s'adapte et que bébé soit plus posé hors du ventre. Les pédiatres allemands de Kinderärzte im Netz ajoutent que le nombril devrait être bien cicatrisé avant de commencer.\n\nLe NHS est clair sur les produits : pendant le premier mois, l'eau claire est ce qu'il y a de mieux pour la peau de bébé, et il conseille d'éviter lotions et huiles jusqu'à ce que bébé ait au moins 1 mois. Si votre enfant est né prématuré ou a un problème de santé, parlez-en d'abord à votre sage-femme, à votre médecin ou au pédiatre, car les bébés en néonatalogie suivent leurs propres consignes.`,
        },
        {
          title: `Choisir le bon moment : lire les signaux de bébé`,
          body: `Le moment compte plus que la technique. L'idéal est un temps d'éveil calme, où votre bébé est détendu et tourné vers vous (Tresillian parle d'éveil calme et attentif). Les Cambridge University Hospitals indiquent quand ne pas masser : lorsque le bébé dort, a faim, pleure, a de la température ou une infection connue.\n\nÉvitez de masser quand bébé a l'estomac plein : Kinderärzte im Netz le déconseille, et l'AAP suggère, pour soulager les coliques, d'attendre au moins 30 minutes après le repas. La faim figure aussi sur la liste de Cambridge, donc entre deux repas, c'est souvent le mieux. Le NHS cite l'après-bain comme un bon moment, le massage pouvant aider le bébé à se détendre et à s'endormir. Mpedia recommande de choisir un moment qui convient aux deux et de ne pas insister si bébé préfère être tranquille.\n\nVotre propre état compte aussi. Tresillian conseille d'attendre d'être calme et positif si vous êtes stressé ou épuisé. Kinderärzte im Netz recommande une pièce calme, sans téléphone ni autres interruptions, pour que le massage soit un moment partagé plutôt qu'une corvée.`,
          list: [
            `Une pièce chaude, sans courant d'air, puisque bébé sera déshabillé`,
            `Une serviette douce ou un tapis au sol ou sur le lit`,
            `Des mains chaudes, des ongles courts, sans bagues ni bracelets`,
            `Une couche propre à portée de main, ou la couche gardée`,
            `Dix minutes au calme, sans téléphone`,
          ],
        },
        {
          title: `Avec ou sans huile ? Ce que disent les recommandations`,
          body: `L'huile n'est pas obligatoire : un massage fonctionne très bien avec des mains sèches et chaudes (Mpedia le dit aussi). Pendant le premier mois, le NHS déconseille toute huile et toute lotion. Ensuite, si vous souhaitez en utiliser, le NHS demande de vérifier que le produit convient aux bébés. Mpedia recommande, le cas échéant, une huile végétale naturelle, sans parfum ni substance ajoutée.\n\nLes données sur les huiles végétales sont moins claires qu'on ne le croit. L'huile d'olive et l'huile de tournesol sont des choix traditionnels, et Tresillian juge l'huile d'olive ou toute huile végétale généralement un bon choix. Mais un petit essai pilote britannique de l'Université de Manchester, sur 115 nouveau-nés, a appliqué quelques gouttes d'huile d'olive, de tournesol ou aucune huile deux fois par jour pendant 28 jours et a constaté que la barrière cutanée se développait plus lentement avec les deux huiles. Les chercheurs conseillent de ne pas appliquer l'une ou l'autre sur la peau de bébés en bonne santé tant que les preuves manquent. Si votre bébé a la peau sèche, de l'eczéma ou des antécédents d'allergie dans la famille, demandez à votre sage-femme ou à votre médecin ce qu'ils recommandent pour lui.\n\nCe qui ressort des recommandations officielles :`,
          list: [
            `Vérifiez que le produit convient aux bébés (NHS) et choisissez-le sans parfum plutôt qu'une huile de massage pour adultes ou une lotion pour les mains (Just One Norfolk, AAP)`,
            `Évitez les huiles de fruits à coque, qui peuvent provoquer des réactions allergiques (AAP), et lisez toujours la liste des ingrédients (Tresillian)`,
            `Évitez les huiles essentielles comme la lavande ou l'eucalyptus chez les bébés de moins de deux ans (Tresillian)`,
            `Si votre bébé a de l'eczéma ou la peau abîmée, évitez les huiles contenant des allergènes potentiels comme l'arachide ou le sésame, et demandez conseil à votre sage-femme ou à votre médecin (Just One Norfolk)`,
          ],
        },
        {
          title: `Le massage bébé étape par étape`,
          body: `Il n'existe pas d'ordre unique. L'American Academy of Pediatrics (AAP) rappelle sur HealthyChildren.org qu'il n'est pas nécessaire de faire tous les gestes ni de suivre une séquence fixe : essayez et observez ce que votre bébé aime. Beaucoup de parents commencent par les jambes. Faites des gestes lents et rythmés, avec une pression ferme mais douce et régulière ; des effleurements très légers chatouillent plutôt qu'ils n'apaisent. Commencez par quelques minutes (selon Tresillian, une séance peut ne durer qu'une minute ; Mpedia recommande 5 à 10 minutes au plus) et laissez votre bébé décider de la durée.`,
          list: [
            `Demander d'abord : frottez vos mains chaudes devant lui et dites-lui ce que vous allez faire. S'il détourne la tête ou s'agite, réessayez plus tard.`,
            `Jambes : bébé sur le dos, tenez une cheville et, de l'autre main, glissez lentement de la cuisse jusqu'au pied, puis changez de main. Quelques fois par jambe.`,
            `Pieds : avec les pouces, lissez la plante du talon vers les orteils et faites rouler doucement chaque orteil. L'AAP conseille une pression ferme sur les pieds, car les effleurements chatouillent.`,
            `Ventre : ne massez pas le ventre avant que le nombril soit bien cicatrisé. Ensuite, doigts à plat, faites de lents cercles dans le sens des aiguilles d'une montre autour du nombril.`,
            `Torse : posez les deux mains à plat au milieu de la poitrine et glissez vers les épaules, comme pour lisser les pages d'un livre.`,
            `Bras et mains : glissez de l'épaule au poignet, ouvrez doucement la paume avec le pouce et lissez chaque doigt. S'il garde le poing fermé, ne forcez pas.`,
            `Dos : s'il est toujours content, installez-le sur le ventre, en travers de vos jambes ou sur la serviette, et faites des gestes fermes et réguliers des épaules jusqu'au bas du dos (AAP).`,
            `Fin : laissez vos mains posées un instant, rhabillez-le chaudement et faites-lui un câlin. Beaucoup de bébés réclament ensuite à manger ou s'endorment.`,
          ],
        },
        {
          title: `Le pédalage contre les gaz : un regard honnête`,
          body: `Le pédalage consiste à allonger bébé sur le dos et à faire bouger doucement ses jambes comme sur un vélo, ou à ramener les deux genoux vers le ventre quelques secondes. Beaucoup de parents ont l'impression que cela aide bébé à évacuer ses gaz, et le geste est souvent montré avec les cercles sur le ventre.\n\nPour être honnête, les preuves sont minces. Mpedia affirme que le massage du ventre détend l'intestin et soulage les gaz, sans citer d'étude. L'AAP cite moins de symptômes de coliques parmi les bienfaits possibles du massage, mais la revue Cochrane ci-dessous juge une grande part des preuves de mauvaise qualité et ne soutient pas le massage chez des bébés sans facteur de risque ; la page du NHS sur les coliques ne mentionne ni massage ni mouvements de jambes. Une fiche britannique de la Local Infant Feeding Information Board, publiée par le NHS Grampian, cite le pédalage parmi ce que certains parents trouvent utile, mais conseille d'attendre l'examen pédiatrique vers 6 semaines. C'est un conseil britannique ; le NHS précise que l'examen de 6 à 8 semaines comprend le contrôle des hanches. Demandez à votre médecin ou pédiatre. Pour les coliques, le NHS recommande plutôt des gestes concrets : porter ou câliner bébé quand il pleure beaucoup, le garder redressé pendant les repas, lui faire faire son rot après, le bercer doucement, un bain tiède. Il ne recommande pas les gouttes anti-coliques ni les compléments à base de plantes ou probiotiques, faute de preuve qu'ils aident.\n\nSi vous essayez le pédalage, restez doux et arrêtez si bébé pleure ou semble mal à l'aise. Si cela l'apaise, tant mieux ; sinon, vous ne passez pas à côté d'un remède.`,
        },
        {
          title: `Ce que disent vraiment les études sur les bienfaits`,
          body: `On lit souvent que le massage améliore le sommeil, la digestion, la prise de poids, le développement et le lien parent-enfant. La recherche est plus nuancée. L'analyse la plus complète est une revue Cochrane publiée en 2013, portant sur 34 essais randomisés chez des bébés en bonne santé de moins de six mois. Vingt de ces essais présentaient un risque de biais élevé, donc des résultats moins fiables. Certaines analyses, sur le poids, la taille, la durée de sommeil ou le temps de pleurs, étaient favorables au massage, mais la plupart des résultats significatifs ont disparu au suivi ultérieur ou quand les études à risque de biais élevé ont été retirées. Aucune différence significative n'a été trouvée pour le tempérament, l'interaction parent-enfant ou le développement mental. Les auteurs concluent que les résultats ne soutiennent pas, à ce jour, le massage dans les groupes sans facteur de risque, et que la recherche devrait se concentrer sur des groupes plus vulnérables.\n\nCela ne veut pas dire que le massage est inutile. C'est une façon calme de partager un moment de proximité, et les documents du NHS et de l'AAP le présentent comme un moyen de se détendre et de créer du lien ; Mpedia y voit aussi une communication privilégiée entre parent et enfant. Les Cambridge University Hospitals le décrivent comme un soutien à l'attachement. Ce n'est en revanche pas un traitement prouvé des coliques, des troubles du sommeil ou du développement. Profitez-en comme d'un rituel agréable, pas comme d'un soin médical à réussir.`,
        },
        {
          title: `Quand ne pas masser et signes pour arrêter`,
          body: `Dans ces situations, renoncez au massage ou évitez la zone concernée. En cas de doute, demandez d'abord à votre sage-femme ou à votre médecin.`,
          list: [
            `Votre bébé est malade, a de la température ou une infection`,
            `Votre bébé dort, a faim, pleure ou est contrarié`,
            `Juste après un repas ou juste avant`,
            `Le nombril n'est pas encore bien cicatrisé : attendez qu'il le soit`,
            `Maladie de peau, ecchymoses, peau abîmée ou infectée, plaies ouvertes : demandez d'abord à votre sage-femme ou à votre médecin`,
            `Dans les 3 jours après un vaccin : demandez d'abord à votre sage-femme ou à votre médecin (c'est indiqué dans la fiche de néonatalogie de Cambridge)`,
            `Jusqu'à l'examen vers 6 semaines : pas de pédalage des jambes (conseil d'une fiche britannique)`,
            `Après une opération, une fracture ou une blessure récente, seulement avec l'accord du médecin ou du kinésithérapeute`,
          ],
        },
        {
          title: `Réactions normales et quand consulter`,
          body: `Les bébés montrent quand le massage ne leur convient pas. Tresillian et l'AAP conseillent d'arrêter dès que bébé semble mal à l'aise ou en a assez, par exemple s'il se détourne, s'agite ou pleure. Arrêtez, faites-lui un câlin et réessayez un autre jour : tous les bébés n'aiment pas le massage d'emblée, comme le souligne Just One Norfolk.\n\nEn cas d'éruption après l'usage d'un produit, ne l'utilisez plus et demandez conseil à votre sage-femme ou à votre médecin. C'est souvent pendant un massage qu'on remarque quelque chose : demandez un avis médical si quelque chose vous inquiète chez votre bébé. Pour un nourrisson de moins de 3 mois qui a de la fièvre, l'Assurance Maladie (ameli) indique de consulter en urgence, et le NHS fixe le seuil à 38 °C ou plus. Le NHS cite aussi comme signes d'urgence : température très basse (moins de 36 °C, ou froid et frissonnant), pleurs faibles, aigus ou continus, respiration très rapide ou difficile, éruption qui ne s'efface pas quand on appuie, peau bleue, grise, pâle ou marbrée, difficulté à le réveiller, convulsions, ou pas d'urine depuis 12 heures. Ce n'est pas la liste complète ; elle figure sur la page du NHS ci-dessous. En cas d'urgence, appelez le 15 (SAMU) ou le 112. Si les pleurs vous épuisent, parlez-en à votre médecin ou à la PMI : vous n'avez pas à gérer cela seul.`,
        },
        {
          title: `En faire un rituel et garder une trace`,
          body: `Des séances courtes et régulières marchent souvent mieux que de longues séances occasionnelles. Beaucoup de familles massent le soir après le bain, d'autres après la sieste du matin. Quelques notes aident à repérer ce qui fonctionne : à quel moment de la journée bébé apprécie, quels gestes l'apaisent ou l'agacent, et si une réaction coïncide avec une nouvelle huile.\n\nLe guide d'exercices et de massage de Mamio vous accompagne avec des exercices illustrés comme le massage, le temps sur le ventre ou le pédalage, chacun avec un âge de départ et des consignes de sécurité. Vous pouvez enregistrer le temps sur le ventre et ajouter des notes à la chronologie du jour, pour qu'un simple « massage après le bain, adore les jambes, râle sur le ventre » apparaisse à côté des repas et du sommeil. Si vous devez parler de peau, de pleurs ou d'alimentation avec votre médecin, l'historique est facile à retrouver.`,
        },
      ],
      faq: [
        {
          question: `À quel âge peut-on commencer à masser bébé ?`,
          answer: `Le toucher doux et les câlins sont bienvenus dès la naissance. Mpedia indique qu'on peut commencer un massage dès les premières semaines ; certains services du NHS conseillent d'attendre 4 à 6 semaines. Le NHS déconseille huiles et lotions avant au moins 1 mois.`,
        },
        {
          question: `Dans quel sens masser le ventre de bébé ?`,
          answer: `Dans le sens des aiguilles d'une montre, par lents cercles autour du nombril. Attendez que le nombril soit bien cicatrisé avant de masser le ventre.`,
        },
        {
          question: `Quelle huile pour masser bébé ?`,
          answer: `Aucune n'est indispensable. Une petite étude britannique a observé que la barrière cutanée de nouveau-nés se développait plus lentement avec l'huile d'olive ou de tournesol qu'avec aucune huile, et les chercheurs conseillent de ne pas en appliquer sur des bébés en bonne santé tant que les preuves manquent. Après le premier mois, vérifiez que le produit convient aux bébés, choisissez-le sans parfum et demandez conseil en cas de peau sèche ou d'eczéma.`,
        },
        {
          question: `Le massage soulage-t-il les coliques ?`,
          answer: `Certains parents trouvent le massage du ventre et le pédalage apaisants, mais les preuves sont minces : la revue Cochrane ne soutient pas le massage chez des bébés sans facteur de risque, et la page du NHS sur les coliques ne le cite pas. Le NHS recommande de porter bébé, de le garder redressé pendant les repas, de lui faire faire son rot, de le bercer et un bain tiède, mais pas les gouttes ni les compléments, faute de preuve qu'ils aident.`,
        },
        {
          question: `Combien de temps doit durer un massage bébé ?`,
          answer: `Commencez par quelques minutes et laissez votre bébé donner le rythme. Certains apprécient ensuite des séances plus longues, d'autres en ont assez après une jambe. Arrêtez dès qu'il détourne la tête, s'agite ou pleure.`,
        },
      ],
      ctaText: `Ouvrir le guide massage et exercices de Mamio`,
      sources: [...GLOBAL_SOURCES, MPEDIA, AMELI],
    },

    'pt-br': {
      metaTitle: `Massagem para bebê: passo a passo e shantala | Mamio`,
      metaDescription: `Massagem para bebê passo a passo: quando começar, qual óleo (ou nenhum), pernas, barriga, peito, braços e costas, o que a ciência mostra e quando não massagear.`,
      title: `Massagem para bebê: passo a passo para pais e mães`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Para fazer massagem no bebê, escolha um momento em que ele esteja acordado, calmo e atento, deite-o sobre uma toalha em um ambiente aquecido e faça movimentos lentos, suaves mas firmes: em geral primeiro pernas e pés, depois a barriga em círculos no sentido horário, o peito, os braços e por fim as costas. O serviço de saúde britânico (NHS) orienta não usar óleos nem loções antes de o bebê completar um mês, e você para assim que ele mostrar que já cansou. A shantala, técnica muito popular no Brasil, segue essa mesma lógica. Abaixo você encontra cada passo, como escolher um óleo, o que as pesquisas realmente mostram e quando é melhor não massagear.`,
      sections: [
        {
          title: `Com quantos dias ou semanas posso começar?`,
          body: `O toque carinhoso é bem-vindo desde o nascimento: colo, carinho e contato pele a pele fazem parte do cuidado diário. Uma rotina de massagem mais estruturada costuma vir um pouco depois. A Tresillian, serviço australiano de apoio a famílias, diz que você pode começar com o bebê recém-nascido ou um pouco maior, e alguns serviços do NHS, como o Just One Norfolk, recomendam esperar de 4 a 6 semanas, para que a pele se adapte e o bebê fique mais tranquilo fora do útero. Os pediatras alemães do Kinderärzte im Netz acrescentam que o umbigo deve estar bem cicatrizado antes de começar. O Ministério da Saúde descreve a shantala como uma prática em que os pais massageiam o bebê, sem indicar idade mínima.\n\nO NHS é claro sobre produtos: no primeiro mês, água simples é o melhor para a pele do bebê, e ele orienta evitar loções e óleos até o bebê ter pelo menos 1 mês. Se o seu bebê nasceu prematuro ou tem alguma condição de saúde, converse antes com o pediatra, porque bebês em unidade neonatal seguem orientações próprias.`,
        },
        {
          title: `O momento certo: leia os sinais do bebê`,
          body: `A hora certa importa mais do que a técnica. O ideal é um momento em que o bebê esteja acordado, tranquilo e interessado em você (a Tresillian fala em "quieto e alerta"). O Cambridge University Hospitals lista situações em que não se deve massagear: quando o bebê está dormindo, com fome, chorando, com temperatura elevada ou uma infecção conhecida.\n\nEvite massagear com a barriga cheia: o Kinderärzte im Netz desaconselha, e a AAP sugere, para aliviar cólicas, esperar pelo menos 30 minutos depois da mamada. A fome também está na lista de Cambridge, então entre uma mamada e outra costuma funcionar melhor. O NHS cita o pós-banho como um bom momento, já que a massagem pode ajudar o bebê a relaxar e dormir.\n\nO seu estado também conta. A Tresillian recomenda esperar até estar calmo e positivo se você estiver estressado ou exausto. O Kinderärzte im Netz sugere um ambiente tranquilo, sem telefonemas e outras interrupções, para que a massagem seja um momento a dois e não mais uma tarefa.`,
          list: [
            `Ambiente aquecido e sem correntes de ar, já que o bebê vai estar sem roupa`,
            `Uma toalha macia ou um tapete no chão ou na cama`,
            `Mãos quentes, unhas curtas, sem anéis ou pulseiras`,
            `Uma fralda limpa por perto, ou a fralda mantida`,
            `Dez minutos de calma, sem celular`,
          ],
        },
        {
          title: `Com ou sem óleo? O que dizem as orientações`,
          body: `Óleo não é obrigatório: a massagem funciona muito bem com as mãos secas e quentes. No primeiro mês, o NHS desaconselha qualquer óleo ou loção. Depois disso, se você quiser usar algum, o NHS orienta verificar se o produto é adequado para bebês.\n\nAs evidências sobre óleos vegetais são menos claras do que muita gente imagina. Azeite de oliva e óleo de girassol são escolhas tradicionais, e a Tresillian considera azeite ou qualquer óleo vegetal, em geral, uma boa escolha. Mas um pequeno estudo piloto britânico da Universidade de Manchester, com 115 recém-nascidos, aplicou algumas gotas de azeite, óleo de girassol ou nenhum óleo duas vezes por dia durante 28 dias e viu que a barreira da pele se desenvolveu mais devagar com os dois óleos. Os pesquisadores aconselharam não aplicar nenhum deles em bebês saudáveis até haver mais evidências. Se o seu bebê tem pele seca, dermatite atópica ou há alergias na família, pergunte ao pediatra o que ele indica para o seu filho.\n\nPontos que aparecem nas orientações oficiais:`,
          list: [
            `Verifique se o produto é adequado para bebês (NHS) e prefira um sem perfume, em vez de óleo de massagem para adultos ou creme para as mãos (Just One Norfolk, AAP)`,
            `Evite óleos de oleaginosas, que podem causar reações alérgicas (AAP), e leia sempre a lista de ingredientes no rótulo (Tresillian)`,
            `Evite óleos essenciais, como lavanda ou eucalipto, em bebês com menos de dois anos (Tresillian)`,
            `Se o bebê tem eczema ou pele machucada, evite óleos com possíveis alérgenos, como amendoim ou gergelim, e pergunte ao pediatra (Just One Norfolk)`,
          ],
        },
        {
          title: `Massagem para bebê passo a passo`,
          body: `Não existe uma ordem única. A American Academy of Pediatrics (AAP) lembra, no HealthyChildren.org, que não é preciso usar todas as técnicas nem seguir uma sequência fixa: experimente e veja o que o seu bebê gosta. Muitas famílias começam pelas pernas. Faça movimentos lentos e ritmados, com pressão firme, porém suave e constante; toques muito leves fazem cócegas em vez de acalmar. Comece com poucos minutos (segundo a Tresillian, uma sessão pode durar só um minuto) e deixe o bebê decidir quanto tempo dura.`,
          list: [
            `Peça licença: esfregue as mãos quentes onde ele possa ver e diga o que vai fazer. Se ele virar o rosto ou resmungar, tente outra hora.`,
            `Pernas: com o bebê de barriga para cima, segure um tornozelo e, com a outra mão, deslize devagar da coxa até o pé; depois troque de mão. Algumas vezes em cada perna.`,
            `Pés: com os polegares, deslize do calcanhar até os dedos e role cada dedinho com delicadeza. A AAP recomenda pressão firme nos pés, porque toques leves fazem cócegas.`,
            `Barriga: só massageie a barriga depois que o umbigo estiver bem cicatrizado. Então, com os dedos esticados, faça círculos lentos no sentido horário ao redor do umbigo.`,
            `Peito: apoie as duas mãos espalmadas no meio do peito e deslize para fora, em direção aos ombros, como quem alisa as páginas de um livro.`,
            `Braços e mãos: deslize do ombro até o punho, abra a palma com o polegar e alise cada dedo. Se ele mantiver a mão fechada, não force.`,
            `Costas: se ele continuar tranquilo, coloque-o de bruços sobre suas pernas ou na toalha e faça movimentos firmes e suaves dos ombros até a parte baixa das costas (AAP).`,
            `Final: deixe as mãos paradas sobre ele por um instante, vista-o bem e dê um abraço. Muitos bebês querem mamar ou dormir em seguida.`,
          ],
        },
        {
          title: `Bicicletinha para gases: um olhar honesto`,
          body: `A bicicletinha consiste em deitar o bebê de barriga para cima e mexer as perninhas devagar, como se pedalasse, ou levar os dois joelhos com suavidade em direção à barriga e segurar um pouco. Muitas famílias sentem que isso ajuda o bebê a soltar gases, e o movimento costuma aparecer junto com os círculos na barriga.\n\nSendo honesto: as evidências são fracas. A AAP cita menos sintomas de cólica entre os possíveis benefícios da massagem, mas a revisão Cochrane abaixo considerou grande parte das evidências de baixa qualidade e não sustenta a massagem em bebês sem fatores de risco; a página do NHS sobre cólica não menciona massagem nem movimentos de perna. Um folheto britânico da Local Infant Feeding Information Board, publicado pelo NHS Grampian, cita pedalar as pernas entre as coisas que alguns pais acham úteis, mas pede para esperar até depois da consulta pediátrica por volta de 6 semanas. É uma orientação britânica; o NHS informa que a consulta de 6 a 8 semanas inclui o exame do quadril. Pergunte ao pediatra do seu bebê. Para cólica, o NHS recomenda medidas práticas: pegar o bebê no colo quando ele chora muito, mantê-lo na vertical durante as mamadas, ajudá-lo a arrotar depois, embalar com calma e dar um banho morno. Ele não recomenda gotas para cólica nem suplementos de ervas ou probióticos, pois não há evidência de que ajudem.\n\nSe for tentar a bicicletinha, vá com delicadeza e pare se o bebê chorar ou parecer desconfortável. Se acalmar, ótimo; se não, você não está deixando de lado nenhuma cura.`,
        },
        {
          title: `O que a ciência realmente diz sobre os benefícios`,
          body: `É comum ler que a massagem melhora sono, digestão, ganho de peso, desenvolvimento e vínculo. As pesquisas são mais modestas. A análise mais completa é uma revisão Cochrane, publicada em 2013, com 34 estudos randomizados em bebês saudáveis com menos de seis meses. Vinte desses estudos tinham alto risco de viés, ou seja, resultados menos confiáveis. Algumas análises, como as de peso, comprimento, duração do sono e tempo de choro, foram favoráveis à massagem, mas a maioria dos resultados significativos desapareceu no acompanhamento posterior ou quando os estudos de alto risco de viés foram retirados. Não houve diferença significativa em temperamento, interação entre pais e bebê ou desenvolvimento mental. Os autores concluíram que os resultados, por enquanto, não sustentam o uso da massagem em grupos sem fatores de risco, e que novas pesquisas deveriam focar em grupos de maior risco.\n\nIsso não quer dizer que a massagem seja inútil. Ela é uma forma calma de passar um tempo perto do bebê, e materiais do NHS e da AAP a apresentam como um jeito de relaxar e criar vínculo. O Ministério da Saúde também cita o fortalecimento do vínculo entre pais e bebê na shantala. O Cambridge University Hospitals a descreve como apoio ao vínculo afetivo. O que ela não é: um tratamento comprovado para cólica, problemas de sono ou desenvolvimento. Aproveite como um ritual gostoso, não como um procedimento médico que precisa sair perfeito.`,
        },
        {
          title: `Quando não massagear e sinais para parar`,
          body: `Nestas situações, deixe a massagem para outro dia ou evite a área afetada. Na dúvida, pergunte antes ao pediatra.`,
          list: [
            `O bebê está doente, com temperatura elevada ou infecção`,
            `O bebê está dormindo, com fome, chorando ou irritado`,
            `Logo depois de mamar ou logo antes`,
            `O umbigo ainda não cicatrizou bem: espere até que isso aconteça`,
            `Condição de pele, hematomas, pele machucada ou infeccionada, feridas abertas: pergunte antes ao pediatra`,
            `Até 3 dias depois de uma vacina: pergunte antes ao pediatra (consta no folheto da unidade neonatal de Cambridge)`,
            `Até a consulta por volta das 6 semanas: nada de movimentos de bicicletinha (orientação de um folheto britânico)`,
            `Cirurgia, fratura ou lesão recente: só com liberação do médico ou fisioterapeuta`,
          ],
        },
        {
          title: `Reações normais e quando procurar atendimento`,
          body: `O bebê mostra quando a massagem não está agradando. A Tresillian e a AAP orientam parar assim que ele parecer desconfortável ou cansado, por exemplo se virar o rosto, resmungar ou chorar. Pare, abrace e tente outro dia: nem todo bebê gosta de massagem logo de início, como lembra o Just One Norfolk.\n\nSe aparecer uma erupção depois de usar um produto, pare de usá-lo e pergunte ao pediatra. Muitas vezes é durante a massagem que se percebe alguma coisa, então procure orientação médica se algo no bebê te preocupar. O NHS considera febre de 38 °C ou mais em bebê com menos de 3 meses (39 °C ou mais entre 3 e 6 meses) motivo para atendimento de emergência. Ele também lista como sinais de emergência: temperatura muito baixa (abaixo de 36 °C, ou frio e tremendo), choro fraco, agudo ou contínuo, respiração muito rápida ou difícil, erupção que não some quando se aperta, pele azulada, acinzentada, pálida ou manchada, dificuldade para acordar, convulsão, ou 12 horas sem urinar. Essa não é a lista completa; ela está na página do NHS abaixo. Em emergência, ligue para o SAMU, 192. Se o choro frequente estiver te esgotando, converse com o pediatra ou a equipe da sua UBS; você não precisa dar conta de tudo sozinho.`,
        },
        {
          title: `Criando uma rotina e registrando`,
          body: `Sessões curtas e regulares costumam funcionar melhor do que longas e esporádicas. Muitas famílias fazem a massagem à noite, depois do banho; outras, depois da soneca da manhã. Algumas anotações ajudam a perceber padrões: em que hora do dia o bebê aproveita mais, quais movimentos acalmam e quais irritam, e se alguma reação coincide com um óleo novo.\n\nO guia de exercícios e massagem do Mamio mostra exercícios ilustrados como massagem, tempo de bruços e bicicletinha, cada um com idade a partir da qual fazer e cuidados de segurança. Você pode registrar o tempo de bruços e adicionar notas à linha do tempo do dia, para que um simples "massagem depois do banho, adorou as pernas, reclamou de bruços" fique ao lado das mamadas e do sono. Se precisar conversar com o pediatra sobre pele, choro ou alimentação, o histórico está à mão.`,
        },
      ],
      faq: [
        {
          question: `A partir de quando posso fazer shantala no bebê?`,
          answer: `Toque carinhoso e colo são bem-vindos desde o nascimento. A Tresillian diz que você pode começar uma massagem mais estruturada, como a shantala, com o bebê recém-nascido ou um pouco maior; alguns serviços do NHS falam em 4 a 6 semanas. O NHS desaconselha óleos e loções antes de o bebê completar 1 mês.`,
        },
        {
          question: `Massagem na barriga do bebê é no sentido horário?`,
          answer: `Sim, em círculos lentos no sentido horário ao redor do umbigo. Espere o umbigo estar bem cicatrizado antes de massagear a barriga.`,
        },
        {
          question: `Qual óleo usar na massagem do bebê?`,
          answer: `Nenhum é obrigatório. Um pequeno estudo britânico observou que a barreira da pele de recém-nascidos se desenvolveu mais devagar com azeite ou óleo de girassol do que sem óleo, e os pesquisadores aconselharam não aplicá-los em bebês saudáveis até haver mais evidências. Depois do primeiro mês, verifique se o produto é adequado para bebês, prefira um sem perfume e pergunte ao pediatra em caso de pele seca ou dermatite.`,
        },
        {
          question: `Massagem e bicicletinha ajudam na cólica?`,
          answer: `Algumas famílias acham reconfortante, mas as evidências são fracas: a revisão Cochrane não sustenta a massagem em bebês sem fatores de risco, e a página do NHS sobre cólica não a cita. O NHS recomenda colo, mamada em posição mais vertical, ajudar a arrotar, embalar e banho morno, mas não gotas nem suplementos, pois não há evidência de que ajudem.`,
        },
        {
          question: `Quanto tempo deve durar a massagem?`,
          answer: `Comece com poucos minutos e deixe o bebê ditar o ritmo. Alguns passam a gostar de sessões mais longas; outros cansam depois de uma perna. Pare assim que ele virar o rosto, resmungar ou chorar.`,
        },
      ],
      ctaText: `Abrir o guia de massagem e exercícios do Mamio`,
      sources: [...GLOBAL_SOURCES, GOVBR],
    },

    tr: {
      metaTitle: `Bebek Masajı Nasıl Yapılır? Adım Adım Rehber | Mamio`,
      metaDescription: `Bebek masajı adım adım: ne zaman başlanır, hangi yağ (ya da hiç), bacaklar, karın, göğüs, kollar, sırt, araştırmalar ne diyor ve hangi durumlarda masaj yapılmaz.`,
      title: `Bebek masajı nasıl yapılır? Adım adım rehber`,
      date: `2026-10-24`,
      reviewed: `2026-11-04`,
      intro: `Bebeğine masaj yapmak için onun uyanık, sakin ve sana ilgili olduğu bir anı seç, ılık bir odada bir havlunun üzerine yatır ve yavaş, yumuşak ama kararlı hareketler yap: genellikle önce bacaklar ve ayaklar, sonra saat yönünde karın, göğüs, kollar ve en son sırt. İngiltere'nin ulusal sağlık hizmeti NHS, bebek en az bir aylık olana kadar hiçbir yağ ya da losyon kullanılmamasını öneriyor; bebeğin yeterli olduğunu gösterdiği anda da masajı bırakıyorsun. Aşağıda her adımı, yağ seçimini, araştırmaların faydalar hakkında gerçekte ne söylediğini ve masajın hangi durumlarda yapılmaması gerektiğini bulacaksın.`,
      sections: [
        {
          title: `Bebek masajına ne zaman başlanır?`,
          body: `Yumuşak, şefkatli dokunuş doğumdan itibaren iyidir: kucağa almak, okşamak ve ten tene temas günlük bakımın bir parçası. Daha düzenli bir masaj rutini genellikle biraz sonra başlar. Avustralyalı ebeveyn destek kurumu Tresillian yenidoğanken ya da biraz büyüdüğünde başlayabileceğini söylüyor; Just One Norfolk gibi bazı NHS hizmetleri ise cildin uyum sağlaması ve bebeğin anne karnı dışında daha sakinleşmesi için 4–6 hafta beklemeyi tavsiye ediyor. Alman çocuk doktorlarının sitesi Kinderärzte im Netz de masaja başlamadan önce göbeğin iyi iyileşmiş olması gerektiğini ekliyor.\n\nNHS ürünler konusunda net: ilk ay bebek cildi için en iyisi sade su, ve bebek en az 1 aylık olana kadar losyon ve yağdan kaçınmanı öneriyor. Bebeğin prematüre doğduysa ya da bir sağlık sorunu varsa, başlamadan önce çocuk doktoruna danış; yenidoğan ünitesindeki bebekler kendi önerilerini izler.`,
        },
        {
          title: `Doğru an: bebeğinin işaretlerini oku`,
          body: `Zamanlama tekniğe göre daha önemli. En iyi an, bebeğinin uyanık, sakin ve sana dönük olduğu zamandır (Tresillian buna "sakin ve dikkatli" diyor). Cambridge University Hospitals, masaj yapılmaması gereken durumları şöyle sıralıyor: bebek uyurken, açken, ağlarken, ateşi yüksekken ya da bilinen bir enfeksiyonu varken.\n\nTok karnına masaj yapma: Kinderärzte im Netz bunu önermiyor, AAP ise (koliği hafifletmek için) beslenmeden en az 30 dakika sonrasını bekle diyor. Açlık da Cambridge listesinde var; bu yüzden iki öğün arası genellikle en iyisi. NHS banyodan sonrasını iyi bir zaman olarak gösteriyor; masaj bebeğin rahatlamasına ve uykuya geçmesine yardım edebilir.\n\nSenin halin de önemli. Tresillian, stresli ya da çok yorgunsan sakin ve olumlu hissedene kadar beklemeni öneriyor. Kinderärzte im Netz, telefon ve başka kesintilerin olmadığı sakin bir oda öneriyor; böylece masaj bir görev değil, birlikte geçirilen sakin bir ana dönüşür.`,
          list: [
            `Bebeğin çıplak olacağı için ılık ve cereyansız bir oda`,
            `Yerde ya da yatakta yumuşak bir havlu veya minder`,
            `Sıcak eller, kısa tırnaklar, yüzük ya da bileklik yok`,
            `El altında temiz bir bez ya da bez üzerinde kalabilir`,
            `Telefonsuz, sakin on dakika`,
          ],
        },
        {
          title: `Yağla mı, yağsız mı? Resmi öneriler ne diyor?`,
          body: `Yağ şart değil: masaj kuru ve sıcak ellerle de gayet iyi olur. NHS ilk ay boyunca hiçbir yağ ve losyonu önermiyor. Sonrasında bir yağ ya da losyon kullanmak istersen, NHS ürünün bebekler için uygun olup olmadığını kontrol etmeni söylüyor.\n\nBitkisel yağlarla ilgili kanıtlar sanıldığı kadar net değil. Zeytinyağı ve ayçiçek yağı geleneksel tercihler ve Tresillian zeytinyağını ya da herhangi bir bitkisel yağı genellikle iyi bir seçim sayıyor. Ancak Manchester Üniversitesi'nin 115 yenidoğanla yaptığı küçük bir İngiliz pilot çalışmasında 28 gün boyunca günde iki kez birkaç damla zeytinyağı, ayçiçek yağı ya da hiç yağ uygulandı ve cilt bariyerinin iki yağla da daha yavaş geliştiği görüldü. Araştırmacılar, daha fazla kanıt olana kadar sağlıklı bebeklerin cildine bu yağların sürülmemesini önerdi. Bebeğinin cildi kuruysa, egzaması varsa ya da ailede alerji öyküsü bulunuyorsa, çocuk doktoruna senin bebeğin için neyi önerdiğini sor.\n\nResmi önerilerde şunlar geçiyor:`,
          list: [
            `Ürünün bebekler için uygun olduğunu kontrol et (NHS) ve yetişkin masaj yağı ya da el losyonu yerine kokusuz bir ürün seç (Just One Norfolk, AAP)`,
            `Alerjik reaksiyona yol açabilen kuruyemiş yağlarından kaçın (AAP) ve etiketteki içerik listesini her zaman oku (Tresillian)`,
            `İki yaşından küçük bebeklerde lavanta ya da okaliptüs gibi uçucu yağlardan kaçın (Tresillian)`,
            `Bebeğinin egzaması ya da yaralı cildi varsa fıstık ya da susam gibi olası alerjenler içeren yağlardan kaçın ve çocuk doktoruna danış (Just One Norfolk)`,
          ],
        },
        {
          title: `Adım adım bebek masajı`,
          body: `Tek doğru bir sıra yok. Amerikan Pediatri Akademisi (AAP), HealthyChildren.org'da her tekniği kullanmanın ya da sabit bir sırayı izlemenin gerekmediğini vurguluyor: dene ve bebeğinin neyi sevdiğini gözlemle. Birçok ebeveyn bacaklardan başlıyor. Yavaş ve ritmik, sıkı ama yumuşak ve sürekli bir baskıyla çalış; çok hafif dokunuşlar sakinleştirmek yerine gıdıklar. Birkaç dakikayla başla (Tresillian'a göre bir seans bir dakika kadar kısa olabilir) ve sürenin ne kadar olacağına bebeğin karar versin.`,
          list: [
            `Önce izin iste: sıcak ellerini onun görebileceği şekilde ovuştur ve ne yapacağını söyle. Başını çevirir ya da huzursuzlanırsa başka zaman dene.`,
            `Bacaklar: Bebeğin sırtüstü yatarken bir bileğini tut ve diğer elinle uyluktan ayağa doğru yavaşça kaydır, sonra el değiştir. Her bacakta birkaç kez tekrarla.`,
            `Ayaklar: Başparmaklarınla topuktan parmaklara doğru tabanı sıvazla, her parmağı nazikçe yuvarla. AAP ayaklarda sıkı bir baskı öneriyor, çünkü hafif dokunuş gıdıklar.`,
            `Karın: Göbek iyi iyileşmeden karna masaj yapma. Sonra parmaklarını düz tutarak göbeğin çevresinde saat yönünde yavaş daireler çiz.`,
            `Göğüs: İki elini göğsün ortasına düz koy ve bir kitabın sayfalarını düzeltir gibi omuzlara doğru dışarı kaydır.`,
            `Kollar ve eller: Omuzdan bileğe doğru kaydır, başparmağınla avucunu nazikçe aç ve her parmağı sıvazla. Yumruğunu sıkı tutuyorsa zorlama.`,
            `Sırt: Hâlâ keyifliyse onu bacaklarının üzerine ya da havluya yüzüstü yatır; omuzlardan belin alt kısmına doğru sıkı ama yumuşak hareketler yap (AAP).`,
            `Bitiriş: Ellerini bir an bebeğinin üzerinde hareketsiz bırak, sonra sıcak tutacak şekilde giydir ve sarıl. Birçok bebek ardından beslenmek ya da uyumak ister.`,
          ],
        },
        {
          title: `Gaz için bisiklet hareketi: dürüst bir bakış`,
          body: `Bisiklet hareketi, bebeği sırtüstü yatırıp bacaklarını pedal çevirir gibi yavaşça hareket ettirmek ya da iki dizini nazikçe karnına doğru getirip kısa süre tutmaktır. Birçok ebeveyn bunun bebeğin gaz çıkarmasına yardım ettiğini düşünüyor ve hareket genellikle saat yönünde karın masajıyla birlikte gösteriliyor.\n\nDürüst olmak gerekirse kanıtlar zayıf. AAP, kolik belirtilerinin azalmasını masajın olası yararları arasında sayıyor; ama aşağıdaki Cochrane derlemesi kanıtların büyük kısmını düşük kaliteli buldu ve riski düşük bebeklerde masajı desteklemiyor; NHS kolik sayfası ise ne masajı ne de bacak hareketlerini anıyor. İngiltere'deki Local Infant Feeding Information Board'un NHS Grampian tarafından yayımlanan broşürü bacakları pedal çevirtmeyi bazı ebeveynlerin faydalı bulduğu yöntemler arasında sayıyor, ama 6. hafta civarındaki pediatrik kontrolden sonrasına kadar beklemeyi söylüyor. Bu bir İngiliz önerisi; NHS, 6–8. hafta kontrolünün kalça muayenesini de içerdiğini belirtiyor. Bunu bebeğinin doktoruna sor. Koliğe karşı NHS bunun yerine pratik adımlar öneriyor: çok ağlarken bebeğini kucaklamak ya da tutmak, beslerken dik tutmak, beslendikten sonra gazını çıkarmak, nazikçe sallamak ve ılık bir banyo. Kolik damlalarını ve bitkisel ya da probiyotik takviyeleri, işe yaradıklarına dair kanıt olmadığı için önermiyor.\n\nBisiklet hareketini denersen nazik ol ve bebeğin ağlar ya da rahatsız görünürse dur. Onu rahatlatıyorsa sorun yok; rahatlatmıyorsa bir tedaviyi kaçırmış olmuyorsun.`,
        },
        {
          title: `Araştırmalar faydalar hakkında gerçekte ne diyor?`,
          body: `Bebek masajının uykuyu, sindirimi, kilo alımını, gelişimi ve bağlanmayı iyileştirdiği sık sık yazılır. Araştırmalar daha temkinli. Bu konudaki en kapsamlı inceleme, altı aydan küçük sağlıklı bebeklerde yapılmış 34 randomize çalışmayı bir araya getiren, 2013'te yayımlanmış bir Cochrane derlemesi. Bu çalışmaların yirmisinde yüksek yanlılık riski vardı, yani sonuçları daha az güvenilir. Kilo, boy, uyku süresi ve ağlama süresi gibi bazı analizler masaj lehine çıktı, ama anlamlı sonuçların çoğu daha sonraki izlemede ya da yüksek yanlılık riskli çalışmalar çıkarılınca kayboldu. Mizaç, ebeveyn-bebek etkileşimi ve zihinsel gelişim açısından anlamlı bir fark bulunmadı. Yazarlar, bulguların şu an için risk taşımayan gruplarda masaj kullanımını desteklemediği ve gelecekteki araştırmaların daha yüksek riskli gruplara odaklanması gerektiği sonucuna vardı.\n\nBu, masajın anlamsız olduğu demek değil. Bebeğinle yakın vakit geçirmenin sakin bir yolu; NHS ve AAP kaynakları da onu rahatlamanın ve bağ kurmanın bir yolu olarak anlatıyor. Cambridge University Hospitals masajı bağlanmayı destekleyen bir uygulama olarak tanımlıyor. Ancak kolik, uyku sorunları ya da gelişim için kanıtlanmış bir tedavi değil. Onu kusursuz yapman gereken tıbbi bir uygulama olarak değil, keyifli bir ritüel olarak gör.`,
        },
        {
          title: `Ne zaman masaj yapılmaz ve bırakma işaretleri`,
          body: `Bu durumlarda masajı başka bir güne bırak ya da ilgili bölgeye dokunma. Emin değilsen önce çocuk doktoruna sor.`,
          list: [
            `Bebeğin hasta, ateşli ya da enfeksiyonlu`,
            `Bebeğin uyuyor, aç, ağlıyor ya da huzursuz`,
            `Beslenmeden hemen sonra ya da hemen önce`,
            `Göbek henüz iyi iyileşmedi: iyileşene kadar bekle`,
            `Cilt hastalığı, morluk, yaralı ya da enfekte cilt, açık yara: önce çocuk doktoruna sor`,
            `Aşıdan sonraki 3 gün içinde: önce çocuk doktoruna sor (Cambridge yenidoğan ünitesi broşüründe yer alıyor)`,
            `6. hafta civarındaki kontrole kadar bisiklet gibi bacak hareketleri yapma (İngiliz broşürünün önerisi)`,
            `Yakın zamanda ameliyat, kırık ya da yaralanma varsa, ancak doktor ya da fizyoterapist onaylarsa`,
          ],
        },
        {
          title: `Normal tepkiler ve ne zaman doktora başvurmalı?`,
          body: `Bebekler masajdan hoşlanmadıklarında bunu gösterir. Tresillian ve AAP, bebek rahatsız görünür ya da yeterli olduğunu belli eder etmez durmayı öneriyor; örneğin başını çevirirse, huzursuzlanırsa ya da ağlarsa. Dur, sarıl ve başka bir gün tekrar dene: Just One Norfolk'un belirttiği gibi her bebek masajı başta sevmez.\n\nBir ürünü sürdükten sonra döküntü çıkarsa kullanmayı bırak ve çocuk doktoruna sor. Çoğu zaman bir şeyi masaj sırasında fark edersin; bu yüzden bebeğinle ilgili seni endişelendiren bir şey varsa tıbbi destek al. Sağlık Bakanlığı'na bağlı Behçet Uz Çocuk Hastanesi, 3 aydan küçük bebeklerde ateşin çok ciddi bir enfeksiyon belirtisi olabileceğini ve en yakın sağlık kuruluşuna başvurulması gerektiğini belirtiyor; NHS eşiği 38 °C ve üzeri olarak veriyor. NHS ayrıca acil durum işaretleri olarak şunları sayıyor: çok düşük ısı (36 °C altı ya da soğuk ve titriyor), zayıf, tiz ya da sürekli ağlama, çok hızlı ya da zor nefes alma, bastırınca solmayan döküntü, mavi, gri, soluk ya da alaca bulaca cilt, uyandırmada güçlük, nöbet ya da 12 saattir idrar yapmama. Bu listenin tamamı değil; tamamı aşağıdaki NHS sayfasında. Acil durumda 112'yi ara. Sık ağlama seni tüketiyorsa çocuk doktoruna ya da aile hekimine anlat; bununla tek başına baş etmek zorunda değilsin.`,
        },
        {
          title: `Rutin oluşturmak ve kayıt tutmak`,
          body: `Kısa ve düzenli seanslar genellikle uzun ama seyrek seanslardan daha iyi işler. Birçok aile akşam banyodan sonra, bazıları da sabah uykusunun ardından masaj yapıyor. Birkaç not, kalıpları görmene yardım eder: bebeğin günün hangi saatinde keyif alıyor, hangi hareketler onu sakinleştiriyor ya da huzursuz ediyor, bir tepki yeni bir yağla mı çakışıyor?\n\nMamio'daki bebek egzersizleri ve masaj rehberi, masaj, karın üstü zaman ve bisiklet hareketi gibi resimli egzersizleri başlangıç yaşı ve güvenlik notlarıyla birlikte gösteriyor. Karın üstü zamanı kaydedebilir ve günlük zaman çizelgene notlar ekleyebilirsin; böylece "banyodan sonra masaj, bacakları çok sevdi, yüzüstü huzursuzlandı" gibi kısa bir not beslenme ve uykunun hemen yanında durur. Cilt, ağlama ya da beslenme konusunda doktorla konuşman gerektiğinde geçmiş kolayca elinin altında olur.`,
        },
      ],
      faq: [
        {
          question: `Bebeğe kaç haftalıkken masaj yapılabilir?`,
          answer: `Yumuşak dokunuş ve kucaklamak doğumdan itibaren iyidir. Tresillian daha düzenli bir masaja yenidoğanken ya da biraz büyüdüğünde başlanabileceğini söylüyor; bazı NHS hizmetleri 4–6 hafta diyor. NHS bebek en az 1 aylık olmadan yağ ve losyon kullanılmamasını öneriyor.`,
        },
        {
          question: `Bebeğin karnına masaj hangi yönde yapılır?`,
          answer: `Saat yönünde, göbeğin çevresinde yavaş dairelerle. Göbek iyi iyileşmeden karna masaj yapma.`,
        },
        {
          question: `Bebek masajında zeytinyağı kullanılır mı?`,
          answer: `Geleneksel bir tercih, ancak küçük bir İngiliz çalışmasında yenidoğanların cilt bariyeri zeytinyağı ya da ayçiçek yağıyla yağsıza göre daha yavaş gelişti ve araştırmacılar daha fazla kanıt olana kadar sağlıklı bebeklere sürülmemesini önerdi. Yağsız da masaj yapabilirsin; kullanacaksan bebeklere uygun, kokusuz bir ürün seç ve cilt kuruysa ya da egzama varsa doktoruna danış.`,
        },
        {
          question: `Bebek masajı gaz ve koliğe iyi gelir mi?`,
          answer: `Bazı aileler karın masajını ve bisiklet hareketini rahatlatıcı buluyor, ama kanıtlar zayıf: Cochrane derlemesi riski düşük bebeklerde masajı desteklemiyor ve NHS kolik sayfası masajı anmıyor. NHS kucakta tutmayı, dik pozisyonda beslemeyi, gaz çıkarmayı, sallamayı ve ılık banyoyu öneriyor; kolik damlalarını ve takviyeleri ise işe yaradığına dair kanıt olmadığı için önermiyor.`,
        },
        {
          question: `Bebek masajı ne kadar sürmeli?`,
          answer: `Birkaç dakikayla başla, temposu bebeğin belirlesin. Bazıları zamanla daha uzun seanslardan hoşlanır, bazıları tek bacaktan sonra yeter der. Başını çevirdiği, huzursuzlandığı ya da ağladığı anda dur.`,
        },
      ],
      ctaText: `Mamio'daki masaj ve egzersiz rehberini aç`,
      sources: [...GLOBAL_SOURCES, BEHCET],
    },
  },
};
