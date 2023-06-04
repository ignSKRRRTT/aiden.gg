/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "kanit" : ["Kanit", "sans-serif"],
    },
    keyframes: {
      fadeIn: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      "fade-in-left": {
        "0%": {
          opacity: "0",
          transform: "translateX(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-in-top": {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-bottom": {
        "0%": {
          opacity: "0",
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-out",
      "fade-in-left": "fade-in-left 1.5s cubic-bezier(.39,.21,.12,.96)",
      "fade-in-top": "fade-in-top 0.5s cubic-bezier(.39,.21,.12,.96)",
      "fade-in-bottom": "fade-in-bottom 0.5s cubic-bezier(.39,.21,.12,.96)",
    },
  },
  plugins: [],
};
