'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Projects() {
  const { projects } = portfolioData;

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const ProjectCard = ({ project }: {
    project: {
      id: number;
      title: string;
      description: string;
      image: string;
      technologies: string[];
      liveUrl: string;
      githubUrl: string;
      featured: boolean;
    }
  }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">
              {project.title.charAt(0)}
            </div>
          </div>

          {/* Overlay buttons */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                Nổi bật
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="relative">
            <p className={`text-gray-600 mb-2 ${showFullDescription ? '' : 'line-clamp-3'}`}>
              {project.description}
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              {showFullDescription ? (
                <>
                  <span>Ẩn bớt</span>
                  <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  <span>Xem thêm</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100/30 text-blue-600 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
            >
              <Eye className="w-4 h-4" />
              <span>Xem demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
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
            Dự án nổi bật
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Một số dự án mà tôi đã thực hiện, từ ứng dụng web đến mobile app
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >          {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </motion.div>

        {/* Call to action - Hidden */}

        {/* GitHub Stats - Hidden */}
      </div>
    </section>
  );
}
