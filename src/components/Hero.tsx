'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import { useRef } from 'react';

export default function Hero() {
  const { personal } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_Nguyen_Minh_Toan.pdf';
    link.click();
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00E5A0]/5 dark:bg-[#00E5A0]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0066FF]/5 dark:bg-[#0066FF]/10 rounded-full blur-[120px]" />

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative inline-block"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-white/10 hover:border-[#00E5A0]/50 transition-colors shadow-lg">
                <Image
                  src="/avatar.jpg"
                  alt={personal.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name - Large Display Text */}
          <motion.h1
            variants={itemVariants}
            style={{ y }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0044AA] dark:text-white mb-6 tracking-tight"
          >
            {personal.name}
          </motion.h1>

          {/* Title with Accent */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-[#00E5A0] mb-6"
          >
            {personal.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-900 dark:text-[#A1A1A1] font-semibold mb-4 max-w-xl mx-auto"
          >
            {personal.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 dark:text-[#D0D0D0] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personal.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-[#00E5A0] dark:hover:bg-[#00E5A0] hover:text-black transition-all"
            >
              <span>Xem dự án</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-3 px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium rounded-full hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <span>Tải CV</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: personal.socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-[#D0D0D0] hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-3 text-gray-400 dark:text-[#C0C0C0] hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}
