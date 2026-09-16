import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';
import { contactInfo } from '../data/contactInfo';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-slate-800">
      {/* Main Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img
                src={logo}
                alt="NK Associates Logo - Chartered Accountants & Tax Consultants Jaipur"
                className="h-10 md:h-12 w-auto object-contain bg-white rounded p-0.5"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-none">
                  NK Associates
                </span>
                <span className="text-[10px] text-brand-sky tracking-wide uppercase mt-0.5">
                  Chartered Accountants
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Headquartered in Jaipur, Rajasthan, NK Associates provides 100% digital, paperless Chartered Accountant, GST, Income Tax, and corporate compliance solutions to startups, MSMEs, and individual taxpayers across all Indian states.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/60 px-3 py-1.5 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>🇮🇳 Serving Clients Across India</span>
            </div>
            <div className="text-xs italic text-slate-400 border-l-2 border-brand-sky pl-3">
              "{contactInfo.tagline}"
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-brand-sky">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Client Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-brand-sky">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/services#gst-reg" className="hover:text-white transition-colors duration-300">
                  GST Services
                </Link>
              </li>
              <li>
                <Link to="/services#itr" className="hover:text-white transition-colors duration-300">
                  Income Tax Return
                </Link>
              </li>
              <li>
                <Link to="/services#notice-reply" className="hover:text-white transition-colors duration-300">
                  TDS & Notices Reply
                </Link>
              </li>
              <li>
                <Link to="/services#audit" className="hover:text-white transition-colors duration-300">
                  Statutory & Tax Audit
                </Link>
              </li>
              <li>
                <Link to="/services#company-reg" className="hover:text-white transition-colors duration-300">
                  Company Incorporation
                </Link>
              </li>
              <li>
                <Link to="/services#project-report" className="hover:text-white transition-colors duration-300">
                  Project Report & CMA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-brand-sky">
              Corporate Head Office
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                <a href={`tel:${contactInfo.phoneValue}`} className="hover:text-white text-slate-300 transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white text-slate-300 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                <div>
                  {contactInfo.businessHours.map((h, i) => (
                    <div key={i} className="text-slate-300 text-xs">
                      <span className="font-medium">{h.days}:</span> {h.hours}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Legal / Copyright Section */}
      <div className="bg-slate-950 py-6 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NK Associates. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 border border-slate-800 px-3.5 py-1 rounded-full text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-sky" />
            <span>Chartered Accountant Practice • Jaipur HQ & Pan-India Services</span>
          </div>
          <div className="flex gap-6">
            <a href="#/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
