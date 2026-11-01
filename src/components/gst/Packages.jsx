import React from 'react';
import { Sparkles, ShieldCheck, Lock, UserCheck, Laptop, CheckCircle2 } from 'lucide-react';
import { gstConfig } from './gstConfig';
import PackageCard from './PackageCard';
import { useGstPackage } from '../../context/GstPackageContext';

const Packages = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  return (
    <section id="packages" aria-labelledby="packages-heading" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200 uppercase tracking-wider">
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

        {/* Reassurance Row beneath packages using only true statements */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy">Authorized Payment Gateway</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">PCI-DSS compliant 256-bit SSL encrypted checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 md:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-brand-skyDark" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy">Dedicated CA Associate</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Assigned tax expert for form drafting and ARN tracking</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 md:pt-0 sm:px-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-navy">100% Online & Paperless</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero physical visits to tax department offices required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Statutory Note */}
        <div className="mt-6 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Statutory Goods & Services Tax (18%) is calculated transparently upon checkout.</span>
          </div>
          <p className="text-slate-500 font-medium">
            Need a custom enterprise turnover plan? Call our Jaipur desk at <strong className="text-brand-navy">{gstConfig.contact.phoneDisplay}</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Packages;
