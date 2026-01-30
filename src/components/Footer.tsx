'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
    const { personal } = portfolioData;
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: personal.socialLinks.github, label: 'GitHub' },
        { icon: Linkedin, href: personal.socialLinks.linkedin, label: 'LinkedIn' },
        { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
    ];

    return (
        <footer className="relative py-16 overflow-hidden bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {personal.name.split(' ').pop()}<span className="text-[#00B37D] dark:text-[#00E5A0]">.</span>
                        </h3>
                        <p className="text-gray-600 dark:text-[#C0C0C0] text-sm">{personal.title}</p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-white dark:bg-[#111111] rounded-lg border border-gray-200 dark:border-white/5 text-gray-500 dark:text-[#A1A1A1] hover:text-[#00B37D] dark:hover:text-[#00E5A0] hover:border-[#00B37D]/30 dark:hover:border-[#00E5A0]/30 transition-all shadow-sm"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll to top */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="p-3 bg-white dark:bg-[#111111] rounded-lg border border-gray-200 dark:border-white/5 text-gray-500 dark:text-[#A1A1A1] hover:text-[#00B37D] dark:hover:text-[#00E5A0] hover:border-[#00B37D]/30 dark:hover:border-[#00E5A0]/30 transition-all shadow-sm"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-center"
                >
                    <p className="text-gray-500 dark:text-[#C0C0C0] text-sm">
                        © {currentYear} {personal.name}. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
