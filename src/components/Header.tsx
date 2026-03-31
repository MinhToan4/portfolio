'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
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

const NAV_GAP = 32;
const NAV_SIDE_BUFFER = 28;
const COMPACT_TOGGLE_WIDTH = 40;
const DEFAULT_SIDE_SLOT_WIDTH = 96;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showCompactNav, setShowCompactNav] = useState(false);
  const [navModeResolved, setNavModeResolved] = useState(false);
  const [sideSlotWidth, setSideSlotWidth] = useState(DEFAULT_SIDE_SLOT_WIDTH);

  const headerRowRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLAnchorElement>(null);
  const navMeasureRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60);

    const sections = navItems.map((item) => item.href);

    for (const id of [...sections].reverse()) {
      const element = document.getElementById(id);

      if (element && element.getBoundingClientRect().top <= 160) {
        setActiveSection(id);
        break;
      }
    }
  });

  useEffect(() => {
    const updateNavMode = () => {
      const headerRow = headerRowRef.current;
      const wordmark = wordmarkRef.current;
      const navMeasure = navMeasureRef.current;

      if (!headerRow || !wordmark || !navMeasure) return;

      const nextSideSlotWidth = Math.ceil(
        Math.max(wordmark.getBoundingClientRect().width, COMPACT_TOGGLE_WIDTH) + NAV_SIDE_BUFFER,
      );
      const availableNavWidth = Math.max(0, headerRow.clientWidth - nextSideSlotWidth * 2);
      const navWidth = Math.ceil(navMeasure.getBoundingClientRect().width);

      setSideSlotWidth(nextSideSlotWidth);
      setShowCompactNav(navWidth > availableNavWidth);
      setNavModeResolved(true);
    };

    updateNavMode();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateNavMode) : null;

    if (resizeObserver) {
      if (headerRowRef.current) resizeObserver.observe(headerRowRef.current);
      if (wordmarkRef.current) resizeObserver.observe(wordmarkRef.current);
      if (navMeasureRef.current) resizeObserver.observe(navMeasureRef.current);
    }

    window.addEventListener('resize', updateNavMode);
    document.fonts?.ready.then(updateNavMode).catch(() => undefined);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateNavMode);
    };
  }, []);

  useEffect(() => {
    if (!showCompactNav) {
      setIsOpen(false);
    }
  }, [showCompactNav]);

  const getHeaderOffset = () => {
    const headerHeight = headerRowRef.current?.getBoundingClientRect().height ?? 0;
    return Math.ceil(headerHeight);
  };

  const handleNav = (href: string, event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    setIsOpen(false);

    window.requestAnimationFrame(() => {
      scrollToSection(href, getHeaderOffset());
    });
  };

  const showInlineNav = navModeResolved && !showCompactNav;
  const showMenuToggle = navModeResolved && showCompactNav;
  const menuOpen = showMenuToggle && isOpen;
  const useCompactLayout = showMenuToggle;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b bg-[var(--bg)]/95 backdrop-blur-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--rule)' : 'transparent' }}
    >
      <div className="journal-container">
        <div
          ref={headerRowRef}
          style={{
            position: 'relative',
            display: useCompactLayout ? 'flex' : 'grid',
            gridTemplateColumns: useCompactLayout ? undefined : `${sideSlotWidth}px minmax(0, 1fr) ${sideSlotWidth}px`,
            justifyContent: useCompactLayout ? 'space-between' : undefined,
            alignItems: 'center',
            columnGap: useCompactLayout ? undefined : '24px',
            gap: useCompactLayout ? '24px' : undefined,
            paddingBlock: '18px',
          }}
        >
          <div style={{ width: useCompactLayout ? 'auto' : '100%', minWidth: 0, flexShrink: 0 }}>
            <a
              ref={wordmarkRef}
              href="#hero"
              onClick={(event) => handleNav('hero', event)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                fontWeight: 300,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                textDecoration: 'none',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              NMT
            </a>
          </div>

          <nav
            aria-label="Primary"
            style={{
              display: showInlineNav ? 'flex' : 'none',
              alignItems: 'center',
              justifySelf: 'center',
              gap: `${NAV_GAP}px`,
              whiteSpace: 'nowrap',
              minWidth: 0,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(event) => handleNav(item.href, event)}
                className="type-caption"
                aria-current={activeSection === item.href ? 'page' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 0 2px',
                  color: activeSection === item.href ? 'var(--text)' : 'var(--text-muted)',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                  borderBottom: activeSection === item.href ? '1px solid var(--text)' : '1px solid transparent',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div
            style={{
              width: useCompactLayout ? 'auto' : '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              minWidth: 0,
              flexShrink: 0,
              marginLeft: useCompactLayout ? 'auto' : undefined,
            }}
          >
            {showMenuToggle && (
              <button
                onClick={() => setIsOpen((current) => !current)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  background: 'none',
                  border: 'none',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                aria-controls="header-mobile-nav"
              >
                {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            )}
          </div>

          <div
            ref={navMeasureRef}
            aria-hidden="true"
            className="type-caption"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              gap: `${NAV_GAP}px`,
              visibility: 'hidden',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '0.15em',
            }}
          >
            {navItems.map((item) => (
              <span key={item.name} style={{ padding: '0 0 2px' }}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        id="header-mobile-nav"
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
        style={{
          overflow: 'hidden',
          background: 'var(--bg)',
          borderTop: menuOpen ? '1px solid var(--rule)' : 'none',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className="journal-container" style={{ paddingBlock: menuOpen ? '32px' : 0 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -10 }}
              transition={{ delay: index * 0.06 }}
              style={{ borderBottom: '1px solid var(--rule)', paddingBlock: '16px' }}
            >
              <a
                href={`#${item.href}`}
                onClick={(event) => handleNav(item.href, event)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: activeSection === item.href ? 'var(--text)' : 'var(--text-muted)',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
