"use client";

import { motion } from "framer-motion";

export default function DashboardSection() {
  return (
    <section className="section-padding section-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="text-text-secondary">Your all-in-one</span>{" "}
            <span className="text-highlight">dashboard</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            <span className="font-semibold text-text-primary">
              See live calls, transcripts, transactions, and outcomes
            </span>{" "}
            in one place. Track everything that matters.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-gradient-to-br from-gray-900 to-black p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Dashboard Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Left Sidebar */}
            <div className="space-y-4">
              <div className="text-sm font-bold text-accent-blue">◉ Bolo</div>
              <div className="space-y-3">
                {[
                  "Overview",
                  "Calls & Orders",
                  "Reports",
                  "Settings",
                  "Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="text-sm py-2 px-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Good afternoon, Restaurant Owner
                </h3>
                <p className="text-gray-400 text-sm">It's Monday 4:03 PM</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-xs">Revenue</p>
                  <p className="text-2xl font-bold">$35,053</p>
                  <p className="text-gray-500 text-xs">This Month</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-xs">Orders</p>
                  <p className="text-2xl font-bold">1,242</p>
                  <p className="text-gray-500 text-xs">This Month</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-xs">Minutes Used</p>
                  <p className="text-2xl font-bold">4,421</p>
                  <p className="text-gray-500 text-xs">This Month</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm font-semibold mb-3">Recent Activity</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      (555) 847-0913 - Allie
                    </span>
                    <span className="text-gray-500">2 minutes ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      (555) 206-7148 - Linda
                    </span>
                    <span className="text-gray-500">
                      $20.64 • 3 minutes ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
