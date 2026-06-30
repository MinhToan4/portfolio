'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { ArrowUpRight, Compass, Mail, MapPin } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  // Snappy spring config
  const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      id="about" 
      className="border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Philosophical Block Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={cubicTransition}
            className="font-heading text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] font-black uppercase text-on-surface tracking-tighter"
          >
            &quot;Technology should be rigorous in structure, <br /> yet <span className="text-primary">invisible</span> in experience.&quot;
          </motion.h2>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-between gap-8">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-primary" strokeWidth={2} />
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest">[ METHOD ]</span>
          </div>
          <p className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant font-medium text-justify">
            {personal.description}
          </p>
        </div>
      </div>

      {/* Main Identity & Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column: Title & Section Tag */}
        <div className="lg:col-span-4 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              01 // IDENTITY
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              WHO IS <br />
              <span className="text-primary">NMT?</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mt-8 lg:mt-0">
            [ DECRYPTING CONTEXT VARIABLES ]
          </p>
        </div>

        {/* Right column: Avatar, Bio, Details, Socials */}
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Architectural Profile Placeholder Picture */}
            <div className="w-full md:w-48 aspect-[3/4] relative brutalist-border brutalist-shadow flex-shrink-0 bg-neutral-900 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" 
                alt="Brutalist concrete architecture" 
                fill 
                className="object-cover transition-all duration-300 hover:scale-105"
                sizes="(max-w-768px) 100vw, 192px"
              />
            </div>
            
            <div className="space-y-6 w-full">
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                Nguyễn Minh Toàn
              </h3>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed font-medium">
                Based strictly on the principles of logic, clean architecture, and algorithmic efficiency. I believe complexity should be tackled at the root, delivering backend systems and API architectures that scale effortlessly.
              </p>

              {/* Data Table */}
              <div className="border-t-2 border-outline divide-y-2 divide-outline">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" strokeWidth={2} />
                    <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">EMAIL PROTOCOL</span>
                  </div>
                  <a href={`mailto:${personal.email}`} className="font-mono text-sm sm:text-base text-primary font-bold hover:underline break-all ml-4">
                    {personal.email}
                  </a>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={2} />
                    <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">BASE COORD</span>
                  </div>
                  <span className="font-mono text-sm sm:text-base font-bold">
                    {personal.location.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-outline border-dashed">
            {Object.entries(personal.socialLinks).map(([name, url]) => (
              <a 
                key={name} 
                href={url as string} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutalist-border px-5 py-3 font-mono text-xs sm:text-sm font-black uppercase bg-background hover:bg-primary hover:text-white transition-colors brutalist-shadow flex items-center gap-2"
              >
                <span>{name}</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Methodology Section split row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-t-2 border-outline">
        <div className="lg:col-span-4 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              02 // METRIC RULES
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
              SYSTEMIC <br />
              <span className="text-primary">PRINCIPLES</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-outline">
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-2">
              <span className="text-primary font-mono text-sm">[01]</span> Algorithmic Precision
            </h3>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed font-medium">
              We reject brute-force solutions. Efficiency is created through the calculated structuring of data and operations. Low latency is a primary architectural feature.
            </p>
          </div>
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-2">
              <span className="text-primary font-mono text-sm">[02]</span> Systemic Restraint
            </h3>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed font-medium">
              Architecture is used as a surgical tool, never as a bloated filler. Clean OOP, structural encapsulation, and clean RESTful design are baseline engineering requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
