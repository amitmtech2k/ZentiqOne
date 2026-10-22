import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZentiqOne | Banking, Payments & FinTech Engineering Platform",
  description: "ZentiqOne helps banks, fintechs and enterprises consult, design, build, integrate and operate secure Banking and Payment solutions including Payment Gateway, Payment Orchestration, API Banking, Digital Banking and Managed Services.",
  keywords: [
    "Banking Solutions",
    "Payment Solutions",
    "Payment Orchestration",
    "Payment Aggregator",
    "Digital Banking",
    "FinTech Consulting",
    "API Banking",
    "UPI",
    "AEPS",
    "BBPS",
    "Payment Gateway",
    "Banking Technology",
    "Banking Transformation"
  ],
  authors: [{ name: "ZentiqOne" }],
  openGraph: {
    title: "ZentiqOne | Banking, Payments & FinTech Engineering Platform",
    description: "ZentiqOne helps banks, fintechs and enterprises consult, design, build, integrate and operate secure Banking and Payment solutions.",
    url: "https://www.zentiqone.com/",
    siteName: "ZentiqOne",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZentiqOne",
    "url": "https://www.zentiqone.com/",
    "description": "ZentiqOne is a Banking & Payment Technology Engineering Platform that helps Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions.",
    "logo": "https://www.zentiqone.com/assets/logo.png",
    "sameAs": ["https://www.linkedin.com/company/zentiqone/"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "zentiqone@gmail.com"
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ZentiqOne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZentiqOne is a Banking & Payment Technology Engineering Platform that helps Banks, FinTechs, NBFCs, Payment Aggregators, Payment Gateways, and Enterprises design, build, integrate, launch, and scale digital payment and banking solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Is ZentiqOne a software development Platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. ZentiqOne is a specialized Banking & Payment Technology Engineering Platform, not a general software development or IT Platform."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries does ZentiqOne work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZentiqOne works with Banks, Urban Cooperative Banks, NBFCs, FinTechs, Payment Aggregators, Payment Gateways, Insurance, Government, Large Enterprises, E-commerce, and SaaS Platforms."
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} font-sans antialiased min-h-screen bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
