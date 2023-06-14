import React from 'react';
import './styles.css';

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <h3 className="project-title">{project.title}</h3>
        <div className="tech-stack">
          {project.techStack.map(tech => <span className="tech" key={tech}>{tech}</span>)}
        </div>
        <p className="project-description">{project.description}</p>
        <p className="created-by">
          Created By: 
          {project.authors.map(author => 
            <a href={author.github} key={author.name} className="author-link">{author.name}</a>
          )}
        </p>
        <div className="project-links">
          <span className="cta-btn cta-btn--project">
            <a href={project.githubLink} className="github-link">GitHub</a>
          </span>
          <span className={`cta-btn cta-btn--project ${project.liveLink === 'N/A' ? 'disabled-link' : ''}`}>
            <a href={project.liveLink === 'N/A' ? '#' : project.liveLink} className="live-link">Live Site</a>
          </span>
        </div>
        {project.video ? 
          <div className="video-wrapper">
            <iframe src={project.video} title={project.title}></iframe>
          </div>
        :
          <img src={project.thumbnail} alt={project.title} className="project-image" />
        }
      </div>
    )
}

export default ProjectCard;
