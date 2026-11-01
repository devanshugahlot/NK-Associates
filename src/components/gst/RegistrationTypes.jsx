import React from 'react';
import { Layers, Check } from 'lucide-react';
import { gstConfig } from './gstConfig';

const RegistrationTypes = () => {
  return (
    <section id="registration-types" aria-labelledby="types-heading" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Structure Categories</span>
          </div>
          <h2
            id="types-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Types of GST Registration in India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose the legal classification that suits your commercial activity. Our CAs help you determine the most tax-efficient structure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gstConfig.registrationTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 mb-3">
                  {type.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">
                  {type.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {type.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Criteria
                </span>
                {type.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="leading-tight text-xs text-slate-600">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegistrationTypes;
