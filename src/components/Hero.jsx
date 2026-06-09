import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

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

        <div className="hero-visual reveal-right active">
          <div className="visual-card-wrapper flip-card">
            <div className="flip-card-inner">
              
              {/* Front Face: Profile Card */}
              <div className="glass-panel visual-card flip-card-front">
                <div className="profile-photo-container">
                  <div className="profile-glow-ring"></div>
                  <img src={profileImg} className="profile-photo" alt="G.A.M. Praveen N. Gunarathna" />
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Praveen Gunarathna</h3>
                  <p className="profile-title">Software Developer</p>
                  <div className="profile-badges">
                    <span className="profile-badge">BSc (Hons)</span>
                    <span className="profile-badge">Flutter</span>
                    <span className="profile-badge">PHP</span>
                  </div>
                  <p className="flip-hint">Hover to reveal tech profile</p>
                </div>
              </div>

              {/* Back Face: JSON Code */}
              <div className="glass-panel visual-card flip-card-back">
                <div className="card-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="card-title-text">developer.json</span>
                </div>
                <div className="card-code">
                  <pre>
                    <code>
                      <span className="code-key">"name"</span>: <span className="code-val">"Praveen Gunarathna"</span>,<br />
                      <span className="code-key">"role"</span>: <span className="code-val">"Full Stack Developer"</span>,<br />
                      <span className="code-key">"education"</span>: &#123;<br />
                      &nbsp;&nbsp;<span className="code-key">"degree"</span>: <span className="code-val">"BSc (Hons)"</span>,<br />
                      &nbsp;&nbsp;<span className="code-key">"university"</span>: <span className="code-val">"Kingston London"</span><br />
                      &#125;,<br />
                      <span className="code-key">"skills"</span>: [<br />
                      &nbsp;&nbsp;<span className="code-val">"Flutter"</span>, <span className="code-val">"Dart"</span>, <span className="code-val">"PHP"</span>,<br />
                      &nbsp;&nbsp;<span className="code-val">"Java"</span>, <span className="code-val">"MySQL"</span>, <span className="code-val">"C#"</span><br />
                      ],<br />
                      <span className="code-key">"passion"</span>: <span className="code-val">"Creating software"</span>
                    </code>
                  </pre>
                </div>
              </div>

            </div>
            <div className="visual-glow"></div>
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
