import type { Metadata } from "next";
import { Inter, Instrument_Serif, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "NMT - Portfolio",
  description: "Software developer & student at PTIT. Building thoughtful, elegant digital experiences.",
  keywords: ["portfolio", "developer", "full stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Nguyễn Minh Toàn" }],
  creator: "Nguyễn Minh Toàn",
  icons: {
    icon: '/avatar.jpg',
    shortcut: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minhtoansbo.com",
    title: "Nguyễn Minh Toàn",
    description: "Software developer & student at PTIT.",
    siteName: "Nguyễn Minh Toàn Portfolio",
    images: [{ url: '/avatar1.png', width: 1200, height: 630, alt: 'Nguyễn Minh Toàn' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${dancingScript.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
