import React from 'react';
import ProjectCard from '../ProjectCard';
import './styles.css';

const Projects = () => {
  // This is where you would fetch your projects data. I am using a dummy array of objects for the demonstration.
  const projects = [
    {
      title: 'Project 1',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      description: 'This is a description of project 1',
      authors: [
        { name: 'Author1', github: 'https://github.com/author1' },
      ],
      githubLink: 'https://github.com/author1/project1',
      liveLink: 'https://project1.com',
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project1.com/thumbnail.jpg'
    },
    {
      title: 'Project 2',
      techStack: ['React', 'Node.js', 'MongoDB'],
      description: 'This is a description of project 2',
      authors: [
        { name: 'Author2', github: 'https://github.com/author2' },
      ],
      githubLink: 'https://github.com/author2/project2',
      liveLink: 'https://project2.com',
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project2.com/thumbnail.jpg'
    },
    {
      title: 'Project 3',
      techStack: ['Python', 'Django', 'PostgreSQL'],
      description: 'This is a description of project 3',
      authors: [
        { name: 'Author3', github: 'https://github.com/author3' },
      ],
      githubLink: 'https://github.com/author3/project3',
      liveLink: 'N/A',  // live site not available
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project3.com/thumbnail.jpg'
    },
    {
      title: 'Project 4',
      techStack: ['Java', 'Spring Boot', 'MySQL'],
      description: 'This is a description of project 4',
      authors: [
        { name: 'Author4', github: 'https://github.com/author4' },
      ],
      githubLink: 'https://github.com/author4/project4',
      liveLink: 'https://project4.com',
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project4.com/thumbnail.jpg'
    },
    {
      title: 'Project 5',
      techStack: ['Ruby', 'Ruby on Rails', 'SQLite'],
      description: 'This is a description of project 5',
      authors: [
        { name: 'Author5', github: 'https://github.com/author5' },
        { name: 'Author6', github: 'https://github.com/author5' }
      ],
      githubLink: 'https://github.com/author5/project5',
      liveLink: 'N/A',  // live site not available
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project5.com/thumbnail.jpg'
    },
];


  return (
    <div id="projects" className="project-container">
      <div className="project-container-title-wrapper">
        <h2 className='title'>Projects</h2>
      </div>
      <div className="project-container-card-wrapper">
        {projects.map((project, index) => 
          <ProjectCard project={project} key={index} />
        )}
      </div>
    </div>
  );
};

export default Projects;
