/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Pretendard Variable'",
          "Pretendard",
          ...defaultTheme.fontFamily.sans,
        ],
        profile: ["'Galmuri11'", "'Galmuri9'", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
