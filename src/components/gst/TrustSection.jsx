import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { gstConfig } from './gstConfig';

const TrustSection = () => {
  const { contact, payment, afterPaymentSteps, trust } = gstConfig;

  return (
    <section id="trust" aria-labelledby="trust-heading" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-skyDark border border-sky-200 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-sky" />
            <span>Firm Transparency & Integrity</span>
          </div>
          <h2
            id="trust-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Why You Can Trust NK Associates
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are practicing Chartered Accountants and tax advisors. When you register with us, your statutory compliances are drafted and audited by genuine professionals.
          </p>
        </div>

        {/* 4 True Factual Claims Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.claims.map((claim) => (
            <div
              key={claim.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-sky flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {claim.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {claim.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "What Happens After You Pay" Timeline (3 honest steps) */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-2 mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Clear & Transparent Workflow
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              What Happens After You Pay
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              No guessing, no surprises. Here is the exact 3-step process our CA team follows once your fee is confirmed:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {afterPaymentSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-sky text-white text-xs font-extrabold mb-3 shadow-md">
                    {step.step}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Statutory Disclaimer Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Standard turnaround: <strong className="text-white">{contact.processingTime}</strong>.
              </span>
            </div>
            <span className="text-slate-400 text-[11px]">
              Actual approval duration is determined by jurisdictional tax authority verification.
            </span>
          </div>
        </div>

        {/* Firm Details, Contact & Policy Links Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Firm Identity */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-skyDark">
                Genuine Registered Firm
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                {contact.firmName}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {contact.qualification}. Headquartered in Jaipur, providing digital paperless CA consultation to business owners pan-India.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={contact.aboutUrl}
                  className="inline-flex items-center gap-1 font-bold text-brand-sky hover:underline"
                >
                  About Our Firm <ArrowRight className="w-3 h-3" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={contact.contactUrl}
                  className="inline-flex items-center gap-1 font-bold text-brand-sky hover:underline"
                >
                  Contact Desk <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Column 2: Physical Address & Office Hours */}
            <div className="space-y-3 text-xs text-slate-700">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Office & Hours
              </span>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{contact.officeAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{contact.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-slate-900 font-semibold hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Column 3: Payment Reassurance & Support */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                Payment Security & Protection
              </span>
              
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{payment.reassuranceText}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {payment.dataPrivacyText}. All transactions are processed over encrypted banking rails.
                </p>
              </div>

              {contact.talkToExpertEnabled && (
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href={`tel:${contact.phoneValue}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 font-bold text-xs transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-sky" />
                    <span>Call: {contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contact.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp CA</span>
                  </a>
                </div>
              )}

              <p className="text-[11px] text-slate-500 pt-1">
                Talk to our GST expert first — no obligation before you decide to register.
              </p>
            </div>

          </div>

          {/* Legal Policies Footer Note */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>
              By proceeding with payment, you agree to our{' '}
              <a href={contact.termsUrl} className="text-brand-sky underline font-semibold">
                Terms & Conditions
              </a>
              ,{' '}
              <a href={contact.privacyUrl} className="text-brand-sky underline font-semibold">
                Privacy Policy
              </a>
              , and{' '}
              <a href={contact.refundUrl} className="text-brand-sky underline font-semibold">
                Refund & Cancellation Policy
              </a>
              .
            </span>
            <span className="text-slate-400">GST Registration Services by NK Associates</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustSection;
