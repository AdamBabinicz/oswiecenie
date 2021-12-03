import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="Nurty literackie"
        text="W tym okresie w centrum zainteresowań człowieka był umysł i przede wszystkim te elementy ludzkiego życia, które podlegają rozumowemu wyjaśnieniu."
      />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
