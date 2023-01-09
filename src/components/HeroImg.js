import "./HeroImgStyles.css";

import React, { useEffect } from "react";

import introImg from "../assets/intro-Img.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroImg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero" data-aos="fade-down">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="" />
      </div>
      <div className="content">
        <p>Hi, my name is Ruth Obasi </p>
        <h1>Front-end Engineer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
