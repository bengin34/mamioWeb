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

  'beikost-erstickungsgefahr': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'erstickungsgefahr-beikost',
    },
    locales: {
      de: {
        metaTitle: `Erstickungsgefahr bei Beikost: Was Babys nicht essen | Mamio`,
        metaDescription: `Nüsse, Trauben, Rosinen, Körnerbrot: Welche Lebensmittel laut BIÖG und BfR im ersten Lebensjahr nicht auf den Teller gehören — und was im Notfall zu tun ist.`,
        title: `Erstickungsgefahr bei der Beikost: Was im ersten Jahr nicht auf den Teller gehört`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Kleine, harte Lebensmittel wie Erdnüsse, Johannisbeeren, Heidelbeeren, kleine Trauben oder Rosinen gehören im ersten Lebensjahr nicht auf den Speiseplan [3].`,
          `Auch Brot und Gebäck mit Körnern, Sonnenblumenkernen oder Nüssen zählen dazu [3].`,
          `Nüsse gelangen wegen ihrer Form, ihrer geringen Größe und ihrer öligen Oberfläche leichter in die Luftröhre als andere Lebensmittel [1].`,
          `Gerät ein Nussteil in die Atemwege und entstehen anhaltender Husten oder Atemprobleme, ist der Notarzt zu rufen [1].`,
        ],
        intro: `Im ersten Lebensjahr sollen kleine, harte Lebensmittel nicht auf dem Speiseplan stehen — das Bundesinstitut für Öffentliche Gesundheit nennt ausdrücklich Erdnüsse, Johannisbeeren, Heidelbeeren, kleine Trauben und Rosinen sowie Brot und Gebäck mit Körnern, Sonnenblumenkernen oder Nüssen [3]. Das BfR hält fest, dass Nüsse, insbesondere Erdnüsse, nicht in die Reichweite jüngerer Kinder gehören [1]. Auch bei sehr klein geschnittenem festem Obst und Gemüse besteht die Gefahr, dass es beim Verschlucken in die Luftröhre gelangt [3].`,
        sections: [
          {
            title: `Was im ersten Lebensjahr nicht auf den Teller gehört`,
            body: `Die deutsche Liste ist kurz und konkret. Nicht auf den Speiseplan im ersten Lebensjahr gehören „kleine, und harte Lebensmittel wie Erdnüsse, Johannisbeeren, Heidelbeeren, kleine Trauben oder Rosinen" sowie „Brot sowie Gebäck mit Körnern, Sonnenblumenkernen, Nüssen und Ähnlichem" [3]. Dazu kommt ein Hinweis, der oft überlesen wird: auch bei sehr klein geschnittenem festem Obst und Gemüse besteht die Gefahr, dass es beim Verschlucken in die Luftröhre gelangt [3]. Kleiner schneiden ist also nicht die Lösung, auf die diese Empfehlung hinausläuft.`,
          },
          {
            title: `Warum gerade Nüsse`,
            body: `Nüsse können „aufgrund ihrer Form und geringen Größe sowie öligen Oberfläche leichter in die Luftröhre und die tiefen Bereiche der Luftwege gelangen als andere Lebensmittel" [1]. Das BfR geht weiter: Für Kleinkinder ist das Risiko, Nüsse oder Nussteile zu verschlucken, die dann in die Atemwege gelangen, signifikant höher als das Risiko, Kleinteile von Spielzeug zu verschlucken [1]. Spielzeug unterliegt dafür einer Kennzeichnungspflicht, Nüsse bislang nicht — das BfR empfiehlt deshalb einen Verbraucherhinweis auf Nussverpackungen, insbesondere bei Erdnüssen [1][2].`,
          },
          {
            title: `Was „Fremdkörperaspiration" bedeutet`,
            body: `Der Fachbegriff beschreibt „das ungewollte Eindringen fester Gegenstände in die Atemwege (sich verschlucken)" [2]. Bei Kleinkindern kommt das am häufigsten vor, weil sie generell dazu neigen, Gegenstände in den Mund zu nehmen [2] — Kinder unter vier Jahren tun das laut BfR grundsätzlich gern [1]. Durch die möglicherweise irreversible Behinderung der Atemwege ist die Fremdkörperaspiration ein erhebliches Risiko für die Gesundheit bis hin zum Tod durch Ersticken [2]. Aspirationsunfälle können zu schweren Gesundheitsschäden oder in seltenen Fällen zum Erstickungstod führen [1].`,
          },
          {
            title: `Was die Zahlen hergeben — und was nicht`,
            body: `Aspirationsunfälle werden in Deutschland nicht systematisch erfasst [1]. Die vom BfR angeführten Zahlen stammen von der Deutschen Gesellschaft für Pädiatrische Pneumonologie: Im Zeitraum von 2004 bis 2005 wurden an sechs Kliniken 98 Fremdkörperaspirationen dokumentiert, in mehr als der Hälfte der Fälle (50 Meldungen) hatten Kinder eine ganze Nuss oder Teile davon verschluckt, in 29 dieser Fälle Erdnüsse [1]. In 16 Fällen waren es andere Nahrungsbestandteile wie Karottenstückchen, in zehn Fällen Spielzeugteile [1]. Zur Einordnung: diese Fallserie ist von 2004/2005, umfasst sechs Kliniken und betrifft Kleinkinder — eine eigene Zahl für Säuglinge unter einem Jahr nennt die Quelle nicht.`,
          },
          {
            title: `Nach dem ersten Geburtstag ändert sich weniger als gedacht`,
            body: `Das Netzwerk Gesund ins Leben schreibt für Kleinkinder von einem bis drei Jahren: Das Kind könne fast alles mitessen, aber keine Nüsse — „ganz oder in Stücken" — und auch keine anderen harten Lebensmittelstücke, genannt werden rohe Möhren, sehr kleine Früchte wie Heidelbeeren, Trauben mit Kernen oder Rosinen sowie Fisch mit Gräten; das Kind könne sich daran verschlucken [4]. Die Einschränkung endet also nicht am ersten Geburtstag. Ein Freigabealter, ab dem ganze Nüsse unproblematisch wären, nennt keine der hier zitierten Quellen.`,
          },
          {
            title: `Wie Nüsse trotzdem auf den Tisch kommen`,
            body: `Für Kleinkinder nennt das Netzwerk Gesund ins Leben zwei Formen: „Damit Kleinkinder sich an den Nüssen nicht verschlucken, können Eltern sie entweder in Form von Nussmus oder fein gemahlen anbieten" [4]. Wichtig ist der Zusatz: unverarbeitet sollten Kleinkinder keine gemahlenen Nüsse bekommen, weil sie das feine, trockene Mehl einatmen und sich verschlucken können [4] — gemahlene Nüsse also eingerührt, zum Beispiel in Joghurt oder Haferbrei, nicht pur vom Löffel. Diese Angaben beziehen sich auf Kleinkinder ab einem Jahr; für das erste Lebensjahr gilt die Liste weiter oben [3].`,
          },
          {
            title: `Ruhig essen, unter Aufsicht`,
            body: `Die einzige Situationsregel, die das BfR ausspricht, betrifft Nüsse: Sie „sollten Nüsse ausschließlich in ruhigen Essenssituationen unter Aufsicht von Erwachsenen verzehren" [1], und Nüsse, insbesondere Erdnüsse, gehören nicht in die Reichweite jüngerer Kinder [1]. Beides zielt auf die Alltagssituation, in der es passiert — nebenbei, im Vorbeigehen, ohne dass jemand hinsieht. Wer die Beikost mitschreibt, sieht auch leichter, welche neuen Lebensmittel in welcher Form schon angeboten wurden; in Mamio lassen sich erste Lebensmittel mit Datum festhalten.`,
          },
          {
            title: `Wenn etwas in die Atemwege gerät`,
            body: `Das BfR nennt dafür genau einen Handlungsschritt: „Sollte dennoch ein Nussteil in die Atemwege gelangen und anhaltender Husten oder Atemprobleme entstehen, ist der Notarzt zu rufen" [1]. Erste-Hilfe-Maßnahmen beschreiben die hier zitierten Quellen nicht; wer sie lernen möchte, ist in einem Erste-Hilfe-Kurs für Säuglinge und Kleinkinder richtig. In Deutschland ist der Rettungsdienst über 112 erreichbar.`,
          },
          {
            title: `Was die Empfehlungen offenlassen`,
            body: `Zwei Dinge sagen die deutschen Quellen bewusst nicht. Erstens geben sie keine Schneideregeln — keine Vorgabe, wie Trauben zu halbieren oder Obst zu stückeln wären; die Linie ist der Verzicht im ersten Lebensjahr, und selbst sehr klein geschnittenes festes Obst und Gemüse wird als Risiko benannt [3]. Zweitens nennen sie kein Alter, ab dem harte, kleine Lebensmittel unbedenklich sind. International bleibt es beim Grundsatz: Betreuungspersonen sollen zur sicheren Zubereitung und Fütterung der Beikost beraten werden, auch im Hinblick auf das Verschlucken an großen Nahrungsstücken [5]. Eine Lebensmittelliste gibt die ESPGHAN-Stellungnahme dazu nicht.`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Welche Lebensmittel sind im ersten Lebensjahr wegen Erstickungsgefahr tabu?`,
            answer: `Kleine, harte Lebensmittel wie Erdnüsse, Johannisbeeren, Heidelbeeren, kleine Trauben oder Rosinen sowie Brot und Gebäck mit Körnern, Sonnenblumenkernen oder Nüssen [3].`,
          },
          {
            question: `Darf mein Baby Weintrauben essen, wenn ich sie klein schneide?`,
            answer: `Kleine Trauben stehen auf der Liste der Lebensmittel, die im ersten Lebensjahr nicht auf den Speiseplan gehören [3]. Auch bei sehr klein geschnittenem festem Obst besteht laut derselben Quelle die Gefahr, dass es in die Luftröhre gelangt [3]. Eine Schneideregel, die das Risiko aufhebt, nennen die deutschen Empfehlungen nicht.`,
          },
          {
            question: `Ab wann darf mein Kind ganze Nüsse essen?`,
            answer: `Keine der hier zitierten Quellen nennt ein Freigabealter. Für Kleinkinder von einem bis drei Jahren gilt weiterhin: keine Nüsse ganz oder in Stücken [4]. Als Nussmus oder fein gemahlen und eingerührt sind Nüsse für diese Altersgruppe vorgesehen [4].`,
          },
          {
            question: `Warum sind Nüsse riskanter als Spielzeug-Kleinteile?`,
            answer: `Wegen ihrer Form, geringen Größe und öligen Oberfläche gelangen sie leichter in die Luftröhre und die tiefen Luftwege [1]. Das BfR bewertet das Risiko für Kleinkinder als signifikant höher als bei Spielzeug-Kleinteilen [1].`,
          },
          {
            question: `Mein Baby hat sich verschluckt — wann muss ich den Notarzt rufen?`,
            answer: `Gerät ein Nussteil in die Atemwege und entstehen anhaltender Husten oder Atemprobleme, ist der Notarzt zu rufen [1]. Der Rettungsdienst ist in Deutschland über 112 erreichbar.`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          {
            id: 1,
            title: `Erstickungsgefahr von Kleinkindern durch Nüsse — BfR empfiehlt Verbraucherhinweis auf Verpackungen`,
            publisher: `BfR — Bundesinstitut für Risikobewertung, Presseinformation Nr. 37/2009`,
            year: `2009`,
            url: `https://www.bfr.bund.de/presseinformation/erstickungsgefahr-von-kleinkindern-durch-nuesse/`,
            accessed: `2026-10-23`,
            note: `22.12.2009`,
          },
          {
            id: 2,
            title: `Risiko Erstickungstod bei Kleinkindern durch Nüsse`,
            publisher: `BfR — Bundesinstitut für Risikobewertung, Stellungnahme Nr. 050/2009`,
            year: `2009`,
            url: `https://www.bfr.bund.de/cm/343/risiko_erstickungstod_bei_kleinkindern_durch_nuesse.pdf`,
            accessed: `2026-10-23`,
            note: `10.08.2009`,
          },
          {
            id: 3,
            title: `Empfehlungen zur Säuglingsernährung`,
            publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`,
            year: `2025`,
            url: `https://www.kindergesundheit-info.de/index.php?id=8924`,
            accessed: `2026-10-23`,
            note: `Stand: 30.11.2025`,
          },
          {
            id: 4,
            title: `Sicher Essen mit Kleinkindern (Stand 27.06.2022) und Nüsse für Kleinkinder (Stand 10.10.2025)`,
            publisher: `BLE / Netzwerk Gesund ins Leben`,
            year: `2025`,
            url: `https://www.gesund-ins-leben.de/fuer-familien/fuer-sie-und-ihr-kleinkind/sicher-essen-mit-kleinkindern/`,
            accessed: `2026-10-23`,
            note: `gilt für Kleinkinder von 1 bis 3 Jahren`,
          },
          {
            id: 5,
            title: `Complementary Feeding: A Position Paper by the ESPGHAN Committee on Nutrition`,
            publisher: `Fewtrell M. et al., Journal of Pediatric Gastroenterology and Nutrition 64(1):119–141`,
            year: `2017`,
            url: `https://www.espghan.org/dam/jcr:3d960daa-e2f3-499f-9df9-2da682976cec/2017%20Complementary_Feeding__A_Position_Paper_by_the.21.pdf`,
            accessed: `2026-10-23`,
            note: `international, nicht deutschlandspezifisch; keine Lebensmittelliste`,
          },
        ],
        openQuestions: [],
        disclaimer: `Dieser Artikel ersetzt keine ärztliche Beratung. Die Empfehlungen basieren auf den Leitlinien der genannten Institutionen (Stand: Oktober 2026). Bei Fragen zur Ernährung deines Babys sprich mit deiner Kinderärztin, deinem Kinderarzt oder deiner Hebamme.`,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },
};
