'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Calendar, Mail, Terminal, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import TiltContainer from './TiltContainer';

export default function Projects() {
  const { projects } = portfolioData;

  const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      id="projects" 
      className="border-b-2 border-outline select-none bg-transparent transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline bg-background">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              03 // PROFESSIONAL EXPERIENCE
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              PROFESSIONAL <br />
              <span className="text-primary">EXPERIENCE</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-end">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4">
            Production engineering, cloud architecture, full-stack web platforms, team leadership, and scalable distributed systems.
          </p>
        </div>
      </div>

      {/* Experience / Projects Grid List */}
      <div className="p-8 sm:p-16 lg:p-20 space-y-12 sm:space-y-16">
        {projects.map((item, index) => {
          return (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...cubicTransition, delay: index * 0.05 }}
            >
              <TiltContainer maxTilt={3}>
                <div className="brutalist-border bg-background brutalist-shadow-large p-6 sm:p-10 lg:p-12 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--border-color)] duration-200 cursor-default group relative overflow-hidden">
                  
                  {/* Top Hash Stamp */}
                  <div className="absolute top-0 right-0 font-mono text-[9px] font-black uppercase text-muted-foreground/70 bg-surface-container border-l-2 border-b-2 border-outline px-3 py-1 select-none group-hover:text-primary group-hover:border-primary transition-colors">
                    {item.hash}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Organization, Role, Status, Period & Actions */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-b-2 lg:border-b-0 lg:border-r-2 border-outline/70 pb-6 lg:pb-0 lg:pr-8">
                      <div className="space-y-5">
                        
                        {/* Meta Top: Index + Status */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-xs font-black bg-primary text-white px-2.5 py-1 border border-outline select-none">
                            EXP // 0{index + 1}
                          </span>
                          <span className={`font-mono text-[10px] font-black uppercase px-2.5 py-1 border flex items-center gap-1.5 ${item.status.color}`}>
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                            {item.status.label}
                          </span>
                        </div>

                        {/* Organization & Role */}
                        <div>
                          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors leading-tight">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 border border-primary/25">
                              {item.role}
                            </span>
                          </div>
                        </div>

                        {/* Period & Organization Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase text-muted-foreground bg-surface-container px-3 py-1.5 border border-outline w-fit">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span>{item.period}</span>
                          </div>
                          <p className="font-mono text-xs text-muted-foreground font-semibold">
                            Organization: {item.organization}
                          </p>
                        </div>

                        {/* System Focus / Metric Banner */}
                        {item.highlight && (
                          <div className="bg-surface-container border-l-4 border-primary p-3 space-y-1">
                            <div className="flex items-center gap-1.5 text-primary font-mono text-[9px] font-black uppercase tracking-widest">
                              <ShieldCheck className="w-3 h-3" />
                              <span>CORE HIGHLIGHT</span>
                            </div>
                            <p className="font-heading text-sm font-black uppercase tracking-tight text-on-surface">
                              {item.highlight}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-outline/40 border-dashed">
                        {item.liveUrl && (
                          <a 
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brutalist-border px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider bg-primary text-white hover:bg-background hover:text-primary transition-all duration-150 flex items-center gap-2 brutalist-shadow cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>LIVE PLATFORM</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                          </a>
                        )}

                        {'mentorEmail' in item && item.mentorEmail && (
                          <a 
                            href={item.mentorEmail as string}
                            className="brutalist-border px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider bg-background hover:bg-primary hover:text-white transition-all duration-150 flex items-center gap-2 brutalist-shadow cursor-pointer"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>CONTACT SUPERVISOR</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Context, Verified Field Contributions, Tech Stack */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                      <div className="space-y-6">
                        
                        {/* Summary description */}
                        <div>
                          <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                            <Terminal className="w-3.5 h-3.5 text-primary" />
                            <span>SCOPE & OBJECTIVES</span>
                          </div>
                          <p className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant font-medium text-justify">
                            {item.description}
                          </p>
                        </div>

                        {/* Bullets directly from CV */}
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="space-y-3 border-t-2 border-outline/50 border-dashed pt-4">
                            <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-primary">
                              <Cpu className="w-3 h-3" />
                              <span>KEY CONTRIBUTIONS & IMPACT</span>
                            </div>
                            <ul className="space-y-2.5">
                              {item.bullets.map((bullet: string, bIdx: number) => (
                                <li key={bIdx} className="font-body text-sm sm:text-base text-on-surface flex items-start gap-3 font-semibold leading-relaxed">
                                  <span className="text-primary font-mono text-xs font-black flex-shrink-0 select-none mt-1">&gt;_</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-4 border-t-2 border-outline/50">
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-2">
                          TECHNOLOGY STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech: string) => (
                            <span 
                              key={tech}
                              className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider bg-surface-container px-2.5 py-1 brutalist-border-thin hover:border-primary hover:text-primary transition-colors duration-150 select-none"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </TiltContainer>
            </motion.article>
          );
        })}
      </div>

    </section>
  );
}
