/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4cd7f0',
        secondary: '#aeb9df'
      },
      fontFamily: {
        'roboto': [ 'Roboto', 'sans-serif'],
        'yellowtail': ['Yellowtail', 'cursive'],
        'mono': ['Roboto Mono', 'monospace']
      }
    }
  },
  plugins: [],
}
