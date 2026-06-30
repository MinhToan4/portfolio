'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { BarChart3, Calculator } from 'lucide-react';

export default function AcademicResults() {
  const { academicResults } = portfolioData;

  const allSubjects = [...academicResults.generalSubjects, ...academicResults.programmingSubjects];
  const avgGrade = (allSubjects.reduce((acc, s) => acc + s.numericGrade, 0) / allSubjects.length).toFixed(1);

  return (
    <section 
      id="academic-results" 
      className="border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Section Header & Avg Grade Metric block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              05 // CAPABILITIES & SCORE
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              ACADEMIC <br />
              <span className="text-primary">PERFORMANCE</span>
            </h2>
          </div>
        </div>
        
        {/* Aggregated Score Panel */}
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-primary text-white flex flex-col justify-between gap-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-white" strokeWidth={2} />
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-white/85">[ AGGREGATE CORE ]</span>
          </div>
          <div>
            <h3 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
              {avgGrade}
            </h3>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white/70 mt-2 font-bold">
              Aggregate Score / 10.0 scale
            </p>
          </div>
        </div>
      </div>

      {/* Spreadsheet Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-outline">
        
        {/* Column 1: General Subjects */}
        <div className="p-8 sm:p-16 lg:p-20 space-y-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-primary" strokeWidth={2} />
            <span>GENERAL RESEARCH</span>
          </h3>

          <div className="border-t-2 border-outline divide-y-2 divide-outline">
            {academicResults.generalSubjects.map((subject, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="flex justify-between items-center py-4 sm:py-5 hover:bg-primary hover:text-white px-4 -mx-4 transition-colors duration-150 group"
              >
                <span className="font-body text-base font-bold uppercase tracking-tight">
                  {subject.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-base font-black italic">
                    {subject.numericGrade.toFixed(1)}
                  </span>
                  <span className="font-mono text-xs font-black uppercase bg-surface-container group-hover:bg-background group-hover:text-primary border border-outline px-3 py-1 w-12 text-center transition-colors">
                    {subject.letterGrade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Programming Subjects */}
        <div className="p-8 sm:p-16 lg:p-20 space-y-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-primary" strokeWidth={2} />
            <span>APPLIED PROGRAMMING</span>
          </h3>

          <div className="border-t-2 border-outline divide-y-2 divide-outline">
            {academicResults.programmingSubjects.map((subject, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="flex justify-between items-center py-4 sm:py-5 hover:bg-primary hover:text-white px-4 -mx-4 transition-colors duration-150 group"
              >
                <span className="font-body text-base font-bold uppercase tracking-tight">
                  {subject.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-base font-black italic">
                    {subject.numericGrade.toFixed(1)}
                  </span>
                  <span className="font-mono text-xs font-black uppercase bg-surface-container group-hover:bg-background group-hover:text-primary border border-outline px-3 py-1 w-12 text-center transition-colors">
                    {subject.letterGrade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
