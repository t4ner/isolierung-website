import React from "react";
import Navbar from "../components/Navbar";

const Datenschutz = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-52 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto">
          <h1 className="text-xl lg:text-4xl font-bold mb-8 text-[#1a1a1a]">
            Datenschutzerklärung
          </h1>
          <div className="space-y-8">
            {/* Angaben gem. § 5 TMG */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Angaben gem. § 5 TMG
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg">
                <p className="text-sm lg:text-base text-gray-700">
                  MuM-Isolierung GmbH
                </p>
                <p className="text-sm lg:text-base text-gray-700">
                  Muammer Özdemir
                </p>
                <p className="text-sm lg:text-base text-gray-700">
                  Sigmund-Schukert-Straße 17, 68199 Mannheim
                </p>
              </div>
            </section>

            {/* Allgemeiner Hinweis und Pflichtinformationen */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Allgemeiner Hinweis und Pflichtinformationen
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700 space-y-4">
                <h3 className="text-lg font-medium text-[#1a1a1a]">
                  Benennung der verantwortlichen Stelle
                </h3>
                <p className="text-sm lg:text-base">
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                </p>
                <div className="pl-4">
                  <p className="text-sm lg:text-base">MuM-Isolierung GmbH</p>
                  <p className="text-sm lg:text-base">Muammer Özdemir</p>
                  <p className="text-sm lg:text-base">
                    Sigmund-Schukert-Straße 17
                  </p>
                  <p className="text-sm lg:text-base">68199 Mannheim</p>
                </div>
                <p className="text-sm lg:text-base">
                  Die verantwortliche Stelle entscheidet allein oder gemeinsam
                  mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
                </p>
              </div>
            </section>

            {/* Widerruf der Einwilligung */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge
                  der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits
                  erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
                  genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>
              </div>
            </section>

            {/* Beschwerderecht */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Als Betroffener steht Ihnen im Falle eines
                  datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
                  zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
                  bezüglich datenschutzrechtlicher Fragen ist der
                  Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
                  Sitz unseres Unternehmens befindet. Der folgende Link stellt
                  eine Liste der Datenschutzbeauftragten sowie deren
                  Kontaktdaten bereit:{" "}
                  <a
                    href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Datenübertragbarkeit */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Recht auf Datenübertragbarkeit
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
                  Einwilligung oder in Erfüllung eines Vertrags automatisiert
                  verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
                  Bereitstellung erfolgt in einem maschinenlesbaren Format.
                  Sofern Sie die direkte Übertragung der Daten an einen anderen
                  Verantwortlichen verlangen, erfolgt dies nur, soweit es
                  technisch machbar ist.
                </p>
              </div>
            </section>

            {/* Auskunft, Berichtigung, Sperrung, Löschung */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Recht auf Auskunft, Berichtigung, Sperrung, Löschung
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen
                  Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, Herkunft der Daten,
                  deren Empfänger und den Zweck der Datenverarbeitung und ggf.
                  ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                  Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit über die im
                  Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
                </p>
              </div>
            </section>

            {/* SSL/TLS Verschlüsselung */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                SSL- bzw. TLS-Verschlüsselung
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte, die Sie an uns als Seitenbetreiber
                  senden, nutzt unsere Website eine SSL-bzw.
                  TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
                  Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen
                  eine verschlüsselte Verbindung an der "https://" Adresszeile
                  Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                </p>
              </div>
            </section>

            {/* Server-Log-Dateien */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Server-Log-Dateien
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  In Server-Log-Dateien erhebt und speichert der Provider der
                  Website automatisch Informationen, die Ihr Browser automatisch
                  an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 text-sm lg:text-base space-y-1 py-1">
                  <li>Besuchte Seite auf unserer Domain</li>
                  <li>Datum und Uhrzeit der Serveranfrage</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-sm lg:text-base">
                  Es findet keine Zusammenführung dieser Daten mit anderen
                  Datenquellen statt. Grundlage der Datenverarbeitung bildet
                  Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                  Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                  gestattet.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Cookies
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                  die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
                  helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
                  und sicherer zu machen.
                </p>
                <p className="text-sm lg:text-base">
                  Einige Cookies sind "Session-Cookies." Solche Cookies werden
                  nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen
                  bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie
                  diese selbst löschen. Solche Cookies helfen uns, Sie bei
                  Rückkehr auf unserer Website wiederzuerkennen.
                </p>
                <p className="text-sm lg:text-base">
                  Mit einem modernen Webbrowser können Sie das Setzen von
                  Cookies überwachen, einschränken oder unterbinden. Viele
                  Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
                  Schließen des Programms von selbst gelöscht werden. Die
                  Deaktivierung von Cookies kann eine eingeschränkte
                  Funktionalität unserer Website zur Folge haben.
                </p>
                <p className="text-sm lg:text-base">
                  Das Setzen von Cookies, die zur Ausübung elektronischer
                  Kommunikationsvorgänge oder der Bereitstellung bestimmter, von
                  Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind,
                  erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als
                  Betreiber dieser Website haben wir ein berechtigtes Interesse
                  an der Speicherung von Cookies zur technisch fehlerfreien und
                  reibungslosen Bereitstellung unserer Dienste. Sofern die
                  Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt,
                  werden diese in dieser Datenschutzerklärung separat behandelt.
                </p>
              </div>
            </section>

            {/* Google Analytics */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Google Analytics
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website verwendet Funktionen des Webanalysedienstes
                  Google Analytics. Anbieter des Webanalysedienstes ist die
                  Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA.
                </p>
                <p className="text-sm lg:text-base">
                  Google Analytics verwendet "Cookies." Das sind kleine
                  Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert
                  und eine Analyse der Website-Benutzung ermöglichen. Mittels
                  Cookie erzeugte Informationen über Ihre Benutzung unserer
                  Website werden an einen Server von Google übermittelt und dort
                  gespeichert. Server-Standort ist im Regelfall die USA.
                </p>
                <h3 className="text-lg font-medium text-[#1a1a1a] mt-4">
                  IP-Anonymisierung
                </h3>
                <p className="text-sm lg:text-base">
                  Wir setzen Google Analytics in Verbindung mit der Funktion
                  IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre
                  IP-Adresse innerhalb von Mitgliedstaaten der Europäischen
                  Union oder in anderen Vertragsstaaten des Abkommens über den
                  Europäischen Wirtschaftsraum vor der Übermittlung in die USA
                  kürzt.
                </p>
              </div>
            </section>

            {/* Datenübermittlung bei Vertragsschluss */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Datenübermittlung bei Vertragsschluss für Warenkauf und
                Warenversand
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Personenbezogene Daten werden an Dritte nur übermittelt,
                  sofern eine Notwendigkeit im Rahmen der Vertragsabwicklung
                  besteht. Dritte können beispielsweise Bezahldienstleister oder
                  Logistikunternehmen sein. Eine weitergehende Übermittlung der
                  Daten findet nicht statt bzw. nur dann, wenn Sie dieser
                  ausdrücklich zugestimmt haben.
                </p>
                <p className="text-sm lg:text-base">
                  Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
                  DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                  Vertrags oder vorvertraglicher Maßnahmen gestattet.
                </p>
              </div>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Kontaktformular
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Per Kontaktformular übermittelte Daten werden einschließlich
                  Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu
                  können oder um für Anschlussfragen bereitzustehen. Eine
                  Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht
                  statt.
                </p>
                <p className="text-sm lg:text-base">
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                  erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.
                  6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten
                  Einwilligung ist jederzeit möglich. Für den Widerruf genügt
                  eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der
                  bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt
                  vom Widerruf unberührt.
                </p>
                <p className="text-sm lg:text-base">
                  Über das Kontaktformular übermittelte Daten verbleiben bei
                  uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                  zur Speicherung widerrufen oder keine Notwendigkeit der
                  Datenspeicherung mehr besteht. Zwingende gesetzliche
                  Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
                  unberührt.
                </p>
              </div>
            </section>

            {/* Newsletter */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Newsletter-Daten
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Zum Versenden unseres Newsletters benötigen wir von Ihnen eine
                  E-Mail-Adresse. Eine Verifizierung der angegebenen
                  E-Mail-Adresse ist notwendig und der Empfang des Newsletters
                  ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder
                  sind freiwillig. Die Verwendung der Daten erfolgt
                  ausschließlich für den Versand des Newsletters.
                </p>
                <p className="text-sm lg:text-base">
                  Die bei der Newsletteranmeldung gemachten Daten werden
                  ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                  lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits
                  erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
                  genügt eine formlose Mitteilung per E-Mail oder Sie melden
                  sich über den "Austragen"-Link im Newsletter ab. Die
                  Rechtmäßigkeit der bereits erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p className="text-sm lg:text-base">
                  Zur Einrichtung des Abonnements eingegebene Daten werden im
                  Falle der Abmeldung gelöscht. Sollten diese Daten für andere
                  Zwecke und an anderer Stelle an uns übermittelt worden sein,
                  verbleiben diese weiterhin bei uns.
                </p>
              </div>
            </section>

            {/* YouTube */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                YouTube
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Für Integration und Darstellung von Videoinhalten nutzt unsere
                  Website Plugins von YouTube. Anbieter des Videoportals ist die
                  YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
                </p>
                <p className="text-sm lg:text-base">
                  Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird
                  eine Verbindung zu den Servern von YouTube hergestellt.
                  YouTube erfährt hierdurch, welche unserer Seiten Sie
                  aufgerufen haben.
                </p>
                <p className="text-sm lg:text-base">
                  YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen
                  Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto
                  eingeloggt sein. Durch vorheriges Ausloggen haben Sie die
                  Möglichkeit, dies zu unterbinden.
                </p>
                <p className="text-sm lg:text-base">
                  Die Nutzung von YouTube erfolgt im Interesse einer
                  ansprechenden Darstellung unserer Online-Angebote. Dies stellt
                  ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                  DSGVO dar.
                </p>
                <p className="text-sm lg:text-base">
                  Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der
                  Datenschutzerklärung von YouTube unter:{" "}
                  <a
                    href="https://www.google.de/intl/de/policies/privacy"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.google.de/intl/de/policies/privacy
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* PayPal */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                PayPal
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website ermöglicht bald die Bezahlung via PayPal.
                  Anbieter des Bezahldienstes ist die PayPal (Europe) S.à.r.l.
                  et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg.
                </p>
                <p className="text-sm lg:text-base">
                  Wenn Sie mit PayPal bezahlen, erfolgt eine Übermittlung der
                  von Ihnen eingegebenen Zahlungsdaten an PayPal.
                </p>
                <p className="text-sm lg:text-base">
                  Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs.
                  1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags).
                  Ein Widerruf Ihrer bereits erteilten Einwilligung ist
                  jederzeit möglich. In der Vergangenheit liegende
                  Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.
                </p>
              </div>
            </section>

            {/* Sofortüberweisung */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Sofortüberweisung
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website ermöglicht bald die Bezahlung via
                  "Sofortüberweisung." Anbieter des Bezahldienstes ist die
                  Sofort GmbH, Theresienhöhe 12, 80339 München.
                </p>
                <p className="text-sm lg:text-base">
                  Mit Hilfe des Verfahrens "Sofortüberweisung" erhalten wir in
                  Echtzeit eine Zahlungsbestätigung von der Sofort GmbH und
                  können unverzüglich mit der Erfüllung unserer
                  Verbindlichkeiten beginnen.
                </p>
                <p className="text-sm lg:text-base">
                  Beim Bezahlen per "Sofortüberweisung" erfolgt eine
                  Übermittlung Ihrer PIN und TAN an die Sofort GmbH. Der
                  Bezahlanbieter loggt sich damit in Ihr Online-Banking-Konto
                  ein, überprüft automatisch Ihren Kontostand und nimmt die
                  Überweisung vor. Es folgt eine unverzügliche
                  Transaktionsbestätigung. Ihre Umsätze, der Kreditrahmen Ihres
                  Dispokredits und die Existenz anderer Konten sowie deren
                  Bestände werden nach dem Einloggen ebenfalls automatisiert
                  geprüft.
                </p>
                <p className="text-sm lg:text-base">
                  Neben PIN und TAN umfasst die Übermittlung an die Sofort GmbH
                  außerdem Zahlungsdaten sowie Daten zu Ihrer Person. Die Daten
                  zu Ihrer Person umfassen Vor- und Nachname, Adresse,
                  Telefonnummer(n), Email-Adresse, IP-Adresse und ggf. weitere
                  für die Zahlungsabwicklung notwendige Daten. Es besteht eine
                  Notwendigkeit dieser Datenübermittlung, um Ihre Identität
                  zweifelsfrei festzustellen und Betrugsversuchen vorzubeugen.
                </p>
                <p className="text-sm lg:text-base">
                  Die Übermittlung Ihrer Daten an die Sofort GmbH erfolgt auf
                  Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und
                  Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines
                  Vertrags). Ein Widerruf Ihrer bereits erteilten Einwilligung
                  ist jederzeit möglich. In der Vergangenheit liegende
                  Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.
                </p>
                <p className="text-sm lg:text-base">
                  Einzelheiten zur Zahlung mit Sofortüberweisung finden Sie
                  unter:{" "}
                  <a
                    href="https://www.sofort.de/datenschutz.html"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.sofort.de/datenschutz.html
                  </a>{" "}
                  und{" "}
                  <a
                    href="https://www.klarna.com/sofort/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.klarna.com/sofort/
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Google AdSense */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Google AdSense
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website verwendet Google AdSense. Anbieter ist die
                  Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA.
                </p>
                <p className="text-sm lg:text-base">
                  Google AdSense dient der Einbindung von Werbeanzeigen und
                  setzt Cookies. Cookies sind kleine Textdateien, die Ihr
                  Webbrowser auf Ihrem Endgerät speichert, um die Nutzung der
                  Website analysieren. Google AdSense setzt außerdem Web Beacons
                  ein. Web Beacons sind unsichtbare Grafiken, die eine Analyse
                  des Besucherverkehrs auf unserer Website ermöglichen.
                </p>
                <p className="text-sm lg:text-base">
                  Durch Cookies und Web Beacons erzeugten Informationen werden
                  an Server von Google übertragen und dort gespeichert.
                  Serverstandort sind die USA. Google kann diese Informationen
                  an Vertragspartner weiterreichen. Ihre IP-Adresse wird Google
                  jedoch nicht mit anderen von Ihnen gespeicherten Daten
                  zusammenführen.
                </p>
                <p className="text-sm lg:text-base">
                  Die Speicherung von AdSense-Cookies erfolgt auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein
                  berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
                  unser Webangebot und unsere Werbung zu optimieren.
                </p>
              </div>
            </section>

            {/* Google AdWords */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Google AdWords und Google Conversion-Tracking
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website verwendet Google AdWords. Anbieter ist die
                  Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, United States.
                </p>
                <p className="text-sm lg:text-base">
                  AdWords ist ein Online-Werbeprogramm. Im Rahmen des
                  Online-Werbeprogramms arbeiten wir mit Conversion-Tracking.
                  Nach einem Klick auf eine von Google geschaltete Anzeige wird
                  ein Cookie für das Conversion-Tracking gesetzt. Cookies sind
                  kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
                  speichert. Google AdWords Cookies verlieren nach 30 Tagen ihre
                  Gültigkeit und dienen nicht der persönlichen Identifizierung
                  der Nutzer. Am Cookie können Google und wir erkennen, dass Sie
                  auf eine Anzeige geklickt haben und zu unserer Website
                  weitergeleitet wurden.
                </p>
                <p className="text-sm lg:text-base">
                  Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die
                  Cookies sind nicht über Websites von AdWords-Kunden
                  nachverfolgbar. Mit Conversion-Cookies werden
                  Conversion-Statistiken für AdWords-Kunden, die
                  Conversion-Tracking einsetzen, erstellt. Adwords-Kunden
                  erfahren wie viele Nutzer auf ihre Anzeige geklickt haben und
                  auf Seiten mit Conversion-Tracking-Tag weitergeleitet wurden.
                  AdWords-Kunden erhalten jedoch keine Informationen, die eine
                  persönliche Identifikation der Nutzer ermöglichen.
                </p>
                <p className="text-sm lg:text-base">
                  Die Speicherung von "Conversion-Cookies" erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben
                  ein berechtigtes Interesse an der Analyse des
                  Nutzerverhaltens, um unser Webangebot und unsere Werbung zu
                  optimieren.
                </p>
                <p className="text-sm lg:text-base">
                  Einzelheiten zu Google AdWords und Google Conversion-Tracking
                  finden Sie in den Datenschutzbestimmungen von Google:{" "}
                  <a
                    href="https://www.google.de/policies/privacy/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.google.de/policies/privacy/
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Google Web Fonts */}
            <section>
              <h2 className="text-base lg:text-xl font-semibold mb-4 text-[#1a1a1a]">
                Google Web Fonts
              </h2>
              <div className="bg-[#eff8fd] p-6 rounded-lg prose max-w-none text-gray-700">
                <p className="text-sm lg:text-base">
                  Unsere Website verwendet Web Fonts von Google. Anbieter ist
                  die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA.
                </p>
                <p className="text-sm lg:text-base">
                  Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die
                  von uns gewünschte Darstellung unserer Website zu
                  präsentieren, unabhängig davon welche Schriften Ihnen lokal
                  zur Verfügung stehen. Dies erfolgt über den Abruf der Google
                  Web Fonts von einem Server von Google in den USA und der damit
                  verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es
                  sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht
                  haben.
                </p>
                <p className="text-sm lg:text-base">
                  Der Einsatz von Google Web Fonts erfolgt auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben
                  wir ein berechtigtes Interesse an der optimalen Darstellung
                  und Übertragung unseres Webauftritts.
                </p>
                <p className="text-sm lg:text-base">
                  Das Unternehmen Google ist für das us-europäische
                  Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses
                  Datenschutzübereinkommen soll die Einhaltung des in der EU
                  geltenden Datenschutzniveaus gewährleisten.
                </p>
                <p className="text-sm lg:text-base">
                  Einzelheiten über Google Web Fonts finden Sie unter:{" "}
                  <a
                    href="https://www.google.com/fonts#AboutPlace:about"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.google.com/fonts#AboutPlace:about
                  </a>{" "}
                  und weitere Informationen in den Datenschutzbestimmungen von
                  Google:{" "}
                  <a
                    href="https://policies.google.com/privacy/partners?hl=de"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://policies.google.com/privacy/partners?hl=de
                  </a>
                </p>
              </div>
            </section>

            {/* Copyright */}
            <section className="border-t pt-8 mt-8 text-center">
              <p className="text-sm lg:text-base text-gray-600">
                Copyright © {new Date().getFullYear()} MuM-Isolierung GmbH |
              </p>
              <p className="text-sm lg:text-base text-gray-600 mt-2">
                Quelle: Datenschutz-Konfigurator von
                mein-datenschutzbeauftragter.de
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
