import React from 'react';
import './About.css'; // Import the styles
// Replace with the correct path to your image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image fade-in">
          <img src="passportsize.jpeg" alt="Your Name" />
        </div>
        <div className="about-content slide-in">
          <h2>About Me</h2>
          <h3>
            Hello! I'm <span className="highlight">Fazi</span>, a passionate and creative web developer with a focus
            on building responsive, user-friendly, and engaging websites. I have a deep understanding of various
            front-end technologies and am always excited to explore new trends and technologies in the web development space.
          

          
            Over the years, I have developed projects ranging from simple websites to more complex web applications. I love 
            bringing ideas to life through code and continuously refining my skills to create even more intuitive and dynamic experiences.
          

          
            If you're looking for a developer who can turn your vision into reality, I’m here to help. Feel free to explore 
            my portfolio and get in touch with me!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
