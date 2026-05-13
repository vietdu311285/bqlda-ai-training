"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import HowToParticipate from "@/components/HowToParticipate";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudentBenefits from "@/components/StudentBenefits";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div id="top">
        <Hero />
      </div>
      <TrustSection />
      <BenefitsSection />
      <DemoSection />
      <HowToParticipate />
      <InstructorSection />
      <TestimonialsSection />
      <StudentBenefits />
      <FAQSection />
      <div id="dang-ky">
        <RegistrationForm />
      </div>
      <FinalCTA />
      <Footer />
      <StickyBottomCTA />
    </main>
  );
}
