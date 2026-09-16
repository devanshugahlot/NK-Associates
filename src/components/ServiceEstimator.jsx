import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, MessageSquare, Clock, FileCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

const profiles = [
  { id: 'salaried', label: 'Salaried Individual', icon: '👤' },
  { id: 'business', label: 'MSME / Trader / Shop', icon: '🏪' },
  { id: 'company', label: 'Pvt Ltd / LLP', icon: '🏢' },
  { id: 'startup', label: 'Startup / Freelancer', icon: '🚀' }
];

const serviceOptions = {
  salaried: [
    {
      id: 'itr-salaried',
      name: 'Income Tax Return (ITR-1 / ITR-2)',
      time: '24 - 48 Hours',
      features: ['Form 16 Analysis', 'HRA & 80C/80D Maximization', 'Capital Gains Reconciliation'],
      docs: ['Form 16 / 16A', 'Bank Statement', 'Aadhaar & PAN']
    },
    {
      id: 'tax-notice-ind',
      name: 'Tax Notice & Intimation Reply',
      time: '1 - 3 Days',
      features: ['Sec 143(1) Discrepancy Check', 'AIS/TIS Mismatch Verification', 'Online Portal Submission'],
      docs: ['Notice Copy', 'Filed ITR Ack', 'Bank Statements']
    }
  ],
  business: [
    {
      id: 'gst-monthly',
      name: 'Monthly GST Filing (GSTR-1 & 3B)',
      time: 'On-time Every Month',
      features: ['100% ITC Reconciliation', 'Nil or Active Filings', 'E-Way Bill Advisory'],
      docs: ['Sales & Purchase Invoices', 'Bank Statement', 'GST Portal Credentials']
    },
    {
      id: 'itr-business',
      name: 'Business ITR (ITR-3 / ITR-4 Presumptive)',
      time: '48 Hours',
      features: ['Section 44AD/44ADA Benefits', 'Balance Sheet & P&L Drafting', 'Tax Audit Applicability Check'],
      docs: ['Annual Turnover Summary', 'Bank Statements', 'Prior Year ITR']
    },
    {
      id: 'gst-reg-biz',
      name: 'New GST Registration',
      time: '3 - 5 Working Days',
      features: ['Full Document Verification', 'Zero Department Visit Required', 'Instant ARN Generation'],
      docs: ['Electricity Bill', 'Rent Agreement / Registry', 'PAN & Aadhaar']
    }
  ],
  company: [
    {
      id: 'company-incorp',
      name: 'Private Limited / LLP Incorporation',
      time: '5 - 7 Days (Pan-India)',
      features: ['Name Approval + DSC + DIN', 'MOA & AOA Drafting', 'PAN, TAN & Bank A/c Assistance'],
      docs: ['Directors PAN & Aadhaar', 'Bank Proof / Voter ID', 'Office Electricity Bill']
    },
    {
      id: 'annual-compliance',
      name: 'ROC Annual Compliance & Audit',
      time: 'Scheduled Filings',
      features: ['AOC-4 & MGT-7 Filings', 'Statutory Tax Audit (44AB)', 'Director KYC (DIR-3 KYC)'],
      docs: ['Audited Financials', 'Bank Statements', 'Board Resolutions']
    }
  ],
  startup: [
    {
      id: 'startup-pkg',
      name: 'Complete Startup Launch Package',
      time: '7 - 10 Days',
      features: ['Entity Setup + GSTIN', 'MSME / Udyam Certificate', 'Accounting & Billing Setup'],
      docs: ['Founder KYC Documents', 'Registered Address Proof']
    },
    {
      id: 'trademark-reg',
      name: 'Trademark & Brand Protection',
      time: '24 Hours Filing',
      features: ['Comprehensive TM Class Search', 'TM-A Online Submission', 'Instant ™ Symbol Usage'],
      docs: ['Brand Logo / Name', 'User Affidavit', 'Applicant KYC']
    }
  ]
};

const ServiceEstimator = () => {
  const [selectedProfile, setSelectedProfile] = useState('business');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const currentServices = serviceOptions[selectedProfile] || serviceOptions['business'];
  const activeService = currentServices[selectedServiceIndex] || currentServices[0];

  const handleProfileChange = (profileId) => {
    setSelectedProfile(profileId);
    setSelectedServiceIndex(0);
  };

  const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const inquiryText = `Hello NK Associates,\n\nI used the Online Estimator on your website:\n*Client Type:* ${profiles.find((p) => p.id === selectedProfile)?.label || ''}\n*Service Needed:* ${activeService?.name || ''}\n\nPlease share the pricing, document submission process, and consultation timeline.`;

  const whatsappInquiryUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(inquiryText)}`;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-800 to-brand-navy p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-sky/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/20 text-brand-sky text-xs font-semibold uppercase tracking-wider mb-2 border border-brand-sky/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Service & Fee Estimator</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Get an Instant CA Consultation Plan
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Select your business profile below to review required documents, turnaround time, and consult our CA team instantly on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3.5 py-1.5 rounded-full font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Confidential & Secure</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Step 1: Select Profile */}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Step 1: Choose Your Category
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {profiles.map((profile) => {
              const isActive = selectedProfile === profile.id;
              return (
                <button
                  key={profile.id}
                  onClick={() => handleProfileChange(profile.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? 'bg-sky-50 border-brand-sky text-brand-navy font-bold shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-brand-charcoal font-medium'
                  }`}
                >
                  <span className="text-xl">{profile.icon}</span>
                  <span className="text-xs md:text-sm leading-snug">{profile.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Service */}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Step 2: Select Service Required
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentServices.map((srv, idx) => {
              const isSelected = selectedServiceIndex === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceIndex(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-sky-50 border-brand-sky ring-2 ring-brand-sky/20 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-sm font-bold leading-tight ${isSelected ? 'text-brand-skyDark' : 'text-brand-navy'}`}>
                      {srv.name}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-brand-sky text-white flex items-center justify-center shrink-0 text-xs">
                        ✓
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-sky" /> {srv.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Result Card with Document Checklist & WhatsApp CTA */}
        <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-white px-3 py-1 rounded-lg border border-slate-200 text-brand-navy">
                Plan Overview
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-600" />
                Delivery: {activeService.time}
              </span>
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-lg">
                Pan-India 100% Online
              </span>
            </div>

            <h4 className="text-lg md:text-xl font-extrabold text-brand-navy">
              {activeService.name}
            </h4>

            {/* Features Included */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {activeService.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-brand-charcoal font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Document Checklist */}
            <div className="pt-2 border-t border-slate-200/80">
              <div className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-brand-sky" />
                <span>Standard Documents Needed:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeService.docs.map((doc, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-600"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="lg:w-72 flex flex-col gap-2 shrink-0">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Get Fee Quote via WhatsApp</span>
            </a>
            <span className="text-[11px] text-center text-slate-400 font-medium">
              Direct consultation with Senior Tax Consultant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEstimator;
