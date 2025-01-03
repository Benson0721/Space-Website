/** @type {import('tailwindcss').Config} */
export default {
  // These paths are just examples, customize them to match your project structure
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss}",
    "./src/scss/index.scss",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair"],
        barlow_C: ["Barlow Condensed"],
        barlow: ["Barlow"],
      },
      colors: {
        "Blue-900": "#0B0D17",
        "Blue-300": "#D0D6F9",
        "light-white": "#ffffff40",
        "medium-white": "#ffffff80",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },

  plugins: [],
};
