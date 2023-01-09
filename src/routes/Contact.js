import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <Navbar />
      <HeroImg2 heading="Contact" text="Let's Chat " />
      <Form />
      <Footer />
    </motion.div>
  );
};

export default Contact;
