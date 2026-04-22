'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto my-16 sm:my-24 md:my-32">
      <div className="mb-20 md:mb-32">
        <span className="font-label text-[9px] sm:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8 md:mb-12 block text-tertiary">Background</span>
        <h2 className="font-headline text-[clamp(1.75rem,6vw,7rem)] leading-[0.85] font-black tracking-tighter text-on-surface mb-8 md:mb-16 max-w-5xl uppercase break-words">
          Architectural <span className="text-outline-brutal">Evolution</span> <br />
          <span className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold italic normal-case tracking-normal text-on-surface-variant">A chronological mapping of academic rigor and structured practice.</span>
        </h2>
      </div>

      <div className="bg-background brutalist-border brutalist-shadow mb-20 md:mb-32 p-4 sm:p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

        {/* Left Column - Work & Academics */}
        <div>
          <h4 className="font-headline text-2xl sm:text-3xl md:text-4xl tracking-tighter uppercase font-black text-on-surface mb-6 md:mb-8">Academic <span className="text-outline-brutal text-transparent">Excellence</span></h4>
          <div className="space-y-8 md:space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-[3px] border-on-surface pt-4 md:pt-6"
              >
                <div className="flex justify-between items-baseline mb-3 md:mb-4 gap-3">
                  <h3 className="font-headline text-lg sm:text-xl md:text-2xl uppercase tracking-tighter">{item.title}</h3>
                  <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-outline flex-shrink-0">{item.period}</span>
                </div>
                <p className="font-label text-[8px] sm:text-xs tracking-widest uppercase text-on-surface-variant mb-3 md:mb-4">{item.company}</p>
                <p className="font-body text-xs sm:text-sm leading-relaxed mb-3 md:mb-4">{item.description}</p>
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {item.achievements.map((a: string, idx: number) => (
                      <li key={idx} className="font-body text-xs sm:text-sm text-on-surface-variant flex items-start gap-2">
                        <span className="text-primary mt-1 text-[8px] flex-shrink-0">■</span> <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Education & Certs */}
        <div className="space-y-12 md:space-y-16">
          <div>
            <h4 className="font-headline text-2xl sm:text-3xl md:text-4xl tracking-tighter uppercase font-black text-on-surface mb-6 md:mb-8">Institutions</h4>
            <div className="space-y-8 md:space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-t-[3px] border-on-surface pt-4 md:pt-6"
                >
                  <div className="flex justify-between items-baseline mb-3 md:mb-4 gap-3">
                    <h3 className="font-headline text-base sm:text-lg md:text-xl uppercase tracking-tighter">{item.degree}</h3>
                    <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-outline flex-shrink-0">{item.period}</span>
                  </div>
                  <p className="font-label text-[8px] sm:text-[10px] tracking-widest uppercase text-on-surface-variant mb-3 md:mb-4">{item.school}</p>
                  <p className="font-body text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  {item.gpa && (
                    <p className="font-headline text-base md:text-lg mt-3 md:mt-4 italic">GPA: <span className="font-bold">{item.gpa}</span></p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-2xl sm:text-3xl md:text-4xl tracking-tighter uppercase font-black text-on-surface mb-6 md:mb-8">Technical <span className="text-outline-brutal text-transparent">Endorsements</span></h4>
            <div className="grid grid-cols-1 gap-3 md:gap-4 border-t-[3px] border-on-surface pt-4 md:pt-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-start md:items-center py-3 md:py-4 border-b-2 border-on-surface gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-xs sm:text-sm font-medium break-words">{cert.name}</p>
                    <p className="font-label text-[8px] sm:text-[10px] tracking-widest uppercase text-outline mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-headline font-black uppercase text-on-surface hover:text-outline-brutal hover:text-transparent transition-all text-xs md:text-sm flex-shrink-0">
                      View ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
