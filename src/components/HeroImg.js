import "./HeroImgStyles.css";

import React from "react";

import introImg from "../assets/intro-Img.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="" />
      </div>
      <div className="content">
        <p>Hi, my name is Ruth</p>
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
