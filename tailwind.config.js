/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    animation : {
      'spin-slow-30': 'spin 30s linear infinite',
      'spin-slow-25': 'spin 25s linear infinite',
      'spin-slow-10': 'spin 10s linear infinite',
      'spin-slow-1': 'spin 1s linear infinite',
      'marquee-infinite' : 'marquee 25s linear infinite',
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}