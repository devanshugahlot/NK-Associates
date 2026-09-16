import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Building2,
  FileSpreadsheet,
  FileSignature,
  Receipt,
  Fingerprint,
  FileText,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
  Briefcase,
  Scale,
  Lock,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  Search,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Send,
  Phone,
  Mail,
  User,
  MessageSquare
} from 'lucide-react';
import { servicesData } from '../data/services';
import { contactInfo } from '../data/contactInfo';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

// Map icon names to Lucide React components
const iconMap = {
  UserCheck,
  Building2,
  FileSpreadsheet,
  FileSignature,
  Receipt,
  Fingerprint,
  FileText,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
  Briefcase,
  Scale,
  Lock,
  ShieldCheck,
  UtensilsCrossed,
  Users
};

// Define style options for different categories for high-end look
const categoryStyles = {
  taxation: {
    bg: 'bg-sky-50/75',
    text: 'text-sky-600',
    border: 'border-sky-100',
    accent: 'bg-sky-500',
    badgeBg: 'bg-sky-100/80',
    badgeText: 'text-sky-800'
  },
  'business-setup': {
    bg: 'bg-emerald-50/75',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
    accent: 'bg-emerald-500',
    badgeBg: 'bg-emerald-100/80',
    badgeText: 'text-emerald-800'
  },
  'audit-cert': {
    bg: 'bg-indigo-50/75',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
    accent: 'bg-indigo-500',
    badgeBg: 'bg-indigo-100/80',
    badgeText: 'text-indigo-800'
  },
  'compliance-auth': {
    bg: 'bg-amber-50/75',
    text: 'text-amber-600',
    border: 'border-amber-100',
    accent: 'bg-amber-500',
    badgeBg: 'bg-amber-100/80',
    badgeText: 'text-amber-800'
  }
};

const categoryNames = {
  taxation: 'Tax & GST',
  'business-setup': 'Business Setup',
  'audit-cert': 'Audit & Certifications',
  'compliance-auth': 'Registrations & Filings'
};

