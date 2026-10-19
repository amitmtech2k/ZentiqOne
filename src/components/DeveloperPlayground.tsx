"use client";

import React, { useState } from "react";
import { 
  Code, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Activity
} from "lucide-react";

type Language = "curl" | "node" | "python" | "java" | "go";
type Endpoint = "create-order" | "split-escrow" | "kyc-verify" | "instant-payout";

const SNIPPETS: Record<Endpoint, Record<Language, string> & { response: object; description: string }> = {
  "create-order": {
    description: "Initiate dynamic payment order with smart routing across UPI, Tokenized Cards, and NetBanking.",
    curl: `curl -X POST https://api.zentiqone.com/v1/orders \\
  -H "Authorization: Bearer sec_live_zntq98214" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 499900,
    "currency": "INR",
    "receipt": "order_rcpt_0091",
    "customer": {
      "name": "Ananya Roy",
      "email": "ananya@example.com",
      "contact": "+919876543210"
    },
    "routing_strategy": "SMART_LEAST_COST",
    "fallback_enabled": true
  }'`,
    node: `import { ZentiqClient } from "@zentiqone/sdk";

const zentiq = new ZentiqClient({
  apiKey: process.env.ZENTIQ_API_KEY,
  environment: "production"
});

const order = await zentiq.orders.create({
  amount: 499900, // in paise (₹ 4,999.00)
  currency: "INR",
  receipt: "order_rcpt_0091",
  customer: {
    name: "Ananya Roy",
    email: "ananya@example.com",
    contact: "+919876543210"
  },
  routingStrategy: "SMART_LEAST_COST",
  fallbackEnabled: true
});

console.log("Order Token:", order.id, "Payment URL:", order.paymentUrl);`,
    python: `from zentiqone import ZentiqClient

client = ZentiqClient(api_key="sec_live_zntq98214")

order = client.orders.create({
    "amount": 499900,
    "currency": "INR",
    "receipt": "order_rcpt_0091",
    "customer": {
        "name": "Ananya Roy",
        "email": "ananya@example.com",
        "contact": "+919876543210"
    },
    "routing_strategy": "SMART_LEAST_COST",
    "fallback_enabled": True
})

print(f"Order created successfully: {order['id']}")`,
    java: `import com.zentiqone.ZentiqClient;
import com.zentiqone.models.OrderRequest;
import com.zentiqone.models.OrderResponse;

ZentiqClient client = new ZentiqClient("sec_live_zntq98214");

OrderRequest request = OrderRequest.builder()
    .amount(499900L)
    .currency("INR")
    .receipt("order_rcpt_0091")
    .customerName("Ananya Roy")
    .customerEmail("ananya@example.com")
    .routingStrategy("SMART_LEAST_COST")
    .build();

OrderResponse order = client.orders().create(request);
System.out.println("Created Order ID: " + order.getId());`,
    go: `package main

import (
    "fmt"
    "github.com/zentiqone/zentiq-go"
)

func main() {
    client := zentiq.NewClient("sec_live_zntq98214")
    
    order, err := client.Orders.Create(&zentiq.OrderParams{
        Amount:   499900,
        Currency: "INR",
        Receipt:  "order_rcpt_0091",
        Customer: zentiq.Customer{
            Name:  "Ananya Roy",
            Email: "ananya@example.com",
        },
        RoutingStrategy: "SMART_LEAST_COST",
    })
    if err != nil {
        panic(err)
    }
    fmt.Printf("Order Token: %s\\n", order.ID)
}`,
    response: {
      status: 200,
      statusText: "ORDER_CREATED",
      id: "order_zntq_88912",
      amount: 499900,
      currency: "INR",
      payment_links: {
        upi_intent: "upi://pay?pa=zentiqone@hdfcbank&am=4999.00",
        dynamic_qr: "https://api.zentiqone.com/v1/qr/qr_9912.png"
      },
      routing_decision: {
        primary_switch: "NPCI_UPI_2.0",
        expected_latency_ms: 120
      },
      created_at: "2026-10-09T12:00:00Z"
    }
  },
  "split-escrow": {
    description: "Automate RBI-compliant split payments directly into vendor virtual accounts with platform commission deduction.",
    curl: `curl -X POST https://api.zentiqone.com/v1/escrow/splits \\
  -H "Authorization: Bearer sec_live_zntq98214" \\
  -H "Content-Type: application/json" \\
  -d '{
    "order_id": "order_zntq_88912",
    "gross_amount": 500000,
    "splits": [
      { "vendor_account": "va_vend_01", "amount": 350000, "payout_rail": "IMPS_INSTANT" },
      { "vendor_account": "va_vend_02", "amount": 120000, "payout_rail": "IMPS_INSTANT" }
    ],
    "platform_fee": 30000,
    "compliance": "RBI_NODAL_DIRECTIVE"
  }'`,
    node: `const splitBatch = await zentiq.escrow.createSplit({
  orderId: "order_zntq_88912",
  grossAmount: 500000,
  splits: [
    { vendorAccount: "va_vend_01", amount: 350000, payoutRail: "IMPS_INSTANT" },
    { vendorAccount: "va_vend_02", amount: 120000, payoutRail: "IMPS_INSTANT" }
  ],
  platformFee: 30000,
  compliance: "RBI_NODAL_DIRECTIVE"
});`,
    python: `split_batch = client.escrow.create_split(
    order_id="order_zntq_88912",
    gross_amount=500000,
    splits=[
        {"vendor_account": "va_vend_01", "amount": 350000, "payout_rail": "IMPS_INSTANT"},
        {"vendor_account": "va_vend_02", "amount": 120000, "payout_rail": "IMPS_INSTANT"}
    ],
    platform_fee=30000
)`,
    java: `SplitResponse split = client.escrow().createSplit(
    SplitRequest.builder()
        .orderId("order_zntq_88912")
        .grossAmount(500000L)
        .addVendorSplit("va_vend_01", 350000L)
        .addVendorSplit("va_vend_02", 120000L)
        .platformFee(30000L)
        .build()
);`,
    go: `split, err := client.Escrow.CreateSplit(&zentiq.SplitParams{
    OrderID:     "order_zntq_88912",
    GrossAmount: 500000,
    Splits: []zentiq.VendorSplit{
        {VendorAccount: "va_vend_01", Amount: 350000, PayoutRail: "IMPS"},
        {VendorAccount: "va_vend_02", Amount: 120000, PayoutRail: "IMPS"},
    },
    PlatformFee: 30000,
})`,
    response: {
      status: 200,
      batch_id: "escrow_split_9921",
      total_settled: 470000,
      platform_fee_collected: 30000,
      nodal_settlement_status: "SUCCESS_DISBURSED",
      transfers: [
        { vendor: "va_vend_01", utr: "UTR_IMPS_881923", status: "SETTLED" },
        { vendor: "va_vend_02", utr: "UTR_IMPS_881924", status: "SETTLED" }
      ]
    }
  },
  "kyc-verify": {
    description: "Verify identity documents (PAN, Aadhaar OKYC, CKYC) and trigger Video KYC pipelines.",
    curl: `curl -X POST https://api.zentiqone.com/v1/kyc/verify \\
  -H "Authorization: Bearer sec_live_zntq98214" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_type": "PAN_NSDL",
    "document_number": "ABCDE1234F",
    "name_to_match": "Vikram Sharma",
    "dob": "1992-05-14",
    "enable_liveness_check": true
  }'`,
    node: `const kycResult = await zentiq.kyc.verify({
  documentType: "PAN_NSDL",
  documentNumber: "ABCDE1234F",
  nameToMatch: "Vikram Sharma",
  dob: "1992-05-14",
  enableLivenessCheck: true
});`,
    python: `kyc_result = client.kyc.verify(
    document_type="PAN_NSDL",
    document_number="ABCDE1234F",
    name_to_match="Vikram Sharma",
    dob="1992-05-14"
)`,
    java: `KycResult result = client.kyc().verify(
    KycRequest.builder()
        .documentType("PAN_NSDL")
        .documentNumber("ABCDE1234F")
        .nameToMatch("Vikram Sharma")
        .build()
);`,
    go: `res, err := client.KYC.Verify(&zentiq.KYCParams{
    DocumentType:   "PAN_NSDL",
    DocumentNumber: "ABCDE1234F",
    NameToMatch:    "Vikram Sharma",
})`,
    response: {
      status: 200,
      verification_status: "VERIFIED_ACTIVE",
      pan: "ABCDE1234F",
      registered_name: "VIKRAM SHARMA",
      name_match_score: 1.0,
      aadhaar_seeding_status: "LINKED",
      cleared_for_onboarding: true
    }
  },
  "instant-payout": {
    description: "Execute real-time vendor disbursements and instant user withdrawals via IMPS/NEFT/UPI.",
    curl: `curl -X POST https://api.zentiqone.com/v1/payouts/instant \\
  -H "Authorization: Bearer sec_live_zntq98214" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payout_mode": "IMPS",
    "amount": 2500000,
    "beneficiary": {
      "account_number": "918239012391",
      "ifsc": "HDFC0001234",
      "name": "Apex Logistics Ltd"
    },
    "purpose": "VENDOR_SETTLEMENT"
  }'`,
    node: `const payout = await zentiq.payouts.instant({
  payoutMode: "IMPS",
  amount: 2500000, // ₹ 25,000.00
  beneficiary: {
    accountNumber: "918239012391",
    ifsc: "HDFC0001234",
    name: "Apex Logistics Ltd"
  },
  purpose: "VENDOR_SETTLEMENT"
});`,
    python: `payout = client.payouts.instant(
    payout_mode="IMPS",
    amount=2500000,
    beneficiary={
        "account_number": "918239012391",
        "ifsc": "HDFC0001234",
        "name": "Apex Logistics Ltd"
    }
)`,
    java: `PayoutResponse payout = client.payouts().instant(
    PayoutRequest.builder()
        .payoutMode("IMPS")
        .amount(2500000L)
        .accountNumber("918239012391")
        .ifsc("HDFC0001234")
        .build()
);`,
    go: `payout, err := client.Payouts.Instant(&zentiq.PayoutParams{
    PayoutMode: "IMPS",
    Amount:     2500000,
    Beneficiary: zentiq.Beneficiary{
        AccountNumber: "918239012391",
        IFSC:          "HDFC0001234",
    },
})`,
    response: {
      status: 200,
      payout_id: "payout_zntq_4401",
      utr: "628190238120",
      amount: 2500000,
      mode: "IMPS_24x7",
      settlement_status: "SUCCESS_CREDITED",
      latency_ms: 110
    }
  }
};

