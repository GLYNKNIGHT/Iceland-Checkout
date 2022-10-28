/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      backgroundImage: {
        'paypal-icon': "url('./assets/paypal-icon.png')",
        'mastercard-icon': "url('./assets/mastercard-icon.png')"
      }
    },
  },
  plugins: [],
}