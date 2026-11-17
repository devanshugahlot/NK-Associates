import { useState, useEffect, useRef } from 'react';

const CASHFREE_SDK_URL = 'https://sdk.cashfree.com/js/v3/cashfree.js';

let scriptPromise = null;

function loadCashfreeScript() {
  if (typeof window === 'undefined') return Promise.resolve(false);
  if (window.Cashfree) return Promise.resolve(true);

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const existingScript = document.querySelector(`script[src="${CASHFREE_SDK_URL}"]`);
      if (existingScript) {
        if (window.Cashfree) {
          resolve(true);
        } else {
          existingScript.addEventListener('load', () => resolve(true));
          existingScript.addEventListener('error', () => resolve(false));
        }
        return;
      }

      const script = document.createElement('script');
      script.src = CASHFREE_SDK_URL;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => {
        console.error('Failed to load Cashfree JS SDK v3 script');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  return scriptPromise;
}

/**
 * Custom hook to safely load and interface with Cashfree Payments JS SDK v3 modal
 */
export function useCashfree() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const cashfreeRef = useRef(null);

  const mode = import.meta.env.VITE_CASHFREE_MODE || 'sandbox';

  useEffect(() => {
    let mounted = true;

    loadCashfreeScript().then((success) => {
      if (!mounted) return;
      if (success && window.Cashfree) {
        try {
          cashfreeRef.current = window.Cashfree({ mode });
          setIsLoaded(true);
        } catch (err) {
          console.error('Error initializing Cashfree SDK:', err);
          setError('Failed to initialize Cashfree SDK.');
        }
      } else {
        setError('Failed to load secure Cashfree payment gateway SDK.');
      }
    });

    return () => {
      mounted = false;
    };
  }, [mode]);

  /**
   * Open Cashfree modal checkout
   * @param {Object} options
   * @param {string} options.paymentSessionId
   * @returns {Promise<any>}
   */
  const checkout = async ({ paymentSessionId }) => {
    if (typeof window === 'undefined') {
      throw new Error('Cashfree is only available in browser environments.');
    }

    if (!window.Cashfree) {
      const loaded = await loadCashfreeScript();
      if (!loaded || !window.Cashfree) {
        throw new Error('Cashfree SDK is not yet available. Please check your network connection.');
      }
    }

    if (!cashfreeRef.current) {
      cashfreeRef.current = window.Cashfree({ mode });
    }

    return cashfreeRef.current.checkout({
      paymentSessionId,
      redirectTarget: '_modal',
    });
  };

  return {
    isLoaded,
    error,
    checkout,
  };
}
