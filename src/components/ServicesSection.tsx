import { motion } from "framer-motion";
import { PenTool, BookOpen, Megaphone, FileEdit, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Ghostwriting",
    description: "Our expert writers bring your vision to life with compelling narratives, thorough research, and your authentic voice preserved throughout.",
  },
  {
    icon: FileEdit,
    title: "Editing & Proofreading",
    description: "Professional editing that polishes your manuscript to perfection — from developmental edits to final proofreading.",
  },
  {
    icon: Palette,
    title: "Cover Design",
    description: "Eye-catching, genre-specific cover designs that grab attention on shelves and screens alike.",
  },
  {
    icon: BookOpen,
    title: "Publishing",
    description: "End-to-end publishing services including formatting, ISBN registration, and distribution across major platforms.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description: "Strategic marketing campaigns that put your book in front of the right readers through ads, PR, and social media.",
  },
  {
    icon: TrendingUp,
    title: "Amazon Optimization",
    description: "Maximize your book's visibility with keyword optimization, category selection, and A+ content on Amazon.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">What We Do</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive eBook solutions from concept to bestseller — everything you need under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-lg border border-border bg-card hover:border-primary/50 gentle-animation"
            >
              <div className="w-12 h-12 rounded-md gold-gradient flex items-center justify-center mb-5">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
