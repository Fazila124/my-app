// components/Home.js
import React from 'react';
import './Home.css'; // Import the styles

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="fade-in">Hello, I'm Fazi</h1>
        <p className="fade-in delay-1">
          I am a <span className="highlight">Student</span> with a passion for designing and developing
          modern web applications. I specialize in <span className="highlight">CS</span> and
          enjoy solving complex problems through creative solutions.
        </p>
        
        <p className="fade-in delay-2">
          Welcome to my portfolio, where I showcase my expertise in building interactive, user-friendly, 
          and visually appealing web solutions. With 2 years of experience, I’ve worked on diverse projects that 
          push the boundaries of technology and design.
        </p>
        
        <p className="fade-in delay-3">
          Whether you're looking for someone to bring your vision to life or need help refining your web presence,
          I’m here to help you reach your goals.
        </p>
        
        <div className="cta-buttons">
          <a href="#projects" className="btn slide-up delay-4">View My Work</a>
          <a href="#contact" className="btn btn-secondary slide-up delay-5">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
