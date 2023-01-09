import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2} }}
    >
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </motion.div>
  );
};

export default Home;
