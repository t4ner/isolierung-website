import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-white "
    >
      <section
        className="container mx-auto px-4 relative"
        aria-label="Unternehmensinfo"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unser Unternehmen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Als inhabergeführtes Unternehmen sind wir stolz auf unser
            engagiertes Team, das unsere Marktposition kontinuierlich stärkt.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <figure className="relative rounded-3xl overflow-hidden h-full bg-white shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
              <img
                src="/about/about1.jpg"
                alt="G&G Fugentechnik Firmengebäude und Arbeitsumgebung"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                aria-hidden="true"
              ></div>
            </figure>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col h-full space-y-6">
              {/* Profile Card */}
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <figure className="flex-shrink-0 w-20 h-20 p-5 overflow-hidden border border-gray-200 rounded-full shadow-xl md:h-28 md:w-28">
                  <img
                    src="logo/logo2.png"
                    alt="G&G Fugentechnik Recycling Prozess"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <article className="d6ecf7 flex-grow p-4 transition-shadow duration-300 shadow-xl md:p-6 rounded-3xl hover:shadow-2xl">
                  <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-800">
                    Unser Unternehmen
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                   Unsere verschiedenen Geschäftsfelder arbeiten eng
                    zusammen, um maßgeschneiderte Lösungen zu entwickeln und
                    Ihnen die bestmöglichen Ergebnisse zu liefern.
                  </p>
                </article>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  {
                    src: "/about/about2.jpg",
                    alt: "Professionelle Werkzeuge für Fugentechnik",
                  },
                  {
                    src: "/about/about3.jpg",
                    alt: "Nachhaltige Baupraktiken bei G&G Fugentechnik",
                  },
                ].map((img, index) => (
                  <figure
                    key={index}
                    className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-64 transform hover:scale-[1.02]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Info Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className=" rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Unser Unternehmen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Als inhabergeführtes Unternehmen sind wir stolz darauf, seit
              vielen Jahren mit einem engagierten und zuverlässigen Team unsere
              Position im Markt erfolgreich behaupten und kontinuierlich
              ausbauen zu können. Innerhalb unseres Unternehmens haben sich
              verschiedene kompetente Geschäftsfelder entwickelt, die jeweils
              spezifische Leistungsmerkmale bündeln. Diese Bereiche arbeiten
              firmenübergreifend zusammen, um das gesamte Know-how der Gruppe
              objektbezogen zu vereinen und für jedes Projekt individuell
              anzuwenden. Durch diese enge Zusammenarbeit bieten wir Ihnen
              maßgeschneiderte und effiziente Lösungen, die Ihre Anforderungen
              optimal erfüllen.
            </p>
          </div>
        </motion.div>

        {/* Isoliertechnik Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className=" rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Unsere Lösungen im Bereich Isoliertechnik
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Als Experten bieten wir maßgeschneiderte Isolierlösungen, die Ihre
              Energiekosten senken und die Betriebseffizienz steigern. Ob
              Wärmeisolierung, Kälteisolierung, Schallschutz oder Brandschutz –
              wir sorgen für optimale Isolierung Ihrer Anlagen und Gebäude, um
              ökologische und ökonomische Vorteile zu erzielen. Verlassen Sie
              sich auf unsere jahrelange Erfahrung, moderne Technik und
              hochwertige Materialien für nachhaltige Ergebnisse.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
