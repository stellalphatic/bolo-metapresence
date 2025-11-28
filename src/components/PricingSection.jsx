"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Phone } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for single locations",
      features: [
        "Up to 500 calls/month",
        "Basic integrations (1-2)",
        "Email support",
        "Analytics dashboard",
        "Custom greetings",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      description: "For growing restaurants",
      features: [
        "Up to 5,000 calls/month",
        "10+ integrations",
        "Priority phone support",
        "Advanced analytics",
        "Custom workflows",
        "Multi-location support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "For multi-location brands",
      features: [
        "Unlimited calls",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced API access",
        "SLA guarantee",
      ],
      highlight: false,
    },
  ]

  const pricingStructure = [
    {
      factor: "Call Volume",
      description: "More calls = better per-call rate",
    },
    {
      factor: "Integrations",
      description: "Custom integrations priced separately",
    },
    {
      factor: "Support Level",
      description: "Premium support for Enterprise",
    },
    {
      factor: "Features",
      description: "Advanced features available at all tiers",
    },
  ]

  return (
    <section className="section-padding bg-background" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">
            Flexible Pricing Built for <span className="text-accent-orange">Your Business</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Pay only for what you use. Pricing scales with your business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                plan.highlight
                  ? "bg-accent-blue text-white scale-105 shadow-2xl"
                  : "bg-card border-2 border-border hover:border-accent-blue"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: plan.highlight ? 1.05 : 1.02 }}
            >
              {plan.highlight && (
                <div className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}

              <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlight ? "text-blue-100" : "text-text-secondary"}`}>{plan.description}</p>

              <div className="mb-8">
                <p className={`text-sm ${plan.highlight ? "text-blue-100" : "text-text-secondary"}`}>Starting at</p>
                <div className="text-4xl font-bold mb-2">Custom</div>
                <p className={`text-sm ${plan.highlight ? "text-blue-100" : "text-text-secondary"}`}>
                  Based on your needs
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-full font-bold mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? "bg-white text-accent-blue hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                <Phone size={18} />
                Get Custom Quote
              </button>

              <div className={`space-y-4 ${plan.highlight ? "text-white" : ""}`}>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-1 ${plan.highlight ? "text-white" : "text-accent-blue"}`}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Pricing Works */}
        <motion.div
          className="bg-gradient-to-r from-accent-yellow/20 to-accent-orange/20 rounded-3xl p-12 border-2 border-accent-orange/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="heading-md mb-8 text-center">How Our Flexible Pricing Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingStructure.map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent-orange mb-2">{idx + 1}</div>
                <h4 className="font-bold text-lg mb-2">{item.factor}</h4>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-text-secondary mb-6">
            No credit card required. Let's find the perfect plan for your restaurant.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue text-white rounded-full font-bold hover:bg-blue-700 transition-colors duration-300"
          >
            <Phone size={20} />
            Schedule a Pricing Call
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
