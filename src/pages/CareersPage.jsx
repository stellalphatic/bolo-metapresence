"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CareersPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const positions = [
    {
      title: "Senior AI/ML Engineer",
      location: "BIC UET Lahore, Pakistan",
      type: "Full-time",
      description:
        "Build and improve the voice models that power Bolo's AI agent. Work with cutting-edge LLM, STT, and TTS technologies.",
    },
    {
      title: "Restaurant Success Manager",
      location: "Remote",
      type: "Full-time",
      description:
        "Help our restaurant customers succeed by onboarding, training, and supporting them. Be the voice of our customers.",
    },
    {
      title: "Product Manager",
      location: "BIC UET Lahore, Pakistan",
      type: "Full-time",
      description:
        "Lead product vision and execution for the next generation of Bolo. Shape the future of restaurant automation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding section-light py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-orange mb-8 transition-colors font-semibold"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Join the <span className="text-highlight">Bolo</span> team
              </motion.h1>
              <motion.p
                className="text-text-secondary text-xl max-w-2xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-semibold text-text-primary">
                  We're hiring talented people
                </span>{" "}
                passionate about helping restaurants thrive with AI technology.
              </motion.p>

              {/* Contact Email Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-blue/10 to-accent-orange/10 border-2 border-accent-blue/30 rounded-full px-6 py-3"
              >
                <Mail className="w-5 h-5 text-accent-blue" />
                <span className="text-text-secondary text-sm">
                  Got questions? Reach us at{" "}
                  <a
                    href="mailto:contact@bolo.metapresence.my"
                    className="font-bold text-accent-blue hover:text-accent-orange transition-colors underline"
                  >
                    contact@bolo.metapresence.my
                  </a>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding section-cream">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="heading-md mb-12 text-text-primary text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Open <span className="text-highlight">Positions</span>
            </motion.h2>

            <div className="space-y-6">
              {positions.map((position, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card border-2 border-border hover:border-accent-blue rounded-2xl p-6 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    animate={hoveredIndex === idx ? { x: 0 } : { x: "-100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      className="bg-accent-blue/10 p-3 rounded-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase
                        size={24}
                        className="text-accent-blue flex-shrink-0"
                      />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {position.description}
                      </p>

                      <div className="flex gap-3 flex-wrap">
                        <span className="text-sm font-semibold px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full inline-flex items-center gap-2">
                          <MapPin size={14} />
                          {position.location}
                        </span>
                        <span className="text-sm font-semibold px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full inline-flex items-center gap-2">
                          <Clock size={14} />
                          {position.type}
                        </span>
                      </div>
                    </div>

                    <motion.span
                      className="text-3xl text-accent-blue"
                      animate={hoveredIndex === idx ? { x: 5 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 p-8 md:p-10 bg-gradient-to-br from-accent-yellow/20 via-accent-orange/10 to-accent-blue/10 border-2 border-accent-orange/30 rounded-3xl text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-blue rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-block mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-orange rounded-2xl flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="heading-sm mb-4 text-text-primary">
                  Don't see the right position?
                </h3>
                <p className="text-text-secondary mb-6 text-lg max-w-xl mx-auto">
                  We're always looking for talented people. Send us your resume
                  and let's talk about how you can help shape the future of
                  restaurant automation!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="mailto:contact@bolo.metapresence.my"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-grey-500 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    Send Your Resume
                  </motion.a>

                  <motion.a
                    href="mailto:contact@bolo.metapresence.my?subject=Career%20Inquiry"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-blue rounded-full font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-accent-blue"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                    General Inquiry
                  </motion.a>
                </div>

                {/* Email display */}
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:contact@bolo.metapresence.my"
                    className="font-mono font-semibold hover:text-accent-blue transition-colors"
                  >
                    contact@bolo.metapresence.my
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Why Join Bolo Section */}
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  emoji: "🚀",
                  title: "Fast-paced Growth",
                  desc: "Be part of a rapidly scaling AI company",
                },
                {
                  emoji: "💡",
                  title: "Innovation First",
                  desc: "Work with cutting-edge AI and voice technology",
                },
                {
                  emoji: "🌟",
                  title: "Impact",
                  desc: "Help restaurants grow and succeed every day",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card border-2 border-border rounded-2xl p-6 text-center hover:border-accent-blue transition-all"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-text-primary text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
