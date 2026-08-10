import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = (e) => {
    // Create an animated ripple effect originating from the click
    const x = e.clientX;
    const y = e.clientY;
    
    // Determine target color based on what we are switching TO
    const targetColor = !isLightMode ? '#f1f5f9' : '#000000';
    
    // Create overlay for animation
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    overlay.style.backgroundColor = targetColor;
    document.body.appendChild(overlay);

    // Trigger animation
    setTimeout(() => {
      overlay.classList.add('expand');
    }, 10);

    // After overlay covers screen, swap themes
    setTimeout(() => {
      const newTheme = !isLightMode;
      setIsLightMode(newTheme);
      
      if (newTheme) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      }
      
      // Dispatch event in case other components need to know
      window.dispatchEvent(new Event('themeChanged'));
      
      // Fade out overlay
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
      }, 500);
      
    }, 400); // sync with expand animation
  };

  return (
    <button 
      className={`theme-toggle-btn ${isLightMode ? 'is-light' : 'is-dark'}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="theme-toggle-icon-container">
        <Sun className="icon-sun" size={18} />
        <Moon className="icon-moon" size={18} />
      </div>
    </button>
  );
};

export default ThemeToggle;
