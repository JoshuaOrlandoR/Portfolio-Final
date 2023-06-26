import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './styles.css';

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onCardVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <VisibilitySensor onChange={onCardVisibilityChange} partialVisibility>
      {({ isVisible }) => (
        <div className={`project-card ${isVisible ? 'fade-in' : ''}`}>
          <h3 className={`project-title ${isVisible ? 'visible' : ''}`}>{project.title}</h3>
          <div className={`tech-stack ${isVisible ? 'visible' : ''}`}>
            {project.techStack.map((tech) => (
              <span className="tech" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <p className={`project-description ${isVisible ? 'visible' : ''}`}>{project.description}</p>
          <p className={`created-by ${isVisible ? 'visible' : ''}`}>
            Created By:
            {project.authors.length > 1 ?
              project.authors
                .map((author) => (
                  <a href={author.github} key={author.name} className="author-link">
                    {author.name}
                  </a>
                ))
                .reduce((prev, curr, index, array) => {
                  return index < array.length - 1 ? [prev, ', ', curr] : [prev, ' and ', curr];
                }, [])
              : 
              <a href={project.authors[0].github} key={project.authors[0].name} className="author-link">
                {project.authors[0].name}
              </a>
            }
          </p>
          <div className={`project-links ${isVisible ? 'visible' : ''}`}>
            <span className="cta-btn cta-btn--project">
              <a href={project.githubLink} className="github-link">
                GitHub
              </a>
            </span>
            <span
              className={`cta-btn cta-btn--project ${
                project.liveLink === 'N/A' ? 'disabled-link' : ''
              }`}
            >
              <a
                href={project.liveLink === 'N/A' ? '#' : project.liveLink}
                className="live-link"
              >
                Live Site
              </a>
            </span>
          </div>
          {project.video ? (
            <div className={`video-wrapper ${isVisible ? 'visible' : ''}`}>
              <iframe src={project.video} title={project.title}></iframe>
            </div>
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`project-image ${isVisible ? 'visible' : ''}`}
            />
          )}
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ProjectCard;
