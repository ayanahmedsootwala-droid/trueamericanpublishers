import { BookOpen } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-primary" />
          <span className="font-display text-xl text-primary">PageCraft</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-primary gentle-animation">Services</a>
          <a href="#about" className="hover:text-primary gentle-animation">About</a>
          <a href="#portfolio" className="hover:text-primary gentle-animation">Portfolio</a>
          <a href="#packages" className="hover:text-primary gentle-animation">Packages</a>
          <a href="#contact" className="hover:text-primary gentle-animation">Contact</a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PageCraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
