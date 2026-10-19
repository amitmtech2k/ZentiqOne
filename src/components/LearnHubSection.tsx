"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LEARN_ARTICLES, LearnArticle } from "@/data/content";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";

export default function LearnHubSection() {
  const [activeArticle, setActiveArticle] = useState<LearnArticle | null>(null);

  return (
    <section id="learn" className="py-12 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
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
            Explore the <span className="text-[#FD7902]">Payment Ecosystem</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-normal">
            ZentiqOne&apos;s Learn hub explains how the banking and payments ecosystem actually works — no sales pitch, just clear technical architecture.
          </p>
        </motion.div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARN_ARTICLES.map((art, idx) => {
            const cardInitial = idx === 0 
              ? { opacity: 0, x: -35, y: 15 }
              : idx === 3 
              ? { opacity: 0, x: 35, y: 15 }
              : { opacity: 0, y: 35 };

            return (
              <motion.div
                key={art.id}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="fintech-card p-7 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between group cursor-pointer bg-[#FAFBFC] hover:bg-white"
                onClick={() => setActiveArticle(art)}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase bg-orange-50 text-[#FD7902] px-3 py-1 rounded-lg border border-orange-200">
                      {art.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700 font-mono text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#FD7902] transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3 font-normal">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-extrabold text-[#FD7902] group-hover:text-orange-600">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Read Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-9 shadow-2xl relative text-slate-900">
            
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal header */}
            <div className="pr-10 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="bg-orange-50 text-[#FD7902] font-mono font-bold px-3 py-1 rounded-md border border-orange-200">
                  {activeArticle.tag}
                </span>
                <span className="text-slate-700 flex items-center gap-1.5 font-mono text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  <span>{activeArticle.readTime}</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeArticle.title}
              </h2>
            </div>

            {/* Key architectural takeaways */}
            <div className="my-7 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold uppercase text-[#FD7902] mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Key Architectural Takeaways</span>
              </div>
              <div className="space-y-2.5">
                {activeArticle.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#FD7902] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full text content */}
            <div className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-4 whitespace-pre-line py-2 font-normal">
              {activeArticle.fullContent}
            </div>

            {/* Modal footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-700 font-mono font-bold">
                Published by ZentiqOne FinTech Engineering
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#FD7902] via-[#FF8A1E] to-[#FD7902] hover:brightness-110 text-white font-extrabold rounded-xl text-xs transition-all shadow-lg shadow-orange-500/30 cursor-pointer"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

