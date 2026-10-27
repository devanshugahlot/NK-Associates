import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Users
} from 'lucide-react';
import SEO from '../components/SEO';
import { contactInfo } from '../data/contactInfo';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: 'CA Article Assistant',
    experience: 'Fresher',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
        "name": "Careers",
        "item": "https://nkassociate.in/careers"
      }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=Job Application: ${formData.qualification} - ${formData.fullName}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AQualification: ${encodeURIComponent(formData.qualification)}%0D%0AExperience: ${encodeURIComponent(formData.experience)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 bg-brand-extralight min-h-screen">
      <SEO 
        title="Careers & Articleship | NK Associates"
        description="Explore career opportunities at NK Associates Jaipur. Openings for CA Article Assistants, Semi-Qualified CAs, Senior Accountants, and GST Tax Associates."
        keywords="CA articleship in Jaipur, CA firm jobs Jaipur, accountant jobs, tax consultant vacancies, careers NK Associates, articleship vacancy Rajasthan"
        canonicalPath="/careers"
        schemaJson={breadcrumbSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-brand-sky transition-colors font-medium">Home</Link>
            </li>
            <li><span>/</span></li>
            <li className="text-brand-sky font-semibold" aria-current="page">Careers</li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-8 md:p-12 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-sky border border-sky-100 mb-4">
              <Users className="w-3.5 h-3.5" />
              Join the NK Associates Team
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Build a Thriving Career in Taxation & Financial Advisory
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              At NK Associates, we foster a collaborative, merit-driven work environment where young talent and seasoned accounting professionals solve complex financial challenges for businesses nationwide. Whether you are seeking ICAI articleship or senior executive advisory roles, we invest in your technical training and career development.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Comprehensive exposure across GST, ITR & Audits</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Modern digital infrastructure in Jaipur</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Competitive stipend & industry growth</span>
            </div>
          </div>
        </div>

        {/* Open Positions Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Current Openings at Our Jaipur Head Office
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Explore dynamic roles matching your academic background and professional aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Position 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-sky bg-sky-50 px-2.5 py-1 rounded-full">
                  ICAI Articleship
                </span>
                <h3 className="text-lg font-bold text-brand-navy mt-3 mb-2">CA Article Assistant</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Hands-on training for CA Intermediate students in statutory audits, tax audits, GSTR-1 & 3B return preparation, ITR filings, and MCA compliance.
                </p>
                <div className="text-xs text-slate-500 space-y-1 mb-4">
                  <p><strong>Eligibility:</strong> CA Intermediate (Single/Both Groups)</p>
                  <p><strong>Location:</strong> Sanganer, Jaipur (On-site)</p>
                  <p><strong>Vacancies:</strong> 3 Openings</p>
                </div>
              </div>
              <a 
                href={`mailto:${contactInfo.email}?subject=Application for CA Articleship`}
                className="inline-flex items-center text-brand-sky font-semibold text-sm hover:underline"
              >
                Apply via Email <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Position 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Full-Time
                </span>
                <h3 className="text-lg font-bold text-brand-navy mt-3 mb-2">Senior Tax Associate</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Managing client tax portfolios, preparing legal submissions for GST and Income Tax notices, advance tax calculations, and TDS return supervision.
                </p>
                <div className="text-xs text-slate-500 space-y-1 mb-4">
                  <p><strong>Eligibility:</strong> M.Com / Semi-Qualified CA / MBA Finance</p>
                  <p><strong>Experience:</strong> 2 - 4 Years in a CA Practice</p>
                  <p><strong>Location:</strong> Jaipur HQ</p>
                </div>
              </div>
              <a 
                href={`mailto:${contactInfo.email}?subject=Application for Senior Tax Associate`}
                className="inline-flex items-center text-brand-sky font-semibold text-sm hover:underline"
              >
                Apply via Email <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Position 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                  Full-Time
                </span>
                <h3 className="text-lg font-bold text-brand-navy mt-3 mb-2">Senior Bookkeeper & Accountant</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  End-to-end accounting in Tally Prime and Zoho Books, bank reconciliations, accounts payable/receivable monitoring, and monthly MIS preparation.
                </p>
                <div className="text-xs text-slate-500 space-y-1 mb-4">
                  <p><strong>Eligibility:</strong> B.Com / Tally Certified Professional</p>
                  <p><strong>Experience:</strong> 1 - 3 Years in Commercial Accounting</p>
                  <p><strong>Location:</strong> Jaipur HQ</p>
                </div>
              </div>
              <a 
                href={`mailto:${contactInfo.email}?subject=Application for Senior Bookkeeper`}
                className="inline-flex items-center text-brand-sky font-semibold text-sm hover:underline"
              >
                Apply via Email <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Application Form & Contact Section */}
        <section className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Submit Your Resume Online
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Fill in the details below to forward your candidacy directly to our hiring partners. Alternatively, email your curriculum vitae with your latest marksheet/resume directly to <strong>{contactInfo.email}</strong>.
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm">
                  Thank you! Your mail application has been prepared. Our HR desk will connect with you within 48 business hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Role Applying For *</label>
                      <select 
                        value={formData.qualification}
                        onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      >
                        <option>CA Article Assistant</option>
                        <option>Senior Tax Associate</option>
                        <option>Accountant / Bookkeeper</option>
                        <option>Internship / Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Experience Level *</label>
                      <select 
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                      >
                        <option>Fresher / Student</option>
                        <option>1 - 2 Years</option>
                        <option>3 - 5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Introduction / Message</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your qualifications, exam attempts, or previous firm experience..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-brand-sky text-white font-semibold rounded-lg text-sm hover:bg-brand-skyDark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application via Email
                  </button>
                </form>
              )}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Our Work Culture & Perks</h3>
              <p className="text-sm text-slate-600 mb-4">
                We believe in work-life equilibrium and empowering team members to excel in professional examinations.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Exam study leaves permitted for CA Final / Inter exams.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Direct client communication and field audit exposure.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Regular workshops on new tax amendments & MCA rules.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Centrally air-conditioned office in Sanganer, Jaipur.</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1">
                <p><strong>Office Address:</strong> {contactInfo.address}</p>
                <p><strong>Contact Phone:</strong> {contactInfo.phoneDisplay}</p>
                <p><strong>Careers Desk:</strong> {contactInfo.email}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back navigation */}
        <div className="border-t border-slate-200 pt-8 flex justify-between items-center text-sm">
          <Link to="/" className="text-slate-600 hover:text-brand-navy font-semibold flex items-center gap-1">
            ← Back to Home
          </Link>
          <Link to="/about-us" className="text-brand-sky hover:underline font-medium">
            Learn More About Our Firm →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
