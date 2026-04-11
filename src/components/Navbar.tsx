import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="True American Publishers" className="h-14 w-auto" />
          <span className="font-display text-lg text-foreground leading-tight hidden sm:block">
            True American<br />
            <span className="text-primary text-sm tracking-widest">PUBLISHERS</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary gentle-animation"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-md red-gradient text-primary-foreground hover:opacity-90 gentle-animation"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary gentle-animation"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-center font-semibold px-5 py-2 rounded-md red-gradient text-primary-foreground"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
