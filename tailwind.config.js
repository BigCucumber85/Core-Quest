/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangered: "#ff6700",
      },
      spacing: {},
      fontFamily: {
        // array: "Array",
        inter: "Inter",
        "bebas-neue": "'Bebas Neue'",
        battambang: "Battambang",
      },
    },
  },
  plugins: [],
};
