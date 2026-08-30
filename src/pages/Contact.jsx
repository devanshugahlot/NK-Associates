import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import { servicesData } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Phone check
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s\-+]/g, '').slice(-10))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service dropdown check
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Message check
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide details (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Construct WhatsApp message and redirect synchronously to prevent browser popup block
    const whatsappText = `Hello NK Associates,

I would like to request the following service:
*Service:* ${formData.service}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message || 'N/A'}`;

    const cleanPhone = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      // Auto-hide success banner after 6 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  return (
    <PageTransition>
      {/* Contact Hero */}
      <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/60">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's Discuss Your Requirement
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            NK Associates is located in Jaipur. Contact our office to speak with a tax consultant or request compliance assistance.
          </p>
        </div>
      </section>

      {/* Main Details and Form Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-sky">
                  Office Details
                </span>
                <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
                  NK Associates
                </h2>
                <p className="text-brand-charcoal text-sm leading-relaxed">
                  Have a question about GST registration, filing, or tax planning? Reach out to our team in Jaipur. We are committed to responding within 24 business hours.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Office Location</h4>
                    <p className="text-sm text-brand-charcoal leading-relaxed mt-1">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Phone Call</h4>
                    <a href={`tel:${contactInfo.phoneValue}`} className="text-sm text-brand-skyDark hover:underline font-semibold block mt-1">
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Email Address</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-brand-skyDark hover:underline font-semibold block mt-1 break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Business Hours</h4>
                    <div className="mt-1 space-y-1">
                      {contactInfo.businessHours.map((bh, idx) => (
                        <div key={idx} className="text-xs text-brand-charcoal">
                          <span className="font-semibold text-brand-navy">{bh.days}:</span> {bh.hours}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm relative">
                
                {/* Success Overlay Banner */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="absolute inset-0 bg-white/95 z-20 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                      <h3 className="text-2xl font-extrabold text-brand-navy mb-2">Enquiry Sent Successfully!</h3>
                      <p className="text-sm text-brand-charcoal max-w-md leading-relaxed">
                        Thank you for contacting NK Associates. One of our tax and compliance professionals will review your requirement and get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 text-sm font-bold text-brand-sky hover:text-brand-skyDark underline focus:outline-none"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <h3 className="text-xl font-extrabold text-brand-navy mb-8 text-left border-b border-slate-200 pb-3">
                  Submit Online Enquiry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amit Sharma"
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9829012345"
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. amit@example.com"
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all appearance-none ${
                          errors.service ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'
                        }`}
                      >
                        <option value="">Select Service Category</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      {/* Arrow marker */}
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Describe Your Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Please details what GST or Income Tax queries you have..."
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-sky/20 transition-all resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-sky text-white py-3.5 px-6 font-semibold rounded-lg hover:bg-brand-skyDark transition-all duration-300 shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-2 group disabled:opacity-65"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Google Maps Container */}
      <section className="bg-slate-100 py-1 border-t border-slate-200">
        <div className="w-full h-[400px] md:h-[450px] relative">
          <iframe
            src={contactInfo.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NK Associates Location Map"
            className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
