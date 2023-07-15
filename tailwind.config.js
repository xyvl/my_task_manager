/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      "main": "var(--main)",
      "color-main": "var(--color-main)",
      "color-secondary": "var(--color-secondary)",
      "color-active-all": "var(--color-active-all)",
    },

    extend: {
      gridTemplateColumns: {
        "18-60-22": "18fr 60fr 22fr",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
