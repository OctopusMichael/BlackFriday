/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayLight: "#EDEDF2",
        violeta: "#9123ff",
        greenF: "#8FFF5B",
        greenS: "#5E9D40"
      }
    },
  },
  plugins: [],
}

