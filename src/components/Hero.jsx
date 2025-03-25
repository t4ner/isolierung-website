import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
    <Navbar />
     <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero/home-hero.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl lg:text-7xl font-bold text-center mb-6 tracking-tight"
        >
          Mum Isolierung
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-2xl text-center max-w-3xl mb-12 text-gray-200"
        >
          Professionelle Isolierungslösungen für Ihr Zuhause
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-10 py-4 rounded-full text-base lg:text-lg font-semibold 
                   hover:bg-opacity-90 transition-all duration-300 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-1"
        >
          <Link to="/kontakt">Jetzt Kontaktieren</Link>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-white text-sm mb-2">Scroll</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
        >
          <motion.div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
    </>
   
  );
};

export default Hero;
