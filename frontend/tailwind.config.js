/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#5b21b6'
        },
        accent: {
          DEFAULT: '#ec4899',
          light: '#f9a8d4',
          dark: '#db2777'
        },
        soft: '#f5f3ff'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
};
