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
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      vx: number;
      vy: number;
      char: string;
      fontSize: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = this.x;
        this.targetY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
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
            this.x += dx * force * 0.015;
            this.y += dy * force * 0.015;
          }
        }

        // Boundary checks
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;
      }

      draw(context: CanvasRenderingContext2D, color: string) {
        context.font = `black ${this.fontSize}px monospace`;
        context.fillStyle = color;
        context.fillText(this.char, this.x, this.y);
      }
    }

    // Adjust particle density based on screen dimensions
    const particles: Particle[] = [];
    const density = 15000; // Screen area per particle
    const particleCount = Math.min(100, Math.max(30, Math.floor((width * height) / density)));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color schemes matching the dark/light design system
    const isDark = resolvedTheme === 'dark';
    const particleColor = isDark ? 'rgba(250, 249, 246, 0.12)' : 'rgba(28, 28, 28, 0.1)';
    const lineColor = isDark ? 'rgba(250, 249, 246, 0.04)' : 'rgba(28, 28, 28, 0.04)';
    const highlightLineColor = isDark ? 'rgba(255, 59, 48, 0.15)' : 'rgba(255, 59, 48, 0.12)';

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y);
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
        if (mouse.x !== -1000 && mouse.y !== -1000) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          if (mdist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = highlightLineColor;
            ctx.lineWidth = 0.75;
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
      window.removeEventListener('resize', handleResize);
    };
  }, [resolvedTheme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
    />
  );
}
