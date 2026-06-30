'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-16 border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Main Grid Content */}
      <div className="max-w-screen-2xl mx-auto w-full px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 my-auto py-12">
        
        {/* Left Column: Big Headline */}
        <div className="lg:col-span-8 flex flex-col justify-center lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={cubicTransition}
            className="space-y-6 lg:-mt-20"
          >
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              [ STAGE: ACADEMIC RIGOR & PRACTICE ]
            </span>
            <h1 className="font-heading text-[clamp(2.75rem,8vw,5.75rem)] sm:text-[clamp(3.75rem,9.5vw,6.75rem)] md:text-[clamp(4.75rem,11.5vw,7.75rem)] leading-[0.85] tracking-tighter text-on-surface font-black uppercase break-words">
              SOFTWARE <br />
              <span className="text-primary">DEVELOPER</span>
            </h1>
          </motion.div>
        </div>

        {/* Right Column: Profile details / stats block */}
        <div className="lg:col-span-4 flex flex-col justify-end lg:pl-12 lg:border-l-2 lg:border-outline gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cubicTransition, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Bio Block */}
            <div className="brutalist-border p-6 sm:p-8 bg-surface-container brutalist-shadow">
              <div className="flex items-center gap-3 border-b-2 border-outline pb-3 mb-4">
                <Terminal className="w-5 h-5 text-primary" strokeWidth={2} />
                <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest">MINDSYSTEM.log</span>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface leading-relaxed font-semibold">
                {personal.description}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="brutalist-border p-4 text-center bg-background brutalist-shadow">
                <p className="font-heading text-2xl sm:text-3xl font-black text-primary">3.82</p>
                <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">GPA</p>
              </div>
              <div className="brutalist-border p-4 text-center bg-background brutalist-shadow">
                <p className="font-heading text-2xl sm:text-3xl font-black text-primary">7</p>
                <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">BADGES</p>
              </div>
              <div className="brutalist-border p-4 text-center bg-background brutalist-shadow">
                <p className="font-heading text-2xl sm:text-3xl font-black text-primary">4+</p>
                <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">SYSTEMS</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer of Hero */}
      <div className="max-w-screen-2xl mx-auto w-full px-6 sm:px-8 md:px-12 flex justify-between items-center mt-auto border-t border-outline/20 pt-6">
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
