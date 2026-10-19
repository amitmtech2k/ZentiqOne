"use client";

import React from "react";
import { Check, X, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface ComparisonMatrixProps {
  onOpenConsultation?: () => void;
}

const COMPARISON_ROWS = [
  {
    feature: "Time to Market (Idea to Production)",
    traditional: "9 – 14 Months of custom build & trial",
    zentiq: "4 – 8 Weeks via proven modular components",
    advantage: "6x Faster"
  },
  {
    feature: "NPCI, UPI & Bank Certifications",
    traditional: "High risk of security & audit rejection",
    zentiq: "Pre-certified architectures & hands-on audit support",
    advantage: "Zero Audit Risk"
  },
  {
    feature: "Acquirer & Gateway Failover",
    traditional: "Single bank lock-in, vulnerable to downtime",
    zentiq: "Multi-gateway dynamic routing (Razorpay, Cashfree, Easebuzz)",
    advantage: "99.99% Uptime"
  },
  {
    feature: "RBI & PCI-DSS Compliance Readiness",
    traditional: "Complex compliance retrofitted after build",
    zentiq: "Designed into base architecture from day one",
    advantage: "Compliant Day 1"
  },
  {
    feature: "Reconciliation & Escrow Split Ledger",
    traditional: "Manual batch scripts prone to leakage",
    zentiq: "Real-time automated tripartite ledger & dispute tracking",
    advantage: "Automated Ledger"
  },
  {
    feature: "24/7 Operations & Telemetry",
    traditional: "Requires expensive internal NOC team",
    zentiq: "24x7 Synthetic transaction pings & dedicated SLA",
    advantage: "Turnkey Ops"
  },
  {
    feature: "Total Cost of Ownership (TCO)",
    traditional: "High recurring engineering & rework costs",
    zentiq: "Up to 55% reduction in overall delivery overhead",
    advantage: "55% Cost Saved"
  }
];

export default function ComparisonMatrix({ onOpenConsultation }: ComparisonMatrixProps) {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FD7902] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Strategic Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build From Scratch vs. <span className="text-[#FD7902]">ZentiqOne</span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-700">
            Why leading banks, FinTechs, and enterprises choose our specialized engineering platform over general software development.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="fintech-card rounded-3xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-xs uppercase font-mono font-extrabold text-slate-200">
                  <th className="py-5 px-6 min-w-[240px]">Platform Capability</th>
                  <th className="py-5 px-6 min-w-[260px] text-slate-300">Generic In-House Build</th>
                  <th className="py-5 px-6 min-w-[300px] bg-[#FD7902] text-white">
                    With ZentiqOne Platform
                  </th>
                  <th className="py-5 px-6 min-w-[140px] text-right">Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4.5 px-6 font-extrabold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4.5 px-6 text-slate-800 font-medium flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4.5 px-6 bg-orange-50/40 font-bold text-slate-900 border-x border-orange-200/50">
                      <div className="flex items-start gap-2.5 text-slate-900 font-bold">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.zentiq}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-right font-extrabold text-[#FD7902]">
                      <span className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-3 py-1 rounded-full text-xs font-mono font-extrabold shadow-xs">
                        {row.advantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="bg-[#FAFBFC] p-6 sm:p-7 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-800 font-bold">
              Eliminate technical debt and launch with pre-certified FinTech architecture.
            </div>
            {onOpenConsultation ? (
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-gradient-to-r from-[#FD7902] via-[#FF8A1E] to-[#FD7902] hover:brightness-110 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-[#FD7902] via-[#FF8A1E] to-[#FD7902] hover:brightness-110 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

