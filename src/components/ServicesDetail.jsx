import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServiceSection = ({
  title,
  subtitle,
  description,
  subdescription,
  listItems,
  imageUrl,
  reverse,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      id={id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: reverse ? 100 : -100 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3">
          {title}
        </h4>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
          {subtitle}
        </h1>

        <p className="text-gray-600 mb-8  leading-relaxed max-w-2xl">
          {description}
        </p>

        {listItems && (
          <ul className="text-gray-600 mb-8 leading-relaxed max-w-2xl list-disc list-inside">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <p className="text-gray-600 mb-8  leading-relaxed max-w-2xl">
          {subdescription}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: reverse ? -100 : 100 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesDetail = () => {
  const services = [
    {
      id: "warme",
      title: "Wärmeschutz",
      subtitle: "Wärmeschutz",
      description:
        "Wir fertigen Wärmedämmungen nach höchsten Qualitätsanforderungen (DIN 4140, Q–01 und Energie-Einsparungsverordnung) für:",
      listItems: [
        "Betriebs- und haustechnische Anlagen",
        "Rohrleitungen",
        "Armaturen",
        "Behälter und Apparate",
        "Lüftungsanlagen",
        "In der Prozesstechnik, insbesondere an Dampf- und Thermoölanlagen",
      ],
      subdescription:
        "Wir bedienen führende Unternehmen in der Lebensmittel-, Süß- und Backwaren-, Getränke-, Holz- und Karton-Papierindustrie. Zudem führen wir Hochtemperaturisolierungen bis 1200°C für Entstaubungs- und Rauchgasanlagen aus und gewährleisten die Einhaltung der UVV (Berührungsschutz). Unsere Materialien sind nach VDI 2055 güteüberwacht, und wir verwenden hochwertige Ummantelungen aus PVC- und Alu-Folien, verzinktem Stahlblech, Alu-Zink, Aluminium und Edelstahlblechen in V2 (4301) und V4A (4765). Zudem bieten wir die Verarbeitung von FCKW-freiem PUR-Ortschaum für intermittierende technische Anlagen, insbesondere in der Lebensmittelindustrie, an. Wir erstellen auch Berechnungen und Auslegungen der erforderlichen Dämmschichtdicken.",
      imageUrl: "/services/warme.jpeg",
    },
    {
      id: "kalte",
      title: "Kälteschutz",
      subtitle: "Kälteschutz",
      description:
        "Im Bereich Kälteschutz geht es darum, den Energieverlust zu reduzieren und CO2-Emissionen zu verringern. Ebenso vermeiden wir Tauwasserbildung und die damit verbundene Korrosion an Rohrleitungen und Anlagenteilen. Eine präzise Auslegung der erforderlichen Dämmdicken ist entscheidend. Unsere Kälteschutzlösungen umfassen die Isolierung von Rohrleitungen, Armaturen, Behältern und Lüftungsanlagen im Temperaturbereich von Umgebungstemperaturen bis -80°C. Wir sind in der Haus- und Gebäudeausrüstung sowie in der Kohlensäure- und Getränkeindustrie, der Feinkost- und Backwarenindustrie und in fleischverarbeitenden Betrieben tätig. Auch hier verwenden wir nur qualitativ hochwertige, nach VDI 2055 güteüberwachte Materialien (z. B. synthetischer Kautschuk, FCKW-freier PUR- Ortschaum, Schaumglas). Zusätzlich bieten wir die Montage von elektrischen Begleitheizsystemen an.",

      imageUrl: "/services/kalte.jpeg",
    },
    {
      id: "schall",
      title: "Schallschutz",
      subtitle: "Schallschutz",
      description:
        "Lärm kann nicht nur die psychische Gesundheit belasten, sondern auch Langzeitschäden wie Schwerhörigkeit verursachen. Daher ist es unerlässlich, Lärmquellen gemäß der DIN 4109, der TA-Lärm und der Arbeitsstättenverordnung zu dämmen, dämpfen, zu kapseln oder einzuhausen. Zu den betroffenen Anlagen gehören Maschinen, Motoren, Pumpengruppen, Kompressoren sowie Abgas- und Feuerungsanlagen. Wir bieten maßgeschneiderte Schallschutzlösungen mit einer Schallpegelminderung bis zu 50 dB. Darüber hinaus optimieren wir die Raumakustik, um die Nachhallzeit zu verbessern.",

      imageUrl: "/services/schall.jpeg",
    },
    {
      id: "brand",
      title: "Brandschutz",
      subtitle: "Brandschutz",
      description:
        "Feuer und Rauch stellen eine erhebliche Gefahr für Leben und Sachwerte dar. Der vorbeugende bauliche und technische Brandschutz nach MLAR und DIN 4102 gewinnt zunehmend an Bedeutung. Wir bieten folgende Brandschutzmaßnahmen:",
      listItems: [
        "Bekleidung von Lüftungskanälen und -rohren",
        "Erstellung von Luft- und Entrauchungskanälen",
        "Bekleidung von Kabelkanälen in I- und E-Ausführung",
        "Bekleidung von Stahlkonstruktionen",
        "Verschließen von Wand- und Deckendurchführungen für Rohrleitungen und Luftkanäle (inkl. Brandschutzklappen)",
        "Brandschutzplatten aus eigener Herstellung (auch als Lohnarbeit)",
      ],
      imageUrl: "/services/brand.jpeg",
    },
    {
      id: "sonder",
      title: "Sonderlösungen",
      subtitle: "Sonderlösungen",
      description:
        "Mit unseren Schweißgeräten bieten wir maßgeschneiderte Sonderkonstruktionen im Bereich der Blechbearbeitung an. Dies umfasst unter anderem die Innenverkleidung von Nutzfahrzeugen oder die Verkleidung von haustechnischen Versorgungsleitungen in Gewerbeküchen, z. B. aus Edelstahl. Gerne erarbeiten wir mit Ihnen individuelle Lösungen für Ihre speziellen Bedürfnisse. Sonderanfertigungen sind ebenfalls auf Bestellung möglich.",

      imageUrl: "/services/sonder.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <div className="absolute top-0 w-1/3 h-1/3  rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-70 translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 xl:px-0 pt-24  relative z-10 space-y-24">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            {...service}
            id={service.id}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesDetail;
