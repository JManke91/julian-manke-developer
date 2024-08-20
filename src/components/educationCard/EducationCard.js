import React from 'react';
import { Fade } from 'react-reveal';
import './EducationCard.css';

const EducationCard = ({ degree, institution, duration, description, theme }) => {
  return (
    <Fade bottom duration={1000}>
      <div className="education-card" style={{ backgroundColor: "white"}}>
        <div className="education-card-header">
          <h3 className="education-card-degree" style={{ color: theme.text }}>{degree}</h3>
          <h4 className="education-card-institution" style={{ color: theme.secondaryText }}>{institution}</h4>
        </div>
        <div className="education-card-body">
          <p className="education-card-duration" style={{ color: theme.secondaryText }}>{duration}</p>
          <p className="education-card-description" style={{ color: theme.text }}>{description}</p>
        </div>
      </div>
    </Fade>
  );
};

export default EducationCard;
