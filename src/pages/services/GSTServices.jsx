import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck2, 
  Receipt, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  FileSpreadsheet,
  Clock,
  PhoneCall
} from 'lucide-react';
import SEO from '../../components/SEO';
import Button from '../../components/ui/Button';
import { contactInfo } from '../../data/contactInfo';

const GSTServices = () => {
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
        "name": "Services",
        "item": "https://nkassociate.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "GST Services",
        "item": "https://nkassociate.in/services/gst"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "GST Registration & Return Filing Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/"
    },
    "areaServed": "India",
    "description": "Complete Goods and Services Tax compliance including GST registration, GSTR-1, GSTR-3B monthly filing, annual return GSTR-9/9C reconciliation, and GST department notice resolution in Jaipur and Pan-India."
  };

  return (
    <div className="pt-24 pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="GST Services | NK Associates"
        description="Comprehensive GST registration, monthly GSTR-1 & 3B return filing, annual GSTR-9 reconciliation, and department notice assistance by NK Associates Jaipur."
        keywords="GST registration Jaipur, GST return filing online, GSTR-1, GSTR-3B, GSTR-9C reconciliation, GST notice reply, CA for GST India"
        canonicalPath="/services/gst"
        schemaJson={{ ...breadcrumbSchema, ...serviceSchema }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-brand-sky transition-colors font-medium">Home</Link>
            </li>
            <li><span>/</span></li>
            <li>
              <Link to="/services" className="hover:text-brand-sky transition-colors font-medium">Services</Link>
            </li>
            <li><span>/</span></li>
            <li className="text-brand-sky font-semibold" aria-current="page">GST Services</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-sky border border-sky-100 mb-4">
              <Receipt className="w-3.5 h-3.5" />
              Goods & Services Tax (GST) Practice
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Professional GST Registration & Return Filing Services
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              NK Associates provides end-to-end digital GST compliance solutions for proprietorships, partnership firms, LLPs, Private Limited companies, and e-commerce sellers across Jaipur and Pan-India. From new GSTIN applications to annual audits, we safeguard your business against penalties while maximizing your legal Input Tax Credit (ITC).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Consult a GST Expert
              </Button>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20NK%20Associates,%20I%20need%20assistance%20with%20GST%20services.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-slate-300 text-brand-navy hover:bg-slate-50 transition-all"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" />
                WhatsApp Advisory
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Solutions Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Comprehensive GST Compliance Spectrum
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Timely filing, zero error reconciliations, and proactive tax optimization tailored to your trade volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">New GST Registration</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Fast-track GSTIN allocation with biometric Aadhaar authentication advisory, precise HSN/SAC classification, and complete principal place of business verification.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Normal Scheme & Composition Scheme</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Multi-state Branch GST Registrations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Monthly / Quarterly Return Filing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Error-free monthly GSTR-1 outward supply reporting and GSTR-3B tax payment submissions. QRMP scheme filing for qualifying small enterprises.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> B2B Invoice matching on GST Portal</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero return filing without delay penalty</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">GSTR-2B & Purchase Reconciliation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Automated reconciliation between your purchase ledger and GSTR-2B to capture 100% of eligible Input Tax Credit and identify defaulting vendors.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ineligible ITC identification</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Vendor follow-up data generation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Annual Returns (GSTR-9 & 9C)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Year-end compilation of turnover, taxes paid, and ITC availed. Preparation of GSTR-9 annual return and GSTR-9C reconciliation statement with audited financials.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Turnover reconciliation with ITR</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> DRC-03 voluntary payment guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">GST Notice Reply & Legal Scrutiny</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Expert representation and written legal submissions for ASMT-10 scrutiny notices, DRC-01 demand notices, and ITC mismatch inquiries under section 73/74.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Case-law backed legal drafting</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Personal hearings representation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">E-Way Bill & E-Invoicing Advisory</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Implementation of mandatory electronic invoicing (IRN) for businesses above turnover thresholds and smooth generation of consolidated consignment E-Way Bills.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ERP & billing software integration</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Vehicle change & validity extension</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Section: Documents & Process */}
        <section className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Documents Required for GST Registration
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                NK Associates ensures paperless document onboarding. To initiate your registration or transfer compliance, keep the following records ready for our chartered tax desk:
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Proprietor/Partner/Director:</strong> PAN Card, Aadhaar Card, Passport photo, and contact details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Business Constitution Proof:</strong> Partnership deed, LLP agreement, or Certificate of Incorporation (MCA).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Registered Office Proof:</strong> Electricity bill / property tax receipt along with NOC from the premise owner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Bank Account Proof:</strong> Cancelled cheque leaf or updated bank statement showing IFSC and entity name.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Why Choose NK Associates for GST?</h3>
              <p className="text-sm text-slate-600 mb-4">
                We combine deep statutory knowledge with real-time tracking systems to guarantee zero late fees and complete audit defense.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-sky" />
                  <span className="font-semibold text-slate-800">100% Digital Document Exchange</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-sky" />
                  <span className="font-semibold text-slate-800">Advance Due-Date Alerts (3 Days Prior)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-brand-sky" />
                  <span className="font-semibold text-slate-800">Monthly ITC Maximization Reconciliation</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-brand-sky font-semibold text-sm hover:underline"
                >
                  Schedule a Consultation in Jaipur Office <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Service Links */}
        <div className="border-t border-slate-200 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm">
          <Link to="/services" className="text-slate-600 hover:text-brand-navy font-semibold flex items-center gap-1">
            ← View All Core Services
          </Link>
          <div className="flex gap-4">
            <Link to="/services/income-tax" className="text-brand-sky hover:underline font-medium">Income Tax Services →</Link>
            <Link to="/services/audit-assurance" className="text-brand-sky hover:underline font-medium">Audit & Assurance →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTServices;
