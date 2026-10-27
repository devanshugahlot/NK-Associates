import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCheck, 
  Building2, 
  Coins, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileText,
  Clock,
  PhoneCall
} from 'lucide-react';
import SEO from '../../components/SEO';
import Button from '../../components/ui/Button';
import { contactInfo } from '../../data/contactInfo';

const IncomeTaxServices = () => {
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
        "name": "Income Tax Services",
        "item": "https://nkassociate.in/services/income-tax"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Income Tax Return Filing & Tax Planning Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/"
    },
    "areaServed": "India",
    "description": "Personal & corporate income tax return filing, strategic tax saving planning, capital gains calculations, TDS compliance, and departmental notice representation by NK Associates in Jaipur and across India."
  };

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Income Tax Services | NK Associates"
        description="Expert Income Tax Return (ITR) filing for individuals and corporates, capital gains advisory, tax saving under Section 80C, and scrutiny representation by NK Associates."
        keywords="Income Tax filing Jaipur, ITR 1 2 3 4 5 6, corporate tax filing India, tax saving consultation, AIS TIS reconciliation, tax notice reply CA"
        canonicalPath="/services/income-tax"
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
            <li className="text-brand-sky font-semibold" aria-current="page">Income Tax Services</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-5 sm:p-8 md:p-12 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-4">
              <Coins className="w-3.5 h-3.5 shrink-0" />
              Direct Taxation & Advisory Practice
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4 break-words">
              Expert Income Tax Return Filing & Strategic Tax Planning
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Navigate changing tax regulations with absolute confidence. NK Associates offers professional tax calculation, Form 26AS/AIS/TIS reconciliation, regime selection (Old vs New), and corporate tax optimization for individuals, professionals, firms, and companies in Jaipur and pan-India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto text-center justify-center">
                File Your ITR with a CA
              </Button>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20NK%20Associates,%20I%20need%20assistance%20with%20Income%20Tax%20Return%20filing.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-slate-300 text-brand-navy hover:bg-slate-50 transition-all min-h-[44px] w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-emerald-600 shrink-0" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <section className="mb-10 sm:mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Tailored Direct Tax Solutions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From salaried employees to high-net-worth investors and multi-crore enterprises, we ensure compliance and maximum legal savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Individual ITR (ITR-1 & ITR-2)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Filing for salaried employees, pensioners, house property owners, and individuals with foreign income or stock trading gains.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Form 16 & salary slip verification</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Comparative Old vs New Tax Regime analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Business & Professional ITR (ITR-3/4)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Presumptive taxation scheme returns under Section 44AD, 44ADA, and 44AE for doctors, freelancers, tech consultants, and retail traders.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Balance sheet & P&L compilation</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Expense deduction maximization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Corporate & LLP Tax (ITR-5 & ITR-6)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Corporate tax computations for Private Limited companies and LLPs. Minimum Alternate Tax (MAT) calculations and loss carry-forward tracking.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Concessional 22% tax regime adoption (115BAA)</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Depreciation computation under Tax Rules</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Capital Gains Calculation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Detailed short-term (STCG) and long-term (LTCG) tax calculations for real estate sales, mutual funds, equity shares, and crypto/VDA assets.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Section 54, 54EC, 54F exemption advisory</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cost inflation indexation calculation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">TDS & TCS Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Quarterly TDS return preparation (Form 24Q, 26Q, 27Q), monthly challan deposits, Form 16/16A generation, and correction returns.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> TRACES justification report resolution</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Lower TDS deduction certificates (Form 13)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Tax Notice Reply & Appeal Handling</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Structured representations for notices under Section 143(1) intimation, 139(9) defective return, 142(1) inquiry, and 148 reassessment.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Faceless assessment portal drafting</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Rectification filings u/s 154</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Checklist & Due Dates Section */}
        <section className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-100 shadow-sm mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 break-words">
                Information & Records Checklist for ITR
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                NK Associates ensures strict data confidentiality. To receive an accurate pre-filing tax computation, furnish the following documents:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                  <span><strong>Identification & Banking:</strong> PAN card, Aadhaar card, and all active bank account statements for the financial year.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                  <span><strong>Income Certificates:</strong> Form 16 from employer, Form 16A from banks/clients, and interest certificates from savings/FDs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                  <span><strong>Investment Proofs:</strong> Life insurance premium (LIC), health insurance (80D), ELSS mutual funds, and tuition fee receipts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</span>
                  <span><strong>Investment Trading P&L:</strong> Consolidated capital gains tax statement from brokers (Zerodha, Groww, AngelOne, etc.).</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/50 rounded-xl p-5 sm:p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Key Tax Filing Deadlines in India</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Missing statutory deadlines attracts mandatory late fees under Section 234F and penal interest under Section 234A.
              </p>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-emerald-100">
                  <span className="font-semibold text-slate-800">Non-Audit Individuals & HUFs</span>
                  <span className="text-emerald-800 font-bold">31st July</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-emerald-100">
                  <span className="font-semibold text-slate-800">Businesses Subject to Tax Audit</span>
                  <span className="text-emerald-800 font-bold">31st October</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-emerald-100">
                  <span className="font-semibold text-slate-800">Tax Audit Report (Form 3CA/3CB-3CD)</span>
                  <span className="text-emerald-800 font-bold">30th September</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-semibold text-slate-800">Belated / Revised Return</span>
                  <span className="text-emerald-800 font-bold">31st December</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-200">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-emerald-700 font-semibold text-sm hover:underline min-h-[44px]"
                >
                  Book In-Person CA Review in Jaipur <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Service Links */}
        <div className="border-t border-slate-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-sm">
          <Link to="/services" className="text-slate-600 hover:text-brand-navy font-semibold flex items-center gap-1 min-h-[44px]">
            ← View All Core Services
          </Link>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/gst" className="text-brand-sky hover:underline font-medium min-h-[44px] flex items-center">GST Services →</Link>
            <Link to="/services/audit-assurance" className="text-brand-sky hover:underline font-medium min-h-[44px] flex items-center">Audit & Assurance →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxServices;
