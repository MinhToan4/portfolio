'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function AcademicResults() {
  const { academicResults } = portfolioData;

  const getLetterStyle = (grade: string) => {
    if (grade === 'A+') return { color: 'var(--text)', fontStyle: 'italic' as const };
    if (grade === 'A')  return { color: 'var(--text-subtle)', fontStyle: 'italic' as const };
    return { color: 'var(--text-muted)', fontStyle: 'italic' as const };
  };

  const allSubjects = [...academicResults.generalSubjects, ...academicResults.programmingSubjects];
  const avgGrade = (allSubjects.reduce((acc, s) => acc + s.numericGrade, 0) / allSubjects.length).toFixed(1);

  const SubjectRow = ({ subject, i }: {
    subject: { name: string; numericGrade: number; letterGrade: string };
    i: number;
  }) => (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '14px',
        borderBottom: '1px solid var(--rule)',
        gap: '16px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(18px, 2.2vw, 24px)',
          fontWeight: 400,
          color: 'var(--text)',
          letterSpacing: '0.01em',
          lineHeight: 1.2,
        }}
      >
        {subject.name}
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexShrink: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 2.5vw, 28px)',
            fontWeight: 400,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
          }}
        >
          {subject.numericGrade}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            ...getLetterStyle(subject.letterGrade),
            minWidth: '24px',
            textAlign: 'center',
          }}
        >
          {subject.letterGrade}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section
      id="academic-results"
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
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>04</span>
            <span className="type-subhead">Education</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="type-display" style={{ fontFamily: 'var(--font-script)', fontWeight: 400, paddingBottom: '10px' }}>Academic</h2>
            {/* Big GPA stat */}
            <div style={{ textAlign: 'right' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(56px, 8vw, 100px)',
                  fontWeight: 400,
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.9,
                }}
              >
                {avgGrade}
              </p>
              <p className="type-caption" style={{ marginTop: '8px' }}>Average Score</p>
            </div>
          </div>
        </motion.div>

        {/* Two columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
          }}
        >
          {/* General subjects */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--journal-charcoal)',
                paddingBottom: '12px',
                marginBottom: '0',
              }}
            >
              <p className="type-subhead">General Subjects</p>
              <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>
                {academicResults.generalSubjects.length} courses
              </span>
            </div>

            {academicResults.generalSubjects.map((subject, i) => (
              <SubjectRow key={i} subject={subject} i={i} />
            ))}
          </div>

          {/* Programming subjects */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--journal-charcoal)',
                paddingBottom: '12px',
                marginBottom: '0',
              }}
            >
              <p className="type-subhead">Programming Subjects</p>
              <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>
                {academicResults.programmingSubjects.length} courses
              </span>
            </div>

            {academicResults.programmingSubjects.map((subject, i) => (
              <SubjectRow key={i} subject={subject} i={i} />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
