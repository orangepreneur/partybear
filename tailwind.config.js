module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
