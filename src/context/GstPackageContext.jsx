import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const GstPackageContext = createContext(null);

export const GstPackageProvider = ({ children }) => {
  // Default to the flagship 'smart-plan' or 'registration-plan'
  const [selectedPackageId, setSelectedPackageId] = useState('smart-plan');
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);

  const formRef = useRef(null);
  const firstFieldRef = useRef(null);
  const highlightTimeoutRef = useRef(null);

  /**
   * Select a package and smoothly transition the user directly to the enquiry & payment form
   */
  const selectPackage = useCallback((packageId) => {
    if (packageId) {
      setSelectedPackageId(packageId);
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

      // Apply temporary visual highlight (ring / glow animation ~1.2s)
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      setIsFormHighlighted(true);
      highlightTimeoutRef.current = setTimeout(() => {
        setIsFormHighlighted(false);
      }, 1200);

      // Focus on first input for instant keyboard/accessibility readiness
      setTimeout(() => {
        if (firstFieldRef.current) {
          firstFieldRef.current.focus({ preventScroll: true });
        }
      }, prefersReducedMotion ? 50 : 450);
    }
  }, []);

  return (
    <GstPackageContext.Provider
      value={{
        selectedPackageId,
        setSelectedPackageId,
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
