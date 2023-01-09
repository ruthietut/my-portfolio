import "./HeroImg2Styles.css";

import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class HeroImg2 extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }
  render() {
    return (
      <div className="hero-img" data-aos="fade-down">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
