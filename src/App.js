import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Samples from './components/Samples';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';


function App() {
  return (
    <div className="main-background">
      <div className="App rtl">
        <Header />
        <div className="container">
          <div className="content">
              <div className="flex justify-center">
                <About />
              </div>
            <Experience />
            <Samples />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
