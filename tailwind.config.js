import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light",
      "dark",
      "valentine",
      "synthwave",
      "retro",
      "cyberpunk",
      "forest",
      "aqua",
      "black",
      "coffee",
      "dim",
      "lemonade"
    ],
  },
}