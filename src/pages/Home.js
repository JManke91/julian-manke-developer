// src/pages/Home.js
import React, { useEffect } from 'react';
import './Home.css'; // Import the updated CSS
import profilePicture from '../assets/images/jm.jpg';
import githubIcon from '../assets/icons/svgs/brands/github.svg';
import xIcon from '../assets/icons/svgs/brands/x.svg';
import linkedInIcon from '../assets/icons/svgs/brands/linkedin.svg';

import StackIcon from "tech-stack-icons";

const Home = () => {
  // Hook to handle adding the 'in-view' class when the elements are scrolled into view
  useEffect(() => {
    const techCategories = document.querySelectorAll('.tech-category');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    techCategories.forEach((category) => {
      observer.observe(category);
    });

    // Cleanup the observer on unmount
    return () => {
      techCategories.forEach((category) => {
        observer.unobserve(category);
      });
    };
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Header Section */}
        <header className="home-header">
          <h1>Julian Manke</h1>
          <h2>Software Architect, iOS/Mobile Developer</h2>
          <p>Professional Software Developer with over 6 years of experience, specializing in iOS development with a background in Theoretical Physics and Machine Learning.</p>
        </header>

        {/* Photo Section */}
        <div className="home-photo">
           <img src={profilePicture} alt="Julian Manke" />
        </div>

        {/* Social Media Links */}
        <div className="home-social-links">
          <a href="https://github.com/JManke91" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/julian-m-702782150/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://x.com/alienbash?s=21" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="Twitter/X" />
          </a>
        </div>

        {/* Tech Stack Section */}
        <section className="home-tech-stack">
          <h3>My Tech Stack</h3>

          {/* Mobile Development */}
          <div className="tech-category">
            <h4>Mobile Development</h4>
            <div className="tech-icons">
              <StackIcon name="swift" className="icon-large" />
              <StackIcon name="kotlin" className="icon-large" />
              <StackIcon name="git" className="icon-large" />
              <StackIcon name="graphql" className="icon-large" />
              <StackIcon name="flutter" className="icon-large" />
            </div>
            <p>
              ⚛ Over 6 years of professional experience developing B2B apps using state-of-the-art technology.
              <br />
              ⚛ Experienced in developing natively with some experience in cross-platform development using Flutter and KMM.
              <br />
              ⚛ Experience in various fields such as automotive, media, and more, with teams up to 300 people.
              <br />
              ⚛ Expert knowledge in iOS-specific technologies and software architecture.
            </p>
          </div>

          {/* ML & AI */}
          <div className="tech-category">
            <h4>ML & AI</h4>
            <div className="tech-icons">
              <StackIcon name="openai" alt="openai" title="Open AI" className="icon-large" />
              <StackIcon name="python" className="icon-large" />
            </div>
            <p>
              ⚛ Deep understanding of ML algorithms due to a background in Mathematics and Theoretical Physics.
              <br />
              ⚛ Prototyping apps using self-trained ML models.
            </p>
          </div>

          {/* Frontend/Web Development */}
          <div className="tech-category">
            <h4>Frontend/Web Development</h4>
            <div className="tech-icons">
              <StackIcon name="js" className="icon-large" />
              <StackIcon name="html5" className="icon-large" />
              <StackIcon name="css3" className="icon-large" />
              <StackIcon name="reactjs" className="icon-large" />
            </div>
            <p>
              ⚛ Developed a photography portfolio website using React.js. Check it out on my GitHub.
              <br />
              ⚛ Features include server-side pagination, responsive image loading, and SSL integration.
            </p>
          </div>

          {/* Cloud Infra-Architecture */}
          <div className="tech-category">
            <h4>Cloud Infra-Architecture</h4>
            <div className="tech-icons">
              <StackIcon name="aws" className="icon-large" />
              <StackIcon name="docker" className="icon-large" />
            </div>
            <p>
              ⚛ Experience working with AWS and Docker for various projects.
              <br />
              ⚛ Comfortable with CI/CD pipelines and cloud-based deployments.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
