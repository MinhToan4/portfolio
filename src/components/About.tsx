'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Facebook } from 'lucide-react';
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Điện thoại', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Địa chỉ', value: personal.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personal.socialLinks.github, color: '#333' },
    { icon: Linkedin, label: 'LinkedIn', href: personal.socialLinks.linkedin, color: '#0A66C2' },
    { icon: Facebook, label: 'Facebook', href: personal.socialLinks.facebook, color: '#1877F2' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Về tôi</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">

            {/* Bio & Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Name & Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                  {personal.name}
                </h3>
                <p className="text-xl font-semibold text-blue-600 mb-1">{personal.title}</p>
                <p className="text-gray-500">{personal.subtitle}</p>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {personal.description}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Với vai trò <span className="font-semibold text-gray-900">{personal.title}</span>, tôi đam mê
                  phát triển các ứng dụng web từ frontend đến backend. Tôi tin rằng công nghệ có thể giải quyết
                  nhiều vấn đề thực tế, và việc học hỏi liên tục giúp tôi ngày càng hoàn thiện kỹ năng của mình.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-blue-600">3.82</p>
                  <p className="text-xs text-gray-600 mt-1">GPA/4.0</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-gray-900">5+</p>
                  <p className="text-xs text-gray-600 mt-1">Chứng chỉ</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-green-600">3+</p>
                  <p className="text-xs text-gray-600 mt-1">Dự án</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Github size={18} />
                  Xem GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Mail size={18} />
                  Liên hệ ngay
                </motion.a>
              </div>

              {/* Contact Information */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin liên hệ</h3>

                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <item.icon size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Mạng xã hội</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        style={{ color: social.color }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
