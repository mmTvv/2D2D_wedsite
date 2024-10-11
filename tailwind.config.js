/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Включаем поддержку темной темы
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#4800D4',
        secondary: '#F369BD',
      },
    },
  },
  plugins: [],
}
