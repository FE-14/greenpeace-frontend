/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/assets/js/**/*.js", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        "source-sans-pro": "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
