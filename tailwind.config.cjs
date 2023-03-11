/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#161616",
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
