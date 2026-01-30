'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
    const { personal } = portfolioData;
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

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
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        },
    };

    return (
        <section id="contact" className="py-32 bg-white dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-500">
            {/* Grid pattern */}
            <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

            {/* Gradient accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[#00E5A0] text-sm font-medium">06</span>
                            <div className="w-12 h-px bg-[#00E5A0]" />
                            <span className="text-gray-500 dark:text-[#C0C0C0] text-sm uppercase tracking-wider">Contact</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                            Liên hệ
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-[#D0D0D0] max-w-xl">
                            Bạn có dự án trong đầu? Hãy cùng tạo ra điều tuyệt vời.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1fr,400px] gap-12">
                        {/* Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-gray-50 dark:bg-[#111111] rounded-2xl p-8 border border-gray-200 dark:border-white/5">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00E5A0]/10 flex items-center justify-center">
                                            <CheckCircle className="text-[#00E5A0]" size={32} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 dark:text-[#D0D0D0]">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:ring-2 focus:ring-[#00E5A0]/50 focus:border-[#00E5A0] transition-all"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:ring-2 focus:ring-[#00E5A0]/50 focus:border-[#00E5A0] transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:ring-2 focus:ring-[#00E5A0]/50 focus:border-[#00E5A0] transition-all"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:ring-2 focus:ring-[#00E5A0]/50 focus:border-[#00E5A0] transition-all resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-3 py-4 bg-[#00E5A0] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00E5A0]/90 transition-all disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <motion.a
                                href={`mailto:${personal.email}`}
                                whileHover={{ scale: 1.02 }}
                                className="group block bg-gray-50 dark:bg-[#111111] rounded-xl p-5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-green-100 dark:bg-[#00E5A0]/10 border border-green-200 dark:border-[#00E5A0]/20">
                                        <Mail className="text-green-600 dark:text-[#00E5A0]" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm group-hover:text-[#00B37D] dark:group-hover:text-[#00E5A0] transition-colors">
                                            {personal.email}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="text-gray-400 dark:text-[#C0C0C0] group-hover:text-[#00E5A0] transition-colors" size={18} />
                                </div>
                            </motion.a>

                            <motion.a
                                href={`tel:${personal.phone}`}
                                whileHover={{ scale: 1.02 }}
                                className="group block bg-gray-50 dark:bg-[#111111] rounded-xl p-5 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-[#0066FF]/10 border border-blue-200 dark:border-[#0066FF]/20">
                                        <Phone className="text-blue-600 dark:text-[#0066FF]" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                                        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm group-hover:text-blue-600 dark:group-hover:text-[#0066FF] transition-colors">
                                            {personal.phone}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="text-gray-400 dark:text-[#C0C0C0] group-hover:text-[#0066FF] transition-colors" size={18} />
                                </div>
                            </motion.a>

                            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-5 border border-gray-200 dark:border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-amber-100 dark:bg-[#F59E0B]/10 border border-amber-200 dark:border-[#F59E0B]/20">
                                        <MapPin className="text-amber-600 dark:text-[#F59E0B]" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                                        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm">{personal.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-5 border border-gray-200 dark:border-white/5">
                                <div className="flex items-center justify-center gap-3">
                                    <span className="w-2 h-2 bg-[#00E5A0] rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-[#00B37D] dark:text-[#00E5A0]">Available for work</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
