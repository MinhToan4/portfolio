'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Filter, Star, Trophy, Users, Eye, HelpCircle } from 'lucide-react';

export default function Activities() {
  const activities = portfolioData.activities;
  const [selectedTab, setSelectedTab] = useState('all');

  const groups = [
    { key: 'all', label: 'All', icon: Filter },
    { key: 'achievement', label: 'Achievements', icon: Star },
    { key: 'competition', label: 'Competitions', icon: Trophy },
    { key: 'organization', label: 'Labs & Labs', icon: Users },
    { key: 'event', label: 'Events', icon: Eye },
    { key: 'volunteer', label: 'Volunteering', icon: HelpCircle },
  ];

  // Map icons for display on cards
  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement': return Star;
      case 'competition': return Trophy;
      case 'organization': return Users;
      case 'event': return Eye;
      default: return HelpCircle;
    }
  };

  const filteredActivities = selectedTab === 'all' 
    ? activities 
    : activities.filter(a => a.type === selectedTab);

  const cubicTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      id="activities" 
      className="border-b-2 border-outline select-none bg-background transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline">
        <div className="lg:col-span-8 p-8 sm:p-16 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-outline flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-black bg-primary/10 px-3.5 py-2 border border-primary/25 w-fit inline-block">
              06 // ENGAGEMENTS
            </span>
            <h2 className="font-heading text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.85] font-black tracking-tighter text-on-surface uppercase">
              BEYOND <br />
              <span className="text-primary">SYNTAX</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 lg:p-16 bg-surface-container flex flex-col justify-end">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4">
            A catalogue of contests, hackathons, academic lab membership, and community volunteer work.
          </p>
        </div>
      </div>

      {/* Filter Tabs - Industrial styling */}
      <div className="border-b-2 border-outline bg-surface-container p-4 overflow-x-auto whitespace-nowrap flex gap-3 scrollbar-none">
        {groups.map((group) => {
          const Icon = group.icon;
          const isSelected = selectedTab === group.key;
          const count = group.key === 'all' 
            ? activities.length 
            : activities.filter(a => a.type === group.key).length;

          if (count === 0) return null;

          return (
            <button
              key={group.key}
              onClick={() => setSelectedTab(group.key)}
              className={`brutalist-border px-4 py-2.5 font-mono text-sm font-black uppercase cursor-pointer transition-colors flex items-center gap-2 brutalist-shadow
                ${isSelected ? 'bg-primary text-white' : 'bg-background hover:bg-primary hover:text-white'}`}
            >
              <Icon className="w-4 h-4" />
              <span>{group.label}</span>
              <span className={`font-mono text-xs font-black px-2 py-0.5 border border-outline transition-colors
                ${isSelected ? 'bg-white text-primary' : 'bg-surface-container text-on-surface'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="p-8 sm:p-16 lg:p-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={cubicTransition}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredActivities.map((activity, idx) => {
              const CardIcon = getIcon(activity.type);
              
              return (
                <article
                  key={activity.id}
                  className="brutalist-border bg-background brutalist-shadow p-6 flex flex-col justify-between gap-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border-color)] duration-150"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-outline pb-2.5">
                      <span className="font-mono text-xs font-black uppercase text-primary">
                        {activity.type}
                      </span>
                      <CardIcon className="w-4 h-4 text-primary" strokeWidth={2} />
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                      {activity.title}
                    </h3>

                    {activity.description && (
                      <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed font-semibold">
                        {activity.description}
                      </p>
                    )}
                  </div>

                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground pt-3 border-t border-outline border-dashed">
                    [ STABLE NODE: 0{idx + 1} ]
                  </div>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
