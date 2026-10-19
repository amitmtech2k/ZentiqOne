"use client";

import React from "react";
import { motion } from "framer-motion";
import { CORE_CAPABILITIES } from "@/data/content";
import { Layers, Cpu, ShieldCheck, GitBranch } from "lucide-react";

export default function StatsBar() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Layers className="w-5 h-5 text-[#FD7902]" />;
      case 1: return <Cpu className="w-5 h-5 text-blue-600" />;
      case 2: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 3: return <GitBranch className="w-5 h-5 text-amber-600" />;
      default: return <Layers className="w-5 h-5 text-[#FD7902]" />;
    }
  };

  return (
    <div className="py-10 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 hover:shadow-md hover:shadow-orange-500/10 transition-all duration-200 relative group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 group-hover:bg-[#FD7902] group-hover:text-white transition-colors">
                  {getIcon(idx)}
                </div>
                <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#FD7902] transition-colors leading-snug">
                  {cap.title}
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {cap.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
