import { motion } from "framer-motion";
import { PenTool, BookOpen, Megaphone, FileEdit, Palette, TrendingUp, Layout, Shield } from "lucide-react";

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
    description: "We handle ISBN registration, formatting, and distribution across Amazon, Kindle, Barnes & Noble, Google Books, and 40+ global platforms.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description: "Strategic marketing campaigns including Amazon optimization, social media promotion, PR outreach, and targeted advertising.",
  },
  {
    icon: TrendingUp,
    title: "Bestseller Campaigns",
    description: "Proven strategies to maximize your book's visibility and drive it to bestseller status across major platforms.",
  },
  {
    icon: Shield,
    title: "Rights & Ownership",
    description: "You retain 100% ownership of your book. We handle all legalities, NDAs, and intellectual property protection.",
  },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
      </div>
    </section>
  );
}
