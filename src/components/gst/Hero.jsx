import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { gstConfig } from './gstConfig';
import EnquiryForm from './EnquiryForm';
import { useGstPackage } from '../../context/GstPackageContext';

const Hero = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  // Preload only the hero image for peak Core Web Vitals (LCP) performance
  useEffect(() => {
    let link = document.querySelector('link[rel="preload"][href="/images/gst/hero-concept.webp"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.type = 'image/webp';
      link.href = '/images/gst/hero-concept.webp';
      document.head.appendChild(link);
    }
  }, []);

  const handleGetStarted = (e) => {
    e.preventDefault();
    selectPackage(selectedPackageId);
  };

  const tickBenefits = [
    'Filing by professionals',
    'Guidance at every step',
    'Dedicated support',
    'Fast online process',
  ];

  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navyLight text-white pt-24 sm:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting & faint grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-skyDark/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Subline, Benefits, Badges (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-4">
            
            {/* Location & Authority Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 text-brand-sky text-xs font-semibold tracking-wide border border-slate-700/80 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-sky shrink-0" />
              <span>Jaipur Head Office • Serving All 28 States & 8 UTs</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-tight lg:leading-[1.14] text-white">
              GST Registration in India —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-sky-300 to-cyan-200">
                100% Online
              </span>
            </h1>

            {/* One-line Subline */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Fast, paperless GST registration for proprietors, partnership firms, LLPs, and companies. Complete compliance managed by qualified Chartered Accountants with zero departmental visits.
            </p>

            {/* 4 Tick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {tickBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline & Processing Notice */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70 max-w-xl text-xs space-y-1.5 text-slate-300 shadow-md">
              <div className="flex items-center gap-2 font-bold text-white">
                <Clock className="w-4 h-4 text-brand-sky" />
                <span>Standard Turnaround Time:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Application drafted & submitted within <strong>24–48 hours</strong>; GSTIN is {gstConfig.contact.processingTime}.
              </p>
            </div>

            {/* CTA Button & Quick Helpline */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 min-h-[48px] cursor-pointer touch-manipulation"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${gstConfig.contact.phoneValue}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/40 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
              >
                <span>Call an Expert: {gstConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Hero Visual Card (Slot 1) - Visible on md+ */}
            <div className="hidden md:flex items-center gap-4 pt-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 max-w-md w-full">
                <img
                  src="/images/gst/hero-concept.webp"
                  alt="Modern financial calculation, tax audit paperwork, and laptop workspace"
                  width={540}
                  height={260}
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-40 lg:h-44 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
                
                {/* Floating Glass Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">100% Online CA Filing Process</span>
                  </div>
                  <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider">Paperless</span>
                </div>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Confidential
              </span>
              <span>•</span>
              <span>Zero Physical Visits</span>
              <span>•</span>
              <span>Government Portal Verified</span>
            </div>

          </div>

          {/* Right Column: Embedded Form Card (5 cols on desktop, directly below on mobile) */}
          <div className="lg:col-span-5 w-full">
            <EnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
