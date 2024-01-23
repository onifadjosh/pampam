/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Mont':[' "Montserrat" ', "sans-serif"],
        'Noto':[' "Noto Sans JP" ', "sans-serif"]
      }
    },

  },
  plugins: [],
}