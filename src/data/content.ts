export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  icon: string;
  features: string[];
  keyBenefits: string[];
  samplePayload?: string;
}

export interface LearnArticle {
  id: string;
  title: string;
  readTime: string;
  tag: string;
  summary: string;
  keyPoints: string[];
  fullContent: string;
}

export interface PartnerInfo {
  name: string;
  slug: string;
  badge: string;
  bestFor: string;
  coreStrength: string;
  supportedFeatures: string[];
  color: string;
}

export const SITE_METADATA = {
  name: "ZentiqOne",
  tagline: "Engineering the Future of Digital Payments & Banking",
  subtagline: "We help Banks, FinTechs, NBFCs, Enterprises and Payment Businesses design, develop, integrate and manage secure digital payment and banking solutions.",
  description: "ZentiqOne is a Banking & Payment Technology Engineering Platform. ZentiqOne helps Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions.",
  contactEmail: "zentiqone@gmail.com",
  phone: "+91-00000-00000",
  linkedin: "https://www.linkedin.com/company/zentiqone/",
  disclaimer: "ZentiqOne is a technology facilitator and referral partner. ZentiqOne does not directly collect, hold, process, or settle merchant funds. All financial transactions, merchant onboarding compliance (KYC), and payment processing services are executed securely and entirely by our respective RBI-authorised Payment Aggregator partners (Razorpay, Cashfree, and Easebuzz) in accordance with applicable regulatory guidelines."
};

export const CORE_CAPABILITIES = [
  { title: "Multi-Rail Orchestration", detail: "Direct bridges for UPI 2.0, IMPS, Cards & Core Banking Systems", icon: "Layers" },
  { title: "Cloud-Native Reliability", detail: "Microservices architectures designed for elastic throughput and resilience", icon: "Cpu" },
  { title: "Compliance-Ready Security", detail: "Architected around RBI Master Directions, PCI-DSS & tokenization standards", icon: "ShieldCheck" },
  { title: "Turnkey Engineering Lifecycle", detail: "From architecture and sandbox validation to production cutover and support", icon: "GitBranch" },
];

