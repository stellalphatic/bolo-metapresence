"use client";

import { motion } from "framer-motion";
import {
  Phone,
  CreditCard,
  MessageCircle,
  Clock,
  Zap,
  BarChart3,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Phone,
      title: "Answer Every Call",
      description:
        "Handles unlimited simultaneous calls, never puts customers on hold",
      color: "var(--accent-blue)",
    },
    {
      icon: CreditCard,
      title: "Take Payments",
      description: "Securely process credit card payments over the phone",
      color: "var(--accent-orange)",
    },
    {
      icon: MessageCircle,
      title: "Answer Questions",
      description:
        "Knows your menu, hours, and business details with total accuracy",
      color: "var(--accent-green)",
    },
    {
      icon: Clock,
      title: "Book Reservations",
      description:
        "24/7 reservation booking that reduces wait times and boosts satisfaction",
      color: "#eab308",
    },
    {
      icon: Zap,
      title: "Smart Upselling",
      description:
        "Intelligently suggests add-ons and combos to increase average ticket",
      color: "var(--accent-blue)",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track calls, orders, revenue, and customer insights in one dashboard",
      color: "var(--accent-orange)",
    },
  ];

  return (
    <section className="section-padding section-blue" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="text-gray-600">Turn every call into</span>{" "}
            <span style={{ color: "var(--accent-orange)", fontWeight: "bold" }}>
              cash
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            <span className="font-semibold text-black">
              Bolo is the AI phone answering platform
            </span>{" "}
            built for restaurants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white border border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ translateY: -4 }}
              >
                <div className="mb-6">
                  <Icon
                    size={40}
                    style={{ color: feature.color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
