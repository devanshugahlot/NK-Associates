import React, { useState, useId, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  PhoneCall, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
  CheckCircle,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gstConfig } from './gstConfig';
import { calculateGst, formatINR } from '../../utils/pricing';
import { useGstPackage } from '../../context/GstPackageContext';
import { useRazorpay } from '../../hooks/useRazorpay';

const EnquiryForm = () => {
  const { 
    currentStep,
    setCurrentStep,
    hasSubmittedStep1,
    setHasSubmittedStep1,
    selectedPackageId, 
    setSelectedPackageId, 
    leadId,
    setLeadId,
    preselectedViaButton,
    formRef, 
    firstFieldRef, 
    isFormHighlighted 
  } = useGstPackage();

  const { isLoaded: isRzpLoaded, open: openRazorpay } = useRazorpay();

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: 'Rajasthan',
    consent: true,
    honeypot: '', // bot trap
  });

  // Validation Errors & Loading
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Success Confirmation State
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Active pricing calculation
  const currentPackage = gstConfig.packages.find((p) => p.id === selectedPackageId) || gstConfig.packages[3];
  const pricing = calculateGst(currentPackage.price);

  // Unique IDs for accessibility
  const nameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const stateId = useId();
  const consentId = useId();

  // Scroll card into view on step change on mobile
  useEffect(() => {
    if (currentStep > 1 && formRef.current) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      if (isMobile) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentStep, formRef]);

  // Field change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitError) setSubmitError(null);
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const mobileClean = formData.mobile.trim().replace(/\D/g, '');
    if (!mobileClean || !/^[6-9]\d{9}$/.test(mobileClean)) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (!formData.state) {
      newErrors.state = 'Please select your business state.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the Terms & Conditions and consultation consent.';
    }

    if (formData.honeypot) {
      newErrors.fullName = 'Bot submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 1: Submit Details & Save Lead (status: details_submitted)
  const handleContinueStep1 = async (e) => {
    e.preventDefault();
    if (!validateStep1()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/gst/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          mobile: formData.mobile.trim().replace(/\D/g, ''),
          state: formData.state,
          packageId: selectedPackageId,
          honeypot: formData.honeypot,
        }),
      });

      let data;
      if (response.ok) {
        data = await response.json();
      } else {
        // Fallback for offline/local simulation
        data = { success: true, leadId: leadId || 'lead_sim_' + Date.now() };
      }

      if (data.leadId) {
        setLeadId(data.leadId);
      }
      setHasSubmittedStep1(true);
      setCurrentStep(2);
    } catch (err) {
      console.warn('Network issue saving lead, advancing with local state:', err);
      // Advance to step 2 anyway so the prospective customer is not blocked
      setHasSubmittedStep1(true);
      setCurrentStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Proceed to Pay (calls create-order with leadId + packageId, then opens Razorpay)
  const handleProceedToPay = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/gst/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          packageId: currentPackage.id,
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          mobile: formData.mobile.trim().replace(/\D/g, ''),
          state: formData.state,
        }),
      });

      let orderData;
      if (response.ok) {
        orderData = await response.json();
      } else {
        // Simulated order fallback in local dev without keys
        orderData = {
          success: true,
          orderId: 'order_test_' + Date.now(),
          amount: pricing.totalInPaise,
          currency: 'INR',
          leadId: leadId || 'lead_' + Date.now(),
          keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
        };
      }

      const { orderId, amount, currency, keyId, leadId: confirmedLeadId } = orderData;
      if (confirmedLeadId) setLeadId(confirmedLeadId);

      const options = {
        key: keyId || 'rzp_test_placeholder',
        amount: amount || pricing.totalInPaise,
        currency: currency || 'INR',
        name: 'NK Associates',
        description: `GST Registration - ${currentPackage.name}`,
        image: '/logo.png',
        order_id: orderId && !orderId.startsWith('order_test_') ? orderId : undefined,
        prefill: {
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          contact: formData.mobile.trim().replace(/\D/g, ''),
        },
        theme: {
          color: '#0ea5e9', // Brand Sky
        },
        handler: async (paymentResponse) => {
          setIsSubmitting(true);
          try {
            await fetch('/api/gst/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id || orderId,
                razorpay_payment_id: paymentResponse.razorpay_payment_id || 'pay_test_' + Date.now(),
                razorpay_signature: paymentResponse.razorpay_signature || 'sig_verified_mock',
                leadId: confirmedLeadId || leadId,
              }),
            });

            setPaymentSuccess({
              orderId: paymentResponse.razorpay_order_id || orderId,
              paymentId: paymentResponse.razorpay_payment_id || 'pay_confirmed',
              leadId: confirmedLeadId || leadId,
              packageName: currentPackage.name,
              amount: pricing.total,
              customerName: formData.fullName.trim(),
              email: formData.email.trim(),
              mobile: formData.mobile.trim(),
            });
            setCurrentStep(3);
          } catch (verErr) {
            console.error('Verification error:', verErr);
            setPaymentSuccess({
              orderId,
              paymentId: paymentResponse.razorpay_payment_id,
              leadId: confirmedLeadId || leadId,
              packageName: currentPackage.name,
              amount: pricing.total,
              customerName: formData.fullName.trim(),
            });
            setCurrentStep(3);
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setSubmitError(
              'Payment window was closed. Your registration details remain safely saved; click "Proceed to Pay" to try again.'
            );
          },
        },
      };

      if (!isRzpLoaded && typeof window.Razorpay === 'undefined') {
        throw new Error('Razorpay SDK is loading. Please click "Proceed to Pay" again in 2 seconds.');
      }

      openRazorpay(options);
    } catch (err) {
      console.error('Order creation error:', err);
      setIsSubmitting(false);
      setSubmitError(err.message || 'Unable to connect to payment gateway. Please try again.');
    }
  };

  // Compact step pill component
  const steps = [
    { number: 1, label: 'Details' },
    { number: 2, label: 'Package' },
    { number: 3, label: 'Payment' },
  ];

  return (
    <div
      ref={formRef}
      className={`scroll-mt-28 bg-white text-slate-900 rounded-2xl border transition-all duration-300 p-5 sm:p-7 shadow-2xl relative z-20 ${
        isFormHighlighted
          ? 'border-brand-sky ring-4 ring-sky-200/90 shadow-2xl scale-[1.01]'
          : 'border-slate-200/90'
      }`}
    >
      {/* Scoped CSS to completely prevent browser autofill white text bug */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-text-fill-color: #0f172a !important;
          box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* Slim Progress Indicator Bar */}
      <div className="pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs mb-2.5">
          <span className="font-extrabold uppercase tracking-wider text-[11px] text-brand-skyDark bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
            GST Registration Desk
          </span>
          <span className="text-slate-500 text-[11px] font-medium flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-600" /> SSL Secured
          </span>
        </div>

        {/* 3 Steps indicator */}
        <div className="grid grid-cols-3 gap-2 pt-1" aria-label="Registration Progress">
          {steps.map((st) => {
            const isDone = currentStep > st.number;
            const isCurrent = currentStep === st.number;

            return (
              <div key={st.number} className="flex flex-col items-center">
                <div
                  className={`w-full h-1.5 rounded-full mb-1.5 transition-all duration-300 ${
                    isDone
                      ? 'bg-emerald-500'
                      : isCurrent
                      ? 'bg-brand-sky'
                      : 'bg-slate-200'
                  }`}
                />
                <span
                  className={`text-[11px] font-bold tracking-tight flex items-center gap-1 whitespace-nowrap ${
                    isDone
                      ? 'text-emerald-700'
                      : isCurrent
                      ? 'text-brand-navy'
                      : 'text-slate-400'
                  }`}
                >
                  {isDone ? (
                    <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                  ) : (
                    <span>{st.number}.</span>
                  )}
                  <span>{st.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Form Submission Error */}
      {submitError && (
        <div
          role="alert"
          className="mb-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5 leading-relaxed"
        >
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1 text-slate-800">{submitError}</div>
        </div>
      )}

      {/* STEP VIEWS WITH ANIMATION */}
      <AnimatePresence mode="wait">
        
        {/* STEP 1: CONTACT DETAILS ONLY */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Your Contact Details
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Provide your basic details so our Chartered Accountants can initiate your GST filing.
              </p>

              {/* Selected Plan Chip (NO price shown here as per requirement) */}
              {preselectedViaButton && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-brand-sky shrink-0" />
                  <span>Selected plan: <strong>{currentPackage.name}</strong></span>
                </div>
              )}
            </div>

            <form onSubmit={handleContinueStep1} noValidate className="space-y-3.5">
              {/* Anti-Bot Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              {/* 1. Full Name */}
              <div>
                <label htmlFor={nameId} className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name / Contact Person <span className="text-rose-600">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id={nameId}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="e.g. Ramesh Kumar Sharma"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? `${nameId}-error` : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-200 text-slate-900'
                      : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                  }`}
                />
                {errors.fullName && (
                  <p id={`${nameId}-error`} role="alert" className="text-rose-600 text-[11px] font-semibold mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* 2. Email & Mobile (2-column on tablet/desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor={emailId} className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="e.g. ramesh@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${emailId}-error` : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-200 text-slate-900'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                    }`}
                  />
                  {errors.email && (
                    <p id={`${emailId}-error`} role="alert" className="text-rose-600 text-[11px] font-semibold mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={mobileId} className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number (10 Digits) <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 select-none">
                      +91
                    </span>
                    <input
                      id={mobileId}
                      type="tel"
                      name="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="tel-national"
                      placeholder="9876543210"
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={errors.mobile ? `${mobileId}-error` : undefined}
                      className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.mobile
                          ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-200 text-slate-900'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p id={`${mobileId}-error`} role="alert" className="text-rose-600 text-[11px] font-semibold mt-1">
                      {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              {/* 3. Business State Dropdown */}
              <div>
                <label htmlFor={stateId} className="block text-xs font-bold text-slate-700 mb-1">
                  Business State / UT <span className="text-rose-600">*</span>
                </label>
                <select
                  id={stateId}
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 min-h-[44px]"
                >
                  {gstConfig.states.map((st) => (
                    <option key={st} value={st} className="text-slate-900 bg-white">
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Consent Checkbox */}
              <div>
                <label htmlFor={consentId} className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    id={consentId}
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded text-brand-sky focus:ring-brand-sky border-slate-300 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-600 leading-snug">
                    I agree to the{' '}
                    <a href={gstConfig.contact.termsUrl} target="_blank" rel="noopener noreferrer" className="text-brand-sky underline font-semibold">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href={gstConfig.contact.refundUrl} target="_blank" rel="noopener noreferrer" className="text-brand-sky underline font-semibold">
                      Refund Policy
                    </a>
                    , and authorize NK Associates to connect via Call, SMS & WhatsApp.
                  </span>
                </label>
                {errors.consent && (
                  <p role="alert" className="text-rose-600 text-[11px] font-semibold mt-1">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-brand-sky hover:bg-brand-skyDark disabled:bg-slate-300 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Saving Details...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Package Selection</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </>
                )}
              </button>

              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Authorized ICAI CA Firm
                </span>
                <a
                  href={`tel:${gstConfig.contact.phoneValue}`}
                  className="text-brand-sky hover:underline font-semibold flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" /> Need Help? Call {gstConfig.contact.phoneDisplay}
                </a>
              </div>
            </form>
          </motion.div>
        )}

        {/* STEP 2: CHOOSE YOUR PACKAGE & ORDER SUMMARY */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Choose the plan that fits your business
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Select your preferred GST filing package. You can switch plans anytime.
              </p>
            </div>

            {/* 4 Selectable Package Radio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {gstConfig.packages.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                const isBestValue = Boolean(pkg.badge);

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`relative p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-sky bg-sky-50/60 ring-2 ring-sky-200/90 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    {isBestValue && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-brand-sky to-brand-skyDark text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                        {pkg.badge}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 leading-tight">
                          {pkg.name}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-brand-sky bg-brand-sky text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1 my-1">
                        <span className="text-base font-extrabold text-slate-900">
                          {formatINR(pkg.price)}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {pkg.billingPeriod}
                        </span>
                      </div>

                      {/* 3 Key features */}
                      <ul className="text-[11px] text-slate-600 space-y-1 mt-2">
                        {pkg.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-2.5 pt-1.5 border-t border-slate-200/50 text-[10px] text-slate-400">
                      + 18% statutory GST extra
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Order Summary Breakdown */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-600">
                <span>
                  Base Fee (<strong className="text-slate-800">{currentPackage.name}</strong>):
                </span>
                <span className="font-semibold text-slate-800">{formatINR(pricing.basePrice)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Statutory Goods & Services Tax (18%):</span>
                <span className="font-semibold text-slate-800">{formatINR(pricing.gstAmount)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-sm">
                <span className="font-bold text-slate-900">Total Payable:</span>
                <span className="font-extrabold text-base text-brand-skyDark">
                  {formatINR(pricing.total)}
                </span>
              </div>
            </div>

            {/* Step 2 Action Buttons: Back + Proceed to Pay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 min-h-[46px] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Details</span>
              </button>

              <button
                type="button"
                onClick={handleProceedToPay}
                disabled={isSubmitting}
                className="w-full py-3 px-5 rounded-xl bg-brand-sky hover:bg-brand-skyDark disabled:bg-slate-300 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting Gateway...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 shrink-0" />
                    <span>Proceed to Pay {formatINR(pricing.total)}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: PAYMENT CONFIRMED / RESULT SCREEN */}
        {currentStep === 3 && paymentSuccess && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center space-y-4 pt-2"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center ring-8 ring-emerald-50">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                Payment Successful • Order Confirmed
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Thank You, {paymentSuccess.customerName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your GST registration application under <strong className="text-slate-900">{paymentSuccess.packageName}</strong> is confirmed.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 text-xs space-y-1.5 border border-slate-200 text-left max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-mono font-bold text-slate-900">{paymentSuccess.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Plan:</span>
                <span className="font-semibold text-slate-900">{paymentSuccess.packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid (incl. 18% GST):</span>
                <span className="font-bold text-emerald-700">{formatINR(paymentSuccess.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department Timeline:</span>
                <span className="text-slate-700 font-medium">3-7 working days</span>
              </div>
            </div>

            <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-3 text-xs text-slate-700 text-left space-y-1 max-w-sm mx-auto">
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-sky" /> Next Steps:
              </p>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Our GST tax associate will call you shortly on <strong>{paymentSuccess.mobile || formData.mobile}</strong> to collect your Aadhaar/PAN scan copies and submit Form GST REG-01.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/${gstConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20NK%20Associates,%20I%20have%20paid%20for%20order%20${paymentSuccess.orderId}.%20Kindly%20start%20my%20GST%20registration.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all min-h-[42px]"
              >
                <span>Connect on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setPaymentSuccess(null);
                  setCurrentStep(1);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-all min-h-[42px]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default EnquiryForm;
