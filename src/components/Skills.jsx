import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker']
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'SQL', 'TypeScript']
    },
    {
      title: 'Backend Development',
      skills: ['React', 'Node.js', 'Express', 'MySQL']
    },
    {
      title: 'Frontend Development',
      skills: ['React','Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills