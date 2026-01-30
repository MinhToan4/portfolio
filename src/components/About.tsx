'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personal.socialLinks.github },
    { icon: Linkedin, label: 'LinkedIn', href: personal.socialLinks.linkedin },
    { icon: Facebook, label: 'Facebook', href: personal.socialLinks.facebook },
  ];

  const stats = [
    { value: '3.82', label: 'GPA/4.0' },
    { value: '5+', label: 'Certificates' },
    { value: '3+', label: 'Projects' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      {/* Grid pattern */}
      <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00E5A0]/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#00E5A0] text-sm font-medium">01</span>
              <div className="w-12 h-px bg-[#00E5A0]" />
              <span className="text-gray-500 dark:text-[#B0B0B0] text-sm uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Về tôi
            </h2>
          </motion.div>

          {/* Main Content - Full Width */}
          <motion.div variants={itemVariants} className="space-y-8 mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0044AA] dark:text-white mb-2">
                {personal.name}
              </h3>
              <p className="text-[#00E5A0] font-medium text-lg mb-1">{personal.title}</p>
              <p className="text-gray-900 dark:text-[#D0D0D0] font-semibold">{personal.subtitle}</p>
            </div>

            <div className="space-y-4 max-w-3xl">
              <p className="text-gray-600 dark:text-[#D0D0D0] text-base leading-relaxed">
                {personal.description}
              </p>
              <p className="text-gray-600 dark:text-[#D0D0D0] text-base leading-relaxed">
                Với vai trò <span className="text-[#0044AA] dark:text-white font-medium">{personal.title}</span>, tôi đam mê
                phát triển các ứng dụng web từ frontend đến backend. Tôi tin rằng công nghệ có thể giải quyết
                nhiều vấn đề thực tế, và việc học hỏi liên tục giúp tôi ngày càng hoàn thiện kỹ năng của mình.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-white/5 hover:border-[#00E5A0]/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#00E5A0]">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-[#B0B0B0] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 229, 160, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-[#00E5A0] dark:hover:bg-[#00E5A0] hover:text-black transition-all duration-300"
              >
                <Github size={18} />
                View GitHub
                <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium rounded-full hover:border-[#0044AA] dark:hover:border-white hover:text-[#0044AA] dark:hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information - Below */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:border-[#00E5A0]/20 transition-all duration-300 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/5">
                      <item.icon size={18} className="text-[#00E5A0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 dark:text-[#B0B0B0] uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-[#D0D0D0] hover:text-[#00E5A0] transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 dark:bg-white/5 my-8" />

              {/* Social Links */}
              <div>
                <p className="text-xs text-gray-500 dark:text-[#B0B0B0] uppercase tracking-wider mb-4">Social</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/5 text-gray-600 dark:text-[#D0D0D0] hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
