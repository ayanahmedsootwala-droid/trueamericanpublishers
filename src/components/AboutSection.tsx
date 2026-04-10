import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "500+", label: "Books Published" },
  { icon: Users, value: "350+", label: "Happy Authors" },
  { icon: Award, value: "50+", label: "Bestsellers" },
  { icon: Clock, value: "11+", label: "Years in Business" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl">
            Turning Ideas Into{" "}
            <span className="gold-text">Published Books</span>{" "}
            Since 2014
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For over 11 years, PageCraft has been the trusted partner for aspiring and established authors alike. We've helped hundreds of writers navigate the complex world of publishing, from the first draft to the bestseller list.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of experienced ghostwriters, editors, designers, and marketing specialists work collaboratively to deliver books that not only meet but exceed our clients' expectations. We believe every story deserves to be told — and told well.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-md gold-gradient text-primary-foreground font-semibold hover:opacity-90 gentle-animation"
          >
            Work With Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg border border-border bg-background text-center"
            >
              <stat.icon size={28} className="mx-auto text-primary mb-3" />
              <div className="text-3xl font-display text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
