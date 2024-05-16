/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "theme-red": "#e50914",
        "theme-gray": "#232323",
        "theme-gray-light": "#414141",
        "gray-text": "#B3B3B3",
      },
      fontFamily: {
        "netflix-bold": [
          "netflix-sans-bold",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      screens: {
        "md-1": "960px",
        "lg-1": "1280px",
      },
    },
  },
  plugins: [],
};
