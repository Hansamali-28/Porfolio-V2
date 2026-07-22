import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: import.meta.env.VITE_LINKEDIN_URL || '#' },
    { name: 'GitHub', url: import.meta.env.VITE_GITHUB_URL || '#' },
    { name: 'Facebook', url: import.meta.env.VITE_FACEBOOK_URL || '#' },
   ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.filter(link => link.url !== '#').map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="footer-text">
          &copy; {currentYear}uthpala hansamali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer