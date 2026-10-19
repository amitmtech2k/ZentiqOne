"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES, IndustryVertical } from "@/data/content";
import { 
  Building2, 
  Landmark, 
  Coins, 
  Sparkles, 
  Boxes, 
  CreditCard, 
  HeartHandshake, 
  Shield, 
  Building, 
  ShoppingCart, 
  Globe,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Clock,
  ShieldCheck,
  Layers,
  ChevronRight
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenConsultation?: () => void;
}

type CategoryType = "All" | "Banking & Credit" | "Payment Rails & FinTech" | "Enterprise & Commerce";

export default function IndustriesSection({ onOpenConsultation }: IndustriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [activeVerticalId, setActiveVerticalId] = useState<string>(INDUSTRIES[0].id);

  const categories: CategoryType[] = [
    "All",
    "Banking & Credit",
    "Payment Rails & FinTech",
    "Enterprise & Commerce"
  ];

  const filteredIndustries = selectedCategory === "All" 
    ? INDUSTRIES 
    : INDUSTRIES.filter((ind) => ind.category === selectedCategory);

  const activeVertical = INDUSTRIES.find((ind) => ind.id === activeVerticalId) || INDUSTRIES[0];

  const getIndustryIcon = (name: string, size = "w-4 h-4") => {
    switch (name) {
      case "Commercial & SFBs":
      case "Banks": 
        return <Building2 className={`${size} text-[#FD7902]`} />;
      case "Urban Co-op Banks": 
        return <Landmark className={`${size} text-blue-600`} />;
      case "NBFCs & Microfinance":
      case "NBFCs": 
        return <Coins className={`${size} text-emerald-600`} />;
      case "FinTechs & Neobanks":
      case "FinTechs": 
        return <Sparkles className={`${size} text-[#FD7902]`} />;
      case "Payment Aggregators": 
        return <Boxes className={`${size} text-purple-600`} />;
      case "Payment Gateways": 
        return <CreditCard className={`${size} text-amber-600`} />;
      case "Insurance Companies":
      case "Insurance": 
        return <HeartHandshake className={`${size} text-rose-600`} />;
      case "Government & PSUs":
      case "Government": 
        return <Shield className={`${size} text-cyan-600`} />;
      case "Large Enterprises": 
        return <Building className={`${size} text-indigo-600`} />;
      case "E-Commerce & Marketplaces":
      case "E-Commerce": 
        return <ShoppingCart className={`${size} text-[#FD7902]`} />;
      case "SaaS Platforms": 
        return <Globe className={`${size} text-blue-600`} />;
      default: 
        return <Building2 className={`${size} text-[#FD7902]`} />;
    }
  };

  return (
    <section id="industries" className="py-12 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4"
        >
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industries <span className="text-[#FD7902]">We Serve</span>
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-700">
              Select an industry vertical to explore tailored architectural modules, supported protocols, and compliance blueprints.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/80 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstInCat = cat === "All" ? INDUSTRIES[0] : INDUSTRIES.find(i => i.category === cat);
                  if (firstInCat) setActiveVerticalId(firstInCat.id);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-700 hover:text-slate-900 font-medium"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Master-Detail Interactive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Vertical List Selector (Slide from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-2 max-h-[560px] overflow-y-auto pr-1"
          >
            {filteredIndustries.map((ind) => {
              const isActive = activeVertical.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveVerticalId(ind.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-150 flex items-center justify-between group cursor-pointer border ${
                    isActive
                      ? "bg-orange-50/90 border-[#FD7902]/60 border-l-4 border-l-[#FD7902] shadow-xs"
                      : "bg-[#FAFBFC] border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl border transition-colors shrink-0 ${
                      isActive ? "bg-white border-orange-200 shadow-2xs" : "bg-white border-slate-200"
                    }`}>
                      {getIndustryIcon(ind.name, "w-4 h-4")}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-sm font-bold truncate leading-tight ${
                        isActive ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                      }`}>
                        {ind.name}
                      </div>
                      <div className="text-[11px] text-slate-700 font-medium truncate mt-0.5">
                        {ind.sub}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? "text-[#FD7902] translate-x-0.5" : "text-slate-400 group-hover:text-slate-600"
                  }`} />
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Live Architecture Detail Panel (Slide from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVertical.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="h-full bg-gradient-to-br from-[#FFFDFB] via-white to-[#FFF9F3] rounded-3xl border border-orange-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-orange-100">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-white border border-orange-200 shadow-2xs">
                        {getIndustryIcon(activeVertical.name, "w-6 h-6")}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#FD7902] tracking-wide uppercase font-mono">
                          {activeVertical.category}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                          {activeVertical.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Turnkey Architecture</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                    {activeVertical.desc}
                  </p>

                  {/* Core Architecture Modules */}
                  <div className="mt-6">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#FD7902]" />
                      <span>Turnkey Architecture Modules &bull; Built by ZentiqOne</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeVertical.modules.map((mod, mIdx) => (
                        <div 
                          key={mIdx}
                          className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FD7902] shrink-0 mt-0.5" />
                          <span className="text-xs font-bold text-slate-900 leading-snug">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Protocols & Supported Rails */}
                  <div className="mt-5 pt-4 border-t border-orange-100 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1 mr-1">
                      <Cpu className="w-3 h-3 text-[#FD7902]" />
                      <span>Protocols:</span>
                    </span>
                    {activeVertical.protocols.map((proto, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="px-2.5 py-0.5 rounded-md bg-orange-50 text-[#FD7902] border border-orange-200/70 text-[11px] font-mono font-bold"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>

                  {/* Compliance Assurance */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5 text-xs text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">{activeVertical.compliance}</span>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-6 pt-5 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-700 font-bold text-center sm:text-left">
                    Direct architectural engagement &bull; Enterprise NDA
                  </span>
                  {onOpenConsultation ? (
                    <button
                      onClick={onOpenConsultation}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#FD7902] hover:bg-[#E36A00] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Schedule {activeVertical.name} Architecture Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href="/contact"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#FD7902] hover:bg-[#E36A00] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Schedule {activeVertical.name} Architecture Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
