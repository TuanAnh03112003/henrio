import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-main-title">Music WordPress Theme</h1>
        <h2 className="hero-large-text">
          DEDICATED TO BANDS, LABELS,<br />
          FESTIVALS, MUSIC STORE AND<br />
          MORE...
        </h2>
        <h3 className="hero-small-text">NO CODING REQUIRED</h3>
        <button className="hero-view-demos-btn">VIEW DEMOS</button>
      </div>
      <rs-loader style={{backgroundColor: 'rgb(255, 255, 255)', display: 'none'}} className="spinner2">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </rs-loader>
    </section>
  );
}

export default Hero;
