import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Award,
  Users,
  CheckCircle,
  Receipt,
  Percent,
  ShieldAlert,
  Briefcase,
  MapPin,
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  Globe,
  FileCheck,
  MessageSquare,
  Laptop
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import ServiceEstimator from '../components/ServiceEstimator';
import { contactInfo } from '../data/contactInfo';

// Helper component for counter animation
const CounterItem = ({ number, label, suffix = "" }) => {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-premium border border-slate-100 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-brand-navy flex items-center justify-center"
      >
        <span className="text-brand-sky">{number}</span>
        {suffix && <span className="text-brand-sky ml-1">{suffix}</span>}
      </motion.div>
      <span className="mt-2 text-sm md:text-base text-brand-charcoal font-medium">
        {label}
      </span>
    </div>
  );
};

const homeFaqs = [
  {
    q: "Does NK Associates provide CA & tax services across all India?",
    a: "Yes, absolutely! While our head office is located in Jaipur, Rajasthan, our complete workflow is 100% digital. We serve clients across all 28 states and UTs in India (Delhi, Mumbai, Bengaluru, Kolkata, Pune, etc.) via secure WhatsApp, phone, and online video consultations.",
    link: "/contact",
    linkText: "Start Pan-India Digital Consultation"
  },
  {
    q: "How can I register for GST with NK Associates from outside Jaipur?",
    a: "You simply upload your documents (PAN, Aadhaar, electricity bill, and rent agreement/NOC) via WhatsApp or email. Our certified team reviews everything, files the application online, tracks the ARN, and secures your GSTIN without you needing to step outside your office.",
    link: "/services#gst-reg",
    linkText: "View GST Registration Services"
  },
  {
    q: "Does NK Associates file Income Tax Returns (ITR) for salaried & business clients?",
    a: "Yes, NK Associates files all forms of Income Tax Returns including ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, and ITR-6 for salaried individuals, professionals, traders, LLPs, and companies, ensuring maximum tax savings and compliance with latest IT rules.",
    link: "/services#itr",
    linkText: "Explore Income Tax Services"
  },
  {
    q: "Where is the NK Associates head office located in Jaipur?",
    a: "Our head office is located at 4th Floor, Sanjay Mansion, Shri Ramnagar Colony, Dada Gurudev Nagar, Sanganer, Jaipur, Rajasthan 302029. We welcome clients for in-person consultations as well as digital meetings.",
    link: "/contact",
    linkText: "Get Office Directions & Contact"
  },
  {
    q: "Can NK Associates handle Income Tax and GST demand notices?",
    a: "Yes, our certified tax consultants review departmental notices, analyze ITC/income discrepancies, draft logical legal submissions, and represent your case before tax authorities across India.",
    link: "/services#notice-reply",
    linkText: "Learn About Notice Replies"
  },
  {
    q: "What corporate and startup services do you provide?",
    a: "We provide Private Limited & LLP incorporation, Udyam/MSME registration, Trademark registration, ROC compliance, CMA project reports for bank financing, and statutory audits.",
    link: "/services#company-reg",
    linkText: "Check Business Setup Services"
  }
];

const panIndiaSteps = [
  {
    step: "01",
    title: "Connect Digitally",
    desc: "Reach out via WhatsApp or call. Discuss your requirements directly with our senior tax advisor.",
    icon: <MessageSquare className="w-6 h-6 text-brand-sky" />
  },
  {
    step: "02",
    title: "100% Paperless Upload",
    desc: "Share your invoices, Form 16, or bank statements securely over WhatsApp or encrypted cloud link.",
    icon: <Laptop className="w-6 h-6 text-brand-sky" />
  },
  {
    step: "03",
    title: "CA Review & Computation",
    desc: "Our Chartered Accountant team computes your taxes, optimizes deductions, and shares draft for approval.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-sky" />
  },
  {
    step: "04",
    title: "Instant Acknowledgement",
    desc: "We file the return on the official portal and deliver the official acknowledgement receipt within 24-48 hours.",
    icon: <FileCheck className="w-6 h-6 text-brand-sky" />
  }
];

