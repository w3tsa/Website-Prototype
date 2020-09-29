import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Second.scss";
const Second = () => {
  AOS.init();
  return (
    <div
      className="Second-container"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-duration="1000"
    >
      <div className="second-text">
        <p>
          SDCO Partners helps Business Reaimageing their Brand.
          <br />
          Redifie theer industry while leading consumers
          <br />
          To a new experience.
        </p>
        <button
          href="#"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-duration="2000"
        >
          More
        </button>
      </div>
      <div className="services">
        <p>Services</p>
        <ul>
          <li>Art Direction</li>
          <li>Brand Identity</li>
          <li>Brand Positioning</li>
          <li>Content Creation</li>
          <li>Digital Media</li>
          <li>Environment</li>
        </ul>
      </div>
    </div>
  );
};

export default Second;
