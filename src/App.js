import React, { useState, useEffect, useRef } from 'react'; 
import { Link, Element } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact'; 
import './App.css';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: homeRef, className: 'home-visible' },
      { ref: aboutRef, className: 'about-visible' },
      { ref: skillsRef, className: 'skills-visible' },
      { ref: galleryRef, className: 'gallery-visible' },
      { ref: contactRef, className: 'contact-visible' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
          // Add animation class when section is in view
          target.classList.add(target.dataset.animation);
        } else {
          // Remove animation class when section goes out of view
          target.classList.remove(target.dataset.animation);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => {
      if (section.ref.current) {
        section.ref.current.dataset.animation = section.className;
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="menu-toggle" onClick={toggleNav}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
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
        <Element name="home">
          <div ref={homeRef} className="section home-section"><Home /></div>
        </Element>
        <Element name="about">
          <div ref={aboutRef} className="section about-section"><About /></div>
        </Element>
        <Element name="skills">
          <div ref={skillsRef} className="section skills-section"><Skills /></div>
        </Element>
        <Element name="gallery">
          <div ref={galleryRef} className="section gallery-section"><Gallery /></div>
        </Element>
        <Element name="contact">
          <div ref={contactRef} className="section contact-section"><Contact /></div>
        </Element>
      </main>
    </div>
  );
};

export default App;
