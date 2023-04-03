/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'jsconf-yellow': '#F0E040',
        'jsconf-black': '#1E2019',
        'jsconf-red': '#F45B69'
      },
      fontFamily: {
        koulen: ["Koulen"],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

