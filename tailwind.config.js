/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      screens:{
        'mobile': '375px',
        'desktop': '1440px'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces','serif'],
      },
          colors  :{
        'cream' : '#F2EAE2'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}