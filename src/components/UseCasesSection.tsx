"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  ShoppingCart, 
  Coins, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers 
} from "lucide-react";

interface UseCase {
  id: string;
  title: string;
  badge: string;
  icon: string;
  problem: string;
  solution: string;
  steps: {
    title: string;
    detail: string;
  }[];
  outcomes: string[];
}

const USE_CASES: UseCase[] = [
  {
    id: "nbfc-lending",
    title: "Digital NBFC & Automated Lending Suite",
    badge: "Digital Lending",
    icon: "Coins",
    problem: "Manual paperwork, high drop-off during KYC, and delayed 24-48hr loan disbursal cycles.",
    solution: "End-to-end digital lending pipeline with paperless Video KYC, instant credit scoring, automated eNACH mandate generation, and instant T+0 disbursals via IMPS.",
    steps: [
      { title: "Paperless Onboarding", detail: "Aadhaar OTP + PAN verification + Live liveness score under 60 seconds." },
      { title: "Underwriting & Bureau Pull", detail: "Real-time CIBIL / Experian pull and automated rule-engine evaluation." },
      { title: "e-Mandate Setup", detail: "NPCI eNACH registration for auto-debit collection on repayment due dates." },
      { title: "Instant IMPS Disbursal", detail: "Direct host-to-host bank API triggers real-time loan transfer to borrower." }
    ],
    outcomes: [
      "Loan disbursal time reduced from 24 hours to 3 minutes",
      "94% automated underwriting with zero human intervention",
      "Sub-0.5% default on automated eNACH mandate collections"
    ]
  },
  {
    id: "marketplace-escrow",
    title: "Marketplace Multi-Vendor Split & Escrow",
    badge: "E-Commerce & Platforms",
    icon: "ShoppingCart",
    problem: "Handling thousands of third-party sellers while maintaining strict RBI Nodal/Escrow regulations and manual commission reconciliation.",
    solution: "Automated escrow split routing that captures single checkout payments and splits funds to respective vendor sub-wallets, auto-deducting platform commissions.",
    steps: [
      { title: "Unified Checkout", detail: "Customer pays for multi-seller cart via UPI, Cards, or NetBanking." },
      { title: "Escrow Inflow", detail: "Gross transaction amount securely enters the RBI-regulated Nodal Account." },
      { title: "Automated Split Engine", detail: "ZentiqOne calculates commission, taxes, and vendor payout allocations." },
      { title: "Instant Batch Settlement", detail: "Settles to seller bank accounts on order delivery confirmation (T+0/T+1)." }
    ],
    outcomes: [
      "100% compliant with RBI Master Directions for Intermediaries",
      "Zero manual ledger reconciliation between bank float and vendors",
      "Real-time dispute hold and automated partial refund engine"
    ]
  },
  {
    id: "ucb-modernization",
    title: "Cooperative Bank CBS to UPI 2.0 Modernization",
    badge: "Bank Transformation",
    icon: "Building2",
    problem: "Legacy on-premise Core Banking Systems (CBS) unable to connect to high-speed modern UPI and Mobile Banking APIs.",
    solution: "A high-performance middleware connector that sits between legacy ISO 8583 banking switches and modern cloud-native REST APIs, powering mobile banking & UPI 2.0.",
    steps: [
      { title: "Legacy CBS Connector", detail: "Translates proprietary core banking protocols into secure REST/JSON APIs." },
      { title: "NPCI Direct Switch Integration", detail: "Connects the bank to NPCI UPI 2.0 rails for P2P and P2M transactions." },
      { title: "White-Label Mobile App", detail: "Modern, biometric-secured mobile banking application for retail account holders." },
      { title: "24/7 Monitored Gateway", detail: "Synthetic latency monitoring ensuring 99.99% core switch availability." }
    ],
    outcomes: [
      "Live on UPI 2.0 in under 6 weeks without changing core CBS vendor",
      "70% increase in digital retail account openings via mobile app",
      "Sub-200ms transaction response time across high-traffic UPI windows"
    ]
  }
];

export default function UseCasesSection() {
  const [activeUseCaseId, setActiveUseCaseId] = useState<string>("nbfc-lending");
  const activeCase = USE_CASES.find((c) => c.id === activeUseCaseId) || USE_CASES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "nbfc-lending": return <Coins className="w-5 h-5" />;
      case "marketplace-escrow": return <ShoppingCart className="w-5 h-5" />;
      case "ucb-modernization": return <Building2 className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="use-cases" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FD7902] mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>Proven Architecture Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How ZentiqOne Powers <span className="text-[#FD7902]">Modern FinTechs</span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-700">
            Real-world enterprise architectures engineered to solve complex operational, regulatory, and scalability challenges.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
          {USE_CASES.map((uc) => {
            const isSelected = uc.id === activeUseCaseId;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveUseCaseId(uc.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FD7902] text-white shadow-md shadow-orange-500/25"
                    : "bg-[#FAFBFC] text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-orange-200"
                }`}
              >
                {getIcon(uc.id)}
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Card */}
        <div className="bg-[#FAFBFC] rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#FD7902] tracking-wider">
                {activeCase.badge} Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {activeCase.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-xl border border-emerald-200 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Production-Ready Architecture</span>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
              <div className="text-xs font-bold uppercase text-rose-700 mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>The Operational Bottleneck</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {activeCase.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <div className="text-xs font-bold uppercase text-emerald-700 mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>The ZentiqOne Engineering Solution</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* 4 Step Workflow */}
          <div className="my-8">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">
              End-to-End Architectural Pipeline
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeCase.steps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-200 transition-colors">
                  <div className="text-xs font-mono font-bold text-[#FD7902] mb-1">
                    Step {idx + 1}
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 mb-1.5">
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measured Outcomes */}
          <div className="pt-6 border-t border-slate-200">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-3.5">
              Measured Business Outcomes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {activeCase.outcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FD7902] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
