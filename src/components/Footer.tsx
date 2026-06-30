'use client';

import { portfolioData } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Academic', href: 'academic-results' },
    { name: 'Activities', href: 'activities' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-200 w-full border-t-2 border-outline py-12 sm:py-16 select-none transition-colors duration-200">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-12 space-y-12">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 border-b border-white/20 pb-8">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white">
              NMT<span className="text-primary font-mono">.</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mt-2">
              {"[ "}{personal.title}{" // PTIT HONORS ]"}
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 border border-white/30 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-150 flex items-center justify-center brutalist-shadow bg-neutral-900 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Middle Section: Navigation & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          {/* Quick Links */}
          <nav className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href, 100)}
                className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-450 hover:text-white cursor-pointer hover:underline underline-offset-4"
              >
                {link.name} {" // "}
              </button>
            ))}
          </nav>

          {/* Coordinate Details */}
          <div className="md:col-span-4 md:text-right font-mono text-xs text-neutral-450 space-y-1">
            <p>[ BASE: {personal.location.toUpperCase()} ]</p>
            <p>[ YEAR: {year} ]</p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          <p>© {year} {personal.name}. All systems functional.</p>
          <p>Handcrafted in Hanoi, Vietnam.</p>
        </div>

      </div>
    </footer>
  );
}
