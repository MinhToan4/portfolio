'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Calendar, GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      id="experience" 
      className="border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              04 // CHRONOLOGY
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              ARCHITECTURAL <br />
              <span className="text-primary">EVOLUTION</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-end">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4">
            A chronological mapping of academic rigor, cumulative achievements, and validated certifications.
          </p>
        </div>
      </div>

      {/* Timeline Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-outline">
        
        {/* Left Column: Academics & Institutions */}
        <div className="lg:col-span-7 divide-y-2 divide-outline">
          
          {/* Experience Sub-Section */}
          <div className="p-8 sm:p-16 lg:p-20 space-y-12">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" strokeWidth={2} />
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                ACADEMIC EXCELLENCE
              </h3>
            </div>

            <div className="space-y-10">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...cubicTransition, delay: index * 0.05 }}
                  className="brutalist-border p-6 sm:p-8 bg-surface-container hover:bg-background transition-colors brutalist-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-mono text-sm text-primary font-black uppercase tracking-wider mt-1">
                        {item.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase bg-background border border-outline px-3 py-1.5 w-fit flex-shrink-0 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed mb-4 font-medium">
                    {item.description}
                  </p>
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-2.5 border-t border-outline border-dashed pt-4">
                      {item.achievements.map((a: string, idx: number) => (
                        <li key={idx} className="font-body text-sm sm:text-base text-on-surface flex items-start gap-2.5 font-semibold leading-relaxed">
                          <span className="text-primary mt-1 text-[8px] flex-shrink-0">■</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Sub-Section */}
          <div className="p-8 sm:p-16 lg:p-20 space-y-12">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" strokeWidth={2} />
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                INSTITUTIONS
              </h3>
            </div>

            <div className="space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...cubicTransition, delay: index * 0.05 }}
                  className="brutalist-border p-6 sm:p-8 bg-surface-container hover:bg-background transition-colors brutalist-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight">
                        {item.degree}
                      </h4>
                      <p className="font-mono text-sm text-primary font-black uppercase tracking-wider mt-1">
                        {item.school}
                      </p>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase bg-background border border-outline px-3 py-1.5 w-fit flex-shrink-0 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed font-medium">
                    {item.description}
                  </p>
                  {item.gpa && (
                    <div className="mt-4 font-mono text-sm font-black uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1.5 w-fit">
                      GPA: {item.gpa}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5 p-8 sm:p-16 lg:p-20 space-y-12">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" strokeWidth={2} />
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              ENDORSEMENTS
            </h3>
          </div>

          <div className="border-t-2 border-outline divide-y-2 divide-outline">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex justify-between items-center py-5 group hover:bg-surface-container px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors"
              >
                <div className="min-w-0 pr-4">
                  <p className="font-heading text-base sm:text-lg font-black uppercase tracking-tight truncate">
                    {cert.name}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1 font-bold">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-border p-2 bg-background hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    aria-label={`View certification for ${cert.name}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
