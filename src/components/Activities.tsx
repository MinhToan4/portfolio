'use client';


import { portfolioData } from '@/data/portfolio';

export default function Activities() {
    const activities = portfolioData.activities;

    const groups = [
        { key: 'achievement', label: 'Achievements' },
        { key: 'competition', label: 'Competitions' },
        { key: 'organization', label: 'Academic' },
        { key: 'event', label: 'Events' },
        { key: 'volunteer', label: 'Volunteering' },
    ];

    const renderLeftAligned = (activity: { id: string | number, title: string, period?: string, description?: string, institution?: string, organization?: string, highlights?: string[] }, index: number, groupLabel: string) => (
        <article key={activity.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-8 p-8 transition-transform duration-300">
            <div className="col-span-12 md:col-span-8">
                <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block uppercase">
                    0{index + 1} / {groupLabel}
                </span>
                <h2 className="font-headline text-[clamp(1.5rem,3vw,3rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 origin-left leading-[0.9] uppercase group-hover:text-on-surface">
                    <span className="text-on-surface">{activity.title.split(' ').slice(0, Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span> <br/> 
                    <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{activity.title.split(' ').slice(Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span>
                </h2>
                <div className="mt-8 max-w-lg">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {activity.description}
                    </p>
                    {activity.highlights && activity.highlights.length > 0 && (
                        <ul className="space-y-2 mt-4">
                            {activity.highlights.map((h: string, idx: number) => (
                                <li key={idx} className="font-body text-sm text-on-surface-variant flex items-start gap-2">
                                    <span className="text-primary mt-1 text-[10px]">■</span> {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="hidden md:flex col-span-4 items-center justify-end">
                <div className="w-px h-32 bg-outline-variant/30"></div>
                <div className="ml-12 font-label text-[10px] tracking-[0.3em] uppercase text-outline [writing-mode:vertical-lr]">
                    IMPACT
                </div>
            </div>
        </article>
    );

    const renderCenterAligned = (activity: { id: string | number, title: string, period?: string, description?: string, institution?: string, organization?: string, highlights?: string[] }, index: number, groupLabel: string) => (
        <article key={activity.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-8 p-8 transition-transform duration-300 md:w-5/6 mx-auto">
            <div className="col-span-12 md:col-start-3 md:col-span-8 text-center">
                <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block uppercase">
                    0{index + 1} / {groupLabel}
                </span>
                <h2 className="font-headline text-[clamp(1.5rem,3vw,3rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 leading-[0.9] uppercase group-hover:text-on-surface">
                    <span className="text-on-surface">{activity.title.split(' ').slice(0, Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span> <br/> 
                    <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{activity.title.split(' ').slice(Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span>
                </h2>
                <div className="mt-8 max-w-lg mx-auto text-left md:text-center">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {activity.description}
                    </p>
                    {activity.highlights && activity.highlights.length > 0 && (
                        <ul className="space-y-2 mt-4 inline-block text-left">
                            {activity.highlights.map((h: string, idx: number) => (
                                <li key={idx} className="font-body text-sm text-on-surface-variant flex items-start gap-2">
                                    <span className="text-primary mt-1 text-[10px]">■</span> {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </article>
    );

    const renderRightAligned = (activity: { id: string | number, title: string, period?: string, description?: string, institution?: string, organization?: string, highlights?: string[] }, index: number, groupLabel: string) => (
        <article key={activity.id} className="group relative grid grid-cols-12 bg-background brutalist-border brutalist-shadow mb-8 p-8 transition-transform duration-300">
            <div className="hidden md:flex col-span-4 items-center">
                <div className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">
                    {groupLabel}
                </div>
                <div className="ml-8 w-24 h-px bg-primary"></div>
            </div>
            <div className="col-span-12 md:col-span-8 text-left md:text-right flex flex-col items-start md:items-end">
                <span className="font-label text-[10px] tracking-[0.3em] text-tertiary mb-4 block uppercase md:self-end">
                    0{index + 1} / {groupLabel}
                </span>
                <h2 className="font-headline text-[clamp(1.5rem,3vw,3rem)] font-black tracking-tight group-hover:-translate-y-2 transition-transform duration-300 origin-right leading-[0.9] uppercase group-hover:text-on-surface w-full">
                    <span className="text-on-surface">{activity.title.split(' ').slice(0, Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span> <br/> 
                    <span className="italic font-normal text-outline-brutal text-transparent group-hover:text-on-surface">{activity.title.split(' ').slice(Math.ceil(activity.title.split(' ').length / 2)).join(' ')}</span>
                </h2>
                <div className="mt-8 max-w-lg md:ml-auto md:text-right">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {activity.description}
                    </p>
                    {activity.highlights && activity.highlights.length > 0 && (
                        <ul className="space-y-2 mt-4 inline-block text-left md:text-right">
                            {activity.highlights.map((h: string, idx: number) => (
                                <li key={idx} className="font-body text-sm text-on-surface-variant flex items-start md:justify-end gap-2">
                                    <span className="text-primary mt-1 text-[10px]">■</span> {h}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </article>
    );

    return (
        <section id="activities" className="px-8 max-w-screen-2xl mx-auto my-32">
            <div className="mb-32">
                <span className="font-label text-[10px] tracking-[0.3em] uppercase mb-12 block text-tertiary">Extracurriculars</span>
                <h2 className="font-headline text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] font-black tracking-tighter text-on-surface mb-16 max-w-5xl uppercase">
                    Beyond <span className="text-outline-brutal">Syntax</span> <br/>
                    <span className="text-3xl md:text-5xl font-bold italic normal-case tracking-normal text-on-surface-variant">A catalog of leadership, events, and community impact.</span>
                </h2>
            </div>

            <div className="space-y-32">
                {groups.map((group) => {
                    const items = activities.filter(a => a.type === group.key);
                    if (items.length === 0) return null;

                    return (
                        <div key={group.key} className="w-full">
                            <div className="flex items-baseline justify-between border-b-[3px] border-on-surface pb-4 mb-16">
                                <h3 className="font-headline text-3xl md:text-5xl tracking-tighter uppercase font-black text-on-surface">{group.label}</h3>
                                <span className="font-label text-sm tracking-widest uppercase text-outline">[{items.length}]</span>
                            </div>

                            <div className="flex flex-col gap-8">
                                {items.map((activity, i) => {
                                    if (i % 3 === 0) return renderLeftAligned(activity, i, group.label);
                                    if (i % 3 === 1) return renderCenterAligned(activity, i, group.label);
                                    return renderRightAligned(activity, i, group.label);
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
