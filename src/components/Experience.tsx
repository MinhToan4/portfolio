'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
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
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        {type === 'experience' ? (
          <Briefcase className="w-4 h-4 text-white" />
        ) : (
          <GraduationCap className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ml-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {type === 'experience' ? item.title : item.degree}
            </h3>
            <p className="text-blue-600 font-semibold">
              {type === 'experience' ? item.company : item.school}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2 sm:mt-0">
            <Calendar className="w-4 h-4" />
            <span>{item.period}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          {item.description}
        </p>

        {/* Achievements for experience or GPA for education */}
        {type === 'experience' && item.achievements && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Thành tích:</h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement: string, idx: number) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {type === 'education' && item.gpa && (
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-600">GPA: {item.gpa}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Kinh nghiệm & Học vấn
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Hành trình phát triển sự nghiệp và học tập của tôi
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
              Kinh nghiệm làm việc
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >              {experience.map((item) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  type="experience"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
              Học vấn
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >              {education.map((item) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  type="education"
                />
              ))}
            </motion.div>

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div className="mt-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-3 text-yellow-600" />
                  Chứng chỉ
                </h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            {cert.name}
                          </h5>
                          <p className="text-sm text-blue-600">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {cert.date}
                        </span>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline"
                        >
                          Xem chứng chỉ →
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Điểm mạnh chính
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">0+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Năm kinh nghiệm</h4>
              <p className="text-sm text-gray-600">
                Cầu toàn
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">0+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dự án hoàn thành</h4>
              <p className="text-sm text-gray-600">
                Kỹ tính
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">0+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Công nghệ</h4>
              <p className="text-sm text-gray-600">
                C, C++, Python, Java
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
