'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  const { projects } = portfolioData;

  const getMainTechLogo = (tech: string): string => {
    const logos: Record<string, string> = {
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Java 21': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'C++17': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MediaPipe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    };
    return logos[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  return (
    <section
      id="projects"
      style={{ background: 'var(--bg)', padding: 'var(--section-pad) 0' }}
    >
      <div className="journal-container">

        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>02</span>
            <span className="type-subhead">Selected Work</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="type-display">Projects</h2>
            <p className="type-body" style={{ maxWidth: '100%', minWidth: '280px' }}>
              A curated selection of projects demonstrating craft and technical depth.
            </p>
          </div>
        </motion.div>

        {/* Projects — editorial list */}
        <div>
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                borderBottom: '1px solid var(--rule)',
                paddingBlock: 'clamp(32px, 5vw, 56px)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(40px, 12vw, 80px) 1fr auto',
                  gap: 'clamp(16px, 3vw, 48px)',
                  alignItems: 'start',
                }}
                className="project-row"
              >
                {/* Index */}
                <div style={{ paddingTop: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      fontWeight: 300,
                      color: 'var(--text-ghost)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="journal-tag">{tech}</span>
                    ))}
                    {project.featured && (
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '11px',
                          fontStyle: 'italic',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        — featured
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(22px, 3.5vw, 40px)',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      color: 'var(--text)',
                      marginBottom: '12px',
                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="type-body" style={{ maxWidth: '560px' }}>{project.description}</p>

                  {/* Additional tech */}
                  {project.technologies.length > 3 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '16px' }}>
                      {project.technologies.slice(3).map((t) => (
                        <span key={t} className="type-caption" style={{ color: 'var(--text-ghost)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech logo + links */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '20px',
                    minWidth: '48px',
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(40px, 8vw, 56px)',
                      height: 'clamp(40px, 8vw, 56px)',
                      border: '1px solid var(--rule)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      background: 'var(--bg-offset)',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={getMainTechLogo(project.technologies[0])}
                      alt={project.technologies[0]}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(60%)' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journal-link type-caption"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journal-link type-caption"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
