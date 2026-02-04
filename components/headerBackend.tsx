"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderBackend = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experiences", href: "#experiences" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2">
          <div className="p-0.5 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white rounded-full p-0.25">
              <Image
                width={100}
                height={100}
                src="/Md_Masud_Rana-logo.webp"
                alt="Masud Rana"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
          <span className="font-semibold text-lg md:text-2xl text-foreground">
            Masud Rana
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex justify-between items-center gap-x-2">
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-sm text-foreground/70 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={"#footer"}
            className="hidden md:inline-flex px-5 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 w-full px-5 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium transition-opacity hover:opacity-90">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderBackend;
