'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'tools',    label: 'Tools & Others' },
  { key: 'knowledge',label: 'Knowledge' },
] as const;

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'JavaScript', 'HTML / CSS', 'Tailwind', 'MongoDB', 'PostgreSQL',
  'Git', 'Docker',
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      style={{ background: 'var(--bg-offset)', padding: 'var(--section-pad) 0' }}
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
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>06</span>
            <span className="type-subhead">Capabilities</span>
          </div>
          <h2 className="type-display">Skills</h2>
        </motion.div>

        {/* Skill categories — column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
            borderTop: '1px solid var(--rule)',
            borderLeft: '1px solid var(--rule)',
            marginBottom: 'clamp(48px, 7vw, 80px)',
          }}
        >
          {categories.map((cat, ci) => {
            const skillList = skills[cat.key as keyof typeof skills] as Array<{ name: string; level: number; icon: string }>;
            if (!skillList || !skillList.length) return null;

            return (
              <motion.div
                key={cat.key}
                custom={ci}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  borderRight: '1px solid var(--rule)',
                  borderBottom: '1px solid var(--rule)',
                  padding: 'clamp(20px, 3vw, 32px)',
                }}
              >
                {/* Category label */}
                <p
                  className="type-subhead"
                  style={{ marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--rule)' }}
                >
                  {cat.label}
                </p>

                {/* Skill rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {skillList.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      custom={si}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{
                        paddingBlock: '10px',
                        borderBottom: si < skillList.length - 1 ? '1px solid var(--rule)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '15px',
                            fontWeight: 400,
                            color: 'var(--text)',
                            letterSpacing: '0',
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            fontSize: '12px',
                            color: 'var(--text-ghost)',
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Thin progress bar */}
                      <div
                        style={{
                          height: '1px',
                          background: 'var(--rule)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: si * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'var(--journal-charcoal)',
                            transformOrigin: 'left',
                            transform: `scaleX(${skill.level / 100})`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack — editorial pill row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--journal-charcoal)',
              marginBottom: '24px',
            }}
          >
            <p className="type-subhead">Frequently Used</p>
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>{techStack.length} technologies</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="journal-tag"
                style={{ cursor: 'default' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
