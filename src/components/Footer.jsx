"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">◉ Bolo</h3>
            <p className="text-gray-400 text-sm mb-3">
              24/7 AI phone answering for restaurants that want to capture every
              call and grow revenue.
            </p>
            <p className="text-gray-500 text-xs">
              Powered by{" "}
              <a
                href="https://metapresence.my"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors font-semibold"
                style={{ color: "var(--accent-blue)" }}
              >
                MetaPresence Voice API
              </a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="hover:text-white transition-colors text-sm"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="hover:text-white transition-colors text-sm"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#dpa"
                  className="hover:text-white transition-colors text-sm"
                >
                  DPA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+92 (325) 882-1216 </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:contact@bolo.metapresence.my"
                  className="text-sm hover:text-white transition-colors"
                >
                  contact@bolo.metapresence.my
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">BIC UET Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            &copy; 2025 Bolo AI. All rights reserved. Powered by MetaPresence.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com/company/metapresence"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
