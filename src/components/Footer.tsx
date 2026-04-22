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
    <footer className="bg-on-surface text-background w-full pt-6 sm:pt-8 md:pt-10 pb-6 md:pb-6 px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-16">
      <div className="max-w-screen-2xl mx-auto">

        {/* Top Row: Wordmark & Back to top */}
        <div className="flex justify-between items-end gap-4">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.02em] text-background leading-none">
              NMT<span className="text-background/40">.</span>
            </h2>
            <p className="font-label text-[9px] sm:text-[10px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-background/50 font-semibold mt-1 md:mt-2">
              Backend Developer
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center border border-background/20 text-background/50 hover:text-background hover:bg-background/10 transition-colors font-sans text-xs md:text-xs flex-shrink-0"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-background/20 my-4 md:my-4"></div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-1">
          {footerLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-label text-[10px] sm:text-[10px] md:text-[10px] tracking-[0.1em] md:tracking-[0.15em] font-semibold uppercase text-background/60 hover:text-background transition-colors text-left w-full sm:w-auto py-1 md:py-0 whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Bottom Metadata */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 md:gap-2">
          <p className="font-label text-[9px] sm:text-[9px] md:text-[9px] font-medium tracking-[0.02em] md:tracking-[0.05em] text-background/40 break-words">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-headline italic text-[9px] sm:text-xs md:text-[10px] text-background/40 flex-shrink-0">
            {personal.location || 'Ha Dong, Hanoi, Vietnam'}
          </p>
        </div>

      </div>
    </footer>
  );
}
