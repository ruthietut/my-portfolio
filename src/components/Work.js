import "./WorkCardStyles.css";

import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import AOS from "aos";
import "aos/dist/aos.css";
const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="work-container" data-aos="zoom-in">
      <h1 className="project-heading">Projects </h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              data-aos="zoom-in"
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
