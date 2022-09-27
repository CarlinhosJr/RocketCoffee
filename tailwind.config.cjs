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
      
      dropShadow:{
        greatcoffee: ['1px 1px 0 #8257E5', 
          '-1px 1px 0 #8257E5', '1px -1px 0 #8257E5','1px 1px 0 #8257E5'
          ]
        },

      backgroundImage:{
        blur: "url('/blur-mobile.png')",
      },
    },
  },
  plugins: [],
}
