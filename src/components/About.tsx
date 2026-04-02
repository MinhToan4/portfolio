'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const { personal } = portfolioData;

  const stats = [
    { value: '3.82', label: 'GPA / 4.0' },
    { value: '7', label: 'Certifications' },
    { value: '3', label: 'Projects' },
  ];

  const contacts = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { label: 'Location', value: personal.location, href: null },
  ];

  const socials = [
    { label: 'GitHub', href: personal.socialLinks.github },
    { label: 'LinkedIn', href: personal.socialLinks.linkedin },
    { label: 'Facebook', href: personal.socialLinks.facebook },
  ];

  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-offset)',
        padding: 'var(--section-pad) 0',
      }}
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
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>01</span>
            <span className="type-subhead">About</span>
          </div>
          <h2 className="type-display" style={{ fontFamily: 'var(--font-script)', fontWeight: 400, paddingBottom: '10px' }}>About<em> Me</em></h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'start',
          }}
        >
          {/* LEFT — portrait + name */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Portrait */}
            <div
              style={{
                position: 'relative',
                marginBottom: '32px',
                maxWidth: '340px',
              }}
            >
              {/* Offset frame */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  right: '-12px',
                  bottom: '-12px',
                  border: '1px solid var(--rule)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  border: '1px solid var(--rule-heavy)',
                  aspectRatio: '4/5',
                }}
              >
                <Image
                  src="/avatar1.png"
                  alt={personal.name}
                  fill
                  style={{ objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }}
                />
              </div>
            </div>

            {/* Name block */}
            <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
              <p className="type-subhead" style={{ marginBottom: '8px' }}>The Engineer</p>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                  marginBottom: '4px',
                }}
              >
                {personal.name}
              </h3>
              <p className="type-subhead">{personal.title}</p>
            </div>
          </motion.div>

          {/* RIGHT — bio + stats + contact */}
          <div>
            {/* Bio */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginBottom: '48px' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: 'var(--text)',
                  marginBottom: '24px',
                  letterSpacing: '0.01em',
                }}
              >
                &ldquo;{personal.subtitle}&rdquo;
              </p>
              <p className="type-body" style={{ marginBottom: '16px', fontFamily: '"Times New Roman", Times, serif' }}>{personal.description}</p>
              <p className="type-body" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                As a <span style={{ color: 'var(--text)', fontWeight: 500 }}>{personal.title}</span>,
                I am passionate about building web applications across the full stack, from frontend
                to backend. I believe technology can solve meaningful real-world problems.
              </p>
            </motion.div>

            {/* Stats — editorial metric row */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0',
                borderTop: '1px solid var(--rule)',
                borderLeft: '1px solid var(--rule)',
                marginBottom: '48px',
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: '24px 20px',
                    borderRight: '1px solid var(--rule)',
                    borderBottom: '1px solid var(--rule)',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px, 4vw, 42px)',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="type-caption">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginBottom: '40px' }}
            >
              <p className="type-subhead" style={{ marginBottom: '16px' }}>Contact</p>
              {contacts.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="journal-link" style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>{c.value}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Social links row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', gap: '24px' }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link type-subhead"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
