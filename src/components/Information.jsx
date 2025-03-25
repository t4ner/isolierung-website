import React from "react";
import { motion } from "framer-motion";
import informationImage from "/information/information.jpg";
const Information = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/texture-pattern.png')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-green-100 mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experten für Isoliertechnik
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Maßgeschneiderte und effiziente Lösungen für Ihre Anforderungen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Wärmeisolierung",
              icon: (
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              gradient:
                "bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9]",

              description:
                "Effektive Lösungen zur Reduzierung von Wärmeverlusten und Energieeinsparung.",
            },
            {
              title: "Kälteisolierung",
              icon: (
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
              gradient:
                "bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9]",

              description:
                "Optimaler Schutz für kältetechnische Anlagen und Rohrleitungen.",
            },
            {
              title: "Schallschutz",
              icon: (
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              ),
              gradient:
                "bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9]",

              description:
                "Effektive Lösungen zur Reduzierung von Lärm und Vibrationen.",
            },
            {
              title: "Brandschutz",
              icon: (
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                </svg>
              ),
              gradient:
                "bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9]",

              description:
                "Zuverlässige Systeme zum Schutz von Menschen und Anlagen.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl ${service.gradient} p-6 h-full shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Unsere Expertise für Ihren Erfolg
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Verlassen Sie sich auf unsere jahrelange Erfahrung und unser
                Engagement, um Ihnen die besten Lösungen für Ihre
                Isolieranforderungen zu bieten. Mit modernster Technik und
                hochwertigsten Materialien gewährleisten wir dauerhafte Qualität
                und eine nachhaltige Energieeinsparung.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduzierung Ihrer Energiekosten",
                  "Steigerung der Betriebseffizienz",
                  "Maßgeschneiderte Lösungen",
                  "Ökologische und ökonomische Vorteile",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5  mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden h-80 shadow-lg">
                <div className="absolute inset-0z-10"></div>
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={informationImage}
                  alt="Professionelle Isolierarbeit"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800">
                      Professionelle Isolierung
                    </h4>
                    <p className="text-sm text-gray-700">
                      Qualität, die sich auszahlt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
