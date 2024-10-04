import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact'; 
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={100}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={100}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={100}>Skills</Link></li>
            <li><Link to="gallery" smooth={true} duration={100}>Gallery</Link></li>
            <li><Link to="contact" smooth={true} duration={100}>Contact</Link></li>


          </ul>
        </nav>
      </header>
      
      <main>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="gallery"><Gallery /></Element>
        <Element name="contact"><Contact /></Element>
        
      </main>
    </div>
  );
};

export default App;
