import "./FormStyles.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="form" data-aos="zoom-in">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>

        <textarea rows="6" placeholder="type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
