import React from "react";
import "./Hero.css";

import profileImage from "../assets/profile1.png"; // Add your image here

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-badge">Welcome to my portfolio</div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Uthpala Hansamali</span>
          </h1>

          <p className="hero-subtitle">
            Health ICT Undergraduate | Full-Stack Developer | AI & Data Analytics Enthusiast
          </p>

          <p className="hero-description">
            I am an undergraduate pursuing a Bachelor of Health Science Honours
            in Health Information and Communication Technology at Gampaha
            Wickramarachchi University of Indigenous Medicine, Sri Lanka.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">

          <div className="hero-avatar">
            <img
              src={profileImage}
              alt="Uthpala Hansamali"
              className="profile-image"
            />
          </div>

          <div className="floating-shapes">
            <span className="shape shape-1"></span>
            <span className="shape shape-2"></span>
            <span className="shape shape-3"></span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;