import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
