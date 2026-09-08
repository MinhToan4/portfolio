'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { Trophy, Award, Users, Building2, Heart, Calendar, ShieldCheck, Cpu, Layers, ZoomIn, X } from 'lucide-react';
import TiltContainer from './TiltContainer';

export default function Activities() {
  const activities = portfolioData.activities;
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Filter activities into their respective groups
  const achievements = activities.filter(a => a.type === 'achievement');
  const competitions = activities.filter(a => a.type === 'competition');
  const labs = activities.filter(a => a.type === 'organization');
  const tours = activities.filter(a => a.type === 'event');
  const volunteers = activities.filter(a => a.type === 'volunteer');

  const cubicTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section 
      id="activities" 
      className="border-b-2 border-outline select-none bg-transparent transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-outline bg-background">
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
            A specialized registry of achievements, team-lab memberships, technical excursions, and community outreach.
          </p>
        </div>
      </div>

      {/* SUBSECTION 1: CHAMPIONSHIPS & AWARDS (Achievements with Prizes) */}
      <div className="border-b-2 border-outline bg-background">
        <div className="p-8 sm:p-16 lg:p-20 border-b-2 border-outline bg-surface-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500 animate-[bounce_3s_infinite]" />
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                CHAMPIONSHIPS & AWARDS
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase text-yellow-600 dark:text-yellow-400 border border-yellow-500/30 px-2.5 py-1 bg-yellow-500/5 select-none">
              PODIUM LOGS // {achievements.length}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...cubicTransition, delay: idx * 0.05 }}
              className="h-full"
            >
              <TiltContainer className="h-full">
                <div className="relative brutalist-border p-6 sm:p-8 bg-background brutalist-shadow h-full flex flex-col justify-between gap-6 duration-150 cursor-default group hover:-translate-y-1 hover:bg-yellow-500/5 hover:border-yellow-500/50 hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,0.25)]"
                >
                  {/* Corner Winner Tag */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-yellow-500 bg-yellow-400 text-black select-none">
                      WINNER
                    </span>
                  </div>

                  <div className="space-y-4 pr-16 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="font-mono text-xs font-black text-muted-foreground">
                        PODIUM NODE // 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-heading text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="font-body text-xs sm:text-sm text-on-surface-variant font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {/* Achievement Image / Certificate Proof */}
                    {'image' in item && item.image && (
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage({ src: item.image as string, title: item.title });
                        }}
                        className="relative w-full aspect-[16/10] brutalist-border overflow-hidden bg-neutral-900 cursor-pointer group/thumb mt-2"
                      >
                        <Image
                          src={item.image as string}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                          sizes="(max-width: 768px) 100vw, 450px"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="font-mono text-[10px] sm:text-xs font-black uppercase text-white bg-black/85 px-3 py-1.5 border border-white/30 flex items-center gap-1.5">
                            <ZoomIn className="w-3.5 h-3.5 text-yellow-400" />
                            VIEW PROOF / CERTIFICATE
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-yellow-500/30 border-dashed pt-4 flex items-center justify-between font-mono text-[10px] font-bold text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-yellow-600 dark:text-yellow-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      AWARD SECURED
                    </span>
                    <span>SYS_CODE: #0{item.id}</span>
                  </div>
                </div>
              </TiltContainer>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBSECTION 1.5: COMPETITIVE ENGAGEMENTS (Participations) */}
      <div className="border-b-2 border-outline bg-background">
        <div className="p-8 sm:p-16 lg:p-20 border-b-2 border-outline bg-surface-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                COMPETITIVE ARENAS
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase text-muted-foreground border border-outline px-2.5 py-1 bg-background select-none">
              TOTAL RECORDED // {competitions.length}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...cubicTransition, delay: idx * 0.05 }}
              className="h-full"
            >
              <TiltContainer className="h-full">
                <div className="relative brutalist-border p-6 sm:p-8 bg-background brutalist-shadow h-full flex flex-col justify-between gap-6 duration-150 cursor-default group hover:-translate-y-1 hover:bg-primary/5 hover:border-primary/50 hover:shadow-[6px_6px_0px_0px_var(--primary-glow)]"
                >
                  {/* Corner Engagement Tag */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-outline bg-surface-container text-on-surface select-none">
                      ENGAGEMENT
                    </span>
                  </div>

                  <div className="space-y-4 pr-16 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-mono text-xs font-black text-muted-foreground">
                        CONTEST NODE // 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-heading text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="font-body text-xs sm:text-sm text-on-surface-variant font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-outline border-dashed pt-4 flex items-center justify-between font-mono text-[10px] font-bold text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-primary">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VERIFIED ENTRY
                    </span>
                    <span>SYS_CODE: #0{item.id}</span>
                  </div>
                </div>
              </TiltContainer>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBSECTION 2: LAB ARCHITECTURE (Organizations) */}
      <div className="border-b-2 border-outline bg-background">
        <div className="p-8 sm:p-16 lg:p-20 border-b-2 border-outline bg-surface-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                LAB ARCHITECTURE
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase text-muted-foreground border border-outline px-2.5 py-1 bg-background select-none">
              TOTAL MEMBERSHIPS // {labs.length}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-16 lg:p-20">
          <div className="max-w-4xl mx-auto w-full">
            {labs.map((lab) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={cubicTransition}
              >
                <TiltContainer maxTilt={3}>
                  <div className="relative brutalist-border bg-surface-container brutalist-shadow p-6 sm:p-8 overflow-hidden cursor-default hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border-color)] hover:border-primary/40 transition-all duration-150 group">
                    {/* Micro-chip graphic for credit card style */}
                    <div className="absolute right-6 top-6 w-12 h-9 border border-outline rounded-sm flex flex-col justify-between p-1 bg-yellow-500/20 dark:bg-yellow-500/10 group-hover:border-primary/45 transition-colors">
                      <div className="grid grid-cols-3 gap-0.5 h-full w-full">
                        <div className="border-r border-b border-outline/30" />
                        <div className="border-r border-b border-outline/30" />
                        <div className="border-b border-outline/30" />
                        <div className="border-r border-outline/30" />
                        <div className="border-r border-outline/30" />
                        <div className="bg-yellow-500/40 animate-pulse" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Bio secure icon */}
                      <div className="md:col-span-3 aspect-square border-2 border-outline border-dashed flex flex-col items-center justify-center bg-background/50 p-4 relative group/id">
                        <div className="absolute inset-0 bg-primary/5 scale-y-0 group-hover/id:scale-y-100 transition-transform duration-500 origin-bottom" />
                        <Users className="w-10 h-10 text-primary z-10" />
                        <span className="font-mono text-[8px] font-black text-center mt-2 uppercase tracking-tighter text-muted-foreground z-10">
                          SECURE_ID
                        </span>
                      </div>

                      {/* Right: Lab Credentials info */}
                      <div className="md:col-span-9 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[9px] font-black uppercase bg-primary text-white px-2 py-0.5 border border-outline">
                            NITS LAB MEMBER
                          </span>
                          <span className="font-mono text-[9px] font-black uppercase bg-background border border-outline px-2 py-0.5 text-primary flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            STATUS // ACTIVE
                          </span>
                        </div>
                        
                        <h4 className="font-heading text-lg sm:text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                          {lab.title}
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed font-semibold">
                          {lab.description}
                        </p>

                        <div className="border-t border-outline border-dashed pt-3 mt-2 grid grid-cols-2 gap-4 font-mono text-[9px] font-bold text-muted-foreground">
                          <div>
                            <span>ROLE: </span>
                            <span className="text-on-surface">CORE DEVELOPER</span>
                          </div>
                          <div>
                            <span>CLEARANCE: </span>
                            <span className="text-on-surface">LEVEL 02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBSECTION 3: COMMUNITY NODES (Volunteering) */}
      <div className="border-b-2 border-outline bg-background">
        <div className="p-8 sm:p-16 lg:p-20 border-b-2 border-outline bg-surface-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                COMMUNITY NODES
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase text-muted-foreground border border-outline px-2.5 py-1 bg-background select-none">
              TOTAL INITIATIVES // {volunteers.length}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-16 lg:p-20">
          <div className="max-w-4xl mx-auto w-full space-y-6">
            {volunteers.map((vol) => (
              <motion.div
                key={vol.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={cubicTransition}
              >
                <TiltContainer maxTilt={3}>
                  <div className="brutalist-border bg-background brutalist-shadow p-6 relative overflow-hidden group cursor-default hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,59,48,0.25)] hover:border-primary/40 transition-all duration-150">
                    {/* Neon Red/Crimson side stripe */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

                    <div className="pl-4 space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[9px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">
                          [ VOLUNTEER NODE ACTIVE ]
                        </span>
                        <Heart className="w-5 h-5 text-primary group-hover:scale-125 transition-transform duration-200" fill="currentColor" />
                      </div>

                      <div>
                        <h4 className="font-heading text-lg sm:text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                          {vol.title}
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-on-surface-variant font-semibold mt-1">
                          {vol.description}
                        </p>
                      </div>

                      {'image' in vol && vol.image && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage({ src: vol.image as string, title: vol.title });
                          }}
                          className="relative w-full aspect-[16/9] brutalist-border overflow-hidden bg-neutral-900 cursor-pointer group/thumb mt-2"
                        >
                          <Image
                            src={vol.image as string}
                            alt={vol.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                            sizes="(max-width: 768px) 100vw, 450px"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <span className="font-mono text-[10px] font-black uppercase text-white bg-black/85 px-2.5 py-1 border border-white/30 flex items-center gap-1">
                              <ZoomIn className="w-3 h-3 text-primary" />
                              VIEW CERTIFICATE
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="border-t border-outline border-dashed pt-3 flex items-center justify-between font-mono text-[9px] font-bold text-muted-foreground">
                        <span className="flex items-center gap-1.5 text-primary">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                          NODE TYPE // HUMANITARIAN
                        </span>
                        <span>CODE: #0{vol.id}</span>
                      </div>
                    </div>
                  </div>
                </TiltContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBSECTION 3: TECH LOGISTICS: VISITOR ACCESS PASSES (Events / Office Tours) */}
      <div className="p-8 sm:p-16 lg:p-20 bg-surface-container">
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                TECH LOGISTICS: VISITOR ACCESS
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase text-muted-foreground border border-outline px-2.5 py-1 bg-background">
              SITES CLEARED // {tours.length}
            </span>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground border-l-4 border-primary pl-4 max-w-2xl">
            A logging registry of industrial exposures, operations tracking, and architectural tours at leading tech and quantitative asset management headquarters.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...cubicTransition, delay: idx * 0.05 }}
              className="h-full"
            >
              <TiltContainer className="h-full" maxTilt={3}>
                <div className="relative brutalist-border bg-background brutalist-shadow h-full flex flex-col justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border-color)] hover:border-primary/40 transition-all duration-150 overflow-hidden select-none cursor-default group">
                  
                  {/* Perforation circle notch top and bottom right for ticket separation */}
                  <div className="absolute right-[86px] -top-2.5 w-5 h-5 rounded-full bg-surface-container border-b-2 border-outline z-10" />
                  <div className="absolute right-[86px] -bottom-2.5 w-5 h-5 rounded-full bg-surface-container border-t-2 border-outline z-10" />

                  {/* Main ticket body */}
                  <div className="flex h-full divide-x-2 divide-outline divide-dashed">
                    
                    {/* Left part: Access Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6 pr-8">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5 border border-primary/25">
                            [ ACCESS PERMITTED ]
                          </span>
                          <Building2 className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-heading text-lg sm:text-xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                          {tour.title.replace('Office Tour - ', '')}
                        </h4>
                        <p className="font-body text-xs text-on-surface-variant leading-relaxed font-semibold">
                          {tour.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground border-t border-outline border-dashed pt-3 mt-auto">
                        <div className="flex items-center gap-1.5 font-bold">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>ENTRY CONFIRMED</span>
                        </div>
                        <span>ID: 0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Right part: Scan / Stub */}
                    <div className="w-[96px] p-4 flex flex-col justify-between items-center bg-surface-container/30 relative gap-4">
                      {/* Barcode styling */}
                      <div className="flex flex-col items-center gap-1 w-full h-20 justify-center">
                        <div className="flex gap-0.5 items-stretch h-full w-full justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 dark:invert">
                          <div className="w-[1.5px] bg-black h-full" />
                          <div className="w-[3px] bg-black h-full" />
                          <div className="w-[1px] bg-black h-full" />
                          <div className="w-[5px] bg-black h-full" />
                          <div className="w-[1px] bg-black h-full" />
                          <div className="w-[3px] bg-black h-full" />
                          <div className="w-[4px] bg-black h-full" />
                          <div className="w-[1px] bg-black h-full" />
                          <div className="w-[2.5px] bg-black h-full" />
                          <div className="w-[1px] bg-black h-full" />
                          <div className="w-[5px] bg-black h-full" />
                          <div className="w-[1px] bg-black h-full" />
                        </div>
                        <span className="font-mono text-[8px] font-black text-center uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors mt-1.5">
                          * TKT-{tour.id} *
                        </span>
                      </div>

                      {/* Stamp */}
                      <div className="border border-primary text-primary font-mono text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-[2px] rotate-12 text-center select-none w-fit border-dashed bg-background group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
                        CLEARED
                      </div>
                    </div>

                  </div>

                </div>
              </TiltContainer>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate / Achievement Proof */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex flex-col items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] brutalist-border bg-background p-4 sm:p-6 flex flex-col gap-4 cursor-default brutalist-shadow-large"
            >
              <div className="flex items-center justify-between border-b-2 border-outline pb-3">
                <span className="font-mono text-xs sm:text-sm font-black uppercase text-primary tracking-wider truncate pr-4">
                  [ VERIFIED PROOF // {selectedImage.title} ]
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="brutalist-border p-1.5 hover:bg-primary hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
              <div className="relative w-full h-[65vh] bg-neutral-950/60 brutalist-border flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  priority
                />
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] text-muted-foreground border-t border-outline/30 pt-2">
                <span>CLICK OUTSIDE OR CLOSE BUTTON TO RETURN</span>
                <span className="text-primary font-bold">STATUS: VERIFIED PROOF</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

