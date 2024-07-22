// src/App.js
import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Samples from './components/Samples';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App rtl">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <About />
          </div>
          <div className="space-y-4">
            <Education />
            <Experience />
          </div>
        </div>
        <Samples />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
