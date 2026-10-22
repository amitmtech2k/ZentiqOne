"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, 
  Building2, 
  Network, 
  Store, 
  Briefcase, 
  Cpu, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SERVICES_DATA } from "@/data/content";

interface NavbarProps {
  onOpenConsultation?: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Navbar({ onOpenConsultation, onSelectService }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // Only perform scroll-based section spy when on the root / page
      if (pathname === "/") {
        const sections = [
          { id: "hero", key: "home" },
          { id: "services", key: "solutions" },
          { id: "industries", key: "solutions" },
          { id: "why-zentiqone", key: "why-zentiqone" },
          { id: "ecosystem", key: "why-zentiqone" },
          { id: "partners", key: "partners" },
          { id: "learn", key: "resources" },
          { id: "faq", key: "resources" }
        ];

        const scrollPosition = window.scrollY + 160; // Header height + offset

        let currentActive = "home";
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              currentActive = section.key;
              break;
            } else if (scrollPosition >= top) {
              currentActive = section.key;
            }
          }
        }
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Determine which nav item is active based on pathname or scroll
  const isNavActive = (key: string) => {
    if (pathname === "/contact") return key === "contact";
    if (pathname.startsWith("/services")) return key === "solutions";
    if (pathname.startsWith("/why-zentiqone")) return key === "why-zentiqone";
    if (pathname.startsWith("/partners")) return key === "partners";
    if (pathname.startsWith("/resources") || pathname.startsWith("/learn")) return key === "resources";
    if (pathname === "/") return key === "home";
    return false;
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "payment-platform-development": return <CreditCard className="w-4 h-4 text-[#FD7902]" />;
      case "banking-solutions": return <Building2 className="w-4 h-4 text-[#FD7902]" />;
      case "api-integrations": return <Network className="w-4 h-4 text-[#FD7902]" />;
      case "merchant-enablement": return <Store className="w-4 h-4 text-[#FD7902]" />;
      case "banking-consulting": return <Briefcase className="w-4 h-4 text-[#FD7902]" />;
      case "managed-services": return <Cpu className="w-4 h-4 text-[#FD7902]" />;
      default: return <CreditCard className="w-4 h-4 text-[#FD7902]" />;
    }
  };

  const getLinkClasses = (key: string) => {
    const active = isNavActive(key);
    return `px-2.5 py-1.5 text-xs xl:text-sm transition-colors duration-150 rounded-full ${
      active
        ? "text-[#FD7902] font-bold bg-white/5"
        : "text-white/80 hover:text-white font-medium"
    }`;
  };

  const getMobileLinkClasses = (key: string) => {
    const active = isNavActive(key);
    return `px-3 py-2 text-sm transition-colors rounded-xl ${
      active
        ? "text-[#FD7902] font-bold bg-white/5"
        : "text-white/85 hover:text-white font-medium"
    }`;
  };

  return (
    <header className="fixed top-2 sm:top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto bg-[#181B24]/95 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 sm:px-5 shadow-2xl shadow-black/30 max-w-6xl w-full flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 pl-1">
          <div className="relative flex items-center">
            <div className="bg-white/10 p-1 rounded-xl border border-white/15 group-hover:border-[#FD7902]/60 transition-colors">
              <Image 
                src="/assets/logo-icon.png" 
                alt="ZentiqOne" 
                width={140} 
                height={120} 
                className="h-7 w-auto object-contain brightness-110"
                priority
              />
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-sm lg:text-base leading-tight">
              Zentiq<span className="text-[#FD7902]">One</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Consolidated Sequence */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* 1. Home */}
          <Link 
            href="/" 
            className={getLinkClasses("home")}
          >
            Home
          </Link>

          {/* 2. Solutions & Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              href="/services"
              className={`${getLinkClasses("solutions")} flex items-center gap-1 cursor-pointer`}
            >
              <span>Solutions &amp; Services</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                servicesOpen ? "rotate-180 text-[#FD7902]" : isNavActive("solutions") ? "text-[#FD7902]" : "text-white/60"
              }`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-[#181B24] rounded-3xl p-4 border border-white/15 shadow-2xl z-50 text-white"
                >
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: 6 Core Services (7 cols) */}
                    <div className="col-span-7 pr-3 border-r border-white/10">
                      <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider px-2 pb-2 border-b border-white/10 flex items-center justify-between">
                        <span>Core Engineering Services</span>
                        <span className="text-[#FD7902] font-semibold">Specialized</span>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 mt-2.5">
                        {SERVICES_DATA.map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.id}`}
                            onClick={() => {
                              if (onSelectService) onSelectService(srv.id);
                              setServicesOpen(false);
                            }}
                            className="p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-start gap-2.5 group/item text-left"
                          >
                            <div className="p-1.5 rounded-lg bg-orange-500/10 text-[#FD7902] border border-orange-500/20 group-hover/item:bg-[#FD7902] group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                              {getServiceIcon(srv.id)}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover/item:text-[#FD7902] transition-colors leading-tight truncate">
                                {srv.title}
                              </div>
                              <div className="text-[10px] text-slate-300 font-medium truncate mt-0.5">
                                {srv.badge}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right: Industries Quick Jump (5 cols) */}
                    <div className="col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider px-1 pb-2 border-b border-white/10">
                          <span>Industries We Serve</span>
                        </div>
                        <div className="flex flex-col gap-1.5 mt-2.5">
                          <Link
                            href="/services#industries"
                            onClick={() => setServicesOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-xs text-white/90 hover:text-[#FD7902] transition-colors font-medium flex items-center justify-between group/ind"
                          >
                            <span>Banks &amp; Co-ops</span>
                            <ArrowRight className="w-3 h-3 text-white/40 group-hover/ind:text-[#FD7902] group-hover/ind:translate-x-0.5 transition-all" />
                          </Link>
                          <Link
                            href="/services#industries"
                            onClick={() => setServicesOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-xs text-white/90 hover:text-[#FD7902] transition-colors font-medium flex items-center justify-between group/ind"
                          >
                            <span>NBFCs &amp; Lending</span>
                            <ArrowRight className="w-3 h-3 text-white/40 group-hover/ind:text-[#FD7902] group-hover/ind:translate-x-0.5 transition-all" />
                          </Link>
                          <Link
                            href="/services#industries"
                            onClick={() => setServicesOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-xs text-white/90 hover:text-[#FD7902] transition-colors font-medium flex items-center justify-between group/ind"
                          >
                            <span>FinTechs &amp; Neobanks</span>
                            <ArrowRight className="w-3 h-3 text-white/40 group-hover/ind:text-[#FD7902] group-hover/ind:translate-x-0.5 transition-all" />
                          </Link>
                          <Link
                            href="/services#industries"
                            onClick={() => setServicesOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-xs text-white/90 hover:text-[#FD7902] transition-colors font-medium flex items-center justify-between group/ind"
                          >
                            <span>Payment Aggregators</span>
                            <ArrowRight className="w-3 h-3 text-white/40 group-hover/ind:text-[#FD7902] group-hover/ind:translate-x-0.5 transition-all" />
                          </Link>
                          <Link
                            href="/services#industries"
                            onClick={() => setServicesOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-xs text-white/90 hover:text-[#FD7902] transition-colors font-medium flex items-center justify-between group/ind"
                          >
                            <span>Enterprise &amp; E-Com</span>
                            <ArrowRight className="w-3 h-3 text-white/40 group-hover/ind:text-[#FD7902] group-hover/ind:translate-x-0.5 transition-all" />
                          </Link>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <Link
                          href="/services#industries"
                          onClick={() => setServicesOpen(false)}
                          className="text-[11px] font-bold text-[#FD7902] hover:underline flex items-center gap-1"
                        >
                          <span>Explore All Verticals</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                    <span className="text-slate-300 font-medium">Need customized banking infrastructure?</span>
                    <button 
                      onClick={() => {
                        setServicesOpen(false);
                        if (onOpenConsultation) onOpenConsultation();
                      }}
                      className="text-[#FD7902] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Talk to Lead Architect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Why ZentiqOne */}
          <Link 
            href="/why-zentiqone" 
            className={getLinkClasses("why-zentiqone")}
          >
            Why ZentiqOne
          </Link>

          {/* 4. Partners & Rails */}
          <Link 
            href="/partners" 
            className={getLinkClasses("partners")}
          >
            Partners
          </Link>

          {/* 5. Resources (Learn Hub & FAQ) */}
          <Link 
            href="/resources" 
            className={getLinkClasses("resources")}
          >
            Resources
          </Link>

          {/* 6. Contact */}
          <Link 
            href="/contact" 
            className={getLinkClasses("contact")}
          >
            Contact
          </Link>
        </nav>

        {/* Right Action CTA Button - Solid Orange Pill */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          {onOpenConsultation ? (
            <button 
              onClick={onOpenConsultation}
              className="px-5 py-2 bg-[#FD7902] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link 
              href="/contact?consultation=true"
              className="px-5 py-2 bg-[#FD7902] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          {onOpenConsultation && (
            <button 
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-[#FD7902] text-white text-xs font-bold rounded-full shadow-xs"
            >
              Consult
            </button>
          )}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-white/90 hover:bg-white/10 border border-white/10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-14 left-4 right-4 bg-[#181B24] border border-white/15 rounded-3xl shadow-2xl p-4 text-white"
          >
            <div className="flex flex-col gap-1">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("home")}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("solutions")}
              >
                Solutions &amp; Services
              </Link>
              <Link 
                href="/services#industries" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("solutions")}
              >
                Industries We Serve
              </Link>
              <Link 
                href="/why-zentiqone" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("why-zentiqone")}
              >
                Why ZentiqOne
              </Link>
              <Link 
                href="/partners" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("partners")}
              >
                Partners &amp; Rails
              </Link>
              <Link 
                href="/resources" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("resources")}
              >
                Resources &amp; FAQ
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={getMobileLinkClasses("contact")}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2 mt-2">
                {onOpenConsultation ? (
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full py-3 bg-[#FD7902] text-white font-bold rounded-full text-center shadow-md text-sm cursor-pointer"
                  >
                    Schedule a Consultation
                  </button>
                ) : (
                  <Link 
                    href="/contact?consultation=true"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 bg-[#FD7902] text-white font-bold rounded-full text-center shadow-md text-sm"
                  >
                    Schedule a Consultation
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
