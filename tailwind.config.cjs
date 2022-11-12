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
      },
      fontSize: {
        //title 20px;
        'title-1': '1.25rem',
        //title 18px;
        'title-2': '1.125rem',
        'xl:': '1.25rem',
        '3xl': '1.953rem',
      },
    },
  },
  plugins: [
  ],
}
