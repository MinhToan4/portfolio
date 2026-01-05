'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Calendar, Heart } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personal } = portfolioData;

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >          <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
            Giới thiệu về tôi
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/avatar.jpg"
                  alt={personal.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 -right-6 p-3 bg-white rounded-xl shadow-lg"
              >
                <Heart className="w-6 h-6 text-red-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 -left-6 p-3 bg-white rounded-xl shadow-lg"
              >
                <User className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Xin chào! Tôi là {personal.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {personal.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Với niềm đam mê công nghệ và sự sáng tạo, tôi luôn tìm kiếm cơ hội để
                học hỏi những công nghệ mới và ứng dụng chúng vào các dự án thực tế.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{personal.email}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Điện thoại</p>
                  <p className="font-medium text-gray-900">{personal.phone}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Địa chỉ</p>
                  <p className="font-medium text-gray-900">{personal.location}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trạng thái</p>
                  <p className="font-medium text-gray-900">Sẵn sàng làm việc</p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
