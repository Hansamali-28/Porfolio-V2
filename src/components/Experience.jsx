import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'EHR Unit-Internship',
      company: 'Hemas Hospital (Wattala)',
      period: ' 2025 july- 2025 August',
      description: 'Internship in the EHR unit focusing on electronic patient records, data entry, system support, and healthcare data management processes.',
      achievements: [
      'Managed electronic patient records accurately.',
      'Assisted with healthcare data entry and verification.',
      'Supported hospital staff with EHR systems.',
      'Gained experience in healthcare data management']
    },
    {
    title: 'Development Officer Intern',
    company: 'Base Hospital - Mahiyangana',
    period: 'March 2024 – April 2024',
    description: 'Completed a Development Officer internship with experience in healthcare administration and medical data management.',
    achievements: [
      'Performed medical data entry',
      'Verified patient records',
      'Assisted with medical coding'
    ]
  },
  {
  title: 'Training Nurse Intern',
  company: 'Sethma Hospital, Gampaha',
  period: 'September 2023 – March 2024',
  description:
    'Completed a clinical training internship, gaining hands-on experience in patient care, ward assistance, and hospital operations.',
  achievements: [
    'Assisted with patient care activities',
    'Monitored vital signs',
    'Supported basic clinical procedures',
    'Maintained patient records'
  ]
}
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience