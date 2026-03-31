'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
};

const typeConfig: Record<string, { label: string; symbol: string }> = {
    achievement: { label: 'Achievement', symbol: '✦' },
    competition: { label: 'Competition', symbol: '◈' },
    organization: { label: 'Academic', symbol: '◉' },
    volunteer: { label: 'Volunteer', symbol: '◎' },
    event: { label: 'Event', symbol: '◇' },
};

type Activity = {
    id: number;
    title: string;
    type: string;
    description: string;
    highlights?: string[];
};

export default function Activities() {
    const activities = portfolioData.activities as Activity[];

    const groups = [
        { key: 'achievement', label: 'Achievements' },
        { key: 'competition', label: 'Competitions' },
        { key: 'organization', label: 'Academic' },
        { key: 'event', label: 'Events' },
        { key: 'volunteer', label: 'Volunteering' },
    ];

    return (
        <section
            id="activities"
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
                        <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>05</span>
                        <span className="type-subhead">Extracurriculars</span>
                    </div>
                    <h2 className="type-display">Activities</h2>
                </motion.div>

                {/* Activity groups */}
                {groups.map((group) => {
                    const items = activities.filter(a => a.type === group.key);
                    if (items.length === 0) return null;

                    return (
                        <motion.div
                            key={group.key}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}
                        >
                            {/* Group header */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid var(--journal-charcoal)',
                                    paddingBottom: '10px',
                                    marginBottom: '0',
                                }}
                            >
                                <p className="type-subhead">{group.label}</p>
                                <span className="type-caption" style={{ color: 'var(--text-ghost)' }}>
                                    {items.length} {items.length === 1 ? 'entry' : 'entries'}
                                </span>
                            </div>

                            {/* Items */}
                            {items.map((activity, i) => {
                                const cfg = typeConfig[activity.type] ?? { label: 'Activity', symbol: '◦' };

                                return (
                                    <motion.div
                                        key={activity.id}
                                        custom={i}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '24px 1fr',
                                            gap: '20px',
                                            paddingBlock: 'clamp(20px, 3vw, 32px)',
                                            borderBottom: '1px solid var(--rule)',
                                        }}
                                    >
                                        {/* Symbol */}
                                        <div style={{ paddingTop: '4px' }}>
                                            <span
                                                style={{
                                                    fontFamily: 'var(--font-serif)',
                                                    fontSize: '14px',
                                                    color: 'var(--text-ghost)',
                                                }}
                                            >
                                                {cfg.symbol}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'space-between',
                                                    gap: '16px',
                                                    marginBottom: '10px',
                                                    flexWrap: 'wrap',
                                                }}
                                            >
                                                <h4
                                                    style={{
                                                        fontFamily: 'var(--font-serif)',
                                                        fontSize: 'clamp(16px, 2.2vw, 22px)',
                                                        fontWeight: 700,
                                                        color: 'var(--text)',
                                                        letterSpacing: '-0.005em',
                                                        lineHeight: 1.25,
                                                    }}
                                                >
                                                    {activity.title}
                                                </h4>
                                                <span className="journal-tag" style={{ flexShrink: 0 }}>{cfg.label}</span>
                                            </div>

                                            <p className="type-body" style={{ marginBottom: activity.highlights?.length ? '16px' : 0 }}>
                                                {activity.description}
                                            </p>

                                            {activity.highlights && activity.highlights.length > 0 && (
                                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                    {activity.highlights.map((h, idx) => (
                                                        <li
                                                            key={idx}
                                                            style={{
                                                                display: 'flex',
                                                                gap: '12px',
                                                                fontSize: '14px',
                                                                color: 'var(--text-subtle)',
                                                                lineHeight: 1.5,
                                                            }}
                                                        >
                                                            <span style={{ color: 'var(--text-ghost)', flexShrink: 0 }}>—</span>
                                                            <span>{h}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
