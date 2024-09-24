/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        hero: "auto 1fr",
      },

      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "gray-dark": "#0F0F0F",
        "gray-background": "#343536",
        "gray-navbar": "#3c3e3f",
        "gray-light": "#5D5E5F",
        akai: {
          100: "#F0CCCC",
          200: "#E7ABAB",
          300: "#DE8B8B",
          400: "#D46A6A",
          500: "#CB4949",
          600: "#A63C3C",
          700: "#822F2F",
          800: "#5D2222",
          900: "#391414",
          950: "#140707",
        },
      },

      fontFamily: {
        eiko: ["var(--font-eiko)"],
        karla: ["var(--font-karla)"],
      },

      screens: {
        xs: "350px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
