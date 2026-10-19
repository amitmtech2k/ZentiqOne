"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQS } from "@/data/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl mb-8 text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#FD7902]">Questions</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Clear answers on our engineering platform, regulatory positioning, and partnership models.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeOut" }}
                className="fintech-card rounded-2xl border border-slate-200 overflow-hidden transition-all duration-150 bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-100 text-slate-700 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#FD7902] bg-orange-50 border border-orange-200" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-800 leading-relaxed border-t border-slate-100 bg-[#FAFBFC] animate-in fade-in duration-150 font-normal">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

