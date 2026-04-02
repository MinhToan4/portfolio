'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { name: 'Journal', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Work', href: 'projects' },
  { name: 'Experience', href: 'experience' },
  { name: 'Academic', href: 'academic-results' },
  { name: 'Activities', href: 'activities' },
  { name: 'Contact', href: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
    const sections = navItems.map(i => i.href);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 160) {
        setActiveSection(id);
        break;
      }
    }
  });

  const handleNav = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b bg-[var(--bg)]/95 backdrop-blur-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--rule)' : 'transparent' }}
    >
      <div className="journal-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '18px', position: 'relative' }}>

          {/* Logo / Masthead wordmark */}
          <div style={{ flex: 1 }}>
            <button
              onClick={() => handleNav('hero')}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                fontWeight: 300,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              NMT
            </button>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} className="hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                className="type-caption"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeSection === item.href ? 'var(--text)' : 'var(--text-muted)',
                  letterSpacing: '0.15em',
                  transition: 'color 0.25s ease',
                  paddingBottom: '2px',
                  borderBottom: activeSection === item.href ? '1px solid var(--text)' : '1px solid transparent',
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ overflow: 'hidden', background: 'var(--bg)', borderTop: isOpen ? '1px solid var(--rule)' : 'none' }}
      >
        <div className="journal-container" style={{ paddingBlock: '32px' }}>
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
              transition={{ delay: i * 0.06 }}
              style={{ borderBottom: '1px solid var(--rule)', paddingBlock: '16px' }}
            >
              <button
                onClick={() => handleNav(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: activeSection === item.href ? 'var(--text)' : 'var(--text-muted)',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
