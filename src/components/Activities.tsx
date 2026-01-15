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
                staggerChildren: 0.1,
                delayChildren: 0.1,
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

    const ActivityCard = ({ activity }: {
        activity: {
            id: number;
            title: string;
            type: string;
            description: string;
            highlights?: string[];
        }
    }) => {
        const getIcon = () => {
            switch (activity.type) {
                case 'competition':
                    return <Trophy className="w-6 h-6 text-yellow-600" />;
                case 'organization':
                    return <Users className="w-6 h-6 text-blue-600" />;
                case 'volunteer':
                    return <Heart className="w-6 h-6 text-pink-600" />;
                case 'event':
                    return <Building2 className="w-6 h-6 text-purple-600" />;
                default:
                    return <Award className="w-6 h-6 text-gray-600" />;
            }
        };

        const getIconBg = () => {
            switch (activity.type) {
                case 'competition':
                    return 'bg-yellow-100';
                case 'organization':
                    return 'bg-blue-100';
                case 'volunteer':
                    return 'bg-pink-100';
                case 'event':
                    return 'bg-purple-100';
                default:
                    return 'bg-gray-100';
            }
        };

        return (
            <motion.div
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
                <div className="flex items-start space-x-4">
                    <div className={`${getIconBg()} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        {getIcon()}
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{activity.description}</p>

                        {activity.highlights && activity.highlights.length > 0 && (
                            <div className="space-y-2">
                                {activity.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-sm font-semibold text-blue-600">{highlight}</span>
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

    return (
        <section id="activities" className="py-24 relative overflow-hidden bg-white">
            {/* Subtle background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Trophy className="w-12 h-12 text-blue-600" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Hoạt Động & Cuộc Thi
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {/* Competitions */}
                    {competitions.length > 0 && (
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <Trophy className="w-6 h-6 text-yellow-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Cuộc Thi</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {competitions.map((activity) => (
                                    <ActivityCard key={activity.id} activity={activity} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Organizations */}
                    {organizations.length > 0 && (
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Hoạt Động Học Thuật</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {organizations.map((activity) => (
                                    <ActivityCard key={activity.id} activity={activity} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Events */}
                    {events.length > 0 && (
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Sự Kiện</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {events.map((activity) => (
                                    <ActivityCard key={activity.id} activity={activity} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Volunteers */}
                    {volunteers.length > 0 && (
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-pink-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Hoạt Động Tình Nguyện</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {volunteers.map((activity) => (
                                    <ActivityCard key={activity.id} activity={activity} />
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
