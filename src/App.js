import React, { useState } from 'react'; 
import { Link, Element } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact'; 
import './App.css';

const App = () => {
  // State to manage the toggle for mobile view
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the nav bar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="menu-toggle" onClick={toggleNav}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
          {/* Toggling the class based on isNavOpen */}
          <ul className={isNavOpen ? "nav-links open" : "nav-links"}>
            <li><Link to="home" smooth={true} duration={100} onClick={toggleNav}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={100} onClick={toggleNav}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={100} onClick={toggleNav}>Skills</Link></li>
            <li><Link to="gallery" smooth={true} duration={100} onClick={toggleNav}>Gallery</Link></li>
            <li><Link to="contact" smooth={true} duration={100} onClick={toggleNav}>Contact</Link></li>
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
