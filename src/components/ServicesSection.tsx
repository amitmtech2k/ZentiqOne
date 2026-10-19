"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SERVICES_DATA, 
  ServiceItem 
} from "@/data/content";
import { 
  CreditCard, 
  Building2, 
  Network, 
  Store, 
  Briefcase, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation?: () => void;
  selectedServiceId?: string;
}

export default function ServicesSection({ onOpenConsultation, selectedServiceId }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || SERVICES_DATA[0].id
  );

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case "payment-platform-development": return <CreditCard className={className} />;
      case "banking-solutions": return <Building2 className={className} />;
      case "api-integrations": return <Network className={className} />;
      case "merchant-enablement": return <Store className={className} />;
      case "banking-consulting": return <Briefcase className={className} />;
      case "managed-services": return <Cpu className={className} />;
      default: return <CreditCard className={className} />;
    }
  };

  return (
    <section id="services" className="py-12 lg:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      
      {/* Background soft glow and grid */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-b from-orange-400/15 via-amber-300/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <svg 
        className="absolute inset-0 w-full h-full stroke-slate-900/[0.05] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#services-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        {/* Left-Aligned Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mb-8 text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Six Specialized Lines Covering the <span className="text-[#FD7902]">Full FinTech Lifecycle</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            From initial system design &amp; compliance to high-throughput production deployment and ongoing 24/7 management.
          </p>
        </motion.div>

        {/* Master Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Service Selector List (Left 4 cols - Slide from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-2.5"
          >
            {SERVICES_DATA.map((srv) => {
              const isSelected = srv.id === activeServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveServiceId(srv.id)}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl text-left border transition-all duration-200 relative group cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 shadow-lg text-white"
                      : "bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 text-slate-900"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-all shrink-0 ${
                    isSelected
                      ? "bg-[#FD7902] text-white border-[#FD7902] shadow-sm"
                      : "bg-orange-50 text-[#FD7902] border-orange-100 group-hover:bg-[#FD7902] group-hover:text-white"
                  }`}>
                    {getServiceIcon(srv.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-extrabold leading-snug ${isSelected ? "text-white" : "text-slate-900 group-hover:text-[#FD7902]"}`}>
                        {srv.title}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#FD7902] translate-x-1" : "text-slate-400 group-hover:text-slate-700"}`} />
                    </div>
                    <div className={`text-xs line-clamp-1 mt-0.5 font-medium ${isSelected ? "text-slate-200" : "text-slate-700"}`}>
                      {srv.badge}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Active Service Showcase Card (Right 8 cols - Slide from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden"
          >
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3.5 rounded-2xl bg-orange-50 text-[#FD7902] border border-orange-200 shadow-2xs">
                      {getServiceIcon(activeService.id, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FD7902]">
                        {activeService.badge}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  {onOpenConsultation ? (
                    <button
                      onClick={onOpenConsultation}
                      className="px-5 py-2.5 bg-[#FD7902] hover:bg-[#EA580C] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer hover:scale-102"
                    >
                      <span>Build This Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="/contact"
                      className="px-5 py-2.5 bg-[#FD7902] hover:bg-[#EA580C] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-orange-500/20 hover:scale-102"
                    >
                      <span>Build This Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="mt-6 text-base text-slate-800 leading-relaxed font-normal">
                  {activeService.fullDesc}
                </p>

              {/* Feature Checklist */}
              <div className="mt-8">
                <div className="text-xs font-mono font-bold uppercase text-slate-700 mb-3.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FD7902]" />
                  <span>Key Architecture Modules &amp; Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAFBFC] border border-slate-200/80 flex items-start gap-3 text-xs text-slate-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FD7902] shrink-0 mt-0.5" />
                      <span className="font-bold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6">
                <div className="text-xs font-mono font-bold uppercase text-slate-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Business &amp; Technical Edge</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeService.keyBenefits.map((ben, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 font-bold flex items-start gap-2"
                    >
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample API / Architecture Spec Box */}
              {activeService.samplePayload && (
                <div className="mt-6 bg-[#0B1120] rounded-2xl p-4 sm:p-5 border border-slate-800 font-mono text-xs shadow-md">
                  <div className="text-[11px] text-slate-300 uppercase mb-2 flex items-center justify-between border-b border-slate-800 pb-2 font-semibold">
                    <span className="flex items-center gap-2 text-slate-200 font-bold">
                      <Terminal className="w-4 h-4 text-[#FD7902]" />
                      <span>Interface Contract Blueprint</span>
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">JSON-SPEC-V2</span>
                  </div>
                  <pre className="text-orange-200 overflow-x-auto text-xs leading-relaxed">
                    {activeService.samplePayload}
                  </pre>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Bottom Callout banner */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-800 font-bold">
                Looking to build or modernize your {activeService.title.toLowerCase()}?
              </div>
              {onOpenConsultation ? (
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 cursor-pointer"
                >
                  <span>Consult with Platform Lead</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/25"
                >
                  <span>Consult with Platform Lead</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