export default function DeveloperPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>("create-order");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("curl");
  const [copied, setCopied] = useState(false);

  const snippetObj = SNIPPETS[selectedEndpoint];
  const activeCode = snippetObj[selectedLanguage];
  const activeResponse = snippetObj.response;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#FAFBFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FD7902] mb-3 shadow-xs">
            <Code className="w-3.5 h-3.5" />
            <span>Developer-First Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Unified API <span className="text-[#FD7902]">Playground</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            One clean, modern REST interface over complex legacy banking protocols, NPCI switches, and card networks.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-3xl border border-slate-800 shadow-2xl overflow-hidden bg-[#090D16] text-white">
          
          {/* Top Bar: Endpoints Tab */}
          <div className="bg-[#050811] px-4 sm:px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            
            {/* Endpoint Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEndpoint("create-order")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedEndpoint === "create-order"
                    ? "bg-[#FD7902] text-white shadow-md shadow-orange-500/30 ring-1 ring-white/20"
                    : "bg-[#111728] text-slate-400 hover:text-white"
                }`}
              >
                POST /v1/orders/create
              </button>

              <button
                onClick={() => setSelectedEndpoint("split-escrow")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedEndpoint === "split-escrow"
                    ? "bg-[#FD7902] text-white shadow-md shadow-orange-500/30 ring-1 ring-white/20"
                    : "bg-[#111728] text-slate-400 hover:text-white"
                }`}
              >
                POST /v1/escrow/splits
              </button>

              <button
                onClick={() => setSelectedEndpoint("kyc-verify")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedEndpoint === "kyc-verify"
                    ? "bg-[#FD7902] text-white shadow-md shadow-orange-500/30 ring-1 ring-white/20"
                    : "bg-[#111728] text-slate-400 hover:text-white"
                }`}
              >
                POST /v1/kyc/verify
              </button>

              <button
                onClick={() => setSelectedEndpoint("instant-payout")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedEndpoint === "instant-payout"
                    ? "bg-[#FD7902] text-white shadow-md shadow-orange-500/30 ring-1 ring-white/20"
                    : "bg-[#111728] text-slate-400 hover:text-white"
                }`}
              >
                POST /v1/payouts/instant
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-[#111728] p-1 rounded-xl border border-white/10 text-xs">
              {(["curl", "node", "python", "java", "go"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1 rounded-lg font-mono uppercase text-[11px] font-bold transition-all cursor-pointer ${
                    selectedLanguage === lang
                      ? "bg-[#FD7902] text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {lang === "node" ? "Node.js" : lang}
                </button>
              ))}
            </div>

          </div>

          {/* Code and Response Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Request Code Pane (Left 7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-7 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5 text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">{snippetObj.description}</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-white hover:text-[#FFA858] transition-colors bg-[#141B2D] border border-white/20 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-orange-200 leading-relaxed overflow-x-auto p-4 bg-[#050811] rounded-2xl border border-white/10">
                  {activeCode}
                </pre>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>mTLS Authentication &amp; Token Vault Encrypted</span>
                </span>
                <span className="font-mono text-[11px] text-[#FFA858] font-bold">v2.7 Live Spec</span>
              </div>
            </div>

            {/* Response Payload Pane (Right 5 cols) */}
            <div className="lg:col-span-5 bg-[#050811]/90 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Live Response Stream
                  </span>
                  <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    200 OK
                  </span>
                </div>

                <pre className="font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto p-4 bg-[#090D16] rounded-2xl border border-white/10">
                  {JSON.stringify(activeResponse, null, 2)}
                </pre>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <div>Latency: <span className="text-emerald-400 font-mono font-bold">118ms</span></div>
                <div>Status: <span className="text-emerald-400 font-bold">Ready for production</span></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

