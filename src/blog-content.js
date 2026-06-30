export const blogLangs = ['en', 'de', 'tr'];

export const featureBlogPostIds = {
  breastfeeding: ['breastfeeding-side-balance', 'newborn-feeds'],
  feeding: ['newborn-feeds', 'breastfeeding-side-balance'],
  diaper: ['diaper-color'],
  sleep: ['baby-sleep-first-months'],
  health: ['health-report-doctor', 'diaper-color'],
  careTimeline: ['newborn-feeds', 'baby-sleep-first-months', 'diaper-color', 'health-report-doctor'],
};

export const blogPosts = {
  'newborn-feeds': {
    slugs: {
      en: 'track-newborn-feeds',
      de: 'neugeborenen-mahlzeiten-tracken',
      tr: 'yenidogan-beslenmesi-takibi',
    },
    locales: {
      en: {
        metaTitle: 'How to Track Newborn Feeds Without Overthinking It | Mamio Blog',
        metaDescription:
          'Newborns feed 8–12 times a day. Here is a practical, low-pressure approach to tracking feeds so you can stay informed without burning out.',
        title: 'How to Track Newborn Feeds Without Overthinking It',
        date: '2026-06-28',
        intro:
          'Newborns feed constantly — up to 12 times in 24 hours — and keeping track of each session can quickly feel like a second job. The goal of tracking is to help you stay informed and rested, not to add stress. Here is a practical approach that works even on the hardest nights.',
        sections: [
          {
            title: 'What is actually worth recording',
            body: 'You do not need to record every detail. The most useful information is the time a feed started, which side you used (if breastfeeding), and roughly how long it lasted or how much your baby took from a bottle. That is enough to spot patterns and answer your pediatrician\'s questions without obsessing over every minute.',
          },
          {
            title: 'Start a timer, finish later',
            body: 'If you forget to start tracking when the feed begins, add it manually afterward. A note entered 10 minutes late is still far more useful than no note at all. A baby care app like Mamio lets you add missed sessions with the correct start time so your history stays accurate.',
          },
          {
            title: 'Look for rhythm, not perfection',
            body: 'In the early weeks, feeds rarely follow a predictable schedule. Rather than aiming for perfect spacing, look for a general rhythm: how many feeds are happening across the day, whether one side is being skipped, and whether your baby seems settled after feeds. That context is what matters most.',
          },
          {
            title: 'When your records help most',
            body: 'Your feeding log is most valuable at weight checks and pediatrician visits. Caregivers can see roughly how many feeds happened, spot any unusual gaps, and confirm that overall intake looks reasonable. A short history — even just three or four days — gives them real context instead of your best tired guess.',
          },
        ],
        faq: [
          {
            question: 'How many times should a newborn feed per day?',
            answer: 'Most newborns feed 8–12 times in 24 hours. This varies by baby and feeding type. Your pediatrician is the right person to advise on what is normal for your specific situation.',
          },
          {
            question: 'Do I need to track every single feed?',
            answer: 'Tracking most feeds is more useful than stressing over perfect records. A rough picture of feeding frequency is far better than nothing at all.',
          },
          {
            question: 'Can I add a feed I forgot to log?',
            answer: 'Yes. In Mamio you can add any missed feeding session manually with the start time and duration.',
          },
        ],
        ctaText: 'Track feeds with Mamio',
      },
      de: {
        metaTitle: 'Neugeborenen-Mahlzeiten tracken ohne Stress | Mamio Blog',
        metaDescription:
          'Neugeborene trinken 8–12 Mal täglich. Ein praktischer, entspannter Ansatz zum Tracken von Mahlzeiten, der auch in den härtesten Nächten funktioniert.',
        title: 'Neugeborenen-Mahlzeiten tracken ohne Stress',
        date: '2026-06-28',
        intro:
          'Neugeborene trinken ständig – bis zu 12 Mal in 24 Stunden – und jede Mahlzeit zu verfolgen kann sich schnell wie ein zweiter Job anfühlen. Das Ziel des Trackens ist, informiert und ausgeruht zu bleiben, nicht zusätzlichen Stress zu erzeugen. Hier ist ein praktischer Ansatz, der auch in den schwierigsten Nächten funktioniert.',
        sections: [
          {
            title: 'Was wirklich aufzuzeichnen ist',
            body: 'Du musst nicht jedes Detail festhalten. Die nützlichsten Informationen sind die Startzeit der Mahlzeit, welche Seite du benutzt hast (beim Stillen) und wie lange sie in etwa gedauert hat oder wie viel dein Baby aus der Flasche getrunken hat. Das reicht aus, um Muster zu erkennen und die Fragen deines Kinderarztes zu beantworten, ohne sich um jede Minute zu sorgen.',
          },
          {
            title: 'Timer starten, später abschließen',
            body: 'Wenn du vergisst, das Tracken zu starten, wenn die Mahlzeit beginnt, trage sie nachträglich manuell ein. Eine Notiz, die 10 Minuten später gemacht wird, ist immer noch viel nützlicher als gar keine. Mamio lässt dich verpasste Sessions mit der richtigen Startzeit ergänzen, damit deine Historie korrekt bleibt.',
          },
          {
            title: 'Rhythmus statt Perfektion',
            body: 'In den ersten Wochen folgen Mahlzeiten selten einem vorhersehbaren Zeitplan. Statt auf perfekte Abstände zu achten, suche nach einem allgemeinen Rhythmus: wie viele Mahlzeiten über den Tag verteilt stattfinden, ob eine Seite übersprungen wird und ob dein Baby nach den Mahlzeiten zufrieden wirkt. Das ist der wichtigste Kontext.',
          },
          {
            title: 'Wann deine Aufzeichnungen am meisten helfen',
            body: 'Dein Stillprotokoll ist bei Gewichtskontrollen und Kinderarztbesuchen am wertvollsten. Fachkräfte können sehen, wie viele Mahlzeiten stattgefunden haben, ungewöhnliche Lücken erkennen und bestätigen, dass die Gesamtaufnahme plausibel ist. Sogar drei bis vier Tage Geschichte geben echten Kontext, statt deiner besten müden Schätzung.',
          },
        ],
        faq: [
          {
            question: 'Wie oft sollte ein Neugeborenes täglich trinken?',
            answer: 'Die meisten Neugeborenen trinken 8–12 Mal in 24 Stunden. Das variiert je nach Baby und Fütterungsart. Dein Kinderarzt ist die richtige Ansprechperson für deinen spezifischen Fall.',
          },
          {
            question: 'Muss ich wirklich jede einzelne Mahlzeit tracken?',
            answer: 'Die meisten Mahlzeiten zu tracken ist nützlicher, als sich über perfekte Aufzeichnungen zu stressen. Ein ungefähres Bild der Fütterungshäufigkeit ist viel besser als nichts.',
          },
          {
            question: 'Kann ich eine vergessene Mahlzeit nachträglich eintragen?',
            answer: 'Ja. In Mamio kannst du jede verpasste Stillsession manuell mit Startzeit und Dauer ergänzen.',
          },
        ],
        ctaText: 'Mahlzeiten mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Yenidoğan Beslenmesini Kafana Takmadan Takip Etmek | Mamio Blog',
        metaDescription:
          'Yenidoğanlar günde 8–12 kez beslenir. Baskı altında kalmadan beslenmeleri takip etmek için pratik ve hafif bir yöntem.',
        title: 'Yenidoğan Beslenmesini Kafana Takmadan Nasıl Takip Edersin',
        date: '2026-06-28',
        intro:
          'Yenidoğanlar sürekli beslenir — 24 saatte 12 kere kadar. Her beslenmeyi takip etmek hızla ikinci bir işe dönüşebilir. Takibin amacı seni bunaltmak değil, bilgili ve dinlenmiş tutmaktır. İşte en zor gecelerde bile işe yarayan pratik bir yaklaşım.',
        sections: [
          {
            title: 'Gerçekten kaydetmeye değer olanlar',
            body: 'Her detayı kaydetmen gerekmiyor. En işe yarayan bilgiler şunlar: beslenmenin başlama saati, hangi tarafı kullandığın (emzirme yapıyorsan) ve yaklaşık ne kadar sürdüğü ya da bebeğin biberondan ne kadar içtiği. Bu kadarı düzeni fark etmek ve pediatristinin sorularını yanıtlamak için yeterli.',
          },
          {
            title: 'Zamanlayıcıyı başlat, sonra tamamla',
            body: 'Beslenme başlarken kaydetmeyi unutursan sonradan manuel ekleyebilirsin. 10 dakika geç girilen bir not, hiç nota girememekten çok daha değerlidir. Mamio, geçmiş beslenmelerini doğru başlama saatiyle eklemenе izin verir.',
          },
          {
            title: 'Mükemmellik değil, ritim ara',
            body: 'İlk haftalarda beslenmeler nadiren öngörülebilir bir programa uymaz. Kusursuz aralıklar yerine genel bir ritim ara: gün boyunca kaç beslenme olduğu, bir tarafın atlanıp atlanmadığı, bebeğin beslenmeden sonra memnun görünüp görünmediği. Bu bağlam en önemli olandır.',
          },
          {
            title: 'Kayıtların en çok ne zaman işe yaradığı',
            body: 'Beslenme günlüğün kilo kontrollerinde ve pediatrist ziyaretlerinde en değerli hale gelir. Sağlık uzmanları kaç beslenme yapıldığını görebilir, olağandışı boşlukları fark edebilir ve toplam alımın mantıklı olup olmadığını teyit edebilir. Sadece üç-dört günlük bir geçmiş bile yorgun bir tahminden çok daha fazla bağlam sunar.',
          },
        ],
        faq: [
          {
            question: 'Yenidoğan günde kaç kez beslenmeli?',
            answer: 'Çoğu yenidoğan 24 saatte 8–12 kez beslenir. Bu bebek ve beslenme türüne göre değişir. Kendi durumunuz için pediatristiniz en doğru kaynaktır.',
          },
          {
            question: 'Her beslenmeyi tek tek kaydetmek zorunda mıyım?',
            answer: 'Beslenmelerin büyük bölümünü kaydetmek, mükemmel kayıt tutma stresinden çok daha işe yarar. Genel bir beslenme sıklığı resmi hiç olmamaktan iyidir.',
          },
          {
            question: 'Kaydetmeyi unuttuğum bir beslenmeyi sonradan ekleyebilir miyim?',
            answer: 'Evet. Mamio\'da herhangi bir kaçırılmış beslenme seansını başlama saati ve süresiyle manuel olarak ekleyebilirsin.',
          },
        ],
        ctaText: "Beslenmeleri Mamio ile takip et",
      },
    },
  },

  'breastfeeding-side-balance': {
    slugs: {
      en: 'breastfeeding-side-balance',
      de: 'still-seite-balance',
      tr: 'emzirme-taraf-dengesi',
    },
    locales: {
      en: {
        metaTitle: 'Breastfeeding Side Balance: What to Record and Why | Mamio Blog',
        metaDescription:
          'Tracking which side you nursed on last helps maintain supply and comfort. Here is what to record and how to use the information without adding stress.',
        title: 'Breastfeeding Side Balance: What to Record and Why',
        date: '2026-06-28',
        intro:
          'One of the most common questions new nursing parents have is: which side did I use last? At 3 AM, this is genuinely hard to remember. Tracking your breastfeeding side is a simple habit that keeps your supply balanced and your feeds more comfortable.',
        sections: [
          {
            title: 'Why side balance matters',
            body: 'When one breast is consistently fed from more than the other, it can produce more milk, leading to uneven supply and potential discomfort. Regular side-switching helps both sides maintain similar production. Most lactation consultants recommend alternating the starting side with each feed, or at each feed session when nursing from both.',
          },
          {
            title: 'What to record',
            body: 'You only need to log the starting side and, if you switch mid-feed, which side you ended on. Duration is helpful but not essential. Even a simple left / right note with a timestamp gives you enough information to decide which side to start on at the next feed.',
          },
          {
            title: 'Using your records without overthinking',
            body: 'The value of a side log is in the quick glance, not the analysis. When you sit down to nurse, open the app, see which side you used last, and start on the other. That\'s it. You do not need to calculate totals or worry about perfect balance every single day.',
          },
          {
            title: 'When to mention patterns to a lactation consultant',
            body: 'If you consistently notice a strong preference for one side — from you or your baby — it may be worth mentioning at your next consultation. Side-preference can sometimes indicate latch differences or other factors a lactation professional can help you address. Your tracking history gives them real data to work with.',
          },
        ],
        faq: [
          {
            question: 'Does it matter which side I start on?',
            answer: 'Alternating the starting side across feeds helps maintain balanced supply. Many caregivers suggest starting each feed on the side you ended the last one, but the key is consistency rather than a strict rule.',
          },
          {
            question: 'Should I track duration as well as side?',
            answer: 'Duration is useful extra context but the side is the most important data point for balance. Start with side-tracking and add duration if it feels manageable.',
          },
          {
            question: 'What if my baby strongly prefers one side?',
            answer: 'A consistent preference is worth mentioning to a lactation consultant. It does not mean something is wrong, but it can help them assess latch, positioning, or supply factors.',
          },
        ],
        ctaText: 'Track breastfeeding sides with Mamio',
      },
      de: {
        metaTitle: 'Still-Seite-Balance: Was du aufzeichnen solltest und warum | Mamio Blog',
        metaDescription:
          'Zu tracken, welche Seite du zuletzt genutzt hast, hilft Milchangebot und Komfort auszugleichen. Was aufzeichnen und wie nutzen – ohne Stress.',
        title: 'Still-Seite-Balance: Was du aufzeichnen solltest und warum',
        date: '2026-06-28',
        intro:
          'Eine der häufigsten Fragen stillender Eltern lautet: Welche Seite habe ich zuletzt benutzt? Um 3 Uhr morgens ist das wirklich schwer zu erinnern. Die Stillseite zu tracken ist eine einfache Gewohnheit, die dein Milchangebot ausgleicht und das Stillen komfortabler macht.',
        sections: [
          {
            title: 'Warum Seitenbalance wichtig ist',
            body: 'Wenn eine Brust regelmäßig häufiger angelegt wird als die andere, kann sie mehr Milch produzieren – was zu ungleichem Angebot und möglichem Unbehagen führt. Regelmäßiges Seitenwechseln hilft beiden Seiten, ähnliche Produktion aufrechtzuerhalten. Die meisten Stillberaterinnen empfehlen, mit jeder Mahlzeit die Startseite zu wechseln.',
          },
          {
            title: 'Was du aufzeichnen solltest',
            body: 'Du musst nur die Startseite protokollieren und, wenn du die Seite wechselst, auf welcher Seite du aufgehört hast. Die Dauer ist hilfreich, aber nicht zwingend. Schon ein einfaches Links/Rechts mit Zeitstempel gibt dir genug Information, um bei der nächsten Mahlzeit die Seite zu wählen.',
          },
          {
            title: 'Aufzeichnungen nutzen ohne zu grübeln',
            body: 'Der Wert eines Stilljournals liegt im schnellen Blick, nicht in der Analyse. Wenn du dich zum Stillen hinsetzt, öffne die App, sieh auf welcher Seite du zuletzt war, und fang auf der anderen an. Das ist alles. Du musst keine Summen berechnen oder täglich auf perfekte Balance achten.',
          },
          {
            title: 'Wann du Muster einer Stillberaterin erwähnen solltest',
            body: 'Wenn du konsequent eine starke Präferenz für eine Seite bemerkst – von dir oder deinem Baby –, ist es gut, das bei der nächsten Beratung anzusprechen. Eine Seitenvorliebe kann manchmal auf Unterschiede beim Anlegen hinweisen. Deine Trackinghistorie gibt der Fachkraft echte Daten.',
          },
        ],
        faq: [
          {
            question: 'Ist es wichtig, auf welcher Seite ich anfange?',
            answer: 'Das Wechseln der Startseite über die Mahlzeiten hilft, ein ausgeglichenes Angebot zu erhalten. Viele Fachkräfte empfehlen, bei der nächsten Mahlzeit mit der Seite zu beginnen, auf der die letzte geendet hat.',
          },
          {
            question: 'Soll ich auch die Dauer tracken?',
            answer: 'Die Dauer ist nützlicher Kontext, aber die Seite ist der wichtigste Datenpunkt für Balance. Beginne mit dem Seiten-Tracking und ergänze die Dauer, wenn es machbar ist.',
          },
          {
            question: 'Was wenn mein Baby eine Seite klar bevorzugt?',
            answer: 'Eine anhaltende Präferenz ist es wert, einer Stillberaterin erwähnt zu werden. Es bedeutet nicht, dass etwas falsch ist, kann aber helfen, Anlage- oder Angebotsaspekte zu bewerten.',
          },
        ],
        ctaText: 'Stillseiten mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Emzirme Taraf Dengesi: Ne Kaydedilmeli ve Neden | Mamio Blog',
        metaDescription:
          'Hangi tarafı en son kullandığını takip etmek sütü dengeli tutmaya yardımcı olur. Stres yaratmadan neyi kaydedeceğini ve nasıl kullanacağını öğren.',
        title: 'Emzirme Taraf Dengesi: Ne Kaydedilmeli ve Neden',
        date: '2026-06-28',
        intro:
          'Emziren ebeveynlerin en sık sorduğu sorulardan biri şu: en son hangi tarafı kullandım? Gece saat 3\'te bunu hatırlamak gerçekten zordur. Emzirme tarafını takip etmek, sütü dengede tutan ve emzirmeyi daha rahat hâle getiren basit bir alışkanlıktır.',
        sections: [
          {
            title: 'Taraf dengesinin neden önemli olduğu',
            body: 'Bir meme diğerinden sürekli daha fazla kullanıldığında daha fazla süt üretebilir; bu da dengesiz arz ve olası rahatsızlığa yol açar. Düzenli taraf değiştirmek her iki tarafın benzer üretimi korumasına yardımcı olur. Çoğu laktasyon danışmanı her beslenme seansında başlangıç tarafını değiştirmeyi önerir.',
          },
          {
            title: 'Ne kaydetmeli',
            body: 'Sadece başlangıç tarafını ve beslenme ortasında taraf değiştirdiysen hangi tarafta bitirdiğini kaydetmen yeterli. Süre yardımcı ama zorunlu değil. Zaman damgasıyla basit bir sol/sağ notu bile bir sonraki beslenme için hangi taraftan başlayacağını kararlaştırmana yeter.',
          },
          {
            title: 'Kayıtları aşırı düşünmeden kullanmak',
            body: 'Taraf günlüğünün değeri hızlı bakıştadır, analizde değil. Emzirmeye oturduğunda uygulamayı aç, en son hangi tarafı kullandığına bak ve diğerinden başla. Bu kadar. Her gün mükemmel dengeyi hesaplaman gerekmiyor.',
          },
          {
            title: 'Düzenleri laktasyon danışmanına ne zaman belirtmeli',
            body: 'Bir tarafa karşı sürekli güçlü bir tercih fark edersen — sende ya da bebeğinde — bunu bir sonraki konsültasyonda belirtmek faydalı olabilir. Taraf tercihi bazen tutunma farklarına işaret edebilir. Takip geçmişin uzmana çalışacak gerçek veriler sunar.',
          },
        ],
        faq: [
          {
            question: 'Hangi taraftan başladığım önemli mi?',
            answer: 'Beslenmeler arasında başlangıç tarafını değiştirmek dengeli arzı korumaya yardımcı olur. Pek çok uzman bir sonraki beslenmeye bir öncekinin bittiği taraftan başlamayı önerir.',
          },
          {
            question: 'Süreyi de kaydetmeli miyim?',
            answer: 'Süre yararlı ek bağlamdır ama denge için en önemli veri noktası taraftır. Taraf takibiyle başla, yönetilebilir hissedince süreyi ekle.',
          },
          {
            question: 'Bebeğim bir tarafı güçlü bir şekilde tercih ederse ne olur?',
            answer: 'Süregelen bir tercih laktasyon danışmanına belirtmeye değer. Bir sorun olduğu anlamına gelmez ama tutunma veya arz faktörlerini değerlendirmelerine yardımcı olabilir.',
          },
        ],
        ctaText: "Emzirme taraflarını Mamio ile takip et",
      },
    },
  },

  'diaper-color': {
    slugs: {
      en: 'diaper-color-guide',
      de: 'windel-farben-leitfaden',
      tr: 'bez-rengi-rehberi',
    },
    locales: {
      en: {
        metaTitle: 'Diaper Color: When to Take Notes and When to Call the Doctor | Mamio Blog',
        metaDescription:
          'A practical guide to what diaper colors are common at different ages, when to write it down, and when to reach out to your pediatrician.',
        title: 'Diaper Color: When to Take Notes and When to Call the Doctor',
        date: '2026-06-28',
        intro:
          'New parents often find themselves staring at a diaper and wondering: is this normal? Diaper content changes frequently in the early weeks, and knowing what to observe — and how to talk about it with your pediatrician — can save a lot of anxiety. This is not medical advice; always contact your doctor with specific concerns.',
        sections: [
          {
            title: 'What changes in the first weeks',
            body: 'Newborn stool goes through several predictable stages. The first stools are dark and tar-like, gradually shifting to green-yellow transitional stools, and then to the color that reflects your feeding method. Breastfed babies typically produce more liquid, mustard-yellow stools. Formula-fed babies tend to have firmer, pale yellow or tan stools. These shifts are normal and expected.',
          },
          {
            title: 'Colors that are usually not a concern',
            body: 'Green stools are very common and usually reflect diet changes, foremilk-hindmilk imbalance during breastfeeding, or a stomach bug moving through quickly. Orange and brown stools are also typical. Occasional color variation within a day is normal.',
          },
          {
            title: 'When to write it down and mention it',
            body: 'Keep a brief note any time you see something that looks unusual for your baby — white or chalky stools, black stools after the first few days, red streaks, or very pale grey. Include what you saw, when, and whether it was a one-off or ongoing. A photo stored privately in your diaper log can help describe what you saw if you need to consult a clinician.',
          },
          {
            title: 'How your log helps the conversation',
            body: 'When you call or visit your pediatrician, having a short record with dates is much clearer than "I think I saw something weird last week." Your notes do not replace professional assessment — they make that assessment more efficient. A tracker like Mamio lets you add diaper notes and private photos alongside the full care timeline.',
          },
        ],
        faq: [
          {
            question: 'Is green stool always a problem?',
            answer: 'Not usually. Green stools are very common and often reflect feeding changes or normal gut transit variation. Persistent green stools with other symptoms are worth mentioning to your pediatrician.',
          },
          {
            question: 'When should I call a doctor about a diaper?',
            answer: 'Contact your pediatrician if you notice white or chalk-coloured stools, red blood in the stool, black stool after the first few days of life, or if your baby seems unwell alongside any colour change. This article is not medical advice.',
          },
          {
            question: 'Should I take photos of unusual diapers?',
            answer: 'A quick private photo can help you describe what you saw if you consult a healthcare provider. Mamio supports adding private photos to diaper entries.',
          },
        ],
        ctaText: 'Log diapers with notes and photos in Mamio',
      },
      de: {
        metaTitle: 'Windelfarben: Wann Notizen machen, wann zum Arzt | Mamio Blog',
        metaDescription:
          'Ein praktischer Leitfaden zu häufigen Windelfarben, wann du sie aufschreiben solltest und wann du deinen Kinderarzt kontaktieren solltest.',
        title: 'Windelfarben: Wann Notizen machen, wann zum Arzt gehen',
        date: '2026-06-28',
        intro:
          'Neueltern stehen oft vor einer Windel und fragen sich: Ist das normal? Windelinhalt verändert sich in den ersten Wochen häufig. Zu wissen, was zu beobachten ist und wie man darüber mit dem Kinderarzt spricht, kann viel Angst ersparen. Dies ist kein medizinischer Rat – wende dich mit konkreten Bedenken immer an deinen Arzt.',
        sections: [
          {
            title: 'Was sich in den ersten Wochen verändert',
            body: 'Der Neugeborenenst­uhl durchläuft mehrere vorhersehbare Phasen. Die ersten Stühle sind dunkel und teerartig, gehen nach und nach in grün-gelbe Übergangsstühle über und dann in die Farbe, die deine Fütterungsmethode widerspiegelt. Gestillte Babys produzieren typischerweise flüssigere, senfgelbe Stühle. Flaschenernährte Babys neigen zu festeren, hellgelben oder beigefarbenen Stühlen. Diese Veränderungen sind normal.',
          },
          {
            title: 'Farben, die meist kein Problem sind',
            body: 'Grüne Stühle sind sehr häufig und spiegeln meist Ernährungsveränderungen, ein Vor-Hintermilch-Ungleichgewicht beim Stillen oder einen schnell durchgehenden Magen-Darm-Infekt wider. Orange und braune Stühle sind ebenfalls typisch. Gelegentliche Farbvariationen im Tagesverlauf sind normal.',
          },
          {
            title: 'Wann aufschreiben und erwähnen',
            body: 'Mach eine kurze Notiz, wenn du etwas siehst, das für dein Baby ungewöhnlich aussieht – weiße oder kreideartige Stühle, schwarze Stühle nach den ersten Tagen, rote Streifen oder sehr blass-grauer Stuhl. Halte fest, was du gesehen hast, wann und ob es einmalig oder anhaltend war. Ein privat gespeichertes Foto in deinem Windelprotokoll kann helfen, bei einer Konsultation zu beschreiben, was du gesehen hast.',
          },
          {
            title: 'Wie dein Protokoll das Gespräch erleichtert',
            body: 'Wenn du deinen Kinderarzt anrufst oder besuchst, ist ein kurzes Protokoll mit Daten viel klarer als "Ich glaube, letzte Woche habe ich etwas Seltsames gesehen." Deine Notizen ersetzen keine professionelle Beurteilung – sie machen diese effizienter. Mamio lässt dich Windelnotizen und private Fotos neben dem gesamten Pflegeverlauf ergänzen.',
          },
        ],
        faq: [
          {
            question: 'Ist grüner Stuhl immer ein Problem?',
            answer: 'Normalerweise nicht. Grüne Stühle sind sehr häufig und spiegeln oft Ernährungsveränderungen oder normale Darmtransitvariation wider. Anhaltend grüne Stühle mit anderen Symptomen sind es wert, dem Kinderarzt zu erwähnen.',
          },
          {
            question: 'Wann sollte ich wegen einer Windel einen Arzt rufen?',
            answer: 'Kontaktiere deinen Kinderarzt, wenn du weißen oder kreideartigen Stuhl, rotes Blut im Stuhl, schwarzen Stuhl nach den ersten Lebenstagen oder ein krankes Baby bei gleichzeitiger Farbveränderung bemerkst. Dieser Artikel ist kein medizinischer Rat.',
          },
          {
            question: 'Sollte ich Fotos von ungewöhnlichen Windeln machen?',
            answer: 'Ein kurzes privates Foto kann helfen, zu beschreiben, was du gesehen hast, wenn du einen Arzt konsultierst. Mamio unterstützt das Hinzufügen privater Fotos zu Windeleinträgen.',
          },
        ],
        ctaText: 'Windeln mit Notizen und Fotos in Mamio protokollieren',
      },
      tr: {
        metaTitle: 'Bez Rengi: Ne Zaman Not Alınmalı, Ne Zaman Doktora Gidilmeli | Mamio Blog',
        metaDescription:
          'Farklı yaşlarda yaygın bez renklerine pratik bir rehber: ne zaman not almalı ve ne zaman pediatristin aramalısın.',
        title: 'Bez Rengi: Ne Zaman Not Alınmalı, Ne Zaman Doktora Gidilmeli',
        date: '2026-06-28',
        intro:
          'Yeni ebeveynler sık sık bir beze bakıp "bu normal mi?" diye merak eder. İlk haftalarda bez içeriği sık değişir; ne gözlemleyeceğini ve pediatristinle nasıl konuşacağını bilmek çok fazla kaygıyı önler. Bu tıbbi tavsiye değildir — belirli endişeleriniz için her zaman doktorunuza başvurun.',
        sections: [
          {
            title: 'İlk haftalarda neler değişir',
            body: 'Yenidoğan dışkısı birkaç öngörülebilir aşamadan geçer. İlk dışkılar koyu ve katrana benzerdir; giderek yeşil-sarı geçiş dışkılarına döner, sonra beslenme yöntemini yansıtan renge geçer. Emzirilen bebekler genellikle daha sıvı, hardal sarısı dışkı üretir. Formülle beslenen bebekler daha yoğun, açık sarı veya ten rengi dışkı eğilimindedir. Bu değişimler normaldir.',
          },
          {
            title: 'Genellikle sorun olmayan renkler',
            body: 'Yeşil dışkı çok yaygındır ve genellikle diyet değişikliklerini, emzirmede ön süt-arka süt dengesizliğini ya da hızlı geçen bir mide-barsak sorununu yansıtır. Turuncu ve kahverengi dışkılar da tipiktir. Gün içinde zaman zaman renk değişimi normaldir.',
          },
          {
            title: 'Ne zaman not alıp belirtmeli',
            body: 'Bebeğin için alışılmışın dışında görünen bir şey gördüğünde kısa bir not al — beyaz veya tebeşir gibi dışkı, ilk birkaç günden sonra siyah dışkı, kırmızı çizgiler veya çok soluk gri. Ne gördüğünü, ne zaman gördüğünü ve tek seferlik mi yoksa devam eden bir durum mu olduğunu kaydet. Bez günlüğüne özel olarak kaydettiğin bir fotoğraf, bir uzmanla görüşürken gördüğünü anlatmana yardımcı olabilir.',
          },
          {
            title: 'Günlüğün görüşmeye nasıl katkı sağladığı',
            body: 'Pediatristini aradığında veya ziyaret ettiğinde, tarihlerle kısa bir kayıt "Sanırım geçen hafta garip bir şey gördüm" demekten çok daha nettir. Notların profesyonel değerlendirmenin yerini tutmaz — onu daha verimli kılar. Mamio, bez notları ve özel fotoğraflar eklemenize olanak tanır.',
          },
        ],
        faq: [
          {
            question: 'Yeşil dışkı her zaman sorun mu?',
            answer: 'Genellikle hayır. Yeşil dışkı çok yaygındır ve çoğunlukla beslenme değişikliklerini veya normal barsak geçiş varyasyonunu yansıtır. Başka semptomlarla birlikte süregelen yeşil dışkı pediatristine belirtilmeye değer.',
          },
          {
            question: 'Bez nedeniyle ne zaman doktoru aramalıyım?',
            answer: 'Beyaz veya tebeşir renkli dışkı, dışkıda kırmızı kan, ilk birkaç yaşam gününden sonra siyah dışkı veya renk değişimiyle birlikte hasta görünen bir bebek fark edersen pediatristini ara. Bu makale tıbbi tavsiye değildir.',
          },
          {
            question: 'Olağandışı bezlerin fotoğrafını çekmeli miyim?',
            answer: 'Hızlı özel bir fotoğraf, bir sağlık uzmanıyla görüşürken gördüğünü anlatmana yardımcı olabilir. Mamio bez kayıtlarına özel fotoğraf eklemeyi destekler.',
          },
        ],
        ctaText: "Bezleri notlar ve fotoğraflarla Mamio'da kaydet",
      },
    },
  },

  'health-report-doctor': {
    slugs: {
      en: 'baby-health-report-doctor-visit',
      de: 'baby-gesundheitsbericht-arztbesuch',
      tr: 'bebek-saglik-raporu-doktor-ziyareti',
    },
    locales: {
      en: {
        metaTitle: 'How to Prepare a Baby Health Report for a Doctor Visit | Mamio Blog',
        metaDescription:
          'A simple guide to what information to bring to your baby\'s next appointment and how a tracking app can help you prepare in minutes.',
        title: 'How to Prepare a Baby Health Report for a Doctor Visit',
        date: '2026-06-28',
        intro:
          'Doctor visits go more smoothly when you arrive with context rather than approximations. Describing what you observed — and when — helps clinicians ask the right questions and spot anything worth monitoring. Here is how to prepare a useful health summary without spending an hour pulling notes together.',
        sections: [
          {
            title: 'What information is most useful',
            body: 'Clinicians typically want to know feeding frequency and intake, recent growth weight if you have it, sleep patterns in general terms, any symptoms or temperature readings you observed, and medication given with dates and doses. A brief summary covering the past one to two weeks is usually enough.',
          },
          {
            title: 'How a daily tracker makes this easier',
            body: 'If you have been logging care events as they happen, pulling this information together takes minutes rather than effort. A feeding and care log gives you accurate dates and rough quantities without relying on memory. You can check how many feeds happened last week, whether sleep patterns shifted recently, and what notes you added around any symptoms.',
          },
          {
            title: 'Using PDF exports',
            body: 'Some baby tracking apps, including Mamio Pro, support exporting a summary report for a selected date range. You can generate a report covering the week before an appointment and share it with your partner before the visit or hand it to the clinician for reference. This is especially useful for specialist consultations where detailed history matters.',
          },
          {
            title: 'What records cannot replace',
            body: 'A tracking record helps you communicate observations clearly. It does not diagnose, predict, or interpret health findings. Always rely on qualified medical professionals for any concerns about your baby\'s health. Your records are a communication aid, not a health assessment.',
          },
        ],
        faq: [
          {
            question: 'How far back should my records go for a check-up?',
            answer: 'One to two weeks of recent history is usually sufficient. For a specific concern, a few days of detailed notes around when the issue appeared is most useful.',
          },
          {
            question: 'What if I have not been tracking consistently?',
            answer: 'Even partial records help. A rough sense of feeding frequency and any specific events you can recall gives the clinician more to work with than none.',
          },
          {
            question: 'Can I export records from Mamio?',
            answer: 'Mamio Pro supports PDF report exports for selected date ranges. This lets you share a concise summary with a clinician or partner.',
          },
        ],
        ctaText: 'Keep health records in Mamio',
      },
      de: {
        metaTitle: 'Baby-Gesundheitsbericht für den Arztbesuch vorbereiten | Mamio Blog',
        metaDescription:
          'Eine einfache Anleitung, welche Informationen du zum nächsten Termin mitbringen solltest und wie eine Tracking-App in Minuten hilft.',
        title: 'Baby-Gesundheitsbericht für den Arztbesuch vorbereiten',
        date: '2026-06-28',
        intro:
          'Arzttermine verlaufen reibungsloser, wenn du mit Kontext anstelle von Schätzungen ankommst. Zu beschreiben, was du beobachtet hast – und wann – hilft Fachkräften, die richtigen Fragen zu stellen. So bereitest du eine nützliche Gesundheitsübersicht vor, ohne eine Stunde damit zu verbringen, Notizen zusammenzusuchen.',
        sections: [
          {
            title: 'Welche Informationen am nützlichsten sind',
            body: 'Fachkräfte möchten in der Regel wissen: Fütterungshäufigkeit und -menge, aktuelles Gewicht falls vorhanden, allgemeine Schlafmuster, von dir beobachtete Symptome oder Temperaturmessungen und gegebene Medikamente mit Daten und Dosen. Eine kurze Zusammenfassung der letzten ein bis zwei Wochen reicht meist aus.',
          },
          {
            title: 'Wie ein Tagestracker das erleichtert',
            body: 'Wenn du Pflegemomente beim Eintreten protokolliert hast, dauert das Zusammenstellen dieser Informationen Minuten statt Stunden. Ein Fütterungs- und Pflegeprotokoll gibt dir genaue Daten und ungefähre Mengen, ohne auf Erinnerung angewiesen zu sein.',
          },
          {
            title: 'PDF-Exporte nutzen',
            body: 'Einige Baby-Tracking-Apps, darunter Mamio Pro, unterstützen den Export einer Zusammenfassungsberichte für einen ausgewählten Zeitraum. Du kannst einen Bericht für die Woche vor einem Termin erstellen und ihn mit dem Partner teilen oder der Fachkraft zur Referenz übergeben.',
          },
          {
            title: 'Was Aufzeichnungen nicht ersetzen können',
            body: 'Ein Tracking-Protokoll hilft dir, Beobachtungen klar zu kommunizieren. Es diagnostiziert, prognostiziert oder interpretiert keine Gesundheitsbefunde. Wende dich bei Bedenken zur Gesundheit deines Babys immer an qualifizierte Mediziner.',
          },
        ],
        faq: [
          {
            question: 'Wie weit zurück sollten meine Aufzeichnungen für eine Vorsorgeuntersuchung reichen?',
            answer: 'Ein bis zwei Wochen aktuelle Geschichte reichen meist aus. Bei einem bestimmten Anliegen sind einige Tage detaillierter Notizen rund um das erste Auftreten am nützlichsten.',
          },
          {
            question: 'Was wenn ich nicht konsequent getrackt habe?',
            answer: 'Auch teilweise Aufzeichnungen helfen. Ein grobes Bild der Fütterungshäufigkeit und erinnerter Ereignisse gibt der Fachkraft mehr als nichts.',
          },
          {
            question: 'Kann ich Einträge aus Mamio exportieren?',
            answer: 'Mamio Pro unterstützt PDF-Berichtsexporte für ausgewählte Datumsbereiche.',
          },
        ],
        ctaText: 'Gesundheitsdaten in Mamio führen',
      },
      tr: {
        metaTitle: 'Doktor Ziyareti İçin Bebek Sağlık Raporu Nasıl Hazırlanır | Mamio Blog',
        metaDescription:
          'Bir sonraki randevuya hangi bilgileri götürmeli ve bir takip uygulaması dakikalar içinde nasıl yardımcı olur.',
        title: 'Doktor Ziyareti İçin Bebek Sağlık Raporu Nasıl Hazırlanır',
        date: '2026-06-28',
        intro:
          'Doktor ziyaretleri, tahminler yerine bağlamla gittiğinizde daha sorunsuz geçer. Ne gözlemlediğini — ve ne zaman — anlatmak klinisyenlerin doğru soruları sormasına yardımcı olur. İşte notları bir araya toplamak için bir saat harcamadan yararlı bir sağlık özeti hazırlamanın yolu.',
        sections: [
          {
            title: 'En yararlı bilgiler neler',
            body: 'Klinisyenler genellikle şunları bilmek ister: beslenme sıklığı ve miktarı, varsa son kilo ölçümü, genel uyku düzeni, gözlemlediğin belirtiler veya ateş ölçümleri ve verilen ilaçlar tarih ve dozlarıyla. Son bir ila iki haftayı kapsayan kısa bir özet genellikle yeterlidir.',
          },
          {
            title: 'Günlük takibin bunu kolaylaştırması',
            body: 'Bakım anlarını gerçek zamanlı olarak kaydettiysen bu bilgileri bir araya getirmek dakikalar alır. Beslenme ve bakım günlüğü, hafızaya güvenmeden doğru tarihler ve yaklaşık miktarlar sunar.',
          },
          {
            title: 'PDF dışa aktarımları kullanmak',
            body: 'Mamio Pro dahil bazı bebek takip uygulamaları, seçilen tarih aralığı için özet rapor dışa aktarımını destekler. Randevudan önceki haftayı kapsayan bir rapor oluşturabilir ve eşinle paylaşabilir ya da klinisyene referans olarak verebilirsin.',
          },
          {
            title: 'Kayıtların yerini tutamayacağı şeyler',
            body: 'Takip kaydı gözlemlerini net iletmene yardımcı olur. Teşhis koymaz, tahmin etmez veya sağlık bulgularını yorumlamaz. Bebeğinin sağlığına ilişkin herhangi bir konuda her zaman nitelikli tıp profesyonellerine danış.',
          },
        ],
        faq: [
          {
            question: 'Kontrol için kayıtlarım ne kadar geriye gitmelidir?',
            answer: 'Genellikle bir ila iki haftalık güncel geçmiş yeterlidir. Belirli bir endişe için sorunun ilk ortaya çıktığı zamana ait birkaç günlük detaylı not en işe yarayan olandır.',
          },
          {
            question: 'Düzenli takip etmemedim, bu sorun mu?',
            answer: 'Kısmi kayıtlar bile yardımcı olur. Beslenme sıklığı hakkında genel bir fikir ve hatırladığın belirli olaylar, klinisyene hiç olmamaktan daha fazlasını verir.',
          },
          {
            question: "Mamio'dan kayıtlarımı dışa aktarabilir miyim?",
            answer: 'Mamio Pro seçilen tarih aralıkları için PDF rapor dışa aktarımını destekler.',
          },
        ],
        ctaText: "Sağlık kayıtlarını Mamio'da tut",
      },
    },
  },

  'baby-sleep-first-months': {
    slugs: {
      en: 'baby-sleep-first-months',
      de: 'baby-schlaf-ersten-monate',
      tr: 'bebek-uyku-ilk-aylar',
    },
    locales: {
      en: {
        metaTitle: 'Baby Sleep in the First Months: Simple Tracking Without Pressure | Mamio Blog',
        metaDescription:
          'What is normal for baby sleep in the early months, what is worth tracking, and how to use a sleep log without turning it into another source of stress.',
        title: 'Baby Sleep in the First Months: Simple Tracking Without Pressure',
        date: '2026-06-28',
        intro:
          'Sleep is one of the biggest concerns for new parents — and one of the most unpredictable parts of early baby care. A sleep log can help you see patterns, reassure you on hard nights, and give you something concrete to share with a pediatrician. The key is keeping it informative rather than obsessive.',
        sections: [
          {
            title: 'What is typical in the first three months',
            body: 'Newborns sleep in short stretches, usually 2–4 hours at a time, for a total of 14–17 hours per day. Sleep consolidates gradually over the first months, but it is rarely linear. What you see on Monday may look very different on Friday, and that is normal. A sleep log helps you see the average across days rather than treating each night in isolation.',
          },
          {
            title: 'What is worth logging',
            body: 'Start and end time for each sleep period is the most useful. You do not need to record every detail about the room, the sounds, or the positioning. If you want extra context, a brief note about what preceded a nap or night waking — like hunger or a diaper change — can help you spot connections over time.',
          },
          {
            title: 'Connecting sleep to the rest of the day',
            body: 'Sleep patterns make more sense when they sit next to feeding and diaper records. A long gap between feeds often correlates with a shorter or more fragmented nap. Seeing this in a single daily view — rather than in separate apps — makes the connection easier to notice without spending time cross-referencing.',
          },
          {
            title: 'Using tracking without adding pressure',
            body: 'A sleep log is a record, not a target. Looking at averages across a week is more useful than comparing individual nights. If you find the data is making you more anxious rather than less, it is fine to track fewer details or take a break entirely. The goal is a calmer parent, not a perfect dataset.',
          },
        ],
        faq: [
          {
            question: 'How many hours should a newborn sleep per day?',
            answer: 'Most newborns sleep 14–17 hours per day, spread across many short periods. This changes gradually as they grow. Consult your pediatrician if you have concerns about your baby\'s sleep.',
          },
          {
            question: 'When does baby sleep start to consolidate?',
            answer: 'Many babies begin sleeping longer stretches at night somewhere between 3 and 6 months, but this varies widely. There is no universal milestone, and tracking your own baby\'s patterns is more useful than comparing to averages.',
          },
          {
            question: 'Can I add a nap I forgot to track?',
            answer: 'Yes. In Mamio you can add sleep sessions manually with the correct start and end time.',
          },
        ],
        ctaText: 'Track baby sleep with Mamio',
      },
      de: {
        metaTitle: 'Babyschlaf in den ersten Monaten: Einfaches Tracken ohne Druck | Mamio Blog',
        metaDescription:
          'Was in den ersten Monaten beim Babyschlaf normal ist, was aufzuzeichnen ist und wie du ein Schlafprotokoll ohne zusätzlichen Stress nutzt.',
        title: 'Babyschlaf in den ersten Monaten: Einfaches Tracken ohne Druck',
        date: '2026-06-28',
        intro:
          'Schlaf ist eine der größten Sorgen neuer Eltern – und einer der unberechenbarsten Aspekte der frühen Babypflege. Ein Schlafprotokoll kann helfen, Muster zu erkennen, in schwierigen Nächten zu beruhigen und dem Kinderarzt etwas Konkretes zu geben. Der Schlüssel ist, es informativ statt zwanghaft zu halten.',
        sections: [
          {
            title: 'Was in den ersten drei Monaten typisch ist',
            body: 'Neugeborene schlafen in kurzen Etappen, normalerweise 2–4 Stunden am Stück, für insgesamt 14–17 Stunden täglich. Schlaf konsolidiert sich schrittweise in den ersten Monaten, aber selten linear. Was du Montag siehst, kann Freitag ganz anders aussehen – das ist normal. Ein Schlafprotokoll hilft dir, den Durchschnitt über Tage zu sehen, statt jede Nacht isoliert zu betrachten.',
          },
          {
            title: 'Was aufzeichnenswert ist',
            body: 'Start- und Endzeit für jede Schlafphase ist am nützlichsten. Du musst nicht jedes Detail über Raum, Geräusche oder Position festhalten. Für extra Kontext kann eine kurze Notiz darüber, was einem Nickerchen oder Nachterwachen vorausging – wie Hunger oder ein Windelwechsel – helfen, im Laufe der Zeit Zusammenhänge zu erkennen.',
          },
          {
            title: 'Schlaf mit dem Rest des Tages verbinden',
            body: 'Schlafmuster machen mehr Sinn, wenn sie neben Fütterungs- und Windeleinträgen stehen. Eine lange Pause zwischen Mahlzeiten korreliert oft mit einem kürzeren oder fragmentierteren Nickerchen. Das in einer einzigen Tagesansicht zu sehen – statt in separaten Apps – macht die Verbindung leichter erkennbar.',
          },
          {
            title: 'Tracken ohne zusätzlichen Druck',
            body: 'Ein Schlafprotokoll ist eine Aufzeichnung, kein Ziel. Wochendurchschnitte anzuschauen ist nützlicher als einzelne Nächte zu vergleichen. Wenn die Daten dich eher ängstlicher machen, ist es völlig in Ordnung, weniger Details zu tracken oder eine Pause zu machen. Das Ziel ist ein ruhigerer Elternteil, kein perfektes Dataset.',
          },
        ],
        faq: [
          {
            question: 'Wie viele Stunden sollte ein Neugeborenes täglich schlafen?',
            answer: 'Die meisten Neugeborenen schlafen 14–17 Stunden täglich, verteilt auf viele kurze Phasen. Das ändert sich schrittweise. Wende dich bei Schlafbedenken an deinen Kinderarzt.',
          },
          {
            question: 'Wann beginnt sich der Babyschlaf zu konsolidieren?',
            answer: 'Viele Babys beginnen irgendwann zwischen 3 und 6 Monaten, nachts in längeren Abschnitten zu schlafen, aber das variiert stark. Es gibt keinen universellen Meilenstein.',
          },
          {
            question: 'Kann ich ein Nickerchen nachträglich eintragen, das ich vergessen habe?',
            answer: 'Ja. In Mamio kannst du Schlafphasen manuell mit der richtigen Start- und Endzeit hinzufügen.',
          },
        ],
        ctaText: 'Babyschlaf mit Mamio tracken',
      },
      tr: {
        metaTitle: 'İlk Aylarda Bebek Uykusu: Baskı Yaratmadan Basit Takip | Mamio Blog',
        metaDescription:
          'İlk aylarda bebek uykusunda neler normaldir, ne takip etmeye değer ve uyku günlüğünü başka bir stres kaynağına dönüştürmeden nasıl kullanırsın.',
        title: 'İlk Aylarda Bebek Uykusu: Baskı Yaratmadan Basit Takip',
        date: '2026-06-28',
        intro:
          'Uyku, yeni ebeveynlerin en büyük endişelerinden biri — ve erken bebek bakımının en öngörülmez parçalarından biri. Bir uyku günlüğü düzenleri görmen, zor gecelerde seni rahatlatman ve pediatristinle paylaşmak için somut bir şeye sahip olman için yardımcı olabilir. Önemli olan onu bilgilendirici tutmak, obsesif değil.',
        sections: [
          {
            title: 'İlk üç ayda neler tipiktir',
            body: 'Yenidoğanlar genellikle 2–4 saatlik kısa dilimler halinde, günde toplam 14–17 saat uyur. Uyku, ilk aylarda giderek pekişir ama nadiren doğrusal seyreder. Pazartesi gördüğün şey Cuma günü çok farklı olabilir ve bu normaldir. Bir uyku günlüğü her geceyi tek başına değil, günler içindeki ortalamayı görmen için yardımcı olur.',
          },
          {
            title: 'Kaydetmeye değer olanlar',
            body: 'Her uyku periyodunun başlangıç ve bitiş saati en faydalı bilgidir. Oda, sesler veya pozisyon hakkında her detayı kaydetmen gerekmiyor. Ek bağlam için, bir kestirme ya da gece uyanmasından önce ne olduğuna dair kısa bir not — açlık veya bez değişimi gibi — zamanla bağlantılar fark etmene yardımcı olabilir.',
          },
          {
            title: 'Uykuyu günün geri kalanıyla ilişkilendirmek',
            body: 'Uyku düzenleri beslenme ve bez kayıtlarının yanında dururken daha anlamlı hale gelir. Beslenmeler arasındaki uzun bir boşluk genellikle daha kısa veya daha parçalı bir kestirmeyle örtüşür. Bunu ayrı uygulamalar yerine tek bir günlük görünümde görmek, çapraz karşılaştırma için zaman harcamadan bağlantıyı fark etmeyi kolaylaştırır.',
          },
          {
            title: 'Baskı yaratmadan takip etmek',
            body: 'Uyku günlüğü bir kayıttır, bir hedef değil. Tek tek geceleri karşılaştırmaktan çok haftalık ortalamalara bakmak daha faydalıdır. Verilerin seni daha az değil daha fazla endişelendirdiğini fark edersen, daha az detay takip etmek veya bir ara vermek tamamen normaldir. Amaç daha sakin bir ebeveyn, mükemmel bir veri seti değil.',
          },
        ],
        faq: [
          {
            question: 'Yenidoğan günde kaç saat uyumalıdır?',
            answer: 'Çoğu yenidoğan günde 14–17 saat, birçok kısa dilim halinde uyur. Bu büyüdükçe kademeli değişir. Bebeğinin uykusuna ilişkin endişeleriniz için pediatristinize danışın.',
          },
          {
            question: 'Bebek uykusu ne zaman pekişmeye başlar?',
            answer: 'Pek çok bebek 3 ila 6 ay arasında bir noktada geceleri daha uzun uyumaya başlar, ancak bu büyük ölçüde değişir. Evrensel bir kilometre taşı yoktur.',
          },
          {
            question: 'Takip etmeyi unuttuğum bir kestirmeyi sonradan ekleyebilir miyim?',
            answer: "Evet. Mamio'da uyku seanslarını doğru başlangıç ve bitiş saatiyle manuel olarak ekleyebilirsin.",
          },
        ],
        ctaText: "Bebek uykusunu Mamio ile takip et",
      },
    },
  },
};

export const blogPostIds = Object.keys(blogPosts);

export function getBlogPostPath(postId, lang) {
  const slug = blogPosts[postId]?.slugs?.[lang];
  return slug ? `/${lang}/blog/${slug}/` : null;
}

export function getBlogPostAlternates(postId) {
  return [
    ...blogLangs.map((lang) => ({
      lang,
      href: `https://mamio-baby-tracker.com${getBlogPostPath(postId, lang)}`,
    })),
    {
      lang: 'x-default',
      href: `https://mamio-baby-tracker.com${getBlogPostPath(postId, 'en')}`,
    },
  ];
}
