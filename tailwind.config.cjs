const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Times New Roman", "serif"]
    },
    extend: {
      colors: {
        'white': '#F5F5F5',
        'white-gray': '#EDEDED',
        'list-module-gray': '#464646',
        'black': '#000000',
        'yellow': '#FFEB38',
        'purple': '#925FF0',
        'green-light': '#00D6AC',
        'pink': '#F956CE'
      },
      fontSize: {
        //title 20px;
        'title-1': '1.25rem',
        //title 18px;
        'title-2': '1.125rem',
        //'xl:': '1.25rem',
        '3xl': '1.953rem',
        //list 12px
        'list-content': '0.75rem',
        //list 10px
        'list-content-type': '0.625rem',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.btn--black': {
          backgroundColor: theme('colors.black'),
        },
      })
    })
  ],
}
