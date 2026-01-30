import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nguyễn Minh Toàn Portfolio",
  description: "Portfolio website của một sinh viên PTIT nhiệt huyết.",
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
    locale: "vi_VN",
    url: "https://minhtoansbo.com",
    title: "Nguyễn Minh Toàn",
    description: "Portfolio website của một sinh viên PTIT nhiệt huyết.",
    siteName: "Nguyễn Minh Toàn Portfolio",
    images: [
      {
        url: '/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Nguyễn Minh Toàn Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Minh Toàn",
    description: "Portfolio website của một sinh viên PTIT nhiệt huyết.",
    creator: "@minhtoansbo",
    images: ['/avatar.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
