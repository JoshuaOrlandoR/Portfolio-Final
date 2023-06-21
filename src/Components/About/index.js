import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './styles.css';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["https://via.placeholder.com/300/0000FF/808080", "https://via.placeholder.com/300/00FF00/808080", "https://via.placeholder.com/300/FF0000/808080"];

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <div id="about" className="about-container">
      <svg style={{position: "absolute", width: "100%", height: "80%", zIndex: -1}} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,10 100,80 0,70" fill="#DD4949" />
      </svg>
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-images">
          <div className="image-carousel">
            <FaArrowCircleLeft className="carousel-arrow left" onClick={previousSlide} />
            <img className="carousel-image" src={images[currentImageIndex]} alt="about me" />
            <FaArrowCircleRight className="carousel-arrow right" onClick={nextSlide} />
          </div>
        </div>
        <div className="about-text">
          <p>Welcome! I'm a problem-solver passionate about innovation and tackling challenges. I began my journey majoring in Criminology at the University of Toronto.</p>
          <p>When the pandemic hit, my path pivoted towards web development—a field that combines creativity, problem-solving, and constant evolution.</p>
          <p>My experiences in copywriting and freelance writing—areas where creativity meets problem solving—served as a solid foundation. To enhance my skills, I undertook further studies in web development at UofT's School of Continuing Studies.</p>
          <p>Today, I seize every opportunity to create practical and captivating applications. I'm excited to explore more, make impactful contributions, and shape a better web experience for all.</p>
          <p>Let's connect and make the web a better place together!</p>
          <a href="#resume" className="resume-button">View My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
