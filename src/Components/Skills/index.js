import React, { useState } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaRedux, 
  FaNodeJs, 
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";import './styles.css';

import {
  SiJquery,
  SiRedux,
  SiVite,
  SiHandlebarsdotjs,
  SiExpress,
  SiMongodb,
  SiPwa,
  SiGraphql,
  SiWebflow
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FiServer } from "react-icons/fi";


const SKILLS_MAP = {
  'Front-End': [
    { name: 'HTML', icon: FaHtml5, color: '#231f20' },
    { name: 'CSS', icon: FaCss3Alt, color: '#379ad6' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#f0dc4e' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Redux', icon: SiRedux, color: '#9976cec' },
    { name: 'Vite', icon: SiVite, color: '#8299ff' },
    { name: 'Handlebars', icon: SiHandlebarsdotjs, color: '#423426' },
    { name: 'Jquery', icon: SiJquery, color: '#1266a9' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#563d7c' },
  ],
  'Back-End': [
    { name: 'Node.js', icon: FaNodeJs, color: '#539e43' },
    { name: 'Express', icon: SiExpress, color: '#000' },
    { name: 'Restful API', icon: TbApi, color: '#f88e1d' },
    { name: 'MySQL', icon: GrMysql, color: '#f29111' },
    { name: 'MongoDB', icon: SiMongodb, color: '#4faa41' },
    { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
  ],
  'Other Technologies': [
    { name: 'Git', icon: FaGitAlt, color: '#231f20' },
    { name: 'Heroku', icon: FiServer, color: '#6762a7' },
    { name: 'PWA', icon: SiPwa, color: '#5a06c9' },
    { name: 'WebFlow', icon: SiWebflow, color: '#4353ff' },
  ],
};

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleButtonClick = (category) => {
    setCurrentCategory(category);
  };

  const renderIcons = () => {
    if (!currentCategory) return null;
  
    const skills = SKILLS_MAP[currentCategory];
    return skills.map(skill => {
      const Icon = skill.icon;
      return (
        <div className="single-skill-wrapper">
          <div className="skill-icon" style={{ color: skill.color }}>
            <Icon size={70} />
          </div>
          <div className="skill-name">
            <p>{skill.name}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="skills" className="skills-container" style={{position: "relative"}}>
      {/* SVG background */}
      <svg style={{position: "absolute", width: "100%", height: "100%", zIndex: -1}} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100 0,87" fill="#DD4949" />
      </svg>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-content-wrapper">
        <div className="button-wrapper">
          <button className="skill-button" onClick={() => handleButtonClick('Front-End')}>Front-End</button>
          <button className="skill-button" onClick={() => handleButtonClick('Back-End')}>Back-End</button>
          <button className="skill-button" onClick={() => handleButtonClick('Other Technologies')}>Other Technologies</button>
        </div>
        <div className="icon-wrapper">
          <div className="skill-icon-title-wrapper">
            <h2 className="skill-title-h2">{currentCategory}</h2>
          </div>
          <div className="skill-icon-list">
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
