import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { gstConfig } from './gstConfig';
import PackageCard from './PackageCard';
import { useGstPackage } from '../../context/GstPackageContext';

const Packages = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  return (
    <section id="packages" aria-labelledby="packages-heading" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent CA Pricing</span>
          </div>
          <h2
            id="packages-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Affordable GST Registration & Compliance Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select the plan matching your business volume. 100% paperless onboarding, senior CA supervision, and zero hidden surcharges.
          </p>
        </div>

        {/* 4-Column Grid (4 on desktop, 2x2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 items-stretch">
          {gstConfig.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackageId === pkg.id}
              onSelect={selectPackage}
            />
          ))}
        </div>

        {/* Mandatory Statutory Note */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Statutory Goods & Services Tax (18%) is calculated transparently upon checkout.</span>
          </div>
          <p className="text-slate-400">
            Need a custom enterprise turnover plan? Call our Jaipur desk directly at {gstConfig.contact.phoneDisplay}.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Packages;
