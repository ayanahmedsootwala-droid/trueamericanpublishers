import { motion } from "framer-motion";
import bookMidnightGarden from "@/assets/book-midnight-garden.jpg";
import bookEchoesTomorrow from "@/assets/book-echoes-tomorrow.jpg";
import bookLastCompass from "@/assets/book-last-compass.jpg";
import bookQuietStrength from "@/assets/book-quiet-strength.jpg";
import bookEmpireAshes from "@/assets/book-empire-ashes.jpg";
import bookStillWaters from "@/assets/book-still-waters.jpg";
import bookSpiceRoute from "@/assets/book-spice-route.jpg";
import bookWiredMore from "@/assets/book-wired-more.jpg";

const books = [
  { title: "The Midnight Garden", genre: "Gothic Mystery", cover: bookMidnightGarden },
  { title: "Echoes of Tomorrow", genre: "Sci-Fi", cover: bookEchoesTomorrow },
  { title: "The Last Compass", genre: "Adventure Memoir", cover: bookLastCompass },
  { title: "Quiet Strength", genre: "Self-Help", cover: bookQuietStrength },
  { title: "Empire of Ashes", genre: "Historical Fiction", cover: bookEmpireAshes },
  { title: "Beneath Still Waters", genre: "Thriller", cover: bookStillWaters },
  { title: "The Spice Route", genre: "Culinary Memoir", cover: bookSpiceRoute },
  { title: "Wired for More", genre: "Business & Tech", cover: bookWiredMore },
];

export function BookCovers() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Work</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Featured Book Covers</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A glimpse of the books we've helped bring to life across every genre.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-[1.02] gentle-animation">
                <img
                  src={book.cover}
                  alt={`${book.title} book cover`}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-4">
                  <div>
                    <h3 className="font-display text-lg text-white">{book.title}</h3>
                    <p className="text-xs text-white/70">{book.genre}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
