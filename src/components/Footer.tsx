'use client';

import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Activities', href: 'activities' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <footer className="bg-on-surface text-background w-full pt-10 md:pt-8 pb-10 md:pb-6 px-8 mt-16 md:mt-16">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Top Row: Wordmark & Back to top */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="font-headline text-5xl md:text-5xl font-normal tracking-[-0.02em] text-background leading-none">
              NMT<span className="text-background/40">.</span>
            </h2>
            <p className="font-label text-[10px] md:text-[9px] tracking-[0.3em] uppercase text-background/50 font-semibold mt-2 md:mt-1">
              Backend Developer
            </p>
          </div>
          
          <button 
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
             className="w-10 h-10 md:w-8 md:h-8 flex items-center justify-center border border-background/20 text-background/50 hover:text-background hover:bg-background/10 transition-colors font-sans text-sm md:text-xs"
             aria-label="Back to top"
          >
             ↑
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-background/20 my-6 md:my-4"></div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-4 md:gap-y-1">
          {footerLinks.map((link) => (
            <button 
               key={link.name}
               onClick={() => scrollToSection(link.href)} 
               className="font-label text-[11px] md:text-[10px] tracking-[0.15em] font-semibold uppercase text-background/60 hover:text-background transition-colors text-left w-full md:w-auto py-1 md:py-0"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Bottom Metadata */}
        <div className="mt-10 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-2">
            <p className="font-label text-[10px] md:text-[9px] font-medium tracking-[0.05em] text-background/40">
               © {year} {personal.name}. All rights reserved.
            </p>
            <p className="font-headline italic text-xs md:text-[10px] text-background/40">
               {personal.location || 'Ha Dong, Hanoi, Vietnam'}
            </p>
        </div>
        
      </div>
    </footer>
  );
}
