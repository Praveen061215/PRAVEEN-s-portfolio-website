import React, { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let drops = [];
    let columns = 0;
    const fontSize = 16;
    const chars = '01';
    let resizeTimer = null;

    const initCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        const newColumns = Math.ceil(canvas.width / fontSize);
        if (newColumns > columns) {
          for (let x = columns; x < newColumns; x++) {
            drops[x] = Math.random() * (canvas.height / fontSize);
          }
        }
        columns = newColumns;
      }
    };

    initCanvas();

    let lastTime = 0;
    const fps = 20;
    const interval = 1000 / fps;

    const draw = (time) => {
      animationFrameId = requestAnimationFrame(draw);
      const deltaTime = time - lastTime;
      if (deltaTime > interval) {
        lastTime = time - (deltaTime % interval);
        ctx.fillStyle = 'rgba(5, 5, 26, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(30, 58, 138, 0.8)';
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = 'center';
        for (let i = 0; i < columns; i++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          const x = i * fontSize + (fontSize / 2);
          const y = drops[i] * fontSize;
          ctx.fillText(text, x, y);
          if (y > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    // Use debounced window resize instead of ResizeObserver to avoid loop errors
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initCanvas();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none mix-blend-screen"
    />
  );
};

export default BinaryBackground;
