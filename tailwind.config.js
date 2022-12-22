/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens:{
        'lg': '900px',
        'xs': '400px'
      },
      backgroundColor:{
        'bg-main-dark': '#202124'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}