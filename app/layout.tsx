import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Background from "@/components/background";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masud Rana | Backend Developer",
  description:
    "Portfolio of Masud Rana, a Computer Science student specializing in Node.js backend development, AI-powered application, and problem solving. Exploring the intersection of software engineering and research.",
  generator: "Next.js & Tailwind CSS",
  keywords: [
    "Backend Developer",
    "CSE Student Bangladesh",
    "Node.js",
    "Express.js",
    "AI Job Platform",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased relative`}>
        <Background />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
