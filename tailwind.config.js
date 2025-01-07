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
      backgroundImage: {
        "home-mobile":
          "url('/src/assets/images/home/background-home-mobile.jpg')",
        "home-tablet":
          "url('/src/assets/images/home/background-home-tablet.jpg')",
        "home-desktop":
          "url('/src/assets/images/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/src/assets/images/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/src/assets/images/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/src/assets/images/destination/background-destination-desktop.jpg')",
        "crew-mobile":
          "url('/src/assets/images/crew/background-crew-mobile.jpg')",
        "crew-tablet":
          "url('/src/assets/images/crew/background-crew-tablet.jpg')",
        "crew-desktop":
          "url('/src/assets/images/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/src/assets/images/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/src/assets/images/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/src/assets/images/technology/background-technology-desktop.jpg')",
      },
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
