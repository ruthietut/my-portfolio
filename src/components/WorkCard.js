import "./WorkCardStyles.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="project-card" data-aos="zoom-in">
      <img src={props.imgsrc} alt="firstProjectImg" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>

        <div className="pro-btns">
          <a href={props.view} className="btn">
            View
          </a>
          <a href={props.source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
