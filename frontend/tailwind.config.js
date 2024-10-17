/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2081C3',
        'secondary' : '#06070E',
        'bg' : '#F3F3F3',
        'Favorite' : '#FE5F55',
      },
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

