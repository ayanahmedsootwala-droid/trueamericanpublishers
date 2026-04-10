import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bestselling Author",
    text: "The American Publishing turned my rough ideas into a beautifully published book. Their ghostwriting team captured my voice perfectly. I couldn't have done it without them.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Business Coach",
    text: "The team handled everything — writing, design, publishing, and marketing. My book became an Amazon bestseller within the first month!",
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
    text: "From day one, the team understood my vision. The final product exceeded all my expectations. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Linda Foster",
    role: "Entrepreneur & Author",
    text: "I had tried two other publishing companies before finding The American Publishing. The difference in quality and professionalism is night and day. My book looks incredible.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Tech Executive",
    text: "They helped me write and publish my leadership book in under 4 months. The marketing campaign they put together drove thousands of sales in the first week.",
    rating: 5,
  },
  {
    name: "Rachel Thompson",
    role: "Life Coach",
    text: "The cover design alone was worth it — absolutely stunning. But the writing quality and attention to detail throughout the entire process was exceptional.",
    rating: 5,
  },
  {
    name: "Anthony Rivera",
    role: "Fitness Author",
    text: "I've published three books with The American Publishing now. Each one has been better than the last. They're my go-to publishing partner for life.",
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
              transition={{ delay: i * 0.08 }}
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