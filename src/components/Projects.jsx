import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'CodePlay',
      description: 'An interactive learning platform designed to help children aged 6–12 learn coding concepts in a fun and engaging way. Presented at MINI SCOPE 2026.',
      technologies: [ 'Next.js', 'PostgreSQL', 'tailwindcss', 'TypeScript', 'Vercel'],
      link: 'https://codey-next-three.vercel.app/'
    },
    {
      title: 'Gizmo E-Commerce Platform',
      description: ' e-commerce platform for mobile phone shopping, featuring product listings, shopping cart, and secure checkout.',
      technologies: ['HTML', 'MySQL', 'CSS'],
      link: 'https://www.linkedin.com/posts/uthpala-hansamali-170a64295_turning-an-idea-into-reality-gizmo-during-ugcPost-7442167773340004352-4iJX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeGieQBEBHYzTAmorSWPwPZWpxGwAyNDXU'
    }
    
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-number">0{index + 1}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects