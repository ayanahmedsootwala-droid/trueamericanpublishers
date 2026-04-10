import { motion } from "framer-motion";

const books = [
  { title: "Atomic Habits", author: "James Clear", color: "from-[#F5F0E0] to-[#E8DFC8]", textColor: "text-gray-900" },
  { title: "The 48 Laws of Power", author: "Robert Greene", color: "from-[#1a1a1a] to-[#2d2d2d]", textColor: "text-white" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", color: "from-[#8B0000] to-[#B22222]", textColor: "text-white" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", color: "from-[#4B0082] to-[#6A0DAD]", textColor: "text-white" },
  { title: "The Alchemist", author: "Paulo Coelho", color: "from-[#C4A35A] to-[#D4B56A]", textColor: "text-gray-900" },
  { title: "Becoming", author: "Michelle Obama", color: "from-[#1B3A5C] to-[#2A4F7A]", textColor: "text-white" },
  { title: "Educated", author: "Tara Westover", color: "from-[#2F4F4F] to-[#3D6363]", textColor: "text-white" },
  { title: "The Subtle Art", author: "Mark Manson", color: "from-[#FF6B35] to-[#FF8C5A]", textColor: "text-white" },
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
            A glimpse of the bestselling books we've helped bring to life.
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
              <div
                className={`relative aspect-[2/3] rounded-lg bg-gradient-to-br ${book.color} overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-[1.02] gentle-animation`}
              >
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="w-10 h-0.5 bg-current opacity-30" />
                  <div>
                    <h3 className={`font-display text-lg md:text-xl ${book.textColor}`}>{book.title}</h3>
                    <p className={`text-xs mt-1 opacity-60 ${book.textColor}`}>{book.author}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}