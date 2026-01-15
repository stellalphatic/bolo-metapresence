"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import FeaturesSection from "./components/FeaturesSection";
import IntegrationsSection from "./components/IntegrationsSection";
import DashboardSection from "./components/DashboardSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CallModal from "./components/CallModal";
import LoginPage from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import DPAPage from "./pages/DPAPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    document.documentElement.style.scrollBehavior = "smooth";

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  switch (currentPage) {
    case "login":
      return <LoginPage />;
    case "pricing":
      return <PricingPage />;
    case "about":
      return <AboutPage />;
    case "careers":
      return <CareersPage />;
    case "privacy":
      return <PrivacyPage />;
    case "terms":
      return <TermsPage />;
    case "cookies":
      return <CookiesPage />;
    case "dpa":
      return <DPAPage />;
    default:
      return (
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <HeroSection />
            <ProblemsSection />
            <FeaturesSection />
            <IntegrationsSection />
            <DashboardSection />
            <BenefitsSection />
            {/* <TestimonialsSection /> */}
            <FAQSection />
            <CTASection />
          </main>
          <Footer />

          {/* Sticky Call Button */}
          {currentPage === "home" && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCallModalOpen(true)}
              className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center text-white hover:shadow-orange-500/50 transition-all duration-300"
              style={{
                boxShadow: "0 10px 40px rgba(255, 107, 53, 0.4)",
              }}
            >
              <Phone className="w-7 h-7" />
            </motion.button>
          )}

          {/* Call Modal */}
          <CallModal
            isOpen={isCallModalOpen}
            onClose={() => setIsCallModalOpen(false)}
          />
        </div>
      );
  }
}

export default App;
