"use client";

import { ArrowRight, FileDown, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import AnimatedCode from "./animatedCode";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center mt-4 rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              <p className="text-sm text-foreground/70 font-medium">
                Open to opportunities
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
                Architecting Logic.{" "}
                <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  Scaling Systems
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed w-full">
                A passionate Node.js focused Backend Developer, with 2 years of
                hands-on experience building backend services using Express.js,
                TypeScript and MongoDB, with a strong focus on API design,
                security, best practices, database modeling, and scalable
                service architecture.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4  ">
              {/* View My Work */}
              <button className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 group cursor-pointer">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Download Resume  */}
              <button className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg border border-white/20 bg-white/5 text-foreground font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95 cursor-pointer">
                <FileDown className="mr-2 h-4 w-4 text-blue-400" />
                Download resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <p className="text-sm text-foreground/60 font-medium">
                Connect with me:
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
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
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
export default Hero;
