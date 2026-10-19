"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Activity, 
  Lock, 
  Cpu, 
  Building2 
} from "lucide-react";
import LivePaymentFlow from "./LivePaymentFlow";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [islandExpanded, setIsIslandExpanded] = useState(false);

  return (
    <section id="hero" className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#FFF2E2] via-[#FFF9F2] to-[#F8FAFC] text-slate-900 border-b border-orange-100/60">
      
      {/* PayYantra-style Radiant Ambient Breathing Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.22, 0.32, 0.22] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-16 left-1/3 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#FD7902]/25 via-amber-400/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute top-1/3 -right-20 w-[450px] h-[300px] bg-orange-300/20 rounded-full blur-[90px] pointer-events-none -z-10" 
      />

      {/* Visible Engineering Blueprint Grid SVG Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full stroke-orange-950/[0.07] [mask-image:radial-gradient(ellipse_80%_60%_at_40%_30%,#000_60%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-fintech-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M.5 48V.5H48" fill="none" strokeWidth="1" />
            <circle cx="0.5" cy="0.5" r="1.5" className="fill-orange-400/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-fintech-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Left-Aligned Content (7 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Engineering the Future of{" "}
              <span className="text-gradient-orange block mt-1">
                Digital Payments &amp; Banking
              </span>
            </motion.h1>

            {/* Subtitles */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-slate-800 leading-relaxed font-normal"
            >
              We help <strong className="text-slate-900 font-bold underline decoration-[#FD7902]/60 decoration-2 underline-offset-4">Banks, FinTechs, NBFCs, Enterprises and Payment Businesses</strong> design, develop, integrate and manage secure digital payment and banking solutions.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-2 text-sm sm:text-base text-slate-700 font-medium"
            >
              From product strategy to production deployment — we are your technology partner for every stage of the journey.
            </motion.p>

            {/* Expandable Overview Capsule ("What is ZentiqOne?") */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full mt-6 mb-6"
            >
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setIsIslandExpanded(!islandExpanded)}
                  className="group w-full px-4.5 py-3.5 flex items-center justify-between text-left hover:bg-orange-50/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-orange-50 text-[#FD7902] border border-orange-100">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-slate-900">
                        What is ZentiqOne?
                      </span>
                      <span className="text-xs text-slate-700 ml-2 font-medium hidden sm:inline">
                        Specialized FinTech software engineering &amp; consulting partner
                      </span>
                    </div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 group-hover:text-[#FD7902] group-hover:border-orange-200 transition-colors">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${islandExpanded ? "rotate-180 text-[#FD7902]" : ""}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {islandExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 pt-2.5 border-t border-slate-100 text-sm text-slate-800 bg-[#FAFBFC]"
                    >
                      <p className="leading-relaxed font-normal">
                        <strong className="text-slate-900 font-bold">ZentiqOne is a Banking &amp; Payment Technology Engineering Platform.</strong> We help Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-slate-200/80">
                        <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FD7902] shrink-0" />
                          <span>End-to-End Build</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FD7902] shrink-0" />
                          <span>Bank-Grade Security</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FD7902] shrink-0" />
                          <span>Low-Latency Routing</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              {onOpenConsultation ? (
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 flex items-center justify-center gap-2"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <a
                href="#services"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl text-sm border border-slate-300 hover:border-slate-400 transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronDown className="w-4 h-4 text-slate-600" />
              </a>
            </motion.div>

            {/* Quick Micro-Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-5 border-t border-slate-200 text-xs text-slate-800 font-bold">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FD7902]" />
                <span>NPCI UPI 2.0 Certified</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>PCI-DSS v4.0 &amp; RBI Ready</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Host-to-Host Bank APIs</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive FinTech Visualizer (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 w-full"
          >
            <LivePaymentFlow />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
