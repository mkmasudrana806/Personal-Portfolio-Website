import {
  Briefcase,
  Microscope,
  Calendar,
  ArrowRight,
  Search,
  Brain,
  Globe,
} from "lucide-react";

const experiences = [
  {
    title: "AI Powered Recruiting and Job Search",
    organization: "Personal Project",
    period: "Dec 2025 — Present",
    description:
      "Architecting an AI-powered Recruiting and Job Search platform using Express.js, BullMQ (Worker & Queue) and MongoDB. Integrating Gemini LLM as reasoning model for automated resume-job matching, salary prediction, and skills gap analysis etc.",
    highlights: [
      "Implemented rate-limiting using Bottleneck for API stability.",
      "Developed background worker & Queue management to make free event loop.",
      "Role based access control (RBAC) for HR and company",
      "Developed vector based similarity matching and LLM as reasong model",
    ],
    icon: <Brain className="w-5 h-5" />,
    color: "text-red-400",
    tech: ["JavaScript", "Node.js", "TypeScript", "Express.js", "MongoDB"],
    experienceType: "Backend",
  },
  {
    title: "Travel Tips & Destination Guides",
    organization: "Personal Project",
    period: "Sep 2024 —  Oct 2024",
    description:
      "A practical social blogging platform designed for travel enthusiasts to share itineraries, tips, and destination guides.",
    highlights: [
      "Developed a responsive and dynamic user interface using Next.js and Tailwind CSS, featuring seamless navigation and state management via Redux Toolkit.",
      "Integrated MongoDB with Mongoose for complex data modeling, including relational links between user profiles, followers, following, and community comments.",
      "Implemented secure JWT-based authentication and protected routes to manage subscription and personal travel dashboards.",
      "Deployment of frontend and backend to vercel.",
    ],
    icon: <Globe className="w-5 h-5" />,
    color: "text-cyan-400",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
    ],
    experienceType: "MERN Stack",
  },
  {
    title: "IT Officer",
    organization: "Yameen Trading",
    period: "Sep 2025 — Nov 2025",
    description:
      "Led technical operations and infrastructure management, focusing on brand identity through modern web architecture and cross-functional developer collaboration.",
    highlights: [
      "Managed Namecheap DNS configurations and hosting.",
      "Contracting and overseeing external developers to deliver specialized feature sets.",
      "Resolved critical legacy bugs and performance bottlenecks within the core WordPress ecosystem.",
    ],
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-blue-400",
    tech: ["Next.js", "Reactjs", "Shadcn", "WordPress", "Vercel", "Namecheap"],
    experienceType: "Full-Time",
  },
  {
    title: "Software Quality Assurance",
    organization: "QA Harbor Limited",
    period: "Jul 2025 — Sep 2025",
    description:
      "Executed a comprehensive SQA lifecycle during an academic internship, focusing on both manual and automated testing.",
    highlights: [
      "Designed and documented structured test cases, ensuring 100% coverage of functional requirements and edge cases.",
      "Performed end-to-end automated testing using Playwright to identify software stability.",
    ],
    icon: <Search className="w-5 h-5" />,
    color: "text-orange-400",
    tech: [
      "Playwright",
      "Postman",
      "API Testing",
      "Manual Testing",
      "Test Case Design",
    ],
    experienceType: "Internship",
  },
  {
    title: "Attention-Enhanced Bangladeshi Vehicle Plate Detection",
    organization: "Academic Research Paper",
    period: "Feb 2025 — Oct 2025",
    description:
      "Developed a robust end-to-end framework for detecting and recognizing Bangladeshi license plates under diverse environmental conditions, utilizing custom-enhanced deep learning architectures.",
    highlights: [
      "Modified the YOLOv9 object detection architecture with an integrated Attention Mechanism to improve feature extraction in low-light and high-noise environments.",
      "Optimized character recognition by combining EasyOCR with a specialized SSCS (Sequence Scattered Character Search).",
      "Conducted extensive data visualization and performance analysis using Matplotlib to validate model precision and recall metrics.",
      "Designed complex system architecture diagrams and flowcharts using Lucidchart to illustrate the neural network layers and recognition pipeline.",
    ],
    icon: <Microscope className="w-5 h-5" />,
    color: "text-purple-400",
    tech: [
      "YOLOv9",
      "EasyOCR",
      "SSCS Algorithm",
      "Python",
      "Matplotlib",
      "LaTeX",
      "Lucidchart",
    ],
    experienceType: "Publication",
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="relative z-10 px-4 mt-16">
      <div className="container relative z-10 mx-auto md:px-6 ">
        {/* Header */}
        <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
          <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
          <p className="text-sm text-foreground/70 font-medium">
            Strategic Growth
          </p>
        </div>
        <div className="mb-16 mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Hands-on{" "}
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Experiences
            </span>
            <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
          </h2>

          <p className="text-lg mt-4 md:mt-6 text-foreground/60 max-w-3xl">
            From internships to full-time roles and active research, here's my
            professional journey.
          </p>
        </div>

        {/* Timeline Layout */}
        {/* Added 'md:before' to show the line only on medium screens and up */}
        <div className="space-y-12 relative md:before:absolute md:before:inset-0 md:before:left-8 md:before:w-px md:before:bg-white/5">
          {experiences.map((exp, idx) => (
            /* Changed pl-20 to pl-0 for small screens, md:pl-20 for larger */
            <div key={idx} className="relative pl-0 md:pl-20 group">
              {/* Icon / Marker: Added 'hidden md:flex' to hide on mobile */}
              <div
                className={`hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-[#0d1117] border border-white/10 items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(var(--accent),0.1)] ${exp.color}`}
              >
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="backdrop-blur-xl border border-white/5 p-4 md:p-8 lg:p-8 rounded-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h4>
                    <div className="flex gap-x-2 items-center">
                      <p className="text-accent text-sm font-medium">
                        {exp.organization}
                      </p>
                      {exp.experienceType && (
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/30">
                          {exp.experienceType}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold mt-2 text-foreground/80">
                    Key Achievements:
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <ArrowRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-foreground/80 border border-accent/40 group-hover:bg-accent/5 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
