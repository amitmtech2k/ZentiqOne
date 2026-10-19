"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTNERS_DATA, SITE_METADATA } from "@/data/content";
import { 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight
} from "lucide-react";

interface PartnersSectionProps {
  onOpenConsultation?: () => void;
}

export default function PartnersSection({ onOpenConsultation }: PartnersSectionProps) {
  return (
    <section id="partners" className="py-12 lg:py-16 bg-[#FAFBFC] border-b border-slate-200 relative overflow-hidden">
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
            Our Payment <span className="text-[#FD7902]">Service Partners</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            ZentiqOne connects your business with India&apos;s leading financial infrastructure, acting as a trusted technology and referral partner for secure, rapid, and scalable transaction capabilities.
          </p>
        </motion.div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {PARTNERS_DATA.map((partner, idx) => {
            const partnerInitial = idx === 0 
              ? { opacity: 0, x: -40, y: 15 } 
              : idx === 1 
              ? { opacity: 0, y: 40, scale: 0.95 } 
              : { opacity: 0, x: 40, y: 15 };

            return (
              <motion.div
                key={partner.slug}
                initial={partnerInitial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="fintech-card rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between group bg-white"
              >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white shadow-md flex items-center justify-center font-extrabold text-lg">
                      {partner.name[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#FD7902] transition-colors">
                        {partner.name}
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-[#FD7902] uppercase tracking-wider">
                        {partner.badge}
                      </span>
                    </div>
                  </div>
                  {onOpenConsultation ? (
                    <button 
                      onClick={onOpenConsultation}
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#FD7902] hover:text-white transition-colors cursor-pointer"
                      aria-label={`Integrate with ${partner.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href="/contact"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#FD7902] hover:text-white transition-colors"
                      aria-label={`Integrate with ${partner.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Details */}
                <div className="mt-6 space-y-3.5 text-sm">
                  <div>
                    <span className="text-slate-900 font-extrabold block mb-1">Best For:</span>
                    <span className="text-slate-800 leading-relaxed text-xs sm:text-sm font-semibold">{partner.bestFor}</span>
                  </div>
                  <div>
                    <span className="text-slate-900 font-extrabold block mb-1">Core Strength:</span>
                    <span className="text-slate-800 leading-relaxed text-xs sm:text-sm font-semibold">{partner.coreStrength}</span>
                  </div>
                </div>

                {/* Supported Capabilities list */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <div className="text-[11px] font-mono font-bold uppercase text-slate-700 mb-3">
                    Supported Rails
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {partner.supportedFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-900 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FD7902] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-7 pt-5 border-t border-slate-200">
                {onOpenConsultation ? (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#FD7902] text-white text-xs font-extrabold transition-all text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Priority Onboarding</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="/contact"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#FD7902] text-white text-xs font-extrabold transition-all text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Request Priority Onboarding</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
        </div>

        {/* Regulatory Disclaimer */}
        <p className="text-xs text-slate-700 leading-relaxed text-center max-w-4xl mx-auto font-medium">
          {SITE_METADATA.disclaimer}
        </p>

      </div>
    </section>
  );
}

