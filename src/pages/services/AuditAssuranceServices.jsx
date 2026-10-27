import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  FileCheck,
  Building,
  PhoneCall
} from 'lucide-react';
import SEO from '../../components/SEO';
import Button from '../../components/ui/Button';
import { contactInfo } from '../../data/contactInfo';

const AuditAssuranceServices = () => {
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
        "name": "Audit & Assurance",
        "item": "https://nkassociate.in/services/audit-assurance"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Audit and Assurance Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/"
    },
    "areaServed": "India",
    "description": "Statutory audit under Companies Act, Tax audit under Section 44AB, internal risk audit, stock audit, and CA UDIN certified net worth certificates by NK Associates Jaipur."
  };

  return (
    <div className="pt-24 pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Audit & Assurance Services | NK Associates"
        description="Independent statutory audit, Section 44AB tax audit, internal audit, stock verification, and CA certified UDIN reports by NK Associates in Jaipur & Pan-India."
        keywords="Statutory audit Jaipur, Tax audit Section 44AB, CA certification UDIN, internal audit firm Jaipur, stock audit CA, company auditor Rajasthan"
        canonicalPath="/services/audit-assurance"
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
            <li className="text-brand-sky font-semibold" aria-current="page">Audit & Assurance</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
              <Scale className="w-3.5 h-3.5" />
              Statutory Assurance & Attestation
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Independent Audit & Financial Assurance Services
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Establish credibility with banks, regulatory bodies, and investors. NK Associates offers rigorous, objective audit and assurance solutions adhering to the Standards on Auditing (SAs) issued by ICAI. We identify internal control vulnerabilities, ensure complete statutory compliance, and authenticate true and fair financial reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Request Audit Consultation
              </Button>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20NK%20Associates,%20I%20would%20like%20to%20discuss%20audit%20and%20assurance%20services.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-slate-300 text-brand-navy hover:bg-slate-50 transition-all"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" />
                Speak with Lead Auditor
              </a>
            </div>
          </div>
        </div>

        {/* Service Details Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Comprehensive Audit & Attestation Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From mandatory corporate reporting to special bank monitoring audits and ICAI UDIN certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Company Statutory Audit</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Mandatory annual audit under the Companies Act 2013 for Private Limited companies, Section 8 companies, and LLPs. Examination of accounting books, trial balances, and director reports.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Independent Auditor's Report drafting</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Internal Financial Controls (IFC) testing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Tax Audit (Section 44AB)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Form 3CA/3CB and Form 3CD compilation for enterprises exceeding statutory turnover thresholds (₹1 Crore / ₹10 Crore cash basis) under the Income Tax Act.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Clause-by-clause 3CD verification</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Depreciation and related party disclosure checks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Internal & Management Audit</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                In-depth operational audit assessing standard operating procedures (SOPs), leakages in procurement, cash management, and revenue leakage detection.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Fraud prevention and risk mitigation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Process efficiency recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Stock & Inventory Verification</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Physical count, valuation scrutiny, and warehouse verification of raw materials and finished inventory required by lending banks for working capital CC limits.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Bank drawing power (DP) calculation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Obsolescence and valuation discrepancy report</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">CA Net Worth Certificates & UDIN</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Chartered Accountant certified net worth statements, turnover certificates, and funds-utilization reports generated with Unique Document Identification Number (UDIN).
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Visa immigration financial proof</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Government tender eligibility certificates</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Bank CMA Data & Project Reports</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Preparation of 3 to 5-year Credit Monitoring Arrangement (CMA) projections, DSCR analysis, and project reports for term loans, machinery funding, and cash credit limits.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Banking ratio viability evaluation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Direct liaison support with loan managers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process & Transparency */}
        <section className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Our Structured Audit Methodology
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                At NK Associates, we execute audits with high ethical standards and absolute independence, safeguarding company promoters from statutory penalties and management oversights:
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Pre-Audit Planning & Risk Assessment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Understanding business model, accounting software, transaction volumes, and material risk areas.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Substantive Vouching & Verification</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Detailed sampling of purchase bills, sales registers, GST/TDS returns, bank books, and fixed asset additions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Management Reporting & UDIN Sign-off</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Discussing internal control recommendations with management and issuing UDIN authenticated statutory reports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50/50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Statutory Audit Thresholds at a Glance</h3>
              <p className="text-sm text-slate-600 mb-4">
                Know when your business is required by law to conduct a formal audit by a Chartered Accountant:
              </p>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3 bg-white rounded-lg border border-indigo-100">
                  <span className="font-bold text-slate-900 block">Private Limited / Public Companies:</span>
                  <span className="text-slate-600 text-xs">Mandatory statutory audit annually, regardless of turnover or capital.</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-indigo-100">
                  <span className="font-bold text-slate-900 block">Business Tax Audit (Section 44AB):</span>
                  <span className="text-slate-600 text-xs">Turnover exceeds ₹1 Crore (or ₹10 Crore where digital transactions exceed 95%).</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-indigo-100">
                  <span className="font-bold text-slate-900 block">Professionals Tax Audit (Section 44AB):</span>
                  <span className="text-slate-600 text-xs">Gross receipts exceed ₹50 Lakhs (or ₹75 Lakhs under digital compliance).</span>
                </div>
              </div>
              <div className="mt-5 text-right">
                <Link to="/contact" className="text-indigo-700 font-semibold text-xs hover:underline inline-flex items-center">
                  Consult our Audit Partner in Jaipur <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
            <Link to="/services/company-registration" className="text-brand-sky hover:underline font-medium">Company Registration →</Link>
            <Link to="/services/accounting-bookkeeping" className="text-brand-sky hover:underline font-medium">Accounting & Bookkeeping →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditAssuranceServices;
