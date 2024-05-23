/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-100vh-minus-100px': 'calc(100vh - 100px)',
      },
      backgroundImage: {
        'mountains': "url('./public/mountains.png')",
        'planets': "url('./public/planets.png')",
        'stars': "url('./public/stars.png')",
      },
    },
  },
  variants: {},
  plugins: [],
}

