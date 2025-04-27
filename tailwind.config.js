/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173446',
          light: '#234660',
          dark: '#0c1a23',
        },
        accent: {
          DEFAULT: '#a9925a',
          light: '#bfaa75',
          dark: '#8c7845',
        }
      }
    },
  },
  plugins: [],
};