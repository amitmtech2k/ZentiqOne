"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function PartnersPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

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

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 relative selection:bg-orange-100 selection:text-slate-900">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <div className="pt-24 sm:pt-28">
        <PartnersSection onOpenConsultation={handleOpenConsultation} />
      </div>

      <Footer onOpenConsultation={handleOpenConsultation} />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
