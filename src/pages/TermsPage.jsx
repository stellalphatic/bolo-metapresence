"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
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
                Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Bolo AI services, you accept and agree to
                be bound by and comply with these Terms of Service. If you do
                not agree to these terms, you should not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                2. Use License
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Bolo AI's website and
                services for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose</li>
                <li>
                  • Attempting to decompile or reverse engineer any software
                </li>
                <li>• Removing any copyright or proprietary notations</li>
                <li>• Transferring the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                3. Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on Bolo AI's website and services are provided on
                an 'as is' basis. Bolo AI makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                4. Limitations of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Bolo AI or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit) arising out of the use or inability to use the
                materials on Bolo AI's website and services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                5. User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your
                computer. You agree to accept responsibility for all activities
                that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">
                6. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <p className="text-black mb-2">
                  <strong>Email:</strong> legal@bolo.ai
                </p>
                <p className="text-black">
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
