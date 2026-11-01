import { useState, useEffect, useRef, useCallback } from 'react';

let scriptLoadingPromise = null;

function loadRazorpayScript() {
  if (typeof window === 'undefined') return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);

  if (!scriptLoadingPromise) {
    scriptLoadingPromise = new Promise((resolve) => {
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        if (window.Razorpay) {
          resolve(true);
        } else {
          existingScript.addEventListener('load', () => resolve(true));
          existingScript.addEventListener('error', () => resolve(false));
        }
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => {
        scriptLoadingPromise = null;
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  return scriptLoadingPromise;
}

/**
 * Custom hook to safely load and interface with Razorpay Checkout modal
 */
export function useRazorpay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    loadRazorpayScript().then((success) => {
      if (!isMounted) return;
      if (success) {
        setIsLoaded(true);
      } else {
        setError('Failed to load secure Razorpay payment gateway SDK.');
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const open = useCallback((options) => {
    if (typeof window === 'undefined' || !window.Razorpay) {
      throw new Error('Razorpay SDK is not yet available. Please check your network connection.');
    }

    try {
      const rzpInstance = new window.Razorpay(options);
      instanceRef.current = rzpInstance;
      rzpInstance.open();
      return rzpInstance;
    } catch (err) {
      console.error('Error opening Razorpay checkout:', err);
      throw err;
    }
  }, []);

  return { isLoaded, error, open };
}
