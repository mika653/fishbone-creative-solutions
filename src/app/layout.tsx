import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fishbone Creative Solutions",
  description:
    "Fishbone Creative Solutions is a full-service creative agency specializing in website development, social media management, graphic design, AI integration, and workflow automation. We help businesses grow with bold digital strategies.",
  keywords: [
    "creative agency",
    "website development",
    "social media management",
    "graphic design",
    "AI integration",
    "workflow automation",
    "digital marketing",
  ],
  authors: [{ name: "Fishbone Creative Solutions" }],
  openGraph: {
    title: "Fishbone Creative Solutions",
    description:
      "Bold digital strategies for forward-thinking businesses. Website development, social media, design, AI, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
