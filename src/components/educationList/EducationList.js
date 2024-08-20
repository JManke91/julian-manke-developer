import React from 'react';
import EducationCard from '../../components/educationCard/EducationCard'; // Adjust path as necessary
import './EducationList.css'; // Create this CSS file

const EducationList = ({ educationEntries, theme }) => {
  return (
    <div className="education-list">
      {educationEntries.map((education, index) => (
        <EducationCard
          key={index}
          degree={education.degree}
          institution={education.institution}
          duration={education.duration}
          description={education.description}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default EducationList;
