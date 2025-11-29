"use client";

import { useEffect, useState } from "react";
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
        </div>
      );
  }
}

export default App;
