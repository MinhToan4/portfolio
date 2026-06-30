import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "NMT - Portfolio",
  description: "Software developer & student at PTIT. Building thoughtful, elegant digital experiences.",
  keywords: ["portfolio", "developer", "full stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Nguyễn Minh Toàn" }],
  creator: "Nguyễn Minh Toàn",
  icons: {
    icon: '/avatar1.png',
    shortcut: '/avatar1.png',
    apple: '/avatar1.png',
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
