import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "$749",
    originalPrice: "$2,497",
    discount: "70% OFF",
    description: "Everything you need to get your manuscript polished and ready.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "$1,499",
    originalPrice: "$4,997",
    discount: "70% OFF",
    description: "Complete package with cover design and Kindle e-book publishing.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "Publishing on Kindle (E-book)",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$2,100",
    originalPrice: "$7,000",
    discount: "70% OFF",
    description: "Full publishing with ISBN, Amazon & Kindle in both e-book and paperback.",
    features: [
      "Writing",
      "Editing",
      "Proofreading",
      "Typesetting",
      "Layout Adjustment",
      "Formatting",
      "100% Ownership Rights",
      "Book Cover Design",
      "ISBN Number",
      "Publishing on Amazon & Kindle",
      "E-book + Paperback (2 Formats)",
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
          <h2 className="text-4xl md:text-5xl">Our Packages</h2>
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
              transition={{ delay: i * 0.08 }}
              className={`relative p-8 rounded-lg border ${
                pkg.highlight
                  ? "border-primary bg-background shadow-lg shadow-primary/10"
                  : "border-border bg-background"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold red-gradient text-primary-foreground rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl text-foreground">{pkg.name}</h3>
              <div className="mt-4 mb-1 flex items-baseline gap-3">
                <span className="text-4xl font-display text-foreground">{pkg.price}</span>
                <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
              </div>
              <span className="inline-block px-2 py-0.5 text-xs font-bold text-primary bg-primary/10 rounded mb-6">
                {pkg.discount}
              </span>
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
                    ? "red-gradient text-primary-foreground hover:opacity-90"
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
