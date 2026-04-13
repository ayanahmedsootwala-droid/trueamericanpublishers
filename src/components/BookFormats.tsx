import { motion } from "framer-motion";
import { Tablet, BookOpen, Headphones, BookMarked } from "lucide-react";

const formats = [
  {
    icon: Tablet,
    title: "E-Book",
    description:
      "Reach millions of readers worldwide with a professionally formatted digital edition. Our e-books are optimized for Kindle, Apple Books, Google Play, and all major platforms. We ensure perfect typography, responsive layouts, and interactive table of contents for a seamless reading experience on any device — tablets, phones, or e-readers.",
  },
  {
    icon: BookOpen,
    title: "Paperback",
    description:
      "The classic, reader-favorite format. Our paperback editions feature premium paper stock, professional typesetting, and stunning cover design with spine and back cover. We handle trim sizing, bleed settings, and print-ready file preparation so your book meets the highest industry standards for Amazon KDP, IngramSpark, and bookstores.",
  },
  {
    icon: BookMarked,
    title: "Hardcover",
    description:
      "Make a lasting impression with a premium hardcover edition. Ideal for coffee-table books, memoirs, and special collector's editions. Our hardcovers feature dust jackets, case laminate options, and archival-quality binding that stands the test of time. A hardcover instantly elevates your book's perceived value and shelf presence.",
  },
  {
    icon: Headphones,
    title: "Audiobook",
    description:
      "Tap into the fastest-growing segment of publishing with a professionally narrated audiobook. We connect you with experienced voice artists, handle studio-quality recording and mastering, and distribute on Audible, iTunes, and major audiobook platforms. Perfect for reaching listeners during commutes, workouts, and everyday life.",
  },
];

export function BookFormats() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Formats</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Book Formats We Offer</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We publish your book in every format readers love — digital, print, and audio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((fmt, i) => (
            <motion.div
              key={fmt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/50 gentle-animation"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg red-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 gentle-animation">
                  <fmt.icon size={26} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-foreground mb-3">{fmt.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fmt.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
