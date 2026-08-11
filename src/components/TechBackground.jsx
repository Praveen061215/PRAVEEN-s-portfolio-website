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

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize) + 1;

    // Array for drops - one per column
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -50); 
    }

    let lastDrawTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      raf = requestAnimationFrame(draw);

      if (currentTime - lastDrawTime < interval) return;
      lastDrawTime = currentTime;

      // CLEAR CANVAS completely every frame so background elements & silhouette remain transparent & visible!
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px "Space Grotesk", monospace';

      for (let i = 0; i < drops.length; i++) {
        // Draw trailing characters behind each drop head
        const trailLength = 12;
        for (let j = 0; j < trailLength; j++) {
          const dropY = drops[i] - j;
          const yPos = dropY * fontSize;

          if (yPos > 0 && yPos < canvas.height) {
            const char = (i + j) % 2 === 0 ? '1' : '0';
            if (j === 0) {
              ctx.fillStyle = '#38bdf8'; // Bright Sky Blue for head
            } else {
              const alpha = (1 - j / trailLength) * 0.45;
              ctx.fillStyle = `rgba(2, 132, 199, ${alpha})`; // Deep Blue trail
            }
            ctx.fillText(char, i * fontSize, yPos);
          }
        }

        // Reset drop to top randomly when it moves off-screen
        if (drops[i] * fontSize > canvas.height + 200) {
          drops[i] = Math.floor(Math.random() * -20);
        }

        drops[i]++;
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



