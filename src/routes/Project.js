import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="some of my most recent works" />
      <Work />
      <Footer />
    </motion.div>
  );
};

export default Project;
