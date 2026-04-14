import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import bookMidnightGarden from "@/assets/book-midnight-garden.jpg";
import bookEchoesTomorrow from "@/assets/book-echoes-tomorrow.jpg";
import bookLastCompass from "@/assets/book-last-compass.jpg";
import bookManSoldTime from "@/assets/book-man-sold-time.jpg";
import bookSilentMillions from "@/assets/book-silent-millions.jpg";
import bookStillWaters from "@/assets/book-still-waters.jpg";
import bookSpiceRoute from "@/assets/book-spice-route.jpg";
import bookWiredMore from "@/assets/book-wired-more.jpg";
import bookCrimsonHorizon from "@/assets/book-crimson-horizon.jpg";
import bookPersonalFinanceTeens from "@/assets/book-personal-finance-teens.jpg";

const books = [
  { title: "The Midnight Garden", genre: "Gothic Mystery", cover: bookMidnightGarden },
  { title: "Echoes of Tomorrow", genre: "Sci-Fi", cover: bookEchoesTomorrow },
  { title: "The Last Compass", genre: "Adventure Memoir", cover: bookLastCompass },
  { title: "The Man Who Sold Time", genre: "Sci-Fi", cover: bookManSoldTime },
  { title: "Silent Millions", genre: "Finance Thriller", cover: bookSilentMillions },
  { title: "Beneath Still Waters", genre: "Thriller", cover: bookStillWaters },
  { title: "The Spice Route", genre: "Culinary Memoir", cover: bookSpiceRoute },
  { title: "Wired for More", genre: "Business & Tech", cover: bookWiredMore },
  { title: "Crimson Horizon", genre: "Dystopian Thriller", cover: bookCrimsonHorizon },
  { title: "Personal Finance for Teens", genre: "Young Adult Finance", cover: bookPersonalFinanceTeens },
];

export function BookCovers() {
  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto">
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

        <div className="px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {books.map((book, i) => (
                <CarouselItem key={book.title} className="pl-4 basis-1/2 md:basis-1/4">
                  <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
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
                          <h3 className="font-display text-lg text-white">{book.title}</h3>
                          <p className="text-xs text-white/70">{book.genre}</p>
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
      </div>
    </section>
  );
}
