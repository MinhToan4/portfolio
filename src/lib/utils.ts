import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string, offset = 120) {
  const element = document.getElementById(sectionId);

  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });

  if (window.history?.replaceState) {
    const nextUrl =
      sectionId === 'hero'
        ? `${window.location.pathname}${window.location.search}`
        : `#${sectionId}`;

    window.history.replaceState(null, '', nextUrl);
  }

  return true;
}
