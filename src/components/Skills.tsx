'use client';

import { motion } from 'framer-motion';
import { Code, Database, Settings, Brain, Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const categoryIcons = {
  frontend: Code,
  backend: Database,
  tools: Settings,
  knowledge: Brain,
};

const categoryColors = {
  frontend: '#00E5A0',
  backend: '#0066FF',
  tools: '#F59E0B',
  knowledge: '#A855F7',
};

const categoryNames = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & Others',
  knowledge: 'Knowledge',
};

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const SkillItem = ({ skill, color }: {
    skill: { name: string; level: number; icon: string };
    color: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className="group flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-white/5 hover:border-white/10 transition-all"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium text-white">{skill.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
        <span className="text-xs text-[#888888] w-8 text-right">{skill.level}%</span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-32 bg-[#0A0A0A] relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 alche-grid-pattern opacity-30" />

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
            <span className="text-[#00E5A0] text-sm font-medium">04</span>
            <div className="w-12 h-px bg-[#00E5A0]" />
            <span className="text-[#888888] text-sm uppercase tracking-wider">Skills</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Kỹ năng & Công nghệ
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            const categoryName = categoryNames[category as keyof typeof categoryNames];
            const categoryColor = categoryColors[category as keyof typeof categoryColors];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#111111] rounded-2xl p-6 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      backgroundColor: `${categoryColor}15`,
                      border: `1px solid ${categoryColor}30`
                    }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: categoryColor }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{categoryName}</h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {skillList.map((skill: { name: string; level: number; icon: string }) => (
                    <SkillItem key={skill.name} skill={skill} color={categoryColor} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-5 h-5 text-[#00E5A0]" />
            <h3 className="text-xl font-semibold text-white">Công nghệ thường sử dụng</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { name: 'React', color: '#61DAFB' },
              { name: 'Next.js', color: '#FFFFFF' },
              { name: 'TypeScript', color: '#3178C6' },
              { name: 'Node.js', color: '#339933' },
              { name: 'Python', color: '#3776AB' },
              { name: 'JavaScript', color: '#F7DF1E' },
              { name: 'HTML/CSS', color: '#E34F26' },
              { name: 'Tailwind', color: '#06B6D4' },
              { name: 'MongoDB', color: '#47A248' },
              { name: 'PostgreSQL', color: '#4169E1' },
              { name: 'Git', color: '#F05032' },
              { name: 'Docker', color: '#2496ED' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-[#111111] rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full transition-all group-hover:scale-125"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-sm text-[#A1A1A1] group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
