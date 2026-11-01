import React from 'react';
import { 
  FileEdit, 
  FileCheck, 
  Send, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { gstConfig } from './gstConfig';
import { useGstPackage } from '../../context/GstPackageContext';

const stepIcons = [
  FileEdit,
  FileCheck,
  Send,
  Clock,
  ShieldCheck,
  Award
];

const HowItWorks = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-14 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100 uppercase tracking-wider">
            <span>Seamless 6-Step Workflow</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            How Our 100% Online GST Registration Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial application to your official registration certificate, our Chartered Accountants manage every single technicality.
          </p>
        </div>

        {/* Wide Image Feature Strip (Slot 3) */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl border border-slate-200 bg-slate-900 h-44 sm:h-56 lg:h-64">
          <img
            src="/images/gst/how-it-works.webp"
            alt="Online paperless application workflow and digital review"
            width={1000}
            height={320}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-40 hover:opacity-45 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-slate-900/90 to-brand-navy/70 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-12 text-white max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/20 text-brand-sky border border-sky-400/30 w-fit uppercase tracking-wider">
              100% Paperless Workflow
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              From Document Upload to Certificate Issuance
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Real-time ARN generation, end-to-end departmental query handling, and instant GSTIN notification directly to your phone &amp; email.
            </p>
          </div>
        </div>

        {/* 6 Steps with Connecting Line */}
        <div className="relative">
          {/* Horizontal Connecting Line on desktop */}
          <div className="hidden xl:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-sky-200 via-sky-300 to-emerald-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
            {gstConfig.howItWorks.map((item, index) => {
              const IconComp = stepIcons[index] || FileEdit;
              return (
                <div
                  key={item.step}
                  className="relative bg-slate-50/90 rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-brand-sky/60 hover:shadow-lg transition-all duration-300 shadow-xs group"
                >
                  <div>
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-brand-sky flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-brand-sky group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5 transition-colors" />
                      </div>
                      <span className="w-7 h-7 rounded-full bg-slate-200/80 group-hover:bg-brand-navy text-slate-700 group-hover:text-white font-extrabold text-xs flex items-center justify-center transition-colors">
                        0{item.step}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-brand-navy leading-snug group-hover:text-brand-skyDark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero physical visit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => selectPackage(selectedPackageId)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px] cursor-pointer touch-manipulation"
          >
            <span>Start Step 1: Fill Details & Proceed</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
