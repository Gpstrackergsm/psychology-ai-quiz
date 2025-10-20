/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ad9f',
          light: '#38f3d0',
          dark: '#008675'
        },
        accent: {
          DEFAULT: '#4338ca',
          light: '#6366f1',
          dark: '#312e81'
        },
        midnight: '#0b1120',
        mist: '#0f172a'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
};
