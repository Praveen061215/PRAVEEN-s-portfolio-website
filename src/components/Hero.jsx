import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import './Hero.css';
import profile3Img from '../assets/profile3.png';

// Custom SVG Icons to replace missing brand icons in Lucide 1.0+
const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  const titles = [
    "Software Developer",
    "Mobile App Developer",
    "Web Developer"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }

      const speed = isDeleting ? 50 : 100;
      setTypingSpeed(speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="bg-blob blob-1 animate-float-1"></div>
      <div className="bg-blob blob-2 animate-float-2"></div>
      <div className="bg-blob blob-3"></div>

      <div className="hero-container">
        <div className="hero-content reveal-left active">
          <p className="hero-subtitle">Welcome to my space</p>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Praveen Gunarathna</span>
          </h1>
          <h2 className="hero-typing">
            I am a <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            A motivated Computing Science graduate specializing in creating modern, 
            high-performance web, mobile, and desktop applications. Focused on engineering 
            scalable products using Java, Flutter, PHP, and C#.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a
              href="/Praveen_Gunarathna_CV.pdf"
              download="G.A.M. Praveen N. Gunarathna - CV.pdf"
              className="btn-download-cv"
              aria-label="Download CV"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Praveen061215" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/praveengunarathna-5a478535a" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:praveennethsith06@gmail.com" className="social-icon-wrapper" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="tel:0760168785" className="social-icon-wrapper" aria-label="Phone">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Professional Profile Image Showcase */}
        <div className="hero-visual reveal-right active">
          <div className="profile-hero-frame glass-panel">
            <div className="profile-hero-glow"></div>
            <div className="profile-image-wrapper">
              <img src={profile3Img} alt="Praveen Gunarathna - Software Engineer" className="profile-hero-img" />
              <div className="profile-glass-shine"></div>
            </div>
            <div className="profile-hero-badge">
              <ShieldCheck size={18} className="badge-icon" />
              <span>SOFTWARE ENGINEER</span>
            </div>
          </div>
        </div>

      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About Section">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;

