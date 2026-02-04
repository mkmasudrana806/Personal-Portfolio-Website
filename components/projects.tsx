"use client";

import {
  ArrowRight,
  Github,
  ExternalLink,
  Terminal,
  ArrowUpRight,
  Brain,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  icon: React.ReactElement;
  type: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Searching Platform",
    description:
      "A backend-focused full-stack system that automates resume-to-job matching, skill analysis, and data processing through scalable RESTful APIs and background job pipelines.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    github:
      "https://github.com/mkmasudrana806/AI-Powered-Job-Searching-Platform-Backend",
    live: "#",
    icon: <Brain className="w-5 h-5" />,
    type: "Backend System",
  },

  {
    id: 2,
    title: "Travel Tips & Destination Guides",
    description:
      "A full-stack content-driven web application for travel destinations, featuring structured backend APIs, optimized data delivery, and seamless frontend integration.",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&h=400&fit=crop",
    technologies: [
      "Next.js",
      "React",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "RTK Query",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/mkmasudrana806/Travel-Tips-And-Destination-Guides-Backend",
    live: "https://travel-tips-and-destination-guides-client.vercel.app/",
    icon: <Compass className="w-5 h-5" />,
    type: "Full Stack Web App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full mt-16 md:mt-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            <p className="text-sm text-foreground/70 font-medium">
              Featured Work
            </p>
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Projects That{" "}
              <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Stand Out
              </span>
              <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
            </h2>
            <button className="md:inline-flex hidden   items-center justify-center px-4 py-1.5 rounded-lg border border-white/20 bg-white/5 text-foreground font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95 cursor-pointer">
              <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
              View More Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl border border-border/50 bg-card/50 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  width={100}
                  height={100}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 lg:p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 ">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {/* Type Badge */}
                  <div className="top-6 right-6 text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                    {project.type}
                  </div>
                </div>

                <p className="text-sm text-foreground/60 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[11px] font-mono bg-slate-800/50 text-slate-300 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between gap-4">
                  <div className="flex gap-4">
                    <a
                      href={project.github ?? "#"}
                      className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                    <a
                      href={project.live ?? "#"}
                      className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-accent/0 via-accent/0 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <button className="inline-flex  md:hidden mt-6 items-center justify-center px-4 py-1.5 rounded-lg border border-white/20 bg-white/5 text-foreground font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95 cursor-pointer">
          <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
          View More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
