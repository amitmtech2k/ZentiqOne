"use client";

import React from "react";
import { 
  Building2, 
  CreditCard, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Repeat,
  Sparkles
} from "lucide-react";

const RAILS = [
  { name: "NPCI UPI 2.0", type: "Real-Time Rail", icon: "Smartphone", badgeColor: "border-orange-200 text-[#FD7902] bg-orange-50" },
  { name: "HDFC Bank", type: "Core Acquirer & H2H", icon: "Building2", badgeColor: "border-blue-200 text-blue-700 bg-blue-50" },
  { name: "ICICI Bank", type: "Escrow & Open APIs", icon: "Building2", badgeColor: "border-amber-200 text-amber-700 bg-amber-50" },
  { name: "State Bank of India", type: "National CBS Rail", icon: "Building2", badgeColor: "border-cyan-200 text-cyan-700 bg-cyan-50" },
  { name: "Axis Bank", type: "Nodal Account Partner", icon: "Building2", badgeColor: "border-purple-200 text-purple-700 bg-purple-50" },
  { name: "Visa Direct", type: "Global Card Scheme", icon: "CreditCard", badgeColor: "border-emerald-200 text-emerald-700 bg-emerald-50" },
  { name: "Mastercard 3DS2", type: "Tokenized Cryptograms", icon: "CreditCard", badgeColor: "border-rose-200 text-rose-700 bg-rose-50" },
  { name: "RuPay Global", type: "NPCI Card Switch", icon: "CreditCard", badgeColor: "border-emerald-200 text-emerald-700 bg-emerald-50" },
  { name: "eNACH Mandates", type: "Auto-Debit Recurring", icon: "Repeat", badgeColor: "border-indigo-200 text-indigo-700 bg-indigo-50" },
  { name: "BBPS Switch", type: "Utility & Bharat BillPay", icon: "Layers", badgeColor: "border-blue-200 text-blue-700 bg-blue-50" },
  { name: "FASTag NETC", type: "Automated Toll Switch", icon: "Zap", badgeColor: "border-amber-200 text-amber-700 bg-amber-50" },
  { name: "Kotak Mahindra Bank", type: "Corporate Banking APIs", icon: "Building2", badgeColor: "border-red-200 text-red-700 bg-red-50" },
];

export default function BankRailMarquee() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Smartphone": return <Smartphone className="w-4 h-4 text-[#FD7902]" />;
      case "Building2": return <Building2 className="w-4 h-4 text-blue-600" />;
      case "CreditCard": return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case "Repeat": return <Repeat className="w-4 h-4 text-purple-600" />;
      default: return <Layers className="w-4 h-4 text-[#FD7902]" />;
    }
  };

  return (
    <div className="py-7 bg-white border-y border-slate-200 overflow-hidden relative text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Integrated Across India&apos;s Financial Rails &amp; Core Banks</span>
        </div>
        <div className="text-xs font-mono font-bold text-[#FD7902] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Connectors • Pre-Certified Protocols</span>
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden select-none group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-3.5 py-1">
          {RAILS.concat(RAILS).map((rail, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs shrink-0 hover:border-orange-300 hover:bg-orange-50/30 transition-all cursor-default"
            >
              <div className={`p-2 rounded-xl border ${rail.badgeColor}`}>
                {getIcon(rail.icon)}
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 leading-tight">
                  {rail.name}
                </div>
                <div className="text-[11px] text-slate-700 font-semibold mt-0.5 font-mono">
                  {rail.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
