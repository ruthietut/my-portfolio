import "./AboutContentStyles.css";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";
import aboutImg2 from "../assets/aboutImg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about" data-aos="zoom-in">
      <div className="left">
        <h1>Who i am</h1>
        <p>
          I am a software engineer. I create responsive, secure website, using
          javascript and react.js.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutImg} className="img" alt="about" />
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
