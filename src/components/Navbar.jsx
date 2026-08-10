import React, { useState, useEffect } from 'react';
import {
  Menu, X, User, Cpu, FolderOpen, Briefcase, Mail, Zap
} from 'lucide-react';
import './Navbar.css';
import profileImg from '../assets/profile.jpg';

const navLinks = [
  { label: 'About',      href: '#about',      icon: <User      size={14} /> },
  { label: 'Skills',     href: '#skills',     icon: <Cpu       size={14} /> },
  { label: 'Projects',   href: '#projects',   icon: <FolderOpen size={14} /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase size={14} /> },
  { label: 'Contact',    href: '#contact',    icon: <Mail      size={14} /> },
];

const Navbar = () => {
  const [isScrolled,        setIsScrolled]        = useState(false);
  const [isMobileMenuOpen,  setIsMobileMenuOpen]  = useState(false);
  const [activeLink,        setActiveLink]        = useState('');
  const [mounted,           setMounted]           = useState(false);

  /* slide-down entrance on mount */
  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  /* glassmorphic scroll state */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* highlight active section via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveLink(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${mounted ? 'navbar-mounted' : ''}`}>

      {/* top animated gradient line */}
      <div className="navbar-top-line" aria-hidden="true" />

      <div className="navbar-container">

        {/* ── Logo / Brand ───────────────────────────── */}
        <a href="#hero" className="navbar-logo" onClick={closeMobileMenu} aria-label="Home">
          {/* spinning ring avatar */}
          <div className="nav-avatar-wrap">
            <div className="nav-avatar-ring" aria-hidden="true" />
            <img src={profileImg} className="nav-avatar-img" alt="Praveen Gunarathna" />
            <span className="nav-avatar-status" aria-label="Available" />
          </div>

          <div className="nav-brand-text">
            <span className="logo-name gradient-text">Praveen.Dev</span>
            <span className="logo-sub">Software Engineer</span>
          </div>
        </a>

        {/* ── Desktop Nav ─────────────────────────────── */}
        <ul className="nav-menu" role="list">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <li key={link.label} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav-link-icon">{link.icon}</span>
                  <span className="nav-link-label">{link.label}</span>
                  <span className="nav-link-bar" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Actions: Theme + Hire Me CTA ────────────────────── */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#contact" className="hire-btn" onClick={closeMobileMenu} aria-label="Hire Me">
            <Zap size={14} className="hire-btn-icon" />
            <span>Hire Me</span>
            <span className="hire-btn-glow" aria-hidden="true" />
          </a>
        </div>

        {/* ── Mobile Hamburger ────────────────────────── */}
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? 'toggle-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* ── Mobile Drawer ───────────────────────────── */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`} role="dialog" aria-modal="true">
        {/* decorative blobs inside drawer */}
        <span className="drawer-blob drawer-blob-1" aria-hidden="true" />
        <span className="drawer-blob drawer-blob-2" aria-hidden="true" />

        {/* profile mini-card */}
        <div className="drawer-profile">
          <img src={profileImg} className="drawer-avatar" alt="Praveen Gunarathna" />
          <div>
            <p className="drawer-profile-name gradient-text">Praveen Gunarathna</p>
            <p className="drawer-profile-role">Software &amp; Mobile Developer</p>
          </div>
        </div>

        <ul className="mobile-nav-menu" role="list">
          {navLinks.map((link, i) => (
            <li key={link.label} className="mobile-nav-item" style={{ '--i': i }}>
              <a href={link.href} className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-link-icon">{link.icon}</span>
                {link.label}
                <span className="mobile-link-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary drawer-cta" onClick={closeMobileMenu}>
          <Zap size={15} /> Hire Me
        </a>
      </div>

      {/* backdrop */}
      {isMobileMenuOpen && (
        <div className="drawer-backdrop" onClick={closeMobileMenu} aria-hidden="true" />
      )}
    </nav>
  );
};

export default Navbar;
