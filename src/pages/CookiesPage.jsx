"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold">Cookie Policy</h1>
              <p className="text-white/60 mt-4">
                Last updated: November 28, 2025
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                1. What are Cookies?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Cookies are small text files that are stored on your device when
                you visit a website. They help us remember information about
                your visit and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">
                    Essential Cookies
                  </h3>
                  <p className="text-text-secondary">
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation
                    and access to secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">
                    Analytics Cookies
                  </h3>
                  <p className="text-text-secondary">
                    These cookies help us understand how visitors use our
                    website by collecting data on page visits and user behavior.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">
                    Functional Cookies
                  </h3>
                  <p className="text-text-secondary">
                    These cookies remember your preferences and settings to
                    provide a personalized experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-text-primary">
                    Marketing Cookies
                  </h3>
                  <p className="text-text-secondary">
                    These cookies track your browsing activities to deliver
                    targeted advertisements and marketing messages.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                3. Managing Cookies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can typically find these settings in your
                browser's preferences or privacy settings. You may choose to:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Accept all cookies</li>
                <li>• Reject all cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Receive alerts when cookies are being set</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                4. Third-Party Cookies
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our website may contain links to third-party websites that use
                their own cookies. We are not responsible for the privacy
                practices or content of these external sites. We encourage you
                to review their cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                5. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have questions about this Cookie Policy, please contact
                us at:
              </p>
              <div className="p-6 bg-card border-2 border-border rounded-xl">
                <p className="text-text-primary mb-2">
                  <strong>Email:</strong> privacy@bolo.ai
                </p>
                <p className="text-text-primary">
                  <strong>Phone:</strong> +1 (888) BOLO-AI
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
