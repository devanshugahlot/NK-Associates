/**
 * Shared GST & Pricing Calculation Utility
 * Used across frontend components and backend order creation
 */

export const GST_RATE = 0.18; // 18% statutory Goods & Services Tax

/**
 * Calculates base price, 18% GST amount, and total payable in rupees and paise
 * @param {number|string} basePrice 
 * @returns {object} calculation breakdown
 */
export function calculateGst(basePrice) {
  const base = Math.max(0, Math.round(Number(basePrice) || 0));
  const gstAmount = Math.round(base * GST_RATE);
  const total = base + gstAmount;
  const totalInPaise = total * 100;

  return {
    basePrice: base,
    gstRate: GST_RATE,
    gstPercent: 18,
    gstAmount,
    total,
    totalInPaise,
  };
}

/**
 * Format currency amount into Indian Rupee representation (₹)
 * @param {number} amount 
 * @returns {string} e.g. ₹599
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
