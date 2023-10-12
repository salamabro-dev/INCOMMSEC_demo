/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
        secondary: {
          "dark-blue": "#08033e",
          "light-blue": "#1a21ff",
          "light-purple": "#313c9a",
        },
      },
    },
  },
  plugins: [],
};
