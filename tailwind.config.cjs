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
      },
      textColor: {
        black_blue: "#0D114F"
      },
      borderWidth: {
        1: '1px',
      }
    },
  },
  plugins: [],
}
