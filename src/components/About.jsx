import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <p>
            Passionate about healthcare innovation and software development, 
            I enjoy building digital solutions that improve healthcare services and patient experiences.
            Currently, I am expanding my skills in full-stack development, artificial intelligence, and 
            data analytics to contribute to the digital transformation of the healthcare industry.
          </p>
          <p>
            Currently, I am expanding my skills in full-stack development, artificial intelligence, 
            and data analytics to contribute to the digital transformation of the healthcare industry.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About