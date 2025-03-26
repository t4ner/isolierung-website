import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Sertificas from "./pages/Sertificas";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/zertifikate" element={<Sertificas />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutzerklarung" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
