import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Minh Toàn — Portfolio",
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
