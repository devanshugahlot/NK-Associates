import React from 'react';
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { gstConfig } from './gstConfig';
import { useGstPackage } from '../../context/GstPackageContext';

const FinalCta = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  const cleanPhone = gstConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(gstConfig.contact.whatsappText)}`;

  return (
    <section className="relative bg-brand-navy text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image (Slot 6) with soft navy-to-sky gradient overlay (~85-90%) */}
      <img
        src="/images/gst/cta-bg.webp"
        alt="Modern commercial corporate architectural skyscraper glass facade"
        width={1400}
        height={500}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-slate-900/90 to-brand-navyLight/95 pointer-events-none" />

      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700">
          <ShieldCheck className="w-4 h-4 text-brand-sky" />
          <span>Chartered Accountant Backed Guarantee</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight text-white">
          Ready to Get Your 15-Digit GSTIN Number Without the Hassle?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Join hundreds of proprietorships, startups, and companies across India. Our certified tax professionals manage your filing from start to finish.
        </p>

        {/* 3 Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          
          {/* Primary CTA: Scroll to Form */}
          <button
            type="button"
            onClick={() => selectPackage(selectedPackageId)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 min-h-[48px] cursor-pointer touch-manipulation"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* WhatsApp Advisory */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Consultation</span>
          </a>

          {/* Direct Phone Helpline */}
          <a
            href={`tel:${gstConfig.contact.phoneValue}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-all min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-brand-sky" />
            <span>Call {gstConfig.contact.phoneDisplay}</span>
          </a>

        </div>

        <p className="text-xs text-slate-400 pt-2">
          Head Office: {gstConfig.contact.location} • 100% Digital Document Submission
        </p>

      </div>
    </section>
  );
};

export default FinalCta;
