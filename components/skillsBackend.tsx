import {
  Database,
  Microscope,
  Cpu,
  Terminal,
  Globe,
  Layers,
  Lock,
  DatabaseBackup,
  Check,
} from "lucide-react";

const skillCategories = [
  {
    title: "API & Security",
    icon: <Lock className="w-4 h-4" />,
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JWT",
      "RBAC",
      "Zod",
      "bcrypt",
      "Bottleneck",
    ],
  },
  {
    title: "Data & Async Processing",
    icon: <Database className="w-4 h-4" />,
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "VectorDB",
      "Indexes",
      "BullMQ",
      "Queues",
      "Workers",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Docker",
      "DNS Setup",
    ],
  },
];

// Asynchronous & Background Processing
const asynAndBackgroundJobs = [
  <>
    <span className="text-accent">Background job</span> processing using BullMQ.
  </>,
  <>
    <span className="text-accent">Decoupling</span> long-running tasks from
    request lifecycles
  </>,
  <>
    Retry strategies and <span className="text-accent">Fault Tolerance</span>
  </>,
  <>
    Designing <span className="text-accent">event-driven</span> flows for better
    scalability
  </>,
];

// data persistence
const dataPersistence = [
  ,
  <>
    Schema design and data modeling using{" "}
    <span className="text-accent font-medium">MongoDB</span> and{" "}
    <span className="text-accent font-medium">PostgreSQL</span>
  </>,
  <>
    Indexing strategies for{" "}
    <span className="text-accent font-medium">query performance</span>
  </>,
  <>
    Handling <span className="text-accent">relational</span> and document-based
    data
    <span className="text-accent"> trade-offs </span>
  </>,
  <>
    Designing <span className="text-accent">data access layers</span> with clear
    separation of concerns
  </>,
];

// authentication and security
const authAndSecurity = [
  ,
  <>
    <span className="text-accent font-medium">JWT-based authentication</span>{" "}
    with access & refresh token strategies
  </>,
  <>
    Implementing role-based access control{" "}
    <span className="text-accent font-medium">(RBAC)</span>
  </>,
  <>
    <span className="text-accent">Secure sensitive data</span> by hashing
  </>,
  <>
    Protecting sensitive routes with{" "}
    <span className="text-accent">middleware</span> - level authorization
  </>,
];

// api and services
const apiAndServices = [
  ,
  <>
    Designing <span className="text-accent font-medium">RESTful APIs</span> with
    clear contracts and predictable behavior
  </>,
  <>
    <span className="text-accent">Input validation</span> using Zod at system
    boundaries
  </>,
  <>
    Structured <span className="text-accent font-medium">error handling</span>{" "}
    and consistent response formats
  </>,
  <>
    <span className="text-accent">API versioning</span> and backward-compatible
    changes
  </>,
];

const SkillsBackend = () => {
  return (
    <section id="skills" className="relative z-10 mt-16 px-4 ">
      <div className="container relative z-10 mx-auto  md:px-6">
        {/* Section Header */}
        <div className="space-y-4 ">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            <p className="text-sm text-foreground/70 font-medium">
              Competencies
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Backend{" "}
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Capabilities
            </span>
            <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
          </h2>
        </div>
        <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
          My backend skillset is centered around{" "}
          <span className="text-accent font-medium">system design</span>,{" "}
          <span className="text-accent font-medium">data integrity</span>, and{" "}
          <span className="text-accent font-medium">reliable service</span>{" "}
          execution.
        </p>

        {/* Technical skills set */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-20 gap-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Category Title with Bottom Border and Space */}
              <div className="flex items-center gap-2 pb-1 mb-3 border-b border-white/10">
                <span className="text-accent">{category.icon}</span>
                <h4 className="text-lg font-semibold uppercase tracking-wider text-foreground">
                  {category.title}
                </h4>
              </div>

              {/* Skills pill buttons */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-sm border border-accent/30 text-foreground/70 rounded-full shadow-[0_0_10px_rgba(var(--accent),0.05)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilites checklist  */}
        <h3 className="mt-8 text-xl font-semibold text-foreground mb-4">
          What I Handle at the Backend Layer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* API & Service Design */}
          <div className="rounded-xl border border-border/50 bg-card/40 p-4 md:p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              API & Service Design
            </h3>

            <ul className="space-y-2 text-foreground/65 leading-relaxed">
              {apiAndServices.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-chart-2/70">
                    <Check
                      className="w-3 h-3 text-chart-2/70"
                      strokeWidth={3}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Authentication & Security */}
          <div className="rounded-xl border border-border/50 bg-card/40 p-4 md:p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Authentication & Security
            </h3>

            <ul className="space-y-2 text-foreground/65 leading-relaxed">
              {authAndSecurity.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-chart-2/70">
                    <Check
                      className="w-3 h-3 text-chart-2/70"
                      strokeWidth={3}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Persistence */}
          <div className="rounded-xl border border-border/50 bg-card/40 p-4 md:p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Data & Persistence
            </h3>

            <ul className="space-y-2 text-foreground/65 leading-relaxed">
              {dataPersistence.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-chart-2/70">
                    <Check
                      className="w-3 h-3 text-chart-2/70"
                      strokeWidth={3}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Asynchronous & Background Processing */}
          <div className="rounded-xl border border-border/50 bg-card/40 p-4 md:p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Asynchronous & Background Processing
            </h3>
            <ul className="space-y-2 text-foreground/65 leading-relaxed">
              {asynAndBackgroundJobs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-chart-2/70">
                    <Check
                      className="w-3 h-3 text-chart-2/70"
                      strokeWidth={3}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBackend;
