import { ArrowRight, Brain, Compass, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React, { ReactElement } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  caption: string;
  responsibilities: React.ReactElement[];
  technologies: string[];
  github?: string;
  live?: string;
  type: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Recruiting & Job Searching",
    description:
      "AI-Powered  job recruting, job ranking, and job searching platforlm. Architected a high-concurrency backend system using Node.js and TypeScript to automate recruitment workflows through AI-driven intelligence. The platform features a distributed processing engine that performs deep-dive Skills Gap Analysis between candidate resumes and job descriptions to generate structured, context-aware interview guides.",
    image: "/ai-job-based-job-recruiting-diagram.webp",
    caption:
      "A high level workflow diagram of embedding when a new job is posted in our AI-powered recruiting platform.",
    responsibilities: [
      <>
        Designed <span className="text-accent font-medium">RESTful APIs</span>{" "}
        for job ingestion, filtering, and retrieval
      </>,
      <>
        Implemented{" "}
        <span className="text-accent font-medium">
          JWT-based authentication
        </span>{" "}
        with role-based access control
      </>,
      <>
        Centralized{" "}
        <span className="text-accent font-medium">
          validation and error handling
        </span>{" "}
        at API boundaries
      </>,
      <>
        Implemented a{" "}
        <span className="text-accent font-medium">Global Rate Limiter</span>{" "}
        using Bottleneck and Redis to manage external AI API quotas across
        multiple workers.
      </>,
      <>
        Integrated <span className="text-accent font-medium">Zod schemas</span>{" "}
        with LLM outputs to ensure strictly typed JSON responses
      </>,
      <>
        Implemented Distributed{" "}
        <span className="text-accent font-medium">
          {" "}
          background Job Processing
        </span>{" "}
        by configuring BullMQ with custom backoff strategies and lock durations
        for long-running AI tasks.
      </>,
    ],
    technologies: [
      "Expres.js",
      "TypeScript",
      "Mongoose",
      "MongoDB",
      "JWT",
      "Zod",
      "Redis",
      "LLM APIs",
      "BullMQ",
      "Bottleneck",
    ],
    github:
      "https://github.com/mkmasudrana806/AI-Powered-Job-Searching-Platform-Backend",
    live: "#projects",
    type: "Backend",
  },
  {
    id: 2,
    title: "Travel Tips & Destination Guides",
    description:
      "A modular backend system for a travel platform supporting user-generated content, premium features, and secure payment workflows. Designed with clear service boundaries, role-based access control, and transactional updates to ensure consistent user state after payment verification.",
    image: "/AmarPay-payment-system-diagram.webp",
    caption:
      "Premium subscription payment lifecycle using external gateway with transactional user upgrade and payment verification",
    responsibilities: [
      <>
        Implemented{" "}
        <span className="text-accent font-medium">
          JWT-based authentication & RBAC
        </span>{" "}
        for protected user
      </>,
      <>
        Designed structured{" "}
        <span className="text-accent font-medium">RESTful APIs</span> for travel
        content and user interactions
      </>,
      <>
        Integrated{" "}
        <span className="text-accent font-medium">
          payment gateway verification
        </span>{" "}
        before upgrading user premium access
      </>,
      <>
        {" "}
        Ensured{" "}
        <span className="text-accent font-medium">
          Transaction Reliability
        </span>{" "}
        using <span className="text-accent">rollback strategies</span> for
        critical payment processing flows{" "}
      </>,
      <>
        Integrated Supporting Services including{" "}
        <span className="text-accent font-medium">
          Nodemailer and Cloudinary
        </span>{" "}
        for media and notifications
      </>,
    ],
    technologies: [
      "Express.js",
      "TypeScript",
      "Mongoose",
      "JWT",
      "Zod",
      "Nodemailer",
      "Cloudinary",
      "Payment Gateway",
      "MongoDB Transactions",
    ],
    github:
      "https://github.com/mkmasudrana806/Travel-Tips-And-Destination-Guides-Backend",
    live: "#projects",
    type: "Backend",
  },
];

const ProjectsBackend = () => {
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Projects That{" "}
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Stand Out
            </span>
            <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {/* projects card */}
          {projects.length &&
            projects.map((project) => (
              <article key={project.id} className="relative">
                {/* Project Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-foreground/80">
                    {project.description}
                  </p>
                </div>

                {/* Backend Responsibilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <h4 className="text-lg font-medium text-foreground mb-4">
                      Backend Responsibilities
                    </h4>
                    <ul className="space-y-2 md:space-y-4">
                      {project.responsibilities.map((responsiblity, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2  text-foreground/70"
                        >
                          <ArrowRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span>{responsiblity}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-foreground/80 border border-accent/40 group-hover:bg-accent/5 transition-all"
                        >
                          {tech}
                        </span>
                      ))}

                      {/* github source link and live link  */}
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                      <a
                        target="_blank"
                        href={project.live}
                        className="flex items-center gap-2 ps-4 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Architecture Explanation */}
                  <div className="order-1 md:order-2">
                    {/* Architecture Visual */}
                    <figure>
                      <Image
                        width={1250}
                        height={815}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={project.image}
                        alt="AI powered job recruiting system with background job."
                      />
                      <figcaption className="mt-2  text-center">
                        Figure: {project.caption}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </article>
            ))}
        </div>

        <p className="text-chart-2  italic">
          Fore more projects, please visit my{" "}
          <a
            href="https://github.com/mkmasudrana806"
            target="_blank"
            className="text-accent underline"
          >
            GitHub
          </a>{" "}
          account
        </p>
      </div>
    </section>
  );
};

export default ProjectsBackend;