export const STATS = CORE_CAPABILITIES;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "payment-platform-development",
    title: "Payment Platform Development",
    badge: "Core Infrastructure",
    icon: "CreditCard",
    shortDesc: "End-to-end engineering of payment platforms that process, route, and settle transactions at scale.",
    fullDesc: "We engineer resilient, high-throughput payment architectures built to handle peak concurrent loads with zero downtime. From custom gateway design to routing intelligence and multi-acquirer settlement pipelines.",
    features: [
      "Custom Payment Gateway Development",
      "Payment Aggregator Solutions (PA/PG Architecture)",
      "Digital Wallet & UPI 2.0 Integration Platforms",
      "Collections & Instant Bulk Disbursements Engine",
      "Smart Dynamic Routing & Cascading Fallbacks",
      "Real-time Reconciliation & Settlement Engine"
    ],
    keyBenefits: [
      "Low-latency optimized authorization routing",
      "Multi-bank failover & auto-retry logic",
      "PCI-DSS compliant modular tokenization vault"
    ],
    samplePayload: `{
  "action": "INITIATE_PAYMENT",
  "gateway": "ZentiqOne-Orchestrator",
  "routing": "SMART_OPTIMIZED_ROUTE",
  "networks": ["UPI_AUTOPAY", "CARDS_TOKENIZED", "NET_BANKING"],
  "compliance": "PCI_DSS_V4_READY"
}`
  },
  {
    id: "banking-solutions",
    title: "Banking Solutions",
    badge: "Digital Banking",
    icon: "Building2",
    shortDesc: "Digital banking platforms that help banks and NBFCs serve retail and corporate customers online.",
    fullDesc: "Modernize legacy core banking systems with cloud-native customer-facing portals, secure video KYC flows, seamless loan origination pipelines, and corporate treasury management consoles.",
    features: [
      "Next-Gen Internet & Mobile Banking Applications",
      "Digital Onboarding, e-KYC & Video KYC Workflows",
      "Corporate Banking & Multi-Tier Approvals Portal",
      "Digital Lending, Credit Scoring & Loan Origination (LOS/LMS)",
      "Current & Savings Account (CASA) Automation",
      "Audit Trail & Risk Governance Frameworks"
    ],
    keyBenefits: [
      "Automated paperless digital onboarding flows",
      "Omnichannel experience across Web, iOS, and Android",
      "Seamless bridge to existing Core Banking Systems (CBS)"
    ],
    samplePayload: `{
  "flow": "DIGITAL_ONBOARDING_VKYC",
  "modules": ["AADHAAR_OKYC", "PAN_NSDL_VERIFY", "LIVENESS_CHECK"],
  "cbs_bridge": "REST_ISO8583_CONNECTOR",
  "status": "READY_FOR_DISBURSAL"
}`
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    badge: "Connectivity & Rails",
    icon: "Network",
    shortDesc: "Integration engineering connecting your platform to banks, card networks, NPCI, and regulatory systems.",
    fullDesc: "Eliminate integration headaches with pre-engineered connectors for NPCI rails, major acquiring banks, credit bureaus, and identity verification authorities.",
    features: [
      "Bank Host-to-Host (H2H) & Open Banking APIs",
      "NPCI Ecosystem: UPI, UPI Lite, Autopay & BBPS",
      "Card Networks: Visa, Mastercard & RuPay Direct Connect",
      "Automated eNACH & Mandate Management",
      "Identity & Fraud Check: NSDL, UIDAI, CKYC, Digilocker",
      "FASTag & Toll Collection Systems"
    ],
    keyBenefits: [
      "Pre-engineered connectors for rapid integration & certification",
      "Automated webhook retry queues and signature validation",
      "Unified JSON interface over legacy ISO 8583 message streams"
    ],
    samplePayload: `{
  "rail": "NPCI_UPI_2.0",
  "protocol": "API_REST_OVER_MTLS",
  "supported_schemes": ["UPI_INTENT", "COLLECT", "DYNAMIC_QR"],
  "availability": "HIGH_AVAILABILITY_ACTIVE_ACTIVE"
}`
  },
  {
    id: "merchant-enablement",
    title: "Merchant Enablement",
    badge: "GTM & Operations",
    icon: "Store",
    shortDesc: "Hands-on support to onboard merchants, select partners, and get payment products certified and live.",
    fullDesc: "Accelerate your go-to-market with frictionless merchant lifecycle management tools, instant automated underwriting, customized checkout SDKs, and payment partner selection.",
    features: [
      "Automated Merchant Onboarding & Self-Serve Portal",
      "Payment Gateway Selection & Commercial Negotiation",
      "Acquiring Bank Introductions & Sponsorship Support",
      "Customizable Checkout SDKs (Web, React, Flutter, iOS, Android)",
      "Scheme Certification & Pre-Audit Go-Live Support",
      "Merchant Risk Profiling & Tiered Daily Limits"
    ],
    keyBenefits: [
      "Streamlined automated merchant onboarding pipelines",
      "Optimized interchange and MDR fee structures",
      "Direct technical liaison during sponsor bank certifications"
    ],
    samplePayload: `{
  "merchant": "ENTERPRISE_MERCHANT_009",
  "kyc_tier": "TIER_3_FULL_VERIFIED",
  "payout_schedule": "INSTANT_SETTLEMENT",
  "enabled_gateways": ["RAZORPAY", "CASHFREE", "EASEBUZZ"]
}`
  },
  {
    id: "banking-consulting",
    title: "Banking Consulting",
    badge: "Strategy & Advisory",
    icon: "Briefcase",
    shortDesc: "Strategic guidance for organizations building or scaling a regulated payments business.",
    fullDesc: "Navigate the complex landscape of regulatory requirements, licensing frameworks, partner bank agreements, and technical architecture with senior FinTech veterans.",
    features: [
      "Payment Aggregator (PA) & In-Principle License Advisory",
      "Acquiring & Nodal/Escrow Bank Selection",
      "Settlement & Escrow Structuring Compliance",
      "RBI Master Directions & Data Localization Guidance",
      "PCI-DSS v4.0 Readiness Assessment & Gap Analysis",
      "FinTech Product Strategy & Monetization Roadmaps"
    ],
    keyBenefits: [
      "Avoid costly architecture rewrites and regulatory penalties",
      "Fast-track escrow account openings and nodal bank SLAs",
      "Domain expertise rooted in Indian & global payment standards"
    ],
    samplePayload: `{
  "consulting_scope": "PA_REGULATORY_COMPLIANCE",
  "frameworks": ["RBI_CIRCULAR_PA_PG", "PCI_DSS_V4", "DATA_LOCALIZATION"],
  "deliverables": ["ARCHITECTURE_BLUEPRINT", "AUDIT_EVIDENCE_PACK"]
}`
  },
  {
    id: "managed-services",
    title: "Managed Technology Services",
    badge: "24x7 Operations",
    icon: "Cpu",
    shortDesc: "Ongoing operations support keeping payment and banking platforms secure, available, and performant.",
    fullDesc: "Ensure round-the-clock platform reliability with proactive transaction telemetry, synthetic API monitoring, DevSecOps infrastructure management, and dedicated incident response.",
    features: [
      "24x7x365 Real-Time Transaction & API Monitoring",
      "Cloud Infrastructure Management (AWS, Azure, GCP)",
      "DevOps, CI/CD Automation & Zero-Downtime Deployments",
      "Security Telemetry, DDoS Mitigation & WAF Tuning",
      "Annual Maintenance Contracts (AMC) & Dedicated SLA Support",
      "Disaster Recovery & High-Availability Hot-Standby Systems"
    ],
    keyBenefits: [
      "High-availability active-active multi-region deployment",
      "Immediate automated failover and incident alert paging",
      "Continuous patch management and vulnerability scans"
    ],
    samplePayload: `{
  "monitoring": "SYNTHETIC_TRANSACTION_TELEMETRY",
  "architecture": "HIGH_AVAILABILITY_MULTI_REGION",
  "incident_response": "AUTOMATED_SEV1_ALERTING",
  "environment": "ACTIVE_ACTIVE_CLUSTER"
}`
  }
];

