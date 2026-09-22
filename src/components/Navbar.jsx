import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageSquare, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import Button from './ui/Button';
import { contactInfo } from '../data/contactInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(contactInfo.whatsappText)}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Pan-India Announcement Bar */}
        <div className="bg-brand-navy text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                <span>🇮🇳 Serving Clients Across All India</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline">Head Office: Jaipur, Rajasthan</span>
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <a
                href={`tel:${contactInfo.phoneValue}`}
                className="hover:text-brand-sky text-slate-300 transition-colors flex items-center gap-1 font-medium"
              >
                <Phone className="w-3 h-3 text-brand-sky" />
                <span>{contactInfo.phoneDisplay}</span>
              </a>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden lg:inline text-emerald-400 font-medium">100% Digital & Paperless</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-2.5">
                <a
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates LinkedIn"
                  className="hover:text-brand-sky text-slate-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates Facebook"
                  className="hover:text-brand-sky text-slate-400 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NK Associates Instagram"
                  className="hover:text-brand-sky text-slate-400 transition-colors"
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
              ? 'bg-white/95 backdrop-blur-md shadow-premium border-b border-slate-100 py-3'
              : 'bg-white py-3.5 border-b border-slate-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group focus:outline-none">
                <img
                  src={logo}
                  alt="NK Associates - Chartered Accountants & Tax Consultants"
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-extrabold tracking-tight text-brand-navy leading-none">
                    NK Associates
                  </span>
                  <span className="text-[10px] text-brand-skyDark font-semibold tracking-wide uppercase mt-0.5">
                    Chartered Accountants • Pan-India
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-semibold tracking-wide transition-colors duration-200 py-2 focus:outline-none ${
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
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-sky rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp CA</span>
                </a>
                <Button to="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Book Consultation
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-brand-navy hover:text-brand-sky focus:outline-none rounded-lg hover:bg-slate-50 transition-colors"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
              className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-brand-light text-brand-skyDark'
                          : 'text-brand-navy hover:bg-slate-50 hover:text-brand-sky'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${contactInfo.phoneValue}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-brand-navy font-semibold text-xs border border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-sky" />
                    <span>Call CA</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-semibold text-xs shadow-sm hover:bg-emerald-600"
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
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={contactInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
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

      {/* Spacer to push content below the sticky navbar + top announcement bar */}
      <div className="h-[98px] md:h-[105px]"></div>
    </>
  );
};

export default Navbar;
