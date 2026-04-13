import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { useRef } from "react";
import heroBooks from "@/assets/hero-books.jpg";
import logoMain from "@/assets/logo-main.png";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* Prominent Logo Under Navbar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center pt-8 pb-4"
      >
        <img
          src={logoMain}
          alt="True American Publishers"
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
        />
        <h2 className="mt-3 font-display text-2xl md:text-3xl text-foreground tracking-wide">
          True American <span className="red-text">Publishers</span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16 items-center flex-1">
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
              alt="Books published by True American Publishers on devices"
              width={800}
              height={900}
              className="w-full max-w-lg rounded-2xl shadow-2xl shadow-primary/10"
            />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 -z-10 blur-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
