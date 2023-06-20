import React, { useState, useEffect } from "react";
import './styles.css';
import { Link } from "react-scroll";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const words = [' web developer', ' creative mind', ' solution finder', ' code artist']; //ensure theres a space at the start of each string 

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setOpacity(1);
      }, 1000); // 1 second transition period
    }, 6000); // change the text every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="hero" className="container">
      <h1 className="hero-title name-title">Hi, my name is <span className="text-color-main name-span">Joshua Orlando</span>!</h1>
      <h1 className="hero-title position-title">
        I'm a
        <span className="text-color-main position-span" style={{ opacity: opacity, transition: 'opacity 1s ease-in-out' }}>{words[index]}</span>
      </h1>
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
