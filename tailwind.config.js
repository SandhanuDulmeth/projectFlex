/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          800: '#800080', // Custom purple color
        }
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};