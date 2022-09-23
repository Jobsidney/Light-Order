/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
],
  theme: {
    extend: {},
    screens: {
      'xsm':'300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md':'768px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
