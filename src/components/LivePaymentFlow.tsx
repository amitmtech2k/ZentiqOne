"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Cpu, 
  Building2, 
  CreditCard, 
  Repeat, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Activity,
  Check
} from "lucide-react";

interface FlowScenario {
  id: string;
  name: string;
  amount: string;
  sourceLabel: string;
  sourceSub: string;
  sourceIcon: "smartphone" | "card" | "repeat";
  switchDecision: string;
  latencyMs: number;
  primaryBank: {
    name: string;
    sub: string;
    status: string;
    tag: string;
  };
  secondaryBank: {
    name: string;
    sub: string;
    status: string;
    tag: string;
  };
  backupGateway: {
    name: string;
    sub: string;
    status: string;
    tag: string;
  };
}

const FLOW_SCENARIOS: FlowScenario[] = [
  {
    id: "upi",
    name: "UPI 2.0 Instant",
    amount: "₹2,500.00",
    sourceLabel: "Customer App",
    sourceSub: "Scan & Pay / VPA Intent",
    sourceIcon: "smartphone",
    switchDecision: "Fastest Direct H2H Bank Rail",
    latencyMs: 128,
    primaryBank: {
      name: "HDFC Bank Direct API",
      sub: "NPCI UPI 2.0 Switch",
      status: "Settled (T+0)",
      tag: "Active Primary Rail"
    },
    secondaryBank: {
      name: "ICICI Bank CBS",
      sub: "Instant Standby Mirror",
      status: "Standby",
      tag: "Hot Backup"
    },
    backupGateway: {
      name: "Aggregator Failover",
      sub: "Cashfree / Razorpay PA",
      status: "Standby",
      tag: "Fallback"
    }
  },
  {
    id: "card",
    name: "Tokenized Card (3DS2)",
    amount: "₹8,450.00",
    sourceLabel: "Web Checkout",
    sourceSub: "RBI CoFT Cryptogram",
    sourceIcon: "card",
    switchDecision: "Optimized Visa/Mastercard Token Switch",
    latencyMs: 165,
    primaryBank: {
      name: "Axis Bank Direct PG",
      sub: "Visa / RuPay Token Switch",
      status: "Settled (T+0)",
      tag: "Active Primary Rail"
    },
    secondaryBank: {
      name: "Kotak Mahindra Bank",
      sub: "Mastercard 3DS2 Vault",
      status: "Standby",
      tag: "Hot Backup"
    },
    backupGateway: {
      name: "Multi-PA Smart Router",
      sub: "Easebuzz / Razorpay PA",
      status: "Standby",
      tag: "Fallback"
    }
  },
  {
    id: "payout",
    name: "Escrow & Bulk Payouts",
    amount: "₹45,000.00",
    sourceLabel: "Enterprise ERP",
    sourceSub: "Tripartite Split Ledger",
    sourceIcon: "repeat",
    switchDecision: "Automated RBI Nodal Escrow Route",
    latencyMs: 140,
    primaryBank: {
      name: "ICICI Nodal Escrow",
      sub: "Real-Time IMPS / NEFT Rail",
      status: "Settled (T+0)",
      tag: "Active Primary Rail"
    },
    secondaryBank: {
      name: "Yes Bank Connected",
      sub: "eNACH Recurring Auto-Debit",
      status: "Standby",
      tag: "Hot Backup"
    },
    backupGateway: {
      name: "Corporate CBS API",
      sub: "Host-to-Host Batch Disbursal",
      status: "Standby",
      tag: "Fallback"
    }
  }
];