export const WHY_ZENTIQONE = [
  {
    num: "01",
    title: "Launch Faster",
    desc: "Reusable platform components and proven delivery patterns shrink the time between concept and production launch from years to weeks.",
    icon: "Rocket"
  },
  {
    num: "02",
    title: "Integrate Faster",
    desc: "Deep, hands-on experience with bank, NPCI, and card network APIs means zero surprises during protocol handshake and certification.",
    icon: "Zap"
  },
  {
    num: "03",
    title: "Scale Seamlessly",
    desc: "Cloud-native, microservices-ready architecture designed to absorb millions of daily transactions without costly re-platforming exercises.",
    icon: "TrendingUp"
  },
  {
    num: "04",
    title: "Stay Compliant",
    desc: "RBI guidelines, data localization, and PCI-DSS requirements are designed into the base architecture from day one, not patched on at the end.",
    icon: "ShieldCheck"
  },
  {
    num: "05",
    title: "Reduce Engineering Costs",
    desc: "Proven frameworks and modular building blocks eliminate redundant development cycles compared to building from a blank sheet.",
    icon: "Layers"
  },
  {
    num: "06",
    title: "Go Live with Confidence",
    desc: "Structured end-to-end sandbox simulations, certification drills, and pilot launch support ensure zero hiccups on day one.",
    icon: "CheckCircle"
  }
];

export const SECURITY_PILLARS = [
  {
    title: "Security-First Engineering",
    icon: "Lock",
    desc: "End-to-end encryption in transit (TLS 1.3 / mTLS) and at rest (AES-256), secure key vaults (HSM/KMS), and rigid secure SDLC discipline across all platform layers."
  },
  {
    title: "Compliance-Aware by Design",
    icon: "FileCheck",
    desc: "Deep architectural alignment with RBI Master Directions for Payment Aggregators, card tokenization rules, and core PCI-DSS principles."
  },
  {
    title: "Audit & Certification Ready",
    icon: "ShieldAlert",
    desc: "Comprehensive automated audit logging, immutable tamper-evident transaction logs, and structured evidence packs to clear third-party CERT-In and SOC2 audits."
  }
];

export const PARTNERS_DATA: PartnerInfo[] = [
  {
    name: "Razorpay",
    slug: "razorpay",
    badge: "Direct Referral Partner",
    bestFor: "Seamless checkout experiences, international payments & instant smart checkout.",
    coreStrength: "Industry-leading success rates, robust developer APIs & rich payment mode ecosystem.",
    supportedFeatures: ["Standard & Custom Checkout", "UPI Autopay & Subscriptions", "Payment Links & QR", "Smart Routing Engine"],
    color: "from-blue-600/30 to-indigo-700/20"
  },
  {
    name: "Cashfree Payments",
    slug: "cashfree",
    badge: "Direct Referral Partner",
    bestFor: "Automated high-speed bulk payouts, vendor splits & instant account verification.",
    coreStrength: "Highly resilient payout architecture, multi-bank payout routing & instant refunds.",
    supportedFeatures: ["Bulk Disbursals / Payouts", "Auto-Split Marketplace", "Instant Bank Verification", "Recurring Mandates"],
    color: "from-cyan-600/30 to-blue-700/20"
  },
  {
    name: "Easebuzz",
    slug: "easebuzz",
    badge: "Direct Referral Partner",
    bestFor: "High-volume B2B transactions, digital invoicing & fee collection platforms.",
    coreStrength: "Specialized fee collection tools, automated reconciliation & smart subscription management.",
    supportedFeatures: ["Smart Billing & Invoicing", "Educational & B2B Portals", "Split Payment Routing", "Custom Webhooks"],
    color: "from-amber-600/30 to-orange-700/20"
  }
];

