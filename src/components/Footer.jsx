import React from 'react'
import './Footer.css'

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: import.meta.env.VITE_LINKEDIN_URL || '#',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: import.meta.env.VITE_GITHUB_URL || '#',
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: import.meta.env.VITE_FACEBOOK_URL || '#',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: import.meta.env.VITE_EMAIL_URL || '#',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks
            .filter((link) => link.url !== '#')
            .map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
        </div>

        <p className="footer-text">
          © {currentYear} Uthpala Hansamali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer