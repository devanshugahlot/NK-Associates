import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';
import { gstConfig } from './gstConfig';

const WhoShouldRegister = () => {
  return (
    <section id="who-should-register" aria-labelledby="who-heading" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Statutory Eligibility & Thresholds</span>
          </div>
          <h2
            id="who-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Who Must Mandatorily Register for GST in India?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Review the official legal turnover criteria specified under Section 22 and Section 24 of the Central Goods & Services Tax (CGST) Act.
          </p>
        </div>

        {/* Desktop / Tablet Table View (hidden on small mobile) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-brand-navy font-bold uppercase tracking-wider text-[11px]">
                  <th scope="col" className="p-4 pl-6">Business Category</th>
                  <th scope="col" className="p-4">Statutory Threshold</th>
                  <th scope="col" className="p-4">Registration Timeline</th>
                  <th scope="col" className="p-4 pr-6">Legal Applicability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gstConfig.whoShouldRegister.map((item, idx) => (
                  <tr key={idx} className="hover:bg-sky-50/30 transition-colors">
                    <td className="p-4 pl-6 font-bold text-brand-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-sky shrink-0" />
                      <span>{item.category}</span>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">
                      {item.threshold}
                    </td>
                    <td className="p-4 text-slate-600">
                      {item.timeline}
                    </td>
                    <td className="p-4 pr-6 text-slate-500 text-xs">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Stacked Cards View (visible on mobile < 768px) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {gstConfig.whoShouldRegister.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-brand-navy">{item.category}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-100">
                  Mandatory
                </span>
              </div>
              <div className="text-xs space-y-1.5 pt-1 border-t border-slate-100">
                <p>
                  <strong className="text-slate-700">Threshold:</strong>{' '}
                  <span className="font-semibold text-brand-skyDark">{item.threshold}</span>
                </p>
                <p>
                  <strong className="text-slate-700">Timeline:</strong>{' '}
                  <span className="text-slate-600">{item.timeline}</span>
                </p>
                <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helpful Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-xs">
          <HelpCircle className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Voluntary Registration:</strong> Even if your business turnover has not reached these statutory limits, registering voluntarily allows you to issue legal tax invoices, claim Input Tax Credit on capital goods and expenses, and expand into pan-India enterprise contracts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoShouldRegister;
