import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { gstConfig } from './gstConfig';

const Faq = () => {
  // Track open state; default open first FAQ for immediate clarity
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const cleanPhone = gstConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi NK Associates, I have a query about GST Registration eligibility and documents.')}`;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Frequently Asked Questions on GST Registration
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear, authoritative answers compiled by our Chartered Accountants regarding eligibility, documents, and portal timelines.
          </p>
        </div>

        {/* 2-Column Desktop Grid: Accordion (8 cols) + Sticky Help Card (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Accessible Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            {gstConfig.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-brand-sky/60 shadow-md ring-2 ring-sky-100/80'
                      : 'bg-white border-slate-200/90 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-sky transition-colors focus:outline-none focus:ring-2 focus:ring-brand-sky/40 min-h-[48px] cursor-pointer"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span
                        className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-sky-100 text-brand-sky' : 'text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={`px-5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky "Still Have Questions?" Help Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xl space-y-5">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center border border-sky-100 shadow-xs">
                <HelpCircle className="w-6 h-6 text-brand-skyDark" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-brand-navy">
                  Still Have Questions?
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Need personalized advice about your business structure, state tax jurisdiction, or registration threshold? Speak with our senior Chartered Accountant.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={`tel:${gstConfig.contact.phoneValue}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-sky hover:bg-brand-skyDark text-white font-bold text-xs sm:text-sm shadow-md transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call CA: {gstConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-xs sm:text-sm transition-all min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Tax Desk</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Desk Timings: Mon–Sat, 10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Confidential ICAI CA Consultations</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Faq;
