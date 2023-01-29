/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '18px',
    },
    extend: {
      colors: {
        primary: '#32bcad',
        second: '#ec00b1',
        dark: '#1b182e',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lobster: ['Lobster Two', 'sans-serif'],
    },
  },
  plugins: [],
};
