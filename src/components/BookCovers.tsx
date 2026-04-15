import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import bookMidnightGarden from "@/assets/book-midnight-garden.jpg";
import bookStillWaters from "@/assets/book-still-waters.jpg";
import bookSpiceRoute from "@/assets/book-spice-route.jpg";
import bookPersonalFinanceTeens from "@/assets/book-personal-finance-teens.jpg";
import bookLoveNeverPlan from "@/assets/book-love-never-plan.jpg";
import bookBuiltSilence from "@/assets/book-built-silence.jpg";
import bookAlgorithm from "@/assets/book-algorithm-owns-you.jpg";
import bookNotTwice from "@/assets/book-not-twice.jpg";
import bookMoneyHates from "@/assets/book-money-hates.jpg";
import bookEmpireDust from "@/assets/book-empire-dust-fire.jpg";

import bookThirdDoor from "@/assets/book-third-door.jpg";
import bookLastWitness from "@/assets/book-last-witness.jpg";
import bookBloodDebts from "@/assets/book-blood-debts.jpg";
import bookWiredMore from "@/assets/book-wired-more.jpg";
import bookLastCompass from "@/assets/book-last-compass.jpg";

const carouselBooks = [
  { title: "The Midnight Garden", genre: "Gothic Mystery", cover: bookMidnightGarden },
  { title: "Beneath Still Waters", genre: "Thriller", cover: bookStillWaters },
  { title: "The Spice Route", genre: "Culinary Memoir", cover: bookSpiceRoute },
  { title: "Personal Finance for Teens", genre: "Young Adult Finance", cover: bookPersonalFinanceTeens },
  { title: "Love Was Never the Plan", genre: "Romance", cover: bookLoveNeverPlan },
  { title: "Built in Silence", genre: "Motivation", cover: bookBuiltSilence },
  { title: "The Algorithm Owns You", genre: "Tech Thriller", cover: bookAlgorithm },
  { title: "Not Twice Before Dying", genre: "Mystery", cover: bookNotTwice },
  { title: "Money Hates You", genre: "Finance", cover: bookMoneyHates },
  { title: "Empire of the Dust and Fire", genre: "Dark Fantasy", cover: bookEmpireDust },
];

const categories = [
  {
    name: "Fiction",
    books: [
      { title: "Don't Open the Third Door", genre: "Horror", cover: bookThirdDoor },
      { title: "The Last Witness Never Spoke", genre: "Crime Thriller", cover: bookLastWitness },
      { title: "Blood Debts and Broken Oaths", genre: "Dark Fantasy", cover: bookBloodDebts },
    ],
  },
  {
    name: "Non-Fiction",
    books: [
      { title: "Wired for More", genre: "Self-Help", cover: bookWiredMore },
      { title: "The Last Compass", genre: "Travel Memoir", cover: bookLastCompass },
    ],
  },
];

export function BookCovers() {
  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Featured Books</span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Books We've Brought to <span className="red-text">Life</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From romance to sci-fi, thrillers to finance — explore the diverse range of books published by True American Publishers.
          </p>
        </motion.div>

        {/* Carousel - 10 books */}
        <div className="px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carouselBooks.map((book, i) => (
                <CarouselItem key={book.title} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                  <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -10, rotateY: 5, transition: { duration: 0.3 } }}
                    style={{ perspective: 800 }}
                  >
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 gentle-animation">
                      <img
                        src={book.cover}
                        alt={`${book.title} book cover`}
                        loading="lazy"
                        width={512}
                        height={768}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-4">
                        <div>
                          <h3 className="font-display text-base text-white leading-tight">{book.title}</h3>
                          <p className="text-xs text-white/70 mt-1">{book.genre}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg gentle-animation" />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* Category sections - remaining 5 books */}
        <div className="mt-20 space-y-14">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display text-foreground mb-6">
                <span className="red-text">{cat.name}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cat.books.map((book, i) => (
                  <motion.div
                    key={book.title}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 gentle-animation">
                      <img
                        src={book.cover}
                        alt={`${book.title} book cover`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-4">
                        <div>
                          <h3 className="font-display text-sm text-white leading-tight">{book.title}</h3>
                          <p className="text-xs text-white/70 mt-1">{book.genre}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
