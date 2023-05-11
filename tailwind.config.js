import { createThemes } from "tw-colors";
import { themes } from "./src/lib/themes.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes(themes),
  ],
};
