import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { gstConfig } from './gstConfig';
import { useGstPackage } from '../../context/GstPackageContext';

const MobileStickyBar = () => {
  const { formRef, selectedPackageId, selectPackage } = useGstPackage();
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (!formRef || !formRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If form is visible on screen, hide the sticky bottom bar
        setIsFormVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // triggered when 15% of form enters view
      }
    );

    observer.observe(formRef.current);

    return () => {
      observer.disconnect();
    };
  }, [formRef]);

  // If form is in the viewport, hide the sticky bar to avoid UI clutter
  if (isFormVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/90 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
      role="region"
      aria-label="Quick Mobile Actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          href={`tel:${gstConfig.contact.phoneValue}`}
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border border-slate-300 bg-white/95 text-brand-navy font-bold text-xs min-h-[46px] active:scale-95 transition-all shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-brand-sky shrink-0" />
          <span>Call CA</span>
        </a>

        <button
          type="button"
          onClick={() => selectPackage(selectedPackageId)}
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gradient-to-r from-brand-sky to-brand-skyDark text-white font-extrabold text-xs shadow-md min-h-[46px] active:scale-95 transition-all cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(MobileStickyBar);
