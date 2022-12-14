/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },

    extend: {
      colors: {
        white: "#FAF8FF",
        "black-gp": {
          50: "#2d3a3a",
          100: "#252e2e",
          200: "#040f0f",
          "secondary-black-100": "#2d3a3a",
        },
        "green-gp": {
          50: "#eff5f1",
          100: "#d4f0e7",
          200: "#9fe9c8",
          300: "#61d096",
          400: "#2ba84a",
          500: "#17993c",
          600: "#15852b",
          700: "#146725",
          800: "#10461e",
          900: "#0b2b19",
        },
        "submarine-gp": {
          50: "#f1f6f6",
          100: "#d4f0f4",
          200: "#a2e6e6",
          300: "#68cac8",
          400: "#2caba1",
          500: "#18716f",
          600: "#18716f",
          700: "#195a4b",
          800: "#133d38",
          900: "#0d2528",
        },
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        "source-sans-pro": "'Source Sans Pro', sans-serif",
      },
      boxShadow: {
        "shadow-card-with-illustration": "0px 4px 20px 0px rgba(0,0,0,0.25)",
        "shadow-card-2": "0px 4px 20px 0px rgba(0,0,0,0.05)",
      },
      backgroundImage: {
        "homepage-hero": "url('/src/assets/images/homepage-hero.webp')",
        "green-full-artboard":
          "url(/src/assets/images/green-full-artboard.webp)",
      },
    },
  },

  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
