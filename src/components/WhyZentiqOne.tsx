"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Cpu, 
  ShieldCheck, 
  AlertCircle
} from "lucide-react";

interface WhyZentiqOneProps {
  onOpenConsultation?: () => void;
}

const ADVANTAGES = [
  {
    pillar: "VELOCITY & MODULARITY",
    badge: "Rapid Engineering",
    title: "Accelerated Time-to-Market",
    desc: "Pre-engineered, battle-tested connectors for NPCI (UPI 2.0, eNACH, BBPS) and Core Banking Systems eliminate redundant trial-and-error development cycles.",
    highlights: ["Pre-Built Connectors", "Modular Microservices", "Zero Guesswork"],
    icon: Rocket
  },
  {
    pillar: "ELASTIC RESILIENCE",
    badge: "Cloud-Native Scale",
    title: "High-Throughput Concurrent Architecture",
    desc: "Microservices-ready architecture designed to absorb heavy transaction spikes with automated multi-bank failover and low-latency switching.",
    highlights: ["Dynamic Smart Routing", "Active-Active Mirror", "Hot Standby Redundancy"],
    icon: Cpu
  },
  {
    pillar: "REGULATORY GOVERNANCE",
    badge: "Security by Design",
    title: "Bank-Grade Compliance Readiness",
    desc: "RBI Cyber Security Framework, data localization, and PCI-DSS requirements are designed into the base system architecture from the very first sprint.",
    highlights: ["RBI Data Localization", "PCI-DSS v4 Ready", "CERT-In Audit Evidence"],
    icon: ShieldCheck
  }
];

export default function WhyZentiqOne({ onOpenConsultation }: WhyZentiqOneProps) {
  return (
    <section id="why-zentiqone" className="py-12 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mb-8 text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why <span className="text-[#FD7902]">ZentiqOne</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-700 font-normal">
            Specialized FinTech software engineering purpose-built for banks, payment aggregators, and enterprises.
          </p>
        </motion.div>

        {/* 3 Executive Architecture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {ADVANTAGES.map((item, idx) => {
            const IconComp = item.icon;
            const cardInitial = idx === 0 
              ? { opacity: 0, x: -40, y: 15 } 
              : idx === 1 
              ? { opacity: 0, y: 40, scale: 0.95 } 
              : { opacity: 0, x: 40, y: 15 };

            return (
              <motion.div
                key={idx}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Pillar Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#FD7902] uppercase tracking-wider">
                      {item.pillar}
                    </span>
                    <div className="p-2 rounded-xl bg-orange-50 text-[#FD7902] border border-orange-100 group-hover:bg-[#FD7902] group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold mb-3">
                    {item.badge}
                  </div>

                  {/* Headline & Body */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#FD7902] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-800 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Key Technical Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.highlights.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[11px] font-bold text-slate-900 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg group-hover:border-orange-200 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Entity & Regulatory Role Clarification Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-2xl p-5 sm:p-6 border border-orange-200 bg-orange-50/40"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-orange-500/10 text-[#FD7902] border border-orange-200 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Entity &amp; Regulatory Role Clarification
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mt-1">
                <strong className="text-slate-900 font-bold">ZentiqOne is a technology facilitator and engineering platform</strong> — not a bank, Payment Aggregator, or licensed financial intermediary. All financial transactions and payment processing services are executed securely by our RBI-authorised Payment Aggregator partners (Razorpay, Cashfree, and Easebuzz) in compliance with applicable regulatory frameworks.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
