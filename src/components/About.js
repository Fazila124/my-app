// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-details">
            <p>
              Hello! I’m <span className="highlight">[Your Name]</span>, a passionate
              <span className="highlight"> [Your Profession]</span> from [Location].
              I specialize in creating beautiful, functional, and responsive websites
              and applications. I love turning complex problems into simple, elegant
              solutions.
            </p>
            <p>
              I have a strong foundation in <span className="highlight">HTML, CSS, JavaScript, React, and PHP</span>, and I am
              constantly learning new tools and technologies to stay updated in this
              fast-paced industry. In my spare time, I enjoy [mention hobbies or interests].
            </p>
          </div>

          <div className="about-image">
            <img src="[path_to_image]" alt="[Your Name]" />
          </div>
        </div>

        <div className="skills-section">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>SQL & Databases</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
