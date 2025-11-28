import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import CalendlyWidget from "../components/CalendlyWidget";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      <Navbar />
      <HeroSection />
      <Features />
      <CallToAction />
      <CalendlyWidget />
      <Footer />
    </main>
  );
}
