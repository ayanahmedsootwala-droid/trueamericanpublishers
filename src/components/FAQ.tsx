import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the ghostwriting process work?",
    a: "We start with a detailed consultation to understand your vision, audience, and goals. Our writers create an outline for your approval, then draft the manuscript in stages with regular check-ins. You'll have full creative control throughout the process.",
  },
  {
    q: "How long does it take to write and publish a book?",
    a: "A typical project takes 3-6 months from concept to publication, depending on the book's length and complexity. Ghostwriting usually takes 8-16 weeks, followed by editing, design, and publishing.",
  },
  {
    q: "Will I own the rights to my book?",
    a: "Absolutely. You retain 100% ownership and all intellectual property rights to your book. Our ghostwriters sign comprehensive NDAs and work-for-hire agreements.",
  },
  {
    q: "What genres do you specialize in?",
    a: "We work across all non-fiction genres including business, self-help, health & wellness, memoirs, and educational content. We also handle fiction genres such as thriller, romance, sci-fi, and literary fiction.",
  },
  {
    q: "Can I publish on Amazon and other platforms?",
    a: "Yes! We publish on all major platforms including Amazon KDP, Barnes & Noble, Apple Books, Kobo, and more. We also offer print-on-demand for paperback and hardcover editions.",
  },
  {
    q: "What if I'm not happy with the writing?",
    a: "Your satisfaction is our priority. We offer multiple revision rounds with every package, and our Professional and Enterprise packages include unlimited revisions until you're completely satisfied.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment plans. Most packages can be split into 2-4 installments. Contact us to discuss a plan that works for your budget.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
