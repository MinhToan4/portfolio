'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'var(--journal-charcoal)',
        color: 'var(--journal-cream)',
        padding: 'clamp(48px, 7vw, 80px) 0 clamp(32px, 4vw, 40px)',
      }}
    >
      <div className="journal-container">

        {/* Top row — large brand + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingBottom: 'clamp(24px, 4vw, 40px)',
            borderBottom: '1px solid rgba(245,240,232,0.12)',
            marginBottom: 'clamp(24px, 4vw, 40px)',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(48px, 9vw, 100px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                color: 'var(--journal-cream)',
              }}
            >
              NMT<span style={{ fontStyle: 'italic', color: 'rgba(245,240,232,0.4)' }}>.</span>
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)',
                marginTop: '12px',
              }}
            >
              {personal.title}
            </p>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: '1px solid rgba(245,240,232,0.16)',
              color: 'rgba(245,240,232,0.6)',
              cursor: 'pointer',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)';
              e.currentTarget.style.color = 'var(--journal-cream)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.16)';
              e.currentTarget.style.color = 'rgba(245,240,232,0.6)';
            }}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px 48px',
            paddingBottom: 'clamp(24px, 4vw, 40px)',
            borderBottom: '1px solid rgba(245,240,232,0.08)',
            marginBottom: 'clamp(24px, 3vw, 32px)',
          }}
        >
          {[
            { label: 'About', href: 'about' },
            { label: 'Projects', href: 'projects' },
            { label: 'Experience', href: 'experience' },
            { label: 'Activities', href: 'activities' },
            { label: 'Contact', href: 'contact' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const el = document.getElementById(item.href);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.45)',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--journal-cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              color: 'rgba(245,240,232,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            © {year} {personal.name}. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '13px',
              color: 'rgba(245,240,232,0.25)',
              letterSpacing: '0.03em',
            }}
          >
            {personal.location}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
