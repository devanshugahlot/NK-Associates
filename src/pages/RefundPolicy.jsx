import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RotateCcw,
  RefreshCw,
  ShieldCheck, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  UserCheck,
  Scale,
  Clock,
  CreditCard,
  Ban,
  Receipt,
  FileCheck2,
  HelpCircle
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { contactInfo } from '../data/contactInfo';

const RefundPolicy = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nkassociate.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Refund & Cancellation Policy",
        "item": "https://nkassociate.in/refund-policy"
      }
    ]
  };

  return (
    <PageTransition>
      <SEO
        title="Refund & Cancellation Policy | NK Associates"
        description="Official Refund and Cancellation Policy of NK Associates Private Limited. Transparent guidelines on service cancellations, refund eligibility, statutory government fees, and timelines."
        keywords="NK Associates refund policy, cancellation policy chartered accountant, CA service refund Jaipur, tax consultancy refund policy, nkassociate.in refund"
        canonicalPath="/refund-policy"
        schemaJson={breadcrumbSchema}
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-brand-navyLight/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/70 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 text-brand-sky" />
            <span>Billing & Service Terms</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Refund & Cancellation Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {contactInfo.legalEntityName} | Website: <a href="https://nkassociate.in" className="text-brand-sky hover:underline font-semibold">{contactInfo.websiteDisplay}</a>
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
              <Calendar className="w-3.5 h-3.5 text-brand-sky" />
              Effective Date: 18 September 2026
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Last Updated: 17 November 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link to="/" className="hover:text-brand-sky transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-semibold">Refund & Cancellation Policy</span>
          </nav>

          {/* Intro Notice Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-brand-sky" />
              </div>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  At <strong>{contactInfo.legalEntityName}</strong> ("NK Associates", "we", "us", or "our"), customer satisfaction, professional integrity, and transparency are fundamental to our practice. We specialize in digital Chartered Accountancy, Goods & Services Tax (GST), Income Tax (ITR), Corporate ROC/MCA compliances, Audits, Accounting, and business incorporation services.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  Because our offerings comprise professional consulting, specialized time commitments, and statutory submissions before various government authorities, this Refund and Cancellation Policy details the criteria, process, and limitations governing order cancellations and fee refunds.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights / Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Cancellation Window</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Permissible before assignment allocation and professional drafting commences.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Ban className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Statutory Fees</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Government filing fees, challans, and stamp duties are strictly 100% non-refundable once paid.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Refund Timeline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Processed within 5 to 7 business days back to the original source payment method.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Duplicate Charges</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Accidental double payments are refunded in full upon verification.</p>
            </div>
          </div>

          {/* Policy Sections Container */}
          <div className="space-y-8 text-slate-700">

            {/* 1. Scope & Nature of Services */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">1</span>
                <span>Scope and Nature of Services</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                This Refund and Cancellation Policy applies to all services and packages made available through our website (<strong>nkassociate.in</strong>), official payment links, client invoices, or offline engagement.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Our services involve customized legal drafting, accounting computations, statutory verifications, and submissions to ministries and departments such as the Ministry of Corporate Affairs (MCA), Goods and Services Tax Network (GSTN), Central Board of Direct Taxes (CBDT / Income Tax Department), and Trademark Registry. You acknowledge that professional time and technical overhead are incurred once an engagement is initiated.
              </p>
            </div>

            {/* 2. Cancellation Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">2</span>
                <span>Cancellation Policy & Timelines</span>
              </h2>

              <p className="text-sm leading-relaxed text-slate-600">
                Clients may request the cancellation of an order or engagement under the following terms:
              </p>

              <div className="space-y-4 pl-2 border-l-2 border-slate-200 ml-1">
                <div>
                  <h3 className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    2.1 Cancellation Prior to Assignment Allocation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    If a cancellation request is submitted in writing before our team has assigned a dedicated Chartered Accountant / professional executive or initiated document review, you are entitled to a refund of the professional fee paid, less nominal gateway transaction charges (typically 2% to 3% levied by payment aggregators).
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    2.2 Cancellation After Work Has Commenced
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    If work has commenced—such as document screening, drafting of MoA/AoA, computation of taxes, preparation of CMA data, or consultation—cancellation will be evaluated on a prorated basis. NK Associates reserves the right to deduct reasonable professional charges corresponding to the man-hours already invested, in addition to non-recoverable administrative costs.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    2.3 Cancellation After Government Portal Submission / Filing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Once documents, tax returns, incorporation forms (e.g. SPICe+), GST registration applications, or statutory reports have been uploaded, submitted, or filed with any government department, <strong>no cancellation or refund shall be permitted</strong> under any circumstances, as the core service is deemed fulfilled.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Statutory Government Fees and Third-Party Costs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">3</span>
                <span>Statutory Government Fees & Third-Party Out-of-Pocket Expenses</span>
              </h2>
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-2">
                <p className="font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  Government Fees Are 100% Non-Refundable
                </p>
                <p className="leading-relaxed">
                  All statutory challans, MCA/ROC filing fees, GST late fees, tax remittances, stamp duties, court fees, notary costs, PAN application charges, trademark government fees, and Digital Signature Certificate (DSC) issuance charges paid directly to government treasuries or licensed Certifying Authorities (CAs) are <strong>strictly non-refundable</strong> once generated or transmitted.
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                NK Associates acts solely as an authorized facilitator and filer on behalf of the client for such statutory fees. We cannot retrieve or seek reimbursement of government revenues from statutory authorities once paid.
              </p>
            </div>

            {/* 4. Refund Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">4</span>
                <span>Refund Eligibility & Disqualification</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Eligible */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    When Refunds Are Eligible
                  </h3>
                  <ul className="text-xs text-emerald-900/90 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Duplicate / Erroneous Payment:</strong> If your card or account was charged multiple times for the same transaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Technical Gateway Errors:</strong> Payment deducted but order failed to generate on our portal or payment gateway.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Non-Delivery by NK Associates:</strong> In the rare event we are unable to accept or fulfill the contracted engagement due to internal operational constraints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Cancellation Before Work Starts:</strong> Cancellation requested before assignment allocation as outlined in Section 2.1.</span>
                    </li>
                  </ul>
                </div>

                {/* Non-Eligible */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-4 space-y-3">
                  <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600" />
                    When Refunds Are NOT Eligible
                  </h3>
                  <ul className="text-xs text-rose-900/90 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Client Delay / Non-Submission:</strong> Failure or refusal by the client to provide required KYC, OTPs, DSC, or documents within requested deadlines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Government Department Rejection:</strong> Rejection by authorities (e.g. MCA name rejection, GST registration clarification rejection) due to defective documents supplied by the client.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Change of Business Decision:</strong> The client deciding to abandon or alter their business plans after work has commenced.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span><strong>Third-Party Delays:</strong> Delays caused by government portal maintenance, server crashes (e.g. MCA V3 or GSTN outages), or department backlog.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Refund Processing Timeline & Method */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">5</span>
                <span>Refund Processing Timeline & Payment Method</span>
              </h2>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  All approved refunds are processed in full adherence to Reserve Bank of India (RBI) payment aggregator regulations:
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <strong>Original Payment Method:</strong> Refunds will only be credited back to the original source account, card, UPI ID, or net banking channel used during the initial transaction through our licensed payment gateway (Cashfree Payments). We do not issue cash refunds.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                    <Clock className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <strong>Turnaround Time (TAT):</strong> Once approved by our finance desk, the refund is initiated within <strong>5 to 7 business days</strong>. Depending on your bank's settlement cycle, credit cards, UPI, and bank accounts typically reflect the amount within an additional 3 to 5 banking working days.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Step-by-Step Cancellation & Refund Request Procedure */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">6</span>
                <span>Procedure for Requesting a Cancellation or Refund</span>
              </h2>

              <p className="text-sm leading-relaxed text-slate-600">
                To initiate a formal cancellation or refund review, please follow these steps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-brand-sky">STEP 1</span>
                  <h4 className="text-xs font-bold text-brand-navy">Submit Written Email</h4>
                  <p className="text-xs text-slate-600">Send an email to <a href={`mailto:${contactInfo.email}`} className="text-brand-sky hover:underline font-semibold">{contactInfo.email}</a> and cc <a href={`mailto:${contactInfo.grievanceEmail}`} className="text-brand-sky hover:underline font-semibold">{contactInfo.grievanceEmail}</a>.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-brand-sky">STEP 2</span>
                  <h4 className="text-xs font-bold text-brand-navy">Provide Order Details</h4>
                  <p className="text-xs text-slate-600">Mention Order/Invoice ID, registered phone number, payment transaction reference (UTR), and specific reason for cancellation.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-brand-sky">STEP 3</span>
                  <h4 className="text-xs font-bold text-brand-navy">Verification & Settlement</h4>
                  <p className="text-xs text-slate-600">Our accounts team reviews progress status within 48 business hours and communicates the refund approval and credit timeline.</p>
                </div>
              </div>
            </div>

            {/* 7. Force Majeure and Statutory System Outages */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">7</span>
                <span>Force Majeure & Government System Outages</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                NK Associates shall not be held liable for delayed or hindered service delivery resulting from events beyond our reasonable control, including but not limited to nationwide government portal downtime (e.g., MCA V3 system crashes, GSTN portal glitches, Income Tax e-Filing server errors), acts of God, strikes, utility failures, cyber attacks, or regulatory directives issued by statutory bodies. In such cases, assignments will be resumed as soon as services are restored by the respective departments.
              </p>
            </div>

            {/* 8. Modifications to This Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">8</span>
                <span>Modifications to This Policy</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                NK Associates Private Limited reserves the right to amend, update, or revise this Refund and Cancellation Policy at any time without prior individual notice, in line with applicable regulatory standards, banking practices, or service enhancements. The revised policy will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* 9. Nodal Contact & Grievance Redressal Card */}
            <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-brand-sky text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Customer Care & Grievance Desk</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                9. Billing & Grievance Contact
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you have questions regarding an existing invoice, pending cancellation request, or refund status, our support and compliance desk is available Monday through Saturday.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15 space-y-3 text-xs sm:text-sm">
                <p className="font-bold text-white text-base">{contactInfo.legalEntityName}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Website: <a href="https://nkassociate.in" className="text-brand-sky hover:underline font-semibold">{contactInfo.websiteDisplay}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Email: <a href={`mailto:${contactInfo.email}`} className="text-brand-sky hover:underline font-semibold">{contactInfo.email}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Phone: <a href={`tel:${contactInfo.phoneValue}`} className="text-brand-sky hover:underline font-semibold">{contactInfo.phoneDisplay}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Location: Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Governing Law & Jurisdiction */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">10</span>
                <span>Governing Law & Legal Jurisdiction</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                This Refund & Cancellation Policy shall be construed and governed in accordance with the laws of the Republic of India. In the event of any dispute or claim arising out of or in connection with fees, cancellations, or refunds, the competent courts at <strong>Jaipur, Rajasthan</strong> shall have exclusive jurisdiction.
              </p>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default RefundPolicy;
