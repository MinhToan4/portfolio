import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#bcc3ff",
        "on-tertiary-fixed-variant": "#900e00",
        "on-secondary": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "primary-fixed": "#dfe0ff",
        "on-secondary-container": "#202e8b",
        "on-surface": "#1c1b1b",
        "secondary-container": "#8e9cfd",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#ffbeb2",
        "on-primary-fixed": "#000d60",
        "surface-variant": "#e5e2e1",
        "tertiary-container": "#ae1501",
        "on-error-container": "#93000a",
        "secondary-fixed": "#dfe0ff",
        "tertiary-fixed": "#ffdad4",
        "primary-fixed-dim": "#bcc3ff",
        "error-container": "#ffdad6",
        "surface-tint": "#1f41ff",
        "inverse-surface": "#313030",
        "surface": "#fcf9f8",
        "surface-dim": "#dcd9d9",
        "surface-container": "#f0eded",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed": "#3f0300",
        "error": "#ba1a1a",
        "background": "#fcf9f8",
        "inverse-primary": "#bcc3ff",
        "on-background": "#1c1b1b",
        "surface-container-highest": "#e5e2e1",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb4a6",
        "primary-container": "#0033ff",
        "on-surface-variant": "#444657",
        "on-error": "#ffffff",
        "outline": "#747689",
        "on-primary-fixed-variant": "#0029d3",
        "on-secondary-fixed": "#000d60",
        "surface-container-high": "#eae7e7",
        "inverse-on-surface": "#f3f0ef",
        "primary": "#0024c1",
        "tertiary": "#830c00",
        "on-primary-container": "#c5caff",
        "on-secondary-fixed-variant": "#2f3d98",
        "secondary": "#4856b2",
        "outline-variant": "#c4c5da",
        "surface-bright": "#fcf9f8"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)"],
        body: ["var(--font-inter)"],
        label: ["var(--font-inter)"]
      }
    },
  },
  plugins: [],
};

export default config;
