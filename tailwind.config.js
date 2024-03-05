/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(24,24,27)',
        deepBlack: 'rgb(9,9,11)',
        white: 'rgb(212,212,216)',
        trueWhite: 'rgb(255,255,255)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}