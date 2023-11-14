/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'title-black': '#121212',
        'grey': '#bbbbbb',
        'custom-blue': '#0080ff',
        'custom-blue-dark': '#005fbc',
        'border-grey': '#eeeeee',
        'border-grey-dark': '#cccccc',
        'text-grey': '#aaaaaa'
      },
      fontFamily: {
        'roboto': 'Roboto',
        'icons': 'icons'
      }
    },
  },
  plugins: [],
}

