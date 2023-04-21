/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},

    fontFamily: {
      'pfd': ['Playfair Display', 'serif'],
      'karla': ['Karla', 'sans']
    },

    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'gray-dark': '#0F0F0F',
      'gray-background': '#343536',
      'gray-light': '#5D5E5F',
      'akai-red': '#FA5C5C',
      'akai-red-medium': '#AD4040',
      'akai-red-dark': '#6E2929'
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
