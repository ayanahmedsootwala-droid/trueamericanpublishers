import logoMain from "@/assets/logo-main.png";
import { BookOpen, Mail, Phone, MapPin, CreditCard } from "lucide-react";

const genres = [
  "Romance", "Sci-Fi", "Thriller", "Mystery", "Fantasy", "Horror",
];

export function FooterSection() {
  return (
    <footer className="relative pt-20 pb-8 px-6 border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoMain} alt="True American Publishers" className="h-14 w-auto object-contain" />
              <div>
                <span className="font-display text-lg text-foreground leading-none">True American</span>
                <span className="block text-primary text-[10px] font-semibold tracking-[0.3em] uppercase">Publishers</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming stories into bestselling books for over 11 years. Your trusted partner in publishing excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary gentle-animation">Services</a>
              <a href="#packages" className="text-sm text-muted-foreground hover:text-primary gentle-animation">Packages</a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary gentle-animation">Portfolio</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary gentle-animation">About Us</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary gentle-animation">FAQ</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground flex items-center gap-2"><BookOpen size={14} className="text-primary" /> Ghostwriting</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><BookOpen size={14} className="text-primary" /> Editing & Proofreading</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><BookOpen size={14} className="text-primary" /> Cover Design</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><BookOpen size={14} className="text-primary" /> Amazon Publishing</span>
              <span className="text-sm text-muted-foreground flex items-center gap-2"><BookOpen size={14} className="text-primary" /> Book Marketing</span>
            </div>
          </div>

          {/* Genres */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Genres</h4>
            <div className="flex flex-col gap-3">
              {genres.map((genre) => (
                <span key={genre} className="text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" /> {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wider uppercase">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contact@trueamericanpublishers.com" className="text-sm text-muted-foreground hover:text-primary gentle-animation flex items-center gap-2">
                <Mail size={14} className="text-primary" /> contact@trueamericanpublishers.com
              </a>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +1 (555) 123-4567
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> New York, NY
              </span>
            </div>
          </div>
        </div>

        {/* Payment Partners */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard size={16} className="text-primary" />
              <span className="font-medium">Accepted Payment Methods</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {[
                { name: "Visa", bg: "from-[#1a1f71] to-[#2a3f9f]", text: "VISA", font: "italic font-bold text-base" },
                { name: "Mastercard", bg: "from-[#eb001b] to-[#f79e1b]", text: "MC", font: "font-bold text-base" },
                { name: "PayPal", bg: "from-[#003087] to-[#009cde]", text: "PayPal", font: "font-semibold text-xs" },
                { name: "Amex", bg: "from-[#006fcf] to-[#0097d5]", text: "AMEX", font: "font-bold text-xs" },
                { name: "Discover", bg: "from-[#ff6000] to-[#ff8c00]", text: "DISCOVER", font: "font-bold text-[10px]" },
              ].map((card) => (
                <div
                  key={card.name}
                  className={`w-16 h-10 rounded-md bg-gradient-to-br ${card.bg} flex items-center justify-center shadow-md`}
                  title={card.name}
                >
                  <span className={`text-white ${card.font} select-none`}>{card.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} True American Publishers. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary gentle-animation">Privacy Policy</a>
            <a href="#" className="hover:text-primary gentle-animation">Terms of Service</a>
            <a href="#" className="hover:text-primary gentle-animation">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
