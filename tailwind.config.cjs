/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.tsx',
  './index.html'
],
  theme: {
    extend: {
      colors: {
        background: "#FBFCFF",
        Light_blue: "#E0ECFF",
        grey: "#4D5E77",
      },
      textColor: {
        black_blue: "#0D114F"
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        default: "1160px",
      }
    },
  },
  plugins: [],
}
