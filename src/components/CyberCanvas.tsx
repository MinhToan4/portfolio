'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const chars = ['0', '1', '<', '>', '{', '}', '+', '-', '//', '[', ']', 'x', 'y', ';', '=>', 'func', 'var'];

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
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.fontSize = Math.floor(Math.random() * 4) + 9; // 9px to 12px
      }

      update(mouseX: number, mouseY: number) {
        // Base movement
        this.x += this.vx;
        this.y += this.vy;

        // Mouse gravity pull
        if (mouseX !== -1000 && mouseY !== -1000) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const force = (180 - dist) / 180;
            // Move slightly toward mouse coordinates
            this.x += dx * force * 0.018;
            this.y += dy * force * 0.018;
          }
        }

        // Boundary checks (wraparound screen)
        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
        if (this.y < -15) this.y = height + 15;
        if (this.y > height + 15) this.y = -15;
      }

      draw(context: CanvasRenderingContext2D, color: string) {
        context.font = `black ${this.fontSize}px monospace`;
        context.fillStyle = color;
        context.fillText(this.char, this.x, this.y);
      }
    }

    // Determine particle count based on screen area
    const particles: Particle[] = [];
    const density = 15000;
    const particleCount = Math.min(100, Math.max(45, Math.floor((width * height) / density)));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const mouse = { x: -1000, y: -1000 };
    let scrollY = 0;

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
    const particleColor = isDark ? 'rgba(250, 249, 246, 0.09)' : 'rgba(28, 28, 28, 0.07)';
    const lineColor = isDark ? 'rgba(250, 249, 246, 0.03)' : 'rgba(28, 28, 28, 0.03)';
    
    // Strengthened red mouse line colors for better visibility
    const highlightLineColor = isDark ? 'rgba(255, 59, 48, 0.45)' : 'rgba(255, 59, 48, 0.38)';

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Disable mouse connections when scrolled past the Hero section to keep content readable
      const isPastHero = scrollY > height - 100;
      const activeMouseX = isPastHero ? -1000 : mouse.x;
      const activeMouseY = isPastHero ? -1000 : mouse.y;

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(activeMouseX, activeMouseY);
        particles[i].draw(ctx, particleColor);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within 110px
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }

        // Draw interactive connection line from active particles to cursor coordinates
        if (activeMouseX !== -1000 && activeMouseY !== -1000) {
          const mdx = particles[i].x - activeMouseX;
          const mdy = particles[i].y - activeMouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          if (mdist < 155) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(activeMouseX, activeMouseY);
            ctx.strokeStyle = highlightLineColor;
            ctx.lineWidth = 1.1; // Slightly thicker lines for visibility
            ctx.stroke();
          }
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
