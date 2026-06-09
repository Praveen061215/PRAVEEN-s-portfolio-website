import React, { useEffect, useRef } from 'react';
import './TechBackground.css';

/* ─────────────────────────────────────────────────────────────
   TechBackground
   • Full-screen fixed canvas with interactive particle network
   • Light-blue / dark-blue / light-pink colour palette
   • Mouse: attraction, cursor rings, gradient connection lines
   • Technical details: hex nodes, crosshair sparks, data packets
   ───────────────────────────────────────────────────────────── */
const TechBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf;

    /* ── colour palette (R,G,B strings, no alpha) ── */
    const LIGHT_BLUE = '125,211,252';   // sky-300
    const DARK_BLUE  = '59,130,246';    // blue-500
    const PINK       = '249,168,212';   // pink-300
    const INDIGO     = '129,140,248';   // indigo-400

    const COLORS = [LIGHT_BLUE, DARK_BLUE, PINK, INDIGO];

    /* ── sizing ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ═══ Particle ═══════════════════════════════════════════ */
    class Particle {
      constructor() { this.init(); }

      init() {
        this.x  = Math.random() * canvas.width;
        this.y  = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;

        // 0=dot  1=crosshair  2=hexring  3=diamond
        this.shape = Math.floor(Math.random() * 4);
        this.r     = Math.random() * 1.8 + 0.8;
        this.baseR = this.r;

        this.col   = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.35 + 0.25;

        // pulse animation
        this.pulseT     = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;

        // data-packet: slides along a random direction
        this.isPacket = Math.random() < 0.08;
        if (this.isPacket) {
          const ang = Math.random() * Math.PI * 2;
          const spd = 0.9 + Math.random() * 0.8;
          this.vx = Math.cos(ang) * spd;
          this.vy = Math.sin(ang) * spd;
          this.col = Math.random() < 0.5 ? LIGHT_BLUE : PINK;
        }
      }

      update(mouse) {
        this.pulseT += this.pulseSpeed;

        this.x += this.vx;
        this.y += this.vy;

        // wrap
        if (this.x < -20) this.x = canvas.width  + 20;
        if (this.x > canvas.width  + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;

        // mouse attraction
        if (mouse.x !== null) {
          const dx   = mouse.x - this.x;
          const dy   = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          const RAD  = 180;
          if (dist < RAD && dist > 0) {
            const f = ((RAD - dist) / RAD) * 0.4;
            this.x += (dx / dist) * f;
            this.y += (dy / dist) * f;
            this.r  = this.baseR * (1 + f * 1.4);
          } else {
            this.r = this.baseR;
          }
        } else {
          this.r = this.baseR;
        }
      }

      draw(c) {
        const pulse = 0.75 + 0.25 * Math.sin(this.pulseT);
        const a     = this.alpha * pulse;

        c.save();
        c.translate(this.x, this.y);
        c.strokeStyle = `rgba(${this.col},${a})`;
        c.fillStyle   = `rgba(${this.col},${a})`;
        c.lineWidth   = 0.9;
        c.shadowColor = `rgba(${this.col},0.6)`;
        c.shadowBlur  = this.isPacket ? 8 : 4;

        switch (this.shape) {
          case 0: {
            // glowing dot
            c.beginPath();
            c.arc(0, 0, this.r, 0, Math.PI * 2);
            c.fill();
            break;
          }
          case 1: {
            // crosshair ➕
            const s = this.r * 2.8;
            c.beginPath();
            c.moveTo(-s, 0); c.lineTo(s, 0);
            c.moveTo(0, -s); c.lineTo(0, s);
            c.stroke();
            // centre dot
            c.beginPath();
            c.arc(0, 0, this.r * 0.5, 0, Math.PI * 2);
            c.fill();
            break;
          }
          case 2: {
            // hexagonal ring ⬡
            const sides = 6;
            const rh    = this.r * 2.2;
            c.beginPath();
            for (let i = 0; i < sides; i++) {
              const ang = (i / sides) * Math.PI * 2 - Math.PI / 6;
              i === 0
                ? c.moveTo(Math.cos(ang) * rh, Math.sin(ang) * rh)
                : c.lineTo(Math.cos(ang) * rh, Math.sin(ang) * rh);
            }
            c.closePath();
            c.stroke();
            break;
          }
          default: {
            // diamond ◆
            const d = this.r * 2;
            c.beginPath();
            c.moveTo(0, -d); c.lineTo(d, 0);
            c.lineTo(0,  d); c.lineTo(-d, 0);
            c.closePath();
            c.fill();
          }
        }
        c.restore();
      }
    }

    /* ═══ init particles ══════════════════════════════════════ */
    const COUNT = window.innerWidth < 768 ? 55 : 120;
    let particles = Array.from({ length: COUNT }, () => new Particle());

    /* ── mouse events ── */
    const onMove  = e => { mouseRef.current.x = e.clientX; mouseRef.current.y = e.clientY; };
    const onLeave = ()  => { mouseRef.current.x = null;     mouseRef.current.y = null; };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    /* ═══ draw helper: three-stop gradient line ══════════════ */
    const drawGradLine = (x1, y1, x2, y2, col1, col2, alpha) => {
      const g = ctx.createLinearGradient(x1, y1, x2, y2);
      g.addColorStop(0,   `rgba(${col1},${alpha})`);
      g.addColorStop(0.5, `rgba(${INDIGO},${alpha * 0.7})`);
      g.addColorStop(1,   `rgba(${col2},${alpha})`);
      ctx.beginPath();
      ctx.strokeStyle = g;
      ctx.lineWidth   = 0.6;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    /* ═══ draw cursor HUD ════════════════════════════════════ */
    let hudT = 0;
    const drawHUD = (mx, my) => {
      hudT += 0.03;

      // outer spinning ring (light blue)
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(hudT);
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 1.6);
      ctx.strokeStyle = `rgba(${LIGHT_BLUE},0.35)`;
      ctx.lineWidth   = 1.2;
      ctx.shadowColor = `rgba(${LIGHT_BLUE},0.5)`;
      ctx.shadowBlur  = 8;
      ctx.stroke();
      ctx.restore();

      // inner counter-spin (pink)
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(-hudT * 1.6);
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 1.3);
      ctx.strokeStyle = `rgba(${PINK},0.40)`;
      ctx.lineWidth   = 1.0;
      ctx.shadowColor = `rgba(${PINK},0.5)`;
      ctx.shadowBlur  = 6;
      ctx.stroke();
      ctx.restore();

      // centre dot
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fillStyle   = `rgba(${LIGHT_BLUE},0.7)`;
      ctx.shadowColor = `rgba(${LIGHT_BLUE},0.9)`;
      ctx.shadowBlur  = 10;
      ctx.fill();
      ctx.shadowBlur  = 0;

      // crosshair ticks
      const TICK = 6, GAP = 26;
      ctx.strokeStyle = `rgba(${LIGHT_BLUE},0.25)`;
      ctx.lineWidth   = 0.8;
      [[GAP, 0, GAP + TICK, 0], [-GAP, 0, -(GAP + TICK), 0],
       [0, GAP, 0, GAP + TICK],  [0, -GAP, 0, -(GAP + TICK)]].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(mx + x1, my + y1);
        ctx.lineTo(mx + x2, my + y2);
        ctx.stroke();
      });
    };

    /* ═══ main animation loop ════════════════════════════════ */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // update + draw particles
      particles.forEach(p => {
        p.update(mouse);
        p.draw(ctx);
      });

      // particle–particle links
      const LINK = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i], pj = particles[j];
          const d  = Math.hypot(pi.x - pj.x, pi.y - pj.y);
          if (d < LINK) {
            const a = (1 - d / LINK) * 0.18;
            drawGradLine(pi.x, pi.y, pj.x, pj.y, pi.col, pj.col, a);
          }
        }
      }

      // cursor–particle links
      if (mouse.x !== null) {
        particles.forEach(p => {
          const d = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (d < 200) {
            const a = (1 - d / 200) * 0.28;
            drawGradLine(p.x, p.y, mouse.x, mouse.y, p.col, PINK, a);
          }
        });
        drawHUD(mouse.x, mouse.y);
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',     resize);
      window.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="tech-bg-container">
      {/* ── Nebula colour blobs ── */}
      <div className="bg-gradient-blob blob-light-blue"    />
      <div className="bg-gradient-blob blob-dark-blue"     />
      <div className="bg-gradient-blob blob-light-pink"    />
      <div className="bg-gradient-blob blob-center-accent" />
      <div className="bg-gradient-blob blob-sparkle"       />

      {/* ── Circuit grid + scan lines ── */}
      <div className="tech-grid-overlay" />

      {/* ── Live canvas ── */}
      <canvas ref={canvasRef} className="tech-canvas" />
    </div>
  );
};

export default TechBackground;
