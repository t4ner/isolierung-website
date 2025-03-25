import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ukiun8l", "template_z809tfd", form.current, {
        publicKey: "PTCU4WX568fR4ym8L",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          toast.error("Beim Senden der E-Mail ist ein Fehler aufgetreten!");
        }
      );
  };

  return (
    <div className="relative mt-20 mb-24 px-4 md:px-6 container mx-auto">
      <ToastContainer position="bottom-right" />

      <div className="mb-20 text-center relative">
        <span className="inline-block px-4 py-2 rounded-full  bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] text-black text-sm font-medium mb-4 animate-fadeIn">
          Kontakt
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Haben Sie <span className="text-green-600">Fragen?</span>
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Schreiben Sie uns gerne eine Nachricht oder rufen Sie uns an! Wir
          freuen uns darauf, Ihnen weiterzuhelfen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="order-2 lg:order-1 flex">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] w-full flex flex-col">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col flex-grow space-y-8 pt-10"
            >
              <div className="flex-grow space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-semibold text-gray-700 mb-2  "
                    >
                      Name
                    </label>
                    <input
                      id="user_name"
                      type="text"
                      required
                      name="user_name"
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      E-Mail
                    </label>
                    <input
                      id="user_email"
                      type="email"
                      required
                      name="user_email"
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="user_telephone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefonnummer
                  </label>
                  <input
                    id="user_telephone"
                    type="text"
                    required
                    name="user_telephone"
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div className="group flex-grow">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2 "
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none resize-none flex-grow"
                    placeholder="Ihre Nachricht an uns..."
                    style={{ minHeight: "200px" }}
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group ml-auto w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] font-medium rounded-xl transition-all duration-300 transform hover:scale-105  flex items-center justify-center space-x-2 hover:translate-y-[-1px]"
                >
                  <span>Nachricht senden</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="order-1 lg:order-2 flex">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300  hover:scale-[1.02] w-full flex flex-col">
            <div className="h-[400px] w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.0098001482174!2d8.503392576818639!3d49.45903347141995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c932be8f807b%3A0xd7976def5c0c2bae!2sSigmund-Schuckert-Stra%C3%9Fe%2017%2C%2068199%20Mannheim%2C%20Germany!5e1!3m2!1sen!2str!4v1742213947312!5m2!1sen!2str"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-8 space-y-8 bg-gradient-to-br from-white/80 to-green-50/80 flex-grow">
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                <div className="p-3 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] rounded-xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className=" font-semibold text-gray-800  transition-colors">
                    Adresse
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Sigmund-Schukert-Straße 17, 68199 Mannheim
                  </p>
                </div>
              </div>

              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                <div className="p-3 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] rounded-xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold text-gray-800  transition-colors">
                    E-Mail
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    info@mum-isolierung.de
                  </p>
                </div>
              </div>

              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 group">
                <div className="p-3 bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] rounded-xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold text-gray-800  transition-colors">
                    Telefon
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    +49 (0)621 – 83268830
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