export interface IndustryVertical {
  id: string;
  name: string;
  sub: string;
  category: "Banking & Credit" | "Payment Rails & FinTech" | "Enterprise & Commerce";
  icon: string;
  desc: string;
  tags: string[];
  modules: string[];
  protocols: string[];
  compliance: string;
  timeframe: string;
}

export const INDUSTRIES: IndustryVertical[] = [
  { 
    id: "banks",
    name: "Commercial & SFBs", 
    sub: "Core Banking & Branch Modernization", 
    category: "Banking & Credit",
    icon: "Building2",
    desc: "Modernize legacy Core Banking Systems (CBS) with real-time ISO 8583 / ISO 20022 bridges, native mobile banking suites, and video KYC onboarding pipelines.",
    tags: ["CBS Bridge", "Mobile Banking", "ISO 20022"],
    modules: [
      "Host-to-Host (H2H) Core Banking Middleware",
      "Omnichannel Retail & Corporate Mobile Apps",
      "Real-Time V-KYC & CKYC Registry Integration",
        "Automated Audit Trails & Risk Governance"
    ],
    protocols: ["ISO 8583", "ISO 20022", "REST over mTLS", "MQ Series"],
    compliance: "RBI Cyber Security Framework & Data Localization Compliant",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "ucb",
    name: "Urban Co-op Banks", 
    sub: "UCB Digital Infrastructure", 
    category: "Banking & Credit",
    icon: "Landmark",
    desc: "Cost-efficient digital transformation enabling Tier-2/3 co-operative banks to offer modern UPI switching, IMPS/NEFT transfers, and secure internet banking.",
    tags: ["UPI Switch", "IMPS/NEFT", "Cyber Audit"],
    modules: [
      "Sub-Member UPI & IMPS Connectivity Switch",
      "White-Label Mobile Banking & Passbook App",
      "Automated Regulatory Reporting to RBI Portal",
      "End-to-End Vulnerability & Patch Governance"
    ],
    protocols: ["NPCI Rail", "IMPS ISO Stream", "JSON APIs", "SFTP Data Pipes"],
    compliance: "RBI Comprehensive Cyber Security Framework Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "nbfcs",
    name: "NBFCs & Microfinance", 
    sub: "Digital Lending & Collections", 
    category: "Banking & Credit",
    icon: "Coins",
    desc: "Automate loan origination (LOS) and loan management (LMS) with instant Aadhaar e-Sign, credit bureau pulls, automated eNACH recurring debits, and instant disbursals.",
    tags: ["Loan Origination", "eNACH Mandates", "Instant Payouts"],
    modules: [
      "Rule-Based Credit Underwriting & Bureau Pings",
      "Instant Loan Disbursal Engine (IMPS/UPI Payouts)",
      "Automated eNACH & UPI Autopay Repayment Engine",
      "Delinquency Tracking & Smart Dunning Notifications"
    ],
    protocols: ["CIBIL/Experian APIs", "NPCI eNACH", "UPI Autopay", "Webhooks"],
    compliance: "RBI Digital Lending Guidelines (DLG) Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "fintechs",
    name: "FinTechs & Neobanks", 
    sub: "Embedded Finance & Cards", 
    category: "Payment Rails & FinTech",
    icon: "Sparkles",
    desc: "Launch scalable financial products with plug-and-play PPI wallet infrastructure, co-branded card issuance rails, multi-tier virtual account ledgers, and rewards engines.",
    tags: ["PPI Wallets", "Co-Branded Cards", "Virtual Accounts"],
    modules: [
      "PPI Prepaid Card & Virtual Account Ledgers",
      "Card Tokenization & In-App Lifecycle Controls",
      "Rewards, Cashbacks & Tiered Incentive Engine",
      "Real-Time Fraud Detection & Velocity Rules"
    ],
    protocols: ["Card Schemes (Visa/RuPay)", "Open Banking APIs", "gRPC", "Webhooks"],
    compliance: "PCI-DSS Level 1 & PPI Master Directions Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "payment-aggregators",
    name: "Payment Aggregators", 
    sub: "Licensed PA / PG Engine", 
    category: "Payment Rails & FinTech",
    icon: "Boxes",
    desc: "Build complete PA infrastructure with instant merchant digital onboarding, automated merchant risk scoring, multi-acquirer switching, and automated nodal escrow settlements.",
    tags: ["Nodal Escrow", "Merchant Underwriting", "RBI Compliance"],
    modules: [
      "Merchant Underwriting, Risk Tiering & KYB Engine",
      "Multi-Acquirer Smart Routing & Fallback Switch",
      "Nodal/Escrow T+1 Split Settlement Calculation",
      "Merchant Management Portal & Analytics Dashboard"
    ],
    protocols: ["ISO 8583 Switch", "AES-256 HSM", "RESTful SDKs", "Webhook Queues"],
    compliance: "RBI Payment Aggregator (PA) Guidelines Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "payment-gateways",
    name: "Payment Gateways", 
    sub: "High-Throughput Switch & Routing", 
    category: "Payment Rails & FinTech",
    icon: "CreditCard",
    desc: "Ultra-low-latency transaction switching with direct acquiring bank H2H pipes, network card tokenization, and dynamic fraud filters.",
    tags: ["Dynamic Routing", "Card Tokenization", "Low-Latency Switch"],
    modules: [
      "High-Throughput Transaction Switch",
      "Network Tokenization (Visa, Mastercard, RuPay)",
      "Dynamic Success-Rate-Optimized Routing",
      "Chargeback Lifecycle & Dispute Resolution Portal"
    ],
    protocols: ["Direct H2H", "ISO 8583 / 20022", "mTLS", "PCI Key Vault"],
    compliance: "PCI-DSS Level 1 Certified Architecture",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "insurance",
    name: "Insurance Companies", 
    sub: "Policy Premium & Claim Disbursals", 
    category: "Enterprise & Commerce",
    icon: "HeartHandshake",
    desc: "Streamline insurance cash flows with recurring policy premium collections via UPI Autopay/eNACH, instant multi-bank claim disbursals, and automated reconciliation.",
    tags: ["UPI Autopay", "Instant Claims", "Policy Mandates"],
    modules: [
      "Zero-Bounce Recurring Premium Debit Pipeline",
      "Instant 24/7 Claim Payout Bridge to Policyholders",
      "Multi-Channel Checkout for Web & Agent Portals",
      "Automated Bank-to-Policy Reconciliation Ledger"
    ],
    protocols: ["eNACH", "UPI Autopay 2.0", "IMPS Disbursals", "ERP Sync"],
    compliance: "IRDAI Guidelines & Information Security Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "government",
    name: "Government & PSUs", 
    sub: "Public Treasury & BBPS Rails", 
    category: "Enterprise & Commerce",
    icon: "Shield",
    desc: "Centralize municipal tax collections, utility billing, and citizen treasury portals with unified Bharat Bill Payment System (BBPS) biller onboarding and challan systems.",
    tags: ["BBPS Rail", "Treasury Integration", "Citizen Portals"],
    modules: [
      "BBPS Biller Registry & Direct Rail Integration",
      "Municipal Challan & Utility Bill Generation Suite",
      "Departmental Multi-Tier Treasury Settlement",
      "Citizen Self-Service Payment & Receipt Portal"
    ],
    protocols: ["NPCI BBPS", "Treasury APIs", "mTLS", "Secure SMS Gateway"],
    compliance: "Govt. Cybersecurity Guidelines & GFR Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "enterprises",
    name: "Large Enterprises", 
    sub: "Corporate Treasury & ERP Payouts", 
    category: "Enterprise & Commerce",
    icon: "Building",
    desc: "Automate corporate treasury management with multi-bank host-to-host payout pipes, automated vendor disbursements, multi-level approval workflows, and SAP/Oracle ERP sync.",
    tags: ["ERP Reconciliation", "Vendor Payouts", "Multi-Bank Switch"],
    modules: [
      "Multi-Bank Host-to-Host Corporate Payout Engine",
      "Dual-Control & Multi-Level Maker-Checker Matrix",
      "Automated SAP, Oracle & Tally Bank Reconciliation",
      "Real-Time Liquidity & Account Balance Monitor"
    ],
    protocols: ["ERP Connectors", "Host-to-Host H2H", "SFTP Encrypted", "REST APIs"],
    compliance: "Corporate Governance & ISO 27001 Aligned",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "ecommerce",
    name: "E-Commerce & Marketplaces", 
    sub: "High-Volume Checkout & Splits", 
    category: "Enterprise & Commerce",
    icon: "ShoppingCart",
    desc: "Elevate checkout conversion with customized 1-click checkout SDKs, automated multi-vendor escrow split settlement, instant refund triggers, and biometric payment rails.",
    tags: ["Split Settlement", "1-Click Checkout", "Instant Refunds"],
    modules: [
      "Custom 1-Click Drop-in Checkout SDKs",
      "Multi-Vendor Escrow Split & Commission Engine",
      "Instant Source-Account Refund Pipeline",
      "Dynamic Fraud Rules & Risk Scoring Matrix"
    ],
    protocols: ["React/Flutter SDKs", "REST APIs", "Webhooks", "Tokenization"],
    compliance: "RBI Card-on-File Tokenization (CoFT) Compliant",
    timeframe: "Turnkey Architecture"
  },
  { 
    id: "saas",
    name: "SaaS Platforms", 
    sub: "Subscription & Usage Billing", 
    category: "Enterprise & Commerce",
    icon: "Globe",
    desc: "Deploy automated recurring subscription billing engines with tiered usage metering, GST/international tax calculations, multi-currency support, and smart dunning retry logic.",
    tags: ["Recurring Invoicing", "Usage Metering", "Dunning Logic"],
    modules: [
      "Automated Recurring Billing & Pro-Rata Metering",
      "Smart Dunning, Cascade Retries & Card Expiry Sync",
      "Automated Tax (GST/TDS) Invoicing & Ledger Sync",
      "Developer-Friendly Webhooks & Customer Portal"
    ],
    protocols: ["UPI Autopay", "Card Recurring", "Stripe/Razorpay Rail", "REST"],
    compliance: "RBI e-Mandate & Tax Compliance Aligned",
    timeframe: "Turnkey Architecture"
  }
];

