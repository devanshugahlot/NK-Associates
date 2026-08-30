/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#e0f2fe',     // Very Light Blue (sky-100)
          extralight: '#f0f9ff', // Soft sky blue (sky-50)
          sky: '#0ea5e9',       // Sky Blue (sky-500)
          skyDark: '#0284c7',   // Professional sky blue (sky-600)
          navy: '#0f172a',      // Dark Navy (slate-900)
          navyLight: '#1e293b', // Light Navy (slate-800)
          charcoal: '#334155',  // Charcoal (slate-700)
          gray: '#64748b',      // Soft gray (slate-500)
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(2, 132, 199, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(2, 132, 199, 0.15)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
}
