/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F0",
        dark: {
          DEFAULT: "#C9AD32", // Основний колір
          500: "#A79542", // Відтінок для dark-500
        },
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
