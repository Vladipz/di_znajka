/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F0",
        dark: "#C9AD32",
        dirty: "#EAE3B9",
        light: "#FEFDF5",
      },
      fontFamily: {
        sans: ['"TT Firs Neue"', "sans-serif"],
      },
    },
  },

  plugins: [],
};