const Services = () => {
  const { hash } = useLocation();
  
  // Interactive UI state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCards, setExpandedCards] = useState({});
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const enquiryFormRef = useRef(null);

  // Smooth scroll to hash anchor if present in URL
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
        // Pre-expand this card if it exists
        setExpandedCards(prev => ({ ...prev, [id]: true }));
      }
    }
  }, [hash]);

  const handleEnquireNow = (serviceId) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
    if (enquiryFormRef.current) {
      setTimeout(() => {
        enquiryFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const toggleCardExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message and redirect synchronously to prevent browser popup block
    const selectedService = servicesData.find(s => s.id === formData.service);
    const serviceTitle = formData.service === 'other' ? 'Other Service' : (selectedService ? selectedService.title : formData.service);
    
    const whatsappText = `Hello NK Associates,

I would like to request the following service:
*Service:* ${serviceTitle}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message || 'N/A'}`;

    const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    setFormStatus('submitting');
    
    // Simulate API Submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      // Reset success status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1200);
  };

  // Filter logic
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <SEO
        title="CA & Tax Services | Jaipur & Pan-India - NK Associates"
        description="100% digital CA and tax compliance services across India: GST registration & filings, Income Tax return filing, TDS, statutory audits, and company incorporation."
        keywords="GST registration India, ITR filing online, CA services Jaipur, TDS return filing, company incorporation India, statutory audit Rajasthan, bookkeeping Jaipur"
        canonicalPath="/services"
      />
      {/* Services Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Dynamic mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-sky/20 via-brand-navy to-brand-navy pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 md:space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-800 text-brand-sky text-[10px] md:text-xs font-semibold uppercase tracking-wider border border-slate-700/60"
          >
            <span>🇮🇳 Available Pan-India • 100% Digital Workflow</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Pan-India CA, Taxation & Corporate Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Expert legal filings, corporate accounting, audits, and taxation support for clients nationwide, backed by our Jaipur head office.
          </motion.p>
        </div>
      </section>

      {/* Main Interactive Directory Section */}
      <section className="py-10 md:py-24 bg-brand-extralight/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search and Filters (Sticky on scroll) */}
          <div className="sticky top-[98px] md:top-[105px] z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-sm border border-slate-100 p-4 md:p-6 mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center transition-all duration-300">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-gray" />
              <input
                type="text"
                placeholder="Search (e.g. GST, ITR, Audit...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium bg-slate-50/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-navy p-1 rounded-full hover:bg-slate-200/50 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills (Horizontal Scrolling on Mobile) */}
            <div className="flex gap-2 w-full lg:w-auto justify-start lg:justify-end overflow-x-auto no-scrollbar pb-1 lg:pb-0 scroll-smooth snap-x">
              {['all', 'taxation', 'business-setup', 'audit-cert', 'compliance-auth'].map((catId) => (
                <button
                  key={catId}
                  onClick={() => setSelectedCategory(catId)}
                  className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap snap-align-start transition-all duration-300 ${
                    selectedCategory === catId
                      ? 'bg-brand-sky text-white shadow-premium'
                      : 'bg-slate-50 text-brand-charcoal hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  {catId === 'all' ? 'All Services' : categoryNames[catId]}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6 flex justify-between items-center px-1">
            <p className="text-xs text-brand-charcoal font-medium">
              Showing <span className="text-brand-sky font-bold">{filteredServices.length}</span> services
              {searchTerm && <span> matching "{searchTerm}"</span>}
              {selectedCategory !== 'all' && <span> in <span className="font-bold text-brand-navy">{categoryNames[selectedCategory]}</span></span>}
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-brand-sky hover:text-brand-skyDark font-bold flex items-center gap-1"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Grid Layout of Services */}
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 md:py-16 bg-white rounded-3xl border border-slate-100 shadow-premium max-w-xl mx-auto px-6 space-y-4"
            >
              <div className="w-14 h-14 bg-brand-light text-brand-sky rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-brand-navy">No Services Found</h3>
              <p className="text-brand-charcoal text-xs md:text-sm leading-relaxed">
                We couldn't find any services matching your search criteria. Try typing a different keyword or explore our categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-sky text-white rounded-xl text-xs md:text-sm font-semibold hover:bg-brand-skyDark transition-colors"
              >
                View All Services
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, index) => {
                  const IconComponent = iconMap[service.iconName] || Briefcase;
                  const isExpanded = !!expandedCards[service.id];
                  const colors = categoryStyles[service.category] || categoryStyles.taxation;
                  
                  return (
                    <motion.div
                      layout
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, delay: index * 0.02 }}
                      className="bg-white rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
                    >
                      {/* Top Accent Strip */}
                      <div className={`h-1.5 w-full ${colors.accent}`} />
                      
                      <div className="p-5 md:p-8 space-y-4 md:space-y-5 flex-grow">
                        {/* Header Details (Optimized Mobile Row / Desktop layout) */}
                        <div className="flex items-center gap-4 text-left">
                          <div className={`p-2.5 md:p-3 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} shrink-0 shadow-sm`}>
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                          <div className="space-y-1">
                            <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full ${colors.badgeBg} ${colors.badgeText}`}>
                              {categoryNames[service.category]}
                            </span>
                            <h3 className="text-base md:text-xl font-extrabold text-brand-navy leading-tight group-hover:text-brand-sky transition-colors duration-200">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        {/* Short Desc */}
                        <p className="text-xs md:text-sm text-brand-charcoal leading-relaxed text-left">
                          {service.shortDesc}
                        </p>

                        {/* Key Inclusions Accordion */}
                        <div className="border-t border-slate-100 pt-3 md:pt-4 text-left">
                          <button
                            onClick={() => toggleCardExpand(service.id)}
                            className="w-full flex items-center justify-between text-[11px] md:text-xs font-bold text-brand-navy hover:text-brand-sky transition-colors py-1 focus:outline-none"
                          >
                            <span className="tracking-wider">KEY DELIVERABLES</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5 text-brand-sky" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-brand-gray" />
                            )}
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden mt-3"
                              >
                                <p className="text-xs text-brand-gray leading-relaxed mb-3">
                                  {service.longDesc}
                                </p>
                                <ul className="space-y-2">
                                  {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal">
                                      <Check className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                                      <span className="leading-tight">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Footer Actions (Optimized mobile padding) */}
                      <div className="px-5 py-3.5 md:px-8 md:py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <button
                          onClick={() => toggleCardExpand(service.id)}
                          className="text-[11px] md:text-xs text-brand-gray hover:text-brand-navy font-semibold focus:outline-none"
                        >
                          {isExpanded ? 'Show less' : 'Read details'}
                        </button>
                        <button
                          onClick={() => handleEnquireNow(service.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 bg-brand-navy hover:bg-brand-sky text-white rounded-xl text-xs font-bold transition-all duration-300 shadow-sm hover:shadow"
                        >
                          <span>Enquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* Quick Enquiry / Booking Form Section */}
      <section 
        ref={enquiryFormRef} 
        id="enquiry-form" 
        className="py-12 md:py-24 bg-white border-t border-slate-100 relative scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Consultation"
            title="Request a Service Quote"
            subtitle="Fill in the details below, and our certified financial and tax experts will reach out to you within 24 hours."
          />

          <motion.div 
            layout
            className="bg-white rounded-3xl border border-slate-100 shadow-premium p-5 sm:p-8 md:p-10 relative overflow-hidden"
          >
            {/* Top color accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-sky to-indigo-500"></div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 md:py-10 text-center space-y-5 md:space-y-6"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-100 shadow-inner">
                    <Check className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-extrabold text-brand-navy">Enquiry Submitted!</h3>
                    <p className="text-brand-charcoal text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting NK Associates. Your request has been received. Our team will contact you shortly on your registered phone number or email address.
                    </p>
                  </div>
                  <div className="inline-block text-xs font-semibold text-brand-sky px-4 py-1.5 bg-brand-light rounded-full">
                    Average response time: 2-4 business hours
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5 md:space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-sky" />
                        <span>Full Name</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-sky" />
                        <span>Phone Number</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-sky" />
                        <span>Email Address</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium"
                      />
                    </div>

                    {/* Select Service Dropdown */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-brand-sky" />
                        <span>Required Service</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium bg-white"
                      >
                        <option value="" disabled>Select a service...</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="other">Other Service</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-sky" />
                      <span>Additional Message / Requirements</span>
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please details any specific requirements or timelines..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1 text-center">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={formStatus === 'submitting'}
                      className="w-full md:w-auto px-6 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 text-sm"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Why Us"
            title="Jaipur's Trusted Advisory Team"
            subtitle="NK Associates delivers professional standards and clear consultations across all business sizes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Standards", desc: "Expert advisory with certified and experienced team members." },
              { title: "Prompt Turnaround", desc: "Fast filing support designed around critical compliance timelines." },
              { title: "Zero Hidden Costs", desc: "Clear fee structure with complete transparency on services rendered." },
              { title: "Dedicated Helpdesk", desc: "Direct client support via email, phone, and WhatsApp integrations." }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center mb-3 text-brand-sky">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-extrabold text-brand-navy text-sm md:text-base mb-1.5">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-brand-charcoal leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
