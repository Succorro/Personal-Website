/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        k2d: ["K2D"],
      },
    },
    extend: {
      colors: {
        blue: "#083248",
        cornflowerblue: "#6495ed",
        background: "#cfcece",
        purple: "#5c6bc0",
        green: "#88EBAC",
        orange: "#F4930E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
