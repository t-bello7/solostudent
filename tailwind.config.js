/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#B9E503',
        secondaryColor: '#00A902',
        blueVariantColor: '#017e9c',
        dangerColor: '#ce3130',
      },
      fontFamily: {
        solway: ['Solway', ...defaultTheme.fontFamily.sans],
        cantarell: ['Cantarell', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
