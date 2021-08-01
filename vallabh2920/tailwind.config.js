const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}","./components/**/*.{js,jsx}","./Layout/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      "first":"#D8E3E7",
      "second":"#52C4D3",
      "third":"#136F82",
      "fourth":"#142D34",
      "fifth":"#B7DFE7",
      "white":"#ffffff"
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
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

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
    
      width: {
        img: "320px",
        photo:"480px",
        card: "710px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar') 

  ],
}
