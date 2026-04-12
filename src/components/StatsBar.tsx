import { motion } from "framer-motion";

const stats = [
  { value: "600+", label: "Books Published" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "11+", label: "Years Experience" },
  { value: "50+", label: "Genres Covered" },
  { value: "24/7", label: "Author Support" },
];

export function StatsBar() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 red-gradient opacity-10" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display red-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
