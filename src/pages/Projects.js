// src/pages/Projects.js
import React, { useEffect, useState } from 'react';

import './Projects.css'; // Import the CSS for this page
//import TopButton from "../../components/topButton/TopButton";


import iosappimage from '../assets/images/app/timevault.jpg';
import websiteimage from '../assets/images/app/website.jpg';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';


const projectsData = [
  {
    title: 'Photography Portfolio Website',
    description: 'A photography portfolio website showcasing my work as a photographer, featuring server-side pagination, CMS, responsive image loading using Content Delivery (CDA) API, Mobile Optimization, CI/CD via GitHub Actions connected by FTP to Host, and SSL integration.',
    techStack: ['React.js', 'Node.js', 'CSS3', 'HTML5', 'Framer Motion', 'SSL', 'git'],
    liveLink: 'https://www.shotat24fps.com/',
    githubLink: 'https://github.com/JManke91/portfolio_homepage_julian_manke_react',
    image: websiteimage, 
    isVertical: true,
  },
  {
    title: 'Mobile iOS App for Time Tracking',
    description: 'An iOS app for time management, focusses on minimalistic design while maintaining critical features you would expect of a time tracking app. Saved Data can be filtered based on date and/or given tags. Tracking can be fully automated by using geofencing and data can optionally be synced to your icloud.',
    techStack: ['Swift', 'Xcode', 'Combine', 'git', 'SwiftUI', 'Core Data', 'Swift Data', 'MVVM', 'Cocoa Pods', 'Swift Package Manager'],
    liveLink: 'https://apps.apple.com/de/app/time-vault/id6504683305',
    githubLink: '', // No GitHub link provided
    image: iosappimage, 
    isVertical: true,
  },
  // Add more projects as needed
];

const Projects = () => {
  const [animationClass, setAnimationClass] = useState('');
  useEffect(() => {
    // Add the animation class after the component mounts
    setTimeout(() => {
      setAnimationClass('fade-in');
    }, 100); // Delay to allow for smooth animation
  }, []);

  return (
    <div className={`projects-wrapper ${animationClass}`}>
      <div className="projects-container">
        <header className="projects-header">
          <h1>Projects</h1>
          <p>Here is a selection of private projects I have been working on.</p>
        </header>

        <section className="projects-list">
        {projectsData.map((project, index) => (
  <div
    key={index}
    className={`project-item ${project.isVertical ? 'vertical-layout' : ''}`}
  >
    <div className="project-content">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
      
    </div>
    {project.image && (
      <div className="image-container">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-image"
        />
      </div>
    )}
    <div className="project-links">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          Live Project <FaExternalLinkAlt />
        </a>
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository <FaGithub />
          </a>
        )}
      </div>
  </div>
))}

        </section>
      </div>
    </div>
  );
};

export default Projects;
