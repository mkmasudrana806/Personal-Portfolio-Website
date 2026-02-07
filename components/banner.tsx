"use client";

import { Mail, ExternalLink, Linkedin } from "lucide-react";

export function LinkedInBanner() {
  return (
    <section className="relative w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-border/50 shadow-2xl">
          {/* Accent background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl -ml-40 -mb-40"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(0deg,transparent_24%,rgba(100,100,100,0.05)_25%,rgba(100,100,100,0.05)_26%,transparent_27%,transparent_74%,rgba(100,100,100,0.05)_75%,rgba(100,100,100,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(100,100,100,0.05)_25%,rgba(100,100,100,0.05)_26%,transparent_27%,transparent_74%,rgba(100,100,100,0.05)_75%,rgba(100,100,100,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 p-8 md:p-12">
            {/* Left side - Profile Photo placeholder */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 flex-shrink-0">
                {/* Decorative frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-foreground/50">
                        Profile Photo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accent corner elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 border-2 border-accent rounded-lg opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 border-2 border-accent rounded-lg opacity-60"></div>
              </div>

              {/* Online status indicator */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                <span className="text-sm font-medium text-foreground/70">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-between space-y-8 lg:py-4">
              {/* Header */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    Masud Rana
                  </h1>
                  <p className="text-xl md:text-2xl text-accent font-semibold">
                    Backend Engineer | CSE Student | Researcher
                  </p>
                </div>

                {/* Bio */}
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  Passionate backend engineer crafting scalable systems with
                  modern technologies. CSE student exploring the intersection of
                  software engineering and research, building robust solutions
                  that power tomorrow's applications.
                </p>
              </div>

              {/* Inspirational Quote */}
              <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
                <p className="text-lg italic text-foreground/80 mb-2">
                  "The best way to predict the future is to invent it."
                </p>
                <p className="text-sm text-foreground/60 font-medium">
                  — Alan Kay
                </p>
              </div>

              {/* Contact Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20 mt-0.5">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground/60 font-semibold uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:masud.wg@gmail.com"
                      className="text-foreground hover:text-accent transition-colors break-all"
                    >
                      masud.wg@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20 mt-0.5">
                    <ExternalLink className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground/60 font-semibold uppercase tracking-wide">
                      Website
                    </p>
                    <a
                      href="https://masudranasheikh.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors break-all"
                    >
                      masudranasheikh.me
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Linkedin className="w-5 h-5" />
                  View on LinkedIn
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border/50 bg-secondary/30 text-foreground font-semibold transition-colors hover:bg-secondary/50 active:scale-95">
                  Get my resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills preview below card */}
        <div className="mt-12 space-y-4">
          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">
            Technical Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Backend Development",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "System Design",
              "API Architecture",
              "DevOps",
              "Research",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-foreground/80 text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
