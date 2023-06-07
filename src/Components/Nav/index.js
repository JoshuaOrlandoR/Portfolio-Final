import React from "react";
import './styles.css';
import github from '../../Assets/github-50-poppy.png';
import linkedin from '../../Assets/linkedin-50-poppy.png';
import youtube from '../../Assets/youtube-50-poppy.png';
import resume from '../../Assets/resume-50-poppy.png';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="social-container">
        <div className="nav-icon-div">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img className="icon" src={github} alt="Github"/>
          </a>
        </div>
        <div className="nav-icon-div">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <img className="icon" src={linkedin} alt="LinkedIn"/>
          </a>
        </div>
        <div className="nav-icon-div">
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <img className="icon" src={youtube} alt="YouTube"/>
          </a>
        </div>
        <div className="nav-icon-div">
          <a href="https://resume.com/" target="_blank" rel="noreferrer">
            <img className="icon" src={resume} alt="Resume"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
