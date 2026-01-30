'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Academic', href: 'academic-results' },
    { name: 'Activities', href: 'activities' },
    { name: 'Contact', href: 'contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);

            const sections = navItems.map(item => item.href);
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        scrollToSection(href);
        setIsOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick('hero')}
                        className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl tracking-tight"
                    >
                        NMT<span className="text-[#00E5A0]">.</span>
                    </motion.button>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.href
                                        ? 'text-[#00E5A0]'
                                        : 'text-gray-600 dark:text-[#D0D0D0] hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                    {activeSection === item.href && (
                                        <motion.div
                                            layoutId="activeNavAlche"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00E5A0] rounded-full"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Button */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-900 dark:text-white"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden overflow-hidden"
                >
                    <ul className="py-6 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : -20
                                }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-all ${activeSection === item.href
                                        ? 'text-[#00E5A0]'
                                        : 'text-gray-600 dark:text-[#D0D0D0] hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </nav>
        </motion.header>
    );
}
