import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="Oświecenie w Polsce"
        text="Na dworze króla Stanisława Augusta zbierało się na tzw. obiadach czwartkowych liczne grono ówczesnych pisarzy i myślicieli."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
