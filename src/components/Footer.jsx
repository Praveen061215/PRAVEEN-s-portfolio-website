import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Footer.css';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${visible ? 'footer-visible' : ''}`}>
      {/* Animated top gradient border */}
      <div className="footer-border-anim" aria-hidden="true"></div>

      <div className="footer-inner">

        {/* Left — branding */}
        <div className="footer-brand">
          <img src={profileImg} className="footer-avatar" alt="Praveen" />
          <div>
            <span className="footer-name gradient-text">Praveen.Dev</span>
            <span className="footer-tagline">Software &amp; Mobile Developer</span>
          </div>
        </div>

        {/* Centre — nav links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-nav-link"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — socials + back-to-top */}
        <div className="footer-actions">
          <div className="footer-socials">
            <a href="https://github.com/Praveen061215" target="_blank" rel="noopener noreferrer"
              className="footer-social-btn" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
            <a href="https://www.linkedin.com/in/praveengunarathna-5a478535a" target="_blank" rel="noopener noreferrer"
              className="footer-social-btn" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href="mailto:praveennethsith06@gmail.com"
              className="footer-social-btn" aria-label="Email">
              <Mail size={15} />
            </a>
            <a href="tel:0760168785"
              className="footer-social-btn" aria-label="Phone">
              <Phone size={15} />
            </a>
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={14} className="arrow-icon" />
            <span>Top</span>
          </button>
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="footer-copy">
        <span>
          &copy; {new Date().getFullYear()} G.A.M. Praveen N. Gunarathna. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
