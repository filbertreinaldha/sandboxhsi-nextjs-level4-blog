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
      fontFamily: {
        opensans: ["var(--font-opensans)"],
      },
      colors: {
        bggray: "#F9F9FB",
        lightgray: "#9B9B9B",
        gray: "#4A4A4A",
        watermelon: { DEFAULT: "#FF5480", dark: "#F05074" },
        cabin: "#111210",
      },
    },
  },
  plugins: [],
};

