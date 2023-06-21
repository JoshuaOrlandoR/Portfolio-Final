import React from 'react';
import ProjectCard from '../ProjectCard';
import './styles.css';

const Projects = () => {
  // This is where you would fetch your projects data. I am using a dummy array of objects for the demonstration.
  const projects = [
    {
      title: 'JACE: Java and Croissant Express',
      techStack: ['FullStack', 'MongoDB', 'Express',"React", "Node", "CSS",],
      description: 'Jace is a MERN application which will be used to provide a modernized fast-dining experience to patrons of a variety of restauaunts. Designed for a thoughtful user experince for both customers and staff!',
      authors: [
        { name: 'Anthony', github: 'https://github.com/Tonyoffor' },
        { name: 'Cezar', github: 'https://github.com/cdennis27' },
        { name: 'Esther', github: 'https://github.com/yerimechoi' },
        { name: 'Joshua', github: 'https://github.com/JoshuaOrlandoR' }
      ],
      githubLink: 'https://github.com/cdennis27/JACE',
      liveLink: 'https://jace1971.herokuapp.com/',
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project1.com/thumbnail.jpg'
    },
    {
      title: 'Ensemble: A Spotify Song Finder',
      techStack: ['React', 'Express', 'Node',"Spotify API", "Axios", "CSS"],
      description: 'Ensemble is a music recommendation tool that allows users to discover new songs and artists based on their input! Please note that due to a hosting issue, the site is not currently live! This will be updated soon, but if you want to try it out, visit the repo!',
      authors: [
        { name: 'Joshua', github: 'https://github.com/JoshuaOrlandoR' },
      ],
      githubLink: 'https://github.com/JoshuaOrlandoR/Spotify-Ensemble-App',
      liveLink: 'N/A',  // live site not available
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project2.com/thumbnail.jpg'
    },
    {
      title: 'Pic-Nic',
      techStack: ['HTML', 'CSS/BootStrap', 'JavaScript','Express', 'MySql', 'Sequelize', 'Handlebars', 'Node'],
      description: 'Pic-Nic is a simple social media site focused on food! Users can sign up, create, and share recipies!',
      authors: [
        { name: 'Kenny', github: 'https://github.com/kcl20' },
        { name: 'Joseph', github: 'https://github.com/jveyhl' },
        { name: 'Joshua', github: 'https://github.com/JoshuaOrlandoR' },
      ],
      githubLink: 'https://github.com/jveyhl/pic-nic',
      liveLink: 'N/A',  
      video: 'https://www.youtube.com/embed/video',
      thumbnail: 'https://project3.com/thumbnail.jpg'
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
