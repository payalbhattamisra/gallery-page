import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe.jsx';
import Experiences from './Components/Experiences.jsx';
import Recommended from './Components/Recommended.jsx';
import Gallery from './Components/Gallery.jsx';

function App() {
  return (
    <div className="app">
      <AboutMe />
      <Experiences />
      <Recommended />
      <Gallery />
    </div>
  );
}

export default App;
