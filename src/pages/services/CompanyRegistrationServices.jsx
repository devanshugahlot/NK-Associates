import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  FileCheck2,
  Users,
  PhoneCall
} from 'lucide-react';
import SEO from '../../components/SEO';
import Button from '../../components/ui/Button';
import { contactInfo } from '../../data/contactInfo';

const CompanyRegistrationServices = () => {
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
        "name": "Company Registration",
        "item": "https://nkassociate.in/services/company-registration"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Company Incorporation & Corporate Secretarial Services",
    "provider": {
      "@type": "AccountingService",
      "name": "NK Associates",
      "telephone": "+91-75688-20015",
      "url": "https://nkassociate.in/"
    },
    "areaServed": "India",
    "description": "Private Limited Company incorporation, LLP registration, OPC, Section 8 NGO incorporation, MSME Udyam registration, Startup India DPIIT recognition, and ROC annual compliance by NK Associates Jaipur."
  };

  return (
    <div className="pt-24 pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Company Registration | NK Associates"
        description="Fast Private Limited Company registration, LLP incorporation, MSME Udyam certificate, Startup India DPIIT recognition, and ROC compliance by NK Associates Jaipur."
        keywords="Private Limited company registration Jaipur, LLP registration online India, OPC incorporation, MSME Udyam certificate, Startup India recognition, ROC annual filing CA"
        canonicalPath="/services/company-registration"
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
            <li className="text-brand-sky font-semibold" aria-current="page">Company Registration</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-navy border border-blue-100 mb-4">
              <Building className="w-3.5 h-3.5 text-brand-sky" />
              Corporate Secretarial & Startup Setup Practice
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Private Limited & LLP Registration Services in India
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Turn your entrepreneurial vision into a legally recognized legal entity. NK Associates offers fast-track, 100% paperless company incorporation under the Ministry of Corporate Affairs (MCA). From name reservation and DSC generation to Certificate of Incorporation (COI), PAN, TAN, and bank account setup, our corporate team manages the entire lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Incorporate Your Business
              </Button>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20NK%20Associates,%20I%20want%20to%20register%20a%20new%20company/LLP.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-slate-300 text-brand-navy hover:bg-slate-50 transition-all"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" />
                Speak with Incorporation Expert
              </a>
            </div>
          </div>
        </div>

        {/* Business Structures Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Select the Ideal Legal Structure for Your Enterprise
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We guide founders to choose the most tax-efficient and scalable corporate entity based on funding plans and liability exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Private Limited Company (Pvt Ltd)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                The gold standard for startups and scaling businesses seeking angel/VC funding, limited liability protection, and high corporate credibility.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Minimum 2 Directors & Shareholders</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ready for equity investment & ESOPs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Limited Liability Partnership (LLP)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Best for professional firms, agencies, and consultancies wanting limited liability with lower mandatory compliance overhead compared to private companies.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No statutory audit until turnover ₹40 Lakhs</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No dividend distribution tax</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">One Person Company (OPC)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Ideal for solo founders wanting full executive control with limited corporate liability, separate legal entity status, and bankability.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 1 Promoter + 1 Nominee Director</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Seamless conversion to Private Limited later</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">MSME / Udyam Registration</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Government of India Udyam certificate to access priority sector bank lending, interest rate concessions, and statutory protection against delayed buyers.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Micro, Small, or Medium classification</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Electricity tariff & trademark fee subsidies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Startup India Recognition (DPIIT)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Application for DPIIT startup recognition to unlock 3-year income tax holiday under Section 80-IAC, angel tax exemptions (Section 56), and government tender benefits.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Section 80-IAC tax exemption drafting</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Fast-track patent & trademark benefits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-sky flex items-center justify-center mb-4 font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">ROC Annual Compliances</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Comprehensive maintenance of board minutes, statutory registers, annual filings (Form AOC-4, MGT-7/7A), and annual Director KYC (DIR-3 KYC).
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero penalty compliance tracking</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Director change, capital increase, registered office shift</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Incorporation Steps */}
        <section className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                4-Step Hassle-Free Company Incorporation Process
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                With NK Associates, forming your company takes just 5 to 7 working days with zero physical visits to government offices:
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-navy flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Name Approval (RUN / SPICe+ Part A)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">We check trademark registry and MCA database to secure unique name approval on first attempt.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-navy flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Digital Signature Certificates (Class 3 DSC)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Paperless video-verification issuance of encrypted DSCs for all proposed directors.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-navy flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">SPICe+ Part B Filing & MOA/AOA Drafting</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Drafting tailored Memorandum & Articles of Association, DIN, PAN, TAN, EPFO, and ESIC registrations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-navy flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Certificate of Incorporation (COI) & Bank Setup</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Delivery of official MCA Certificate of Incorporation with corporate CIN, PAN, TAN, and current account integration.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Documents Needed from Promoters</h3>
              <p className="text-sm text-slate-600 mb-4">
                Scan copies required to begin your company registration:
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-200 text-brand-navy flex items-center justify-center text-xs">✓</span>
                  <span><strong>Directors:</strong> PAN card & Aadhaar card.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-200 text-brand-navy flex items-center justify-center text-xs">✓</span>
                  <span><strong>Address Proof:</strong> Bank statement or utility bill (under 2 months old).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-200 text-brand-navy flex items-center justify-center text-xs">✓</span>
                  <span><strong>Registered Office:</strong> Electricity bill & NOC from owner.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-200 text-brand-navy flex items-center justify-center text-xs">✓</span>
                  <span><strong>Photographs:</strong> Passport size photographs of all directors.</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-blue-200">
                <Link to="/contact" className="text-brand-navy font-semibold text-xs hover:underline inline-flex items-center">
                  Start Your Incorporation Online Today <ArrowRight className="w-3.5 h-3.5 ml-1 text-brand-sky" />
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
            <Link to="/services/accounting-bookkeeping" className="text-brand-sky hover:underline font-medium">Accounting & Bookkeeping →</Link>
            <Link to="/services/gst" className="text-brand-sky hover:underline font-medium">GST Services →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationServices;
