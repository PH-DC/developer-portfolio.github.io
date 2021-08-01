const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      first: "#F9F7F7",
      second: "#DBE2EF",
      third: "#4072AF",
      fourth: "#122E4F",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "420px" },
      // => @media (max-width: 639px) { ... }
      um: { max: "320px" },
    },

    extend: {
      inset: {
        laptop: "28.5%",
        tab: "24%",
        small: "22%",
      },
      width: {
        img: "320px",
        contact: "420px",
        exp: "830px",
        "small-img": "270px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
