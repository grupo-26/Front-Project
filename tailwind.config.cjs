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
    },
  },
  plugins: [],
}
