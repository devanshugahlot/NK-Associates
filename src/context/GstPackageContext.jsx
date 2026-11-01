import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const GstPackageContext = createContext(null);

export const GstPackageProvider = ({ children }) => {
  // Current active step: 1 = Details, 2 = Package, 3 = Payment/Confirmation
  const [currentStep, setCurrentStep] = useState(1);
  const [hasSubmittedStep1, setHasSubmittedStep1] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('smart-plan');
  const [leadId, setLeadId] = useState(null);
  const [preselectedViaButton, setPreselectedViaButton] = useState(false);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);

  const formRef = useRef(null);
  const firstFieldRef = useRef(null);
  const highlightTimeoutRef = useRef(null);

  /**
   * Action triggered when user clicks "Select Plan" anywhere on the page
   */
  const selectPackage = useCallback((packageId) => {
    if (packageId) {
      setSelectedPackageId(packageId);
      setPreselectedViaButton(true);
    }

    // If user already completed Step 1 (their contact details), jump straight to Step 2
    if (hasSubmittedStep1) {
      setCurrentStep(2);
    }

    if (formRef.current) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      formRef.current.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      setIsFormHighlighted(true);
      highlightTimeoutRef.current = setTimeout(() => {
        setIsFormHighlighted(false);
      }, 1200);

      setTimeout(() => {
        if (firstFieldRef.current) {
          firstFieldRef.current.focus({ preventScroll: true });
        }
      }, prefersReducedMotion ? 50 : 450);
    }
  }, [hasSubmittedStep1]);

  return (
    <GstPackageContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        hasSubmittedStep1,
        setHasSubmittedStep1,
        selectedPackageId,
        setSelectedPackageId,
        leadId,
        setLeadId,
        preselectedViaButton,
        setPreselectedViaButton,
        selectPackage,
        formRef,
        firstFieldRef,
        isFormHighlighted,
      }}
    >
      {children}
    </GstPackageContext.Provider>
  );
};

export const useGstPackage = () => {
  const context = useContext(GstPackageContext);
  if (!context) {
    throw new Error('useGstPackage must be used within a GstPackageProvider');
  }
  return context;
};
