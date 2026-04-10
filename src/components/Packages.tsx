import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for first-time authors with a clear manuscript idea.",
    features: [
      "Up to 30,000 words ghostwriting",
      "2 rounds of revisions",
      "Basic cover design",
      "eBook formatting",
      "Amazon KDP publishing",
      "ISBN registration",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$5,999",
    description: "Our most popular package for serious authors ready to make an impact.",
    features: [
      "Up to 60,000 words ghostwriting",
      "Unlimited revisions",
      "Premium cover design",
      "eBook + paperback formatting",
      "Multi-platform publishing",
      "ISBN registration",
      "Book marketing campaign",
      "Amazon optimization",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for established brands and serial authors.",
    features: [
      "Unlimited word count",
      "Dedicated project manager",
      "Custom cover & interior design",
      "Audiobook production",
      "Global distribution",
      "Full marketing suite",
      "PR & media outreach",
      "Ongoing consulting",
    ],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Packages</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-lg border ${
                pkg.highlight
                  ? "border-primary bg-background shadow-lg shadow-primary/10"
                  : "border-border bg-background"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold gold-gradient text-primary-foreground rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl text-foreground">{pkg.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-display text-foreground">{pkg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-md font-semibold gentle-animation ${
                  pkg.highlight
                    ? "gold-gradient text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
