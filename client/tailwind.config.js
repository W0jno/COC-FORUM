/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "card-shadow": "0 2px 8px rgba(0, 0, 0, 0.26)",
      },
    },
    fontFamily: { sans: "Fredoka One" },
    colors: {
      backgroundGradient1: "#E7B505",
      backgroundGradient2: "#FC9330",
      formBackgroundGradient1: "#FF824F",
      formBackgroundGradient2: "#FFE248",
      btncolor: "#fdfdfd",
      btncolorHover: "#fffaaa",
      inputColorHover: "#fffccc",
      slate: colors.slate,
    },
    borderRadius: {
      large: "40px",
      lg: "0.5rem",
    },

    screens: {
      xsm: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
