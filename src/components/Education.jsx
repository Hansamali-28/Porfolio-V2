import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-title">BHSc(Hons) in Health Information and Communication Technology</h3>
              <p className="education-institution">Gampaha Wickramarachchi University of Indigenous Medicine</p>
            </div>
            <span className="education-year">2023 - present</span>
          </div>
          <p className="education-description">
           currently pursuing a BSc (Hons) in Health Information and Communication Technology, focusing on healthcare systems, digital health solutions, data management, and the integration of ICT in modern healthcare services. Gaining practical and theoretical knowledge in health informatics, operating systems, programming.
          </p>
          <div className="education-highlights">
            <span className="highlight-tag">GPA: 3.2/4.0</span>
            
          </div>
        </div>
      
      

      <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-title">Certificate in Business Management Studies</h3>
              <p className="education-institution">Gampaha Wickramarachchi University of Indigenous Medicine</p>
            </div>
            <span className="education-year">2024 —2025</span>
          </div>
          <p className="education-description">
           Completed a certificate program covering core management principles, strategy, and business operations to complement my background in Healthcare ICT.
          </p>
          
        </div> 
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-title">Advanced Level Examination</h3>
              <p className="education-institution">B/Mahiyangana National College </p>
            </div>
            <span className="education-year">2019 May — 2022 February5</span>
          </div>
          <p className="education-description">
           G.C.E Advanced Level studies completed at B/Mahiyangana National College.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Education