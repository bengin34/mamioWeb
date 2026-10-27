// Landing pages for features added to the app in 2026 (development, growth
// percentiles, teeth, potty, exercises, Apple Watch, several babies).
// Claims here were checked against the app code: Pro-only parts are named as
// such, and iOS-only parts say so.

export const newSeoFeaturePages = {
  development: {
    image: '03-device-top',
    slugs: {
      en: 'baby-milestone-tracker',
      de: 'baby-entwicklung-tracker',
      tr: 'bebek-gelisim-takibi',
    },
    locales: {
      en: {
        shortTitle: 'Milestone tracker',
        metaTitle: 'Baby Milestone Tracker App | Mamio',
        metaDescription:
          'Log first smiles, steps, and words with dates and photos. Mamio suggests age-based milestones from 0 to 3 years, with no pressure and no scores.',
        eyebrow: 'Milestones and development',
        title: 'Keep every first, without turning it into a test.',
        lead:
          'Mamio suggests milestones for your baby\'s age across motor, language, social, and thinking skills, and lets you save the date, a note, and photos when they happen.',
        imageAlt: 'Mamio milestones list with first steps, first word, first tooth, and stranger anxiety entries.',
        bullets: ['54 age-based milestone ideas', 'First words list with dates', 'Up to 6 photos per milestone'],
        sections: [
          {
            title: 'Milestone suggestions for your baby\'s age',
            body: 'Mamio offers 54 milestone ideas in five groups: motor, language, social, cognitive, and firsts. Each one has a typical age range, so you see what is coming up instead of a long checklist for the whole of early childhood.',
          },
          {
            title: 'A first-words list',
            body: 'Write down each new word with the date and a short note. Over months the list becomes a record of how your toddler\'s language grew, and it is handy when a pediatrician asks how many words your child says.',
          },
          {
            title: 'Photos where they belong',
            body: 'Attach up to six photos to a milestone so the first crawl or the first wobbly step sits next to its date. Everything stays on your phone.',
          },
          {
            title: 'A guide, not a verdict',
            body: 'Every child develops at their own pace. The age ranges in Mamio are a guide and are not a diagnosis or a replacement for developmental screening. Age guides are adapted from the CDC "Learn the Signs. Act Early." program, and if something worries you, your pediatrician is the right person to ask.',
          },
        ],
        faq: [
          {
            question: 'Which milestones does Mamio include?',
            answer: 'Mamio suggests 54 milestones across motor, language, social, cognitive, and firsts, each with a typical age range. You can also save your own moments.',
          },
          {
            question: 'Does Mamio tell me if my baby is behind?',
            answer: 'No. Mamio records what you observe and shows typical age ranges. It does not score your child or diagnose delays. Talk to your pediatrician if you have concerns.',
          },
          {
            question: 'Can I track first words?',
            answer: 'Yes. Mamio has a first-words list where each word gets a date and an optional note.',
          },
          {
            question: 'What does Mamio Pro add for development?',
            answer: 'Pro unlocks the development timeline, which compares sleep and feeding around approximate fussy periods, plus full history beyond the most recent entries.',
          },
        ],
      },
      de: {
        shortTitle: 'Entwicklungs-Tracker',
        metaTitle: 'Baby Entwicklung & Meilensteine App | Mamio',
        metaDescription:
          'Erstes Lächeln, erste Schritte, erste Wörter mit Datum und Fotos festhalten. Mamio zeigt altersgerechte Meilensteine von 0 bis 3 Jahren – ohne Druck.',
        eyebrow: 'Meilensteine und Entwicklung',
        title: 'Jedes erste Mal festhalten, ohne einen Test daraus zu machen.',
        lead:
          'Mamio schlägt Meilensteine passend zum Alter deines Babys vor – Motorik, Sprache, Soziales und Denken – und speichert Datum, Notiz und Fotos, wenn es so weit ist.',
        imageAlt: 'Mamio Meilensteinliste mit ersten Schritten, erstem Wort, erstem Zahn und Fremdeln.',
        bullets: ['54 altersgerechte Meilensteine', 'Liste der ersten Wörter mit Datum', 'Bis zu 6 Fotos pro Meilenstein'],
        sections: [
          {
            title: 'Meilensteine passend zum Alter',
            body: 'Mamio bietet 54 Meilenstein-Ideen in fünf Bereichen: Motorik, Sprache, Soziales, Kognition und erste Male. Jeder hat eine typische Altersspanne – du siehst, was als Nächstes kommen kann, statt einer endlosen Checkliste.',
          },
          {
            title: 'Eine Liste der ersten Wörter',
            body: 'Notiere jedes neue Wort mit Datum und kurzer Notiz. Mit der Zeit entsteht ein Verlauf der Sprachentwicklung, der auch bei der U-Untersuchung hilft, wenn nach dem Wortschatz gefragt wird.',
          },
          {
            title: 'Fotos am richtigen Platz',
            body: 'Hänge bis zu sechs Fotos an einen Meilenstein, damit das erste Krabbeln oder der erste wackelige Schritt direkt beim Datum liegt. Alles bleibt auf deinem Handy.',
          },
          {
            title: 'Orientierung, kein Urteil',
            body: 'Jedes Kind entwickelt sich in seinem eigenen Tempo. Die Altersspannen in Mamio sind eine Orientierung und weder Diagnose noch Ersatz für Vorsorgeuntersuchungen. Die Altersleitfäden basieren auf dem CDC-Programm „Learn the Signs. Act Early.“ – bei Sorgen ist deine Kinderärztin oder dein Kinderarzt die richtige Anlaufstelle.',
          },
        ],
        faq: [
          {
            question: 'Welche Meilensteine enthält Mamio?',
            answer: 'Mamio schlägt 54 Meilensteine aus Motorik, Sprache, Sozialem, Kognition und ersten Malen vor, jeweils mit typischer Altersspanne. Eigene Momente kannst du ebenfalls speichern.',
          },
          {
            question: 'Sagt mir Mamio, ob mein Baby hinterherhinkt?',
            answer: 'Nein. Mamio hält fest, was du beobachtest, und zeigt typische Altersspannen. Es bewertet dein Kind nicht und stellt keine Diagnosen. Sprich bei Sorgen mit der Kinderarztpraxis.',
          },
          {
            question: 'Kann ich die ersten Wörter festhalten?',
            answer: 'Ja. Mamio hat eine Liste der ersten Wörter, in der jedes Wort ein Datum und eine optionale Notiz bekommt.',
          },
          {
            question: 'Was bringt Mamio Pro bei der Entwicklung?',
            answer: 'Pro schaltet die Entwicklungs-Zeitleiste frei, die Schlaf und Mahlzeiten rund um ungefähre unruhige Phasen vergleicht, sowie den vollständigen Verlauf über die letzten Einträge hinaus.',
          },
        ],
      },
      tr: {
        shortTitle: 'Gelişim takibi',
        metaTitle: 'Bebek Gelişim Basamakları Takip Uygulaması | Mamio',
        metaDescription:
          'İlk gülüş, ilk adım, ilk kelime: tarih ve fotoğrafla kaydet. Mamio 0-3 yaş için yaşa uygun gelişim basamakları önerir, baskı ve puanlama olmadan.',
        eyebrow: 'Gelişim basamakları',
        title: 'Her ilki sakla, onu bir sınava çevirmeden.',
        lead:
          'Mamio bebeğinin yaşına uygun motor, dil, sosyal ve bilişsel gelişim basamakları önerir; olduğu an tarihini, notunu ve fotoğraflarını kaydetmeni sağlar.',
        imageAlt: 'Mamio gelişim basamakları listesi: ilk adımlar, ilk kelime, ilk diş ve yabancı kaygısı kayıtları.',
        bullets: ['Yaşa göre 54 gelişim basamağı', 'Tarihli ilk kelimeler listesi', 'Basamak başına 6 fotoğraf'],
        sections: [
          {
            title: 'Bebeğinin yaşına uygun öneriler',
            body: 'Mamio motor, dil, sosyal, bilişsel ve ilkler olmak üzere beş grupta 54 gelişim basamağı önerir. Her birinin tipik bir yaş aralığı vardır; tüm erken çocukluk için uzun bir liste yerine sıradaki adımları görürsün.',
          },
          {
            title: 'İlk kelimeler listesi',
            body: 'Her yeni kelimeyi tarihi ve kısa bir notla yaz. Aylar içinde bu liste çocuğunun dil gelişiminin kaydına dönüşür; doktor kaç kelime söylediğini sorduğunda da işine yarar.',
          },
          {
            title: 'Fotoğraflar doğru yerde',
            body: 'Bir gelişim basamağına altı fotoğrafa kadar ekle; ilk emekleme ya da ilk sendeleyen adım tarihiyle birlikte dursun. Hepsi telefonunda kalır.',
          },
          {
            title: 'Rehber, hüküm değil',
            body: 'Her çocuk kendi hızında gelişir. Mamio\'daki yaş aralıkları bir rehberdir; tanı veya gelişim taramasının yerine geçmez. Yaş rehberleri CDC "Learn the Signs. Act Early." programından uyarlanmıştır. Seni endişelendiren bir şey varsa çocuk doktoruna danış.',
          },
        ],
        faq: [
          {
            question: 'Mamio hangi gelişim basamaklarını içeriyor?',
            answer: 'Mamio motor, dil, sosyal, bilişsel ve ilkler gruplarında, her biri tipik yaş aralığıyla 54 gelişim basamağı önerir. Kendi anlarını da kaydedebilirsin.',
          },
          {
            question: 'Mamio bebeğimin geride olup olmadığını söyler mi?',
            answer: 'Hayır. Mamio gözlemlerini kaydeder ve tipik yaş aralıklarını gösterir. Çocuğunu puanlamaz, gecikme teşhisi koymaz. Endişen varsa çocuk doktoruna danış.',
          },
          {
            question: 'İlk kelimeleri takip edebilir miyim?',
            answer: 'Evet. Mamio\'da her kelimeye tarih ve isteğe bağlı not eklenen bir ilk kelimeler listesi var.',
          },
          {
            question: 'Mamio Pro gelişim tarafında ne ekler?',
            answer: 'Pro, yaklaşık huzursuzluk dönemleri etrafında uyku ve beslenmeyi karşılaştıran gelişim zaman çizelgesini ve son kayıtların ötesindeki tüm geçmişi açar.',
          },
        ],
      },
    },
  },
  growthPercentiles: {
    image: '04-device-bottom',
    slugs: {
      en: 'baby-growth-percentile-tracker',
      de: 'baby-wachstum-perzentilen',
      tr: 'bebek-persentil-takibi',
    },
    locales: {
      en: {
        shortTitle: 'Growth percentiles',
        metaTitle: 'Baby Growth Percentile Tracker (WHO) | Mamio',
        metaDescription:
          'Log weight, length, and head circumference and see them on WHO Child Growth Standards curves for 0 to 24 months. Offline, with no account.',
        eyebrow: 'Growth and percentiles',
        title: 'See the growth trend, not just one number.',
        lead:
          'Mamio keeps weight, length, and head circumference in one chart and places them on the WHO Child Growth Standards, so the trend is easy to discuss at the next checkup.',
        imageAlt: 'Mamio growth chart with weight curve and latest weight, height, and head circumference values.',
        bullets: ['Weight, length, head circumference', 'WHO standards, 0–24 months', 'Trend chart over time'],
        sections: [
          {
            title: 'Every measurement in one place',
            body: 'Copy the numbers from each checkup or home weigh-in into Mamio. Weight, length, and head circumference each get their own chart, so you no longer search through paper booklets and photos of scales.',
          },
          {
            title: 'Based on the WHO Child Growth Standards',
            body: 'Percentiles in Mamio use the World Health Organization Child Growth Standards for babies from birth to 24 months. Set your baby\'s sex in the profile so the right reference curve is used.',
          },
          {
            title: 'Why the line matters more than the dot',
            body: 'A single percentile says little on its own. Healthy babies can sit anywhere from low to high percentiles. What pediatricians look at is how the curve develops over time, which is exactly what a chart of your own measurements shows.',
          },
          {
            title: 'Ready for the pediatrician',
            body: 'Growth entries can be part of a doctor visit summary along with feeds, sleep, and health notes. Mamio shows data; your pediatrician interprets it.',
          },
        ],
        faq: [
          {
            question: 'Which growth charts does Mamio use?',
            answer: 'Mamio uses the WHO Child Growth Standards for weight, length, and head circumference from birth to 24 months. It does not use CDC charts.',
          },
          {
            question: 'Is a low percentile a bad sign?',
            answer: 'Not by itself. Many healthy babies follow a low or high percentile line. Sudden changes across lines are what is worth discussing with your pediatrician.',
          },
          {
            question: 'Is growth tracking free?',
            answer: 'Logging measurements and viewing the charts is free. Percentile labels, WHO percentile bands, and the comparison with the WHO average are part of Mamio Pro.',
          },
          {
            question: 'Does Mamio work for premature babies?',
            answer: 'You can log measurements for any baby. Mamio\'s percentiles use actual age, so for premature babies ask your pediatrician how to read the curve with corrected age.',
          },
        ],
      },
      de: {
        shortTitle: 'Wachstum & Perzentilen',
        metaTitle: 'Baby Perzentilen & Wachstum App (WHO) | Mamio',
        metaDescription:
          'Gewicht, Länge und Kopfumfang eintragen und auf den WHO-Wachstumskurven von 0 bis 24 Monaten sehen. Offline und ohne Konto.',
        eyebrow: 'Wachstum und Perzentilen',
        title: 'Den Verlauf sehen, nicht nur eine Zahl.',
        lead:
          'Mamio bündelt Gewicht, Länge und Kopfumfang in einem Diagramm und ordnet sie in die WHO-Wachstumsstandards ein – so lässt sich der Verlauf bei der nächsten U-Untersuchung leicht besprechen.',
        imageAlt: 'Mamio Wachstumsdiagramm mit Gewichtskurve und aktuellen Werten für Gewicht, Größe und Kopfumfang.',
        bullets: ['Gewicht, Länge, Kopfumfang', 'WHO-Standards, 0–24 Monate', 'Verlaufsdiagramm'],
        sections: [
          {
            title: 'Alle Messwerte an einem Ort',
            body: 'Übertrage die Werte aus dem Gelben Heft oder vom Wiegen zu Hause in Mamio. Gewicht, Länge und Kopfumfang haben jeweils ein eigenes Diagramm – kein Suchen mehr zwischen Heft und Fotos der Waage.',
          },
          {
            title: 'Auf Basis der WHO-Wachstumsstandards',
            body: 'Die Perzentilen in Mamio nutzen die WHO Child Growth Standards für Babys von der Geburt bis 24 Monate. Lege im Profil das Geschlecht fest, damit die passende Referenzkurve verwendet wird.',
          },
          {
            title: 'Warum die Linie wichtiger ist als der Punkt',
            body: 'Eine einzelne Perzentile sagt wenig. Gesunde Babys können auf niedrigen wie auf hohen Perzentilen liegen. Kinderärztinnen und Kinderärzte achten darauf, wie sich die Kurve über die Zeit entwickelt – genau das zeigt ein Diagramm deiner eigenen Messungen.',
          },
          {
            title: 'Bereit für die Kinderarztpraxis',
            body: 'Wachstumseinträge können zusammen mit Mahlzeiten, Schlaf und Gesundheitsnotizen in eine Zusammenfassung für den Arztbesuch einfließen. Mamio zeigt Daten, die Bewertung übernimmt die Praxis.',
          },
        ],
        faq: [
          {
            question: 'Welche Wachstumskurven nutzt Mamio?',
            answer: 'Mamio nutzt die WHO Child Growth Standards für Gewicht, Länge und Kopfumfang von der Geburt bis 24 Monate. Die Kurven im Gelben Heft können davon abweichen.',
          },
          {
            question: 'Ist eine niedrige Perzentile ein schlechtes Zeichen?',
            answer: 'Nicht für sich allein. Viele gesunde Babys verlaufen auf einer niedrigen oder hohen Perzentile. Besprechenswert sind deutliche Sprünge über mehrere Linien.',
          },
          {
            question: 'Ist das Wachstums-Tracking kostenlos?',
            answer: 'Messwerte eintragen und Diagramme ansehen ist kostenlos. Perzentil-Angaben, WHO-Perzentilbänder und der Vergleich mit dem WHO-Durchschnitt gehören zu Mamio Pro.',
          },
          {
            question: 'Funktioniert Mamio für Frühchen?',
            answer: 'Du kannst Messwerte für jedes Baby eintragen. Die Perzentilen in Mamio nutzen das tatsächliche Alter – frag bei Frühchen in der Praxis, wie die Kurve mit korrigiertem Alter zu lesen ist.',
          },
        ],
      },
      tr: {
        shortTitle: 'Büyüme ve persentil',
        metaTitle: 'Bebek Persentil ve Büyüme Takibi (DSÖ) | Mamio',
        metaDescription:
          'Kilo, boy ve baş çevresini kaydet; 0-24 ay için Dünya Sağlık Örgütü büyüme standartları eğrilerinde gör. Çevrimdışı, hesap gerekmez.',
        eyebrow: 'Büyüme ve persentil',
        title: 'Tek bir sayıyı değil, büyüme eğrisini gör.',
        lead:
          'Mamio kilo, boy ve baş çevresini tek grafikte toplar ve DSÖ Çocuk Büyüme Standartlarına göre yerleştirir; bir sonraki kontrolde eğriyi konuşmak kolaylaşır.',
        imageAlt: 'Mamio büyüme grafiği: kilo eğrisi ve son kilo, boy ve baş çevresi değerleri.',
        bullets: ['Kilo, boy, baş çevresi', 'DSÖ standartları, 0-24 ay', 'Zaman içinde eğri'],
        sections: [
          {
            title: 'Tüm ölçümler tek yerde',
            body: 'Her kontrolden ya da evdeki tartımdan gelen değerleri Mamio\'ya gir. Kilo, boy ve baş çevresinin her biri kendi grafiğine sahip; aşı kartı ile tartı fotoğrafları arasında aramaya son.',
          },
          {
            title: 'DSÖ Çocuk Büyüme Standartlarına dayalı',
            body: 'Mamio\'daki persentiller doğumdan 24 aya kadar bebekler için Dünya Sağlık Örgütü Çocuk Büyüme Standartlarını kullanır. Doğru referans eğrisi için profilde bebeğinin cinsiyetini seç.',
          },
          {
            title: 'Nokta değil, çizgi önemli',
            body: 'Tek bir persentil tek başına az şey söyler. Sağlıklı bebekler düşük de yüksek de persentilde olabilir. Doktorların baktığı şey eğrinin zaman içinde nasıl ilerlediğidir; kendi ölçümlerinin grafiği tam da bunu gösterir.',
          },
          {
            title: 'Doktor kontrolüne hazır',
            body: 'Büyüme kayıtları beslenme, uyku ve sağlık notlarıyla birlikte doktor ziyareti özetine girebilir. Mamio veriyi gösterir; yorumu çocuk doktorun yapar.',
          },
        ],
        faq: [
          {
            question: 'Mamio hangi büyüme eğrilerini kullanıyor?',
            answer: 'Mamio doğumdan 24 aya kadar kilo, boy ve baş çevresi için DSÖ Çocuk Büyüme Standartlarını kullanır. CDC eğrilerini kullanmaz.',
          },
          {
            question: 'Düşük persentil kötü bir işaret mi?',
            answer: 'Tek başına değil. Birçok sağlıklı bebek düşük ya da yüksek bir persentil çizgisinde ilerler. Doktorla konuşulmaya değer olan, çizgiler arasında ani değişimlerdir.',
          },
          {
            question: 'Büyüme takibi ücretsiz mi?',
            answer: 'Ölçüm kaydetmek ve grafikleri görmek ücretsizdir. Persentil değerleri, DSÖ persentil bantları ve DSÖ ortalamasıyla karşılaştırma Mamio Pro\'dadır.',
          },
          {
            question: 'Mamio prematüre bebekler için uygun mu?',
            answer: 'Her bebek için ölçüm kaydedebilirsin. Mamio persentilleri gerçek yaşı kullanır; prematüre bebeklerde eğrinin düzeltilmiş yaşla nasıl okunacağını doktoruna sor.',
          },
        ],
      },
    },
  },
  teething: {
    image: '03-device-top',
    slugs: {
      en: 'baby-teething-tracker',
      de: 'zahnen-tracker-baby',
      tr: 'bebek-dis-takibi',
    },
    locales: {
      en: {
        shortTitle: 'Teething tracker',
        metaTitle: 'Baby Teething Tracker & Tooth Chart | Mamio',
        metaDescription:
          'Tap each new tooth on an interactive chart of all 20 baby teeth and save the date. Typical eruption windows, with no "late tooth" alarms.',
        eyebrow: 'Teeth and teething',
        title: 'A tooth chart that remembers every first tooth.',
        lead:
          'Mamio shows all 20 baby teeth on an interactive chart. Tap a tooth when it comes through, add the date and a note, and see the usual eruption window for each one.',
        imageAlt: 'Mamio milestones list including the first tooth entry.',
        bullets: ['Interactive chart of 20 baby teeth', 'Date and note for each tooth', 'Typical eruption windows'],
        sections: [
          {
            title: 'Tap the tooth, save the date',
            body: 'When a new tooth appears, tap it on the chart and save the date with an optional note. Each tooth has one record, so the chart fills up as your baby\'s smile does.',
          },
          {
            title: 'Typical windows, never "overdue"',
            body: 'Each tooth shows the usual eruption window from the dental eruption chart used by the American Academy of Pediatric Dentistry. Teeth come in at very different times, so Mamio never marks a tooth as late.',
          },
          {
            title: 'Dental visits in the same place',
            body: 'Log dental check-ups and cleanings next to the tooth chart, so the next appointment starts with the full picture.',
          },
          {
            title: 'Part of the health record',
            body: 'Teeth sit in the health tab with growth, vaccines, and doctor visits, and can appear in the doctor visit summary.',
          },
        ],
        faq: [
          {
            question: 'In what order do baby teeth come in?',
            answer: 'Usually the lower front teeth come first, followed by the upper front teeth, but the order and timing vary a lot. Mamio shows the typical window for each tooth.',
          },
          {
            question: 'Will Mamio warn me if a tooth is late?',
            answer: 'No. Late teeth are common and usually normal. Mamio never shows a tooth as overdue. Ask your pediatrician or dentist if you are unsure.',
          },
          {
            question: 'Can I log dentist visits?',
            answer: 'Yes. Besides tooth eruptions you can save dental cleaning or check-up visits.',
          },
          {
            question: 'Is the tooth chart free?',
            answer: 'Yes. The tooth chart is free. The free list shows your most recent entries; full history is part of Mamio Pro.',
          },
        ],
      },
      de: {
        shortTitle: 'Zahn-Tracker',
        metaTitle: 'Zahnen beim Baby: Zahn-Tracker & Zahnschema | Mamio',
        metaDescription:
          'Jeden neuen Zahn im interaktiven Schema aller 20 Milchzähne antippen und das Datum speichern. Typische Durchbruchszeiten, ohne „Verspätungs“-Alarm.',
        eyebrow: 'Zähne und Zahnen',
        title: 'Ein Zahnschema, das sich an jeden ersten Zahn erinnert.',
        lead:
          'Mamio zeigt alle 20 Milchzähne in einem interaktiven Schema. Tippe einen Zahn an, sobald er durchbricht, füge Datum und Notiz hinzu und sieh das übliche Zeitfenster für jeden Zahn.',
        imageAlt: 'Mamio Meilensteinliste mit dem Eintrag „Erster Zahn“.',
        bullets: ['Interaktives Schema der 20 Milchzähne', 'Datum und Notiz pro Zahn', 'Typische Durchbruchszeiten'],
        sections: [
          {
            title: 'Zahn antippen, Datum speichern',
            body: 'Wenn ein neuer Zahn kommt, tippe ihn im Schema an und speichere das Datum mit optionaler Notiz. Jeder Zahn hat einen Eintrag – das Schema füllt sich mit dem Lächeln deines Babys.',
          },
          {
            title: 'Typische Zeitfenster, nie „überfällig“',
            body: 'Jeder Zahn zeigt das übliche Durchbruchsfenster nach dem Zahnschema der American Academy of Pediatric Dentistry. Zähne kommen sehr unterschiedlich, deshalb markiert Mamio keinen Zahn als verspätet.',
          },
          {
            title: 'Zahnarztbesuche am selben Ort',
            body: 'Halte Zahnarzt-Kontrollen und Reinigungen neben dem Zahnschema fest, damit der nächste Termin mit dem vollständigen Bild beginnt.',
          },
          {
            title: 'Teil der Gesundheitsakte',
            body: 'Die Zähne liegen im Gesundheitsbereich neben Wachstum, Impfungen und Arztbesuchen und können in der Zusammenfassung für den Arztbesuch erscheinen.',
          },
        ],
        faq: [
          {
            question: 'In welcher Reihenfolge kommen die Milchzähne?',
            answer: 'Meist kommen zuerst die unteren Schneidezähne, dann die oberen, aber Reihenfolge und Zeitpunkt sind sehr unterschiedlich. Mamio zeigt das typische Zeitfenster für jeden Zahn.',
          },
          {
            question: 'Warnt Mamio, wenn ein Zahn spät dran ist?',
            answer: 'Nein. Späte Zähne sind häufig und meist normal. Mamio zeigt keinen Zahn als überfällig. Frag im Zweifel in der Kinderarzt- oder Zahnarztpraxis nach.',
          },
          {
            question: 'Kann ich Zahnarztbesuche eintragen?',
            answer: 'Ja. Neben durchgebrochenen Zähnen kannst du Zahnarzt-Kontrollen und Reinigungen speichern.',
          },
          {
            question: 'Ist das Zahnschema kostenlos?',
            answer: 'Ja. Das Zahnschema ist kostenlos. Die kostenlose Liste zeigt die letzten Einträge, der vollständige Verlauf gehört zu Mamio Pro.',
          },
        ],
      },
      tr: {
        shortTitle: 'Diş takibi',
        metaTitle: 'Bebek Diş Çıkarma Takibi ve Diş Haritası | Mamio',
        metaDescription:
          '20 süt dişinin etkileşimli haritasında her yeni dişe dokun ve tarihini kaydet. Tipik çıkış aralıkları var, "geç kaldı" alarmı yok.',
        eyebrow: 'Dişler ve diş çıkarma',
        title: 'Her ilk dişi hatırlayan bir diş haritası.',
        lead:
          'Mamio 20 süt dişinin tamamını etkileşimli bir haritada gösterir. Diş çıktığında üzerine dokun, tarih ve not ekle, her dişin olağan çıkış aralığını gör.',
        imageAlt: 'Mamio gelişim basamakları listesinde ilk diş kaydı.',
        bullets: ['20 süt dişinin etkileşimli haritası', 'Her diş için tarih ve not', 'Tipik çıkış aralıkları'],
        sections: [
          {
            title: 'Dişe dokun, tarihi kaydet',
            body: 'Yeni bir diş çıktığında haritada üzerine dokun ve tarihini isteğe bağlı bir notla kaydet. Her dişin tek bir kaydı vardır; harita bebeğinin gülüşüyle birlikte dolar.',
          },
          {
            title: 'Tipik aralıklar, asla "gecikmiş" yok',
            body: 'Her diş, Amerikan Pediatrik Diş Hekimliği Akademisi\'nin diş çıkış şemasındaki olağan aralığı gösterir. Dişler çok farklı zamanlarda çıkar; bu yüzden Mamio hiçbir dişi geç kalmış olarak işaretlemez.',
          },
          {
            title: 'Diş hekimi ziyaretleri aynı yerde',
            body: 'Diş hekimi kontrollerini ve temizliklerini diş haritasının yanında kaydet; bir sonraki randevu tüm resimle başlasın.',
          },
          {
            title: 'Sağlık kaydının parçası',
            body: 'Dişler sağlık sekmesinde büyüme, aşılar ve doktor ziyaretleriyle birlikte durur ve doktor ziyareti özetinde yer alabilir.',
          },
        ],
        faq: [
          {
            question: 'Süt dişleri hangi sırayla çıkar?',
            answer: 'Genellikle önce alt ön dişler, ardından üst ön dişler çıkar; ama sıra ve zamanlama çok değişkendir. Mamio her diş için tipik aralığı gösterir.',
          },
          {
            question: 'Bir diş geç kalırsa Mamio uyarır mı?',
            answer: 'Hayır. Geç çıkan dişler sık görülür ve çoğunlukla normaldir. Mamio hiçbir dişi gecikmiş göstermez. Emin değilsen çocuk doktoruna veya diş hekimine danış.',
          },
          {
            question: 'Diş hekimi ziyaretlerini kaydedebilir miyim?',
            answer: 'Evet. Çıkan dişlerin yanı sıra diş temizliği veya kontrol ziyaretlerini de kaydedebilirsin.',
          },
          {
            question: 'Diş haritası ücretsiz mi?',
            answer: 'Evet. Diş haritası ücretsizdir. Ücretsiz liste son kayıtlarını gösterir; tüm geçmiş Mamio Pro\'dadır.',
          },
        ],
      },
    },
  },
  potty: {
    image: '09-device-bottom',
    slugs: {
      en: 'potty-training-tracker',
      de: 'toepfchen-training-tracker',
      tr: 'tuvalet-egitimi-takibi',
    },
    locales: {
      en: {
        shortTitle: 'Potty training tracker',
        metaTitle: 'Potty Training Tracker App | Mamio',
        metaDescription:
          'Log pee, poo, accidents, and dry checks in seconds and see your toddler\'s potty training patterns. A calm, optional module in Mamio.',
        eyebrow: 'Potty training',
        title: 'Potty training with patterns, not pressure.',
        lead:
          'Turn on the potty module in Mamio and log pee, poo, both, accidents, or dry checks with a time and a note. The log shows what is working without keeping score.',
        imageAlt: 'Mamio potty training log with pee, poo, dry run, and accident entries.',
        bullets: ['Pee, poo, accident, dry', 'Quick add from the home screen', 'Time and notes for each entry'],
        sections: [
          {
            title: 'Log it in one tap',
            body: 'Once the potty module is on, a quick-add button appears on the home screen. Choose pee, poo, both, accident, or dry, and the time is saved automatically. Add a note if something stood out.',
          },
          {
            title: 'See the rhythm of the day',
            body: 'After a few days, the log shows when your toddler usually needs to go, how long they stay dry, and when accidents tend to happen. That makes reminders feel natural instead of constant.',
          },
          {
            title: 'Accidents are part of it',
            body: 'Accidents are logged like any other entry, with no red marks and no streaks to break. Setbacks are common during illness, travel, or a new sibling, and the log helps you see them as a phase.',
          },
          {
            title: 'Only when you need it',
            body: 'Potty tracking is an optional module. Leave it off during the baby months and switch it on in settings when your family is ready.',
          },
        ],
        faq: [
          {
            question: 'How do I turn on potty tracking?',
            answer: 'Open Mamio settings and enable the potty module. A quick-add button and a potty section then appear in the app.',
          },
          {
            question: 'What can I log?',
            answer: 'Pee, poo, both, accidents, and dry checks, each with a time and an optional note.',
          },
          {
            question: 'Is potty tracking free?',
            answer: 'Yes. The free list shows your most recent entries; full history is part of Mamio Pro.',
          },
          {
            question: 'When should we start potty training?',
            answer: 'Readiness varies widely from child to child. Look for signs of readiness and ask your pediatrician or health visitor if you are unsure.',
          },
        ],
      },
      de: {
        shortTitle: 'Töpfchen-Tracker',
        metaTitle: 'Töpfchentraining & Trockenwerden Tracker | Mamio',
        metaDescription:
          'Pipi, Kacka, kleine Unfälle und Trocken-Checks in Sekunden eintragen und Muster beim Trockenwerden erkennen. Ein optionales Modul in Mamio.',
        eyebrow: 'Töpfchen und Trockenwerden',
        title: 'Trocken werden mit Überblick, nicht mit Druck.',
        lead:
          'Aktiviere das Töpfchen-Modul in Mamio und trage Pipi, Kacka, beides, Unfälle oder Trocken-Checks mit Uhrzeit und Notiz ein. Das Protokoll zeigt, was funktioniert – ohne Punkte zu zählen.',
        imageAlt: 'Mamio Töpfchen-Protokoll mit Einträgen für Pipi, Kacka, trocken und Unfall.',
        bullets: ['Pipi, Kacka, Unfall, trocken', 'Schnell vom Startbildschirm', 'Uhrzeit und Notiz pro Eintrag'],
        sections: [
          {
            title: 'Mit einem Tipp eingetragen',
            body: 'Ist das Töpfchen-Modul aktiv, erscheint ein Schnell-Button auf dem Startbildschirm. Wähle Pipi, Kacka, beides, Unfall oder trocken – die Uhrzeit wird automatisch gespeichert. Eine Notiz ist optional.',
          },
          {
            title: 'Den Tagesrhythmus erkennen',
            body: 'Nach ein paar Tagen zeigt das Protokoll, wann dein Kind meist muss, wie lange es trocken bleibt und wann Unfälle passieren. So wirken Erinnerungen natürlich statt ständig.',
          },
          {
            title: 'Unfälle gehören dazu',
            body: 'Unfälle werden wie jeder andere Eintrag gespeichert – ohne rote Markierungen und ohne Serien, die reißen. Rückschritte sind bei Krankheit, Reisen oder einem Geschwisterchen häufig, und das Protokoll hilft, sie als Phase zu sehen.',
          },
          {
            title: 'Nur, wenn du es brauchst',
            body: 'Das Töpfchen-Tracking ist ein optionales Modul. Lass es in den Babymonaten aus und schalte es in den Einstellungen ein, wenn ihr so weit seid.',
          },
        ],
        faq: [
          {
            question: 'Wie aktiviere ich das Töpfchen-Tracking?',
            answer: 'Öffne die Einstellungen in Mamio und aktiviere das Töpfchen-Modul. Danach erscheinen ein Schnell-Button und ein eigener Bereich in der App.',
          },
          {
            question: 'Was kann ich eintragen?',
            answer: 'Pipi, Kacka, beides, Unfälle und Trocken-Checks, jeweils mit Uhrzeit und optionaler Notiz.',
          },
          {
            question: 'Ist das Töpfchen-Tracking kostenlos?',
            answer: 'Ja. Die kostenlose Liste zeigt die letzten Einträge, der vollständige Verlauf gehört zu Mamio Pro.',
          },
          {
            question: 'Wann sollten wir mit dem Töpfchen anfangen?',
            answer: 'Die Bereitschaft ist von Kind zu Kind sehr unterschiedlich. Achte auf Zeichen der Bereitschaft und frag im Zweifel in der Kinderarztpraxis nach.',
          },
        ],
      },
      tr: {
        shortTitle: 'Tuvalet eğitimi takibi',
        metaTitle: 'Tuvalet Eğitimi Takip Uygulaması | Mamio',
        metaDescription:
          'Çiş, kaka, kaza ve kuru kontrollerini saniyeler içinde kaydet; çocuğunun tuvalet eğitimindeki düzeni gör. Mamio\'da isteğe bağlı bir modül.',
        eyebrow: 'Tuvalet eğitimi',
        title: 'Baskıyla değil, düzeni görerek tuvalet eğitimi.',
        lead:
          'Mamio\'da tuvalet modülünü aç; çiş, kaka, ikisi, kaza veya kuru kontrolünü saat ve notla kaydet. Kayıtlar puan tutmadan neyin işe yaradığını gösterir.',
        imageAlt: 'Mamio tuvalet eğitimi kaydı: çiş, kaka, kuru ve kaza kayıtları.',
        bullets: ['Çiş, kaka, kaza, kuru', 'Ana ekrandan hızlı ekleme', 'Her kayıt için saat ve not'],
        sections: [
          {
            title: 'Tek dokunuşla kaydet',
            body: 'Tuvalet modülü açıldığında ana ekranda hızlı ekleme düğmesi çıkar. Çiş, kaka, ikisi, kaza veya kuru seç; saat otomatik kaydedilir. Dikkat çeken bir şey olduysa not ekle.',
          },
          {
            title: 'Günün ritmini gör',
            body: 'Birkaç gün sonra kayıtlar çocuğunun genellikle ne zaman tuvalete ihtiyaç duyduğunu, ne kadar kuru kaldığını ve kazaların ne zaman olduğunu gösterir. Böylece hatırlatmalar sürekli değil, doğal olur.',
          },
          {
            title: 'Kazalar işin parçası',
            body: 'Kazalar diğer kayıtlar gibi tutulur; kırmızı işaret ya da bozulacak seri yoktur. Hastalık, seyahat veya yeni bir kardeş döneminde gerilemeler sık görülür; kayıtlar bunları bir dönem olarak görmene yardım eder.',
          },
          {
            title: 'Sadece ihtiyacın olduğunda',
            body: 'Tuvalet takibi isteğe bağlı bir modüldür. Bebeklik aylarında kapalı tut, ailen hazır olduğunda ayarlardan aç.',
          },
        ],
        faq: [
          {
            question: 'Tuvalet takibini nasıl açarım?',
            answer: 'Mamio ayarlarını aç ve tuvalet modülünü etkinleştir. Ardından uygulamada hızlı ekleme düğmesi ve ayrı bir bölüm görünür.',
          },
          {
            question: 'Neleri kaydedebilirim?',
            answer: 'Çiş, kaka, ikisi, kazalar ve kuru kontroller; her biri saat ve isteğe bağlı notla.',
          },
          {
            question: 'Tuvalet takibi ücretsiz mi?',
            answer: 'Evet. Ücretsiz liste son kayıtlarını gösterir; tüm geçmiş Mamio Pro\'dadır.',
          },
          {
            question: 'Tuvalet eğitimine ne zaman başlamalıyız?',
            answer: 'Hazır olma durumu çocuktan çocuğa çok değişir. Hazır olma işaretlerine bak; emin değilsen çocuk doktoruna danış.',
          },
        ],
      },
    },
  },
  babyExercises: {
    image: '01-hero',
    slugs: {
      en: 'baby-exercises-massage',
      de: 'babymassage-baby-uebungen',
      tr: 'bebek-egzersizleri-masaj',
    },
    locales: {
      en: {
        shortTitle: 'Baby exercises & massage',
        metaTitle: 'Baby Exercises & Massage Guide App | Mamio',
        metaDescription:
          'Illustrated, age-based baby exercises and massage: tummy time, bicycle legs, gentle massage, and a step-by-step crawling progression with safety notes.',
        eyebrow: 'Baby movement and massage',
        title: 'Gentle movement ideas for every stage, from day one to crawling.',
        lead:
          'Mamio includes 16 illustrated exercises and massage steps, each with the age it suits, clear steps, and safety notes, so floor time feels playful instead of uncertain.',
        imageAlt: 'Mamio home screen with quick summary and options to start a session or add a record.',
        bullets: ['16 illustrated exercises', 'Age guidance and safety notes', 'Crawling progression from 4 months'],
        sections: [
          {
            title: 'From the first weeks',
            body: 'Start with chest-to-chest tummy time, arm opening and crossing, bicycle legs, and knees-to-tummy from birth. Foot, leg, tummy, and back massage follow from one month, and forearm tummy time from about six weeks.',
          },
          {
            title: 'A crawling progression',
            body: 'From around four months, a step-by-step progression builds toward crawling: baby push-ups and prone reaching, pivot play, getting onto hands and knees, rocking, and crawling over a soft obstacle. It is part of Mamio Pro and can also be unlocked with a rewarded ad.',
          },
          {
            title: 'Safety first, for everyone',
            body: 'Every exercise shows its caution notes and safety rules to all users, including the locked ones: stay with your baby, stop if they are tired or upset, and keep sessions short and playful.',
          },
          {
            title: 'Connected to tummy time',
            body: 'When you run a tummy time session, Mamio suggests matching exercises, and a daily card on the home screen offers an idea that fits your baby\'s age.',
          },
        ],
        faq: [
          {
            question: 'What exercises are included?',
            answer: 'Sixteen in total: tummy time variations, arm and leg movements, massage for feet, legs, tummy, and back, assisted rolling, and a six-step crawling progression.',
          },
          {
            question: 'Are the exercises free?',
            answer: 'Ten exercises are free. The six-step crawling progression is part of Mamio Pro or can be unlocked with a rewarded ad. Safety notes are visible for all exercises.',
          },
          {
            question: 'Are these exercises medical therapy?',
            answer: 'No. They are play-based movement ideas for healthy babies, not physiotherapy. If your baby has a medical condition or you notice asymmetry, ask your pediatrician.',
          },
          {
            question: 'Can I track tummy time too?',
            answer: 'Yes. Mamio has a tummy time timer with position and session quality, and suggests exercises during a session.',
          },
        ],
      },
      de: {
        shortTitle: 'Babymassage & Übungen',
        metaTitle: 'Babymassage & Baby-Übungen mit Anleitung | Mamio',
        metaDescription:
          'Illustrierte, altersgerechte Baby-Übungen und Babymassage: Bauchlage, Fahrradbeine, sanfte Massage und ein Krabbel-Aufbau Schritt für Schritt.',
        eyebrow: 'Bewegung und Massage',
        title: 'Sanfte Bewegungsideen für jede Phase – vom ersten Tag bis zum Krabbeln.',
        lead:
          'Mamio enthält 16 illustrierte Übungen und Massageschritte, jeweils mit passendem Alter, klaren Schritten und Sicherheitshinweisen – damit Spielzeit auf dem Boden leicht statt unsicher wird.',
        imageAlt: 'Mamio Startbildschirm mit Kurzübersicht und Optionen, eine Session zu starten oder einen Eintrag hinzuzufügen.',
        bullets: ['16 illustrierte Übungen', 'Altersangaben und Sicherheitshinweise', 'Krabbel-Aufbau ab 4 Monaten'],
        sections: [
          {
            title: 'Ab den ersten Wochen',
            body: 'Starte ab Geburt mit Bauchlage auf deiner Brust, Arme öffnen und kreuzen, Fahrradbeinen und Knien zum Bauch. Fuß-, Bein-, Bauch- und Rückenmassage folgen ab einem Monat, Bauchlage auf den Unterarmen ab etwa sechs Wochen.',
          },
          {
            title: 'Ein Krabbel-Aufbau',
            body: 'Ab etwa vier Monaten führt ein Aufbau Schritt für Schritt zum Krabbeln: Baby-Liegestütze und Greifen in Bauchlage, Drehen um die eigene Achse, in den Vierfüßlerstand kommen, Schaukeln und über ein weiches Hindernis krabbeln. Er gehört zu Mamio Pro und lässt sich auch per Werbevideo freischalten.',
          },
          {
            title: 'Sicherheit zuerst, für alle',
            body: 'Jede Übung zeigt Hinweise und Sicherheitsregeln für alle, auch die gesperrten: bleib bei deinem Baby, hör auf, wenn es müde oder unzufrieden ist, und halte Einheiten kurz und spielerisch.',
          },
          {
            title: 'Verbunden mit der Bauchlage',
            body: 'Während einer Bauchlage-Session schlägt Mamio passende Übungen vor, und eine tägliche Karte auf dem Startbildschirm bietet eine Idee, die zum Alter deines Babys passt.',
          },
        ],
        faq: [
          {
            question: 'Welche Übungen sind enthalten?',
            answer: 'Insgesamt sechzehn: Varianten der Bauchlage, Arm- und Beinbewegungen, Massage für Füße, Beine, Bauch und Rücken, begleitetes Drehen und ein sechsstufiger Krabbel-Aufbau.',
          },
          {
            question: 'Sind die Übungen kostenlos?',
            answer: 'Zehn Übungen sind kostenlos. Der sechsstufige Krabbel-Aufbau gehört zu Mamio Pro oder lässt sich per Werbevideo freischalten. Sicherheitshinweise sind für alle Übungen sichtbar.',
          },
          {
            question: 'Sind die Übungen eine Therapie?',
            answer: 'Nein. Es sind spielerische Bewegungsideen für gesunde Babys, keine Physiotherapie. Wenn dein Baby eine Erkrankung hat oder dir eine Asymmetrie auffällt, sprich mit der Kinderarztpraxis.',
          },
          {
            question: 'Kann ich auch die Bauchlage tracken?',
            answer: 'Ja. Mamio hat einen Bauchlage-Timer mit Position und Qualität der Einheit und schlägt währenddessen Übungen vor.',
          },
        ],
      },
      tr: {
        shortTitle: 'Bebek egzersizleri ve masaj',
        metaTitle: 'Bebek Egzersizleri ve Bebek Masajı Rehberi | Mamio',
        metaDescription:
          'Resimli, yaşa uygun bebek egzersizleri ve masaj: karın üstü yatış, bisiklet hareketi, nazik masaj ve adım adım emeklemeye hazırlık.',
        eyebrow: 'Bebek hareketi ve masajı',
        title: 'İlk günden emeklemeye, her döneme nazik hareket fikirleri.',
        lead:
          'Mamio\'da her biri uygun yaşı, açık adımları ve güvenlik notlarıyla 16 resimli egzersiz ve masaj adımı var; yerde oyun zamanı belirsizlik değil keyif olur.',
        imageAlt: 'Mamio ana ekranı: hızlı özet ve seans başlatma ya da kayıt ekleme seçenekleri.',
        bullets: ['16 resimli egzersiz', 'Yaş bilgisi ve güvenlik notları', '4. aydan emeklemeye hazırlık'],
        sections: [
          {
            title: 'İlk haftalardan itibaren',
            body: 'Doğumdan itibaren göğsünde karın üstü yatış, kolları açıp kapama, bisiklet hareketi ve dizleri karna çekme ile başla. Ayak, bacak, karın ve sırt masajı 1. aydan, ön kollar üzerinde karın üstü yatış yaklaşık 6. haftadan itibaren gelir.',
          },
          {
            title: 'Emeklemeye adım adım',
            body: 'Yaklaşık dördüncü aydan itibaren bir dizi adım emeklemeye hazırlar: bebek şınavı ve karın üstünde uzanma, kendi etrafında dönme, elleri ve dizleri üstüne kalkma, sallanma ve yumuşak bir engelin üzerinden emekleme. Bu bölüm Mamio Pro\'dadır; ödüllü reklamla da açılabilir.',
          },
          {
            title: 'Önce güvenlik, herkes için',
            body: 'Her egzersiz, kilitli olanlar dahil, uyarı ve güvenlik kurallarını herkese gösterir: bebeğinin yanında kal, yorulur ya da huzursuzlanırsa dur, seansları kısa ve oyunlu tut.',
          },
          {
            title: 'Karın üstü zamanla bağlantılı',
            body: 'Karın üstü seansı sırasında Mamio uygun egzersizler önerir; ana ekrandaki günlük kart da bebeğinin yaşına uyan bir fikir sunar.',
          },
        ],
        faq: [
          {
            question: 'Hangi egzersizler var?',
            answer: 'Toplam on altı: karın üstü yatış çeşitleri, kol ve bacak hareketleri, ayak, bacak, karın ve sırt masajı, destekli dönme ve altı adımlı emekleme hazırlığı.',
          },
          {
            question: 'Egzersizler ücretsiz mi?',
            answer: 'On egzersiz ücretsizdir. Altı adımlı emekleme hazırlığı Mamio Pro\'dadır veya ödüllü reklamla açılabilir. Güvenlik notları tüm egzersizlerde görünür.',
          },
          {
            question: 'Bu egzersizler tıbbi bir terapi mi?',
            answer: 'Hayır. Bunlar sağlıklı bebekler için oyun temelli hareket fikirleridir, fizyoterapi değildir. Bebeğinin bir rahatsızlığı varsa veya asimetri fark edersen çocuk doktoruna danış.',
          },
          {
            question: 'Karın üstü zamanı da takip edebilir miyim?',
            answer: 'Evet. Mamio\'da pozisyon ve seans kalitesiyle karın üstü zamanlayıcısı var; seans sırasında egzersiz de önerir.',
          },
        ],
      },
    },
  },
  watchWidget: {
    image: '02-device-bottom',
    slugs: {
      en: 'apple-watch-baby-tracker',
      de: 'apple-watch-baby-tracker',
      tr: 'apple-watch-bebek-takip',
    },
    locales: {
      en: {
        shortTitle: 'Apple Watch & widget',
        metaTitle: 'Baby Tracker for Apple Watch & iPhone Widget | Mamio',
        metaDescription:
          'Start a feed, sleep, or pump timer and log diapers or bottles from your wrist. Mamio for Apple Watch, with complications and Home Screen widgets.',
        eyebrow: 'Apple Watch and widgets',
        title: 'Log from your wrist when your hands are full.',
        lead:
          'Mamio for Apple Watch starts and stops timers and logs diapers and bottles in a tap. Complications and iPhone widgets show the latest feed and today\'s totals at a glance.',
        imageAlt: 'Mamio live breastfeeding timer with left and right side and a running session.',
        bullets: ['Timers on Apple Watch', 'Watch face complications', 'Home Screen widgets'],
        sections: [
          {
            title: 'Timers on your wrist',
            body: 'Start and stop breastfeeding with the side, sleep, pumping, and tummy time right from Apple Watch. Log a diaper or a bottle with presets in a couple of taps.',
          },
          {
            title: 'Works when the phone is out of reach',
            body: 'Taps on the watch are queued and synced to the Mamio app on your iPhone when it is reachable again, so a 3 AM log is never lost because the phone was in another room.',
          },
          {
            title: 'Complications and widgets',
            body: 'Add a Mamio complication to your watch face in circular, rectangular, inline, or corner style. On iPhone, small, medium, and large Home Screen widgets show today\'s feeds, bottles, diapers, sleep, pumping, and tummy time.',
          },
          {
            title: 'What you need',
            body: 'The watch app needs watchOS 10 or later and the Mamio app on a paired iPhone. Apple Watch and widgets are available on iOS only; on Android, Mamio\'s quick logging lives in the app.',
          },
        ],
        faq: [
          {
            question: 'What can I do on Apple Watch?',
            answer: 'Start and stop breastfeeding, sleep, pumping, and tummy time timers, log diapers and bottles, and see active timers, the last feed, diaper, and sleep, and today\'s totals.',
          },
          {
            question: 'Does the watch app work without my iPhone?',
            answer: 'It needs the iPhone app to sync, but entries made while the phone is out of reach are queued and synced later.',
          },
          {
            question: 'Is there an Android widget?',
            answer: 'Not at the moment. Apple Watch, complications, and Home Screen widgets are iOS-only.',
          },
          {
            question: 'Are the widgets interactive?',
            answer: 'The iPhone widgets are for viewing today\'s logs at a glance. Logging happens in the app or on Apple Watch.',
          },
        ],
      },
      de: {
        shortTitle: 'Apple Watch & Widget',
        metaTitle: 'Baby Tracker für Apple Watch & iPhone-Widget | Mamio',
        metaDescription:
          'Still-, Schlaf- oder Abpump-Timer starten und Windeln oder Fläschchen vom Handgelenk eintragen. Mamio für Apple Watch, mit Komplikationen und Widgets.',
        eyebrow: 'Apple Watch und Widgets',
        title: 'Vom Handgelenk eintragen, wenn die Hände voll sind.',
        lead:
          'Mamio für Apple Watch startet und stoppt Timer und trägt Windeln und Fläschchen mit einem Tipp ein. Komplikationen und iPhone-Widgets zeigen die letzte Mahlzeit und die Tageswerte auf einen Blick.',
        imageAlt: 'Mamio Still-Timer mit linker und rechter Seite und laufender Session.',
        bullets: ['Timer auf der Apple Watch', 'Komplikationen fürs Zifferblatt', 'Widgets für den Home-Bildschirm'],
        sections: [
          {
            title: 'Timer am Handgelenk',
            body: 'Starte und stoppe Stillen mit Seite, Schlaf, Abpumpen und Bauchlage direkt auf der Apple Watch. Trage eine Windel oder ein Fläschchen mit Voreinstellungen in wenigen Tipps ein.',
          },
          {
            title: 'Funktioniert auch ohne Handy in Reichweite',
            body: 'Eingaben auf der Uhr werden zwischengespeichert und mit der Mamio-App auf dem iPhone synchronisiert, sobald es wieder erreichbar ist – ein Eintrag um 3 Uhr nachts geht nicht verloren, nur weil das Handy im anderen Zimmer lag.',
          },
          {
            title: 'Komplikationen und Widgets',
            body: 'Füge eine Mamio-Komplikation als Kreis, Rechteck, Zeile oder Ecke zum Zifferblatt hinzu. Auf dem iPhone zeigen kleine, mittlere und große Widgets die heutigen Mahlzeiten, Fläschchen, Windeln, Schlaf, Abpumpen und Bauchlage.',
          },
          {
            title: 'Was du brauchst',
            body: 'Die Watch-App benötigt watchOS 10 oder neuer und die Mamio-App auf einem gekoppelten iPhone. Apple Watch und Widgets gibt es nur unter iOS; unter Android findet das schnelle Eintragen in der App statt.',
          },
        ],
        faq: [
          {
            question: 'Was kann ich auf der Apple Watch machen?',
            answer: 'Timer für Stillen, Schlaf, Abpumpen und Bauchlage starten und stoppen, Windeln und Fläschchen eintragen und laufende Timer, die letzte Mahlzeit, Windel und den letzten Schlaf sowie die Tageswerte sehen.',
          },
          {
            question: 'Funktioniert die Watch-App ohne iPhone?',
            answer: 'Zum Synchronisieren braucht sie die iPhone-App, aber Einträge ohne Verbindung werden zwischengespeichert und später übertragen.',
          },
          {
            question: 'Gibt es ein Android-Widget?',
            answer: 'Derzeit nicht. Apple Watch, Komplikationen und Home-Bildschirm-Widgets gibt es nur unter iOS.',
          },
          {
            question: 'Sind die Widgets interaktiv?',
            answer: 'Die iPhone-Widgets zeigen die heutigen Einträge auf einen Blick. Eingetragen wird in der App oder auf der Apple Watch.',
          },
        ],
      },
      tr: {
        shortTitle: 'Apple Watch ve widget',
        metaTitle: 'Apple Watch Bebek Takip ve iPhone Widget | Mamio',
        metaDescription:
          'Emzirme, uyku veya sağım zamanlayıcısını başlat, bez ve biberonu bileğinden kaydet. Komplikasyon ve ana ekran widget\'larıyla Apple Watch için Mamio.',
        eyebrow: 'Apple Watch ve widget',
        title: 'Ellerin doluyken bileğinden kaydet.',
        lead:
          'Apple Watch için Mamio zamanlayıcıları başlatıp durdurur, bez ve biberonu tek dokunuşla kaydeder. Komplikasyonlar ve iPhone widget\'ları son beslenmeyi ve günün toplamlarını bir bakışta gösterir.',
        imageAlt: 'Mamio canlı emzirme zamanlayıcısı: sol ve sağ taraf ve devam eden seans.',
        bullets: ['Apple Watch\'ta zamanlayıcılar', 'Saat kadranı komplikasyonları', 'Ana ekran widget\'ları'],
        sections: [
          {
            title: 'Bileğinde zamanlayıcılar',
            body: 'Emzirmeyi tarafıyla, uykuyu, sağımı ve karın üstü zamanı doğrudan Apple Watch\'tan başlat ve durdur. Bez veya biberonu hazır seçeneklerle birkaç dokunuşta kaydet.',
          },
          {
            title: 'Telefon uzaktayken de çalışır',
            body: 'Saatteki kayıtlar sıraya alınır ve iPhone\'a yeniden ulaşıldığında Mamio uygulamasına aktarılır; telefon başka odada diye gece 3\'teki kayıt kaybolmaz.',
          },
          {
            title: 'Komplikasyonlar ve widget\'lar',
            body: 'Saat kadranına dairesel, dikdörtgen, satır içi veya köşe tarzında Mamio komplikasyonu ekle. iPhone\'da küçük, orta ve büyük ana ekran widget\'ları bugünkü emzirme, biberon, bez, uyku, sağım ve karın üstü zamanı gösterir.',
          },
          {
            title: 'Neye ihtiyacın var',
            body: 'Saat uygulaması watchOS 10 veya üstü ve eşlenmiş bir iPhone\'da Mamio uygulaması gerektirir. Apple Watch ve widget\'lar yalnızca iOS\'ta vardır; Android\'de hızlı kayıt uygulamanın içindedir.',
          },
        ],
        faq: [
          {
            question: 'Apple Watch\'ta neler yapabilirim?',
            answer: 'Emzirme, uyku, sağım ve karın üstü zamanlayıcılarını başlatıp durdurabilir, bez ve biberon kaydedebilir; aktif zamanlayıcıları, son beslenmeyi, bezi, uykuyu ve günün toplamlarını görebilirsin.',
          },
          {
            question: 'Saat uygulaması iPhone olmadan çalışır mı?',
            answer: 'Eşitleme için iPhone uygulaması gerekir; ancak telefon uzaktayken yapılan kayıtlar sıraya alınır ve sonra aktarılır.',
          },
          {
            question: 'Android widget\'ı var mı?',
            answer: 'Şu an yok. Apple Watch, komplikasyonlar ve ana ekran widget\'ları yalnızca iOS\'ta.',
          },
          {
            question: 'Widget\'lar etkileşimli mi?',
            answer: 'iPhone widget\'ları bugünün kayıtlarını bir bakışta göstermek içindir. Kayıt uygulamada veya Apple Watch\'ta yapılır.',
          },
        ],
      },
    },
  },
  multipleBabies: {
    image: '01-hero',
    slugs: {
      en: 'twins-baby-tracker',
      de: 'zwillinge-baby-tracker',
      tr: 'ikiz-bebek-takibi',
    },
    locales: {
      en: {
        shortTitle: 'Twins & siblings',
        metaTitle: 'Baby Tracker for Twins & Siblings | Mamio',
        metaDescription:
          'Keep a separate profile for each baby and switch in one tap. Feeds, diapers, sleep, growth, and medicines never get mixed up between twins or siblings.',
        eyebrow: 'Twins and siblings',
        title: 'One app, a separate record for every baby.',
        lead:
          'Mamio keeps a profile for each baby, with its own feeds, diapers, sleep, growth, and health records. Switch the active baby from the header and log for the right child.',
        imageAlt: 'Mamio home screen with quick summary of the last feed, next side, and today.',
        bullets: ['A profile per baby', 'Switch from the header', 'Separate health records'],
        sections: [
          {
            title: 'Separate records, by design',
            body: 'Each baby gets its own timeline, statistics, growth charts, vaccines, and medicine log. Twins rarely eat, sleep, or grow the same way, and separate records make each pattern visible.',
          },
          {
            title: 'Switch in one tap',
            body: 'When you have more than one profile, the active baby appears in the header. Tap it to switch before you log, so the next feed or diaper lands with the right child.',
          },
          {
            title: 'Fewer mix-ups with medicines',
            body: 'Temperature, symptoms, and medicine entries live inside each baby\'s profile, which helps avoid the tired-parent question of who already had their dose.',
          },
          {
            title: 'Free for one, Pro for more',
            body: 'The free version includes one baby profile. Adding a second baby or more is part of Mamio Pro.',
          },
        ],
        faq: [
          {
            question: 'Can I track twins in Mamio?',
            answer: 'Yes. Create a profile for each twin and switch the active baby from the header before logging.',
          },
          {
            question: 'Is there a side-by-side twin view?',
            answer: 'No. Mamio keeps each baby in a separate profile with its own timeline and statistics.',
          },
          {
            question: 'How many babies can I add?',
            answer: 'One baby is free. Adding more babies requires Mamio Pro.',
          },
          {
            question: 'Can I delete a profile later?',
            answer: 'Yes. Baby profiles can be managed and deleted in settings.',
          },
        ],
      },
      de: {
        shortTitle: 'Zwillinge & Geschwister',
        metaTitle: 'Baby Tracker für Zwillinge & Geschwister | Mamio',
        metaDescription:
          'Ein eigenes Profil für jedes Baby, Wechsel mit einem Tipp. Mahlzeiten, Windeln, Schlaf, Wachstum und Medikamente werden bei Zwillingen nicht vermischt.',
        eyebrow: 'Zwillinge und Geschwister',
        title: 'Eine App, ein eigenes Protokoll für jedes Baby.',
        lead:
          'Mamio führt für jedes Baby ein Profil mit eigenen Mahlzeiten, Windeln, Schlaf, Wachstum und Gesundheitsdaten. Wechsle das aktive Baby in der Kopfzeile und trage beim richtigen Kind ein.',
        imageAlt: 'Mamio Startbildschirm mit Kurzübersicht über letzte Mahlzeit, nächste Seite und heute.',
        bullets: ['Ein Profil pro Baby', 'Wechsel in der Kopfzeile', 'Getrennte Gesundheitsdaten'],
        sections: [
          {
            title: 'Getrennte Protokolle, ganz bewusst',
            body: 'Jedes Baby hat eine eigene Zeitleiste, Statistiken, Wachstumskurven, Impfungen und Medikamentenliste. Zwillinge essen, schlafen und wachsen selten gleich – getrennte Protokolle machen jedes Muster sichtbar.',
          },
          {
            title: 'Wechsel mit einem Tipp',
            body: 'Bei mehr als einem Profil erscheint das aktive Baby in der Kopfzeile. Tippe darauf, bevor du einträgst, damit die nächste Mahlzeit oder Windel beim richtigen Kind landet.',
          },
          {
            title: 'Weniger Verwechslungen bei Medikamenten',
            body: 'Temperatur, Symptome und Medikamente liegen im Profil des jeweiligen Babys – das hilft gegen die müde Frage, wer seine Dosis schon hatte.',
          },
          {
            title: 'Kostenlos für eins, Pro für mehr',
            body: 'Die kostenlose Version enthält ein Babyprofil. Ein zweites Baby oder mehr gehört zu Mamio Pro.',
          },
        ],
        faq: [
          {
            question: 'Kann ich Zwillinge in Mamio tracken?',
            answer: 'Ja. Lege für jeden Zwilling ein Profil an und wechsle vor dem Eintragen das aktive Baby in der Kopfzeile.',
          },
          {
            question: 'Gibt es eine Zwillings-Ansicht nebeneinander?',
            answer: 'Nein. Mamio führt jedes Baby in einem eigenen Profil mit eigener Zeitleiste und Statistik.',
          },
          {
            question: 'Wie viele Babys kann ich hinzufügen?',
            answer: 'Ein Baby ist kostenlos. Für weitere Babys brauchst du Mamio Pro.',
          },
          {
            question: 'Kann ich ein Profil später löschen?',
            answer: 'Ja. Babyprofile lassen sich in den Einstellungen verwalten und löschen.',
          },
        ],
      },
      tr: {
        shortTitle: 'İkizler ve kardeşler',
        metaTitle: 'İkiz Bebek Takip Uygulaması | Mamio',
        metaDescription:
          'Her bebek için ayrı profil, tek dokunuşla geçiş. İkizlerde veya kardeşlerde beslenme, bez, uyku, büyüme ve ilaç kayıtları birbirine karışmaz.',
        eyebrow: 'İkizler ve kardeşler',
        title: 'Tek uygulama, her bebeğe ayrı kayıt.',
        lead:
          'Mamio her bebek için kendi beslenme, bez, uyku, büyüme ve sağlık kayıtlarına sahip bir profil tutar. Üst kısımdan aktif bebeği değiştir ve doğru çocuğa kaydet.',
        imageAlt: 'Mamio ana ekranı: son beslenme, sıradaki taraf ve bugünün hızlı özeti.',
        bullets: ['Her bebeğe bir profil', 'Üst kısımdan geçiş', 'Ayrı sağlık kayıtları'],
        sections: [
          {
            title: 'Bilinçli olarak ayrı kayıtlar',
            body: 'Her bebeğin kendi zaman çizelgesi, istatistikleri, büyüme grafikleri, aşıları ve ilaç kaydı vardır. İkizler nadiren aynı şekilde beslenir, uyur veya büyür; ayrı kayıtlar her birinin düzenini görünür kılar.',
          },
          {
            title: 'Tek dokunuşla geçiş',
            body: 'Birden fazla profil olduğunda aktif bebek üst kısımda görünür. Kayıttan önce dokunup değiştir; sıradaki beslenme veya bez doğru çocuğa yazılsın.',
          },
          {
            title: 'İlaçlarda daha az karışıklık',
            body: 'Ateş, belirti ve ilaç kayıtları her bebeğin kendi profilinde durur; yorgun anlarda "kim dozunu aldı" sorusunu kolaylaştırır.',
          },
          {
            title: 'Bir bebek ücretsiz, fazlası Pro',
            body: 'Ücretsiz sürüm bir bebek profili içerir. İkinci veya daha fazla bebek eklemek Mamio Pro\'dadır.',
          },
        ],
        faq: [
          {
            question: 'Mamio\'da ikizleri takip edebilir miyim?',
            answer: 'Evet. Her ikiz için bir profil oluştur ve kayıttan önce üst kısımdan aktif bebeği değiştir.',
          },
          {
            question: 'İkizleri yan yana gösteren bir görünüm var mı?',
            answer: 'Hayır. Mamio her bebeği kendi zaman çizelgesi ve istatistikleriyle ayrı bir profilde tutar.',
          },
          {
            question: 'Kaç bebek ekleyebilirim?',
            answer: 'Bir bebek ücretsizdir. Daha fazla bebek eklemek için Mamio Pro gerekir.',
          },
          {
            question: 'Bir profili sonra silebilir miyim?',
            answer: 'Evet. Bebek profilleri ayarlardan yönetilip silinebilir.',
          },
        ],
      },
    },
  },
};
