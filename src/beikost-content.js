// Evidence-based Beikost (complementary feeding) guides.
//
// These are YMYL pages: every factual sentence carries an inline [n] marker that
// resolves to an entry in the article's own `sources` list, and each source was
// opened and quoted in work/<locale>/<slug>/sources.md before the text was written.
//
// They are published per country, NOT translated: a German page cites German
// authorities (BfR, BIOEG) and may not be reused for another market. A post is
// live only in the languages that have both a slug and a locale body here.
//
// `reviewedBy` stays empty until a clinician licensed in that country signs off.
// Until then the page renders with a visible "noch in fachlicher Prüfung" note.

export const beikostPosts = {
  'beikost-honig': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'honig-fuer-babys',
    },
    locales: {
      de: {
        metaTitle: `Honig für Babys: Warum erst ab 1 Jahr? | Mamio`,
        metaDescription: `Honig ist im ersten Lebensjahr tabu — wegen Säuglingsbotulismus. Was BfR und BIÖG empfehlen, warum Honig in Keksen unbedenklich ist und ab wann Honig erlaubt ist.`,
        title: `Honig für Babys: Warum erst ab dem ersten Geburtstag?`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Reiner Bienenhonig gehört im ersten Lebensjahr nicht auf den Speiseplan [1][2].`,
          `Der Grund ist der sogenannte Säuglingsbotulismus: Sporen des Bakteriums Clostridium botulinum kommen häufig in Honig vor [1].`,
          `Honig in Fertigprodukten gilt als unbedenklich, weil die Keime bei der Herstellung durch ausreichende Erhitzung abgetötet werden [2].`,
          `Auch international wird Honig erst ab 12 Monaten eingeführt [3].`,
        ],
        intro: `Reiner Bienenhonig sollte im ersten Lebensjahr nicht gegeben werden — wegen der Gefahr des sogenannten Säuglingsbotulismus [1][2]. Das Bundesinstitut für Risikobewertung führt „Kindern unter einem Jahr keinen Honig geben" ausdrücklich als Schutzmaßnahme gegen Botulismus auf [1]. Honig, der in Fertigprodukten verarbeitet ist, wird dagegen als unbedenklich eingeordnet [2].`,
        sections: [
          {
            title: `Ab wann ist Honig erlaubt?`,
            body: `Die Einschränkung gilt für das erste Lebensjahr: „Honig sollte nicht an Säuglinge unter einem Jahr verfüttert werden", schreibt das BfR [1]. Das Bundesinstitut für Öffentliche Gesundheit formuliert es für reinen Bienenhonig genauso — auf ihn solle im ersten Lebensjahr wegen der Gefahr des Säuglingsbotulismus verzichtet werden [2]. Beide Quellen nennen eine Altersgrenze, nicht ein Startalter: ab wann genau Honig danach sinnvoll ist, legen sie nicht fest.`,
          },
          {
            title: `Warum Honig für Säuglinge ein Risiko ist`,
            body: `Honig ist eine bekannte Quelle für den Säuglingsbotulismus [1]. Sporen von Clostridium botulinum kommen häufig in Honig vor; im Honig selbst werden sie nicht zu giftbildenden Zellen, stellen aber für Säuglinge unter einem Jahr ein Risiko dar [1]. Der Grund liegt im Darm: Bienenhonig kann Keime eines bestimmten Bakteriums enthalten, die sich bei Kindern in diesem Alter im Darm ansiedeln und dort ein gefährliches Gift bilden können [2]. Beim Säuglingsbotulismus entsteht das Nervengift also erst im Körper des Kindes — nicht vorher im Lebensmittel.`,
          },
          {
            title: `Honig in Keksen, Brot und Gläschen`,
            body: `Hier unterscheiden die Empfehlungen klar zwischen rohem und verarbeitetem Honig: „Unbedenklich ist Honig in Fertigprodukten, da diese Keime durch die ausreichende Erhitzung bei der Herstellung abgetötet werden" [2]. Ein industriell gebackener Keks mit Honig im Teig fällt damit nicht unter die Warnung. Für den Löffel Honig aus dem Glas — im Tee, auf dem Brot, am Schnuller — gilt sie weiterhin.`,
          },
          {
            title: `Warum Erhitzen in der Küche nicht genügt`,
            body: `Die ESPGHAN-Fachgesellschaft benennt die Bedingung, unter der Honig vor 12 Monaten überhaupt in Frage kommt: nur wenn die hitzeresistenten Sporen von Clostridium botulinum durch eine ausreichende Hochdruck- und Hochtemperaturbehandlung inaktiviert wurden, „as used in industry" — also im industriellen Verfahren [3]. Das BfR hält für Botulismus allgemein fest, dass das Aufkochen eines Lebensmittels auf 100 °C die Neurotoxine inaktiviert [1]. Das betrifft die fertigen Gifte, nicht die hitzeresistenten Sporen. Honig zu Hause zu erwärmen ist deshalb keine Lösung.`,
          },
          {
            title: `Wie häufig Botulismus in Deutschland ist`,
            body: `In Deutschland werden in der Regel weniger als zehn Botulismus-Fälle pro Jahr gemeldet [1]. Ein Großteil der gemeldeten Fälle beim Menschen geht auf selbst eingekochte Konserven zurück [1] — nicht auf Honig. Die Zahl umfasst alle Formen von Botulismus; eine gesonderte Zahl für den Säuglingsbotulismus nennt die Quelle nicht. Selten heißt hier allerdings nicht harmlos: das BfR führt das Honigverbot für Kinder unter einem Jahr als eine der wichtigsten Schutzmaßnahmen [1].`,
          },
          {
            title: `Woran sich Botulismus zeigt`,
            body: `Das BfR beschreibt als Symptome „Übelkeit, Durchfall und Verstopfung sowie neurologische Symptome wie Sehstörungen (z. B. Doppelt-Sehen) und Lähmungen bis hin zur Atemlähmung", außerdem Mundtrockenheit sowie Sprech- und Schluckstörungen [1]. Diese Beschreibung gilt für Botulismus allgemein; eine eigene Symptomliste für Säuglinge gibt die Quelle nicht an. Eine spezielle Handlungsanweisung für den Fall, dass ein Baby doch Honig bekommen hat, nennen die hier zitierten Quellen ebenfalls nicht — bei Beschwerden gehört das Kind ärztlich abgeklärt.`,
          },
          {
            title: `Wie Honig in den Beikost-Fahrplan passt`,
            body: `Der erste Brei sollte frühestens mit Beginn des fünften und spätestens mit Beginn des siebten Monats gegeben werden [2]. Honig fällt in dieses Fenster nicht: die Altersgrenze von einem Jahr liegt deutlich dahinter [1][2]. Wer die Beikost begleitend dokumentiert, hat beim Vorsorgetermin eine konkrete Grundlage statt einer Erinnerung — in Mamio lassen sich erste Lebensmittel und Reaktionen mit Datum festhalten.`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Ab wann darf mein Baby Honig essen?`,
            answer: `Reiner Bienenhonig sollte im ersten Lebensjahr nicht gegeben werden [1][2]. Die Empfehlungen nennen die Altersgrenze von einem Jahr, legen aber kein konkretes Startalter danach fest.`,
          },
          {
            question: `Ist Honig in Keksen oder Babygläschen auch verboten?`,
            answer: `Nein. Honig in Fertigprodukten gilt als unbedenklich, weil die Keime durch die ausreichende Erhitzung bei der Herstellung abgetötet werden [2].`,
          },
          {
            question: `Kann ich Honig abkochen, damit er sicher ist?`,
            answer: `Nein. Die Sporen von Clostridium botulinum sind hitzeresistent und gelten nur nach ausreichender Hochdruck- und Hochtemperaturbehandlung im industriellen Verfahren als inaktiviert [3]. Aufkochen auf 100 °C inaktiviert die Neurotoxine, nicht die Sporen [1].`,
          },
          {
            question: `Was ist Säuglingsbotulismus?`,
            answer: `Eine Form des Botulismus, bei der Keime sich wegen der noch fehlenden Darmflora im Darm ansiedeln und dort ihr Nervengift bilden [1][2]. Honig ist dafür eine bekannte Quelle [1].`,
          },
          {
            question: `Mein Baby hat Honig probiert — was jetzt?`,
            answer: `Die hier zitierten amtlichen Quellen nennen für diesen Fall keine eigene Handlungsanweisung. Zeigt dein Baby Beschwerden, lass es ärztlich abklären.`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          {
            id: 1,
            title: `Selten, aber vermeidbar: Fragen und Antworten zum Botulismus`,
            publisher: `BfR — Bundesinstitut für Risikobewertung`,
            year: `2025`,
            url: `https://www.bfr.bund.de/de/fragen_und_antworten_zu_botulismus-70355.html`,
            accessed: `2026-10-23`,
            note: `Stand: 12.11.2025`,
          },
          {
            id: 2,
            title: `Empfehlungen zur Säuglingsernährung`,
            publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`,
            year: `2025`,
            url: `https://www.kindergesundheit-info.de/index.php?id=8924`,
            accessed: `2026-10-23`,
            note: `Stand: 30.11.2025`,
          },
          {
            id: 3,
            title: `Complementary Feeding: A Position Paper by the ESPGHAN Committee on Nutrition`,
            publisher: `Fewtrell M. et al., Journal of Pediatric Gastroenterology and Nutrition 64(1):119–141`,
            year: `2017`,
            url: `https://www.espghan.org/dam/jcr:3d960daa-e2f3-499f-9df9-2da682976cec/2017%20Complementary_Feeding__A_Position_Paper_by_the.21.pdf`,
            accessed: `2026-10-23`,
            note: `international, nicht deutschlandspezifisch`,
          },
        ],
        openQuestions: [],
        disclaimer: `Dieser Artikel ersetzt keine ärztliche Beratung. Die Empfehlungen basieren auf den Leitlinien der genannten Institutionen (Stand: Oktober 2026). Bei Fragen zur Ernährung deines Babys sprich mit deiner Kinderärztin, deinem Kinderarzt oder deiner Hebamme.`,
        ctaText: `Beikost-Start und erste Lebensmittel mit Mamio festhalten`,
      },
    },
  },
};
