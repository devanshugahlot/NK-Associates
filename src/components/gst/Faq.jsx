import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { gstConfig } from './gstConfig';

const Faq = () => {
  // Track open state; default open first FAQ for immediate clarity
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-brand-skyDark border border-sky-200">
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

        {/* Accessible Accordion List */}
        <div className="space-y-3">
          {gstConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-sky transition-colors focus:outline-none focus:ring-2 focus:ring-brand-sky/40 min-h-[48px]"
                  >
                    <span>{faq.question}</span>
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

        {/* Additional Help Prompt */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have an unlisted question about your state jurisdiction?{' '}
          <a
            href={`tel:${gstConfig.contact.phoneValue}`}
            className="text-brand-sky hover:underline font-bold"
          >
            Speak directly with our senior CA desk at {gstConfig.contact.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Faq;
