/**
 * Server-Side Package Configuration (Source of Truth)
 * Security rule: Client-submitted amounts are NEVER trusted.
 */

export const SERVER_PACKAGES = {
  'gst-complete': {
    id: 'gst-complete',
    name: 'GST Complete Plan',
    basePrice: 599,
  },
  'registration-plan': {
    id: 'registration-plan',
    name: 'Registration Plan',
    basePrice: 799,
  },
  'business-growth': {
    id: 'business-growth',
    name: 'Business Compliance & Growth',
    basePrice: 2399,
  },
  'smart-plan': {
    id: 'smart-plan',
    name: 'Smart Plan',
    basePrice: 7599,
  },
};

export const GST_RATE = 0.18; // 18%

/**
 * Compute total amount in rupees and paise with 18% GST
 * @param {string} packageId
 * @returns {object} price computation
 */
export function calculateServerOrder(packageId) {
  const pkg = SERVER_PACKAGES[packageId];
  if (!pkg) {
    throw new Error(`Invalid package selected: ${packageId}`);
  }

  const basePrice = pkg.basePrice;
  const gstAmount = Math.round(basePrice * GST_RATE);
  const total = basePrice + gstAmount;
  const totalInPaise = total * 100;

  return {
    packageId: pkg.id,
    packageName: pkg.name,
    basePrice,
    gstRate: GST_RATE,
    gstAmount,
    total,
    totalInPaise,
  };
}
