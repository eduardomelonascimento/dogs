/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '280px',
      'tablet': '700px',
      'large-tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        first: 'Helvetica, Arial, sans-serif',
        second: 'Spectral, Georgia'
      },
      colors: {
        primary: "#fb1"
      },
      backgroundImage: {
        LoginDog: 'url(/src/assets/login.jpg)'
      }
    },
  },
  plugins: [],
}