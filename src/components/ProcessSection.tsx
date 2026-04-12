import { motion } from "framer-motion";
import { MessageSquare, PenTool, Palette, BookOpen, Megaphone } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consultation", desc: "We discuss your vision, goals, and target audience to create a tailored publishing plan." },
  { icon: PenTool, step: "02", title: "Writing & Editing", desc: "Our ghostwriters craft your manuscript while editors refine every word to perfection." },
  { icon: Palette, step: "03", title: "Design & Layout", desc: "Professional cover design, typesetting, and interior layout that captivates readers." },
  { icon: BookOpen, step: "04", title: "Publishing", desc: "We handle ISBN, formatting, and distribution across Amazon, Kindle, and more." },
  { icon: Megaphone, step: "05", title: "Marketing", desc: "Strategic campaigns to maximize visibility and drive sales from day one." },
];

export function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">How It Works</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Publishing Process</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A streamlined five-step journey from your initial idea to a published bestseller.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full red-gradient flex items-center justify-center mb-4 group-hover:scale-110 gentle-animation shadow-lg shadow-primary/20">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xs text-primary font-semibold tracking-widest">STEP {s.step}</span>
              <h3 className="text-lg mt-1 mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
