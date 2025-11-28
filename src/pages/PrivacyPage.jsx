"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div
          style={{ backgroundColor: "var(--accent-blue)" }}
          className="text-white py-12 md:py-16"
        >
          <div className="max-w-4xl mx-auto px-4">
            <a
              href="/#home"
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
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Privacy Policy
              </h1>
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
              <h2 className="text-3xl font-bold mb-4 text-black">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Bolo AI ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                2. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong className="text-black">Personal Data:</strong> Name,
                  email address, phone number, restaurant information
                </li>
                <li>
                  <strong className="text-black">Technical Data:</strong> IP
                  address, browser type, pages visited, device information
                </li>
                <li>
                  <strong className="text-black">Call Data:</strong> Call
                  recordings, transcripts, and metadata (with your consent)
                </li>
                <li>
                  <strong className="text-black">Integration Data:</strong>{" "}
                  Information from connected POS systems and services
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• To provide and maintain our services</li>
                <li>• To improve and optimize our platform</li>
                <li>• To send you service updates and support</li>
                <li>• To comply with legal obligations</li>
                <li>• To detect and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate data</li>
                <li>• Right to request deletion of your data</li>
                <li>• Right to opt-out of marketing communications</li>
                <li>• Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                6. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <p className="text-black mb-2">
                  <strong>Email:</strong> privacy@bolo.ai
                </p>
                <p className="text-black">
                  <strong>Phone:</strong> +1 (888) BOLO-AI
                </p>
                <p className="text-black">
                  <strong>Address:</strong> San Francisco, CA
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
