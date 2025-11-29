"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalendarModal from "./CalendarModal";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        // opacity: 0,
        y: 50,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        scrollTrigger: {
          trigger: ".hero-content",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        duration: 1.2,
        // opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="section-padding section-light min-h-screen flex items-center justify-center overflow-hidden relative"
        id="home"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hero-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-300 w-fit"
              >
                <Phone size={18} style={{ color: "var(--accent-blue)" }} />
                <span className="text-sm font-semibold">
                  Join 1000+ restaurants
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="heading-lg hero-title"
              >
                <span className="text-black">24/7 AI Phone Answering for</span>{" "}
                <span
                  style={{ color: "var(--accent-orange)" }}
                  className="font-bold"
                >
                  Restaurants
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl leading-relaxed max-w-2xl"
              >
                <span className="text-gray-600">
                  Never miss another call. Bolo handles
                </span>{" "}
                <span className="font-semibold text-black">
                  orders, reservations
                </span>{" "}
                <span className="text-gray-600">and</span>{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent-orange)" }}
                >
                  customer inquiries 24/7
                </span>{" "}
                <span className="text-gray-600">
                  while your team focuses on guests. Convert missed revenue into
                  real growth.
                </span>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => setIsCalendarOpen(true)}
                  className="button-primary flex items-center justify-center gap-2"
                >
                  Schedule a Demo
                  <ArrowRight size={18} />
                </button>
                <a href="#try" className="button-secondary">
                  Try Voice Demo
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-sm text-gray-600 pt-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "var(--accent-blue)",
                        opacity: 0.2,
                      }}
                    >
                      <span className="font-bold text-xs">PN</span>
                    </div>
                  ))}
                </div>
                <span>Trusted by restaurants across the country</span>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <div className="relative w-72 h-full max-h-96">
                <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10"></div>

                  <div className="pt-8 h-full bg-gradient-to-b from-yellow-400 to-yellow-50 px-4 py-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/50 flex-shrink-0"></div>
                        <div className="bg-white/70 rounded-2xl px-4 py-3 max-w-xs">
                          <p className="text-sm font-semibold text-gray-900">
                            Hello! Welcome to Bolo's Pizza. How can I help?
                          </p>
                        </div>
                      </div>

                      <div className="flex items-end justify-end gap-3">
                        <div
                          className="rounded-2xl px-4 py-3 max-w-xs text-white font-semibold"
                          style={{ backgroundColor: "var(--accent-blue)" }}
                        >
                          <p className="text-sm">I'd like to place an order</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/50 flex-shrink-0"></div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/50 flex-shrink-0"></div>
                        <div className="bg-white/70 rounded-2xl px-4 py-3 max-w-xs">
                          <p className="text-sm font-semibold text-gray-900">
                            Perfect! What would you like today?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full bg-white/50 rounded-full px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
                        disabled
                      />
                      <button
                        className="w-full text-white rounded-full font-semibold py-2 transition-colors hover:opacity-90"
                        style={{ backgroundColor: "var(--accent-orange)" }}
                      >
                        Call Me
                      </button>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -right-8 bottom-8 bg-white border-2 rounded-2xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{ borderColor: "var(--accent-blue)" }}
                >
                  <div className="text-center">
                    <p
                      className="text-xs font-bold"
                      style={{ color: "var(--accent-blue)" }}
                    >
                      LIVE
                    </p>
                    <p className="text-xs font-semibold mt-1">AI Responding</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </>
  );
}
