import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { useRef } from "react";
import heroBooks from "@/assets/hero-books.jpg";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: textY }}
          className="space-y-8"
        >
          <motion.div
            className="flex items-center gap-2 text-primary text-sm font-medium"
            whileHover={{ x: 5 }}
          >
            <Star size={16} className="fill-primary" />
            <span>11+ Years of Publishing Excellence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            Your Story,{" "}
            <span className="red-text">Professionally</span>{" "}
            Crafted & Published
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            From ghostwriting to publishing to marketing — we transform your ideas into bestselling books that captivate readers worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md red-gradient text-primary-foreground font-semibold hover:opacity-90 gentle-animation"
            >
              Start Your Book <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-border text-foreground font-medium hover:border-primary hover:text-primary gentle-animation"
            >
              <BookOpen size={18} /> View Our Work
            </motion.a>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            {[
              { val: "600+", label: "Books Published" },
              { val: "100%", label: "Client Satisfaction" },
              { val: "11+", label: "Years Experience" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
              >
                <span className="block text-2xl font-display text-foreground">{s.val}</span>
                {s.label}
                {i < 2 && <div className="hidden" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <motion.div
            className="relative"
            style={{ scale: imageScale, rotate: imageRotate }}
          >
            <img
              src={heroBooks}
              alt="Books published by True American Publishers"
              width={800}
              height={900}
              className="w-full max-w-lg rounded-2xl shadow-2xl shadow-primary/10"
            />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 -z-10 blur-sm" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
        />
      </motion.div>
    </section>
  );
}
