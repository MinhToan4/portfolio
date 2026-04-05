'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects, personal } = portfolioData;

  const renderLeftAligned = (project: { id: string | number, title: string, description: string, technologies: string[], githubUrl?: string, liveUrl?: string }, index: number) => (
    <article key={project.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-16 p-8 transition-transform duration-300">
      <div className="col-span-12 md:col-span-7">
        <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block">
          0{index + 1} / {project.technologies[0]}
        </span>
        <h2 className="font-headline text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 origin-left leading-[0.9] uppercase group-hover:text-on-surface">
          <span className="text-on-surface">{project.title.split(' ').slice(0, Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span> <br/> 
          <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{project.title.split(' ').slice(Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span>
        </h2>
        <div className="mt-8 max-w-xs">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">GitHub</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">Live</a>}
        </div>
      </div>
      <div className="hidden md:flex col-span-5 items-center justify-end">
        <div className="w-px h-32 bg-outline-variant/30"></div>
        <div className="ml-12 font-label text-[10px] tracking-[0.3em] uppercase text-outline [writing-mode:vertical-lr]">
          {project.technologies.slice(0, 3).join(' • ')}
        </div>
      </div>
    </article>
  );

  const renderCenterAligned = (project: { id: string | number, title: string, description: string, technologies: string[], githubUrl?: string, liveUrl?: string }, index: number) => (
    <article key={project.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-16 p-8 transition-transform duration-300">
      <div className="col-span-12 md:col-start-3 md:col-span-8 text-center">
        <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block">
          0{index + 1} / {project.technologies[0]}
        </span>
        <h2 className="font-headline text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 leading-[0.9] uppercase group-hover:text-on-surface">
          <span className="text-on-surface">{project.title.split(' ').slice(0, Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span> <br/> 
          <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{project.title.split(' ').slice(Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span>
        </h2>
        <div className="mt-8 max-w-sm mx-auto">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">GitHub</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">Live</a>}
        </div>
      </div>
    </article>
  );

  const renderRightAligned = (project: { id: string | number, title: string, description: string, technologies: string[], githubUrl?: string, liveUrl?: string }, index: number) => (
    <article key={project.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-16 p-8 transition-transform duration-300">
      <div className="hidden md:flex col-span-4 items-center">
        <div className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">
          {project.technologies.slice(0, 3).join(' / ')}
        </div>
        <div className="ml-8 w-24 h-px bg-primary"></div>
      </div>
      <div className="col-span-12 md:col-span-8 text-right flex flex-col items-end">
        <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block">
          0{index + 1} / {project.technologies[0]}
        </span>
        <h2 className="font-headline text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 origin-right leading-[0.9] uppercase group-hover:text-on-surface">
          <span className="text-on-surface">{project.title.split(' ').slice(0, Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span> <br/> 
          <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{project.title.split(' ').slice(Math.ceil(project.title.split(' ').length / 2)).join(' ')}</span>
        </h2>
        <div className="mt-8 max-w-xs ml-auto">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-8 flex gap-4 justify-end">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">GitHub</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] tracking-widest uppercase text-primary hover:underline underline-offset-4 font-bold">Live</a>}
        </div>
      </div>
    </article>
  );

  return (
    <section id="projects" className="px-8 max-w-screen-2xl mx-auto my-32">
      <header className="mb-32 grid grid-cols-12 gap-y-12">
        <motion.div 
          className="col-span-12 md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-[clamp(2rem,11vw,9rem)] leading-[0.85] font-black tracking-tighter text-on-surface mb-8 md:mb-16 uppercase">
            SELECTED <br/> <span className="text-outline-brutal">CHRONOLOGY</span>
          </h2>
        </motion.div>
        <motion.div 
          className="col-span-12 md:col-start-9 md:col-span-4 self-end md:translate-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-outline leading-relaxed border-l-2 border-primary pl-6">
            A curated selection of technical developments and structural systems built. Focused on performance, architecture, and innovation.
          </p>
        </motion.div>
      </header>

      <div className="space-y-48">
        {projects.map((project, index) => {
          if (index % 3 === 0) return renderLeftAligned(project, index);
          if (index % 3 === 1) return renderCenterAligned(project, index);
          return renderRightAligned(project, index);
        })}
      </div>

      <div className="mt-64 text-center">
        <div className="inline-block relative">
          <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-6 bg-on-surface text-background font-label text-sm font-bold tracking-widest uppercase brutalist-shadow active:translate-y-1 hover:bg-primary transition-colors">
            View Full Work Archive
          </a>
        </div>
        <p className="mt-8 font-body text-[10px] tracking-[0.4em] uppercase text-outline">Index of complete repositories</p>
      </div>
    </section>
  );
}
