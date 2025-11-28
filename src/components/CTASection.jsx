"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CalendarModal from "./CalendarModal"

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="section-padding overflow-hidden relative"
        style={{ background: "linear-gradient(to right, var(--accent-orange), #fbbf24)" }}
        id="demo"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 cta-content"
          >
            <h2 className="heading-lg text-black">
              <span className="text-gray-700">Ready to reclaim your</span>{" "}
              <span className="font-bold text-black">lost revenue?</span>
            </h2>

            <p className="text-xl text-gray-900 leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-gray-900">Join 1000+ restaurants</span> that are already using Bolo to
              capture missed orders, reduce labor costs, and grow revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsCalendarOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Phone size={20} />
                Schedule a Demo
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Try Voice Demo
              </button>
            </div>

            <motion.div
              className="pt-8 text-sm text-gray-900 font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <p>No credit card required • Takes 15 minutes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </>
  )
}
