import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="relative  z-10 mt-16  px-4 overflow-hidden ">
      <div className="mx-auto  md:px-6">
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
                Hi! I am <span className="text-accent">Masud Rana</span>, a{" "}
                <span className="text-accent font-semibold">CSE</span> student
                and passionate{" "}
                <span className="text-accent font-semibold">
                  backend engineer
                </span>{" "}
                dedicated to building modular, secure, and scalable systems.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="text-foreground/80 leading-relaxed">
                  My journey combines academic rigor with hands-on professional
                  experience, focusing on modern{" "}
                  <span className="text-accent">backend</span> technologies,
                  database <span className="text-accent">optimization</span>,{" "}
                  <span className="text-accent">security</span> and{" "}
                  <span className="text-accent">system architectue</span>. I'm
                  driven by the challenge of solving{" "}
                  <span className="text-accent">complex problems</span>. My
                  current major project is an{" "}
                  <span className="text-accent">AI-Powered Recruiting</span>{" "}
                  Platform utilizing <span className="text-accent">LLM</span> as
                  reasoning model. Beyound backend, also i have hands-on 1.5+
                  years of{" "}
                  <span className="text-accent">frontend development</span>{" "}
                  experience with React.js, Next.js, tailwind css, and Redux.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Beyond development, I am deeply involved in learning{" "}
                  <span className="text-accent">system design</span>,{" "}
                  <span className="text-accent">cloud services </span> like AWS.
                  I am also continously research on{" "}
                  <span className="text-accent"> machine learning</span> and{" "}
                  <span className="text-accent">deep learning</span> like
                  classification, object detection, recognition and Explainable
                  AI (XAI) for academic journals.
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
                <p className="text-2xl font-bold text-accent">30+</p>
                <p className="text-sm text-foreground/60">Projects Built</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">2+</p>
                <p className="text-sm text-foreground/60">
                  Years Hands-on Experience
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">2+</p>
                <p className="text-sm text-foreground/60">Research Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
