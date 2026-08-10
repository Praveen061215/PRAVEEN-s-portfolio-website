import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import TechBackground from './components/TechBackground';
import Startup from './components/Startup';
import SectionDivider from './components/SectionDivider';

import bgSilhouette from './assets/half.png';
import './App.css';
import './components/SectionDesign.css';

function App() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120; // Trigger when element is 120px in viewport
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Initial call after component mounts
    setTimeout(revealOnScroll, 150);

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {showStartup && <Startup onComplete={() => setShowStartup(false)} />}
      
      <div className={`app-content-wrapper ${!showStartup ? 'animate-app-in' : 'app-hidden'}`}>
        <TechBackground />
        
        {/* Bottom Left Fixed Background Portrait */}
        <div className="bottom-left-bg-portrait">
          <img src={bgSilhouette} alt="" className="bg-portrait-img" />
          <div className="bg-portrait-glow" />
        </div>

        <Navbar />
        <Hero />

        {/* ── Section Divider: Hero → About ── */}
        <SectionDivider label="About" />

        <About />

        {/* ── Section Divider: About → Skills ── */}
        <SectionDivider label="Skills" />

        <Skills />

        {/* ── Section Divider: Skills → Projects ── */}
        <SectionDivider label="Projects" />

        <Projects />

        {/* ── Section Divider: Projects → Experience ── */}
        <SectionDivider label="Experience" />

        <Experience />

        {/* ── Section Divider: Experience → Testimonials ── */}
        <SectionDivider label="Testimonials" />

        <Testimonials />

        {/* ── Section Divider: Testimonials → Contact ── */}
        <SectionDivider label="Contact" />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;

