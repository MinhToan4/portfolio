'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, TrendingUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function AcademicResults() {
    const { academicResults } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        },
    };

    const getGradeStyle = (letterGrade: string) => {
        switch (letterGrade) {
            case 'A+':
                return {
                    bg: 'bg-green-100 dark:bg-[#00E5A0]/10',
                    border: 'border-green-300 dark:border-[#00E5A0]/30',
                    text: 'text-green-700 dark:text-[#00E5A0]',
                    glow: 'shadow-green-500/20 dark:shadow-[#00E5A0]/20'
                };
            case 'A':
                return {
                    bg: 'bg-blue-100 dark:bg-[#0066FF]/10',
                    border: 'border-blue-300 dark:border-[#0066FF]/30',
                    text: 'text-blue-700 dark:text-[#0066FF]',
                    glow: 'shadow-blue-500/20 dark:shadow-[#0066FF]/20'
                };
            default:
                return {
                    bg: 'bg-amber-100 dark:bg-[#F59E0B]/10',
                    border: 'border-amber-300 dark:border-[#F59E0B]/30',
                    text: 'text-amber-700 dark:text-[#F59E0B]',
                    glow: 'shadow-amber-500/20 dark:shadow-[#F59E0B]/20'
                };
        }
    };

    const SubjectCard = ({
        subject
    }: {
        subject: { name: string; numericGrade: number; letterGrade: string }
    }) => {
        const gradeStyle = getGradeStyle(subject.letterGrade);

        return (
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-[#111111] rounded-xl p-5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
                <div className="flex justify-between items-center">
                    <h4 className="text-gray-900 dark:text-white font-medium text-base group-hover:text-[#00B37D] dark:group-hover:text-[#00E5A0] transition-colors">
                        {subject.name}
                    </h4>
                    <div className="flex items-center gap-3">
                        <span className="text-[#00B37D] dark:text-[#00E5A0] font-bold text-xl">
                            {subject.numericGrade}
                        </span>
                        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${gradeStyle.bg} ${gradeStyle.border} ${gradeStyle.text}`}>
                            {subject.letterGrade}
                        </span>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Calculate average GPA
    const allSubjects = [...academicResults.generalSubjects, ...academicResults.programmingSubjects];
    const avgGrade = (allSubjects.reduce((acc, s) => acc + s.numericGrade, 0) / allSubjects.length).toFixed(1);

    return (
        <section id="academic-results" className="py-32 relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
            {/* Grid pattern */}
            <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

            {/* Gradient accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#00E5A0] text-sm font-medium">03</span>
                        <div className="w-12 h-px bg-[#00E5A0]" />
                        <span className="text-gray-500 dark:text-[#C0C0C0] text-sm uppercase tracking-wider">Education</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                                Kết Quả Học Tập
                            </h2>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {/* General Subjects */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-[#0066FF]/10 rounded-xl flex items-center justify-center border border-blue-200 dark:border-[#0066FF]/20">
                                <BookOpen className="w-5 h-5 text-blue-600 dark:text-[#0066FF]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Môn Đại Cương</h3>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {academicResults.generalSubjects.map((subject, index) => (
                                <SubjectCard key={index} subject={subject} />
                            ))}
                        </div>
                    </div>

                    {/* Programming Subjects */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-green-100 dark:bg-[#00E5A0]/10 rounded-xl flex items-center justify-center border border-green-200 dark:border-[#00E5A0]/20">
                                <Code className="w-5 h-5 text-green-600 dark:text-[#00E5A0]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Môn Lập Trình</h3>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {academicResults.programmingSubjects.map((subject, index) => (
                                <SubjectCard key={index} subject={subject} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
