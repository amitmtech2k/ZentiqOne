"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import { SERVICES_DATA, SITE_METADATA } from "@/data/content";

interface FooterProps {
  onOpenConsultation?: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Footer({ onOpenConsultation, onSelectService }: FooterProps) {
  return (
    <footer className="bg-[#05070B] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FD7902]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action Banner inside footer */}
        <div className="luxury-glass rounded-3xl p-8 sm:p-12 border border-white/15 mb-16 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FFA858] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Accelerate Your Payment Roadmap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Ready to Build Your <span className="text-gradient-amber">Payment Business?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Schedule a consultation and talk to ZentiqOne about your custom platform architecture, banking integrations, or regulatory compliance needs.
              </p>
            </div>

            {onOpenConsultation ? (
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-gradient-to-r from-[#FD7902] to-amber-600 hover:brightness-110 text-white font-extrabold rounded-2xl text-sm shadow-xl shadow-orange-950/60 transition-all flex items-center gap-2.5 shrink-0"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#FD7902] to-amber-600 hover:brightness-110 text-white font-extrabold rounded-2xl text-sm shadow-xl shadow-orange-950/60 transition-all flex items-center gap-2.5 shrink-0"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-[#0D121F] p-2 rounded-xl border border-white/15 inline-flex">
                <Image 
                  src="/assets/logo-icon.png" 
                  alt="ZentiqOne Logo" 
                  width={140} 
                  height={38} 
                  className="h-7 w-auto object-contain brightness-110"
                />
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-white text-lg leading-tight">
                  Zentiq<span className="text-[#FD7902]">One</span>
                </span>
                <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Banking &amp; Payment Technology</div>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              We engineer payment ecosystems. ZentiqOne is a Banking &amp; Payment Technology Engineering Platform for banks, FinTechs, and enterprises.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_METADATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D121F] border border-white/10 text-slate-300 hover:text-[#FD7902] hover:border-[#FD7902] transition-colors"
                aria-label="ZentiqOne on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href={`mailto:${SITE_METADATA.contactEmail}`}
                className="p-2.5 rounded-xl bg-[#0D121F] border border-white/10 text-slate-300 hover:text-[#FD7902] hover:border-[#FD7902] transition-colors"
                aria-label="Email ZentiqOne"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div className="text-xs font-mono font-bold uppercase text-[#FFA858] mb-4 tracking-wider">
              Specialized Services
            </div>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.id}`}
                    className="text-slate-300 hover:text-white transition-colors text-left font-medium"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem & Hubs */}
          <div>
            <div className="text-xs font-mono font-bold uppercase text-[#FFA858] mb-4 tracking-wider">
              Ecosystem Hubs
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/#why-zentiqone" className="hover:text-white transition-colors">
                  About ZentiqOne
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="hover:text-white transition-colors">
                  Authorized Partners
                </Link>
              </li>
              <li>
                <Link href="/#ecosystem" className="hover:text-white transition-colors">
                  Turnkey Delivery Lifecycle
                </Link>
              </li>
              <li>
                <Link href="/#learn" className="hover:text-white transition-colors">
                  Learn Hub Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono font-bold uppercase text-[#FFA858] mb-4 tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FD7902]" />
                <a href={`mailto:${SITE_METADATA.contactEmail}`} className="hover:text-white transition-colors font-semibold">
                  {SITE_METADATA.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-medium">Enterprise Engineering SLA</span>
              </div>
              <Link
                href="/contact"
                className="mt-3 block w-full py-2.5 bg-white/5 hover:bg-[#FD7902] text-white text-xs font-bold rounded-xl border border-white/10 hover:border-transparent transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
            {SITE_METADATA.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 pt-4 border-t border-white/5">
            <div>
              &copy; 2026 {SITE_METADATA.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">Banking &amp; Payment Technology Engineering Platform</span>
              <span className="text-[#FD7902] font-semibold">v2.7 Pro Edition</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
