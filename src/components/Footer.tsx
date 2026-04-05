'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-highest w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center border-t border-outline-variant mt-32">
      <div className="font-label text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant mb-8 md:mb-0">
         © {year} {personal.name}. ALL RIGHTS RESERVED.
      </div>
      <div className="flex space-x-12">
        {Object.entries(personal.socialLinks).map(([name, url]) => (
            <a 
                key={name}
                className="font-label text-[10px] tracking-widest uppercase font-semibold text-on-surface-variant hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all duration-300" 
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
            </a>
        ))}
      </div>
    </footer>
  );
}
