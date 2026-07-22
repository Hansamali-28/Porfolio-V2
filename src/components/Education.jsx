import React from 'react'
import './Education.css'

const Education = () => {

  const educationData = [
    {
      title: 'BHSc(Hons) in Health Information and Communication Technology',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      year: '2023 - Present',
      description:
        'Currently pursuing a BSc (Hons) in Health Information and Communication Technology, focusing on healthcare systems, digital health solutions, data management, and the integration of ICT in modern healthcare services. Gaining practical and theoretical knowledge in health informatics, operating systems, and programming.',
      highlights: ['GPA: 3.2/4.0']
    },

    {
      title: 'Certificate in Business Management Studies',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      year: '2024 - 2025',
      description:
        'Completed a certificate program covering core management principles, strategy, and business operations to complement my background in Healthcare ICT.',
      highlights: []
    },

    {
      title: 'Advanced Level Examination',
      institution: 'B/Mahiyangana National College',
      year: '2019 - 2022',
      description:
        'G.C.E. Advanced Level studies completed at B/Mahiyangana National College.',
      highlights: []
    }
  ]


  return (
    <section id="education" className="education">

      <h2 className="section-title">
        Education
      </h2>


      <div className="education-container">

        {educationData.map((item, index) => (

          <div
            key={index}
            className="education-card"
          >

            <div className="education-header">

              <div>

                <h3 className="education-title">
                  {item.title}
                </h3>


                <p className="education-institution">
                  {item.institution}
                </p>

              </div>


              <span className="education-year">
                {item.year}
              </span>

            </div>


            <p className="education-description">
              {item.description}
            </p>


            {item.highlights.length > 0 && (

              <div className="education-highlights">

                {item.highlights.map((highlight, idx) => (

                  <span
                    key={idx}
                    className="highlight-tag"
                  >
                    {highlight}
                  </span>

                ))}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  )
}

export default Education