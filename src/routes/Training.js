import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import TrainingSection from "../components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="Polscy twórcy"
        text="Epoka oświecenia, przypada w Polsce na lata panowania króla Stanisława Augusta Poniatowskiego, czyli od 1764 roku, aż do trzeciego zaboru w roku 1795."
      />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
