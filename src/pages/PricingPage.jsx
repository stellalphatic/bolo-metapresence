"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Phone, ArrowLeft } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function PricingPage() {
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding section-light py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-orange mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </a>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-lg mb-4">
                <span className="text-text-secondary">Flexible Pricing Built for Your</span>{" "}
                <span className="text-highlight">Business</span>
              </h1>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto">
                No hidden fees. No long-term contracts. Pay only for what you use. Pricing scales with your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding section-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  className={`rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                    plan.highlight
                      ? "bg-blue-600 text-white scale-105 shadow-2xl"
                      : "bg-white border-2 border-gray-300 hover:border-blue-600"
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

                  <h3 className={`text-3xl font-bold mb-2`} style={{ color: plan.highlight ? "white" : "black" }}>
                    {plan.name}
                  </h3>
                  <p style={{ color: plan.highlight ? "#e0e7ff" : "#666" }} className="mb-6 text-base">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <p style={{ color: plan.highlight ? "#e0e7ff" : "#666" }} className="text-sm">
                      Starting at
                    </p>
                    <div style={{ color: plan.highlight ? "white" : "black" }} className="text-4xl font-bold mb-2">
                      Custom
                    </div>
                    <p style={{ color: plan.highlight ? "#e0e7ff" : "#666" }} className="text-sm">
                      Based on your needs
                    </p>
                  </div>

                  <button
                    className={`w-full py-3 rounded-full font-bold mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? "bg-white text-blue-600 hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                  >
                    <Phone size={18} />
                    Get Custom Quote
                  </button>

                  <div style={{ color: plan.highlight ? "white" : "black" }} className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`flex-shrink-0 mt-1`}
                          style={{ color: plan.highlight ? "white" : "var(--accent-blue)" }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="section-padding section-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-accent-yellow/20 to-accent-orange/20 rounded-3xl p-12 border-2 border-accent-orange/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-md mb-8 text-center text-text-primary">How Our Flexible Pricing Works</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: "1", title: "Call Volume", desc: "More calls = better per-call rate" },
                  { num: "2", title: "Integrations", desc: "Custom integrations priced separately" },
                  { num: "3", title: "Support Level", desc: "Premium support for Enterprise" },
                  { num: "4", title: "Features", desc: "Advanced features available at all tiers" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-accent-orange mb-2">{item.num}</div>
                    <h4 className="font-bold text-lg mb-2 text-text-primary">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-accent-orange to-accent-yellow">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="heading-md text-black">
                <span className="text-gray-700">Ready to get started?</span>{" "}
                <span className="font-bold">Let's talk pricing</span>
              </h2>
              <p className="text-gray-900 text-lg max-w-2xl mx-auto">
                No credit card required. Let's find the perfect plan for your restaurant.
              </p>
              <a
                href="https://calendly.com/your-username/pricing-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-colors duration-300"
              >
                <Phone size={20} />
                Schedule a Pricing Call
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
