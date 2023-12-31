/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/assets/components/PersonalInfo.jsx",
    "./src/assets/components/Steps.jsx",
    "./src/assets/components/SelectPlan.jsx",
  ],
  theme: {
    colors: {
      marineBlue: "hsl(213, 96%, 18%)",
      purplishBlue: "hsl(243, 100%, 62%)",
      lightBlue: "hsl(206, 94%, 87%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(231,100%,99%)",
      alabaster: "hsl(231,100%,99%)",
      white: "hsl(0,0%,100%)",
      black: "black",
    },
    fontFamily: {
      sans: "Ubuntu,sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
