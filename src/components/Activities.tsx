'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Heart, Building2, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Activities() {
    const { activities } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        },
    };

    const getTypeConfig = (type: string) => {
        switch (type) {
            case 'competition':
                return { icon: Trophy, color: '#F59E0B', label: 'Competition' };
            case 'organization':
                return { icon: Users, color: '#0066FF', label: 'Organization' };
            case 'volunteer':
                return { icon: Heart, color: '#EC4899', label: 'Volunteer' };
            case 'event':
                return { icon: Building2, color: '#8B5CF6', label: 'Event' };
            default:
                return { icon: Award, color: '#00E5A0', label: 'Activity' };
        }
    };

    const ActivityCard = ({ activity }: {
        activity: {
            id: number;
            title: string;
            type: string;
            description: string;
            highlights?: string[];
        }
    }) => {
        const config = getTypeConfig(activity.type);
        const IconComponent = config.icon;

        return (
            <motion.div
                variants={itemVariants}
                className="group bg-white dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all shadow-sm dark:shadow-none"
            >
                <div className="flex items-start gap-4">
                    <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                            backgroundColor: `${config.color}15`,
                            border: `1px solid ${config.color}30`
                        }}
                    >
                        <IconComponent className="w-5 h-5" style={{ color: config.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#00B37D] dark:group-hover:text-[#00E5A0] transition-colors">
                                {activity.title}
                            </h4>
                            <span
                                className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                                style={{
                                    backgroundColor: `${config.color}15`,
                                    color: config.color
                                }}
                            >
                                {config.label}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-[#D0D0D0] text-sm mb-4 leading-relaxed">{activity.description}</p>

                        {activity.highlights && activity.highlights.length > 0 && (
                            <div className="space-y-2">
                                {activity.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#00E5A0] rounded-full mt-1.5 flex-shrink-0" />
                                        <span className="text-sm text-[#00B37D] dark:text-[#00E5A0]">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    // Group activities by type
    const competitions = activities.filter(a => a.type === 'competition');
    const organizations = activities.filter(a => a.type === 'organization');
    const volunteers = activities.filter(a => a.type === 'volunteer');
    const events = activities.filter(a => a.type === 'event');

    const CategorySection = ({
        title,
        items,
        icon: Icon,
        color
    }: {
        title: string;
        items: typeof activities;
        icon: typeof Trophy;
        color: string;
    }) => {
        if (items.length === 0) return null;

        return (
            <div className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="p-2 rounded-lg"
                        style={{
                            backgroundColor: `${color}15`,
                            border: `1px solid ${color}30`
                        }}
                    >
                        <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <span className="text-sm text-gray-500 dark:text-[#C0C0C0]">({items.length})</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {items.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="activities" className="py-32 bg-white dark:bg-[#0A0A0A] relative overflow-hidden transition-colors duration-500">
            {/* Grid pattern */}
            <div className="absolute inset-0 alche-grid-pattern opacity-[0.03] dark:opacity-30" />

            {/* Gradient accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EC4899]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#00E5A0] text-sm font-medium">05</span>
                        <div className="w-12 h-px bg-[#00E5A0]" />
                        <span className="text-gray-500 dark:text-[#C0C0C0] text-sm uppercase tracking-wider">Activities</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Hoạt Động & Cuộc Thi
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <CategorySection
                        title="Cuộc Thi"
                        items={competitions}
                        icon={Trophy}
                        color="#F59E0B"
                    />
                    <CategorySection
                        title="Hoạt Động Học Thuật"
                        items={organizations}
                        icon={Users}
                        color="#0066FF"
                    />
                    <CategorySection
                        title="Sự Kiện"
                        items={events}
                        icon={Building2}
                        color="#8B5CF6"
                    />
                    <CategorySection
                        title="Hoạt Động Tình Nguyện"
                        items={volunteers}
                        icon={Heart}
                        color="#EC4899"
                    />
                </motion.div>
            </div>
        </section>
    );
}
