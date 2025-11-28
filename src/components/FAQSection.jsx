"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question:
        "Is Voice AI cheaper and better than a human or answering service?",
      answer:
        "Yes. Bolo answers 100% of calls, never calls in sick, and follows your menu and policies perfectly. Most operators cut phone time for staff, reduce errors, and capture orders they used to miss. You pay a predictable software fee instead of hourly wages or per-minute call center costs.",
    },
    {
      question: "What can Bolo handle on a call?",
      answer:
        "Pickup and delivery orders, payments for orders, reservations, menu and allergen questions, hours and directions, wait times, order status, catering inquiries, and smart routing to your team. It recognizes repeat callers, supports multiple languages, and syncs clean tickets to your systems.",
    },
    {
      question: "Can Bolo take payments over the phone?",
      answer:
        "Yes, Bolo can securely take payments over the phone for both pickup and delivery orders. Our AI phone agent integrates directly with your restaurant's POS system, allowing customers to place an order and pay instantly using their credit or debit card without needing staff intervention.",
    },
    {
      question: "How fast is setup and what do we need?",
      answer:
        "Bolo can get you up and running in less than 24 hours. Connect your systems, import the menu, choose a greeting, set hours and rules, then test. Most restaurants go live in under a day. Our team can do white-glove setup if you want it done for you.",
    },
    {
      question: "Does it work for multi-location and franchise groups?",
      answer:
        "Yes. Manage a shared menu with per-store overrides, local numbers, store-specific hours and holidays, and region-based routing. Analytics roll up by location so you see call volume, conversion, and average ticket per store.",
    },
    {
      question: "What happens with edge cases or unhappy callers?",
      answer:
        "Bolo detects intent and either solves it or hands off cleanly. It can transfer to a live line, capture a voicemail with transcript, or send a message to your team with caller info and context so guests get fast, human follow-up.",
    },
  ];

  return (
    <section className="section-padding bg-black text-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Frequently asked questions</h2>
          <p className="text-xl text-gray-400">
            Get answers to common questions about Bolo
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-800 rounded-xl overflow-hidden hover:border-accent-blue transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/50 transition-colors text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    expanded === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expanded === idx && (
                <motion.div
                  className="border-t border-gray-800 px-6 py-4 bg-gray-900/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
