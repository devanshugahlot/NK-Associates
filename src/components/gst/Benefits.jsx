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
    <section id="benefits" aria-labelledby="benefits-heading" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100 uppercase tracking-wider">
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

        {/* Split Layout: Side Feature Image (Slot 5) + 6 Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Side Feature Image Card (Slot 5) - 4 cols */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-full min-h-[340px]">
              <img
                src="/images/gst/business-benefits.webp"
                alt="E-commerce order dispatch and growing logistics business operations"
                width={540}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-85 hover:opacity-95 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-slate-900/60 to-transparent pointer-events-none rounded-2xl" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-500/30 text-sky-200 border border-sky-400/40 uppercase tracking-wider">
                  Pan-India Growth
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  Sell Across India on E-Commerce Portals
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  GSTIN is mandatory to list products on Amazon, Flipkart, GeM portal, and supply corporate clients with tax invoices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Benefits Grid - 8 cols */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {gstConfig.benefits.map((benefit, idx) => {
              const IconComponent = benefitIcons[idx % benefitIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:bg-white hover:border-brand-sky/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/90 border border-sky-100 text-brand-sky flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
                      <IconComponent className="w-5 h-5 text-brand-skyDark" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5 group-hover:text-brand-skyDark transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2 border-t border-slate-200/50 flex items-center text-[10px] font-bold text-brand-sky">
                    <span>Advantage 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;
