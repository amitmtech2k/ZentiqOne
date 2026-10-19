"use client";

import React from "react";
import { motion } from "framer-motion";
import { SECURITY_PILLARS, SITE_METADATA } from "@/data/content";
import { Lock, FileCheck, ShieldAlert, ShieldCheck, AlertCircle } from "lucide-react";

export default function SecuritySection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Lock className="w-6 h-6 text-[#FD7902]" />;
      case 1: return <FileCheck className="w-6 h-6 text-blue-600" />;
      case 2: return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#FD7902]" />;
    }
  };

  return (
    <section id="trust" className="py-12 lg:py-16 bg-[#FAFBFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mb-8 text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Security &amp; Regulatory Compliance <span className="text-[#FD7902]">Engineered In</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Built the right way — security and regulatory awareness designed in from the first architecture decision.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const pillarInitial = idx === 0 
              ? { opacity: 0, x: -40, y: 15 } 
              : idx === 1 
              ? { opacity: 0, y: 40, scale: 0.95 } 
              : { opacity: 0, x: 40, y: 15 };

            return (
              <motion.div
                key={idx}
                initial={pillarInitial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="fintech-card p-8 rounded-3xl border border-slate-200 shadow-xl hover:border-emerald-500/60 transition-all flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 w-fit mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-emerald-700 font-extrabold font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Validated Security Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal & Role Clarification Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-3xl p-7 sm:p-8 border border-orange-200 shadow-xl bg-orange-50/50"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-orange-500/10 text-[#FD7902] border border-orange-200 shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-extrabold text-slate-900">
                Entity &amp; Regulatory Role Clarification
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">ZentiqOne is a technology and consulting engineering platform</strong> — not a bank, Payment Aggregator, Payment Gateway, or licensed financial entity. We help licensed banks, NBFCs, PAs, and PGs in this ecosystem design, build, integrate, and operate their platforms.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

