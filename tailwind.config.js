/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   "font-sans": ["var(--font-inter)"],
      // },
      colors: {
        primary: "#1D0AFF",
        secondary: "#9F01FF",
        dark: "#080016",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
