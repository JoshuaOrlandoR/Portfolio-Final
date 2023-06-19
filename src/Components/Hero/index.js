import React from "react";
import './styles.css';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero" className="container">
      <h1 className="hero-title name-title">Hi, my name is <span className="text-color-main name-span">Joshua Orlando</span>!</h1>
      <h1 className="hero-title position-title">I'm a <span className="text-color-main position-span">web developer</span>.</h1>
      <div className="hero-cta">
        <Link to="skills" className="cta-btn-hero" smooth={true} duration={1000}>
          Skills
        </Link>
        <Link to="projects" className="cta-btn-hero" smooth={true} duration={1200}>
          Projects
        </Link>
        <Link to="about" className="cta-btn-hero" smooth={true} duration={1600}>
          About
        </Link>
        <Link to="contact" className="cta-btn-hero" smooth={true} duration={1800}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Hero;
