"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function ServicesPage() {
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
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation()} 
        onSelectService={handleSelectService}
      />

      <div className="pt-24 sm:pt-28">
        <ServicesSection 
          onOpenConsultation={() => handleOpenConsultation(selectedServiceId)}
          selectedServiceId={selectedServiceId}
        />

        <IndustriesSection 
          onOpenConsultation={() => handleOpenConsultation()} 
        />
      </div>

      <Footer 
        onOpenConsultation={() => handleOpenConsultation()} 
        onSelectService={handleSelectService}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </main>
  );
}
