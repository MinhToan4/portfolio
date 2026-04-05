'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const { personal } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
      }}
    >
      {/* Thin horizontal rules — decorative grid */}
      {[25, 50, 75].map((pct) => (
        <div
          key={pct}
          style={{
            position: 'absolute',
            top: `${pct}%`,
            left: 0,
            right: 0,
            height: '1px',
            background: 'var(--rule)',
            opacity: 0.5,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Thin vertical rules */}
      {[33, 66].map((pct) => (
        <div
          key={pct}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${pct}%`,
            width: '1px',
            background: 'var(--rule)',
            opacity: 0.4,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Spacer for fixed header */}
      <div style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }} />

      {/* Masthead — "PORTFOLIO" overlapping grid lines */}
      {/* Only apply scroll motion after client mount to avoid hydration mismatch */}
      <div
        className="journal-container"
        style={{
          position: 'relative',
          zIndex: 1,
          transform: mounted ? undefined : 'none',
        }}
      >
        <motion.div
          style={mounted ? { y: y1 } : {}}
        >
          <div style={{ position: 'relative', paddingTop: 'clamp(24px, 5vw, 56px)' }}>
            {/* Giant display serif title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="type-masthead"
              style={{ lineHeight: 0.85, overflow: 'visible' }}
            >
              <span style={{ display: 'block' }}>PORT</span>
              <span
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  marginLeft: 'clamp(24px, 8vw, 120px)',
                  color: 'var(--journal-graphite)',
                }}
              >
                FOLIO
              </span>
            </motion.h1>

            {/* Overlapping thin lines — the "JOURNAL" aesthetic */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{
                position: 'absolute',
                top: '42%',
                left: 0,
                right: 0,
                height: '1px',
                background: 'var(--journal-charcoal)',
                transformOrigin: 'left',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{
                position: 'absolute',
                top: 'calc(42% + 5px)',
                left: 0,
                right: 0,
                height: '1px',
                background: 'var(--rule)',
                transformOrigin: 'left',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom editorial block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="journal-container"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(16px, 4vw, 48px)',
            alignItems: 'end',
            paddingBlock: 'clamp(32px, 5vw, 60px)',
            borderTop: '1px solid var(--rule)',
            marginTop: 'clamp(16px, 4vw, 48px)',
          }}
          className="hero-bottom-grid"
        >
          {/* Left — Name + bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  overflow: 'hidden',
                  border: '1px solid var(--rule)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/avatar1.png"
                  alt={personal.name}
                  width={48}
                  height={48}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }}
                  priority
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: 'clamp(16px, 2vw, 22px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {personal.name}
                </p>
                <p className="type-caption" style={{ marginTop: '2px' }}>{personal.title}</p>
              </div>
            </div>

            <p
              className="type-body"
              style={{ maxWidth: '420px', paddingTop: '16px', borderTop: '1px solid var(--rule)' }}
            >
              {personal.description}
            </p>
          </motion.div>

          {/* Right — CTA + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="journal-btn journal-btn-fill"
              >
                View Work
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px' }}>→</span>
              </button>
              <a
                href="/cv.pdf"
                download="CV_Nguyen_Minh_Toan.pdf"
                className="journal-btn"
              >
                Download CV
              </a>
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              {[
                { label: 'GitHub', href: personal.socialLinks.github },
                { label: 'LinkedIn', href: personal.socialLinks.linkedin },
                { label: 'Email', href: `mailto:${personal.email}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link type-caption"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>


      </motion.div>

      {/* Inline responsive fix */}
      <style>{`
        @media (max-width: 640px) {
          .hero-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
