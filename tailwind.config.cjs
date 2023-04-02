/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        dark: "#161616",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "sans-serif"],
      },
      fontSize: {
        mini: "15px",
      },
    },
  },
  plugins: [],
};
