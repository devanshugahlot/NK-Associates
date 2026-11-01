import React from 'react';
import { 
  CreditCard, 
  Fingerprint, 
  Building2, 
  Users, 
  MapPin, 
  FileSpreadsheet, 
  FileCheck2, 
  Home,
  CheckCircle2
} from 'lucide-react';
import { gstConfig } from './gstConfig';

const iconMap = {
  pan: CreditCard,
  aadhaar: Fingerprint,
  incorporation: Building2,
  'promoters-id': Users,
  'address-proof': MapPin,
  'bank-proof': FileSpreadsheet,
  'auth-letter': FileCheck2,
  'rent-noc': Home,
};

const DocumentsRequired = () => {
  return (
    <section id="documents-required" aria-labelledby="docs-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Digital Checklist</span>
          </div>
          <h2
            id="docs-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight"
          >
            Documents Required for GST Registration
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Keep clear digital scan copies ready. Our team audits every document to eliminate departmental clarification queries.
          </p>
        </div>

        {/* 8 Icon Cards (4 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {gstConfig.documents.map((doc, idx) => {
            const IconComponent = iconMap[doc.id] || FileCheck2;
            return (
              <div
                key={doc.id}
                className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-brand-sky/40 hover:bg-sky-50/20 transition-all duration-200 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-sky flex items-center justify-center mb-3.5 shadow-xs group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-brand-skyDark" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Doc 0{idx + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-brand-navy leading-snug group-hover:text-brand-skyDark transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200/50 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700">
                  <span>✓ PDF or JPEG scan acceptable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premise Clarification Tip */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed text-center sm:text-left">
          <strong>Important Tip:</strong> In case the business premise is self-owned, an electricity bill or property tax receipt along with PAN is sufficient. If rented, a signed rent agreement and a simple NOC from the premise owner are required.
        </div>

      </div>
    </section>
  );
};

export default DocumentsRequired;
