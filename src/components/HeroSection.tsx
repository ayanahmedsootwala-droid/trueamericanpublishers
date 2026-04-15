import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Star, Sparkles } from "lucide-react";
import { useRef } from "react";
import logoMain from "@/assets/logo-main.png";
import bookMidnight from "@/assets/book-midnight-garden.jpg";
import bookEchoes from "@/assets/book-echoes-tomorrow.jpg";
import bookManSoldTime from "@/assets/book-man-sold-time.jpg";
import bookSilentMillions from "@/assets/book-silent-millions.jpg";
import bookCrimson from "@/assets/book-crimson-horizon.jpg";
import bookSheNever from "@/assets/book-she-never-there.jpg";
import bookIfWeNever from "@/assets/book-if-we-never-met.jpg";
import book2089 from "@/assets/book-2089.jpg";

const heroBooks = [
  { src: bookSheNever, title: "She Was Never There", rotate: -15, x: -80, delay: 0.1 },
  { src: bookEchoes, title: "Echoes of Tomorrow", rotate: -10, x: -50, delay: 0.2 },
  { src: bookMidnight, title: "The Midnight Garden", rotate: -5, x: -25, delay: 0.3 },
  { src: bookManSoldTime, title: "The Man Who Sold Time", rotate: 0, x: 0, delay: 0.4, featured: true },
  { src: bookSilentMillions, title: "Silent Millions", rotate: 5, x: 25, delay: 0.5 },
  { src: bookCrimson, title: "Crimson Horizon", rotate: 10, x: 50, delay: 0.6 },
  { src: book2089, title: "2089", rotate: 15, x: 80, delay: 0.7 },
];

const floatingBooks = [
  { src: bookIfWeNever, top: "20%", left: "3%", size: "w-16 h-24", rotate: -15, delay: 0 },
  { src: bookSheNever, top: "55%", right: "4%", size: "w-14 h-20", rotate: 12, delay: 1.5 },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Animated background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* Floating sparkles */}
      {[
        { top: "15%", left: "10%", size: 12, delay: 0 },
        { top: "25%", right: "15%", size: 16, delay: 1.5 },
        { top: "60%", left: "5%", size: 10, delay: 3 },
        { top: "70%", right: "8%", size: 14, delay: 2 },
        { top: "40%", left: "20%", size: 8, delay: 4 },
      ].map((spark, i) => (
        <motion.div
          key={i}
          className="absolute z-10 text-primary/30"
          style={{ top: spark.top, left: spark.left, right: spark.right }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8], rotate: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity, delay: spark.delay, ease: "easeInOut" }}
        >
          <Sparkles size={spark.size} />
        </motion.div>
      ))}

      {/* Floating book covers in background */}
      {floatingBooks.map((book, i) => (
        <motion.div
          key={i}
          className={`absolute ${book.size} rounded-md overflow-hidden shadow-lg opacity-[0.12] hidden lg:block`}
          style={{ top: book.top, left: book.left, right: book.right }}
          animate={{ y: [0, -15, 0], rotate: [book.rotate, book.rotate + 3, book.rotate] }}
          transition={{ duration: 6, repeat: Infinity, delay: book.delay, ease: "easeInOut" }}
        >
          <img src={book.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Logo under navbar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center pt-10 pb-2"
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

      {/* Centered hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-20 text-center flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="flex items-center justify-center gap-2 text-primary text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Star size={16} className="fill-primary" />
            <span>11+ Years of Publishing Excellence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            Your Story,{" "}
            <span className="red-text">Professionally</span>{" "}
            Crafted & Published
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ghostwriting to publishing to marketing — we transform your ideas into bestselling books that captivate readers worldwide.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
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

        {/* Fan-spread book showcase — now with 7 books */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-end justify-center relative"
          style={{ perspective: 1200 }}
        >
          {heroBooks.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40, rotate: book.rotate }}
              animate={{ opacity: 1, y: 0, rotate: book.rotate }}
              transition={{ duration: 0.6, delay: book.delay }}
              whileHover={{ y: -20, rotate: 0, scale: 1.1, zIndex: 10, transition: { duration: 0.3 } }}
              className="relative cursor-pointer"
              style={{
                marginLeft: i === 0 ? 0 : "-20px",
                zIndex: book.featured ? 5 : i,
              }}
            >
              <div className={`relative overflow-hidden rounded-lg shadow-2xl ${book.featured ? "shadow-primary/20" : ""}`}>
                <img
                  src={book.src}
                  alt={book.title}
                  className={`object-cover ${book.featured ? "w-36 h-52 md:w-44 md:h-64" : "w-24 h-36 md:w-32 md:h-48"}`}
                />
                {book.featured && (
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
