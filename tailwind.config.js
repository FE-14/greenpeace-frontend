/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/assets/js/*.{js}", "./**/*.{html}"],
  theme: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
