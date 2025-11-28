"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function AboutPage() {
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="heading-lg mb-4">
                About <span className="text-highlight">Bolo</span>
              </h1>
              <p className="text-text-secondary text-xl max-w-2xl">
                <span className="font-semibold text-text-primary">We're on a mission</span> to help restaurants reclaim
                lost revenue and focus on what matters most: their guests.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding section-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md text-text-primary">Our Story</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                <span className="font-semibold text-text-primary">Bolo was born from real frustration.</span> Restaurant
                owners and managers told us that missed calls during peak hours were costing them thousands every month.
                Staff was tired of fielding calls while trying to serve guests. And customers were hanging up, never to
                call back.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                <span className="font-semibold text-text-primary">We knew there had to be a better way.</span> So we
                built Bolo—an AI phone agent trained to understand restaurants. One that answers every call, takes
                orders, handles payments, and syncs seamlessly with your systems.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Today, <span className="font-semibold text-accent-orange">1000+ restaurants</span> use Bolo to capture
                missed revenue, reduce labor costs, and focus on delivering the guest experience that made them fall in
                love with the restaurant business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding section-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-md text-center mb-16 text-text-primary">
              Our <span className="text-highlight">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Restaurant-First",
                  desc: "Everything we build is designed with restaurant owners, managers, and team members in mind.",
                },
                {
                  icon: Target,
                  title: "Revenue-Focused",
                  desc: "We measure success by how much revenue our customers capture and how much time they save.",
                },
                {
                  icon: Zap,
                  title: "Always Improving",
                  desc: "We listen to feedback, iterate quickly, and continuously make Bolo smarter and more reliable.",
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={idx}
                    className="bg-card border-2 border-border rounded-2xl p-8 text-center hover:border-accent-blue transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Icon size={48} className="text-accent-blue mx-auto mb-4" />
                    <h3 className="heading-sm mb-3 text-text-primary">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{value.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Powered by MetaPresence */}
        <section className="section-padding section-beige">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border-2 border-accent-blue rounded-3xl p-8 md:p-12"
            >
              <h2 className="heading-md mb-4 text-text-primary">
                Powered by <span className="text-accent-blue">MetaPresence</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Bolo leverages the advanced voice conversation API from{" "}
                <span className="font-semibold">MetaPresence</span> to deliver industry-leading natural language
                understanding and voice quality. This partnership allows us to provide the best voice AI experience for
                restaurants.
              </p>
              <a
                href="https://metapresence.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-orange font-bold transition-colors"
              >
                Learn more about MetaPresence
                <ArrowLeft size={18} className="rotate-180" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
