import { motion } from "framer-motion";
import bookLoveNeverPlan from "@/assets/book-love-never-plan.jpg";
import bookBuiltSilence from "@/assets/book-built-silence.jpg";
import bookAlgorithm from "@/assets/book-algorithm-owns-you.jpg";
import bookNotTwice from "@/assets/book-not-twice.jpg";
import bookMoneyHates from "@/assets/book-money-hates.jpg";
import bookEmpireDust from "@/assets/book-empire-dust-fire.jpg";
import bookSheNever from "@/assets/book-she-never-there.jpg";
import bookIfWeNever from "@/assets/book-if-we-never-met.jpg";
import bookLastWitness from "@/assets/book-last-witness.jpg";
import bookThirdDoor from "@/assets/book-third-door.jpg";
import book2089 from "@/assets/book-2089.jpg";
import bookBloodDebts from "@/assets/book-blood-debts.jpg";

const showcaseBooks = [
  { title: "Love Was Never the Plan", genre: "Romance", cover: bookLoveNeverPlan },
  { title: "Built in Silence", genre: "Motivation", cover: bookBuiltSilence },
  { title: "The Algorithm Owns You", genre: "Tech Thriller", cover: bookAlgorithm },
  { title: "Not Twice Before Dying", genre: "Thriller", cover: bookNotTwice },
  { title: "Money Hates You", genre: "Finance", cover: bookMoneyHates },
  { title: "Empire of the Dust and Fire", genre: "Fantasy", cover: bookEmpireDust },
  { title: "She Was Never There", genre: "Mystery", cover: bookSheNever },
  { title: "If We Never Met Again", genre: "Drama", cover: bookIfWeNever },
  { title: "The Last Witness Never Spoke", genre: "Legal Thriller", cover: bookLastWitness },
  { title: "Don't Open the Third Door", genre: "Horror", cover: bookThirdDoor },
  { title: "2089: The Year Humanity Sold Itself", genre: "Dystopian Sci-Fi", cover: book2089 },
  { title: "Blood Debts and Broken Oaths", genre: "Dark Fantasy", cover: bookBloodDebts },
];

export function BookShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Library</span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Books We've Brought to <span className="red-text">Life</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From romance to sci-fi, thrillers to finance — explore the diverse range of books published by True American Publishers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {showcaseBooks.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 800 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 gentle-animation">
                <img
                  src={book.cover}
                  alt={`${book.title} book cover`}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-4">
                  <div>
                    <h3 className="font-display text-base text-white leading-tight">{book.title}</h3>
                    <p className="text-xs text-white/60 mt-1">{book.genre}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl gentle-animation" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
