"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Sparkles
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenConsultation?: () => void;
}

export default function RoiCalculator({ onOpenConsultation }: RoiCalculatorProps) {
  const [monthlyVolumeCr, setMonthlyVolumeCr] = useState<number>(10);
  const [paymentMix, setPaymentMix] = useState<"standard" | "upi-heavy" | "marketplace">("standard");

  const recoveredTransactionsValue = Math.round(monthlyVolumeCr * 0.038 * 100) / 100;
  const devMonthsSaved = monthlyVolumeCr > 20 ? 8 : 6;
  const devHoursSaved = devMonthsSaved * 160 * 3;
  const reconSavingsPercent = paymentMix === "marketplace" ? "85%" : "70%";

  return (
    <section id="calculator" className="py-24 mesh-gradient-section border-b border-slate-200 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FD7902] mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>ROI &amp; Efficiency Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your <span className="text-[#FD7902]">Time &amp; Capital Savings</span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-700">
            Estimate how much engineering time, transaction recovery, and operational overhead you save by building on ZentiqOne.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="fintech-card rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAFBFC]">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Volume Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold text-slate-900">
                  Target Monthly Transaction Volume (GMV)
                </label>
                <span className="text-xl font-extrabold text-[#FD7902] font-mono bg-white px-4 py-1.5 rounded-xl border border-orange-200 shadow-sm">
                  ₹ {monthlyVolumeCr} Crore / mo
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={monthlyVolumeCr}
                onChange={(e) => setMonthlyVolumeCr(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FD7902]"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono font-bold">
                <span>₹ 1 Cr</span>
                <span>₹ 25 Cr</span>
                <span>₹ 50 Cr</span>
                <span>₹ 100 Cr+</span>
              </div>
            </div>

            {/* Architecture Selector */}
            <div>
              <label className="text-sm font-extrabold text-slate-900 block mb-2.5">
                Select Your Architecture Model
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMix("standard")}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    paymentMix === "standard"
                      ? "bg-white border-[#FD7902] text-slate-900 shadow-md ring-2 ring-orange-500/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Standard Gateway</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Cards &amp; NetBanking</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMix("upi-heavy")}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    paymentMix === "upi-heavy"
                      ? "bg-white border-[#FD7902] text-slate-900 shadow-md ring-2 ring-orange-500/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">UPI 2.0 &amp; QR</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Real-Time Rails</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMix("marketplace")}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    paymentMix === "marketplace"
                      ? "bg-white border-[#FD7902] text-slate-900 shadow-md ring-2 ring-orange-500/20"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Marketplace Escrow</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Vendor Payouts</div>
                </button>
              </div>
            </div>

            {/* Checklist of included optimizations */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase text-slate-500">
                Included Engine Optimizations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FD7902]" />
                  <span>Sub-150ms authorization switch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FD7902]" />
                  <span>Auto retry &amp; cascading failover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FD7902]" />
                  <span>Automated T+0 / T+1 escrow ledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FD7902]" />
                  <span>Zero code rewrite during PA growth</span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-6 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase text-slate-300">
                  <Zap className="w-4 h-4 text-[#FD7902]" />
                  <span>Estimated Value Generated</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  High Impact Tier
                </span>
              </div>

              {/* 4 Metric Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-[#0E1524] border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Recovered Dropouts (Yearly)</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">
                    ₹ {Math.round(recoveredTransactionsValue * 12 * 10) / 10} Cr
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Via smart least-cost routing &amp; failover
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E1524] border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                    <Clock className="w-4 h-4 text-[#FFA858]" />
                    <span>Time to Market Accelerated</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">
                    {devMonthsSaved} Months
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    ~{devHoursSaved} engineering hours saved
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E1524] border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Reconciliation Efficiency</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">
                    {reconSavingsPercent} Less
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Automated multi-bank charge matching
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E1524] border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                    <Sparkles className="w-4 h-4 text-[#FFA858]" />
                    <span>Compliance Readiness</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono mt-1">
                    Day 1
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    RBI PA/PG &amp; PCI-DSS aligned blueprint
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-300 font-medium">
                Want an exact commercial roadmap for your platform?
              </span>
              {onOpenConsultation ? (
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#FD7902] via-[#FF8A1E] to-[#FD7902] hover:brightness-110 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Get Detailed Scoping Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#FD7902] via-[#FF8A1E] to-[#FD7902] hover:brightness-110 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Get Detailed Scoping Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

