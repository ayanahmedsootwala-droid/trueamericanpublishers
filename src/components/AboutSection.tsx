import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const stats = [
  { icon: BookOpen, value: "600+", label: "Books Published" },
  { icon: Users, value: "450+", label: "Happy Authors" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Clock, value: "11+", label: "Years in Business" },
];

const strengths = [
  "Dedicated project manager for every author",
  "Transparent pricing with no hidden fees",
  "Industry-leading turnaround times",
  "Published across 50+ genres worldwide",
  "Certified Amazon & Kindle experts",
  "Full ownership & copyright protection",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl">
            Turning Ideas Into{" "}
            <span className="red-text">Published Books</span>{" "}
            Since 2014
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For over 11 years, True American Publishers has been the trusted partner for aspiring and established authors alike. We've helped hundreds of writers navigate the complex world of publishing, from the first draft to the bestseller list.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of experienced ghostwriters, editors, designers, and marketing specialists work collaboratively to deliver books that not only meet but exceed our clients' expectations. We believe every story deserves to be told — and told well.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {strengths.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-md red-gradient text-primary-foreground font-semibold hover:opacity-90 gentle-animation"
          >
            Work With Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg border border-border bg-background text-center group hover:border-primary/50 gentle-animation"
              >
                <stat.icon size={28} className="mx-auto text-primary mb-3" />
                <div className="text-3xl font-display text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg border border-border bg-background flex items-center gap-4">
            <img src={logo} alt="True American Publishers" className="h-16 w-auto" />
            <div>
              <h3 className="text-lg text-foreground">True American Publishers</h3>
              <p className="text-sm text-muted-foreground">Trusted by 450+ authors across 50+ genres worldwide.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
