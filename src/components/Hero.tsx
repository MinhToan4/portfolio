'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
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

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Background with Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-white" />

        {/* Subtle floating shapes */}
        <motion.div
          style={{ y }}
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] organic-shape bg-blue-50"
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] organic-shape bg-gray-100"
          style={{ animationDelay: '5s' }}
        />
        <motion.div
          className="absolute top-[40%] left-[20%] w-[300px] h-[300px] organic-shape bg-blue-50/50"
          style={{ animationDelay: '10s' }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar - Apple rounded square style with subtle glow */}
          <motion.div
            variants={itemVariants}
            className="mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative inline-block"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-[28px] overflow-hidden avatar-apple glow">
                <Image
                  src="/avatar.jpg"
                  alt={personal.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name - Large, bold, left feel but centered */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4"
          >
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
          >
            {personal.title}
          </motion.h2>

          {/* Subtitle - Crafting delightful experiences */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
          >
            {personal.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personal.description}
          </motion.p>

          {/* CTA Buttons - Glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="glass-button glass-button-primary flex items-center gap-3 px-8 py-4"
            >
              <span>Xem dự án</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadCV}
              className="glass-button flex items-center gap-3 px-8 py-4"
            >
              <span>Tải CV</span>
            </motion.button>
          </motion.div>

          {/* Social Links - Minimal glass pills */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 liquid-glass rounded-2xl text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 liquid-glass rounded-2xl text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              className="p-4 liquid-glass rounded-2xl text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
