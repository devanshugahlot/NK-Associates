import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageSquare, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import Button from './ui/Button';
import { contactInfo } from '../data/contactInfo';

const serviceSubLinks = [
  { name: 'All Services Overview', path: '/services' },
  { name: 'GST Registration & Filing', path: '/services/gst' },
  { name: 'Income Tax Return (ITR)', path: '/services/income-tax' },
  { name: 'Audit & Assurance', path: '/services/audit-assurance' },
  { name: 'Company Registration', path: '/services/company-registration' },
  { name: 'Accounting & Bookkeeping', path: '/services/accounting-bookkeeping' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to add background blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Careers', path: '/careers' },
    { name: 'Tax Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(contactInfo.whatsappText)}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Pan-India Announcement Bar */}
        <div className="bg-brand-navy text-slate-300 text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-2 w-2 shrink-0 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-white flex items-center gap-1.5 text-[11px] sm:text-xs truncate">
                <span>🇮🇳 Pan-India CA Services</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline">Jaipur Head Office</span>
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs shrink-0">
              <a
                href={`tel:${contactInfo.phoneValue}`}
                className="hover:text-brand-sky text-slate-300 transition-colors flex items-center gap-1 font-medium py-0.5"
                aria-label={`Call ${contactInfo.phoneDisplay}`}
              >
                <Phone className="w-3 h-3 text-brand-sky shrink-0" />
                <span className="whitespace-nowrap">{contactInfo.phoneDisplay}</span>
              </a>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden lg:inline text-emerald-400 font-medium">100% Digital & Paperless</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              
              {/* Social Media Links (Visible from sm and up) */}
              <div className="hidden sm:flex items-center gap-2">
                <a
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates LinkedIn"
                  className="hover:text-brand-sky text-slate-400 transition-colors p-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates Facebook"
                  className="hover:text-brand-sky text-slate-400 transition-colors p-1"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates Instagram"
                  className="hover:text-brand-sky text-slate-400 transition-colors p-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-premium border-b border-slate-100 py-2.5 sm:py-3'
              : 'bg-white py-3 sm:py-3.5 border-b border-slate-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0">
                <img
                  src={logo}
                  alt="NK Associates - Chartered Accountants & Tax Consultants"
                  className="h-9 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-brand-navy leading-none truncate">
                    NK Associates
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-brand-skyDark font-semibold tracking-wide uppercase mt-0.5 truncate max-w-[170px] xs:max-w-none">
                    Chartered Accountants • Pan-India
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1.5 xl:gap-4">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div 
                        key={link.name} 
                        className="relative group py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `flex items-center gap-1 text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-200 px-2 py-1.5 rounded-lg focus:outline-none ${
                              isActive || location.pathname.startsWith('/services')
                                ? 'text-brand-sky'
                                : 'text-brand-navy hover:text-brand-sky'
                            }`
                          }
                        >
                          {link.name}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                        </NavLink>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-0.5">
                            {serviceSubLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-brand-sky hover:bg-sky-50/60 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `relative text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-200 px-2 py-1.5 rounded-lg focus:outline-none ${
                          isActive
                            ? 'text-brand-sky'
                            : 'text-brand-navy hover:text-brand-sky'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavUnderline"
                              className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-brand-sky rounded-full"
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden xl:inline">WhatsApp CA</span>
                  <span className="xl:hidden">WhatsApp</span>
                </a>
                <Button to="/contact" variant="primary" className="!px-3.5 !py-2 !text-xs xl:!text-sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Book Consultation
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-brand-navy hover:text-brand-sky focus:outline-none rounded-xl hover:bg-slate-100 transition-colors"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden max-h-[calc(100dvh-85px)] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-8 space-y-1.5">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="space-y-1">
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `min-h-[44px] flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                              isActive || location.pathname.startsWith('/services')
                                ? 'bg-brand-light text-brand-skyDark'
                                : 'text-brand-navy hover:bg-slate-50 hover:text-brand-sky'
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                        <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-3">
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="min-h-[40px] flex items-center py-1 px-2 text-xs text-slate-600 hover:text-brand-sky transition-colors font-medium"
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `min-h-[44px] flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-brand-light text-brand-skyDark'
                            : 'text-brand-navy hover:bg-slate-50 hover:text-brand-sky'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  );
                })}

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${contactInfo.phoneValue}`}
                    className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-brand-navy font-semibold text-xs border border-slate-200 active:scale-95 transition-transform"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-sky" />
                    <span>Call CA</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-semibold text-xs shadow-sm hover:bg-emerald-600 active:scale-95 transition-transform"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Mobile Social Links */}
                <div className="pt-3 flex items-center justify-center gap-3">
                  <span className="text-xs text-slate-500 font-medium">Follow Us:</span>
                  <a
                    href={contactInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-2">
                  <Button to="/contact" variant="primary" className="w-full text-center" icon={<ArrowRight className="w-4 h-4" />}>
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
