import React, { memo } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Statik değerler ve meta bilgiler
const COMPANY_INFO = {
  name: "MUM-ISOLIERUNG",
  phone: "+49 (0)621 – 83268830",
  email: "info@mum-isolierung.de",
  location: "https://maps.app.goo.gl/Fsmevk64s4yPyJVk8",
};

const CONTACT_ITEMS = [
  {
    id: "phone",
    href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
    icon: FaPhone,
    text: COMPANY_INFO.phone,
    target: "_self",
    ariaLabel: "Contact us by phone",
  },
  {
    id: "email",
    href: `mailto:${COMPANY_INFO.email}`,
    icon: FaEnvelope,
    text: COMPANY_INFO.email,
    target: "_self",
    ariaLabel: "Contact us by email",
  },
  {
    id: "location",
    href: COMPANY_INFO.location,
    icon: FaMapMarkerAlt,
    text: "Standort finden",
    target: "_blank",
    ariaLabel: "View our location",
  },
];

const FOOTER_LINKS = [
  {
    id: "startseite",
    to: "/",
    text: "Startseite",
    ariaLabel: "Go to homepage",
    mobileHidden: true,
  },
  {
    id: "services",
    to: "/leistungen",
    text: "Leistungen",
    ariaLabel: "Go to services page",
    mobileHidden: true,
  },
  {
    id: "zertifikate",
    to: "/zertifikate",
    text: "Zertifikate",
    ariaLabel: "Go to certificates page",
    mobileHidden: false,
  },

  {
    id: "contact",
    to: "/kontakt",
    text: "Kontakt",
    ariaLabel: "Go to contact page",
    mobileHidden: true,
  },
  {
    id: "impressum",
    to: "/impressum",
    text: "Impressum",
    ariaLabel: "Go to legal information page",
    mobileHidden: false,
  },

  {
    id: "privacy",
    to: "/datenschutzerklarung",
    text: "Datenschutzerklärung",
    ariaLabel: "Go to privacy policy page",
    mobileHidden: false,
  },
];

const Footer = memo(() => {
  return (
    <footer
      className="relative bg-gradient-to-b from-white to-[#f8fbfe] border-t-2 border-blue-50 mt-20"
      role="contentinfo"
      aria-label={`${COMPANY_INFO.name} footer area`}
    >
      <div className="container relative px-4 mx-auto pt-18">
        {/* Contact Section */}
        <nav
          className="grid max-w-6xl grid-cols-1 gap-4 mx-auto mb-16 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Contact options"
        >
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center gap-4 md:gap-6 group p-4 md:p-5 lg:p-6 rounded-3xl bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] transition-all duration-500 hover:shadow-lg hover:shadow-[#02C5DF]/5 hover:-translate-y-1"
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
            >
              <div className="bg-gradient-to-r from-[#eff8fd] via-[#eff8fd] to-[#f9e9e9] p-2 md:p-3 lg:p-4 rounded-2xl text-black text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#02C5DF]/20">
                <item.icon />
              </div>
              <span className="text-[#06234B] text-sm md:text-base md:font-medium">
                {item.text}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col items-center gap-8">
         

            <nav
              className="flex flex-wrap justify-center gap-4"
              aria-label="Footer navigation"
            >
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  className={`text-[#06234B]/60   transition-all duration-300 text-xs md:text-sm whitespace-nowrap flex items-center gap-1 group ${
                    link.mobileHidden ? "hidden md:flex" : "flex"
                  }`}
                  aria-label={link.ariaLabel}
                >
                  <span>{link.text}</span>
                  <FaArrowRight className="w-3 h-3 transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="text-[#06234B]/60 text-xs md:text-sm text-center border-t border-[#06234B]/10 py-4">
            © {new Date().getFullYear()} {COMPANY_INFO.name} | Alle Rechte
            vorbehalten | Design und Entwicklung{" "}
            <a
              href="https://macaree.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black  cursor-pointer hover:underline transition-all duration-300"
            >
              Macaree
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
