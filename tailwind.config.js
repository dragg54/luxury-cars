/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'san': ['Black Han Sans'],
      },
      backgroundImage:{
        'car': "url('/public/assets/aaron.png')"
      }
    },
  },
  plugins: [],
};
