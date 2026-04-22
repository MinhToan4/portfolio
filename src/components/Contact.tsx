'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
    const { personal } = portfolioData;
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1400));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto my-16 sm:my-24 md:my-32">
            <div className="mb-20 md:mb-32 flex justify-end">
                <div className="w-full md:max-w-4xl text-left md:text-right">
                    <span className="font-label text-[9px] sm:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-12 block text-tertiary">Dialogue</span>
                    <h2 className="font-headline text-[clamp(1.75rem,6vw,7rem)] leading-[0.85] font-black tracking-tighter text-on-surface mb-6 md:mb-16 max-w-5xl uppercase break-words">
                        Good communication is not <span className="text-outline-brutal">invisible</span> <br />
                        <span className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold italic normal-case tracking-normal text-on-surface-variant">Let&apos;s arrange a proper structural exchange.</span>
                    </h2>
                </div>
            </div>

            <div className="brutalist-border brutalist-shadow p-4 sm:p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 bg-background mb-20 md:mb-32">
                <div>
                    <h4 className="font-label text-[9px] sm:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-6 md:mb-8 font-bold text-primary">Inquiry & Communication</h4>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-8 md:mb-12">
                        Available for open discussions on software architecture, systemic design, and innovative collaborations. All inquiries are parsed with equal consideration.
                    </p>
                    <div className="space-y-4 md:space-y-6 border-t border-outline-variant pt-4 md:pt-6">
                        <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-3">
                            <span className="font-body text-xs sm:text-sm font-bold flex-shrink-0">Email Protocol</span>
                            <a href={`mailto:${personal.email}`} className="font-label text-[8px] sm:text-[10px] tracking-widest text-outline hover:text-primary transition-colors break-all">{personal.email}</a>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-3">
                            <span className="font-body text-xs sm:text-sm font-bold flex-shrink-0">Direct Line</span>
                            <a href={`tel:${personal.phone}`} className="font-label text-[8px] sm:text-[10px] tracking-widest text-outline hover:text-primary transition-colors flex-shrink-0">{personal.phone}</a>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-surface-container py-2 gap-3">
                            <span className="font-body text-xs sm:text-sm font-bold flex-shrink-0">Base Coordinate</span>
                            <span className="font-label text-[8px] sm:text-[10px] tracking-widest text-outline">{personal.location}</span>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:space-x-8 gap-4 sm:gap-8">
                        {Object.entries(personal.socialLinks).map(([name, url]) => (
                            <a key={name} href={url as string} target="_blank" rel="noopener noreferrer" className="font-label text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-outline hover:text-primary transition-colors hover:underline underline-offset-4 duration-300 whitespace-nowrap">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-label text-[9px] sm:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase mb-6 md:mb-8 font-bold text-primary">Input Form</h4>
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="py-8 md:py-12 border border-outline-variant flex flex-col items-center justify-center h-full min-h-[250px] md:min-h-[300px]"
                        >
                            <h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-on-surface italic">Transmission Received.</h3>
                            <p className="font-body text-xs sm:text-sm text-on-surface-variant">We will parse your data shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant p-2 font-body text-xs sm:text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-outline"
                                    placeholder="IDENTIFIER (NAME)"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant p-2 font-body text-xs sm:text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-outline"
                                    placeholder="RETURN COORDINATE (EMAIL)"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant p-2 font-body text-xs sm:text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-outline"
                                    placeholder="SUBJECT CLAUSE"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-transparent border-0 border-b border-outline-variant p-2 font-body text-xs sm:text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-outline resize-none"
                                    placeholder="PAYLOAD (MESSAGE)"
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary font-label text-xs font-black tracking-widest uppercase brutalist-shadow brutalist-border transition-all duration-300 active:translate-y-1 hover:bg-on-surface disabled:opacity-50 mt-6 md:mt-8 block w-full text-center whitespace-nowrap">
                                {isSubmitting ? 'Transmitting...' : 'Dispatch'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
