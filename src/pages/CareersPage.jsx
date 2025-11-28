"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CareersPage() {
  const positions = [
    {
      title: "Senior AI/ML Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Build and improve the voice models that power Bolo's AI agent.",
    },
    {
      title: "Restaurant Success Manager",
      location: "Remote",
      type: "Full-time",
      description:
        "Help our restaurant customers succeed by onboarding, training, and supporting them.",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Lead product vision and execution for the next generation of Bolo.",
    },
  ];

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-lg mb-4">
                Join the <span className="text-highlight">Bolo</span> team
              </h1>
              <p className="text-text-secondary text-xl max-w-2xl">
                <span className="font-semibold text-text-primary">
                  We're hiring talented people
                </span>{" "}
                passionate about helping restaurants thrive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding section-cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-12 text-text-primary">
              Open <span className="text-highlight">Positions</span>
            </h2>
            <div className="space-y-4">
              {positions.map((position, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card border-2 border-border hover:border-accent-blue rounded-2xl p-6 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ translateX: 4 }}
                >
                  <div className="flex items-start gap-4">
                    <Briefcase
                      size={24}
                      className="text-accent-blue flex-shrink-0 mt-1"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-text-secondary mb-3">
                        {position.description}
                      </p>
                      <div className="flex gap-4 flex-wrap">
                        <span className="text-sm font-semibold px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full">
                          {position.location}
                        </span>
                        <span className="text-sm font-semibold px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12 p-8 bg-gradient-to-r from-accent-yellow/20 to-accent-orange/20 border-2 border-accent-orange/30 rounded-2xl text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-sm mb-4 text-text-primary">
                Don't see the right position?
              </h3>
              <p className="text-text-secondary mb-6">
                We're always looking for talented people. Send us your resume
                and let's talk!
              </p>
              <a
                href="mailto:careers@bolo.ai"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
              >
                Send Your Resume
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
