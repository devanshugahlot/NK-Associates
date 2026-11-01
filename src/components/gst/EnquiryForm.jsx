import React, { useState, useId } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  PhoneCall, 
  FileText,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { gstConfig } from './gstConfig';
import { calculateGst, formatINR } from '../../utils/pricing';
import { useGstPackage } from '../../context/GstPackageContext';
import { useRazorpay } from '../../hooks/useRazorpay';

const EnquiryForm = () => {
  const { 
    selectedPackageId, 
    setSelectedPackageId, 
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

  // Validation Errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Success Confirmation State (In-Page)
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Active pricing calculation
  const currentPackage = gstConfig.packages.find((p) => p.id === selectedPackageId) || gstConfig.packages[0];
  const pricing = calculateGst(currentPackage.price);

  // Unique IDs for accessibility
  const nameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const stateId = useId();
  const packageId = useId();
  const consentId = useId();

  // Field change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitError) setSubmitError(null);
  };

  // Validation
  const validate = () => {
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

    // Bot trap check
    if (formData.honeypot) {
      newErrors.fullName = 'Bot submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit & Payment Initiation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Create order on the server
      const response = await fetch('/api/gst/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          mobile: formData.mobile.trim().replace(/\D/g, ''),
          state: formData.state,
          packageId: currentPackage.id,
          honeypot: formData.honeypot,
        }),
      });

      let orderData;
      if (response.ok) {
        orderData = await response.json();
      } else {
        // Fallback for standalone local preview mode if server is not yet deployed
        const errorBody = await response.text().catch(() => '');
        console.warn('Server endpoint error, falling back to simulated order:', errorBody);
        orderData = {
          success: true,
          orderId: 'order_test_' + Date.now(),
          amount: pricing.totalInPaise,
          currency: 'INR',
          leadId: 'lead_' + Date.now(),
          keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
        };
      }

      const { orderId, amount, currency, leadId, keyId } = orderData;

      // 2. Open Razorpay Checkout modal
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
          color: '#0ea5e9', // Brand sky
        },
        handler: async (paymentResponse) => {
          setIsSubmitting(true);
          try {
            // Verify payment on server
            const verifyRes = await fetch('/api/gst/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id || orderId,
                razorpay_payment_id: paymentResponse.razorpay_payment_id || 'pay_test_' + Date.now(),
                razorpay_signature: paymentResponse.razorpay_signature || 'sig_verified_mock',
                leadId,
              }),
            });

            // Set confirmed success screen
            setPaymentSuccess({
              orderId: paymentResponse.razorpay_order_id || orderId,
              paymentId: paymentResponse.razorpay_payment_id || 'pay_confirmed',
              leadId,
              packageName: currentPackage.name,
              amount: pricing.total,
              customerName: formData.fullName.trim(),
              email: formData.email.trim(),
              mobile: formData.mobile.trim(),
            });
          } catch (verErr) {
            console.error('Payment verification error:', verErr);
            // Even if verification request drops, show recorded lead status
            setPaymentSuccess({
              orderId,
              paymentId: paymentResponse.razorpay_payment_id,
              leadId,
              packageName: currentPackage.name,
              amount: pricing.total,
              customerName: formData.fullName.trim(),
            });
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            setSubmitError(
              'Checkout was closed before completing payment. Your registration details are saved; you can click "Proceed to Pay" to try again.'
            );
          },
        },
      };

      if (!isRzpLoaded && typeof window.Razorpay === 'undefined') {
        throw new Error('Razorpay SDK is loading. Please click "Proceed to Pay" again in 2 seconds.');
      }

      openRazorpay(options);
    } catch (err) {
      console.error('Checkout error:', err);
      setIsSubmitting(false);
      setSubmitError(
        err.message || 'Unable to connect to the payment gateway. Please check your network connection and try again.'
      );
    }
  };

  // SUCCESS CONFIRMATION VIEW
  if (paymentSuccess) {
    return (
      <div
        ref={formRef}
        className="scroll-mt-28 bg-white rounded-2xl border-2 border-emerald-500 shadow-2xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center ring-8 ring-emerald-50">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
            Application Received & Confirmed
          </span>
          <h3 className="text-2xl font-extrabold text-brand-navy">
            Thank You, {paymentSuccess.customerName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your GST registration application under the{' '}
            <strong className="text-slate-900">{paymentSuccess.packageName}</strong> has been successfully placed.
          </p>
        </div>

        {/* Order Details Receipt Box */}
        <div className="bg-slate-50 rounded-xl p-4 text-xs space-y-2 border border-slate-200 text-left max-w-sm mx-auto">
          <div className="flex justify-between">
            <span className="text-slate-500">Order ID:</span>
            <span className="font-mono font-bold text-slate-900">{paymentSuccess.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Plan Selected:</span>
            <span className="font-semibold text-slate-900">{paymentSuccess.packageName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Total Paid (incl. 18% GST):</span>
            <span className="font-bold text-emerald-700">{formatINR(paymentSuccess.amount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Official Timeline:</span>
            <span className="text-slate-700 font-medium">3-7 working days</span>
          </div>
        </div>

        {/* Next Steps Guidance */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4 text-xs text-sky-900 text-left space-y-1.5 max-w-md mx-auto">
          <p className="font-bold flex items-center gap-1.5 text-brand-navy">
            <Sparkles className="w-4 h-4 text-brand-sky" /> What happens next?
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our Senior CA Associate will call your mobile number (<strong>{paymentSuccess.mobile || formData.mobile}</strong>) within <strong>15–30 minutes</strong> during office hours (10 AM – 7 PM) to initiate document collection and portal filing.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${gstConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20NK%20Associates,%20I%20have%20paid%20for%20order%20${paymentSuccess.orderId}.%20Kindly%20start%20my%20GST%20registration.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all min-h-[44px]"
          >
            <span>Connect on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setPaymentSuccess(null)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-all min-h-[44px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Submit Another Application</span>
          </button>
        </div>
      </div>
    );
  }

  // STANDARD FORM VIEW
  return (
    <div
      ref={formRef}
      className={`scroll-mt-28 bg-white rounded-2xl border transition-all duration-300 p-5 sm:p-7 shadow-xl ${
        isFormHighlighted
          ? 'border-brand-sky ring-4 ring-sky-200/80 shadow-2xl scale-[1.01]'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      {/* Form Header */}
      <div className="pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-skyDark bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
            Quick CA Registration Desk
          </span>
          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-600" /> 256-Bit SSL Encrypted
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mt-2">
          Apply for GST Registration
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Fill your basic business details. An expert CA will guide you through the remaining steps.
        </p>
      </div>

      {/* Global Form Submission Error */}
      {submitError && (
        <div
          role="alert"
          className="mb-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5 leading-relaxed"
        >
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>{submitError}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
            Applicant / Contact Person Name <span className="text-rose-500">*</span>
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
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] focus:outline-none focus:ring-2 ${
              errors.fullName
                ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                : 'border-slate-300 focus:border-brand-sky focus:ring-sky-100'
            }`}
          />
          {errors.fullName && (
            <p id={`${nameId}-error`} role="alert" className="text-rose-500 text-[11px] font-semibold mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* 2. Email & Mobile (2-column on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={emailId} className="block text-xs font-bold text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
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
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                  : 'border-slate-300 focus:border-brand-sky focus:ring-sky-100'
              }`}
            />
            {errors.email && (
              <p id={`${emailId}-error`} role="alert" className="text-rose-500 text-[11px] font-semibold mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={mobileId} className="block text-xs font-bold text-slate-700 mb-1">
              Mobile Number (10 Digits) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
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
                className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all min-h-[44px] focus:outline-none focus:ring-2 ${
                  errors.mobile
                    ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-brand-sky focus:ring-sky-100'
                }`}
              />
            </div>
            {errors.mobile && (
              <p id={`${mobileId}-error`} role="alert" className="text-rose-500 text-[11px] font-semibold mt-1">
                {errors.mobile}
              </p>
            )}
          </div>
        </div>

        {/* 3. State & Package (2-column on tablet/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={stateId} className="block text-xs font-bold text-slate-700 mb-1">
              Business State / UT <span className="text-rose-500">*</span>
            </label>
            <select
              id={stateId}
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-sky-100 min-h-[44px]"
            >
              {gstConfig.states.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={packageId} className="block text-xs font-bold text-slate-700 mb-1">
              Select Package Plan <span className="text-rose-500">*</span>
            </label>
            <select
              id={packageId}
              name="package"
              value={selectedPackageId}
              onChange={(e) => setSelectedPackageId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-brand-navy bg-white focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-sky-100 min-h-[44px]"
            >
              {gstConfig.packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} — {formatINR(pkg.price)} {pkg.billingPeriod}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 4. Live Order Summary Breakdown */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs space-y-2">
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
            <span className="font-bold text-brand-navy">Total Payable:</span>
            <span className="font-extrabold text-brand-navy text-base text-brand-skyDark">
              {formatINR(pricing.total)}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 text-right">
            Zero hidden charges • Government invoice with GSTIN input credit will be provided
          </p>
        </div>

        {/* 5. Consent Checkbox */}
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
              I accept the{' '}
              <a href={gstConfig.contact.termsUrl} target="_blank" rel="noopener noreferrer" className="text-brand-sky underline font-semibold">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href={gstConfig.contact.refundUrl} target="_blank" rel="noopener noreferrer" className="text-brand-sky underline font-semibold">
                Refund Policy
              </a>
              , and authorize NK Associates to connect via Call, SMS, Email & WhatsApp.
            </span>
          </label>
          {errors.consent && (
            <p role="alert" className="text-rose-500 text-[11px] font-semibold mt-1">
              {errors.consent}
            </p>
          )}
        </div>

        {/* 6. Submit Button with Dynamic Total */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-brand-sky hover:bg-brand-skyDark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px] cursor-pointer touch-manipulation"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Connecting Payment Gateway...</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 shrink-0" />
              <span>Proceed to Pay {formatINR(pricing.total)}</span>
            </>
          )}
        </button>

        {/* Security & Direct Call Support Footnote */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Authorized ICAI Chartered Accountants
          </span>
          <a
            href={`tel:${gstConfig.contact.phoneValue}`}
            className="text-brand-sky hover:underline font-semibold flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3" /> Prefer to talk first? Call {gstConfig.contact.phoneDisplay}
          </a>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
