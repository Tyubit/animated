/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // For App directory
    './pages/**/*.{js,ts,jsx,tsx}', // For pages directory (if used)
    './components/**/*.{js,ts,jsx,tsx}', // For components directory (if used)
  ],
  safelist: [
    'bg-[#87E246]',
    'bg-[#1B30AE]',
    'bg-[#ED732E]',
    'bg-[#2B2B2B]',
  ],
  theme: {
        extend: {
            fontFamily: { serif: ['Instrument Serif', 'serif'], },
    },
  },
  plugins: [],
};