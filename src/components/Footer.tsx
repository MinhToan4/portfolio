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
        <footer className="relative py-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8ED] to-[#D1D1D6]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1">
                            {personal.name}
                        </h3>
                        <p className="text-caption">{personal.title}</p>
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
                                className="p-3 liquid-glass rounded-xl text-[#86868B] hover:text-[#007AFF] transition-colors"
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
                        className="p-3 liquid-glass rounded-xl text-[#86868B] hover:text-[#007AFF] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-8 border-t border-[#C7C7CC]/50 text-center"
                >
                    <p className="text-caption">
                        © {currentYear} {personal.name}. Designed with ❤️ using Liquid Glass.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
