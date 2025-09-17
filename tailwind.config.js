// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFCF9",
        foreground: "#2E2D2B",
        accent: "#E6CBA8",     // soft gold
        champagne: "#F7E7CE",  // champagne beige
        softgold: "#E6CBA8",   // same as accent
        highlight: "#FAF3E0",  // warm off-white
        blush: "#F5E4E2",      // soft pink
      },
    },
  },
  safelist: [
    "bg-gradient-to-r",
    "from-accent",
    "to-softgold",
    "from-champagne",
    "to-accent",
    "hover:from-softgold",
    "hover:to-champagne",
  ],
  plugins: [],
};
