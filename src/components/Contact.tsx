'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
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

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-white">
            <div className="absolute bottom-20 right-10 w-[400px] h-[400px] organic-shape bg-blue-50" />

            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Liên hệ</h2>
                        <p className="text-xl font-medium text-gray-700 max-w-xl mx-auto">
                            Bạn có dự án trong đầu? Hãy cùng tạo ra điều tuyệt vời.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1fr,400px] gap-12">
                        <motion.div variants={itemVariants}>
                            <div className="glass-card rounded-3xl p-8">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#34C759]/10 flex items-center justify-center">
                                            <CheckCircle className="text-[#34C759]" size={32} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">Message Sent!</h3>
                                        <p className="text-[#86868B]">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-0 text-[#1D1D1F] placeholder-[#86868B] focus:ring-2 focus:ring-[#007AFF] focus:bg-white transition-all"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-0 text-[#1D1D1F] placeholder-[#86868B] focus:ring-2 focus:ring-[#007AFF] focus:bg-white transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-0 text-[#1D1D1F] placeholder-[#86868B] focus:ring-2 focus:ring-[#007AFF] focus:bg-white transition-all"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-0 text-[#1D1D1F] placeholder-[#86868B] focus:ring-2 focus:ring-[#007AFF] focus:bg-white transition-all resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="glass-button glass-button-primary w-full flex items-center justify-center gap-3 py-4"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
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

                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="glass-card rounded-3xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-[#007AFF]/10 shrink-0">
                                        <Mail className="text-[#007AFF]" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1D1D1F] mb-1">Email</h4>
                                        <a
                                            href={`mailto:${personal.email}`}
                                            className="text-[#86868B] hover:text-[#007AFF] transition-colors text-sm"
                                        >
                                            {personal.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-3xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-[#34C759]/10 shrink-0">
                                        <Phone className="text-[#34C759]" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1D1D1F] mb-1">Phone</h4>
                                        <a
                                            href={`tel:${personal.phone}`}
                                            className="text-[#86868B] hover:text-[#34C759] transition-colors text-sm"
                                        >
                                            {personal.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-3xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-[#FF9500]/10 shrink-0">
                                        <MapPin className="text-[#FF9500]" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1D1D1F] mb-1">Location</h4>
                                        <p className="text-[#86868B] text-sm">{personal.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-3xl p-6 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34C759]/10 mb-3">
                                    <span className="w-2 h-2 bg-[#34C759] rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-[#34C759]">Available for work</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
