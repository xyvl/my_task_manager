/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    colors:{
      'main-light': '#FFFFFF',
      'main-dark': "rgba(0,0,0)",
      'color-main-light': "#000",
      'color-secondary-light': "#757575",
      'color-main-dark': "#fff",
      'color-secondary-dark': "#e6e6e6",
      'color-active-all-light': '#A85CF9',
      'color-active-all-dark': '#5534A5',
    },
    
    extend: {
      gridTemplateColumns:{
        '18-60-22': '18fr 60fr 22fr'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
