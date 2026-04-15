import { motion } from "framer-motion";
import { Tablet, BookOpen, BookMarked } from "lucide-react";

const formats = [
  {
    icon: Tablet,
    title: "E-Book",
    description:
      "Reach millions of readers worldwide with a professionally formatted digital edition. Our e-books are optimized for Kindle, Apple Books, Google Play, and all major platforms.",
  },
  {
    icon: BookOpen,
    title: "Paperback",
    description:
      "The classic, reader-favorite format. Our paperback editions feature premium paper stock, professional typesetting, and stunning cover design with spine and back cover.",
  },
  {
    icon: BookMarked,
    title: "Hardcover",
    description:
      "Make a lasting impression with a premium hardcover edition. Ideal for coffee-table books, memoirs, and special collector's editions with dust jackets and archival binding.",
  },
];

export function BookFormats() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

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
            We publish your book in every format readers love — digital and print.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((fmt, i) => (
            <motion.div
              key={fmt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl border border-border bg-background hover:border-primary/50 gentle-animation relative overflow-hidden"
            >
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-lg red-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 gentle-animation">
                  <fmt.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display text-foreground">{fmt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fmt.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
