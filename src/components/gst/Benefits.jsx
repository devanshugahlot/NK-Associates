import React from 'react';
import { 
  BadgeCheck, 
  Receipt, 
  Truck, 
  ShoppingBag, 
  Percent, 
  Laptop
} from 'lucide-react';
import { gstConfig } from './gstConfig';

const benefitIcons = [
  BadgeCheck,
  Receipt,
  Truck,
  ShoppingBag,
  Percent,
  Laptop,
];

const Benefits = () => {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100">
            <span>Commercial Advantages</span>
          </div>
          <h2
            id="benefits-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Key Benefits of GST Registration for Your Business
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Beyond mandatory compliance, a verified GSTIN unlocks commercial expansion, vendor credibility, and substantial tax savings.
          </p>
        </div>

        {/* 6 Cards Grid (3 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gstConfig.benefits.map((benefit, idx) => {
            const IconComponent = benefitIcons[idx % benefitIcons.length];
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-brand-sky/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-brand-sky flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    <IconComponent className="w-5 h-5 text-brand-skyDark" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-skyDark transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center text-[11px] font-bold text-brand-sky">
                  <span>Advantage 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
