import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const AboutMeBackend = () => {
  return (
    <section id="about" className="relative  z-10 mt-16 overflow-hidden ">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About <span className="text-accent">Me</span>
          </h3>
          <div className="h-1 w-20 bg-accent mt-4 rounded-full opacity-50"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          {/* LEFT SIDE: Professional Image Frame */}
          <div className="relative group w-full max-w-[320px]  lg:max-w-none lg:w-1/3">
            <div className="relative z-10 overflow-hidden rounded-2xl aspect-4/5 border border-white/10 hover:grayscale-0 transition-all duration-500 shadow-2xl">
              <Image
                width={100}
                height={100}
                src="/masud-rana-profile-picture.webp"
                alt="Masud Rana"
                className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              {/* Glass Overlay on Image */}
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-colors" />
            </div>

            {/* Decorative Frame Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent rounded-tl-2xl -z-10" />
          </div>

          {/* RIGHT SIDE: Content & Stats */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="bg-white/3 backdrop-blur-xl border border-white/10 p-4 md:p-6 lg:p-8 rounded-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[80px]" />

              <p className="text-xl text-foreground font-medium mb-4">
                Hi, I’m <span className="text-accent">Masud Rana</span>, a{" "}
                <span className="text-accent font-semibold">
                  Computer Science
                </span>{" "}
                student with{" "}
                <span className="text-accent font-semibold">2+ years</span> of
                hands-on backend engineering experience, focused on building
                reliable, secure, and scalable backend systems.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="text-foreground/80 leading-relaxed">
                  My academic journey in Computer Science built a strong
                  foundation in{" "}
                  <span className="text-accent">data structures</span>,{" "}
                  <span className="text-accent">algorithms</span>,{" "}
                  <span className="text-accent">DBMS</span>,{" "}
                  <span className="text-accent">OOPs</span>,{" "}
                  <span className="text-accent">Software Engineering</span>,{" "}
                  <span className="text-accent">operating systems</span>, and{" "}
                  <span className="text-accent">computer networks</span>. These
                  fundamentals directly shape how I approach backend engineering
                  — reasoning about data flow, performance, consistency, and
                  system boundaries instead of just writing code.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  I approach backend development with a systems
                  mindset—prioritizing{" "}
                  <span className="text-accent">clear API contracts</span>,{" "}
                  <span className="text-accent">data integrity</span>,{" "}
                  <span className="text-accent">
                    authentication & authorization
                  </span>
                  , and{" "}
                  <span className="text-accent">fault-tolerant design</span>. I
                  enjoy working close to business logic and databases, designing
                  services that are predictable,{" "}
                  <span className="text-accent">maintainable</span>, and safe to
                  operate in production.
                </p>
              </div>

              {/* Location/Status Bar */}
              <div className="flex items-center gap-4 text-sm mt-4 text-muted-foreground">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-accent" /> Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <GraduationCap className="w-4 h-4 text-accent" /> CSE Student
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4 place-items-center border-t border-border/50">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">6+</p>
                <p className="text-sm text-foreground/60">Projects Built</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">2+</p>
                <p className="text-sm text-foreground/60">
                  Years Hands-on Experience
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">1+</p>
                <p className="text-sm text-foreground/60">Publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeBackend;
