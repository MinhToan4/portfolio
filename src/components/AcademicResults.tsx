'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function AcademicResults() {
    const { academicResults } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                duration: 0.5,
                ease: "easeOut" as const
            }
        },
    };

    const SubjectCard = ({
        subject
    }: {
        subject: { name: string; numericGrade: number; letterGrade: string }
    }) => (
        <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
            <div className="flex justify-between items-center">
                <h4 className="text-gray-800 font-medium text-base">{subject.name}</h4>
                <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold text-lg">{subject.numericGrade}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${subject.letterGrade === 'A+'
                            ? 'bg-green-100 text-green-700'
                            : subject.letterGrade === 'A'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {subject.letterGrade}
                    </span>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="academic-results" className="py-24 relative overflow-hidden bg-white">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full opacity-20 blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full opacity-30 blur-3xl translate-y-1/2 translate-x-1/2" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCap className="w-12 h-12 text-blue-600" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Kết Quả Học Tập
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Môn Đại Cương</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {academicResults.generalSubjects.map((subject, index) => (
                                <SubjectCard key={index} subject={subject} />
                            ))}
                        </div>
                    </div>

                    {/* Programming Subjects */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Môn Lập Trình</h3>
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
