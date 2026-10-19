"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  ShieldCheck,
  CreditCard,
  Network,
  Store,
  Briefcase,
  Cpu,
  ChevronDown,
  AlertCircle
} from "lucide-react";
import { SERVICES_DATA, SITE_METADATA } from "@/data/content";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialServiceId }: ConsultationModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || "payment-platform-development"
  );
  const [timeline, setTimeline] = useState<string>("Within 1-3 Months");
  const [volume, setVolume] = useState<string>("₹10 Cr - ₹50 Cr / mo");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!company.trim()) {
      newErrors.company = "Company / Bank name is required.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid work email (e.g. name@company.com).";
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

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 shadow-2xl relative text-slate-900">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="pr-10 pb-4 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FD7902] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FD7902]" />
                <span>Enterprise Architecture Scoping</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Schedule a <span className="text-[#FD7902]">Consultation</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                Discuss your payment gateway, banking platform, integration, or compliance roadmap with our leads.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* Service Selection */}
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
                        <div className="flex items-center justify-between mb-1">
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

              {/* Volume & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
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

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
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

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-1">
                  Brief Project Scope / Specific Integration Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your payment flow, acquiring bank preferences, NPCI rails, or compliance considerations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAFBFC] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#FD7902] focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Consultation Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-700 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NDA &amp; Enterprise FinTech Confidentiality Guaranteed</span>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-extrabold text-slate-900">
              Consultation Request Received!
            </h3>

            <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{name}</strong>. Our banking and payment architecture team will review your requirements for <strong className="text-[#FD7902]">{company}</strong> and reach out to you via <strong className="text-slate-900">{email}</strong> within 1 business day.
            </p>

            <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1">
              <div><strong className="text-slate-900">Direct Contact:</strong> {SITE_METADATA.contactEmail}</div>
              <div><strong className="text-slate-900">Selected Scope:</strong> {selectedService}</div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#FD7902] hover:bg-[#EA580C] text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-orange-500/25 cursor-pointer"
              >
                Back to Platform
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
