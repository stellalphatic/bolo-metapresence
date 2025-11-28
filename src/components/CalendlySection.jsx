import { useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section id="book-call" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalendarIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Book Your <span className="text-gradient">Demo Call</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a convenient time to speak with our team. We'll learn about
            your needs and show you how Bolo AI can help.
          </p>
        </div>

        {/* Replace YOUR_CALENDLY_URL with your actual Calendly link */}
        <div
          className="calendly-inline-widget rounded-2xl shadow-2xl overflow-hidden"
          data-url="https://calendly.com/YOUR_CALENDLY_URL?hide_gdpr_banner=1&primary_color=2563eb"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
