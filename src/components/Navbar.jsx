"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              ◉ Bolo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#about"
              className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#careers"
              className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium"
            >
              Careers
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="text-text-primary hover:text-accent-blue font-medium"
            >
              Login
            </a>
            <a href="#demo" className="button-primary text-sm">
              Schedule a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-text-primary hover:text-accent-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#about"
              className="block px-4 py-3 text-text-primary hover:text-accent-blue"
            >
              About
            </a>
            <a
              href="#careers"
              className="block px-4 py-3 text-text-primary hover:text-accent-blue"
            >
              Careers
            </a>
            <div className="px-4 py-3 flex flex-col gap-3">
              <a href="#login" className="text-text-primary font-medium">
                Login
              </a>
              <a href="#demo" className="button-primary text-center text-sm">
                Schedule a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
