import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import USPSection from "@/components/USPsection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import ThermalInsulationTypes from "@/components/ThermalInsulationTypes";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ThermalInsulationTypes />
      <USPSection />
      <Testimonials />
      <BlogSection />
      <CallToActionBanner />
      <FAQs />
      <Footer />
    </main>
  );
}
