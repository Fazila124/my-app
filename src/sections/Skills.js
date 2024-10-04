import React from 'react';
import './Skills.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Skills = () => {
  const skillData = [
    { name: 'HTML5 / CSS3', stars: 4 },
    { name: 'JavaScript (ES6+)', stars: 3 },
    { name: 'React', stars: 2 },
    { name: 'Node.js', stars: 2 },
    { name: 'PHP', stars: 2 },
    { name: 'SQL / NoSQL', stars: 4 },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading" style={{color:"green", fontWeight:800}}>My Skills</h2>
      <div className="skills-container">
        {skillData.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name" style={{color:"blue", fontWeight:700}}>{skill.name}</span>
            <div className="skill-rating">
              {/* Render the stars based on skill level */}
              {[...Array(5)].map((star, i) => (
                <FontAwesomeIcon
                key={i}
                icon={i < skill.stars ? solidStar : regularStar}
                className="fa-star"
                style={{ color: i < skill.stars ? '#ffcc00' : '#ddd' }} // Gold for filled, light gray for unfilled
              />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
