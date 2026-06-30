export const blogLangs = ['en', 'de', 'tr'];

export const featureBlogPostIds = {
  breastfeeding: ['breastfeeding-side-balance', 'newborn-feeds'],
  feeding: ['newborn-feeds', 'bottle-feeding-log', 'pumping-output-log', 'mixed-feeding-routine', 'breastfeeding-side-balance'],
  bottleFeeding: ['bottle-feeding-log', 'newborn-feeds'],
  pumping: ['pumping-output-log', 'newborn-feeds'],
  mixedFeeding: ['mixed-feeding-routine', 'newborn-feeds', 'breastfeeding-side-balance'],
  diaper: ['diaper-color'],
  sleep: ['baby-sleep-first-months'],
  tummyTime: ['tummy-time-progress', 'baby-sleep-first-months'],
  health: ['health-report-doctor', 'vaccine-medication-reminders', 'growth-doctor-report', 'diaper-color'],
  reminders: ['vaccine-medication-reminders', 'health-report-doctor'],
  reports: ['growth-doctor-report', 'health-report-doctor'],
  careTimeline: ['newborn-feeds', 'bottle-feeding-log', 'tummy-time-progress', 'baby-sleep-first-months', 'diaper-color', 'health-report-doctor'],
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

  'bottle-feeding-log': {
    relatedPageId: 'bottleFeeding',
    slugs: {
      en: 'bottle-feeding-log-what-to-track',
      de: 'flaeschchen-protokoll-was-tracken',
      tr: 'biberon-gunlugu-ne-takip-edilmeli',
    },
    locales: {
      en: {
        metaTitle: 'Bottle Feeding Log: What to Track Without Overdoing It | Mamio Blog',
        metaDescription:
          'A practical guide to tracking bottle feeds, amounts, milk source, and notes without turning every feeding into a spreadsheet.',
        title: 'Bottle Feeding Log: What to Track Without Overdoing It',
        date: '2026-06-30',
        intro:
          'Bottle feeding can look simple from the outside, but the details add up quickly: when the bottle started, how much baby took, what milk source you used, and whether anything felt unusual. A good bottle feeding log gives you enough context without making feeding feel like paperwork.',
        sections: [
          {
            title: 'Start with time, amount, and milk source',
            body: 'The most useful bottle record is usually simple: start time, amount offered, amount finished, and milk source if that matters for your routine. That is enough to see recent intake and answer basic questions from a partner, caregiver, or clinician.',
          },
          {
            title: 'Use notes only when they help',
            body: 'You do not need a paragraph for every bottle. A short note is useful when baby refused part of a bottle, seemed uncomfortable, spit up more than usual, or when a different caregiver handled the feed. Notes should reduce confusion later, not create extra work now.',
          },
          {
            title: 'Look for daily rhythm, not perfect numbers',
            body: 'Single bottles vary. Some feeds are smaller, some are bigger, and tired days are rarely tidy. A log becomes more useful when you look across the whole day or week and see the general rhythm rather than treating each bottle as a test.',
          },
          {
            title: 'Keep bottles beside the rest of care',
            body: 'Bottle records are easier to understand when they sit next to diapers, sleep, pumping, and health notes. A baby care app like Mamio keeps those records in one offline timeline so the day is easier to review.',
          },
        ],
        faq: [
          {
            question: 'Should I track the amount of every bottle?',
            answer: 'Tracking amounts is useful, especially in the newborn stage or when a clinician asks about intake. If perfect tracking adds stress, partial records are still better than none.',
          },
          {
            question: 'Can I track formula and expressed milk together?',
            answer: 'Yes. Mamio lets you keep bottle feeds and milk source notes in the same baby care timeline.',
          },
          {
            question: 'Can I add a bottle feed later?',
            answer: 'Yes. You can add missed bottle feeds manually with the correct time and amount.',
          },
        ],
        ctaText: 'Track bottle feeds with Mamio',
      },
      de: {
        metaTitle: 'Fläschchen-Protokoll: Was du tracken solltest | Mamio Blog',
        metaDescription:
          'Ein praktischer Guide für Fläschchen, Mengen, Milchquelle und Notizen, ohne jede Mahlzeit in eine Tabelle zu verwandeln.',
        title: 'Fläschchen-Protokoll: Was du tracken solltest',
        date: '2026-06-30',
        intro:
          'Fläschchen geben wirkt von außen einfach, aber die Details sammeln sich schnell: wann die Mahlzeit begann, wie viel Baby getrunken hat, welche Milchquelle du genutzt hast und ob etwas ungewöhnlich war. Ein gutes Fläschchen-Protokoll gibt genug Kontext, ohne Füttern nach Papierarbeit fühlen zu lassen.',
        sections: [
          {
            title: 'Mit Zeit, Menge und Milchquelle starten',
            body: 'Der nützlichste Fläschcheneintrag ist meist simpel: Startzeit, angebotene Menge, getrunkene Menge und Milchquelle, wenn das für eure Routine relevant ist. Das reicht aus, um die aktuelle Trinkmenge zu sehen und Fragen von Partner, Betreuungsperson oder Arzt besser zu beantworten.',
          },
          {
            title: 'Notizen nur nutzen, wenn sie helfen',
            body: 'Du brauchst keinen Absatz zu jedem Fläschchen. Eine kurze Notiz hilft, wenn Baby einen Teil verweigert hat, unruhig wirkte, mehr gespuckt hat als sonst oder eine andere Betreuungsperson gefüttert hat.',
          },
          {
            title: 'Tagesrhythmus statt perfekter Zahlen',
            body: 'Einzelne Fläschchen unterscheiden sich. Manche Mahlzeiten sind kleiner, manche größer, und müde Tage sind selten ordentlich. Ein Protokoll wird nützlicher, wenn du den ganzen Tag oder die Woche anschaust statt jede Flasche einzeln zu bewerten.',
          },
          {
            title: 'Fläschchen neben der restlichen Pflege halten',
            body: 'Fläschcheneinträge sind leichter zu verstehen, wenn sie neben Windeln, Schlaf, Abpumpen und Gesundheitsnotizen stehen. Mamio hält diese Einträge in einer Offline-Timeline zusammen.',
          },
        ],
        faq: [
          {
            question: 'Soll ich die Menge jedes Fläschchens tracken?',
            answer: 'Mengen zu tracken ist nützlich, besonders in der Neugeborenenzeit oder wenn eine Fachkraft nach Trinkmengen fragt. Wenn perfektes Tracken stresst, helfen auch teilweise Einträge.',
          },
          {
            question: 'Kann ich Pre-Nahrung und abgepumpte Milch zusammen tracken?',
            answer: 'Ja. Mamio hält Fläschcheneinträge und Notizen zur Milchquelle in derselben Babypflege-Timeline.',
          },
          {
            question: 'Kann ich ein Fläschchen später eintragen?',
            answer: 'Ja. Du kannst verpasste Fläschchen manuell mit richtiger Uhrzeit und Menge ergänzen.',
          },
        ],
        ctaText: 'Fläschchen mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Biberon Günlüğü: Ne Takip Edilmeli | Mamio Blog',
        metaDescription:
          'Biberon saatini, miktarı, süt kaynağını ve notları her beslenmeyi tabloya çevirmeden takip etmek için pratik rehber.',
        title: 'Biberon Günlüğü: Ne Takip Edilmeli',
        date: '2026-06-30',
        intro:
          'Biberonla besleme dışarıdan basit görünür, ama detaylar hızla birikir: biberon ne zaman başladı, bebek ne kadar içti, hangi süt kaynağı kullanıldı ve olağandışı bir şey var mıydı? İyi bir biberon günlüğü, beslenmeyi evrak işine çevirmeden yeterli bağlam sağlar.',
        sections: [
          {
            title: 'Saat, miktar ve süt kaynağıyla başla',
            body: 'En faydalı biberon kaydı genellikle basittir: başlangıç saati, sunulan miktar, içilen miktar ve rutinin için önemliyse süt kaynağı. Bu kadarı son alımı görmek ve partner, bakım veren ya da doktor sorularını daha net yanıtlamak için yeterlidir.',
          },
          {
            title: 'Notları sadece işe yaradığında kullan',
            body: 'Her biberon için uzun açıklama yazman gerekmez. Bebek biberonun bir kısmını reddettiyse, huzursuz göründüyse, normalden fazla kustuysa veya beslenmeyi başka biri yaptıysa kısa bir not yeterlidir.',
          },
          {
            title: 'Kusursuz sayı değil, günlük ritim ara',
            body: 'Tek tek biberonlar değişir. Bazı beslenmeler küçük, bazıları daha büyük olur; yorgun günler düzenli ilerlemez. Günlüğün değeri her biberonu değerlendirmekte değil, günün veya haftanın genel ritmini görmekte.',
          },
          {
            title: 'Biberonu bakımın geri kalanıyla birlikte tut',
            body: 'Biberon kayıtları bez, uyku, sağım ve sağlık notlarının yanında durduğunda daha anlamlı olur. Mamio bu kayıtları tek çevrimdışı akışta bir arada tutar.',
          },
        ],
        faq: [
          {
            question: 'Her biberonun miktarını takip etmeli miyim?',
            answer: 'Miktar takibi özellikle yenidoğan döneminde veya bir sağlık uzmanı alımı sorduğunda işe yarar. Kusursuz takip stres yaratıyorsa kısmi kayıtlar bile değerlidir.',
          },
          {
            question: 'Mama ve sağılmış sütü birlikte takip edebilir miyim?',
            answer: 'Evet. Mamio biberon kayıtlarını ve süt kaynağı notlarını aynı bebek bakım akışında tutar.',
          },
          {
            question: 'Biberonu sonradan ekleyebilir miyim?',
            answer: 'Evet. Kaçan biberon beslenmelerini doğru saat ve miktarla manuel ekleyebilirsin.',
          },
        ],
        ctaText: 'Biberonları Mamio ile takip et',
      },
    },
  },

  'pumping-output-log': {
    relatedPageId: 'pumping',
    slugs: {
      en: 'pumping-output-log-routine',
      de: 'abpump-protokoll-menge-routine',
      tr: 'sagim-gunlugu-miktar-rutin',
    },
    locales: {
      en: {
        metaTitle: 'Pumping Output Log: Track Sessions Without Pressure | Mamio Blog',
        metaDescription:
          'How to track pumping time, duration, output, and feeding context in a way that supports your routine without adding pressure.',
        title: 'Pumping Output Log: Track Sessions Without Pressure',
        date: '2026-06-30',
        intro:
          'Pumping can be practical, emotional, repetitive, and unpredictable all at once. A pumping log should help you remember what happened and plan the next step, not make you judge every session by a number.',
        sections: [
          {
            title: 'Track time, duration, and output',
            body: 'The basic record is simple: when the session happened, how long it lasted, and how much you collected if you want that detail. These three points give enough context for most everyday routines.',
          },
          {
            title: 'Add context when the session was different',
            body: 'A note can help when a session happened later than usual, felt uncomfortable, was interrupted, or was connected to a missed feed. You do not need to explain every normal session.',
          },
          {
            title: 'Watch trends, not single sessions',
            body: 'Pumping output can change from session to session. Looking at the general pattern across days is usually more useful than reacting to one low or high session.',
          },
          {
            title: 'Connect pumping with bottles',
            body: 'Pumping records are easier to use when they sit beside bottle feeds and breastfeeding. Mamio keeps pumping, bottles, nursing, diapers, and sleep in one offline timeline.',
          },
        ],
        faq: [
          {
            question: 'Should I track output every time I pump?',
            answer: 'Output can be useful context, but it is not the only valuable part of the record. Time and duration also help you understand your routine.',
          },
          {
            question: 'Can I track pumping and bottle feeds together?',
            answer: 'Yes. Mamio keeps pumping sessions, bottle feeds, breastfeeding, and other care records in the same timeline.',
          },
          {
            question: 'Can Mamio remind me to pump?',
            answer: 'Yes. Mamio supports gentle reminders for pumping and other baby care routines.',
          },
        ],
        ctaText: 'Track pumping with Mamio',
      },
      de: {
        metaTitle: 'Abpump-Protokoll: Menge und Routine ohne Druck tracken | Mamio Blog',
        metaDescription:
          'Wie du Abpumpzeit, Dauer, Menge und Fütterungskontext festhältst, ohne zusätzlichen Druck aufzubauen.',
        title: 'Abpump-Protokoll: Menge und Routine ohne Druck tracken',
        date: '2026-06-30',
        intro:
          'Abpumpen kann praktisch, emotional, wiederholend und unvorhersehbar zugleich sein. Ein Abpump-Protokoll sollte helfen, den Überblick zu behalten und den nächsten Schritt zu planen, nicht jede Session an einer Zahl zu messen.',
        sections: [
          {
            title: 'Zeit, Dauer und Menge erfassen',
            body: 'Der Grundeintrag ist simpel: wann die Session war, wie lange sie gedauert hat und welche Menge zusammenkam, wenn du diese Information festhalten möchtest. Diese drei Punkte reichen für die meisten Alltagsroutinen.',
          },
          {
            title: 'Kontext ergänzen, wenn etwas anders war',
            body: 'Eine Notiz hilft, wenn eine Session später als üblich stattfand, unangenehm war, unterbrochen wurde oder mit einer verpassten Mahlzeit zusammenhing. Normale Sessions brauchen keine Erklärung.',
          },
          {
            title: 'Trends statt einzelne Sessions ansehen',
            body: 'Die abgepumpte Menge kann von Session zu Session schwanken. Das Muster über mehrere Tage ist meist hilfreicher als eine einzelne niedrige oder hohe Session.',
          },
          {
            title: 'Abpumpen mit Fläschchen verbinden',
            body: 'Abpump-Einträge sind nützlicher, wenn sie neben Fläschchen und Stillen stehen. Mamio hält Abpumpen, Fläschchen, Stillen, Windeln und Schlaf in einer Offline-Timeline.',
          },
        ],
        faq: [
          {
            question: 'Soll ich die Menge bei jedem Abpumpen tracken?',
            answer: 'Die Menge kann hilfreicher Kontext sein, ist aber nicht der einzige wertvolle Teil. Zeit und Dauer helfen ebenfalls, die Routine zu verstehen.',
          },
          {
            question: 'Kann ich Abpumpen und Fläschchen zusammen tracken?',
            answer: 'Ja. Mamio hält Abpumpsessions, Fläschchen, Stillen und andere Pflegeeinträge in derselben Timeline.',
          },
          {
            question: 'Kann Mamio ans Abpumpen erinnern?',
            answer: 'Ja. Mamio unterstützt sanfte Erinnerungen für Abpumpen und andere Babypflege-Routinen.',
          },
        ],
        ctaText: 'Abpumpen mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Sağım Günlüğü: Miktar ve Rutini Baskısız Takip Et | Mamio Blog',
        metaDescription:
          'Sağım zamanı, süresi, miktarı ve beslenme bağlamını ekstra baskı yaratmadan takip etmek için pratik rehber.',
        title: 'Sağım Günlüğü: Miktar ve Rutini Baskısız Takip Et',
        date: '2026-06-30',
        intro:
          'Sağım aynı anda pratik, duygusal, tekrarlı ve öngörülmez olabilir. Sağım günlüğü ne olduğunu hatırlamana ve sonraki adımı planlamana yardımcı olmalı; her seansı bir sayıyla yargılatmamalı.',
        sections: [
          {
            title: 'Saat, süre ve miktarı kaydet',
            body: 'Temel kayıt basittir: seans ne zaman oldu, ne kadar sürdü ve istersen ne kadar süt çıktı. Bu üç bilgi çoğu günlük rutin için yeterli bağlam sağlar.',
          },
          {
            title: 'Farklı seanslarda bağlam ekle',
            body: 'Seans normalden geç olduysa, rahatsız hissettirdiyse, bölündüyse veya kaçan bir beslenmeyle ilişkiliyse kısa bir not yardımcı olur. Her normal seansı açıklamana gerek yok.',
          },
          {
            title: 'Tek seans değil, trendlere bak',
            body: 'Sağım miktarı seanstan seansa değişebilir. Genellikle tek düşük veya yüksek seansa tepki vermek yerine günler içindeki genel düzeni görmek daha faydalıdır.',
          },
          {
            title: 'Sağımı biberonlarla bağla',
            body: 'Sağım kayıtları biberon ve emzirme yanında durduğunda daha kullanışlı olur. Mamio sağım, biberon, emzirme, bez ve uykuyu tek çevrimdışı akışta tutar.',
          },
        ],
        faq: [
          {
            question: 'Her sağımda miktarı takip etmeli miyim?',
            answer: 'Miktar faydalı bağlam olabilir ama kaydın tek değerli kısmı değildir. Saat ve süre de rutini anlamana yardımcı olur.',
          },
          {
            question: 'Sağım ve biberonu birlikte takip edebilir miyim?',
            answer: 'Evet. Mamio sağım seanslarını, biberonları, emzirmeyi ve diğer bakım kayıtlarını aynı akışta tutar.',
          },
          {
            question: 'Mamio sağım hatırlatması yapar mı?',
            answer: 'Evet. Mamio sağım ve diğer bebek bakım rutinleri için yumuşak hatırlatmaları destekler.',
          },
        ],
        ctaText: 'Sağımı Mamio ile takip et',
      },
    },
  },

  'mixed-feeding-routine': {
    relatedPageId: 'mixedFeeding',
    slugs: {
      en: 'mixed-feeding-routine-tracker',
      de: 'kombinierte-fuetterung-routine-tracken',
      tr: 'karma-beslenme-rutini-takibi',
    },
    locales: {
      en: {
        metaTitle: 'Mixed Feeding Routine: How to Track Breast, Bottle, and Pumping | Mamio Blog',
        metaDescription:
          'A calm guide to tracking mixed feeding routines with breastfeeding, bottles, pumping, milk source, and daily context in one place.',
        title: 'Mixed Feeding Routine: How to Track Breast, Bottle, and Pumping',
        date: '2026-06-30',
        intro:
          'Mixed feeding can change from morning to night: nursing here, a bottle there, pumping later, and a caregiver trying to remember what happened last. Tracking helps most when it shows the sequence clearly without forcing your family into one perfect routine.',
        sections: [
          {
            title: 'Record the type of each feed',
            body: 'Start by marking whether the feed was breastfeeding, bottle, pumping-related, or solids if your baby has started them. The sequence matters because it shows what came before the next nap, diaper, or bottle.',
          },
          {
            title: 'Keep bottle amounts and milk source visible',
            body: 'For bottles, amount and milk source are the details most families want later. They help explain the day to a partner, sitter, consultant, or clinician without relying on tired memory.',
          },
          {
            title: 'Avoid comparing modes against each other',
            body: 'Mixed feeding is not a scorecard. Breastfeeds, bottles, and pumping sessions each tell a different part of the day. The goal is context, not proving that one type of feed was better than another.',
          },
          {
            title: 'Use one timeline for everyone',
            body: 'A single feeding timeline is easier for shared caregiving. Mamio keeps breastfeeding, bottles, pumping, diapers, sleep, and notes together offline so the next caregiver can quickly catch up.',
          },
        ],
        faq: [
          {
            question: 'What should I track for mixed feeding?',
            answer: 'Track feed type, time, side or amount when relevant, milk source for bottles, and short notes only when they add useful context.',
          },
          {
            question: 'Can Mamio handle breastfeeding and bottle feeding together?',
            answer: 'Yes. Mamio supports breastfeeding, bottles, pumping, solids, diapers, sleep, and health notes in one timeline.',
          },
          {
            question: 'Do I need a strict mixed feeding schedule?',
            answer: 'Not necessarily. Many families use tracking to understand what happened rather than to enforce a fixed schedule. Ask a qualified clinician for feeding advice specific to your baby.',
          },
        ],
        ctaText: 'Track mixed feeding with Mamio',
      },
      de: {
        metaTitle: 'Kombinierte Fütterung: Stillen, Fläschchen und Abpumpen tracken | Mamio Blog',
        metaDescription:
          'Ein ruhiger Guide für kombinierte Fütterung mit Stillen, Fläschchen, Abpumpen, Milchquelle und Tageskontext an einem Ort.',
        title: 'Kombinierte Fütterung: Stillen, Fläschchen und Abpumpen tracken',
        date: '2026-06-30',
        intro:
          'Kombinierte Fütterung kann sich von morgens bis abends verändern: hier Stillen, dort ein Fläschchen, später Abpumpen und eine Betreuungsperson, die wissen möchte, was zuletzt passiert ist. Tracking hilft am meisten, wenn es die Reihenfolge klar zeigt, ohne eine perfekte Routine zu erzwingen.',
        sections: [
          {
            title: 'Die Art jeder Mahlzeit erfassen',
            body: 'Markiere zuerst, ob es Stillen, Fläschchen, Abpump-Kontext oder Beikost war, falls dein Baby damit begonnen hat. Die Reihenfolge ist wichtig, weil sie zeigt, was vor dem nächsten Schlaf, der nächsten Windel oder dem nächsten Fläschchen kam.',
          },
          {
            title: 'Menge und Milchquelle sichtbar halten',
            body: 'Bei Fläschchen sind Menge und Milchquelle die Details, die viele Familien später brauchen. Sie helfen, den Tag Partner, Betreuungsperson, Beratung oder Arzt klarer zu erklären.',
          },
          {
            title: 'Fütterungsarten nicht gegeneinander bewerten',
            body: 'Kombinierte Fütterung ist keine Punkteliste. Stillen, Fläschchen und Abpumpen erzählen jeweils einen anderen Teil des Tages. Ziel ist Kontext, nicht ein Vergleich.',
          },
          {
            title: 'Eine Timeline für alle nutzen',
            body: 'Eine gemeinsame Fütterungs-Timeline ist für geteilte Betreuung leichter. Mamio hält Stillen, Fläschchen, Abpumpen, Windeln, Schlaf und Notizen offline zusammen.',
          },
        ],
        faq: [
          {
            question: 'Was sollte ich bei kombinierter Fütterung tracken?',
            answer: 'Tracke Fütterungsart, Uhrzeit, Seite oder Menge wenn relevant, Milchquelle bei Fläschchen und kurze Notizen nur dann, wenn sie Kontext ergänzen.',
          },
          {
            question: 'Kann Mamio Stillen und Fläschchen zusammen abbilden?',
            answer: 'Ja. Mamio unterstützt Stillen, Fläschchen, Abpumpen, Beikost, Windeln, Schlaf und Gesundheitsnotizen in einer Timeline.',
          },
          {
            question: 'Brauche ich einen festen Plan für kombinierte Fütterung?',
            answer: 'Nicht unbedingt. Viele Familien nutzen Tracking, um zu verstehen, was passiert ist, nicht um einen starren Plan einzuhalten. Für individuelle Fütterungsfragen frage eine qualifizierte Fachkraft.',
          },
        ],
        ctaText: 'Kombinierte Fütterung mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Karma Beslenme Rutini: Emzirme, Biberon ve Sağımı Takip Etmek | Mamio Blog',
        metaDescription:
          'Emzirme, biberon, sağım, süt kaynağı ve günlük bağlamı tek yerde takip etmek için sakin karma beslenme rehberi.',
        title: 'Karma Beslenme Rutini: Emzirme, Biberon ve Sağımı Takip Etmek',
        date: '2026-06-30',
        intro:
          'Karma beslenme sabah başka, akşam başka görünebilir: bir yerde emzirme, sonra biberon, daha sonra sağım ve en son ne olduğunu hatırlamaya çalışan bir bakım veren. Takip en çok, aileyi kusursuz bir rutine zorlamadan sırayı net gösterdiğinde işe yarar.',
        sections: [
          {
            title: 'Her beslenmenin türünü kaydet',
            body: 'Önce beslenmenin emzirme, biberon, sağım bağlantılı bir kayıt veya başladıysa ek gıda olup olmadığını işaretle. Sıra önemlidir; sonraki uyku, bez veya biberondan önce ne olduğunu gösterir.',
          },
          {
            title: 'Miktar ve süt kaynağını görünür tut',
            body: 'Biberonlarda miktar ve süt kaynağı çoğu ailenin sonradan aradığı detaylardır. Günü partnere, bakıcıya, danışmana veya doktora hafızaya güvenmeden anlatmayı kolaylaştırır.',
          },
          {
            title: 'Beslenme türlerini kıyaslama',
            body: 'Karma beslenme bir puan tablosu değildir. Emzirme, biberon ve sağım günün farklı parçalarını anlatır. Amaç bir türün diğerinden iyi olduğunu kanıtlamak değil, bağlamı görmektir.',
          },
          {
            title: 'Herkes için tek akış kullan',
            body: 'Tek beslenme akışı ortak bakımda işleri kolaylaştırır. Mamio emzirme, biberon, sağım, bez, uyku ve notları çevrimdışı olarak bir arada tutar.',
          },
        ],
        faq: [
          {
            question: 'Karma beslenmede neyi takip etmeliyim?',
            answer: 'Beslenme türünü, saati, gerekiyorsa taraf veya miktarı, biberonlarda süt kaynağını ve sadece işe yarayan kısa notları takip etmek yeterlidir.',
          },
          {
            question: 'Mamio emzirme ve biberonu birlikte destekler mi?',
            answer: 'Evet. Mamio emzirme, biberon, sağım, ek gıda, bez, uyku ve sağlık notlarını tek akışta destekler.',
          },
          {
            question: 'Karma beslenme için katı bir programa ihtiyacım var mı?',
            answer: 'Her zaman değil. Pek çok aile takibi sabit bir programı zorlamak için değil, ne olduğunu anlamak için kullanır. Bebeğine özel beslenme sorularında nitelikli bir uzmana danış.',
          },
        ],
        ctaText: 'Karma beslenmeyi Mamio ile takip et',
      },
    },
  },

  'tummy-time-progress': {
    relatedPageId: 'tummyTime',
    slugs: {
      en: 'tummy-time-progress-tracker',
      de: 'tummy-time-fortschritt-tracken',
      tr: 'tummy-time-ilerleme-takibi',
    },
    locales: {
      en: {
        metaTitle: 'Tummy Time Progress: A Gentle Tracking Guide | Mamio Blog',
        metaDescription:
          'How to track supervised tummy time sessions, duration, positions, and progress without turning development into pressure.',
        title: 'Tummy Time Progress: A Gentle Tracking Guide',
        date: '2026-06-30',
        intro:
          'Tummy time often happens in tiny windows: a few calm minutes after a diaper change, a short stretch on a play mat, or a quick try before fussiness arrives. Tracking can help you see progress, but it should stay gentle and practical.',
        sections: [
          {
            title: 'Short sessions count',
            body: 'A tummy time log does not need to capture only long sessions. Short supervised attempts are still part of the routine, and recording them helps you see that progress is often made in small pieces.',
          },
          {
            title: 'Track duration and position',
            body: 'Duration and position are usually enough. If something helped, such as a toy, mirror, or a certain time of day, add a short note so you can repeat what worked.',
          },
          {
            title: 'Place tummy time in the daily rhythm',
            body: 'Tummy time can feel easier at some moments and harder at others. Seeing it beside feeds, diapers, and sleep helps you notice when it naturally fits into the day.',
          },
          {
            title: 'Keep developmental pressure out',
            body: 'A tracker records what happened. It does not judge progress or replace professional guidance. If you have concerns about your baby development, ask your pediatrician.',
          },
        ],
        faq: [
          {
            question: 'Should I track every tummy time attempt?',
            answer: 'You can, but you do not have to be perfect. Tracking most supervised sessions gives enough context for many families.',
          },
          {
            question: 'What should I write in a tummy time note?',
            answer: 'Keep it simple: position, mood, what helped, or why the session ended. Notes are optional.',
          },
          {
            question: 'Does Mamio give tummy time goals?',
            answer: 'Mamio helps record sessions and progress. For age-specific developmental guidance, ask your pediatrician.',
          },
        ],
        ctaText: 'Track tummy time with Mamio',
      },
      de: {
        metaTitle: 'Tummy-Time-Fortschritt sanft tracken | Mamio Blog',
        metaDescription:
          'Wie du beaufsichtigte Tummy-Time-Sessions, Dauer, Positionen und Fortschritt trackst, ohne Entwicklungsdruck aufzubauen.',
        title: 'Tummy-Time-Fortschritt sanft tracken',
        date: '2026-06-30',
        intro:
          'Tummy Time passiert oft in kleinen Zeitfenstern: ein paar ruhige Minuten nach dem Wickeln, ein kurzer Moment auf der Spielmatte oder ein Versuch, bevor Unruhe beginnt. Tracking kann Fortschritt sichtbar machen, sollte aber sanft und praktisch bleiben.',
        sections: [
          {
            title: 'Kurze Sessions zählen auch',
            body: 'Ein Tummy-Time-Protokoll muss nicht nur lange Sessions festhalten. Kurze beaufsichtigte Versuche gehören zur Routine, und sie zu erfassen zeigt, dass Fortschritt oft in kleinen Teilen passiert.',
          },
          {
            title: 'Dauer und Position tracken',
            body: 'Dauer und Position reichen meist aus. Wenn etwas geholfen hat, zum Beispiel ein Spielzeug, Spiegel oder eine bestimmte Tageszeit, ergänze eine kurze Notiz.',
          },
          {
            title: 'Tummy Time in den Tagesrhythmus setzen',
            body: 'Tummy Time fühlt sich in manchen Momenten leichter an als in anderen. Neben Mahlzeiten, Windeln und Schlaf wird sichtbarer, wann sie natürlich in den Tag passt.',
          },
          {
            title: 'Entwicklungsdruck draußen lassen',
            body: 'Ein Tracker hält fest, was passiert ist. Er bewertet keinen Fortschritt und ersetzt keine professionelle Beratung. Bei Entwicklungsfragen wende dich an deinen Kinderarzt.',
          },
        ],
        faq: [
          {
            question: 'Soll ich jeden Tummy-Time-Versuch tracken?',
            answer: 'Du kannst, musst aber nicht perfekt sein. Die meisten beaufsichtigten Sessions zu tracken gibt vielen Familien genug Kontext.',
          },
          {
            question: 'Was gehört in eine Tummy-Time-Notiz?',
            answer: 'Halte es einfach: Position, Stimmung, was geholfen hat oder warum die Session endete. Notizen sind optional.',
          },
          {
            question: 'Gibt Mamio Tummy-Time-Ziele vor?',
            answer: 'Mamio hilft, Sessions und Fortschritt zu erfassen. Für altersbezogene Entwicklungsfragen frage deinen Kinderarzt.',
          },
        ],
        ctaText: 'Tummy Time mit Mamio tracken',
      },
      tr: {
        metaTitle: 'Tummy Time İlerlemesini Sakin Takip Etmek | Mamio Blog',
        metaDescription:
          'Gözetimli tummy time seanslarını, süreyi, pozisyonları ve ilerlemeyi gelişim baskısına çevirmeden takip etmek için rehber.',
        title: 'Tummy Time İlerlemesini Sakin Takip Etmek',
        date: '2026-06-30',
        intro:
          'Tummy time çoğu zaman küçük aralıklarda olur: bez değişiminden sonra birkaç sakin dakika, oyun matında kısa bir deneme veya huzursuzluk başlamadan önce hızlı bir girişim. Takip ilerlemeyi görmene yardımcı olabilir, ama yumuşak ve pratik kalmalı.',
        sections: [
          {
            title: 'Kısa seanslar da sayılır',
            body: 'Tummy time günlüğü sadece uzun seansları yakalamak zorunda değildir. Kısa ve gözetimli denemeler de rutinin parçasıdır; onları kaydetmek ilerlemenin çoğu zaman küçük parçalarla geldiğini gösterir.',
          },
          {
            title: 'Süre ve pozisyonu takip et',
            body: 'Süre ve pozisyon genellikle yeterlidir. Oyuncak, ayna veya belirli bir zaman gibi işe yarayan bir şey olduysa kısa bir not ekleyebilirsin.',
          },
          {
            title: 'Tummy timeı günlük ritme yerleştir',
            body: 'Tummy time bazı anlarda daha kolay, bazı anlarda daha zor gelebilir. Beslenme, bez ve uyku yanında görünmesi gün içinde doğal yerini fark etmeyi kolaylaştırır.',
          },
          {
            title: 'Gelişim baskısını dışarıda tut',
            body: 'Takip uygulaması olanı kaydeder. İlerlemeyi yargılamaz ve profesyonel yönlendirmenin yerine geçmez. Bebeğinin gelişimiyle ilgili endişelerin varsa pediatristine danış.',
          },
        ],
        faq: [
          {
            question: 'Her tummy time denemesini takip etmeli miyim?',
            answer: 'Edebilirsin ama kusursuz olmak zorunda değilsin. Gözetimli seansların çoğunu takip etmek birçok aile için yeterli bağlam sağlar.',
          },
          {
            question: 'Tummy time notuna ne yazmalıyım?',
            answer: 'Basit tut: pozisyon, ruh hali, neyin yardımcı olduğu veya seansın neden bittiği. Notlar isteğe bağlıdır.',
          },
          {
            question: 'Mamio tummy time hedefi verir mi?',
            answer: 'Mamio seansları ve ilerlemeyi kaydetmeye yardımcı olur. Yaşa özel gelişim soruları için pediatristine danış.',
          },
        ],
        ctaText: "Tummy time'ı Mamio ile takip et",
      },
    },
  },

  'vaccine-medication-reminders': {
    relatedPageId: 'reminders',
    slugs: {
      en: 'baby-vaccine-medication-reminders-guide',
      de: 'baby-impfung-medikament-erinnerungen-guide',
      tr: 'bebek-asi-ilac-hatirlatici-rehberi',
    },
    locales: {
      en: {
        metaTitle: 'Baby Vaccine and Medication Reminders: What to Record | Mamio Blog',
        metaDescription:
          'How to use baby vaccine and medication reminders as a record-keeping support without replacing medical instructions.',
        title: 'Baby Vaccine and Medication Reminders: What to Record',
        date: '2026-06-30',
        intro:
          'Health-related reminders are useful because tired memory is not a reliable system. But they should support the instructions you received from a qualified professional, not replace them. Here is how to keep vaccine and medication context organized.',
        sections: [
          {
            title: 'Separate reminders from instructions',
            body: 'A reminder helps you remember a care moment. The actual schedule, dose, and medical decision should come from your pediatrician, pharmacist, or local health system guidance.',
          },
          {
            title: 'Record what happened after the reminder',
            body: 'After a medication dose or vaccine appointment, save the date, time, note, and any context you were told to monitor. The record is often just as useful as the reminder itself.',
          },
          {
            title: 'Keep health notes near daily care',
            body: 'Medication, vaccines, temperature, symptoms, feeding, and sleep can be connected. Keeping them in one timeline makes it easier to explain the recent picture during a call or visit.',
          },
          {
            title: 'Use careful language in shared notes',
            body: 'When sharing with another caregiver, write factual observations: what was given, when, and what you noticed. Avoid using the log as a diagnosis tool.',
          },
        ],
        faq: [
          {
            question: 'Can a reminder app tell me when vaccines are due?',
            answer: 'Use official vaccine guidance from your pediatrician or local health authority. Mamio helps you organize reminders and records around the plan you are following.',
          },
          {
            question: 'What should I record for medication?',
            answer: 'Record the date, time, medication name if appropriate, dose as instructed by a professional, and any note you were asked to monitor.',
          },
          {
            question: 'Does Mamio replace medical advice?',
            answer: 'No. Mamio is for record keeping and reminders. Always follow qualified medical guidance.',
          },
        ],
        ctaText: 'Keep reminders and health records in Mamio',
      },
      de: {
        metaTitle: 'Baby Impf- und Medikamenten-Erinnerungen: Was aufzeichnen | Mamio Blog',
        metaDescription:
          'Wie du Impf- und Medikamenten-Erinnerungen als Unterstützung nutzt, ohne medizinische Anweisungen zu ersetzen.',
        title: 'Baby Impf- und Medikamenten-Erinnerungen: Was aufzeichnen',
        date: '2026-06-30',
        intro:
          'Gesundheitsbezogene Erinnerungen sind hilfreich, weil müdes Erinnern kein verlässliches System ist. Sie sollten aber die Anweisungen qualifizierter Fachkräfte unterstützen, nicht ersetzen. So hältst du Impf- und Medikamentenkontext organisiert.',
        sections: [
          {
            title: 'Erinnerungen von Anweisungen trennen',
            body: 'Eine Erinnerung hilft, einen Pflegemoment nicht zu vergessen. Der tatsächliche Plan, die Dosis und medizinische Entscheidung sollten von Kinderarzt, Apotheke oder offizieller Gesundheitsinformation kommen.',
          },
          {
            title: 'Nach der Erinnerung festhalten, was passiert ist',
            body: 'Nach einer Medikamentengabe oder einem Impftermin speichere Datum, Uhrzeit, Notiz und den Kontext, auf den du achten solltest. Der Eintrag ist oft genauso nützlich wie die Erinnerung.',
          },
          {
            title: 'Gesundheitsnotizen nah an der Tagespflege halten',
            body: 'Medikamente, Impfungen, Temperatur, Symptome, Fütterung und Schlaf können zusammenhängen. In einer Timeline lässt sich das aktuelle Bild leichter erklären.',
          },
          {
            title: 'Faktisch formulieren, wenn du teilst',
            body: 'Wenn du Notizen mit einer Betreuungsperson teilst, halte Beobachtungen sachlich: was gegeben wurde, wann und was du bemerkt hast. Nutze das Protokoll nicht als Diagnosewerkzeug.',
          },
        ],
        faq: [
          {
            question: 'Kann eine Erinnerungs-App sagen, wann Impfungen fällig sind?',
            answer: 'Nutze offizielle Impfempfehlungen von Kinderarzt oder zuständiger Gesundheitsstelle. Mamio hilft, Erinnerungen und Einträge rund um euren Plan zu organisieren.',
          },
          {
            question: 'Was sollte ich bei Medikamenten aufzeichnen?',
            answer: 'Datum, Uhrzeit, Medikamentenname falls passend, die fachlich angegebene Dosis und Hinweise, auf die du achten solltest.',
          },
          {
            question: 'Ersetzt Mamio medizinische Beratung?',
            answer: 'Nein. Mamio ist für Einträge und Erinnerungen gedacht. Folge immer qualifizierter medizinischer Beratung.',
          },
        ],
        ctaText: 'Erinnerungen und Gesundheitsdaten in Mamio führen',
      },
      tr: {
        metaTitle: 'Bebek Aşı ve İlaç Hatırlatıcı: Ne Kaydedilmeli | Mamio Blog',
        metaDescription:
          'Aşı ve ilaç hatırlatmalarını tıbbi talimatların yerine koymadan kayıt desteği olarak kullanmak için pratik rehber.',
        title: 'Bebek Aşı ve İlaç Hatırlatıcı: Ne Kaydedilmeli',
        date: '2026-06-30',
        intro:
          'Sağlıkla ilgili hatırlatmalar işe yarar, çünkü yorgun hafıza güvenilir bir sistem değildir. Ama bu hatırlatmalar nitelikli bir uzmandan aldığın talimatları desteklemeli, onların yerine geçmemeli. Aşı ve ilaç bağlamını düzenli tutmanın yolu burada.',
        sections: [
          {
            title: 'Hatırlatmayı talimattan ayır',
            body: 'Hatırlatma bir bakım anını unutmamana yardımcı olur. Gerçek takvim, doz ve tıbbi karar pediatristin, eczacın veya yerel sağlık sistemi yönlendirmelerinden gelmelidir.',
          },
          {
            title: 'Hatırlatmadan sonra ne olduğunu kaydet',
            body: 'İlaç dozu veya aşı randevusundan sonra tarih, saat, not ve takip etmen söylenen bağlamı kaydet. Kayıt çoğu zaman hatırlatmanın kendisi kadar değerlidir.',
          },
          {
            title: 'Sağlık notlarını günlük bakıma yakın tut',
            body: 'İlaç, aşı, ateş, semptom, beslenme ve uyku birbiriyle ilişkili olabilir. Bunları tek akışta tutmak telefon görüşmesi veya randevuda yakın tabloyu anlatmayı kolaylaştırır.',
          },
          {
            title: 'Paylaşırken gözlemsel yaz',
            body: 'Başka bir bakım verenle not paylaşırken gerçek gözlemleri yaz: ne verildi, ne zaman verildi ve ne fark ettin. Günlüğü tanı aracı gibi kullanma.',
          },
        ],
        faq: [
          {
            question: 'Hatırlatma uygulaması aşıların ne zaman yapılacağını söyleyebilir mi?',
            answer: 'Aşı zamanlaması için pediatristinin veya resmi sağlık otoritesinin yönlendirmesini kullan. Mamio takip ettiğin planın etrafında hatırlatma ve kayıt düzenlemeye yardımcı olur.',
          },
          {
            question: 'İlaç için ne kaydetmeliyim?',
            answer: 'Tarih, saat, uygunsa ilaç adı, uzmanın belirttiği doz ve takip etmen istenen notları kaydet.',
          },
          {
            question: 'Mamio tıbbi tavsiyenin yerine geçer mi?',
            answer: 'Hayır. Mamio kayıt ve hatırlatma içindir. Her zaman nitelikli tıbbi yönlendirmeyi takip et.',
          },
        ],
        ctaText: "Hatırlatmaları ve sağlık kayıtlarını Mamio'da tut",
      },
    },
  },

  'growth-doctor-report': {
    relatedPageId: 'reports',
    slugs: {
      en: 'baby-growth-doctor-visit-report-guide',
      de: 'baby-wachstum-arztbesuch-bericht-guide',
      tr: 'bebek-buyume-doktor-ziyareti-raporu-rehberi',
    },
    locales: {
      en: {
        metaTitle: 'Baby Growth and Doctor Visit Report: What to Include | Mamio Blog',
        metaDescription:
          'A practical guide to preparing baby growth, feeding, medication, vaccine, and health context before a doctor visit.',
        title: 'Baby Growth and Doctor Visit Report: What to Include',
        date: '2026-06-30',
        intro:
          'Doctor visits are easier when your recent history is not scattered across memory, photos, messages, and notes. A simple report can turn daily baby care records into a clear conversation starter.',
        sections: [
          {
            title: 'Start with the reason for the visit',
            body: 'A routine check-up, a feeding concern, and a symptom follow-up need different context. Before preparing a report, decide what question you want the visit to answer.',
          },
          {
            title: 'Bring growth and feeding context together',
            body: 'Recent weight or length entries, feeding frequency, bottle amounts, pumping notes, diapers, and sleep can help describe the recent routine. You usually do not need every detail from the whole year.',
          },
          {
            title: 'Include medication, vaccines, and symptoms carefully',
            body: 'For health context, record factual details: date, time, what was given or observed, and any instruction you were asked to follow. Avoid interpreting records as a diagnosis.',
          },
          {
            title: 'Use exports to save time',
            body: 'Mamio Pro supports PDF reports for selected date ranges, which can help you prepare before an appointment or share context with another caregiver.',
          },
        ],
        faq: [
          {
            question: 'How many days should a doctor visit report cover?',
            answer: 'For many routine conversations, one to two recent weeks are enough. For a specific concern, focus on the days around when the concern appeared.',
          },
          {
            question: 'Can I export a report from Mamio?',
            answer: 'Mamio Pro supports PDF exports for selected date ranges.',
          },
          {
            question: 'Does a report replace a doctor assessment?',
            answer: 'No. A report helps communicate observations. It does not diagnose or replace professional medical care.',
          },
        ],
        ctaText: 'Prepare baby care reports with Mamio',
      },
      de: {
        metaTitle: 'Baby Wachstums- und Arztbesuch-Bericht: Was hinein gehört | Mamio Blog',
        metaDescription:
          'Ein praktischer Guide für Wachstum, Fütterung, Medikamente, Impfungen und Gesundheitskontext vor einem Arztbesuch.',
        title: 'Baby Wachstums- und Arztbesuch-Bericht: Was hinein gehört',
        date: '2026-06-30',
        intro:
          'Arztbesuche sind leichter, wenn die aktuelle Historie nicht in Erinnerung, Fotos, Nachrichten und Notizen verstreut ist. Ein einfacher Bericht kann tägliche Babypflege-Einträge in einen klaren Gesprächsanfang verwandeln.',
        sections: [
          {
            title: 'Mit dem Grund des Besuchs beginnen',
            body: 'Eine Vorsorgeuntersuchung, eine Fütterungsfrage und ein Symptom-Follow-up brauchen unterschiedlichen Kontext. Kläre vor dem Bericht, welche Frage der Termin beantworten soll.',
          },
          {
            title: 'Wachstum und Fütterung zusammenbringen',
            body: 'Aktuelle Gewicht- oder Längeneinträge, Fütterungshäufigkeit, Fläschchenmengen, Abpumpnotizen, Windeln und Schlaf können die Routine beschreiben. Meist brauchst du nicht jedes Detail des ganzen Jahres.',
          },
          {
            title: 'Medikamente, Impfungen und Symptome sachlich aufnehmen',
            body: 'Für Gesundheitskontext zählen Fakten: Datum, Uhrzeit, was gegeben oder beobachtet wurde und welche Anweisung du erhalten hast. Interpretiere Einträge nicht als Diagnose.',
          },
          {
            title: 'Exporte nutzen, um Zeit zu sparen',
            body: 'Mamio Pro unterstützt PDF-Berichte für ausgewählte Zeiträume. Das hilft vor Terminen oder wenn du Kontext mit einer Betreuungsperson teilen möchtest.',
          },
        ],
        faq: [
          {
            question: 'Wie viele Tage sollte ein Arztbericht abdecken?',
            answer: 'Für viele Routinegespräche reichen ein bis zwei aktuelle Wochen. Bei einem bestimmten Anliegen fokussiere dich auf die Tage rund um den Beginn.',
          },
          {
            question: 'Kann ich aus Mamio einen Bericht exportieren?',
            answer: 'Mamio Pro unterstützt PDF-Exporte für ausgewählte Datumsbereiche.',
          },
          {
            question: 'Ersetzt ein Bericht die ärztliche Beurteilung?',
            answer: 'Nein. Ein Bericht hilft, Beobachtungen zu kommunizieren. Er diagnostiziert nicht und ersetzt keine medizinische Versorgung.',
          },
        ],
        ctaText: 'Babycare-Berichte mit Mamio vorbereiten',
      },
      tr: {
        metaTitle: 'Bebek Büyüme ve Doktor Ziyareti Raporu: Neler Dahil Edilmeli | Mamio Blog',
        metaDescription:
          'Doktor ziyareti öncesi büyüme, beslenme, ilaç, aşı ve sağlık bağlamını hazırlamak için pratik rehber.',
        title: 'Bebek Büyüme ve Doktor Ziyareti Raporu: Neler Dahil Edilmeli',
        date: '2026-06-30',
        intro:
          'Doktor ziyaretleri yakın geçmiş hafızaya, fotoğraflara, mesajlara ve dağınık notlara bölünmediğinde daha kolay geçer. Basit bir rapor günlük bebek bakım kayıtlarını net bir konuşma başlangıcına dönüştürebilir.',
        sections: [
          {
            title: 'Ziyaretin nedeni ile başla',
            body: 'Rutin kontrol, beslenme endişesi ve semptom takibi farklı bağlam gerektirir. Rapor hazırlamadan önce randevunun hangi soruya yanıt aradığını netleştir.',
          },
          {
            title: 'Büyüme ve beslenme bağlamını birleştir',
            body: 'Yakın kilo veya boy kayıtları, beslenme sıklığı, biberon miktarları, sağım notları, bezler ve uyku son rutini anlatmaya yardımcı olur. Genellikle tüm yılın her detayına gerek yoktur.',
          },
          {
            title: 'İlaç, aşı ve semptomları dikkatli ekle',
            body: 'Sağlık bağlamında gerçek detayları yaz: tarih, saat, ne verildi veya ne gözlendi ve sana hangi talimat söylendi. Kayıtları tanı gibi yorumlama.',
          },
          {
            title: 'Zaman kazanmak için dışa aktarımı kullan',
            body: 'Mamio Pro seçilen tarih aralıkları için PDF raporları destekler. Bu, randevu öncesinde veya başka bir bakım verenle bağlam paylaşırken yardımcı olur.',
          },
        ],
        faq: [
          {
            question: 'Doktor ziyareti raporu kaç günü kapsamalı?',
            answer: 'Birçok rutin görüşme için son bir ila iki hafta yeterlidir. Belirli bir endişe için sorunun ortaya çıktığı günlere odaklan.',
          },
          {
            question: "Mamio'dan rapor dışa aktarabilir miyim?",
            answer: 'Mamio Pro seçilen tarih aralıkları için PDF dışa aktarımını destekler.',
          },
          {
            question: 'Rapor doktor değerlendirmesinin yerine geçer mi?',
            answer: 'Hayır. Rapor gözlemleri iletmeye yardımcı olur. Tanı koymaz ve profesyonel tıbbi bakımın yerine geçmez.',
          },
        ],
        ctaText: "Bebek bakım raporlarını Mamio'da hazırla",
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
