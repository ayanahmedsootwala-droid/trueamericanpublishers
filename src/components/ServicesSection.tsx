import { motion } from "framer-motion";
import { PenTool, BookOpen, Megaphone, FileEdit, Palette, TrendingUp, Layout, Shield } from "lucide-react";
import bookAlgorithm from "@/assets/book-algorithm-owns-you.jpg";
import bookMoneyHates from "@/assets/book-money-hates.jpg";
import bookWiredMore from "@/assets/book-wired-more.jpg";

const services = [
  {
    icon: PenTool,
    title: "Ghostwriting",
    description: "Our expert writers bring your vision to life with compelling narratives, thorough research, and your authentic voice preserved throughout every chapter.",
  },
  {
    icon: FileEdit,
    title: "Editing & Proofreading",
    description: "Professional editing that polishes your manuscript to perfection — from developmental edits to line editing and final proofreading.",
  },
  {
    icon: Palette,
    title: "Cover Design",
    description: "Eye-catching, genre-specific cover designs crafted by professional designers that grab attention on shelves and screens alike.",
  },
  {
    icon: Layout,
    title: "Typesetting & Formatting",
    description: "Precise interior layout, typesetting, and formatting for eBook and print formats that ensure a seamless reading experience.",
  },
  {
    icon: BookOpen,
    title: "Publishing & Distribution",
    description: "End-to-end publishing on Amazon, Kindle, Barnes & Noble, and more — including ISBN registration and global distribution.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description: "Strategic marketing campaigns including social media, PR, email outreach, and paid ads to maximize your book's reach and sales.",
  },
  {
    icon: TrendingUp,
    title: "Amazon Optimization",
    description: "Maximize visibility with expert keyword optimization, category selection, A+ content, and bestseller ranking strategies on Amazon.",
  },
  {
    icon: Shield,
    title: "100% Ownership Rights",
    description: "You retain full ownership of your manuscript, cover design, and all publishing rights. Your book, your name, your legacy.",
  },
];

const sideBooks = [
  { src: bookAlgorithm, title: "The Algorithm Owns You" },
  { src: bookMoneyHates, title: "Money Hates You" },
  { src: bookWiredMore, title: "Wired for More" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.03]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive eBook solutions from concept to bestseller — everything you need under one roof with over 11 years of publishing expertise.
          </p>
        </motion.div>

        <div className="flex gap-10">
          {/* Services grid */}
          <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 gentle-animation relative overflow-hidden"
              >
                <div className="absolute inset-0 red-gradient opacity-0 group-hover:opacity-[0.03] gentle-animation" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md red-gradient flex items-center justify-center mb-4 shadow-lg shadow-primary/10">
                    <service.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side book covers */}
          <div className="hidden xl:flex flex-col gap-4 w-36 flex-shrink-0 justify-center">
            {sideBooks.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.08, rotate: -2, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 gentle-animation">
                  <img src={book.src} alt={book.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 gentle-animation flex items-end p-2">
                    <span className="text-[10px] text-white font-medium leading-tight">{book.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
