"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-[var(--accent-orange)] mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </a>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              Data Processing Agreement
            </motion.h1>

            <p className="text-gray-600 mb-12">
              Last updated: November 28, 2025
            </p>
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
                1. Scope and Purpose
              </h2>
              <p className="text-text-secondary leading-relaxed">
                This Data Processing Agreement ("DPA") is entered into between
                Bolo AI (as Data Processor) and Client (as Data Controller) and
                governs the processing of personal data in connection with the
                provision of Bolo's AI phone answering services for restaurants.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                2. Definitions
              </h2>
              <div className="space-y-3 text-text-secondary">
                <p>
                  <strong className="text-text-primary">Personal Data:</strong>{" "}
                  Any information relating to an identified or identifiable
                  natural person.
                </p>
                <p>
                  <strong className="text-text-primary">Processing:</strong> Any
                  operation performed on personal data, such as collection,
                  recording, or analysis.
                </p>
                <p>
                  <strong className="text-text-primary">
                    Data Controller:
                  </strong>{" "}
                  The natural or legal person who determines the purposes of
                  processing.
                </p>
                <p>
                  <strong className="text-text-primary">Data Processor:</strong>{" "}
                  The natural or legal person who processes data on behalf of
                  the controller.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                3. Data Processing Activities
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bolo AI will process personal data only as instructed by the
                Data Controller and for the following purposes:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Providing AI phone answering services</li>
                <li>• Processing call data and maintaining service quality</li>
                <li>• Generating analytics and performance reports</li>
                <li>• Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                4. Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Bolo AI implements appropriate technical and organizational
                security measures to protect personal data, including
                encryption, access controls, and regular security audits. All
                data is stored securely and access is restricted to authorized
                personnel only.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                5. Sub-processors
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Bolo AI will not engage any sub-processors without the prior
                written authorization of the Data Controller. A current list of
                authorized sub-processors is available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                6. Data Subject Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Bolo AI will assist the Data Controller in fulfilling data
                subject rights requests, including:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Right of access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                7. Duration and Termination
              </h2>
              <p className="text-text-secondary leading-relaxed">
                This DPA applies for the duration of the service agreement
                between the parties. Upon termination, Bolo AI will delete or
                return all personal data as instructed by the Data Controller.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">
                8. Contact
              </h2>
              <div className="p-6 bg-card border-2 border-border rounded-xl">
                <p className="text-text-primary mb-2">
                  <strong>Data Protection Officer:</strong>
                </p>
                <p className="text-text-primary mb-2">
                  <strong>Email:</strong> dpo@bolo.ai
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
