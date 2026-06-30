'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      id="contact" 
      className="border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              07 // TRANSMISSION
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              GOOD DIALOGUE <br />
              <span className="text-primary">IS STARK</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-end">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4">
            Let&apos;s arrange a proper structural exchange. All inquiries are parsed with equal consideration.
          </p>
        </div>
      </div>

      {/* Main Grid Contact System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-outline">
        
        {/* Left Column: Direct coordinates and info */}
        <div className="lg:col-span-5 p-8 sm:p-16 lg:p-20 flex flex-col justify-between gap-12">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
              COORDINATES
            </h3>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed font-semibold">
              Have a project, a lab opening, or a system query? Connect directly using the physical coords below.
            </p>

            <div className="border-t-2 border-outline divide-y-2 divide-outline">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">EMAIL PROTOCOL</span>
                </div>
                <a href={`mailto:${personal.email}`} className="font-mono text-sm sm:text-base text-primary font-bold hover:underline break-all ml-4">
                  {personal.email}
                </a>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">DIRECT LINE</span>
                </div>
                <a href={`tel:${personal.phone}`} className="font-mono text-sm sm:text-base font-bold hover:underline">
                  {personal.phone}
                </a>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">COORDINATE</span>
                </div>
                <span className="font-mono text-sm sm:text-base font-bold">
                  {personal.location.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Social connections footer text */}
          <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-outline border-dashed">
            {Object.entries(personal.socialLinks).map(([name, url]) => (
              <a 
                key={name}
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors underline underline-offset-4"
              >
                {name} {" // "}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Input Form */}
        <div className="lg:col-span-7 p-8 sm:p-16 lg:p-20 bg-surface-container flex flex-col justify-center">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="brutalist-border bg-background p-8 text-center space-y-4 brutalist-shadow"
            >
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-primary">
                TRANSMISSION SUCCESSFUL
              </h3>
              <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground">
                [ payload has been appended to queue ]
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-primary block">
                  [ IDENTIFIER ]
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-background brutalist-border p-4 font-mono text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-primary)] transition-all placeholder:text-muted-foreground/50 text-on-surface font-semibold"
                  placeholder="ENTER FULL NAME / CORP NAME"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-primary block">
                  [ RESPONSE COORDINATE ]
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-background brutalist-border p-4 font-mono text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-primary)] transition-all placeholder:text-muted-foreground/50 text-on-surface font-semibold"
                  placeholder="ENTER RETURN EMAIL ADDRESS"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-primary block">
                  [ SUBJECT CLAUSE ]
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-background brutalist-border p-4 font-mono text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-primary)] transition-all placeholder:text-muted-foreground/50 text-on-surface font-semibold"
                  placeholder="SPECIFY INQUIRY TOPIC"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-primary block">
                  [ PAYLOAD ]
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-background brutalist-border p-4 font-mono text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-primary)] transition-all placeholder:text-muted-foreground/50 text-on-surface resize-none font-semibold"
                  placeholder="WRITE DETAILED MSG BODY..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-center flex items-center justify-center gap-3 brutalist-border bg-primary hover:bg-black hover:text-white text-white py-4 font-heading font-black text-xl uppercase tracking-tight brutalist-shadow hover:translate-y-[2px] transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
}
