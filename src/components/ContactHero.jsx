import React from "react";
import Navbar from "./Navbar";
const ContactHero = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero background with sharp edges using clip-path */}
        <div
          className="relative bg-gradient-to-r from-[#acdaf1] to-[#f6d8d8] min-h-[60vh] overflow-hidden"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 85%, 75% 100%, 25% 90%, 0 100%)",
          }}
        >
          {/* Content */}
          <div className="container relative mx-auto mt-56 text-center z-10">
            <h1 className="text-white text-5xl font-bold mb-4 tracking-wider">
                KONTAKT
            </h1>
            <div className="w-32 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
              Kontaktieren Sie uns
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
