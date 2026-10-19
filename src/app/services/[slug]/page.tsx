import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA, SITE_METADATA } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft
} from "lucide-react";

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-slate-900">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#FD7902]">{service.title}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FD7902] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl font-normal">
            {service.fullDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-[#FD7902] hover:bg-[#E36A00] text-white font-bold rounded-xl text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-xs text-slate-700 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>PCI DSS &amp; RBI Compliance Aligned</span>
            </div>
          </div>
        </div>

        {/* Features Matrix */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Core Architecture Modules &amp; Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FD7902] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-slate-900">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Outcomes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Engineering Outcomes &amp; Edge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.keyBenefits.map((ben, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-sm font-semibold text-emerald-950 flex flex-col justify-between"
              >
                <span className="text-xs text-emerald-700 font-bold uppercase mb-2">Outcome 0{idx + 1}</span>
                <span>{ben}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interface Contract Blueprint */}
        {service.samplePayload && (
          <div className="mb-12 bg-slate-900 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-200 shadow-xl">
            <div className="text-[11px] text-slate-300 uppercase mb-3 flex items-center justify-between border-b border-slate-800 pb-2 font-semibold">
              <span className="flex items-center gap-2 text-slate-200 font-bold">
                <Terminal className="w-4 h-4 text-[#FD7902]" />
                <span>Interface Contract Blueprint (JSON Spec)</span>
              </span>
              <span className="text-emerald-400 font-bold">Production Ready</span>
            </div>
            <pre className="text-orange-200/90 overflow-x-auto text-xs leading-relaxed">
              {service.samplePayload}
            </pre>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            Ready to deploy {service.title}?
          </h3>
          <p className="text-sm text-slate-700 mt-1 max-w-xl mx-auto font-medium">
            Our engineering leads will review your product specifications and outline an integration roadmap.
          </p>
          <Link
            href="/#contact"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-[#FD7902] hover:bg-[#E36A00] text-white font-bold rounded-xl text-sm shadow-xs transition-all"
          >
            <span>Consult with Engineering Lead</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
