/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    extend: {

      backgroundImage:{
        blur: "url('/blur-mobile.png')",
      },
    },
  },
  plugins: [],
}
