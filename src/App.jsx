import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CardServices from "./components/Services/CardServices";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardServices />
      <Footer />
    </div>
  );
}

export default App;
