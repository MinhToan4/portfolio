'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const TimelineItem = ({ item, type }: {
    item: {
      id: number;
      title?: string;
      company?: string;
      degree?: string;
      school?: string;
      period: string;
      description: string;
      achievements?: string[];
      gpa?: string;
    };
    type: 'experience' | 'education'
  }) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-3 w-px h-full bg-gray-200 dark:bg-white/10"></div>

      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#00E5A0]"></div>

      {/* Content */}
      <div className="bg-white dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all shadow-sm dark:shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {type === 'experience' ? item.title : item.degree}
            </h3>
            <p className="text-[#00B37D] dark:text-[#00E5A0] font-medium text-sm">
              {type === 'experience' ? item.company : item.school}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-[#C0C0C0]">
            <Calendar className="w-4 h-4" />
            <span>{item.period}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {type === 'experience' && item.achievements && (
          <div className="space-y-2">
            {item.achievements.map((achievement: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-[#D0D0D0]">
                <div className="w-1 h-1 bg-[#00E5A0] rounded-full mt-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        )}

        {type === 'education' && item.gpa && (
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#00E5A0]" />
            <span className="text-sm text-gray-600 dark:text-[#D0D0D0]">GPA: <span className="text-[#00B37D] dark:text-[#00E5A0] font-medium">{item.gpa}</span></span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-32 bg-white dark:bg-[#0A0A0A] transition-colors duration-500 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-[150px]" />

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
            <span className="text-[#00E5A0] text-sm font-medium">03</span>
            <div className="w-12 h-px bg-[#00E5A0]" />
            <span className="text-gray-500 dark:text-[#C0C0C0] text-sm uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Kinh nghiệm & Học vấn
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-green-100 dark:bg-[#00E5A0]/10 border border-green-200 dark:border-[#00E5A0]/20">
                <Briefcase className="w-5 h-5 text-green-600 dark:text-[#00E5A0]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Work Experience</h3>
            </motion.div>
            {experience.map((item) => (
              <TimelineItem key={item.id} item={item} type="experience" />
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-[#0066FF]/10 border border-blue-200 dark:border-[#0066FF]/20">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </motion.div>
            {education.map((item) => (
              <TimelineItem key={item.id} item={item} type="education" />
            ))
            }

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-[#F59E0B]/10 border border-amber-200 dark:border-[#F59E0B]/20">
                    <Award className="w-5 h-5 text-amber-600 dark:text-[#F59E0B]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h4>
                </motion.div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white dark:bg-[#111111] rounded-lg p-4 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all shadow-sm dark:shadow-none"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{cert.name}</h5>
                          <p className="text-gray-500 dark:text-[#C0C0C0] text-xs">{cert.issuer} • {cert.date}</p>
                        </div>
                        {cert.url && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-[#D0D0D0] hover:text-[#00E5A0] transition-colors"
                          >
                            <ArrowUpRight size={16} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
