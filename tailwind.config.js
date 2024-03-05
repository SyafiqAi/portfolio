/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(24,24,27)',
        white: 'rgb(212,212,216)',
      }
    },
  },
  plugins: [],
}