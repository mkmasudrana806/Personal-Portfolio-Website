import { ArrowRight, Brain, Compass, ExternalLink, Github } from "lucide-react";
import React from "react";

// project 1 responsibilities array with highlighted colors
const projectOneResponsibilities = [
  ,
  <>
    Designed <span className="text-accent font-medium">RESTful APIs</span> for
    job ingestion, filtering, and retrieval
  </>,
  <>
    Implemented{" "}
    <span className="text-accent font-medium">JWT-based authentication</span>{" "}
    with role-based access control
  </>,
  <>
    Built{" "}
    <span className="text-accent font-medium">background job workers</span>{" "}
    using BullMQ for scraping and processing
  </>,
  <>
    Designed scalable data schemas in{" "}
    <span className="text-accent font-medium">MongoDB</span>
  </>,
  <>
    Centralized{" "}
    <span className="text-accent font-medium">
      validation and error handling
    </span>{" "}
    at API boundaries
  </>,
];

const projectOneTech = [
  "Expres.js",
  "TypeScript",
  "Mongoose",
  "MongoDB",
  "JWT",
  "Zod",
  "Redis",
  "LLM APIs",
  "BullMQ",
];

const projectOneLinks = {
  github:
    "https://github.com/mkmasudrana806/AI-Powered-Job-Searching-Platform-Backend",
  live: "#",
};

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
          {/* ================= PROJECT 1 ================= */}
          <article className="relative">
            {/* Project Header */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                AI-Powered Job Search Platform
              </h3>

              <p className="mt-3 text-foreground/80">
                A high performing backend system that automates resume-to-job
                matching, skill gap analysis, and data processing through
                scalable RESTful APIs and background job pipelines.
              </p>
            </div>

            {/* Backend Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Backend Responsibilities
                </h4>
                <ul className="space-y-2">
                  {projectOneResponsibilities.map((responsiblity, i) => (
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
                  {projectOneTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-foreground/80 border border-accent/40 group-hover:bg-accent/5 transition-all"
                    >
                      {tech}
                    </span>
                  ))}

                  {/* github source link and live link  */}
                  <a
                    href={projectOneLinks.github}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                  <a
                    target="_blank"
                    href={projectOneLinks.live}
                    className="flex items-center gap-2 ps-4 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>

              {/* Architecture Explanation */}
              <div className="rounded-xl border border-border/40 bg-secondary/30 ">
                {/* Architecture Visual */}
                <figure className="mb-10 rounded-2xl border border-border/50 bg-card/40">
                  <div className="h-[260px] flex items-center justify-center text-foreground/40 text-sm">
                    [ Architecture Diagram Placeholder — Client → API → DB →
                    Queue → Worker ]
                  </div>
                </figure>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBackend;
