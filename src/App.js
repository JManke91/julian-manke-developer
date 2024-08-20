// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/experience/Experience';
import Education from './pages/Education';
import Navbar from './components/Navbar';

import { chosenTheme } from "./Theme";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience theme={chosenTheme} />} /> {/* Pass theme to Experience */}
        <Route path="/education" element={<Education theme={chosenTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
