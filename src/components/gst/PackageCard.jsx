import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { formatINR } from '../../utils/pricing';

const PackageCard = ({ pkg, isSelected, onSelect }) => {
  const isBestValue = Boolean(pkg.badge);

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
        isBestValue
          ? 'bg-white border-2 border-brand-sky shadow-xl lg:-translate-y-2 ring-4 ring-sky-100'
          : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
      } ${isSelected ? 'ring-2 ring-brand-sky border-brand-sky' : ''}`}
    >
      {/* Top Value Badge */}
      {isBestValue && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-sky to-brand-skyDark text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{pkg.badge}</span>
        </div>
      )}

      {/* Card Header & Pricing */}
      <div className="p-5 sm:p-6 pb-0">
        <h3 className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight">
          {pkg.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
          {pkg.description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {formatINR(pkg.price)}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {pkg.billingPeriod}
          </span>
        </div>
        <p className="text-[11px] font-medium text-slate-400 mt-1">
          {pkg.periodNote}
        </p>
      </div>

      {/* Features List */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5 my-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Included Features
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="pt-5 mt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onSelect(pkg.id)}
            className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px] cursor-pointer touch-manipulation ${
              isBestValue
                ? 'bg-brand-sky hover:bg-brand-skyDark text-white shadow-md hover:shadow-lg'
                : isSelected
                ? 'bg-slate-900 text-white hover:bg-black'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
            aria-label={`Select ${pkg.name} for ${formatINR(pkg.price)} ${pkg.billingPeriod}`}
          >
            <span>{isSelected ? 'Selected Plan' : pkg.ctaText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PackageCard);
