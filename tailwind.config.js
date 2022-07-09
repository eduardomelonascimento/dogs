/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '280px',
      'tablet': '640px',
      'large-tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        sans: 'Arial, sans-serif'
      }
    },
  },
  plugins: [],
}