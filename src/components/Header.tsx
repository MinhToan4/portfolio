'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { name: 'Intro', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Work', href: 'projects' },
  { name: 'Experience', href: 'experience' },
  { name: 'Academic', href: 'academic-results' },
  { name: 'Activities', href: 'activities' },
  { name: 'Contact', href: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = navItems.map(i => i.href);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    scrollToSection(href, 100);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 select-none">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="max-w-7xl mx-auto w-full brutalist-border bg-background/90 backdrop-blur-md text-on-background flex items-center justify-between py-3 px-6 transition-all duration-200 brutalist-shadow"
      >
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="flex items-center font-heading font-black text-xl sm:text-2xl tracking-tighter uppercase cursor-pointer hover:text-primary transition-colors"
        >
          NMT<span className="text-primary font-mono">.</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                className="relative px-4 py-2 font-mono text-xs font-black uppercase tracking-wider cursor-pointer group"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-primary z-0 brutalist-border-thin"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-205 
                  ${isActive ? 'text-white' : 'text-on-background group-hover:text-primary'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 brutalist-border bg-background hover:bg-primary hover:text-white transition-colors cursor-pointer flex items-center justify-center brutalist-shadow"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4" strokeWidth={2} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={2} />
              )
            ) : (
              <div className="w-4 h-4 bg-outline/20 animate-pulse" />
            )}
          </button>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-10 h-10 brutalist-border bg-background hover:bg-primary hover:text-white transition-colors cursor-pointer flex items-center justify-center brutalist-shadow"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="xl:hidden max-w-7xl mx-auto mt-2 brutalist-border bg-background w-full z-45 flex flex-col items-stretch p-4 gap-2 brutalist-shadow"
          >
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                  className={`w-full text-left px-5 py-3.5 brutalist-border font-heading font-black text-xl uppercase tracking-tight flex justify-between items-center transition-colors cursor-pointer brutalist-shadow
                    ${isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white bg-surface-container'}`}
                >
                  <span>{item.name}</span>
                  <span className={`font-mono text-xs ${isActive ? 'text-white/70' : 'text-muted-foreground'}`}>0{idx + 1}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
