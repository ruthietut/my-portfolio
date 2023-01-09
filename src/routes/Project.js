import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
    
    initial={{ width: 0 }}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2} }}
    >
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="some of my most recent works" />
      <Work />
      <Footer />
    </motion.div>
  );
};

export default Project;
