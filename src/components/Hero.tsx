'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, ArrowDown } from 'lucide-react';

const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

// Staggered Character Slide-up Reveal Component
function SplitText({ text, delayOffset = 0, className = "" }: { text: string; delayOffset?: number; className?: string }) {
  const letters = text.split("");
  return (
    <span className="inline-flex overflow-hidden py-1.5 -my-1.5">
      {letters.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delayOffset + idx * 0.03 }}
          className={`inline-block ${className}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// 3D Parallax Tilt Hover Container Component
function TiltContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Maximum tilt: 8 degrees
    setTilt({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`${className} transform-gpu`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const { personal } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleGlobalMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-16 border-b-2 border-outline select-none bg-background transition-colors duration-200 overflow-hidden"
    >
      
      {/* Blueprint Grid Backdrop & Interactive Spotlight */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-70 dark:opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, var(--primary-glow) 0%, transparent 80%),
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 50px 50px, 50px 50px',
        }}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 my-auto py-12">
        
        {/* Left Column: Big Headline with slide-up cascade */}
        <div className="lg:col-span-8 flex flex-col justify-center lg:pr-12">
          <div className="space-y-6 lg:-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
                [ STAGE: ACADEMIC RIGOR & PRACTICE ]
              </span>
            </motion.div>

            <h1 className="font-heading text-[clamp(2.5rem,7.5vw,5.5rem)] sm:text-[clamp(3.5rem,9vw,6.5rem)] md:text-[clamp(4.5rem,11vw,7.5rem)] leading-[0.82] tracking-tighter text-on-surface font-black uppercase flex flex-col items-start">
              <SplitText text="SOFTWARE" delayOffset={0.05} />
              <SplitText text="DEVELOPER" delayOffset={0.3} className="text-primary" />
            </h1>
          </div>
        </div>

        {/* Right Column: Profile details / stats block with 3D tilt */}
        <div className="lg:col-span-4 flex flex-col justify-end lg:pl-12 lg:border-l-2 lg:border-outline gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cubicTransition, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Bio Block with 3D Parallax Tilt */}
            <TiltContainer className="bg-surface-container">
              <div className="brutalist-border p-6 sm:p-8 brutalist-shadow h-full cursor-default">
                <div className="flex items-center gap-3 border-b-2 border-outline pb-3 mb-4">
                  <Terminal className="w-5 h-5 text-primary" strokeWidth={2} />
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest">MINDSYSTEM.log</span>
                </div>
                <p className="font-body text-sm sm:text-base md:text-lg text-on-surface leading-relaxed font-semibold">
                  {personal.description}
                </p>
              </div>
            </TiltContainer>

            {/* Quick Metrics Grid with individual 3D Parallax Tilt */}
            <div className="grid grid-cols-3 gap-4">
              <TiltContainer className="bg-background">
                <div className="brutalist-border p-4 text-center brutalist-shadow h-full flex flex-col justify-center cursor-default">
                  <p className="font-heading text-2xl sm:text-3xl font-black text-primary">3.82</p>
                  <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">GPA</p>
                </div>
              </TiltContainer>

              <TiltContainer className="bg-background">
                <div className="brutalist-border p-4 text-center brutalist-shadow h-full flex flex-col justify-center cursor-default">
                  <p className="font-heading text-2xl sm:text-3xl font-black text-primary">7</p>
                  <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">BADGES</p>
                </div>
              </TiltContainer>

              <TiltContainer className="bg-background">
                <div className="brutalist-border p-4 text-center brutalist-shadow h-full flex flex-col justify-center cursor-default">
                  <p className="font-heading text-2xl sm:text-3xl font-black text-primary">4+</p>
                  <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">SYSTEMS</p>
                </div>
              </TiltContainer>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer of Hero */}
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 sm:px-8 md:px-12 flex justify-between items-center mt-auto border-t border-outline/20 pt-6">
        <div className="flex gap-4">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground">
            LOC // {personal.location.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="brutalist-border p-3 bg-background hover:bg-primary hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}
