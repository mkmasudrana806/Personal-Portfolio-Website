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
  metadataBase: new URL("https://masudranasheikh.me"),
  openGraph: {
    title: "Masud Rana | Backend Engineer • Node.js",
    description:
      "Building scalable, production-ready APIs with Node.js, TypeScript & BullMQ. Focused on system design, security, and reliable backend architecture.",
    siteName: "Masud Rana Portfolio",

    images: [
      {
        width: 650,
        height: 450,
        url: "/masud-rana-profile-picture.webp",
        alt: "Masud Rana | Backend Engineer",
      },
    ],
    url: "https://masudranasheikh.me",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Masud Rana | Backend Engineer • Node.js",
    description:
      "Building scalable backend systems with Node.js and TypeScript.",
    images: ["/masud-rana-profile-picture.webp"],
  },

  keywords: [
    "Backend Engineer",
    "Node.js Developer",
    "TypeScript Developer",
    "CSE Student Bangladesh",
    "Express.js",
    "System Design",
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
