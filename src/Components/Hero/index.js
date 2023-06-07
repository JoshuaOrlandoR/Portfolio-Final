import React from "react";
import './styles.css';

const Hero = () => {
  return (
    <div id="hero" className="container">
      <h1 className="hero-title name-title">Hi, my name is <span className="text-color-main">Joshua Orlando</span>!</h1>
      <h1 className="hero-title position-title">I'm a <span className="text-color-main">web developer</span>.</h1>
      <div className="hero-cta">
        <span className="cta-btn cta-btn--hero"><a href="#skills">Skills</a></span>
        <span className="cta-btn cta-btn--hero"><a href="#projects">Projects</a></span>
        <span className="cta-btn cta-btn--hero"><a href="#about">About</a></span>
        <span className="cta-btn cta-btn--hero"><a href="#contact">Contact</a></span>
      </div>
    </div>
  );
};

export default Hero;