export const TECH_STACK = [
  { category: "Cloud & Infrastructure", items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"] },
  { category: "Backend & Core Engineering", items: ["Java / Spring Boot", ".NET Core", "Node.js", "PostgreSQL", "Redis"] },
  { category: "Frontend & Mobile", items: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS"] },
  { category: "Protocols & Payments", items: ["API First / REST", "ISO 8583", "ISO 20022", "OAuth 2.0 / mTLS", "Webhooks"] }
];

export const ECOSYSTEM_FLOW = [
  { id: "step1", name: "End-User / Customer", type: "origin", desc: "Initiates purchase or transfer" },
  { id: "step2", name: "ZentiqOne Orchestrator", type: "platform", desc: "Tokenization, Smart Routing & Fraud Checks" },
  { id: "step3", name: "Payment Aggregators & Gateways", type: "partner", desc: "Razorpay, Cashfree, Easebuzz" },
  { id: "step4", name: "Card Networks & NPCI", type: "rail", desc: "Visa, Mastercard, RuPay, UPI Switches" },
  { id: "step5", name: "Issuing & Acquiring Banks", type: "settlement", desc: "HDFC, ICICI, SBI, Axis, Core CBS" }
];

export const DELIVERY_STAGES = [
  { 
    num: "01", 
    title: "Discovery & Architecture Blueprint", 
    desc: "Domain feasibility analysis, regulatory roadmapping (RBI & PCI-DSS), microservices architecture, and secure API contracts." 
  },
  { 
    num: "02", 
    title: "Modular Engineering & Rail Integration", 
    desc: "Sprint-based platform development utilizing pre-engineered connectors for NPCI, core banking H2H switches, and tokenization vaults." 
  },
  { 
    num: "03", 
    title: "Sandbox Validation & Managed Ops", 
    desc: "Rigorous synthetic penetration testing, network scheme audits, zero-downtime cutover, and continuous real-time telemetry." 
  }
];

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    id: "payment-gateway-vs-aggregator",
    title: "Payment Gateway vs. Payment Aggregator",
    readTime: "5 min read",
    tag: "Fundamentals",
    summary: "Understand the core technical and legal distinctions between a Payment Gateway (technology switch) and a Payment Aggregator (funds handler with RBI licensing).",
    keyPoints: [
      "A Payment Gateway is purely a technical communication pipe encrypting and routing transaction data between merchant and acquirer.",
      "A Payment Aggregator pools merchant funds into a regulated Escrow / Nodal account before settling to individual merchant accounts.",
      "Aggregators require formal RBI authorization and strict net-worth capital compliance ($15 Cr - $25 Cr).",
      "Hybrid architectures allow enterprises to build their own proprietary gateway switch while routing through authorized aggregators."
    ],
    fullContent: `In the modern digital payments landscape, the terms Payment Gateway (PG) and Payment Aggregator (PA) are frequently used interchangeably, but they refer to fundamentally different layers of the financial stack.

1. What is a Payment Gateway?
A Payment Gateway is essentially a software application that acts as a secure encrypted conduit between an e-commerce website/app and the acquiring bank. It captures credit card, debit card, or UPI details, securely tokenizes or encrypts them, and transmits the payload to the payment network for authorization. Gateways do not touch or settle merchant money; they charge purely technology SaaS fees.

2. What is a Payment Aggregator?
A Payment Aggregator combines the technological functionality of a gateway with funds handling and merchant onboarding. Under the Reserve Bank of India (RBI) guidelines, Payment Aggregators collect funds from customers, pool them into a dedicated Escrow account, and settle them to sub-merchants within designated settlement cycles (e.g., T+1 or T+2).

3. Key Architectural Differences:
• Funds Custody: Gateways NEVER touch funds. Aggregators hold funds in RBI-regulated nodal/escrow accounts.
• Regulatory Compliance: Aggregators need direct in-principle and final PA licenses from RBI. Pure gateways operate as technology service providers (TSPs).
• Onboarding & Risk: Aggregators perform merchant underwriting, KYC verification, chargeback management, and fraud mitigation.`
  },
  {
    id: "how-upi-works",
    title: "How UPI Works: The Architecture Behind India's Real-Time Rail",
    readTime: "6 min read",
    tag: "Payment Rails",
    summary: "A deep dive into NPCI's Unified Payments Interface, PSP banks, TPAP apps, Virtual Payment Addresses (VPA), and the multi-tier switch architecture.",
    keyPoints: [
      "UPI is built on top of the Immediate Payment Service (IMPS) switch managed by NPCI.",
      "Operates with a 4-party model: Payer Bank (Issuer), Payee Bank (Acquirer), NPCI Central Switch, and PSPs/TPAPs.",
      "Resolves virtual addresses (user@okhdfcbank) via central directory mapping without exposing raw account numbers.",
      "Supports push payments (Pay), pull requests (Collect), recurring mandates (Autopay), and UPI Lite offline ledger."
    ],
    fullContent: `Unified Payments Interface (UPI) revolutionized retail digital payments in India by enabling instantaneous inter-bank peer-to-peer (P2P) and peer-to-merchant (P2M) transactions on mobile devices.

1. The Core Architecture Components:
• NPCI UPI Central Switch: The central clearing and routing hub maintaining real-time directories, authorization engines, and settlement logs.
• Payment Service Providers (PSP Banks): Regulated banks connecting directly to NPCI via secure leased lines or mTLS channels.
• Third-Party Application Providers (TPAPs): Consumer-facing apps (PhonePe, Google Pay, CRED) interfacing through certified PSP bank SDKs.
• Issuer & Acquirer CBS: The core banking systems verifying PINs, checking account balances, and debiting/crediting accounts.

2. Transaction Life Cycle:
1. The customer initiates a payment via QR code scan or VPA entry.
2. The TPAP forwards the encrypted payload to the Remitter PSP.
3. Remitter PSP talks to the NPCI Switch, which queries the central directory to locate the beneficiary bank.
4. The customer inputs their UPI PIN in an NPCI-controlled Common Library (CL) sandbox.
5. Remitter Bank confirms balance & debits account.
6. Beneficiary Bank receives authorization message & credits merchant account.
7. NPCI sends success callback back to both parties within 800-1500 milliseconds.`
  },
  {
    id: "settlement-escrow-models",
    title: "Settlement & Escrow Models in Modern FinTech",
    readTime: "4 min read",
    tag: "Compliance & Banking",
    summary: "How customer funds move through nodal, escrow, and virtual accounts before reaching merchant bank accounts, adhering to RBI settlement directives.",
    keyPoints: [
      "Escrow and Nodal accounts are tripartite arrangements between the aggregator, the trustee/sponsor bank, and the merchant.",
      "Strict RBI rules dictate permissible credits (customer payments) and debits (merchant settlement, refunds, authorized charges).",
      "Automated split settlement engines allow marketplace platforms to deduct commission and instantly disburse supplier shares.",
      "Real-time reconciliation prevents float mismatch and ensures zero leakage across settlement windows."
    ],
    fullContent: `For any platform facilitating transactions between buyers and sellers (marketplaces, aggregators, gig-economy apps), managing how funds move and where they temporarily reside is critical for regulatory compliance.

1. Why Escrow Accounts Exist:
To protect consumers and merchants against insolvency or malpractice by the platform, the regulator mandates that intermediary platforms cannot hold customer funds in their standard current operational bank accounts. Funds must be isolated in an Escrow account where the platform has zero discretion to withdraw funds except for certified merchant payouts and documented platform fees.

2. Settlement Timelines & Cycles:
• T+0 (Instant): Funds settled within hours of delivery/order completion using real-time IMPS/NEFT rails.
• T+1 / T+2 (Standard): Batch settlement after reconciliation with network charge logs.
• Rolling Reserves: A percentage withheld temporarily to cushion against chargebacks and disputes.`
  },
  {
    id: "iso8583-vs-iso20022",
    title: "ISO 8583 vs. ISO 20022: The Payment Messaging Evolution",
    readTime: "5 min read",
    tag: "Protocols",
    summary: "Comparing legacy bitmap-based banking messaging (ISO 8583) with the modern, rich-data XML/JSON financial standard (ISO 20022).",
    keyPoints: [
      "ISO 8583 was formulated in 1987, utilizing binary bitmap packets optimized for low-bandwidth legacy networks.",
      "ISO 20022 provides an extensible XML/JSON data dictionary with rich semantic metadata, reducing ambiguity and false AML alerts.",
      "Global payment rails (SWIFT, FedNow, RTGS) are actively mandating migration to ISO 20022.",
      "Modern integration layers translate legacy ISO 8583 streams into developer-friendly REST/JSON APIs on the fly."
    ],
    fullContent: `Financial institutions and payment switches rely on standardized messaging protocols to communicate card authorizations, ATM withdrawals, and wire transfers.

1. ISO 8583 (The Legacy Workhorse):
Originating in 1987, ISO 8583 is a compact, bitmap-driven format where message types (MTI - Message Type Identifier like 0100 for auth request, 0200 for financial request) and bitmapped data elements specify transaction amount, cardholder number, and merchant ID. While extremely fast and lightweight, it is rigid and prone to custom dialect variations across different banks.

2. ISO 20022 (The Modern Universal Standard):
ISO 20022 is an open global standard using structured XML or JSON syntax. It allows rich metadata—such as invoice details, full beneficiary remittance data, and compliance identifiers—to travel along with the payment. This drastically improves automated fraud screening, reduces payment friction, and simplifies cross-border interoperability.`
  }
];

