"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DELIVERY_STAGES, TECH_STACK } from "@/data/content";
import { 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Server
} from "lucide-react";

interface SolutionsTechStackProps {
  onOpenConsultation?: () => void;
}

export default function SolutionsTechStack({ onOpenConsultation }: SolutionsTechStackProps) {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="ecosystem" className="py-12 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl mb-8 text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering &amp; <span className="text-[#FD7902]">Delivery Lifecycle</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            A structured, bank-grade delivery methodology ensuring accelerated time-to-market, zero integration surprises, and regulatory alignment.
          </p>
        </motion.div>

        {/* 3-Phase Delivery Process Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          className="bg-[#FAFBFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8"
        >
          
          {/* Header & Governance */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-2 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#FD7902] uppercase tracking-wider">
                Full-Lifecycle Engineering Governance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                The Turnkey Delivery Framework
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Vendor Hand-offs &bull; Single Accountability</span>
            </div>
          </div>

          {/* 3 Phase Interactive Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {DELIVERY_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FD7902] border-[#FD7902] text-white shadow-md shadow-orange-500/20 scale-[1.01]"
                      : "bg-white border-slate-200 text-slate-800 hover:border-orange-200 hover:bg-orange-50/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? "text-white" : "text-[#FD7902]"}`}>
                      Phase {stage.num}
                    </span>
                    {isSelected && <Sparkles className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div className={`text-sm font-bold leading-tight ${isSelected ? "text-white" : "text-slate-900"}`}>
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Detail Card */}
          <div className="mt-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#FD7902]">
                Phase {DELIVERY_STAGES[activeStage]?.num || "01"}: {DELIVERY_STAGES[activeStage]?.title}
              </div>
              <p className="text-sm text-slate-700 mt-1 font-normal leading-relaxed">
                {DELIVERY_STAGES[activeStage]?.desc}
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-800 shrink-0 flex items-center gap-1.5 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full Engineering &amp; Audit Governance</span>
            </div>
          </div>

        </motion.div>

        {/* Compact 1-Row Technology & Protocol Standards Bar (Option 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col gap-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-50 text-[#FD7902] border border-orange-200">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Enterprise Technology &amp; Security Protocol Standards
                </h4>
                <p className="text-xs text-slate-700 font-medium">
                  High-throughput, cloud-native tech stack engineered for sub-50ms latency and 99.99% service availability.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Core Backend */}
            <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-slate-200/80">
              <div className="text-xs font-mono font-bold uppercase text-[#FD7902] mb-2.5 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Backend &amp; Data Layer</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Java / Spring Boot", ".NET Core", "Node.js", "PostgreSQL", "Redis"].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Financial Protocols */}
            <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-slate-200/80">
              <div className="text-xs font-mono font-bold uppercase text-[#FD7902] mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Protocols &amp; Banking Rails</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["ISO 8583", "ISO 20022", "NPCI UPI 2.0", "eNACH / BBPS", "OAuth 2.0 / mTLS"].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-slate-200/80">
              <div className="text-xs font-mono font-bold uppercase text-[#FD7902] mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Cloud &amp; DevOps</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["AWS / Azure Multi-Region", "Kubernetes", "Docker", "Terraform", "HSM Key Vault"].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Consultation Action Band */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-[#FAFBFC] border border-slate-200/90 gap-4"
        >
          <div className="text-sm text-slate-800 text-center sm:text-left">
            <strong className="text-slate-900 font-bold">Planning a payment gateway switch or CBS integration?</strong> Talk to our lead software architects.
          </div>
          {onOpenConsultation ? (
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-[#FD7902] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href="/contact"
              className="px-5 py-2.5 bg-[#FD7902] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>

      </div>
    </section>
  );
}
