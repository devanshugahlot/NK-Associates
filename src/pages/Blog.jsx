import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  FileText, 
  Tag, 
  TrendingUp, 
  ShieldAlert, 
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import SEO from '../components/SEO';
import { contactInfo } from '../data/contactInfo';

const blogArticles = [
  {
    id: 1,
    title: "Section 43B(h) Explained: 45-Day Payment Rule to MSMEs",
    excerpt: "Understand the strict deduction disallowance under Section 43B(h) for payments to micro and small enterprises not settled within statutory time limits.",
    date: "October 15, 2026",
    readTime: "5 min read",
    category: "Income Tax",
    slug: "section-43b-h-msme-payment-rule"
  },
  {
    id: 2,
    title: "GST Amnesty & GSTR-2B ITC Matching: A Guide for Traders",
    excerpt: "How to avoid departmental ASMT-10 scrutiny notices by keeping your purchase register reconciled with GSTR-2B and adhering to rule 37A reversals.",
    date: "September 28, 2026",
    readTime: "6 min read",
    category: "GST Compliance",
    slug: "gstr-2b-itc-reconciliation-guide"
  },
  {
    id: 3,
    title: "Old vs New Tax Regime: Which Saves More Tax for Salaried?",
    excerpt: "A comparative breakdown between Section 115BAC (New Regime) and the Traditional Regime after standard deduction and Section 87A rebate adjustments.",
    date: "August 10, 2026",
    readTime: "7 min read",
    category: "Personal Tax",
    slug: "old-vs-new-tax-regime-comparison"
  },
  {
    id: 4,
    title: "ROC Annual Filing Checklist for Private Limited Companies",
    excerpt: "Crucial deadlines and mandatory documentation for filing Form AOC-4 (financials) and Form MGT-7 (annual returns) under Companies Act 2013.",
    date: "July 22, 2026",
    readTime: "5 min read",
    category: "Corporate Law",
    slug: "roc-annual-filings-checklist"
  }
];

const Blog = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nkassociate.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tax Blog & Insights",
        "item": "https://nkassociate.in/blog"
      }
    ]
  };

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Tax Blog & Insights | NK Associates"
        description="Stay updated with the latest Income Tax amendments, GST notifications, statutory due dates, and corporate MCA compliance insights from NK Associates Jaipur."
        keywords="Tax blog Jaipur, GST updates India, Section 43B MSME rule, Income tax guidelines, CA insights Rajasthan, NK Associates blog"
        canonicalPath="/blog"
        schemaJson={breadcrumbSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-brand-sky transition-colors font-medium">Home</Link>
            </li>
            <li><span>/</span></li>
            <li className="text-brand-sky font-semibold" aria-current="page">Blog & Insights</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-5 sm:p-8 md:p-12 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100 mb-4">
              <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Tax Knowledge Hub & Regulatory Updates
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4 break-words">
              Chartered Accountant Insights & Tax Compliance Updates
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Welcome to the NK Associates knowledge desk. Here, our certified tax professionals and auditors analyze circulars from the Central Board of Direct Taxes (CBDT), CBIC notifications, GST Council decisions, and MCA statutory announcements into actionable business intelligence for entrepreneurs and finance heads.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold text-slate-600">
              <span className="bg-slate-100 px-3 py-1 rounded-full">#DirectTax</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">#GSTAlerts</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">#MCACompliance</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full">#StartupFunding</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <section className="mb-10 sm:mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy break-words">
              Latest Tax Articles & Practical Advisory
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              In-depth analysis written by practicing Chartered Accountants and tax consultants in Jaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {blogArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-brand-sky bg-sky-50 px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 hover:text-brand-sky transition-colors break-words">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                  <Link 
                    to="/contact" 
                    className="text-brand-sky font-bold hover:underline inline-flex items-center gap-1 min-h-[44px]"
                  >
                    Consult on this Topic <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Monthly Statutory Compliance Calendar */}
        <section className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-100 shadow-sm mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 break-words">
            Standard Monthly Tax Due Dates Calendar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Keep your business ahead of statutory penalties. Here is a summary of standard recurring tax filing obligations for Indian businesses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs md:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-brand-sky block mb-1">Every Month (7th)</span>
              <h4 className="font-bold text-brand-navy mb-1">TDS / TCS Deposit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Payment of tax deducted or collected during preceding month via government portal.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-brand-sky block mb-1">Every Month (11th)</span>
              <h4 className="font-bold text-brand-navy mb-1">GSTR-1 Outward Return</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Filing details of outward sales supplies for taxpayers under regular monthly scheme.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-brand-sky block mb-1">Every Month (20th)</span>
              <h4 className="font-bold text-brand-navy mb-1">GSTR-3B Summary Return</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Summary monthly return, input tax credit claim, and net tax liability payout.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-brand-sky block mb-1">Quarterly (31st)</span>
              <h4 className="font-bold text-brand-navy mb-1">Quarterly TDS Return</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Form 24Q (Salary), 26Q (Non-salary), and 27Q (Foreign payments) quarterly submissions.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand-sky hover:underline min-h-[44px]"
            >
              Need personalized compliance assistance for your firm? Contact our Jaipur desk →
            </Link>
          </div>
        </section>

        {/* Back navigation */}
        <div className="border-t border-slate-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm">
          <Link to="/" className="text-slate-600 hover:text-brand-navy font-semibold flex items-center gap-1 min-h-[44px]">
            ← Back to Home
          </Link>
          <Link to="/services" className="text-brand-sky hover:underline font-medium min-h-[44px] flex items-center">
            Explore Core CA Services →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
