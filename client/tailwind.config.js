/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4ade80", // Light green
          DEFAULT: "#5a9078", // Green
          dark: "#50806B", // Dark green
        },
        secondary: {
          light: "#bef264", // Light lime
          DEFAULT: "#535354", // Lime
          dark: "#404041", // Dark lime
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}