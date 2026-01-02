/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          black: '#121212',
          darkGray: '#191414',
          gray: '#282828',
          green: '#1DB954',
          lightGray: '#B3B3B3',
        },
        lilac: {
          light: '#B794F6',
          DEFAULT: '#9D7FEA',
          dark: '#7C5BC4',
        },
      },
    },
  },
  plugins: [],
}