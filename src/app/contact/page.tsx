"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  Send,
  Building2,
  CreditCard,
  Network,
  Store,
  Briefcase,
  Cpu,
  ChevronDown,
  User,
  Phone,
  AlertCircle
} from "lucide-react";
import { SERVICES_DATA, SITE_METADATA } from "@/data/content";

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Form states for inline contact form
  const [selectedService, setSelectedService] = useState<string>("payment-platform-development");
  const [volume, setVolume] = useState<string>("₹10 Cr - ₹50 Cr / mo");
  const [timeline, setTimeline] = useState<string>("Within 1-3 Months");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("consultation") === "true" || 
        params.get("open") === "true" ||
        params.get("openConsultation") === "true" ||
        window.location.hash === "#consultation"
      ) {
        setIsConsultationOpen(true);
      }
    }
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "payment-platform-development": return <CreditCard className="w-4 h-4" />;
      case "banking-solutions": return <Building2 className="w-4 h-4" />;
      case "api-integrations": return <Network className="w-4 h-4" />;
      case "merchant-enablement": return <Store className="w-4 h-4" />;
      case "banking-consulting": return <Briefcase className="w-4 h-4" />;
      case "managed-services": return <Cpu className="w-4 h-4" />;
      default: return <CreditCard className="w-4 h-4" />;
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Full name must be at least 2 characters.";
    }

    if (!company.trim()) {
      newErrors.company = "Company or bank name is required.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = "Work email address is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com).";
    }

    const digits = phone.replace(/\D/g, "");
    let normalized = digits;
    if (normalized.startsWith("91") && normalized.length === 12) {
      normalized = normalized.slice(2);
    } else if (normalized.startsWith("0") && normalized.length === 11) {
      normalized = normalized.slice(1);
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required.";
    } else if (normalized.length !== 10) {
      newErrors.phone = `Phone number must be exactly 10 digits (currently ${normalized.length}).`;
    } else if (!/^[6-9]/.test(normalized)) {
      newErrors.phone = "Mobile number must start with 6, 7, 8, or 9.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FD7902", "#FFA858", "#10B981", "#0F172A"]
      });
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sticky Header with open consultation trigger */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <div className="pt-28 sm:pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#FD7902]">Schedule Consultation</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FD7902] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Engagement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule an <span className="text-[#FD7902]">Architecture Consultation</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal">
            Talk directly to our payment platform engineers about your acquiring setup, NPCI rails, CBS integration, or compliance roadmap.
          </p>
        </div>

        {/* Interactive Consultation Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-2">
                  1. Select Primary Service Line
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {SERVICES_DATA.map((s) => {
                    const isSelected = selectedService === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setSelectedService(s.id)}
                        className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-slate-900 border-slate-900 text-white shadow-md"
                            : "bg-[#FAFBFC] border-slate-200 text-slate-800 hover:border-orange-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className={`p-1.5 rounded-lg ${isSelected ? "bg-[#FD7902] text-white" : "bg-orange-50 text-[#FD7902] border border-orange-100"}`}>
                            {getServiceIcon(s.id)}
                          </div>
                          <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? "text-orange-300" : "text-[#FD7902]"}`}>
                            {s.badge}
                          </span>
                        </div>
                        <div className={`text-xs font-bold line-clamp-1 ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {s.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Volume & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1.5">
                    Target Monthly Volume
                  </label>
                  <div className="relative">
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full bg-[#FAFBFC] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#FD7902] focus:bg-white focus:ring-2 focus:ring-orange-500/10 appearance-none cursor-pointer"
                    >
                      <option value="Early Prototype / Launch">Early Prototype / Launch Stage</option>
                      <option value="₹1 Cr - ₹10 Cr / mo">₹1 Cr - ₹10 Cr / month</option>
                      <option value="₹10 Cr - ₹50 Cr / mo">₹10 Cr - ₹50 Cr / month</option>
                      <option value="₹50 Cr+ Enterprise / mo">₹50 Cr+ Enterprise Volume</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1.5">
                    Deployment Timeline
                  </label>
                  <div className="relative">
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-[#FAFBFC] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#FD7902] focus:bg-white focus:ring-2 focus:ring-orange-500/10 appearance-none cursor-pointer"
                    >
                      <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                      <option value="Within 1-3 Months">Within 1-3 Months</option>
                      <option value="3-6 Months">3-6 Months Roadmap</option>
                      <option value="Strategic Feasibility Study">Strategic Feasibility Study</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 3. Contact Information Fields with Validations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                      }}
                      className={`w-full bg-[#FAFBFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300 focus:border-[#FD7902] focus:ring-orange-500/10"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                    Company / Bank Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Apex FinTech Pvt Ltd"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (errors.company) setErrors(prev => ({ ...prev, company: "" }));
                      }}
                      className={`w-full bg-[#FAFBFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.company ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300 focus:border-[#FD7902] focus:ring-orange-500/10"
                      }`}
                    />
                  </div>
                  {errors.company && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                      }}
                      className={`w-full bg-[#FAFBFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300 focus:border-[#FD7902] focus:ring-orange-500/10"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                    Phone / WhatsApp (10 Digits) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      maxLength={14}
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^\d+ ]/g, "");
                        setPhone(val);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                      }}
                      className={`w-full bg-[#FAFBFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-300 focus:border-[#FD7902] focus:ring-orange-500/10"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 4. Project Brief */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                  Brief Project Scope / Specific Integration Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your payment flow, acquiring bank preferences, NPCI rails, or compliance considerations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAFBFC] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#FD7902] focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                />
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-[11px] text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#FD7902] shrink-0" />
                <span>Enterprise NDA Protected. Your technical specifications and data are held in strict confidence.</span>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FD7902] hover:bg-[#EA580C] text-white text-xs font-extrabold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Architecture Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Architecture Consultation Request Received!
              </h3>
              <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                Thank you, <strong className="text-slate-900 font-bold">{name || "there"}</strong>. Our lead FinTech architects will review your requirements for <strong className="text-slate-900 font-bold">{company || "your platform"}</strong> and reach out via <strong className="text-slate-900 font-bold">{email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName("");
                  setCompany("");
                  setEmail("");
                  setPhone("");
                  setNotes("");
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-[#FD7902] text-white text-xs font-bold transition-all cursor-pointer"
              >
                Submit Another Consultation
              </button>
            </div>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="p-3 rounded-xl bg-orange-50 text-[#FD7902] w-fit mx-auto mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Email Engineering</h3>
            <a href={`mailto:${SITE_METADATA.contactEmail}`} className="text-sm text-[#FD7902] hover:underline font-bold block mt-1">
              {SITE_METADATA.contactEmail}
            </a>
            <span className="text-xs text-slate-700 font-medium mt-1 block">Sub-24hr response SLA</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="p-3 rounded-xl bg-orange-50 text-[#FD7902] w-fit mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Delivery Timelines</h3>
            <span className="text-sm text-slate-900 font-bold block mt-1">
              Turnkey Architecture
            </span>
            <span className="text-xs text-slate-700 font-medium mt-1 block">From scoping to go-live</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 w-fit mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Confidentiality</h3>
            <span className="text-sm text-slate-900 font-bold block mt-1">
              Enterprise NDA
            </span>
            <span className="text-xs text-slate-700 font-medium mt-1 block">Strict IP &amp; data security</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed text-center font-medium">
          {SITE_METADATA.disclaimer}
        </div>

      </div>

      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
