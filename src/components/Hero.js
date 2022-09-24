import React from "react";
import "../StyleSheet/hero.css";
import bannerImg from "../images/banner.png";
import ads from "../images/ads.png";

function Hero() {
  return (
    <div className="heroSection">
      <div className="bannerContainer">
        <img src={bannerImg} alt="OLX Products Banner" />
      </div>
      <div className="addContainer">
        <img
          src={ads}
          alt="ads"
        />
      </div>
    </div>
  );
}

export default Hero;
