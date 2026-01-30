'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
  };

  // Tech color mapping - adjusted for light mode visibility
  const getTechColor = (tech: string, isLightMode: boolean = false): string => {
    const techColors: Record<string, { dark: string; light: string }> = {
      'Java': { dark: '#ED8B00', light: '#C76B00' },
      'Java 21': { dark: '#ED8B00', light: '#C76B00' },
      'Python': { dark: '#3776AB', light: '#2B5D8A' },
      'C++': { dark: '#00599C', light: '#004A82' },
      'C++17': { dark: '#00599C', light: '#004A82' },
      'JavaScript': { dark: '#F7DF1E', light: '#B8A400' },
      'TypeScript': { dark: '#3178C6', light: '#2563A8' },
      'React': { dark: '#61DAFB', light: '#0891B2' },
      'Next.js': { dark: '#FFFFFF', light: '#000000' },
      'Node.js': { dark: '#339933', light: '#2A7D2A' },
      'PostgreSQL': { dark: '#336791', light: '#2A5578' },
      'MongoDB': { dark: '#47A248', light: '#3A8A3A' },
    };
    const colors = techColors[tech] || { dark: '#00E5A0', light: '#00B37D' };
    return isLightMode ? colors.light : colors.dark;
  };

  return (
    <section id="projects" className="py-32 relative bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#00E5A0] text-sm font-medium">02</span>
            <div className="w-12 h-px bg-[#00E5A0]" />
            <span className="text-gray-500 dark:text-[#C0C0C0] text-sm uppercase tracking-wider">Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Dự án nổi bật
          </h2>
          <p className="text-gray-600 dark:text-[#D0D0D0] max-w-2xl">
            Các dự án thể hiện kỹ năng và đam mê xây dựng phần mềm của tôi.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            // Get main tech logo URL
            const getMainTechLogo = (tech: string): string => {
              const logos: Record<string, string> = {
                'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                'Java 21': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
                'C++17': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
                'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                'MediaPipe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
                'SFML': 'https://www.sfml-dev.org/images/sfml-icon.png',
              };
              return logos[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
            };

            const mainTech = project.technologies[0];
            const secondTech = project.technologies[1];

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm dark:shadow-none group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Project Tech Logo Display */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#1A1A1A] dark:via-[#151515] dark:to-[#0A0A0A]">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#00E5A0]/20 to-transparent rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#0066FF]/20 to-transparent rounded-full blur-2xl" />

                    {/* Main Tech Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 p-4 bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-lg border border-gray-200 dark:border-white/10"
                        >
                          <img
                            src={getMainTechLogo(mainTech)}
                            alt={mainTech}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        {secondTech && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="w-16 h-16 p-3 bg-white dark:bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-200 dark:border-white/10 -ml-6 mt-8"
                          >
                            <img
                              src={getMainTechLogo(secondTech)}
                              alt={secondTech}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {project.featured && (
                      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white bg-[#00E5A0] rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full border dark:border"
                          style={{
                            borderColor: `${getTechColor(tech)}40`,
                            color: getTechColor(tech)
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#00B37D] dark:group-hover:text-[#00E5A0] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-[#D0D0D0] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Additional Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(2, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs text-gray-500 dark:text-[#B0B0B0] bg-gray-100 dark:bg-[#1A1A1A] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 text-xs text-gray-500 dark:text-[#C0C0C0] bg-gray-100 dark:bg-[#1A1A1A] rounded-full">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div className="px-6 py-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] text-gray-600 dark:text-[#D0D0D0] hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#252525] transition-all"
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] text-gray-600 dark:text-[#D0D0D0] hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#252525] transition-all"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>

                    <motion.a
                      whileHover={{ x: 4 }}
                      href={project.githubUrl || project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#00B37D] dark:text-[#00E5A0] hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </motion.a>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}