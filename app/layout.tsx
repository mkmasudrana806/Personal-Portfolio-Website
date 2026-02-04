import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Background from "@/components/background";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masud Rana | Backend Engineer • Node.js",
  description:
    "Building scalable, production-ready APIs with Node.js, TypeScript & BullMQ. Focused on system design, security, and reliable backend architecture.",
  generator: "Next.js & Tailwind CSS",
  openGraph: {
    title: "Masud Rana | Backend Engineer • Node.js",
    description:
      "Building scalable, production-ready APIs with Node.js, TypeScript & BullMQ. Focused on system design, security, and reliable backend architecture.",
    siteName: "Masud Rana Portfolio",
    images: {
      url: "/masud rana profile picture.webp",
    },
    url: "https://masudranasheikh.me",
    locale: "en_US",
    type: "website",
  },

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
