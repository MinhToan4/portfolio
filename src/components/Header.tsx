'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';

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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-4xl"
        >
            <nav
                className={`liquid-glass rounded-[22px] px-6 py-3 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 shadow-lg backdrop-blur-xl'
                    : 'bg-white/70 backdrop-blur-lg'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavClick('hero')}
                        className="text-lg font-semibold text-[#1D1D1F]"
                    >
                        <span className="gradient-text">Nguyễn Minh Toàn</span>
                    </motion.button>

                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === item.href
                                        ? 'text-[#007AFF]'
                                        : 'text-[#1D1D1F] hover:text-[#007AFF]'
                                        }`}
                                >
                                    {activeSection === item.href && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-[#007AFF]/10 rounded-xl"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </motion.button>
                            </li>
                        ))}
                    </ul>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[#1D1D1F] hover:text-[#007AFF] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </motion.button>
                </div>

                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                    className="md:hidden overflow-hidden"
                >
                    <ul className="py-4 space-y-1">
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
                                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.href
                                        ? 'bg-[#007AFF]/10 text-[#007AFF]'
                                        : 'text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#007AFF]'
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
