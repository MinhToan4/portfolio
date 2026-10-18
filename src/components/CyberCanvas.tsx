'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

// Refined, minimal cyber tokens (clean, non-cluttering glyphs)
const chars = ['0', '1', '+', '-', '<', '>', '{', '}', '//', '[', ']', 'func', '::', '·'];

export default function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      char: string;
      fontSize: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Smooth, subtle ambient drift
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.fontSize = Math.floor(Math.random() * 3) + 9; // 9px to 11px
      }

      update(mouseX: number, mouseY: number) {
        // Base movement
        this.x += this.vx;
        this.y += this.vy;

        // Subtle mouse attraction
        if (mouseX !== -1000 && mouseY !== -1000) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x += dx * force * 0.008;
            this.y += dy * force * 0.008;
          }
        }

        // Screen wrap-around boundaries
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;
      }

      draw(context: CanvasRenderingContext2D, color: string) {
        // Normal 400 weight (no bold smudges) for ultra-clean rendering
        context.font = `400 ${this.fontSize}px var(--font-space-mono), monospace`;
        context.fillStyle = color;
        context.fillText(this.char, this.x, this.y);
      }
    }

    // Lower density to eliminate noise and clutter
    const particles: Particle[] = [];
    const density = 24000;
    const particleCount = Math.min(48, Math.max(22, Math.floor((width * height) / density)));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const mouse = { x: -1000, y: -1000 };
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isDark = resolvedTheme === 'dark';
    
    // Very faint, airy, premium opacity (no dirty smudges)
    const baseParticleColor = isDark ? 'rgba(250, 249, 246, 0.038)' : 'rgba(28, 28, 28, 0.04)';
    const lineColor = isDark ? 'rgba(250, 249, 246, 0.015)' : 'rgba(28, 28, 28, 0.015)';

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Disable mouse connections when scrolled past the Hero section to keep content readable
      const isPastHero = scrollY > height - 100;
      const activeMouseX = isPastHero ? -1000 : mouse.x;
      const activeMouseY = isPastHero ? -1000 : mouse.y;

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(activeMouseX, activeMouseY);

        let particleColor = baseParticleColor;
        let isNearMouse = false;
        let mdist = 999;

        if (activeMouseX !== -1000 && activeMouseY !== -1000) {
          const mdx = particles[i].x - activeMouseX;
          const mdy = particles[i].y - activeMouseY;
          mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 140) {
            isNearMouse = true;
            const proximity = (140 - mdist) / 140;
            if (isDark) {
              const alpha = 0.038 + proximity * 0.065;
              particleColor = `rgba(250, 249, 246, ${alpha.toFixed(3)})`;
            } else {
              // Gentle, faint highlight without looking dark/dirty
              const alpha = 0.04 + proximity * 0.045;
              particleColor = `rgba(28, 28, 28, ${alpha.toFixed(3)})`;
            }
          }
        }

        particles[i].draw(ctx, particleColor);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within 90px with delicate hairline stroke
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.35;
            ctx.stroke();
          }
        }

        // Delicate, soft laser trace to cursor coordinates
        if (isNearMouse && mdist < 135) {
          const lineAlpha = (1 - mdist / 135) * (isDark ? 0.16 : 0.10);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(activeMouseX, activeMouseY);
          ctx.strokeStyle = `rgba(255, 59, 48, ${lineAlpha.toFixed(3)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 bg-transparent" 
    />
  );
}
