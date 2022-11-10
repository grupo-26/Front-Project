const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Lora", "serif"]
    },
    fontSize: {
      //title 20px;
      'title-1': '1.25rem',
      //title 18px;
      'title-2': '1.125rem',
      'xl:': '1.25rem',
      '3xl': '1.953rem',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
      '.heading-primary': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
          fontSize: theme('text-3xl'),
          fontFamily: theme('font-serif'),
          letterSpacing: theme('tracking-wide')
        }
      })
    })
  ],
}
