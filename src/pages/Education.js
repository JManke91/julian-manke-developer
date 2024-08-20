import React from 'react';
import EducationList from '../components/educationList/EducationList'; // Adjust path as necessary
import './Education.css'; // Assuming this CSS file already exists

const sampleEducationEntries = [
  {
    degree: 'Master of Science, Theoretical Physics',
    institution: 'LMU Munich',
    duration: '2015 - 2017',
    description: 'Emphasis on numerical simulations using C in theoretical Plasma-Physics. Maser Thesis: ”Memory load due to particle history in FDTD simulations“, Graded 1.0',
  },
  {
    degree: 'Bachelor of Science, Physics',
    institution: 'University of Constance',
    duration: '2010 - 2014',
    description: 'Bachelor-Thesis: ”Computersimulation of interacting nano Au wires at high temperature“, Graded 1.0.',
  },
  // Add more sample entries if needed
];

const Education = ({ theme }) => {
  return (
    <div className="education-page">
      <h1 className="education-page-title" style={{ color: theme.text }}>Education</h1>
      <EducationList educationEntries={sampleEducationEntries} theme={theme} />
    </div>
  );
};

export default Education;
