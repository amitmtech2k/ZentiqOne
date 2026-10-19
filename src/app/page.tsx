"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import BankRailMarquee from "@/components/BankRailMarquee";
import WhyZentiqOne from "@/components/WhyZentiqOne";
import IndustriesSection from "@/components/IndustriesSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsTechStack from "@/components/SolutionsTechStack";
import LearnHubSection from "@/components/LearnHubSection";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("payment-platform-development");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("consultation") === "true" || 
        params.get("openConsultation") === "true" || 
        params.get("open") === "true" ||
        window.location.hash === "#consultation"
      ) {
        setIsConsultationOpen(true);
      }
    }
  }, []);

  const handleOpenConsultation = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 relative selection:bg-orange-100 selection:text-slate-900">
      {/* Sticky Frosted Header */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation()} 
        onSelectService={handleSelectService}
      />

      {/* 1. Home Section */}
      <HeroSection 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* Core Architectural Capabilities */}
      <StatsBar />

      {/* Bank & Network Rail Marquee */}
      <BankRailMarquee />

      {/* 2. Solutions & Services (Specialized Offerings & Industry Verticals) */}
      <ServicesSection 
        onOpenConsultation={() => handleOpenConsultation(selectedServiceId)}
        selectedServiceId={selectedServiceId}
      />

      <IndustriesSection 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* 3. Why ZentiqOne (Pillars, Regulatory Clarity & Turnkey Delivery Lifecycle together) */}
      <WhyZentiqOne onOpenConsultation={() => handleOpenConsultation()} />

      <SolutionsTechStack onOpenConsultation={() => handleOpenConsultation()} />

      {/* 4. Payment Service Partners */}
      <PartnersSection 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* 5. Resources (Knowledge Hub & FAQs) */}
      <LearnHubSection />

      <FaqSection />

      {/* Footer & Ready to Build CTA Band */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultation()} 
        onSelectService={handleSelectService}
      />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </main>
  );
}
