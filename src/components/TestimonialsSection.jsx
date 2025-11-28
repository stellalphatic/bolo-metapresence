"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Loman paid for itself in 10 days. Phones are calm, tickets are bigger, and my team refuses to go back. I'll never get rid of Loman.",
      author: "Nick Haselidis",
      title: "Owner, Crust Pizza",
      impact: "Paid for itself in 10 days",
    },
    {
      quote:
        "With Bolo I'm easily able to capture an extra 75-100 orders every month per store, and for a multi-unit operator that's a no brainer.",
      author: "Michael Hauke",
      title: "Owner, Tony Boloney's",
      impact: "+75-100 orders/month per store",
    },
    {
      quote:
        "If I didn't have Bolo answering the phones, I'd be losing out on over $200k a year.",
      author: "Dru",
      title: "Owner, Midland Pizza Co",
      impact: "+$200k annual revenue",
    },
    {
      quote:
        "Since adding Bolo, we've cut our labor costs by over 24%. I'll never open another restaurant without it.",
      author: "Petra Demko",
      title: "Owner, Little Italy",
      impact: "24% reduction in labor costs",
    },
  ];

  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Loved by restaurant owners</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what industry leaders are saying about Bolo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition-all duration-300"
              style={{ borderColor: "var(--accent-blue)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ translateY: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{
                      color: "var(--accent-yellow)",
                      fill: "var(--accent-yellow)",
                    }}
                  />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-800 pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-400 mb-3">
                  {testimonial.title}
                </p>
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--accent-orange)",
                    color: "white",
                    opacity: 0.2,
                  }}
                >
                  {testimonial.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
