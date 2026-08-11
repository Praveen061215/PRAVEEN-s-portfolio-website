import React, { useEffect, useRef } from 'react';
import './TechBackground.css';
import bgSilhouette from '../assets/half.png';

/* ─────────────────────────────────────────────────────────────
   TechBackground
   • Full-screen fixed canvas with transparent Matrix-style binary rain
   • Dark blue / black / purple colour palette for nebula background
   • Futuristic bottom-left silhouette from background.png
   ───────────────────────────────────────────────────────────── */
const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nano green particles
    const particleCount = 75; // Adjust count based on density preference
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5, // Larger size (1.5 to 3.5px) for visibility
        speed: Math.random() * 1.5 + 0.5, // Move upwards speed
        opacity: Math.random() * 0.5 + 0.5 // Higher opacity (0.5 to 1.0)
      });
    }

    const draw = () => {
      raf = requestAnimationFrame(draw);

      // CLEAR CANVAS completely every frame so background elements remain visible
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        // Bright neon green
        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fill();

        // Move dot up
        p.y -= p.speed;

        // If the dot goes above the screen, reset it to the bottom
        if (p.y + p.radius < 0) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
        }
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="tech-bg-container">
      {/* ── Nebula colour blobs ── */}
      <div className="bg-gradient-blob blob-black" />
      <div className="bg-gradient-blob blob-dark-blue" />
      <div className="bg-gradient-blob blob-purple" />
      <div className="blob-extra" />

      {/* ── Bottom-Left Background Silhouette (background.png) ── */}
      <div className="bg-silhouette-container">
        <img src={bgSilhouette} alt="Praveen Silhouette" className="bg-silhouette-img" />
        <div className="bg-silhouette-glow" />
      </div>

      {/* ── Transparent Matrix Canvas ── */}
      <canvas ref={canvasRef} className="tech-canvas" />
    </div>
  );
};

export default TechBackground;



