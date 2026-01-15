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
              className="relative h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center"
            >
              {/* Floating Food Items - Larger and More Visible */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Pizza Slice 1 */}
                <motion.div
                  className="absolute top-8 left-2 text-5xl md:text-6xl lg:text-7xl"
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 12, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🍕
                </motion.div>
                
                {/* Pizza Slice 2 */}
                <motion.div
                  className="absolute top-28 right-4 text-4xl md:text-5xl lg:text-6xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -18, 18, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  🍕
                </motion.div>

                {/* Burger */}
                <motion.div
                  className="absolute bottom-16 left-4 text-4xl md:text-5xl lg:text-6xl"
                  animate={{
                    y: [0, -22, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  🍔
                </motion.div>

                {/* French Fries */}
                <motion.div
                  className="absolute bottom-28 right-8 text-3xl md:text-4xl lg:text-5xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  🍟
                </motion.div>

                {/* Taco */}
                <motion.div
                  className="absolute top-1/2 -left-2 text-3xl md:text-4xl lg:text-5xl"
                  animate={{
                    x: [0, 12, -12, 0],
                    y: [0, -12, 0],
                    rotate: [0, 18, -18, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  🌮
                </motion.div>

                {/* Hot Dog */}
                <motion.div
                  className="absolute top-1/3 -right-2 text-3xl md:text-4xl lg:text-5xl"
                  animate={{
                    x: [0, -10, 10, 0],
                    y: [0, -18, 0],
                    rotate: [0, -12, 12, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                >
                  🌭
                </motion.div>

                {/* Coffee */}
                <motion.div
                  className="absolute top-12 right-1/4 text-2xl md:text-3xl lg:text-4xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  ☕
                </motion.div>

                {/* Donut */}
                <motion.div
                  className="absolute bottom-36 left-1/4 text-2xl md:text-3xl lg:text-4xl"
                  animate={{
                    y: [0, -14, 0],
                    rotate: [0, 25, -25, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  🍩
                </motion.div>
              </div>

              <div className="relative w-64 md:w-72 lg:w-80 h-full">
                {/* iPhone Frame - Smaller and Better */}
                <div className="absolute inset-0 bg-black rounded-[2.5rem] shadow-2xl overflow-hidden border-6 border-gray-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Status Bar with Food Theme */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 flex items-center justify-between px-5 text-white text-xs font-medium z-10 shadow-lg">
                    <span className="font-semibold">10:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Content with Food Theme Background */}
                  <div className="pt-12 h-full bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 px-4 py-5 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative Food Pattern Background */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute top-8 left-8 text-5xl">🍕</div>
                      <div className="absolute top-28 right-12 text-4xl">🍔</div>
                      <div className="absolute bottom-28 left-16 text-4xl">🍟</div>
                      <div className="absolute bottom-16 right-10 text-5xl">🌮</div>
                    </div>

                    {/* Messages */}
                    <div className="space-y-3 flex-1 overflow-y-auto relative z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 flex items-center justify-center shadow-md">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-xl px-3 py-2 max-w-xs shadow-md border border-orange-100">
                          <p className="text-xs font-semibold text-gray-900">
                            Hello! Welcome to Bolo. How can I help you today? 🍕
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-end justify-end gap-2"
                      >
                        <div
                          className="rounded-xl px-3 py-2 max-w-xs text-white text-xs font-semibold shadow-md"
                          style={{ backgroundColor: "var(--accent-orange)" }}
                        >
                          <p>I'd like to place an order 🍔</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex-shrink-0 shadow-md"></div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 flex items-center justify-center shadow-md">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-xl px-3 py-2 max-w-xs shadow-md border border-orange-100">
                          <p className="text-xs font-semibold text-gray-900">
                            Perfect! What would you like? 🍕🍔🌮
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-end justify-end gap-2"
                      >
                        <div
                          className="rounded-xl px-3 py-2 max-w-xs text-white text-xs font-semibold shadow-md"
                          style={{ backgroundColor: "var(--accent-orange)" }}
                        >
                          <p>I'll take a large pizza! 🍕</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex-shrink-0 shadow-md"></div>
                      </motion.div>
                    </div>

                    {/* Input Area with Food Theme */}
                    <div className="space-y-2 pt-2 border-t-2 border-orange-200 relative z-10">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Type your order... 🍕"
                          className="flex-1 bg-white/90 rounded-full px-4 py-2 text-xs placeholder-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-orange-200 shadow-sm"
                          disabled
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: "var(--accent-orange)" }}
                          disabled
                        >
                          <Phone className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Badge - Enhanced */}
                <motion.div
                  className="absolute -right-10 bottom-10 bg-white border-3 rounded-2xl p-4 shadow-2xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{ borderColor: "var(--accent-orange)", borderWidth: "3px" }}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500 mx-auto mb-1.5 shadow-md"
                      animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <p
                      className="text-xs font-bold"
                      style={{ color: "var(--accent-orange)" }}
                    >
                      LIVE
                    </p>
                    <p className="text-[10px] font-semibold mt-1 text-gray-700">
                      AI Responding
                    </p>
                    <p className="text-[9px] text-gray-500 mt-0.5">24/7 Service</p>
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
