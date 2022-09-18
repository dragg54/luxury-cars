/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        san: ["Black Han Sans"],
        georgia: ["Noto Serif Georgian"],
      },
      backgroundImage: {
        car: "url('/public/assets/aaron.png')",
      },
    },
  },
  plugins: [],
};
