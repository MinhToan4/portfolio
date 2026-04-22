'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto min-h-[90vh] flex flex-col justify-center"
    >
      <header className="mb-20 sm:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <motion.div
          className="col-span-1 md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-headline text-[clamp(1.75rem,8vw,9rem)] sm:text-[clamp(2rem,10vw,9rem)] md:text-[clamp(2rem,14vw,9rem)] leading-[0.8] tracking-tighter text-on-surface font-black uppercase w-full break-words relative z-20 mb-6 sm:mb-8 overflow-hidden">
            SOFTWARE <br />
            <span className="text-outline-brutal">ENGINEER</span>
          </h1>
        </motion.div>

        <motion.div
          className="col-span-1 md:col-start-9 md:col-span-4 md:self-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brutalist-border p-4 sm:p-6 bg-surface-container-highest brutalist-shadow-sm">
            <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-on-surface leading-relaxed break-words">
              A passionate {personal.title.toLowerCase()} focused on building scalable systems and elegant digital applications. {personal.subtitle}.
            </p>
          </div>
        </motion.div>
      </header>
    </section>
  );
}
