"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, GraduationCap, User, X, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning 👋";
  if (hour >= 12 && hour < 18) return "Good afternoon 👋";
  return "Good evening 👋";
}

const FloatingProfileBackend = () => {
  const [open, setOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <>
      {/* Floating Greeting   */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Greeting Bubble (NON-clickable) */}
        <div className="rounded-xl bg-card border border-border px-3 py-1 text-sm text-foreground shadow-md">
          {greeting}
        </div>

        {/* My Avatar */}
        <div className="p-0.5 cursor-pointer rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div
            onClick={() => setOpen(true)}
            className="bg-white rounded-full p-0.25"
          >
            <Image
              width={100}
              height={100}
              src="/Md_Masud_Rana-logo.webp"
              alt="Masud Rana"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Profile Card */}
          <div className="relative w-[340px] overflow-hidden rounded-3xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Header Decor (Optional - adds a nice splash of color) */}
            <div className="h-20 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close profile card"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Image - Now significantly larger and overlapping the header */}
            <div className="relative flex justify-center -mt-12 mb-4">
              <div className="p-1 rounded-full bg-card border border-border shadow-sm">
                <Image
                  width={100}
                  height={100}
                  src="/masud-rana-profile-picture.webp"
                  alt="Masud Rana"
                  className="h-24 w-24 rounded-full object-cover border-2 border-background shadow-inner"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="px-6 pb-8 space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Masud Rana
                </h2>
                <p className="text-xs font-medium text-accent uppercase tracking-widest">
                  Node.js Backend Engineer
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 group">
                  <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    CSE, Green University of Bangladesh
                  </span>
                </div>

                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href="mailto:masud.wg@gmail.com"
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    masud.wg@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    +8801792852446
                  </span>
                </div>

                <div className="flex items-center gap-3 group border-t border-border/50 pt-3 mt-3">
                  <Github className="w-5 h-5 text-accent shrink-0" />
                  <Link
                    target="_blank"
                    href={"https://github.com/mkmasudrana806"}
                    className="font-medium text-foreground hover:underline decoration-accent underline-offset-4"
                  >
                    github.com/mkmasudrana806
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingProfileBackend;
