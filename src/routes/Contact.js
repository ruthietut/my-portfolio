import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    
    initial={{ width: 0 }}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2} }}
    >
      <Navbar />
      <HeroImg2 heading="Contact" text="Let's Chat " />
      <Form />
      <Footer />
    </motion.div>
  );
};

export default Contact;
