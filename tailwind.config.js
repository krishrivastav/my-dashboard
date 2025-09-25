/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // only include plugins you installed
    require('tailwind-animatecss'), // if using Tailwind 3 + tw-animate-css
    // or require('tailwind-animate') if using Tailwind 4
  ],
};