export const FAQS = [
  {
    q: "What is ZentiqOne?",
    a: "ZentiqOne is a specialized Banking & Payment Technology Engineering Platform. We help Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions."
  },
  {
    q: "Is ZentiqOne a general software development company?",
    a: "No. ZentiqOne is a dedicated Banking & Payment Technology Engineering Platform, not a general software agency. Every single project and architecture we build is backed by deep payment rails, NPCI standards, RBI compliance, and banking protocol domain expertise."
  },
  {
    q: "Which industries does ZentiqOne work with?",
    a: "We work with Commercial Banks, Urban Cooperative Banks, NBFCs, FinTechs, Payment Aggregators, Payment Gateways, Insurance Providers, Government Bodies, Large Enterprises, E-commerce Marketplaces, and SaaS Platforms."
  },
  {
    q: "Does ZentiqOne hold or settle customer funds directly?",
    a: "No. ZentiqOne is a technology facilitator and referral engineering partner. ZentiqOne does not directly collect, hold, process, or settle merchant funds. All financial settlement and payment processing are securely executed by RBI-authorised Payment Aggregator partners (such as Razorpay, Cashfree, and Easebuzz) or licensed sponsor banks."
  },
  {
    q: "How do I get started with ZentiqOne?",
    a: "Schedule a consultation through our website or reach out directly at zentiqone@gmail.com. Our engineering leads will review your product roadmap, transaction targets, and outline the ideal architecture, integration timeline, or managed service plan."
  }
];
