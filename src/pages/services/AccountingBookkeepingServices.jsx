import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileSpreadsheet, 
  PieChart,
  TrendingUp,
  PhoneCall
} from 'lucide-react';
import SEO from '../../components/SEO';
import Button from '../../components/ui/Button';
import { contactInfo } from '../../data/contactInfo';

const AccountingBookkeepingServices = () => {
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
        "name": "Accounting & Bookkeeping",
        "item": "https://nkassociate.in/services/accounting-bookkeeping"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Accounting, Bookkeeping & Virtual CFO Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/"
    },
    "areaServed": "India",
    "description": "Digital bookkeeping, cloud accounting in Tally Prime and Zoho Books, monthly bank reconciliation, accounts payable and receivable management, payroll processing, and financial statements preparation by NK Associates Jaipur."
  };

  return (
    <div className="pt-24 pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Accounting & Bookkeeping | NK Associates"
        description="Outsourced bookkeeping, cloud accounting in Tally Prime & Zoho Books, bank reconciliation, monthly MIS reports, and payroll management by NK Associates."
        keywords="Bookkeeping services Jaipur, outsourced accounting India, Tally Prime accounting CA, Zoho Books accounting, monthly MIS reports, payroll accounting Jaipur"
        canonicalPath="/services/accounting-bookkeeping"
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
            <li className="text-brand-sky font-semibold" aria-current="page">Accounting & Bookkeeping</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-100 mb-4">
              <Calculator className="w-3.5 h-3.5 text-cyan-600" />
              Corporate Financial Accounting & Virtual CFO
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Digital Bookkeeping & Strategic Accounting Services
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Empower your enterprise with real-time financial clarity. NK Associates delivers outsourced accounting and bookkeeping solutions for startups, small-and-medium enterprises (SMEs), and corporate entities. We handle everyday voucher entry, bank reconciliations, vendor payables, and payroll while providing founders with actionable monthly MIS financial dashboards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Outsource Your Accounts
              </Button>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20NK%20Associates,%20I%20want%20to%20discuss%20monthly%20accounting%20and%20bookkeeping.`}
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

        {/* Deliverables Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Comprehensive Financial Accounting Suite
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From day-to-day voucher entry to closing year-end audited financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Cloud & Desktop Bookkeeping</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Recording sales, purchases, bank payments, and receipts across popular platforms including Tally Prime, Zoho Books, QuickBooks, and Busy.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Chart of accounts customization</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% digital document archiving</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Bank & Payment Gateway Reconciliation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Periodic reconciliation of multiple current accounts, credit cards, Razorpay, Cashfree, and Paytm merchant gateway settlements to prevent unaccounted leakage.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Unreconciled transaction tracking</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Chargeback and refund accounting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Accounts Payable & Receivable (AP/AR)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Aging analysis for outstanding debtor collections and scheduling vendor payouts to optimize business working capital cash flows.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Debtor aging report generation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> MSME 45-day payment rule compliance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Payroll & Statutory Deductions</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Monthly employee payroll computations, salary slips generation, TDS on salary (Section 192), Provident Fund (EPFO), and ESIC monthly contributions.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Form 16 Part A & B generation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Professional Tax (PT) compliance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Monthly MIS & Executive Dashboards</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Management Information System (MIS) reports including Profit & Loss Statement, Cash Flow, Gross Margin Analysis, and Budget variance tracking.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Monthly EBITDA & margin review</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Executive summary for directors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Year-End Financial Statements Preparation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Compilation of Balance Sheet, P&L Account, Notes to Accounts, and Cash Flow Statement in compliance with Schedule III of the Companies Act 2013.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Fixed assets schedule with depreciation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ready for statutory and tax audit sign-off</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Why Outsource Accounting to NK Associates?
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Hiring an in-house accounting team comes with expensive overheads, training hassles, and risk of non-compliance. Our outsourced accounting model gives you CA-supervised accuracy at a fraction of the cost:
              </p>
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Cost Reduction:</strong> Save up to 60% compared to full-time in-house accountants, software licenses, and hardware.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Chartered Accountant Supervision:</strong> All ledger entries and reconciliations are vetted by qualified CA professionals.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Tax Alignment:</strong> Books are maintained directly in harmony with GST and Income Tax requirements, minimizing year-end audit adjustments.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span><strong>Data Security & Backup:</strong> Encrypted cloud storage and role-based access to safeguard your corporate financial secrets.</span>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50/50 rounded-xl p-6 border border-cyan-100">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Accounting Software We Support</h3>
              <p className="text-sm text-slate-600 mb-4">
                We integrate seamlessly with your preferred ERP and cloud accounting software:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-slate-800">
                <div className="p-3 bg-white rounded-lg border border-cyan-100 text-center">Tally Prime / ERP 9</div>
                <div className="p-3 bg-white rounded-lg border border-cyan-100 text-center">Zoho Books Cloud</div>
                <div className="p-3 bg-white rounded-lg border border-cyan-100 text-center">QuickBooks Online</div>
                <div className="p-3 bg-white rounded-lg border border-cyan-100 text-center">Busy Accounting</div>
              </div>
              <div className="mt-6 pt-4 border-t border-cyan-200">
                <Link to="/contact" className="text-cyan-800 font-semibold text-xs hover:underline inline-flex items-center">
                  Get a Customized Monthly Accounting Quote <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
            <Link to="/services/company-registration" className="text-brand-sky hover:underline font-medium">Company Registration →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingBookkeepingServices;
