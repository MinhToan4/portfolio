'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

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
    <section
      id="contact"
      style={{ background: 'var(--bg)', padding: 'var(--section-pad) 0' }}
    >
      <div className="journal-container">

        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>07</span>
            <span className="type-subhead">Get In Touch</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="type-display" style={{ fontFamily: 'var(--font-script)', fontWeight: 400, paddingBottom: '10px' }}>Contact</h2>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 300,
                color: 'var(--text-subtle)',
                maxWidth: '320px',
                lineHeight: 1.45,
              }}
            >
              Do you have a project in mind? Let&apos;s build something exceptional together.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(48px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Contact info side */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: '48px' }}>
              <p className="type-subhead" style={{ marginBottom: '24px' }}>Reach Out</p>

              {[
                { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { label: 'Location', value: personal.location, href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBlock: '16px',
                    borderBottom: '1px solid var(--rule)',
                    gap: '16px',
                  }}
                >
                  <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="journal-link" style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingBlock: '20px',
                borderTop: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--journal-charcoal)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '16px',
                  color: 'var(--text)',
                }}
              >
                Available for work
              </span>
            </div>

            {/* Social links */}
            <div>
              <p className="type-subhead" style={{ marginBottom: '16px' }}>Social</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { label: 'GitHub', href: personal.socialLinks.github },
                  { label: 'LinkedIn', href: personal.socialLinks.linkedin },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBlock: '14px',
                      borderBottom: '1px solid var(--rule)',
                      textDecoration: 'none',
                      color: 'var(--text-subtle)',
                      fontSize: '13px',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
                  >
                    <span>{s.label}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: 'clamp(40px, 6vw, 64px)',
                  border: '1px solid var(--rule)',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--text)',
                    marginBottom: '16px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Thank you.
                </p>
                <p className="type-body">I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {/* Name */}
                  <div style={{ paddingBlock: '8px', borderBottom: '1px solid var(--rule-heavy)' }}>
                    <label htmlFor="contact-name" className="type-caption" style={{ display: 'block', marginBottom: '8px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="journal-input"
                    />
                  </div>

                  {/* Email */}
                  <div style={{ paddingBlock: '8px', borderBottom: '1px solid var(--rule-heavy)' }}>
                    <label htmlFor="contact-email" className="type-caption" style={{ display: 'block', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="journal-input"
                    />
                  </div>

                  {/* Subject */}
                  <div style={{ paddingBlock: '8px', borderBottom: '1px solid var(--rule-heavy)' }}>
                    <label htmlFor="contact-subject" className="type-caption" style={{ display: 'block', marginBottom: '8px' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="journal-input"
                    />
                  </div>

                  {/* Message */}
                  <div style={{ paddingBlock: '8px', borderBottom: '1px solid var(--rule-heavy)', marginBottom: '32px' }}>
                    <label htmlFor="contact-message" className="type-caption" style={{ display: 'block', marginBottom: '8px' }}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="journal-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="journal-btn journal-btn-fill"
                    style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.6 : 1 }}
                  >
                    {isSubmitting ? (
                      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Sending…</span>
                    ) : (
                      <>
                        Send Message
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px' }}>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
