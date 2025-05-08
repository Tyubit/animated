/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // For App directory
    './pages/**/*.{js,ts,jsx,tsx}', // For pages directory (if used)
    './components/**/*.{js,ts,jsx,tsx}', // For components directory (if used)
  ],
  theme: {
        extend: {
            fontFamily: { serif: ['Instrument Serif', 'serif'], },
    },
  },
  plugins: [],
};