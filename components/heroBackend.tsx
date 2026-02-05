"use client";

import {
  ArrowRight,
  Facebook,
  FileDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import AnimatedCode from "./animatedCode";

const HeroBackend = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center mt-4 rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
                {/* Animated Dot Container */}
                <span className="relative flex h-2 w-2 mr-2">
                  {/* The Ping Ring */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  {/* The Solid Center */}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>

                <p className="text-sm text-foreground/70 font-medium">
                  Open to backend engineering roles
                </p>
              </div>

              {/* Main heading  */}
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
                Designing Backend Systems.{" "}
                <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  Scaling Reliable APIs
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed w-full">
                Backend engineer focused on building secure, scalable, and
                production-ready services. I work close to APIs, data, and
                system boundaries — designing authentication flows, background
                processing, and data models that hold up under real-world usage.
              </p>
              <p className="text-sm text-foreground/50 tracking-wide">
                Express.js <span className="text-accent">·</span> Node.js{" "}
                <span className="text-accent">·</span> TypeScript{" "}
                <span className="text-accent">·</span> MongoDB{" "}
                <span className="text-accent">·</span> REST APIs{" "}
                <span className="text-accent">·</span> BullMQ{" "}
                <span className="text-accent">·</span> JWT{" "}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4  ">
              {/* View My Work */}
              <button className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 group cursor-pointer">
                <Link href={"#projects"}>View Backend Work</Link>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Download Resume  */}
              <a
                href="/Masud_Rana_Backend_Engineer_Resume.pdf"
                download="Masud_Rana_Backend_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg border border-white/20 bg-white/5 text-foreground font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95 cursor-pointer no-underline"
              >
                <FileDown className="mr-2 h-4 w-4 text-blue-400" />
                Download resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <p className="text-sm md:text-lg text-foreground/60 font-medium">
                Find me on:
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    href: "https://github.com/mkmasudrana806",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/masud-rana-eng/",
                  },
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://www.facebook.com/mkmasudrana2",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border/50 bg-secondary/30 text-foreground/70 transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Animated Code */}
          <div className="hidden lg:flex justify-center items-center">
            <AnimatedCode />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBackend;
