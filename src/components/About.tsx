'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto my-16 sm:my-24 md:my-32">
      {/* Hero Philosophy Statement */}
      <div className="mb-32 sm:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            className="col-span-1 md:col-span-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-[clamp(1.75rem,5vw,5rem)] leading-[1.1] ink-tension font-black italic text-on-surface uppercase brutalist-border p-4 sm:p-6 md:p-8 brutalist-shadow-sm break-words">
              &quot;Technology should be rigorous in structure, <br /> yet <span className="text-outline-brutal text-transparent">invisible</span> in experience.&quot;
            </h1>
          </motion.div>
          <motion.div
            className="col-span-1 md:col-span-5 md:col-start-7 mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed text-justify">
              {personal.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Structured Bio Section */}
      <div className="mb-48 sm:mb-64">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-16">
          {/* Row 1 */}
          <div className="md:col-span-4">
            <span className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase font-black text-on-surface">Identity</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 font-black uppercase tracking-tighter">{personal.name}</h2>
            <h3 className="font-headline text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 italic text-on-surface-variant">The Engineer&apos;s Mindset</h3>
            <div className="flex flex-col gap-6 md:gap-8 md:flex-row">
              <div className="w-full md:w-1/3 aspect-[3/4] relative brutalist-shadow brutalist-border flex-shrink-0">
                <Image src={personal.avatar} alt={personal.name} fill className="object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 md:mb-8">
                  Based strictly on the principles of logic, clean architecture, and algorithmic efficiency. I believe complexity should be tackled at the root, delivering performance that feels effortless.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-baseline border-b border-outline-variant py-2 gap-4">
                    <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-widest flex-shrink-0">Email</span>
                    <a href={`mailto:${personal.email}`} className="font-label text-[9px] sm:text-xs tracking-widest text-outline hover:text-primary transition-colors break-all">{personal.email}</a>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-outline-variant py-2 gap-4">
                    <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-widest flex-shrink-0">Location</span>
                    <span className="font-label text-[9px] sm:text-xs tracking-widest text-outline">{personal.location}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 flex gap-4 md:gap-6 flex-wrap">
                  {Object.entries(personal.socialLinks).map(([name, url]) => (
                    <a key={name} href={url as string} target="_blank" rel="noopener noreferrer" className="font-label text-[8px] sm:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-black uppercase text-on-surface brutalist-border px-3 sm:px-4 py-2 brutalist-shadow-sm hover:translate-y-[2px] transition-transform whitespace-nowrap">
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-4 border-t-[3px] border-on-surface pt-6 md:pt-8 mt-8 md:mt-16">
            <span className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase font-black text-on-surface">Methodology</span>
          </div>
          <div className="md:col-span-8 border-t-[3px] border-on-surface pt-6 md:pt-8 mt-8 md:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-headline text-base md:text-lg mb-3 md:mb-4 italic">Algorithmic Precision</h3>
                <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">We reject brute-force solutions. Efficiency is created through the calculated structuring of data and operations.</p>
              </div>
              <div>
                <h3 className="font-headline text-base md:text-lg mb-3 md:mb-4 italic">Systemic Restraint</h3>
                <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">Architecture is used as a surgical tool, never as a bloated filler. Our backend is a digital pulse driving robust applications.</p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="md:col-span-4 border-t-[3px] border-on-surface pt-6 md:pt-8 mt-8 md:mt-16">
            <span className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase font-black text-on-surface">Key Stats</span>
          </div>
          <div className="md:col-span-8 border-t-[3px] border-on-surface pt-6 md:pt-8 mt-8 md:mt-16">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-4">
                <span className="font-body text-xs md:text-sm flex-shrink-0">Academic GPA</span>
                <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-outline flex-shrink-0">3.82 / 4.0</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-4">
                <span className="font-body text-xs md:text-sm flex-shrink-0">Professional Certifications</span>
                <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-outline flex-shrink-0">7 BADGES</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-4">
                <span className="font-body text-xs md:text-sm flex-shrink-0">Deployed Architectures</span>
                <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-outline flex-shrink-0">4+ PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
