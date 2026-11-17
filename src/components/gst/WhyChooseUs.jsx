import React from 'react';
import { ShieldCheck, Clock, Laptop, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gstConfig } from './gstConfig';
import { useGstPackage } from '../../context/GstPackageContext';

const WhyChooseUs = () => {
  const { selectedPackageId, selectPackage } = useGstPackage();

  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Senior CA Verification',
      desc: 'Every document and declaration is vetted by certified Chartered Accountants before portal submission to prevent show-cause notices.',
    },
    {
      icon: Clock,
      title: 'Fast ARN & TRN Generation',
      desc: 'Applications are submitted on the GST portal within 24–48 hours, tracking your acknowledgment status real-time.',
    },
    {
      icon: Laptop,
      title: '100% Digital & Paperless',
      desc: 'Submit your PAN, Aadhaar, and premise proofs digitally from any device across India without visiting any office.',
    },
    {
      icon: Building2,
      title: 'Pan-India Jurisdiction Desk',
      desc: 'Headquartered in Jaipur with operational expertise across state tax offices and central tax commissionerates in all 28 states & 8 UTs.',
    },
  ];

  return (
    <section id="why-choose-us" aria-labelledby="why-heading" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with glass badge (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 p-2 sm:p-2.5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/gst/trusted-ca-expert.jpg"
                  alt="Verified Chartered Accountant Consultant - NK Associates Jaipur"
                  width={819}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Verified Authority Strip */}
              <div className="mt-2.5 p-3 bg-white/95 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-brand-navy block leading-none">
                      Authorized CA Oversight
                    </span>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Direct supervision by qualified Chartered Accountants
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-sky bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full shrink-0">
                  Jaipur HQ
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content & 4 Bullets (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100 uppercase tracking-wider">
                <span>Why NK Associates</span>
              </div>
              <h2
                id="why-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight"
              >
                Your Trusted CA Partner for Effortless GST Registration
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Navigating GST portal formalities can be tricky with frequent departmental clarifications. Our dedicated Chartered Accountant desk ensures accuracy and zero hassle.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0 border border-sky-100">
                      <Icon className="w-5 h-5 text-brand-skyDark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Prompt */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => selectPackage(selectedPackageId)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px] cursor-pointer touch-manipulation"
              >
                <span>Get Started Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${gstConfig.contact.phoneValue}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs sm:text-sm transition-all min-h-[44px]"
              >
                <span>Call CA: {gstConfig.contact.phoneDisplay}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
