import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bestselling Author",
    text: "PageCraft turned my rough ideas into a beautifully published book. Their ghostwriting team captured my voice perfectly. I couldn't have done it without them.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Business Coach",
    text: "The team at PageCraft handled everything — writing, design, publishing, and marketing. My book became an Amazon bestseller within the first month!",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Health & Wellness Expert",
    text: "Professional, responsive, and incredibly talented. They took my complex health research and transformed it into an accessible, engaging read.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Motivational Speaker",
    text: "From day one, the PageCraft team understood my vision. The final product exceeded all my expectations. Highly recommend their services!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the authors we've helped succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-lg border border-border bg-card"
            >
              <Quote size={28} className="text-primary/30 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
