import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { gstConfig } from './gstConfig';
import { useGstPackage } from '../../context/GstPackageContext';

const HowItWorks = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100">
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

        {/* 6 Steps: Horizontal on large screens, vertical stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {gstConfig.howItWorks.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between hover:bg-sky-50/40 hover:border-sky-200 transition-all duration-200 shadow-xs"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-sky text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    0{item.step}
                  </span>
                  {index < gstConfig.howItWorks.length - 1 && (
                    <span className="hidden xl:block text-slate-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-brand-navy leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Zero hassle for you</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => selectPackage(selectedPackageId)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px] cursor-pointer touch-manipulation"
          >
            <span>Start Step 1: Fill Form & Proceed</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
