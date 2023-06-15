import React from "react";
import './styles.css';
import { FaArrowUp, FaGithub, FaLinkedin, FaYoutube, FaRegFileAlt } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({duration: 1100});
      }

  return (
    <div className="footer-container">
      <button className="scroll-top" onClick={scrollToTop}><FaArrowUp /></button>
      <div className="footer-social-container">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="footer-icon" />
        </a>
        <a href="https://resume.com/" target="_blank" rel="noreferrer">
          <FaRegFileAlt className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
