import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            <Star size={16} className="fill-primary" />
            <span>11+ Years of Publishing Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            Your Story,{" "}
            <span className="red-text">Professionally</span>{" "}
            Crafted & Published
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            From ghostwriting to publishing to marketing — we transform your ideas into bestselling books that captivate readers worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md red-gradient text-primary-foreground font-semibold hover:opacity-90 gentle-animation"
            >
              Start Your Book <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-border text-foreground font-medium hover:border-primary hover:text-primary gentle-animation"
            >
              <BookOpen size={18} /> View Our Work
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div>
              <span className="block text-2xl font-display text-foreground">600+</span>
              Books Published
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="block text-2xl font-display text-foreground">100%</span>
              Client Satisfaction
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="block text-2xl font-display text-foreground">11+</span>
              Years Experience
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <img
              src={heroBooks}
              alt="Books published by True American Publishers"
              width={800}
              height={900}
              className="w-full max-w-lg rounded-2xl shadow-2xl shadow-primary/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
