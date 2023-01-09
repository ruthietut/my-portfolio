import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
    
    initial={{ width: 0 }}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2} }}
    >
      <Navbar />
      <HeroImg2 heading="About" text="A friendly software engineer" />
      <AboutContent />
      <Footer />
    </motion.div>
  );
};

export default About;
