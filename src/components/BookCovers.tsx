import { motion } from "framer-motion";

const books = [
  { title: "The Silent Echo", genre: "Fiction", color: "from-[#1a365d] to-[#2d3748]" },
  { title: "Rise & Grind", genre: "Business", color: "from-[#744210] to-[#975a16]" },
  { title: "Mindful Living", genre: "Self-Help", color: "from-[#22543d] to-[#276749]" },
  { title: "Digital Empire", genre: "Marketing", color: "from-[#553c9a] to-[#6b46c1]" },
  { title: "The Last Chapter", genre: "Memoir", color: "from-[#9b2c2c] to-[#c53030]" },
  { title: "Future Forward", genre: "Technology", color: "from-[#2a4365] to-[#3182ce]" },
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
            A glimpse of the books we've brought to life for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`relative aspect-[2/3] rounded-lg bg-gradient-to-br ${book.color} overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:scale-[1.02] gentle-animation`}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="w-12 h-0.5 bg-white/30" />
                  <div>
                    <h3 className="text-white font-display text-xl md:text-2xl">{book.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{book.genre}</p>
                  </div>
                </div>
                {/* Spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
