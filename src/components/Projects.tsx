'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import TiltContainer from './TiltContainer';

const projectImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // Stark Brutalist Concrete (Eye Clinic)
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // Abstract B&W Linear (GestureAI)
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // Geometric Building Shadows (Platformer)
];

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
              03 // REPOSITORIES
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              SELECTED <br />
              <span className="text-primary">CHRONOLOGY</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-end">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4">
            A curated selection of technical developments and structural systems built. Focused on performance, backend architecture, and algorithmic design.
          </p>
        </div>
      </div>

      {/* Projects Grid List */}
      <div className="p-8 sm:p-16 lg:p-20 space-y-16 sm:space-y-20">
        {projects.map((project, index) => {
          const imageUrl = projectImages[index % projectImages.length];

          return (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={cubicTransition}
            >
              <TiltContainer>
                <div className="brutalist-border bg-background brutalist-shadow-large p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_var(--border-color)] duration-200 cursor-default">
                  {/* Project Image */}
                  <div className="lg:col-span-5 aspect-video lg:aspect-auto lg:h-full relative brutalist-border overflow-hidden bg-neutral-900">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 hover:scale-105"
                      sizes="(max-w-1024px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white font-mono text-xs font-black px-3 py-1.5 border border-outline">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="font-mono text-xs font-black uppercase tracking-wider bg-surface-container px-3 py-1.5 brutalist-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <p className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-prose font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-outline border-dashed">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutalist-border px-5 py-3 font-mono text-sm font-black uppercase tracking-wider bg-background hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2.5 brutalist-shadow"
                        >
                          <Github className="w-4 h-4" />
                          <span>SOURCE CODE</span>
                        </a>
                      )}
                      
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutalist-border px-5 py-3 font-mono text-sm font-black uppercase tracking-wider bg-primary text-white hover:bg-background hover:text-primary transition-colors flex items-center justify-center gap-2.5 brutalist-shadow"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>LIVE SYSTEM</span>
                        </a>
                      )}
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
