import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LEARN_ARTICLES, SITE_METADATA } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Clock, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Share2 
} from "lucide-react";

export async function generateStaticParams() {
  return LEARN_ARTICLES.map((article) => ({
    slug: article.id,
  }));
}

export default async function LearnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = LEARN_ARTICLES.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <article className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-slate-900">
            Resources
          </Link>
          <span>/</span>
          <span className="text-[#FD7902]">{article.title}</span>
        </div>

        {/* Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="bg-orange-100 text-[#FD7902] font-bold px-3 py-1 rounded-md">
              {article.tag}
            </span>
            <span className="text-slate-700 flex items-center gap-1 font-bold">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span>{article.readTime}</span>
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            {article.summary}
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-8 p-6 rounded-2xl bg-orange-50/60 border border-orange-200">
          <div className="text-xs font-bold uppercase text-[#FD7902] mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Key Architectural Takeaways</span>
          </div>
          <div className="space-y-2.5">
            {article.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#FD7902] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Article Text */}
        <div className="prose prose-slate max-w-none text-base text-slate-800 leading-relaxed space-y-6 whitespace-pre-line py-4 font-normal">
          {article.fullContent}
        </div>

        {/* Author & Footer info */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-700 font-semibold">
            Published by <strong>ZentiqOne FinTech Engineering</strong>
          </div>
          <Link
            href="/#learn"
            className="text-xs font-bold text-[#FD7902] hover:text-[#E36A00] flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All Architecture Articles →</span>
          </Link>
        </div>

      </article>

      <Footer />
    </main>
  );
}
