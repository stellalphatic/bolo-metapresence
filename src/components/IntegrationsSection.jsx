"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function IntegrationsSection() {
  const integrations = [
    {
      name: "Square",
      icon: "🔷",
      description: "Seamless order syncing",
      features: ["Real-time orders", "Payment sync", "Customer data"],
      color: "from-black to-gray-800",
    },
    {
      name: "Toast POS",
      icon: "🟢",
      description: "Complete restaurant management",
      features: ["Multi-location support", "Menu management", "Inventory sync"],
      color: "from-green-600 to-green-700",
    },
    {
      name: "SpotOn",
      icon: "⬛",
      description: "Integrated reservations",
      features: ["Table availability", "Guest profiles", "Analytics"],
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Clover",
      icon: "🟠",
      description: "All-in-one platform",
      features: ["Real-time reporting", "Staff management", "Customer loyalty"],
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Stripe",
      icon: "🔵",
      description: "Secure payment processing",
      features: ["PCI compliant", "Multiple currencies", "Recurring billing"],
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "OpenTable",
      icon: "⚫",
      description: "Reservation management",
      features: ["Booking sync", "Wait management", "Guest insights"],
      color: "from-gray-900 to-black",
    },
    {
      name: "Uber Eats",
      icon: "🚚",
      description: "Delivery integration",
      features: [
        "Order routing",
        "Real-time tracking",
        "Commission management",
      ],
      color: "from-black to-gray-800",
    },
    {
      name: "DoorDash",
      icon: "🔴",
      description: "Third-party delivery",
      features: ["Automatic syncing", "Driver tracking", "Performance metrics"],
      color: "from-red-600 to-red-700",
    },
  ];

  const customIntegrations = [
    {
      title: "Webhook Integration",
      description: "Connect any custom system via webhooks",
      icon: "🔌",
      details: "Send order data to your custom applications in real-time",
    },
    {
      title: "API Access",
      description: "Full REST API for custom workflows",
      icon: "⚙️",
      details: "Build custom integrations tailored to your business needs",
    },
    {
      title: "CSV Import/Export",
      description: "Bulk data management",
      icon: "📊",
      details: "Import menus, customer data, and sync with external systems",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-padding bg-white" id="integrations">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">
            Integrates with your{" "}
            <span style={{ color: "var(--accent-orange)" }}>
              existing stack
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Connect with 50+ POS systems, reservation platforms, and custom
            integrations
          </p>
        </motion.div>

        {/* Major Integrations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`bg-gradient-to-br ${integration.color} rounded-2xl p-6 text-white h-full hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                <p className="text-white/80 text-sm mb-4">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  {integration.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <Check size={14} className="flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Integrations Section */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="heading-md text-center mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We support unlimited custom integrations to connect with any system
            your business uses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customIntegrations.map((custom, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ borderColor: "var(--accent-blue)" }}
                style={{ "--hover-color": "var(--accent-blue)" }}
              >
                <div className="text-5xl mb-4">{custom.icon}</div>
                <h4 className="text-2xl font-bold mb-2">{custom.title}</h4>
                <p
                  className="font-semibold mb-3"
                  style={{ color: "var(--accent-orange)" }}
                >
                  {custom.description}
                </p>
                <p className="text-gray-600">{custom.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: "var(--accent-blue)" }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50+</div>
            <p className="text-blue-100">Native Integrations</p>
          </div>
          <div className="text-center border-l border-r border-blue-400">
            <div className="text-5xl font-bold mb-2">∞</div>
            <p className="text-blue-100">Custom Webhooks</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">24/7</div>
            <p className="text-blue-100">Data Sync</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
