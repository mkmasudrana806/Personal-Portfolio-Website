import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Cpu,
  Facebook,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative z-10 pt-15  pb-4 ">
      <div className="container relative z-10 mx-auto  px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12 mb-8">
          {/* Brand & Identity */}
          <div className="col-span-4 sm:col-span-4 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="p-0.5 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="bg-white rounded-full p-0.5">
                  <img
                    src="/Md_Masud_Rana-logo.webp"
                    alt="Masud Rana"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tighter">
                Masud Rana
              </span>
            </div>
            <p className="leading-relaxed">
              A Computer Science and Engineering student focused on building
              scalable, maintainable and secure backend system using nodejs and
              optimizing database query performance.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-sm md:text-lg font-bold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <div className="space-y-3 mt-3">
              <p className="text-sm text-foreground/70">
                Always open for opportunities and collaboration.
              </p>
              <Link
                href="mailto:masud.wg@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email masud.wg@gmail.com
              </Link>
              <p className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
                <PhoneCall className="h-4 w-4" />
                WhatsApp +8801792852446
              </p>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="col-span-4 sm:col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm md:text-lg font-bold  uppercase tracking-widest text-foreground">
              Find me on
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/mkmasudrana806" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/masud-rana-eng/",
                },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/mkmasudrana2",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border/50 bg-secondary/20 text-foreground/70 transition-all hover:border-accent/50 hover:text-accent"
                >
                  <social.Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm  ">
            © {currentYear} — Designed & Developed by{" "}
            <Link href={"#about"} className="text-accent">
              Masud Rana
            </Link>
          </p>
          <div className="inline-flex items-center  px-4 ">
            {/* Animated Dot Container */}
            <span className="relative flex h-2 w-2 mr-2">
              {/* The Ping Ring */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              {/* The Solid Center */}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>

            <p className="text-sm text-foreground/70 font-medium">
              Available for opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