export default function LivePaymentFlow() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("upi");
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const [isFailoverMode, setIsFailoverMode] = useState<boolean>(false);
  const [pulseCount, setPulseCount] = useState<number>(0);

  const scenario = FLOW_SCENARIOS.find(s => s.id === activeScenarioId) || FLOW_SCENARIOS[0];

  const triggerSimulation = () => {
    setIsRouting(true);
    setPulseCount(prev => prev + 1);
    setTimeout(() => {
      setIsRouting(false);
    }, 1200);
  };

  const toggleFailover = () => {
    setIsFailoverMode(!isFailoverMode);
    triggerSimulation();
  };

  useEffect(() => {
    // Auto slight pulse every 5 seconds for ambient life
    const interval = setInterval(() => {
      if (!isRouting) {
        setPulseCount(c => c + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isRouting]);

  const renderSourceIcon = () => {
    switch (scenario.sourceIcon) {
      case "card":
        return <CreditCard className="w-5 h-5 text-emerald-600" />;
      case "repeat":
        return <Repeat className="w-5 h-5 text-indigo-600" />;
      default:
        return <Smartphone className="w-5 h-5 text-[#FD7902]" />;
    }
  };

  return (
    <div className="bg-white/95 rounded-3xl p-5 sm:p-7 border border-orange-200/90 shadow-2xl shadow-orange-950/10 text-slate-900 relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Interactive Tabs */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FD7902] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Smart Multi-Bank Orchestration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 tracking-tight">
              Visual Payment Switch &amp; Gateway Flow
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerSimulation}
              disabled={isRouting}
              className="px-3.5 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FD7902] border border-orange-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRouting ? "animate-spin text-[#FD7902]" : ""}`} />
              <span>{isRouting ? "Routing Data..." : "Send Test Packet"}</span>
            </button>
          </div>
        </div>

        {/* 3 Clean Rails Tabs */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {FLOW_SCENARIOS.map((item) => {
            const isSelected = item.id === activeScenarioId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScenarioId(item.id);
                  triggerSimulation();
                }}
                className={`p-2.5 rounded-2xl text-center border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#181B24] text-white border-[#181B24] shadow-md scale-[1.02]"
                    : "bg-[#FAFBFC] text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="text-xs font-extrabold truncate">
                  {item.name}
                </div>
                <div className={`text-[11px] font-mono mt-0.5 font-semibold ${isSelected ? "text-[#FD7902]" : "text-slate-500"}`}>
                  {item.amount}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Flow Diagram Canvas (Easy to grasp) */}
      <div className="my-6 relative bg-gradient-to-br from-[#FAFBFC] via-white to-[#FFF9F3] p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-inner overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
          
          {/* 1. LEFT NODE: Your App / Merchant Initiator (3 cols) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3"
          >
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center relative group">
              <motion.div 
                animate={{ scale: isRouting ? [1, 1.15, 1] : 1 }}
                transition={{ duration: 0.4 }}
                className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-[#FD7902] mb-2 shadow-2xs"
              >
                {renderSourceIcon()}
              </motion.div>
              <span className="text-xs font-black text-slate-900 leading-tight">
                {scenario.sourceLabel}
              </span>
              <span className="text-[10px] text-slate-700 font-medium mt-0.5 font-mono">
                {scenario.sourceSub}
              </span>
              <div className="mt-2 text-[11px] font-mono font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                {scenario.amount}
              </div>
            </div>
          </motion.div>

          {/* 2. CENTER NODE: ZentiqOne Smart Engine (5 cols) */}
          <div className="md:col-span-5 relative">
            
            {/* Animated Flow Pulse Line Indicator */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative bg-[#0F172A] rounded-2xl p-4 border border-slate-700 text-white shadow-xl overflow-hidden text-center"
            >
              
              {/* Glowing Background Active Scanner */}
              <motion.div
                key={pulseCount}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#FD7902]/35 to-transparent pointer-events-none"
              />

              <div className="flex items-center justify-center gap-2 mb-1.5">
                <motion.div 
                  animate={{ rotate: isRouting ? 360 : 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="p-1.5 rounded-lg bg-[#FD7902] text-white shadow-sm"
                >
                  <Cpu className="w-4 h-4" />
                </motion.div>
                <span className="text-xs font-mono font-black tracking-wider text-white">
                  ZENTIQONE SWITCH
                </span>
              </div>

              <div className="text-[11px] font-bold text-orange-300">
                {scenario.switchDecision}
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-300">Speed: <strong className="text-emerald-400 font-bold">Ultra-Low Latency</strong></span>
                <span className="text-slate-300">Routing: <strong className="text-[#FD7902] font-bold">Direct H2H</strong></span>
              </div>
            </motion.div>

            {/* Smart Failover Simulation Button */}
            <div className="mt-2 flex justify-center">
              <button
                onClick={toggleFailover}
                className="text-[10px] font-mono font-bold text-slate-700 hover:text-[#FD7902] flex items-center gap-1 cursor-pointer bg-slate-100 hover:bg-orange-50 px-2.5 py-1 rounded-full border border-slate-200 transition-all hover:scale-105"
              >
                <Activity className="w-3 h-3 text-[#FD7902]" />
                <span>{isFailoverMode ? "✓ Backup Route Activated" : "Simulate Bank Failover"}</span>
              </button>
            </div>
          </div>

          {/* 3. RIGHT NODE: Multi-Bank / Acquirer Stack (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-2">
            
            {/* Primary Rail */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className={`p-2.5 rounded-xl border transition-all ${
                !isFailoverMode 
                  ? "bg-emerald-50/80 border-emerald-300 shadow-xs" 
                  : "bg-slate-50 border-slate-200 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className={`w-3.5 h-3.5 ${!isFailoverMode ? "text-emerald-600" : "text-slate-500"}`} />
                  <span>{scenario.primaryBank.name}</span>
                </span>
                {!isFailoverMode && (
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    PASS
                  </span>
                )}
              </div>
              <div className="text-[10px] text-slate-700 font-mono mt-0.5 flex items-center justify-between">
                <span>{scenario.primaryBank.sub}</span>
                <span className={!isFailoverMode ? "text-emerald-700 font-bold" : "text-slate-500"}>{scenario.primaryBank.status}</span>
              </div>
            </motion.div>

            {/* Secondary / Backup Rail */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className={`p-2.5 rounded-xl border transition-all ${
                isFailoverMode 
                  ? "bg-orange-50 border-[#FD7902] shadow-xs ring-1 ring-[#FD7902]" 
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className={`w-3.5 h-3.5 ${isFailoverMode ? "text-[#FD7902]" : "text-slate-500"}`} />
                  <span>{scenario.secondaryBank.name}</span>
                </span>
                {isFailoverMode && (
                  <span className="text-[9px] font-bold text-orange-800 bg-orange-100 px-1.5 py-0.5 rounded animate-pulse">
                    FAILOVER ACTIVE
                  </span>
                )}
              </div>
              <div className="text-[10px] text-slate-700 font-mono mt-0.5 flex items-center justify-between">
                <span>{scenario.secondaryBank.sub}</span>
                <span className={isFailoverMode ? "text-[#FD7902] font-bold" : "text-slate-500"}>
                  {isFailoverMode ? "Auto-Routed (100%)" : scenario.secondaryBank.status}
                </span>
              </div>
            </motion.div>

            {/* Third Gateway Failover */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[10px] text-slate-700 font-mono">
              <span>{scenario.backupGateway.name}</span>
              <span className="text-slate-500 font-medium">{scenario.backupGateway.tag}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Live Settlement Proof Bar */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="font-bold text-slate-900">
            {isFailoverMode ? "Auto-Failover Saved Txn in 148ms" : `Settled in ${scenario.latencyMs}ms via Direct Host-to-Host API`}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-slate-800">
          <span className="text-emerald-700 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>99.99% SLA Uptime</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[#FD7902]">Zero Drop-off</span>
        </div>
      </div>

    </div>
  );
}
