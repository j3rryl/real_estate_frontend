/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f9ff", // Lightest
          100: "#c2f0ff",
          200: "#80e2ff",
          300: "#33d3ff", // Lighter
          400: "#00c3ed", // Main color adjusted slightly
          500: "#00ACD5", // Base color
          600: "#0091b2", // Darker
          700: "#006f8a",
          800: "#004e62",
          900: "#002e3a", // Darkest
        },
        secondary: {
          50: "#fffbea", // Lightest
          100: "#fef3c4",
          200: "#fee89c",
          300: "#fedb74", // Lighter
          400: "#fecd4b",
          500: "#FEE139", // Base color
          600: "#e3c033", // Slightly darker
          700: "#b99a2a",
          800: "#8f7421",
          900: "#64501a", // Darkest
        },
      },
    },
  },
  plugins: [],
};
