import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"; // Corrected path

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <p> new</p>
            <img src={hand_icon} alt="hand waving" className="hero-icon" />
          </div>
          <p>collections </p>
          <p> for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" className="button-icon" />
        </div>

        <div className="hero-right">
          <img src={hero_image} alt="Model showcasing new collection" />
        </div>
      </div>
    </>
  );
};

export default Hero;
