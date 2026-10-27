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
// There is no clinician review step for these pages. They are written by the Mamio
// editorial team and report what the named institutions publish, nothing else, so
// every page carries an editorial byline plus DE_MEDICAL_DISCLAIMER below: no medical
// advice, infant feeding is individual, and a liability exclusion written the way
// German law allows one - the carve-out for intent, gross negligence and harm to
// life, body or health is what keeps such a clause enforceable rather than void
// (BGB 276(3), 309 Nr. 7). `reviewedBy` stays in the schema for the day a clinician
// does sign off; filling it switches the byline to a named reviewer.

// Appended to every German Beikost article. Not legal advice from this repo's side:
// modelled on what German health publishers use, and the Impressum/disclaimer pairing
// should be checked once by a lawyer.
const DE_MEDICAL_DISCLAIMER = `Wichtiger Hinweis: Dieser Artikel wurde redaktionell vom Mamio-Team erstellt. Er gibt wieder, was die unten genannten Institutionen in ihren Leitlinien und Stellungnahmen veröffentlichen, und dient ausschließlich der allgemeinen Information. Er stellt keine medizinische Beratung dar und ersetzt nicht das Gespräch mit einer Kinderärztin, einem Kinderarzt, einer Hebamme oder einer Ernährungsfachkraft. Das Mamio-Team ist keine ärztliche Einrichtung, erstellt keine Diagnosen und erbringt keine Heilbehandlung. Die Ernährung eines Säuglings ist immer eine Einzelfallentscheidung: Alter, Entwicklung, Gewicht, Vorerkrankungen, Allergien und Medikamente können dazu führen, dass die hier beschriebenen allgemeinen Empfehlungen für dein Kind nicht gelten oder von deiner kinderärztlichen Praxis anders gewichtet werden. Entscheidungen über die Ernährung deines Kindes solltest du deshalb nur gemeinsam mit ihr treffen. Leitlinien werden regelmäßig überarbeitet; maßgeblich ist stets die jeweils aktuelle Fassung der genannten Quelle, das angegebene Datum bezieht sich auf den Stand unserer Prüfung. Eine Haftung für Schäden, die aus der Anwendung dieser allgemeinen Informationen entstehen, wird nicht übernommen. Unberührt bleibt die Haftung für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei akuten Beschwerden wende dich an deine kinderärztliche Praxis, den ärztlichen Bereitschaftsdienst (116 117) oder in Notfällen an den Rettungsdienst (112).`

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
        disclaimer: DE_MEDICAL_DISCLAIMER,
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
        disclaimer: DE_MEDICAL_DISCLAIMER,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },

  'beikost-allergene': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'allergene-einfuehren-beikost',
    },
    locales: {
      de: {
        metaTitle: `Allergene in der Beikost einführen: was gilt | Mamio`,
        metaDescription: `Nicht meiden, sondern einführen: Was die S3-Leitlinie Allergieprävention zu Hühnerei, Erdnuss, Fisch und Milch in der Beikost sagt — und wo sie international abweicht.`,
        title: `Allergene in der Beikost einführen: Was die deutschen Empfehlungen sagen`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Potente Nahrungsmittelallergene im ersten Lebensjahr zu meiden, soll nicht erfolgen — für einen präventiven Effekt gibt es keine Belege [1].`,
          `Hühnerei gehört durcherhitzt in die Beikost: verbacken oder hartgekocht, nicht roh und auch kein Rührei [1].`,
          `Erdnuss ist die zurückhaltendste Empfehlung der Leitlinie: erwägbar nur bei Säuglingen mit atopischer Dermatitis in Familien, die ohnehin regelmäßig Erdnüsse essen — und erst nach Ausschluss einer Erdnussallergie [1].`,
          `Beikoststart: frühestens ab Beginn des 5., spätestens ab Beginn des 7. Lebensmonats — auch bei erhöhtem Allergierisiko [1][3].`,
        ],
        intro: `Die deutsche Leitlinie dreht die alte Logik um: „Für einen präventiven Effekt einer diätetischen Restriktion durch Meidung potenter Nahrungsmittelallergene im ersten Lebensjahr gibt es keine Belege. Sie soll deshalb nicht erfolgen" — mit dem höchsten Empfehlungsgrad A [1]. Das Bundesinstitut für Öffentliche Gesundheit formuliert es für Eltern knapper: potenziell allergene Lebensmittel im ersten Lebensjahr auszuschließen ist nicht sinnvoll [2]. Stattdessen gilt Vielfalt als das Schutzprinzip [1].`,
        sections: [
          {
            title: `Nicht meiden, sondern einführen`,
            body: `Die S3-Leitlinie Allergieprävention hält als Statement fest: „Es gibt Hinweise darauf, dass die Vielfalt der Ernährung des Kindes im ersten Lebensjahr einen protektiven Effekt auf die Entwicklung atopischer Erkrankungen hat" [1]. Konkret gehört dazu, „dass Fisch und eine begrenzte Menge (bis zu 200 ml pro Tag) Milch bzw. Naturjoghurt sowie Hühnerei im Rahmen der Beikost eingeführt werden" [1]. Das BIÖG übersetzt das in den Alltag: ab und zu Fisch oder Hühnerei und bis zu 200 ml Milch — in Form des Milch-Getreide-Breis — oder Joghurt am Tag [2]. Die Beikost-Empfehlungen der Leitlinie wurden im starken Konsens verabschiedet [1].`,
          },
          {
            title: `Wann die Beikost anfangen soll`,
            body: `„Abhängig von der Bereitschaft des Säuglings" soll mit der Beikost „frühestens ab Beginn des fünften und spätestens ab Beginn des siebten Lebensmonats" begonnen werden — Empfehlungsgrad B [1]. Das Netzwerk Gesund ins Leben nennt dasselbe Fenster und rechnet es um: nicht vor dem Alter von 17 Wochen und nicht später als mit 26 Wochen [3]. Wichtig für Familien mit Allergien in der Verwandtschaft: Auch bei Kindern mit erhöhtem Allergierisiko soll Beikost je nach individueller Bereitschaft in genau diesem Zeitfenster eingeführt werden [3] — ein Aufschieben ist also nicht vorgesehen.`,
          },
          {
            title: `Hühnerei: durcherhitzt, nicht roh`,
            body: `Die Empfehlung ist eindeutig und an die Zubereitung gebunden: Zur Prävention der Hühnereiallergie soll „durcherhitztes (zum Beispiel verbackenes oder hartgekochtes), aber nicht „rohes" Hühnerei (auch kein Rührei)" mit der Beikost eingeführt und regelmäßig gegeben werden — Empfehlungsgrad B [1]. Als durcherhitzte Form nennt die Leitlinie ausreichend durchgebackene eihaltige Backwaren wie Hartkekse, Brot- und Brötchenspezialitäten, Muffins und Kuchen [1]. Nicht geeignet sind rohes beziehungsweise nicht durcherhitztes Ei und ausdrücklich auch Rührei, weichgekochtes Ei, Schaumküsse und Makronen [1]. Die Begründung: nicht ausreichend erhitztes Ei war nicht mit einem Nutzen, aber mit Risiken hinsichtlich schwerer allergischer Reaktionen verbunden [1]. Nach erfolgreicher Einführung soll Ei in ausreichend erhitzter Form regelmäßig gegeben werden [1].`,
          },
          {
            title: `Erdnuss: die zurückhaltendste Empfehlung`,
            body: `Hier geht die Leitlinie bewusst nicht weit. Erdnuss ist eine „kann"-Empfehlung mit Grad C. Sie gilt für Säuglinge mit atopischer Dermatitis „in Familien mit regelmäßigem Erdnusskonsum": dort kann im Zuge der Beikost-Einführung erwogen werden, Erdnussprodukte „in altersgerechter Form (zum Beispiel Erdnussbutter)" einzuführen und regelmäßig weiter zu geben [1]. Davor steht eine Bedingung mit Grad A: „Insbesondere bei Säuglingen mit moderater bis schwerer AD soll zunächst eine Erdnuss-Allergie ausgeschlossen werden" [1]. Das BIÖG nennt dafür den negativen Erdnuss-Allergie-Test und bittet Eltern, solche Maßnahmen unbedingt vorher in der kinderärztlichen Praxis zu besprechen [2]. Und „altersgerechte Form" ist kein Stilmittel: die Leitlinie schreibt wegen der Aspirationsgefahr ausdrücklich keine ganzen Erdnüsse und keine Stücke [1].`,
          },
          {
            title: `Wo Deutschland international abweicht`,
            body: `Die Leitlinie sagt selbst, dass die Erdnuss-Empfehlung „für den deutschsprachigen Raum zurückhaltend formuliert" wurde [1], und nennt den Grund: „Die Empfehlung zur gezielten Einführung von Erdnussprodukten für Länder mit hoher Erdnussallergie-Prävalenz wird dagegen nicht übernommen, da Deutschland nicht als solches einzuordnen ist" [1]. International sieht es anders aus. Die ESPGHAN-Stellungnahme hält fest, dass allergene Lebensmittel eingeführt werden können, sobald die Beikost beginnt — jederzeit nach vier Monaten [4]. Für Säuglinge mit hohem Erdnussallergie-Risiko, dort definiert als schweres Ekzem, Hühnereiallergie oder beides, empfiehlt sie die Einführung von Erdnuss zwischen 4 und 11 Monaten nach Beurteilung durch entsprechend geschulte Fachpersonen [4]. Der Auslöser und die Stärke unterscheiden sich also: in Deutschland atopische Dermatitis plus Erdnusskonsum in der Familie und ein „kann erwogen werden", international ein Risikoprofil und ein „should" [1][4].`,
          },
          {
            title: `Stillen, Schwangerschaft und die erste Woche`,
            body: `Für den Zeitraum der ersten 4 bis 6 Monate soll nach Möglichkeit ausschließlich gestillt werden, und auch mit Einführung von Beikost soll weitergestillt werden — beides Grad A [1]. Diätetische Restriktionen, also das Meiden potenter Nahrungsmittelallergene, sollen während Schwangerschaft oder Stillzeit aus Gründen der Allergieprävention nicht erfolgen, ebenfalls Grad A [1]; für eine solche Empfehlung gibt es laut BIÖG keinen wissenschaftlichen Beleg [2]. Eine eigene Empfehlung gilt für die ersten Lebenstage: „Ein Zufüttern von kuhmilchbasierter Formulanahrung in den ersten Lebenstagen sollte bei Stillwunsch der Mutter vermieden werden", Grad B [1].`,
          },
          {
            title: `Was zur Allergieprävention nichts bringt`,
            body: `Die Leitlinie ist auch bei dem deutlich, was nicht hilft: Sojabasierte Säuglingsnahrungen sind zum Zweck der Allergieprävention nicht geeignet und sollen folglich nicht zu diesem Zweck gegeben werden, Grad A [1]. Für andere Tiermilchen — Ziegenmilch, auch nicht als Basis von Säuglingsnahrungen, Schafs- oder Stutenmilch — gibt es keine Belege für eine allergiepräventive Wirkung; sie sollten dafür ebenfalls nicht gegeben werden, Grad B [1]. Diese Aussagen beziehen sich ausdrücklich auf den Zweck der Allergieprävention, nicht auf jede andere Frage zur Säuglingsernährung.`,
          },
          {
            title: `Was die Empfehlungen offenlassen`,
            body: `Drei Dinge findet man in den deutschen Quellen nicht. Es gibt kein Einführungsschema — keine Reihenfolge der Allergene, keine Wartezeit zwischen zwei neuen Lebensmitteln. Es gibt keine Mengenangaben für Ei oder Erdnussbutter; die Leitlinie sagt „regelmäßig", ohne Gramm oder Löffel zu nennen [1]. Und Gluten kommt in den hier zitierten deutschen Allergie-Empfehlungen nicht als eigener Punkt vor; international wird ein Fenster zwischen 4 und 12 Monaten genannt, wobei große Mengen in den ersten Wochen nach der Einführung und später im Säuglingsalter vermieden werden sollten [4]. Wer festhält, welches neue Lebensmittel wann und in welcher Form angeboten wurde, hat beim nächsten Termin eine Grundlage statt einer Erinnerung — in Mamio lassen sich erste Lebensmittel mit Datum notieren.`,
          },
          {
            title: `Stand der Leitlinie`,
            body: `Die zitierten Empfehlungen stammen aus der S3-Leitlinie Allergieprävention, AWMF-Registernummer 061-016; das Dokument trägt den Stand 28. November 2021 und erschien 2022 in der Zeitschrift Allergologie [1]. Das BIÖG führt sie als „Update 2022" mit der Angabe „gültig bis 1.1.2026" [2]. Wer sich auf eine Einzelempfehlung stützt, sollte deshalb prüfen, ob im AWMF-Register inzwischen eine neuere oder verlängerte Fassung steht — und Fragen zum eigenen Kind ohnehin in der kinderärztlichen Praxis klären [2].`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Soll ich Allergene im ersten Lebensjahr weglassen?`,
            answer: `Nein. Die S3-Leitlinie sagt mit Empfehlungsgrad A, dass eine Meidung potenter Nahrungsmittelallergene im ersten Lebensjahr nicht erfolgen soll, weil es für einen präventiven Effekt keine Belege gibt [1]. Das BIÖG formuliert es als „nicht sinnvoll" [2].`,
          },
          {
            question: `Wie soll ich Hühnerei anbieten?`,
            answer: `Durcherhitzt — zum Beispiel verbacken oder hartgekocht — und dann regelmäßig [1]. Rohes oder nicht durcherhitztes Ei wird zur Prävention nicht empfohlen, einschließlich Rührei, weichgekochtem Ei, Schaumküssen und Makronen [1].`,
          },
          {
            question: `Soll mein Baby Erdnussbutter bekommen?`,
            answer: `Die Leitlinie nennt das nur für Säuglinge mit atopischer Dermatitis in Familien mit regelmäßigem Erdnusskonsum, als „kann erwogen werden" mit Grad C [1]. Insbesondere bei moderater bis schwerer atopischer Dermatitis soll vorher eine Erdnussallergie ausgeschlossen werden [1]; das BIÖG nennt dafür einen negativen Erdnuss-Allergie-Test und das Gespräch in der kinderärztlichen Praxis [2].`,
          },
          {
            question: `Ganze Erdnüsse oder Nussstücke — geht das?`,
            answer: `Nein. Die Leitlinie schreibt „altersgerechte Form" und nennt wegen der Aspirationsgefahr ausdrücklich keine ganzen Erdnüsse und keine Stücke [1].`,
          },
          {
            question: `Soll ich die Beikost später anfangen, wenn es in der Familie Allergien gibt?`,
            answer: `Nein. Auch bei Kindern mit erhöhtem Allergierisiko soll Beikost je nach individueller Bereitschaft frühestens mit Beginn des 5. und spätestens mit Beginn des 7. Monats eingeführt werden [3].`,
          },
          {
            question: `In welcher Reihenfolge soll ich die Allergene einführen?`,
            answer: `Dazu gibt es in den hier zitierten deutschen Empfehlungen kein Schema — keine Reihenfolge und keine Wartezeiten zwischen neuen Lebensmitteln. Genannt wird das Prinzip Vielfalt im ersten Lebensjahr [1][2].`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          {
            id: 1,
            title: `S3-Leitlinie Allergieprävention (Kopp M.V., Muche-Borowski C., Abou-Dakn M. et al.)`,
            publisher: `DGAKI/DGKJ u. a.; Allergologie 45(3):153–194, Dustri-Verlag; AWMF-Registernr. 061-016`,
            year: `2022`,
            url: `https://archiv.dgaki.de/wp-content/uploads/2023/08/Kopp-22-S3-Leitlinie-Allergiepraevention.pdf`,
            accessed: `2026-10-23`,
            note: `Dokument-Stand: 28. November 2021`,
          },
          {
            id: 2,
            title: `Allergien bei Kindern vorbeugen`,
            publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`,
            year: `2025`,
            url: `https://www.kindergesundheit-info.de/themen/risiken-vorbeugen/allergievorbeugung/`,
            accessed: `2026-10-23`,
            note: `führt die S3-Leitlinie als Update 2022, gültig bis 1.1.2026`,
          },
          {
            id: 3,
            title: `Beikosteinführung — Ernährung und Bewegung von Säuglingen und stillenden Frauen, Handlungsempfehlungen`,
            publisher: `BLE / Netzwerk Gesund ins Leben`,
            year: `2024`,
            url: `https://www.gesund-ins-leben.de/fuer-fachkreise/bestens-unterstuetzt-durchs-1-lebensjahr/handlungsempfehlungen/beikost/beikosteinfuehrung/`,
            accessed: `2026-10-23`,
            note: `Stand 19.08.2016, Teilaktualisierung 2024`,
          },
          {
            id: 4,
            title: `Complementary Feeding: A Position Paper by the ESPGHAN Committee on Nutrition`,
            publisher: `Fewtrell M. et al., Journal of Pediatric Gastroenterology and Nutrition 64(1):119–141`,
            year: `2017`,
            url: `https://www.espghan.org/dam/jcr:3d960daa-e2f3-499f-9df9-2da682976cec/2017%20Complementary_Feeding__A_Position_Paper_by_the.21.pdf`,
            accessed: `2026-10-23`,
            note: `international, nicht deutschlandspezifisch`,
          },
        ],
        openQuestions: [],
        disclaimer: DE_MEDICAL_DISCLAIMER,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },

  'beikost-salz-zucker': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'salz-und-zucker-in-der-beikost',
    },
    locales: {
      de: {
        metaTitle: `Salz und Zucker in der Beikost: was gilt | Mamio`,
        metaDescription: `Kein Salzzusatz, kein starker Süßgeschmack, keine süßen Getränke: Was die Handlungsempfehlungen zu Salz und Zucker im ersten Lebensjahr sagen — und was sie offenlassen.`,
        title: `Salz und Zucker in der Beikost: Was die Empfehlungen sagen`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Bei Fertigbreien sollten „ein Zusatz von Salz und ein starker Süßgeschmack" vermieden werden [1].`,
          `Süße Getränke sollten vermieden werden; das beste Getränk für Säuglinge ist Wasser [2].`,
          `Gesüßte Tees und Fruchtsäfte in der Flasche: davon wird dringend abgeraten, wegen des Kariesrisikos [2].`,
          `Das amtliche Rezept für den ersten Brei enthält weder Salz noch Zucker [4]; international gilt, dass Salz- und Zuckerzusatz in der Beikost nicht empfohlen wird [6].`,
        ],
        intro: `Die deutschen Handlungsempfehlungen nennen Salz und Zucker nicht als Verbotsliste, sondern an drei Stellen: bei der Auswahl von Fertigprodukten sollen „ein Zusatz von Salz und ein starker Süßgeschmack" vermieden werden [1], bei Getränken gilt „Süße Getränke sollten vermieden werden" [2], und das amtliche Rezept für den ersten Brei kommt ohne beides aus [4]. Die ESPGHAN-Stellungnahme formuliert es als Grundsatz: Salz- und Zuckerzusatz in der Beikost solle unterbleiben [6].`,
        sections: [
          {
            title: `Was bei Fertigbrei im Glas zählt`,
            body: `Die Handlungsempfehlungen geben für gekaufte Beikost konkrete Auswahlkriterien. Erstens: „Produkte mit Lebensmittelzutaten, die den Empfehlungen für die Selbstzubereitung entsprechen, sollten bevorzugt werden" [1]. Zweitens: „Ein Zusatz von Salz und ein starker Süßgeschmack sollten vermieden werden" [1]. Das ist die klarste deutsche Aussage zu Salz und Zucker in der Beikost — sie steht als Einkaufskriterium da, nicht als Verbot, und sie betrifft beides gleichzeitig.`,
          },
          {
            title: `Das amtliche Rezept enthält nichts davon`,
            body: `Wie wenig vorgesehen ist, zeigt der Blick auf den Gemüse-Kartoffel-Fleisch-Brei, den das Netzwerk Gesund ins Leben als ersten Brei empfiehlt. Die vollständige Zutatenliste lautet: 100 g geputztes Gemüse, 50 g Kartoffeln ohne Schale (oder Nudeln, Reis, anderes Getreide, gekocht), 30 g Fleisch oder Fisch, 1,5 EL Fruchtsaft oder Obstpüree als Nachtisch und 1 EL Öl [4]. Salz und Zucker kommen darin nicht vor — auch nicht als optionale Zutat. Das ist eine Beobachtung über das Rezept, keine Verbotsaussage der Quelle.`,
          },
          {
            title: `Getränke: hier ist die Empfehlung am deutlichsten`,
            body: `„Süße Getränke sollten vermieden werden", heißt es in den Handlungsempfehlungen zu Getränken [2]. Und: „Das beste Getränk für Säuglinge ist Wasser" [2]. Angeboten werden sollen Getränke mit der Einführung des dritten Beikostbreis, zusätzlich zu Muttermilch oder Säuglings(milch)nahrung [2]. Deutlich wird die Quelle beim Dauernuckeln: „Vom Dauergebrauch der Flasche und der Flasche zum Einschlafen sowie von zuckerhaltigen Getränken (gesüßte Tees, Fruchtsäfte) wird daher dringend abgeraten" [2].`,
          },
          {
            title: `Warum Zucker beim Trinken besonders zählt`,
            body: `Der Grund ist der Dauerkontakt mit den Zähnen: „Ein ständiges Umspülen der Zähne mit zuckerhaltigen Getränken, einschließlich Muttermilch und Säuglings(milch)nahrung, erhöht das Risiko für Zahnkaries (insbesondere Frontzahnkaries)" [2] — die Quelle nennt hier ausdrücklich auch Muttermilch und Säuglingsnahrung, es geht um das ständige Umspülen, nicht um die Mahlzeit. Daneben steht ein zweiter Befund: „Der regelmäßige Verzehr von zuckerhaltigen Getränken im Säuglingsalter war in Beobachtungsstudien mit einem erhöhten Risiko für Übergewicht und Adipositas im Schulalter assoziiert" [2]. Assoziiert, in Beobachtungsstudien — so steht es dort, und so ist es zu lesen.`,
          },
          {
            title: `Gezuckerte Milchprodukte im ersten Jahr`,
            body: `Das Bundesinstitut für Öffentliche Gesundheit führt unter den Lebensmitteln, die im ersten Lebensjahr noch nicht auf den Speiseplan gehören, auch „zusätzliche Milchprodukte wie zum Beispiel Joghurts, Dickmilch oder Fruchtquark" [5]. Die Begründung ist doppelt: „Sie sind meist mit Zucker versetzt und fördern die Entwicklung von Karies", und sie erhöhen ungünstig die Eiweißaufnahme und verdrängen andere Lebensmittel wie Obst und Gemüse aus der Ernährung [5].`,
          },
          {
            title: `Nach dem ersten Geburtstag: sparsam`,
            body: `Für Kleinkinder von einem bis drei Jahren wird Salz und Zucker nicht verboten, sondern eingeordnet. In der empfohlenen Kleinkind- und Familienernährung stehen „sparsam: Zucker und Süßigkeiten, (Jod)Salz, Fette mit hohem Anteil gesättigter Fettsäuren sowie Snackprodukte" [3], bei den Getränken „am besten Wasser oder andere ungesüßte/zuckerfreie Getränke" [3]. Interessant für Eltern, die Saft für harmloser halten als Süßigkeiten: „Der Zuckeranteil naturbelassener (z. B. in Fruchtsäften, Honig) und industriell erzeugter Nahrungsmittel stellt zudem für die Zähne des Kleinkindes ein Kariesrisiko dar" [3] — für Honig gilt im ersten Lebensjahr ohnehin eine eigene Einschränkung.`,
          },
          {
            title: `Was Geschmack damit zu tun hat`,
            body: `Die ESPGHAN-Stellungnahme hält nicht nur fest, dass Salz- und Zuckerzusatz in der Beikost nicht empfohlen wird [6], sondern berichtet auch, woran das hängt. In einer zitierten Untersuchung bevorzugten im Alter von sechs Monaten nur jene Säuglinge salzige Lösungen, die vorher stärkehaltige Tischkost bekommen hatten, und dieselben Kinder leckten im Vorschulalter häufiger Salz von der Oberfläche von Lebensmitteln [6]. Dazu passt ein praktischer Hinweis derselben Quelle: ein Säugling braucht einen neuen Geschmack manchmal acht bis zehn Mal, bevor er ihn annimmt [6] — Geschmack ohne Salz und Zucker ist also eher eine Frage der Wiederholung als der Würze.`,
          },
          {
            title: `Was die Empfehlungen offenlassen`,
            body: `Zwei Lücken sind wichtig. Erstens gibt es in den hier geöffneten deutschen Quellen keinen Satz, der wörtlich sagt, selbst gekochte Beikost dürfe im ersten Lebensjahr kein Salz enthalten — es gibt das Fertigprodukt-Kriterium [1], das salzfreie Rezept [4], die Kleinkind-Einordnung „sparsam" [3] und den internationalen Grundsatz [6]. Zweitens nennt keine der geöffneten Quellen Mengen: keine Milligramm Natrium, kein Gramm Zucker, keine Tagesobergrenze für Säuglinge. Wer wissen will, wie viel in einem Produkt steckt, bleibt bei der Zutatenliste und dem Nährwertfeld. Wer die eingeführten Lebensmittel mitschreibt, sieht leichter, wo gesüßte Produkte sich eingeschlichen haben — in Mamio lassen sich erste Lebensmittel mit Datum festhalten.`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Darf ich den Babybrei salzen?`,
            answer: `Die Handlungsempfehlungen nennen „ein Zusatz von Salz" als etwas, das bei Fertigprodukten vermieden werden sollte [1], und das amtliche Rezept für den ersten Brei enthält kein Salz [4]. International wird vom Salzzusatz in der Beikost abgeraten [6]. Eine deutsche Vorgabe, die den Salzzusatz im selbst gekochten Brei wörtlich verbietet, findet sich in den hier zitierten Quellen nicht.`,
          },
          {
            question: `Darf mein Baby Saft trinken?`,
            answer: `Fruchtsäfte werden unter den zuckerhaltigen Getränken genannt, von denen in der Flasche dringend abgeraten wird [2]. Das beste Getränk für Säuglinge ist Wasser [2]. Im Rezept für den ersten Brei sind 1,5 EL Fruchtsaft oder Obstpüree als Nachtisch vorgesehen [4] — das ist eine Breizutat, kein Getränk.`,
          },
          {
            question: `Warum ist Zucker in Getränken schlimmer als im Essen?`,
            answer: `Weil die Zähne ständig umspült werden: Das erhöht laut Handlungsempfehlungen das Risiko für Zahnkaries, insbesondere Frontzahnkaries — ausdrücklich auch bei Muttermilch und Säuglingsnahrung aus der Dauerflasche [2].`,
          },
          {
            question: `Wie viel Salz oder Zucker darf ein Säugling am Tag?`,
            answer: `Keine der hier zitierten Quellen nennt eine Menge für Säuglinge. Die Empfehlungen sind qualitativ formuliert: Zusatz vermeiden [1], süße Getränke vermeiden [2], im Kleinkindalter sparsam [3].`,
          },
          {
            question: `Schmeckt dem Baby ungesalzenes Essen überhaupt?`,
            answer: `Die ESPGHAN-Stellungnahme weist darauf hin, dass ein Säugling einen neuen Geschmack manchmal acht bis zehn Mal braucht, bevor er ihn annimmt [6]. Eine Vorliebe für Salziges zeigte sich in einer dort zitierten Untersuchung vor allem bei Säuglingen, die bereits stärkehaltige Tischkost bekommen hatten [6].`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          { id: 1, title: `Abfolge und Auswahl der Beikost — Handlungsempfehlungen`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2024`, url: `https://www.gesund-ins-leben.de/fuer-fachkreise/bestens-unterstuetzt-durchs-1-lebensjahr/handlungsempfehlungen/beikost/abfolge-und-auswahl-der-beikost/`, accessed: `2026-10-23`, note: `Stand 19.08.2016, Teilaktualisierung 2024` },
          { id: 2, title: `Getränke (ergänzende Flüssigkeitszufuhr) — Handlungsempfehlungen`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2016`, url: `https://www.gesund-ins-leben.de/fuer-fachkreise/bestens-unterstuetzt-durchs-1-lebensjahr/handlungsempfehlungen/beikost/getraenke-ergaenzende-fluessigkeitszufuhr/`, accessed: `2026-10-23`, note: `Stand 19.08.2016` },
          { id: 3, title: `Ernährungsweise — Handlungsempfehlungen Kleinkindalter`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2022`, url: `https://www.gesund-ins-leben.de/fuer-fachkreise/ernaehrung-und-bewegung-fuer-kleinkinder/handlungsempfehlungen/ernaehrung/ernaehrungsweise/`, accessed: `2026-10-23`, note: `gilt für Kleinkinder von 1 bis 3 Jahren` },
          { id: 4, title: `Gemüse-Kartoffel-Fleisch-Brei — Rezept und Zubereitung`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2026`, url: `https://www.gesund-ins-leben.de/fuer-familien/das-1-lebensjahr/brei-selbst-kochen/gemuese-kartoffel-fleisch-brei/`, accessed: `2026-10-23`, note: `Zutatenliste ohne Salz und Zucker` },
          { id: 5, title: `Empfehlungen zur Säuglingsernährung`, publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`, year: `2025`, url: `https://www.kindergesundheit-info.de/index.php?id=8924`, accessed: `2026-10-23`, note: `Stand: 30.11.2025` },
          { id: 6, title: `Complementary Feeding: A Position Paper by the ESPGHAN Committee on Nutrition`, publisher: `Fewtrell M. et al., Journal of Pediatric Gastroenterology and Nutrition 64(1):119–141`, year: `2017`, url: `https://www.espghan.org/dam/jcr:3d960daa-e2f3-499f-9df9-2da682976cec/2017%20Complementary_Feeding__A_Position_Paper_by_the.21.pdf`, accessed: `2026-10-23`, note: `international, nicht deutschlandspezifisch` },
        ],
        openQuestions: [],
        disclaimer: DE_MEDICAL_DISCLAIMER,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },

  'beikost-nitrat': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'nitrat-in-der-beikost',
    },
    locales: {
      de: {
        metaTitle: `Nitrat in der Beikost: Spinat, Rote Bete & Co | Mamio`,
        metaDescription: `Warum nitratreiches Gemüse für Säuglinge ein Thema ist, was Wärme damit zu tun hat und was das BfR zu Spinat, Lagerung und Methämoglobinämie sagt.`,
        title: `Nitrat in der Beikost: Was bei Spinat und anderem Gemüse gilt`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Die höchsten Nitratgehalte stecken in Blattgemüse: Rucola, Feldsalat, andere Blattsalate und Spinat [1].`,
          `Problematisch ist nicht das Nitrat selbst, sondern Nitrit — und die Umwandlung wird durch Wärme gefördert [1].`,
          `Zubereitetes Gemüse, insbesondere Spinat, sollte nicht längere Zeit warmgehalten werden; Reste schnell kühlen und im Kühlschrank aufbewahren [1].`,
          `Nitrit kann Hämoglobin in Methämoglobin umwandeln, das keinen Sauerstoff transportiert; Säuglinge in den ersten Lebensmonaten sind besonders gefährdet [1].`,
        ],
        intro: `Nitrat selbst gilt als gesundheitlich relativ unbedenklich — zum Thema wird es, weil Bakterien es in Nitrit umwandeln können, und diese Umwandlung wird durch Wärme gefördert [1]. Nitrit kann den roten Blutfarbstoff Hämoglobin in Methämoglobin umwandeln, das keinen Sauerstoff transportieren kann [1]. Deshalb dreht sich die Nitrat-Frage in der Beikost weniger um ein Gemüseverbot als um Auswahl, Abwechslung und Umgang mit Resten [1][3].`,
        sections: [
          {
            title: `Welches Gemüse viel Nitrat enthält`,
            body: `„Die höchsten Gehalte werden in Blattgemüse wie Rucola, Feldsalat und anderen Blattsalaten sowie Spinat gemessen", schreibt das BfR [1]. „Auch Radieschen, frische Küchenkräuter und Kohlrabi weisen häufig hohe Nitratgehalte auf" [1]. Zur Einordnung die Gegenseite: „Im Vergleich dazu sind die Gehalte in Frucht- und Knollengemüsen wie Tomaten oder Kartoffeln sowie in Getreideprodukten niedriger" [1]. Generell weisen pflanzliche Lebensmittel höhere Nitratgehalte auf als tierische [1]. Rote Bete gehört zu dem Gemüse, das Eltern in diesem Zusammenhang oft nennen — in der hier geöffneten BfR-Liste wird sie nicht eigens aufgeführt; genannt werden Blattgemüse, Radieschen, Küchenkräuter und Kohlrabi [1].`,
          },
          {
            title: `Warum Wärme das Problem ist`,
            body: `Der Mechanismus steht in zwei Sätzen: „Mikroorganismen können Nitrat im Lebensmittel zu Nitrit umwandeln. Diese Umwandlung wird durch Wärme gefördert" [1]. Daraus folgen die praktischen Hinweise des BfR: „Nitratreiche Lebensmittel sollten daher gekühlt gelagert werden. Zubereitetes Gemüse, insbesondere z. B. Spinat, sollte nicht längere Zeit warmgehalten werden" [1], und „Reste sollten schnell gekühlt und bis zum Verzehr im Kühlschrank aufbewahrt werden" [1]. Beachte die genaue Formulierung: es geht um längeres Warmhalten und um Lagerung. Ein Satz, der das Aufwärmen von Babybrei grundsätzlich verbietet, steht in der Quelle nicht.`,
          },
          {
            title: `Was Nitrit im Körper macht`,
            body: `„Nitrit kann den roten Blutfarbstoff Hämoglobin in Methämoglobin umwandeln, das im Gegensatz zu Hämoglobin keinen Sauerstoff transportieren kann (Methämoglobinämie)" [1]. Die Folge: „Die dadurch verminderte Kapazität zum Sauerstofftransport im Blut kann zu einer Sauerstoffunterversorgung (Hypoxie) von Körpergeweben führen" [1]. Je nach Anteil des Methämoglobins nennt das BfR zunächst Müdigkeit und Kopfschmerzen, bei höherem Anteil eine bläuliche Verfärbung der Haut und der sichtbaren Schleimhäute (Zyanose) [1]. Die Umwandlung von Nitrat zu Nitrit passiert auch im Körper selbst, vor allem in der Mundhöhle und im Magen, durch bakterielle Enzyme [1].`,
          },
          {
            title: `Warum Säuglinge empfindlicher sind`,
            body: `Das BfR nennt zwei Gründe. Erstens haben Säuglinge eine niedrige Aktivität des Enzyms, „das Methämoglobin wieder in Hämoglobin umwandelt" [1]. Zweitens haben sie ein erhöhtes Risiko für bakterielle Darminfektionen, „die wiederum zu einer vermehrten Nitritbildung führen können" [1]. Besonders gefährdet sind „Säuglinge in den ersten Lebensmonaten, in denen sie aber üblicherweise mit Milch (Muttermilch bzw. Säuglingsmilchnahrung) ernährt werden" [1] — in der Zeit also, in der Gemüse ohnehin noch nicht auf dem Teller liegt.`,
          },
          {
            title: `Wie viel Spinat an einem Tag`,
            body: `Hier ist die Quelle präzise und die Altersangabe wichtig: „Säuglinge und Kleinkinder im Alter von 1 bis 3 Jahren, die an einem Tag mehr als eine Spinatmahlzeit mit hohem Nitratgehalt verzehren, können manchmal eine Aufnahmemenge erreichen, bei der ein erhöhtes Risiko für eine Methämoglobinämie nicht ausgeschlossen werden kann" [1]. Das bezieht sich auf die EFSA-Bewertung von 2010, nach der die Nitratgehalte der genannten Gemüsearten „für die meisten Kinder gesundheitlich unbedenklich" sind, für Kinder mit mehr als einer Portion Spinat am Tag aber ein gesundheitliches Risiko bestehen könnte [1].`,
          },
          {
            title: `Bei Magen-Darm-Infekt kein Spinat`,
            body: `Diese Einschränkung ist konkret und wird oft überlesen: „Kinder, die an bakteriellen Magen-Darm-Infektionen leiden, sollen dem EFSA-Gutachten zufolge daher keinen Spinat essen" [1]. Der Grund steht weiter oben im Mechanismus: bakterielle Darminfektionen können zu vermehrter Nitritbildung führen [1].`,
          },
          {
            title: `Höchstgehalte und was sie abdecken`,
            body: `„In der Verordnung (EU) 2023/915 über Höchstgehalte für bestimmte Kontaminanten in Lebensmitteln sind Höchstgehalte für Nitrate in bestimmten Arten von Blattgemüsen festgelegt" [1]. Dabei werden Einflüsse wie Erntezeitpunkt und Anbauart berücksichtigt, indem unterschiedliche Werte gelten [1]. Konkrete Zahlenwerte nennt dieser Artikel nicht — aus den hier geöffneten Quellen ließ sich kein Milligramm-Wert belastbar zitieren, und ein eigener Grenzwert für Säuglings- und Kleinkindernahrung war darin nicht enthalten.`,
          },
          {
            title: `Was daraus für die Beikost folgt`,
            body: `Die deutschen Beikost-Empfehlungen beantworten das nicht über eine Verbotsliste, sondern über Abwechslung: „Es sollte eine Variation der verwendeten Beikostzutaten erfolgen (z. B. verschiedene Gemüse- und Obstarten …)" [3], und Kartoffeln können durch Nudeln, Reis oder andere Getreidearten ersetzt werden [3]. Wer verschiedene Gemüsesorten durchwechselt, landet selten mehrfach am Tag beim nitratreichsten davon. Wer notiert, welches Gemüse es wann gab, sieht solche Muster schneller — in Mamio lassen sich erste Lebensmittel mit Datum festhalten.`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Darf mein Baby Spinat essen?`,
            answer: `Die hier zitierten Quellen sprechen kein Verbot aus. Sie nennen Spinat als nitratreich [1] und beziffern das Risiko für Kinder von 1 bis 3 Jahren, die an einem Tag mehr als eine Spinatmahlzeit mit hohem Nitratgehalt essen [1]. Bei bakteriellen Magen-Darm-Infektionen sollen Kinder dem EFSA-Gutachten zufolge keinen Spinat essen [1].`,
          },
          {
            question: `Darf ich Babybrei mit Spinat aufwärmen?`,
            answer: `Die BfR-Hinweise lauten: nitratreiche Lebensmittel gekühlt lagern, zubereitetes Gemüse — insbesondere Spinat — nicht längere Zeit warmhalten, Reste schnell kühlen und im Kühlschrank aufbewahren [1]. Ein generelles Verbot des Aufwärmens steht dort nicht.`,
          },
          {
            question: `Warum ist Nitrat für Säuglinge gefährlicher als für Erwachsene?`,
            answer: `Weil Säuglinge eine niedrige Aktivität des Enzyms haben, das Methämoglobin wieder in Hämoglobin umwandelt, und weil sie ein erhöhtes Risiko für bakterielle Darminfektionen haben, die zu vermehrter Nitritbildung führen können [1].`,
          },
          {
            question: `Welches Gemüse hat wenig Nitrat?`,
            answer: `Das BfR nennt niedrigere Gehalte für Frucht- und Knollengemüse wie Tomaten oder Kartoffeln sowie für Getreideprodukte [1]. Eine vollständige Rangliste geben die hier zitierten Quellen nicht.`,
          },
          {
            question: `Ist Rote Bete für Babys ein Problem?`,
            answer: `In der hier geöffneten BfR-Aufzählung nitratreicher Lebensmittel wird Rote Bete nicht eigens genannt; aufgeführt sind Blattgemüse wie Rucola, Feldsalat, Blattsalate und Spinat sowie Radieschen, frische Küchenkräuter und Kohlrabi [1]. Eine eigene Aussage zu Rote Bete liegt uns aus diesen Quellen nicht vor.`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          { id: 1, title: `Fragen und Antworten zu Nitrat und Nitrit in Lebensmitteln`, publisher: `BfR — Bundesinstitut für Risikobewertung`, year: `2026`, url: `https://www.bfr.bund.de/de/fragen_und_antworten_zu_nitrat_und_nitrit_in_lebensmitteln-187056.html`, accessed: `2026-10-23`, note: `Seitendatum 12.10.2026; bezieht sich u. a. auf die EFSA-Stellungnahme 2010` },
          { id: 2, title: `Empfehlungen zur Säuglingsernährung`, publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`, year: `2025`, url: `https://www.kindergesundheit-info.de/index.php?id=8924`, accessed: `2026-10-23`, note: `Stand: 30.11.2025` },
          { id: 3, title: `Abfolge und Auswahl der Beikost — Handlungsempfehlungen`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2024`, url: `https://www.gesund-ins-leben.de/fuer-fachkreise/bestens-unterstuetzt-durchs-1-lebensjahr/handlungsempfehlungen/beikost/abfolge-und-auswahl-der-beikost/`, accessed: `2026-10-23`, note: `Stand 19.08.2016, Teilaktualisierung 2024` },
        ],
        openQuestions: [],
        disclaimer: DE_MEDICAL_DISCLAIMER,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },

  'beikost-reis-arsen': {
    relatedPageId: 'feeding',
    ymyl: true,
    slugs: {
      de: 'reis-und-arsen-beikost',
    },
    locales: {
      de: {
        metaTitle: `Reis und Arsen in der Beikost: Reiswaffeln & Co | Mamio`,
        metaDescription: `Reiswaffeln, Reisbrei, Reisdrinks: Warum Reis mehr anorganisches Arsen enthält als andere Getreide und was das BfR Eltern von Säuglingen empfiehlt.`,
        title: `Reis und Arsen in der Beikost: Was das BfR empfiehlt`,
        date: `2026-10-23`,
        lastVerified: `2026-10-23`,
        reviewedBy: ``,
        reviewerCredentials: ``,
        keyFactsHeading: `Das Wichtigste in Kürze`,
        keyFacts: [
          `Reis und Reisprodukte wie Reiswaffeln, Reissnacks und Reisflocken für Reisbrei können relativ hohe Gehalte an anorganischem Arsen aufweisen [1].`,
          `Anorganisches Arsen ist als krebserzeugend für den Menschen klassifiziert; eine unbedenkliche Aufnahmemenge konnte bislang nicht abgeleitet werden [1].`,
          `Eltern wird empfohlen, Säuglinge und Kleinkinder nicht ausschließlich mit reisbasierten Getränken oder Beikost wie Reisbrei zu ernähren [1].`,
          `Reiswaffeln und Reisflocken nur in Maßen und mit Produkten aus anderen Getreidearten wie Mais oder Weizen abwechseln [1].`,
        ],
        intro: `Reis kann mehr Arsen in anorganischer Form enthalten als andere pflanzliche Lebensmittel [1]. Weil anorganisches Arsen als krebserzeugend für den Menschen klassifiziert ist und sich bislang keine gesundheitlich unbedenkliche Aufnahmemenge ableiten ließ [1], empfiehlt das BfR Maßnahmen zur Reduktion — besonders in Produkten, die vor allem von Säuglingen, Kleinkindern und Kindern verzehrt werden [1]. Für Eltern läuft das nicht auf ein Reisverbot hinaus, sondern auf Abwechslung [1].`,
        sections: [
          {
            title: `Wie Arsen in den Reis kommt`,
            body: `„Wie andere Getreidearten auch, nimmt die Reispflanze Arsenverbindungen über die Wurzeln auf" [1]. Der Unterschied liegt im Anbau: „Reis wird oft unter anaeroben (unter Ausschluss von Sauerstoff) Bedingungen im Boden angebaut, indem die Felder geflutet werden, was zu einer erhöhten Verfügbarkeit des Arsens im Boden führt" [1]. Deshalb ist bekannt, dass Reis mehr Arsen in anorganischer Form enthalten kann als andere pflanzliche Lebensmittel [1].`,
          },
          {
            title: `Warum anorganisches Arsen bewertet wird`,
            body: `„Anorganisches Arsen ist als für den Menschen krebserzeugend klassifiziert, eine gesundheitlich unbedenkliche Aufnahmemenge konnte bislang nicht abgeleitet werden" [1]. Daraus folgt eine Formulierung, die man nicht oft liest: „Das Vorkommen von anorganischem Arsen in Lebensmitteln ist daher in jeder Menge unerwünscht, lässt sich aber nicht vollständig vermeiden" [1]. Zur Einordnung gehört aber auch der zweite Teil der Bewertung: „Eine akute Gesundheitsbeeinträchtigung ist bei den gemessen Gehalten in Reis und Reisprodukten für alle Bevölkerungsgruppen in Deutschland … unwahrscheinlich" [1]. Es geht also um langfristige Aufnahme, nicht um eine akute Gefahr durch eine Reiswaffel.`,
          },
          {
            title: `Welche Produkte das BfR besonders nennt`,
            body: `Genannt werden „Reis und Produkte auf Reisbasis, wie Reiswaffeln, Reissnacks und Reisflocken für Reisbrei" [1] — also genau die Dinge, die im ersten Lebensjahr häufig zum Einsatz kommen. Das BfR sieht hier zusätzlich Forschungsbedarf, „um insbesondere abzuklären, weshalb Reisprodukte, wie zum Beispiel Reiswaffeln oder Reisflocken bzw. Reisbrei, teilweise wesentlich höhere Gehalte an Arsenverbindungen aufweisen können als weißer Reis" [1]. Und es benennt, was Eltern im Laden nicht leisten können: „Verbraucherinnen und Verbraucher können die jeweilige Höhe der Gehalte an anorganischem Arsen im Reis oder in den Reisprodukten nicht erkennen" [1].`,
          },
          {
            title: `Die Empfehlung für Säuglinge und Kleinkinder`,
            body: `Sie ist in einem Satz zusammengefasst: „Eltern wird empfohlen, ihre Säuglinge und Kleinkinder nicht ausschließlich mit reisbasierten Getränken oder Beikost wie Reisbrei zu ernähren" [1]. Dazu kommt der Punkt zu Snacks: „Auch bei Zwischenmahlzeiten sollten sie Produkte wie Reiswaffeln mit reisfreien Zwischenmahlzeiten variieren" [1]. Allgemeiner formuliert das BfR: „Produkte wie Reiswaffeln oder Reisflocken/Reisbrei nur in Maßen zu konsumieren und mit Produkten, die auf anderen Getreidearten wie Mais oder Weizen basieren, zu variieren" [1]. Das Wort, auf das es ankommt, ist „ausschließlich" beziehungsweise „in Maßen" — nicht „nie".`,
          },
          {
            title: `Reisdrinks sind etwas anderes`,
            body: `Bei Getränken auf Reisbasis, der sogenannten Reismilch, ist die Aussage schärfer. Das BfR weist auf Empfehlungen nationaler und internationaler Gremien hin, die diese Ernährungsform ablehnen — „nicht nur wegen der hohen Gehalte an Arsen in den Produkten …, sondern insbesondere wegen der ungeeigneten Nährstoffzusammensetzung, die nicht den Bedürfnissen von Säuglingen entspricht" [1]. Für Säuglinge ist ein Reisdrink also nicht nur eine Arsenfrage, sondern vor allem kein geeignetes Lebensmittel.`,
          },
          {
            title: `Was Höchstgehalte abdecken`,
            body: `Die EU hat Höchstgehalte für anorganisches Arsen für folgende Kategorien beschlossen: „Geschliffener Reis, nicht parboiled (polierter und weißer Reis); parboiled-Reis und geschälter Reis; Reiskekse, Reiswaffeln, Reiskräcker und Reiskuchen; Reis für die Herstellung von Lebensmitteln für Säuglinge und Kleinkinder" [1]. Eingeführt wurden sie „mit Wirkung zum 01. Januar 2016" [1]. Zahlenwerte nennt dieser Artikel nicht — aus den hier geöffneten Quellen ließ sich kein Grenzwert in Milligramm je Kilogramm belastbar zitieren.`,
          },
          {
            title: `Was beim Kochen passiert`,
            body: `Für den Haushalt nennt das BfR einen Ansatz: „Arsenverbindungen können beim Waschen und Kochen von Reis in reichlich Wasser mit geringen Arsengehalten teilweise aus dem Reis in das Wasser übergehen" [1]. Mehr steht dort nicht — keine Wassermenge, kein Verhältnis, keine Kochzeit. Wer also liest, man solle Reis in viel Wasser kochen und es weggießen, findet dafür in dieser Quelle die Richtung, aber keine Anleitung. Für Reisbrei aus Reisflocken greift dieser Weg ohnehin nicht.`,
          },
          {
            title: `Wie das in die Beikost passt`,
            body: `Die deutschen Beikost-Empfehlungen machen Abwechslung ohnehin zum Prinzip: „Es sollte eine Variation der verwendeten Beikostzutaten erfolgen" [2], und ausdrücklich „Kartoffeln können durch Nudeln, Reis oder andere Getreidearten ersetzt werden" [2] — Reis steht dort als eine Option unter mehreren, nicht als Standard. Dieselbe Logik nennt das BfR: Verbraucher sollten „die generelle Empfehlung zu Abwechslung und Vielfalt berücksichtigen und die verzehrten Getreidearten nach Möglichkeit variieren" [1]. Wer mitschreibt, welches Getreide wann im Brei war, sieht leichter, ob es über Wochen immer dasselbe war — in Mamio lassen sich erste Lebensmittel mit Datum festhalten.`,
          },
          {
            title: `Stand der Daten`,
            body: `Die hier zitierte BfR-Seite trägt das Datum 22.12.2020 [1]. Die darin genannten Messungen in Reiswaffeln und reisbasierter Säuglings- und Kleinkindernahrung stammen aus dem Lebensmittelmonitoring 2014 von Bund und Ländern, das auf Antrag des BfR erfolgte; die Gehalte lagen dort niedriger als in den Produkten, die der früheren Stellungnahme zugrunde lagen [1]. Wer sich auf Zahlen stützen möchte, sollte deshalb prüfen, ob das BfR inzwischen neuere Daten veröffentlicht hat.`,
          },
        ],
        faqHeading: `Häufige Fragen`,
        faq: [
          {
            question: `Darf mein Baby Reiswaffeln essen?`,
            answer: `Das BfR spricht kein Verbot aus. Es empfiehlt, Produkte wie Reiswaffeln nur in Maßen zu konsumieren und mit Produkten aus anderen Getreidearten wie Mais oder Weizen zu variieren [1], und bei Zwischenmahlzeiten mit reisfreien Zwischenmahlzeiten abzuwechseln [1].`,
          },
          {
            question: `Ist Reisbrei für Säuglinge geeignet?`,
            answer: `Eltern wird empfohlen, Säuglinge und Kleinkinder nicht ausschließlich mit reisbasierten Getränken oder Beikost wie Reisbrei zu ernähren [1]. In den Beikost-Empfehlungen ist Reis eine Option neben Nudeln, Kartoffeln und anderen Getreidearten [2].`,
          },
          {
            question: `Darf mein Baby Reismilch trinken?`,
            answer: `Das BfR verweist auf Empfehlungen nationaler und internationaler Gremien, die diese Ernährungsform für Säuglinge ablehnen — nicht nur wegen der Arsengehalte, sondern insbesondere wegen der Nährstoffzusammensetzung, die nicht den Bedürfnissen von Säuglingen entspricht [1].`,
          },
          {
            question: `Hilft es, den Reis zu waschen oder in viel Wasser zu kochen?`,
            answer: `Arsenverbindungen können beim Waschen und Kochen in reichlich Wasser mit geringen Arsengehalten teilweise aus dem Reis in das Wasser übergehen [1]. Eine konkrete Anleitung mit Wassermengen oder Kochzeiten nennt die Quelle nicht.`,
          },
          {
            question: `Ist Vollkornreis besser oder schlechter?`,
            answer: `Dazu liegt uns aus den hier zitierten Quellen keine Aussage vor. Das BfR nennt die EU-Kategorien für Höchstgehalte — geschliffener Reis, parboiled und geschälter Reis, Reisgebäck, Reis für Säuglings- und Kleinkindernahrung [1] — ohne einen Vergleich der Sorten für Säuglinge zu ziehen.`,
          },
          {
            question: `Muss ich mir Sorgen machen, wenn mein Kind schon viele Reiswaffeln gegessen hat?`,
            answer: `Eine akute Gesundheitsbeeinträchtigung hält das BfR bei den gemessenen Gehalten für alle Bevölkerungsgruppen in Deutschland für unwahrscheinlich [1]. Die Empfehlungen zielen auf die langfristige Aufnahme, also auf Abwechslung ab jetzt [1].`,
          },
        ],
        sourcesHeading: `Quellen`,
        sources: [
          { id: 1, title: `Fragen und Antworten zu Arsengehalten in Reis und Reisprodukten`, publisher: `BfR — Bundesinstitut für Risikobewertung`, year: `2020`, url: `https://www.bfr.bund.de/de/fragen_und_antworten_zu_arsengehalten_in_reis_und_reisprodukten-194346.html`, accessed: `2026-10-23`, note: `Seitendatum 22.12.2020; Messdaten aus dem Lebensmittelmonitoring 2014` },
          { id: 2, title: `Abfolge und Auswahl der Beikost — Handlungsempfehlungen`, publisher: `BLE / Netzwerk Gesund ins Leben`, year: `2024`, url: `https://www.gesund-ins-leben.de/fuer-fachkreise/bestens-unterstuetzt-durchs-1-lebensjahr/handlungsempfehlungen/beikost/abfolge-und-auswahl-der-beikost/`, accessed: `2026-10-23`, note: `Stand 19.08.2016, Teilaktualisierung 2024` },
          { id: 3, title: `Empfehlungen zur Säuglingsernährung`, publisher: `BIÖG — Bundesinstitut für Öffentliche Gesundheit (kindergesundheit-info.de)`, year: `2025`, url: `https://www.kindergesundheit-info.de/index.php?id=8924`, accessed: `2026-10-23`, note: `Stand: 30.11.2025` },
        ],
        openQuestions: [],
        disclaimer: DE_MEDICAL_DISCLAIMER,
        ctaText: `Erste Lebensmittel und Reaktionen mit Mamio festhalten`,
      },
    },
  },
};
