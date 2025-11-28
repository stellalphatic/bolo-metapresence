"use client";

import { motion } from "framer-motion";
import { AlertCircle, DollarSign, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-card", {
        scrollTrigger: {
          trigger: ".problem-card",
          start: "top 70%",
          toggleActions: "play none none none",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: AlertCircle,
      title: "Restaurants miss up to 30% of calls",
      subtitle: "During peak hours",
      bgColor: "var(--accent-yellow)",
      textColor: "#b84500",
    },
    {
      icon: DollarSign,
      title: "Every call is $25–$50",
      subtitle: "Average ticket value lost",
      bgColor: "var(--accent-orange)",
      textColor: "#fff",
    },
    {
      icon: Users,
      title: "Staff pulled off the floor",
      subtitle: "Bad guest experience",
      bgColor: "var(--accent-blue)",
      textColor: "#fff",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding section-beige"
      id="problems"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="text-gray-600">Every missed call</span>{" "}
            <span style={{ color: "var(--accent-orange)" }}>=</span>{" "}
            <span className="text-black font-bold">Lost revenue</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            <span className="font-semibold text-black">
              The restaurant industry
            </span>{" "}
            faces a critical challenge during peak hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white border-2 rounded-2xl p-8 transition-all duration-300 problem-card shadow-md hover:shadow-xl"
                style={{ borderColor: "var(--accent-blue)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: problem.bgColor }}
                >
                  <Icon size={32} style={{ color: problem.textColor }} />
                </div>
                <h3 className="heading-sm mb-2 text-black">{problem.title}</h3>
                <p className="text-gray-600">{problem.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
