'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section
      id="experience"
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
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>03</span>
            <span className="type-subhead">Background</span>
          </div>
          <h2 className="type-display" style={{ fontFamily: 'var(--font-script)', fontWeight: 400, paddingBottom: '10px' }}>Experience</h2>
        </motion.div>

        {/* Two-column: Work + Education */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
          }}
        >
          {/* Work Experience */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={{ borderBottom: '1px solid var(--journal-charcoal)', paddingBottom: '12px', marginBottom: '32px' }}>
              <p className="type-subhead">Academic Profile</p>
            </div>

            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  paddingBlock: '28px',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(17px, 2.2vw, 24px)',
                        fontWeight: 400,
                        color: 'var(--text)',
                        letterSpacing: '-0.005em',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="type-caption" style={{ color: 'var(--text-muted)' }}>{item.company}</p>
                  </div>
                  <span className="type-caption" style={{ color: 'var(--text-ghost)', flexShrink: 0 }}>{item.period}</span>
                </div>

                <p className="type-body" style={{ marginTop: '12px', marginBottom: '12px' }}>{item.description}</p>

                {item.achievements && item.achievements.length > 0 && (
                  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {item.achievements.map((a: string, idx: number) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          gap: '12px',
                          paddingBlock: '6px',
                          fontSize: '14px',
                          color: 'var(--text-subtle)',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: 'var(--rule-heavy)', flexShrink: 0, marginTop: '2px' }}>—</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Education + Certs */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div style={{ borderBottom: '1px solid var(--journal-charcoal)', paddingBottom: '12px', marginBottom: '32px' }}>
                <p className="type-subhead">Education</p>
              </div>

              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    paddingBlock: '28px',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '12px', flexWrap: 'wrap' }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(17px, 2.2vw, 24px)',
                          fontWeight: 400,
                          color: 'var(--text)',
                          letterSpacing: '-0.005em',
                          marginBottom: '4px',
                        }}
                      >
                        {item.degree}
                      </h3>
                      <p className="type-caption" style={{ color: 'var(--text-muted)' }}>{item.school}</p>
                    </div>
                    <span className="type-caption" style={{ color: 'var(--text-ghost)', flexShrink: 0 }}>{item.period}</span>
                  </div>
                  <p className="type-body" style={{ marginTop: '12px' }}>{item.description}</p>
                  {item.gpa && (
                    <p
                      style={{
                        marginTop: '12px',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '18px',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        color: 'var(--text)',
                      }}
                    >
                      GPA: <span style={{ fontStyle: 'italic', fontWeight: 700 }}>{item.gpa}</span>
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ marginTop: '48px' }}
              >
                <div style={{ borderBottom: '1px solid var(--journal-charcoal)', paddingBottom: '12px', marginBottom: '24px' }}>
                  <p className="type-subhead">Certifications</p>
                </div>

                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBlock: '14px',
                      borderBottom: '1px solid var(--rule)',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: 'var(--text)',
                          marginBottom: '4px',
                          lineHeight: 1.4,
                        }}
                      >
                        {cert.name}
                      </p>
                      <p className="type-caption">
                        {cert.issuer} — {cert.date}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journal-link type-caption"
                        style={{ flexShrink: 0 }}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
