'use client';


import { portfolioData } from '@/data/portfolio';

export default function AcademicResults() {
  const { academicResults } = portfolioData;

  const allSubjects = [...academicResults.generalSubjects, ...academicResults.programmingSubjects];
  const avgGrade = (allSubjects.reduce((acc, s) => acc + s.numericGrade, 0) / allSubjects.length).toFixed(1);

  return (
    <section id="academic-results" className="px-5 md:px-8 max-w-screen-2xl mx-auto my-32">
        <div className="mb-32 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
                <span className="font-label text-[10px] tracking-[0.3em] uppercase mb-12 block text-tertiary">Metrics</span>
                <h2 className="font-headline text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] font-black tracking-tighter text-on-surface mb-16 max-w-5xl uppercase">
                    Academic <span className="text-outline-brutal">Performance</span> <br/>
                    <span className="text-3xl md:text-5xl font-bold italic normal-case tracking-normal text-on-surface-variant">A record of rigorous inquiry.</span>
                </h2>
            </div>
            <div className="col-span-12 md:col-start-10 md:col-span-3 self-end md:-mb-6">
                 <p className="font-headline italic text-7xl md:text-8xl text-primary text-right md:-mr-4">{avgGrade}</p>
                 <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline text-right">Aggregate Score</p>
            </div>
        </div>

        <div className="bg-background brutalist-border brutalist-shadow mb-32 p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
                 <h4 className="font-headline text-3xl md:text-4xl tracking-tighter uppercase font-black text-on-surface mb-8">General <span className="text-outline-brutal text-transparent">Subjects</span></h4>
                 <div className="space-y-0 border-t-[3px] border-on-surface pt-6">
                      {academicResults.generalSubjects.map((subject, i) => (
                           <div key={i} className="flex justify-between items-baseline border-b-2 border-on-surface py-4 hover:bg-on-surface hover:text-background transition-colors -mx-4 px-4 cursor-default">
                                <span className="font-body text-sm font-medium">{subject.name}</span>
                                <div className="flex items-baseline gap-4">
                                     <span className="font-headline italic text-xl">{subject.numericGrade}</span>
                                     <span className="font-label text-[10px] tracking-widest text-secondary w-8 text-right font-bold">{subject.letterGrade}</span>
                                </div>
                           </div>
                      ))}
                 </div>
            </div>

            <div>
                 <h4 className="font-headline text-3xl md:text-4xl tracking-tighter uppercase font-black text-on-surface mb-8">Programming <span className="text-outline-brutal text-transparent">Subjects</span></h4>
                 <div className="space-y-0 border-t-[3px] border-on-surface pt-6">
                      {academicResults.programmingSubjects.map((subject, i) => (
                           <div key={i} className="flex justify-between items-baseline border-b-2 border-on-surface py-4 hover:bg-on-surface hover:text-background transition-colors -mx-4 px-4 cursor-default">
                                <span className="font-body text-sm font-medium">{subject.name}</span>
                                <div className="flex items-baseline gap-4">
                                     <span className="font-headline italic text-xl">{subject.numericGrade}</span>
                                     <span className="font-label text-[10px] tracking-widest text-secondary w-8 text-right font-bold">{subject.letterGrade}</span>
                                </div>
                           </div>
                      ))}
                 </div>
            </div>
        </div>
    </section>
  );
}
