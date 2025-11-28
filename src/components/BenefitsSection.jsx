"use client";

import { motion } from "framer-motion";
export default function BenefitsSection() {
  const benefits = [
    {
      title: "Never put customers on hold again",
      description:
        "Handles unlimited simultaneous calls, quotes wait times, sends directions, and routes edge cases. Stay responsive during rush hours so every caller becomes a customer.",
      highlight: "Never put customers on hold again",
    },
    {
      title: "Decrease cost of labor and increase upsells",
      description:
        "Offload routine calls and order taking so you staff leaner. Smart prompts nudge add-ons and popular combos that raise average ticket without extra training.",
      highlight: "Decrease cost of labor and increase upsells",
    },
    {
      title: "Increase front-of-house staff efficiency",
      description:
        "No phone interruptions at the host stand or counter. Fewer errors, faster turns, and clean tickets synced to your systems keep service smooth.",
      highlight: "Increase front-of-house staff efficiency",
    },
  ];

  return (
    <section className="section-padding section-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="heading-lg mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-text-secondary">Why</span>{" "}
          <span className="text-highlight">leading restaurants</span>{" "}
          <span className="text-text-secondary">choose Bolo</span>
        </motion.h2>

        <div className="space-y-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h3 className="heading-md mb-4 text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="bg-card border-2 border-border rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent-blue/20 rounded-full"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-card border-2 border-border rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent-orange/20 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="heading-md mb-4 text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
