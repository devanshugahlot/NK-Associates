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
    <section id="documents-required" aria-labelledby="docs-heading" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-100 uppercase tracking-wider">
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

        {/* Split Grid: Side Image (Slot 4) + 2-Column Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Side Image (Slot 4) + Advisory Box (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src="/images/gst/documents-checklist.webp"
                alt="Organized KYC and business registration documentation"
                width={540}
                height={420}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-white/40 text-xs">
                <span className="font-bold text-brand-navy block">Pre-Scrutiny Guarantee</span>
                <span className="text-[11px] text-slate-500">Every KYC file is audited before portal upload</span>
              </div>
            </div>

            {/* Premise Clarification Tip */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed shadow-xs">
              <strong>Premise Tip:</strong> If the premise is self-owned, an electricity bill or property tax receipt is sufficient. If rented, a signed rent agreement and a simple owner NOC are required.
            </div>
          </div>

          {/* Right Column: 2-Column Checklist Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gstConfig.documents.map((doc, idx) => {
              const IconComponent = iconMap[doc.id] || FileCheck2;
              return (
                <div
                  key={doc.id}
                  className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-brand-sky/60 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100/90 border border-sky-100 text-brand-sky flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5 text-brand-skyDark" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        Doc 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-brand-navy leading-snug group-hover:text-brand-skyDark transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 border-t border-slate-200/50 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700">
                    <span>✓ PDF or JPEG scan acceptable</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DocumentsRequired;
