/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
