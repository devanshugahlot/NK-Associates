import React from 'react';
import { motion } from 'framer-motion';
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
  BookOpen,
  Briefcase,
  Star,
  MapPin,
  Check,
  Clock
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PageTransition from '../components/PageTransition';

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

const Home = () => {
  const serviceCards = [
    {
      id: "gst-filing",
      title: "GST Return Filing",
      desc: "Monthly & quarterly GSTR-1 and GSTR-3B filings, and purchase reconciliation (ITC optimization).",
      icon: <Receipt className="w-8 h-8 text-brand-sky" />,
    },
    {
      id: "itr",
      title: "Income Tax Return",
      desc: "Expert filing of personal and business Income Tax Returns (ITR-1 to ITR-4) with tax planning.",
      icon: <Percent className="w-8 h-8 text-brand-sky" />,
    },
    {
      id: "company-reg",
      title: "Company Incorporation",
      desc: "End-to-end setup and registration of Private Limited, OPC, LLP, and partnership firms.",
      icon: <Briefcase className="w-8 h-8 text-brand-sky" />,
    },
    {
      id: "audit",
      title: "Statutory & Tax Audit",
      desc: "Independent statutory audits, internal financial audits, and Section 44AB tax audits.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-sky" />,
    },
    {
      id: "project-report",
      title: "Project Report & CMA",
      desc: "Preparation of detailed project reports, financial projections, and CMA data for bank loans.",
      icon: <TrendingUp className="w-8 h-8 text-brand-sky" />,
    },
    {
      id: "notice-reply",
      title: "Tax Notice Reply",
      desc: "Legal drafting and representation for Income Tax, GST, and corporate department notices.",
      icon: <ShieldAlert className="w-8 h-8 text-brand-sky" />,
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Professional Expertise",
      desc: "Certified, professional tax advisors with extensive knowledge of current regulations.",
      icon: <Award className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Reliable Support",
      desc: "Clear channels of communication and highly responsive client support for urgent filings.",
      icon: <Clock className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Compliance Focused",
      desc: "Detail-oriented checkups to ensure you stay fully compliant with Income Tax & GST laws.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Transparent Process",
      desc: "No hidden charges, straightforward explanations, and secure digital handling of documents.",
      icon: <CheckCircle className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Client Centric",
      desc: "Tailored financial and tax saving solutions aligned with your unique business or individual objectives.",
      icon: <Users className="w-6 h-6 text-brand-sky" />
    },
    {
      title: "Business Friendly",
      desc: "Flexible, budget-friendly packages designed to support startups, MSMEs, and self-employed professionals.",
      icon: <Briefcase className="w-6 h-6 text-brand-sky" />
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/35 via-white to-white py-16 lg:py-24">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-40 -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-light rounded-full blur-3xl opacity-30 -ml-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light text-brand-skyDark text-xs md:text-sm font-semibold tracking-wide border border-sky-100"
              >
                <MapPin className="w-4 h-4 text-brand-sky shrink-0" />
                <span>Trusted Chartered Accountants in Jaipur</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-tight tracking-tight"
              >
                Professional Financial & <br />
                <span className="text-brand-sky">Tax Solutions</span> You Can Trust
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-charcoal leading-relaxed max-w-xl"
              >
                Expert GST, Income Tax, TDS, Accounting, and Corporate Compliance services designed to help individuals and businesses in Jaipur stay financially organized, legal, and optimized.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Button to="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Book a Consultation
                </Button>
                <Button to="/services" variant="outline">
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* Right Side Illustration with Floating Cards */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex items-center justify-center">
              {/* Main Abstract Financial Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[400px] h-[350px] md:h-[400px] bg-white rounded-3xl shadow-premium border border-slate-100 p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Simulated Growth Graph background */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-50 to-white/0 pointer-events-none"></div>
                
                {/* Dashboard Header UI Mockup */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>
                  <span className="text-xs font-semibold text-brand-gray bg-slate-50 px-3 py-1 rounded-md">
                    NK Analytics
                  </span>
                </div>

                {/* Dashboard simulated numbers */}
                <div className="space-y-4 my-auto relative z-10">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Estimated Tax Savings</div>
                  <div className="text-3xl font-extrabold text-brand-navy flex items-baseline">
                    ₹1,84,500 <span className="text-xs font-bold text-green-500 ml-2">▲ 14.8%</span>
                  </div>
                  
                  {/* Decorative chart SVG */}
                  <svg className="w-full h-24 stroke-brand-sky fill-none" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 5 C70 -5, 80 12, 100 2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 5 C70 -5, 80 12, 100 2 L 100 30 L 0 30 Z"
                      fill="url(#skyGradient)"
                      strokeWidth="0"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Dashboard footer summary info */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-brand-charcoal relative z-10">
                  <span>GST Return Filed</span>
                  <span className="text-green-500">100% Success</span>
                </div>
              </motion.div>

              {/* Floating Cards with subtle bouncing animations */}
              {/* Card 1: GST Compliance */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 md:-left-8 bg-white shadow-lg border border-slate-100/80 px-4 py-3 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-green-50 text-green-500 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">GST Compliance</span>
                  <span className="text-[10px] text-slate-400">Regular Filings Active</span>
                </div>
              </motion.div>

              {/* Card 2: Tax Planning */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 md:-right-8 bg-white shadow-lg border border-slate-100/80 px-4 py-3 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-sky-50 text-brand-sky rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">Tax Planning</span>
                  <span className="text-[10px] text-slate-400">Max Savings Formula</span>
                </div>
              </motion.div>

              {/* Card 3: TDS Filing */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-12 bg-white shadow-lg border border-slate-100/80 px-4 py-3 rounded-2xl flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="p-1.5 bg-indigo-50 text-brand-navy rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-brand-navy">TDS Filing</span>
                  <span className="text-[10px] text-slate-400">Quarterly Form 26Q</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <CounterItem number="4.8" suffix="/5" label="Google Rating" />
            <CounterItem number="50" suffix="+" label="Client Reviews" />
            <CounterItem number="100" suffix="%" label="GST & Tax Accuracy" />
            <CounterItem number="10" suffix="+" label="Years Team Practice" />
          </div>
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
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
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
                Complete GST Solutions Under One Roof
              </h2>
              <p className="text-brand-charcoal text-base md:text-lg leading-relaxed">
                Whether you need a fresh GST registration, monthly GSTR return filers, amendment filings, or revocation of cancellation, we manage the entire lifecycle with zero hassle.
              </p>
              <div className="pt-2">
                <Button to="/services#gst-reg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Get GST Assistance
                </Button>
              </div>
            </div>

            {/* Right Interactive Checklist Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "GST Registration", desc: "Fast application process for proprietorships, companies, LLPs and partnerships." },
                { title: "GST Return Filing", desc: "Monthly & quarterly GSTR-1, GSTR-3B compliance with ITC optimization checks." },
                { title: "GST LUT Filing", desc: "Filing Letter of Undertaking for zero-rated export transactions without tax." },
                { title: "GST Modification", desc: "Updating core and non-core fields, office addresses, and promoter details." },
                { title: "GST Cancellation", desc: "Structured closing filings and response to department cancellations." },
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
            title="Why Choose NK Associates?"
            subtitle="Providing clients with strategic answers, transparent processes, and dependable representation for critical taxation and accounts compliance."
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
    </PageTransition>
  );
};

export default Home;
