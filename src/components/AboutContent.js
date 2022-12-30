import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";
import aboutImg2 from "../assets/aboutImg2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who i am</h1>
        <p>
          I am a software engineer. I create responsive, secure website, using
          javascript nad raect.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutImg}  className="img" alt="about" />
          </div>
          <div className="img-stack bottom">
            <img src={aboutImg2} className="img" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