const coveredStates = [
  "Rajasthan", "Delhi NCR", "Maharashtra", "Gujarat", "Karnataka", "Uttar Pradesh",
  "Madhya Pradesh", "West Bengal", "Telangana", "Haryana", "Tamil Nadu", "Punjab"
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(contactInfo.whatsappText)}`;

  const serviceCards = [
    {
      id: "gst-filing",
      title: "GST Return Filing",
      desc: "Monthly & quarterly GSTR-1 and GSTR-3B filings, and purchase reconciliation (ITC optimization).",
      icon: <Receipt className="w-8 h-8 text-brand-sky" />,
      tag: "Pan-India Digital"
    },
    {
      id: "itr",
      title: "Income Tax Return",
      desc: "Expert filing of personal and business Income Tax Returns (ITR-1 to ITR-4) with tax planning.",
      icon: <Percent className="w-8 h-8 text-brand-sky" />,
      tag: "Fast 24-48h Delivery"
    },
    {
      id: "company-reg",
      title: "Company Incorporation",
      desc: "End-to-end setup and registration of Private Limited, OPC, LLP, and partnership firms nationwide.",
      icon: <Briefcase className="w-8 h-8 text-brand-sky" />,
      tag: "100% Online MCA"
    },
    {
      id: "audit",
      title: "Statutory & Tax Audit",
      desc: "Independent statutory audits, internal financial audits, and Section 44AB tax audits.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-sky" />,
      tag: "Audited Financials"
    },
    {
      id: "project-report",
      title: "Project Report & CMA",
      desc: "Preparation of detailed project reports, financial projections, and CMA data for bank loans.",
      icon: <TrendingUp className="w-8 h-8 text-brand-sky" />,
      tag: "Bank Loan Approved"
    },
    {
      id: "notice-reply",
      title: "Tax Notice Reply",
      desc: "Legal drafting and representation for Income Tax, GST, and corporate department notices.",
      icon: <ShieldAlert className="w-8 h-8 text-brand-sky" />,
      tag: "Expert Legal Draft"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Pan-India Digital Reach",
      desc: "Get premium CA advisory and instant filing from anywhere in India without visiting an office.",
      icon: <Globe className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Jaipur Head Office Trust",
      desc: "Backed by an established physical office in Sanganer, Jaipur, providing strong institutional credibility.",
      icon: <MapPin className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Dedicated CA Review",
      desc: "Every filing is verified by qualified tax professionals to ensure zero penalties and maximum deductions.",
      icon: <Award className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Fast 24-48h Turnaround",
      desc: "Swift execution with automated reminders so you never miss a tax or GST compliance deadline.",
      icon: <Clock className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Transparent & Upfront",
      desc: "Clear upfront pricing with no hidden charges, complete document privacy, and dedicated support.",
      icon: <CheckCircle className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Startup & MSME Friendly",
      desc: "Custom packages designed to support growing businesses, e-commerce sellers, and freelance professionals.",
      icon: <Users className="w-6 h-6 text-brand-sky" />
    }
  ];

  return (
    <PageTransition>
      {/* Dynamic SEO Tags for Home */}
      <SEO
        title="NK Associates | CA & Tax Consultants | Jaipur & Pan-India"
        description="100% digital GST, Income Tax filing, TDS compliance, company incorporation, and accounting services across India. Headquartered in Jaipur, Rajasthan."
        keywords="Chartered Accountant Jaipur, CA in Jaipur, Pan India CA services, GST registration India, Income tax filing Jaipur, Tax consultant Rajasthan, TDS compliance India"
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-16 lg:py-24">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-40 -ml-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light text-brand-skyDark text-xs md:text-sm font-semibold tracking-wide border border-sky-200 shadow-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-brand-navy font-bold">Office in Jaipur</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-700 font-bold">Serving All Across India 🇮🇳</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-tight tracking-tight"
              >
                Chartered Accountants & <br />
                <span className="bg-gradient-to-r from-brand-sky via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Tax Consultants
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 mt-2">
                  Serving Clients Across India
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-charcoal leading-relaxed max-w-xl"
              >
                Headquartered in Jaipur, Rajasthan, <strong>NK Associates</strong> delivers 100% digital, prompt, and audit-proof GST, Income Tax (ITR), TDS, and Company Incorporation services for businesses & individuals nationwide.
              </motion.p>

              {/* Quick Feature Checklist Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700 max-w-lg"
              >
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Paperless Digital Filing</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Jaipur Head Office Trust</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct Senior CA Review</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>24-48 Hours Fast Delivery</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3.5 pt-3"
              >
                <Button to="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Book Free Consultation
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Senior CA</span>
                </a>
                <Button to="/services" variant="outline">
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* Right Side Visual with Interactive Dashboard Preview */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[430px] bg-white rounded-3xl shadow-xl border border-sky-100 p-6 md:p-7 flex flex-col justify-between relative overflow-hidden text-left"
              >
                {/* Background glow accent */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-50 to-white/0 pointer-events-none"></div>

                {/* Dashboard Header Mockup */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-xs font-bold text-brand-navy ml-1">NK Tax Intelligence</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Pan-India Live
                  </span>
                </div>

                {/* Simulated Numbers */}
                <div className="space-y-4 my-4 relative z-10">
                  <div>
                    <div className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                      Tax Savings Maximized For Clients
                    </div>
                    <div className="text-3xl font-extrabold text-brand-navy flex items-baseline gap-2 mt-0.5">
                      ₹1,84,500 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">▲ 14.8% Saved</span>
                    </div>
                  </div>

                  {/* Chart SVG */}
                  <svg className="w-full h-20 stroke-brand-sky fill-none" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                    <path
                      d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 5 C70 -5, 80 12, 100 2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 5 C70 -5, 80 12, 100 2 L 100 30 L 0 30 Z"
                      fill="url(#skyGradientHome)"
                      strokeWidth="0"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="skyGradientHome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Multistate Ticker */}
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-xs text-slate-600 font-medium mb-3 relative z-10">
                  <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Recent Filings Active In:</div>
                  <div className="flex flex-wrap gap-1 text-[11px]">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Jaipur</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Delhi NCR</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Mumbai</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Bengaluru</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">+20 States</span>
                  </div>
                </div>

                {/* Dashboard footer */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-brand-charcoal relative z-10">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    GST & ITR Compliance
                  </span>
                  <span className="text-emerald-600 font-bold">100% On-Time</span>
                </div>
              </motion.div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 md:-left-8 bg-white shadow-lg border border-sky-100 px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-emerald-50 text-emerald-500 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">100% Paperless</span>
                  <span className="text-[10px] text-slate-400">Pan-India Online Desk</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 md:-right-8 bg-white shadow-lg border border-sky-100 px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-sky-50 text-brand-sky rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">Tax Optimization</span>
                  <span className="text-[10px] text-slate-400">Deduction Maximizer</span>
                </div>
              </motion.div>

              {/* Floating Badge 3 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 left-10 bg-white shadow-lg border border-sky-100 px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-indigo-50 text-brand-navy rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">Notice Protection</span>
                  <span className="text-[10px] text-slate-400">Certified CA Advisory</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Counters */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <CounterItem number="4.8" suffix="/5" label="Google Verified Rating" />
            <CounterItem number="54" suffix="+" label="Client Testimonials" />
            <CounterItem number="100" suffix="%" label="Digital & Paperless" />
            <CounterItem number="28" suffix="+" label="States & UTs Covered" />
          </div>
        </div>
      </section>

      {/* NEW: Pan-India Digital CA Advantage Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading
            badge="Pan-India Digital Workflow"
            title="How We Serve You from Anywhere in India"
            subtitle="No matter which city or state you operate from, experience seamless Chartered Accountant support right from your phone or laptop."
          />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {panIndiaSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-sky-200 shadow-sm hover:shadow-premium transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-brand-light transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Covered States Banner */}
          <div className="mt-12 bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-2xl p-6 border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-brand-sky uppercase tracking-wider">Nationwide Reach</span>
              <h4 className="text-base sm:text-lg font-extrabold text-brand-navy">
                Delivering Flawless Filings Across India
              </h4>
              <p className="text-xs text-slate-500">
                Regular clients in manufacturing, retail, IT services, exports, and individual taxation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 max-w-xl">
              {coveredStates.map((st, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs"
                >
                  📍 {st}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-sky text-white">
                + All Indian States
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service & Fee Estimator Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEstimator />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Professional Expertise"
            title="Our Professional Services"
            subtitle="Comprehensive taxation, statutory audit representation, bookkeeping and business compliance services designed for enterprises and professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    {service.tag && (
                      <span className="text-[11px] font-bold text-brand-skyDark bg-brand-light/70 border border-sky-100 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Button to={`/services#${service.id}`} variant="light" className="w-full flex justify-between items-center group-hover:bg-brand-sky group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured GST Section */}
      <section className="py-20 bg-gradient-to-b from-brand-light/20 via-brand-light/40 to-brand-light/20 border-y border-sky-100/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-sky/5 rounded-full blur-3xl opacity-50 -ml-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Text */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="inline-block px-3 py-1 text-xs font-bold text-brand-skyDark bg-white rounded-md border border-sky-100 uppercase tracking-wide">
                Specialized Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                Complete GST Lifecycle Management
              </h2>
              <p className="text-brand-charcoal text-base md:text-lg leading-relaxed">
                Whether you need a fresh GST registration, monthly GSTR return filing, amendment filings, or revocation of cancellation, we manage the entire lifecycle with zero hassle.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button to="/services#gst-reg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Get GST Assistance
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-brand-navy font-bold text-xs hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Checklist Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "GST Registration", desc: "Fast online application for proprietorships, companies, LLPs and partnerships." },
                { title: "GST Return Filing", desc: "Monthly & quarterly GSTR-1, GSTR-3B compliance with ITC optimization checks." },
                { title: "GST LUT Filing", desc: "Filing Letter of Undertaking for zero-rated export transactions without IGST." },
                { title: "GST Modification", desc: "Updating core and non-core fields, office addresses, and promoter details." },
                { title: "GST Cancellation & Revocation", desc: "Structured closing filings and response to department cancellations." },
                { title: "GST Compliance Audit", desc: "Annual reconciliations with GSTR-9 and GSTR-9C certifications support." }
              ].map((gstItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-sky" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-brand-navy text-sm md:text-base">{gstItem.title}</h4>
                    <p className="text-xs text-brand-charcoal leading-relaxed mt-1">{gstItem.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NK Associates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner With Us"
            title="Why Businesses Across India Choose NK Associates"
            subtitle="Combining the physical accountability of our Jaipur headquarters with the modern speed of a 100% digital Pan-India CA practice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  {feat.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-brand-charcoal leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Matches FAQPage Schema & Enhances Search Ranking) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Find quick answers regarding our GST registration, Income Tax return filing, corporate compliance, and CA services in Jaipur."
          />

          <div className="space-y-4 mt-12">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200 text-left"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold text-brand-navy">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1.5 rounded-full bg-slate-100 text-brand-navy">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-100 px-6 py-5 bg-slate-50/40"
                      >
                        <p className="text-sm md:text-base text-brand-charcoal leading-relaxed mb-3">
                          {faq.a}
                        </p>
                        {faq.link && (
                          <Link
                            to={faq.link}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-sky hover:text-brand-skyDark transition-colors"
                          >
                            <span>{faq.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
