/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {},
      colors: {
        primary: {
          "blue-p": "#00008A",
          "white-p": "#F5F5F5",
          "grey-p": "#343434",
          "blue-p2": "#070731",
          "grey-neutral": "#606060",
          "dark-p": "#1d1d1d",
          "grey-neutral-p2": "#B6B6B6",
          "white-p2": "#ffffff",
          "grey-neutral-p3": "#55575D",
          "white-p3": "#FEFEFE",
        },
        secondary: {
          "dark-blue": "#08033e",
          "light-blue": "#1a21ff",
          "light-purple": "#313c9a",
          "light-grey": "#DBDBDB",
        },
      },
    },
  },
  plugins: [],
};
