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
        ivory: '#F8F6F0',
        foreground: '#171717',
        accent: '#1B4D3E',
        champagne: '#F7E7CE',
        softgold: '#E6CBA8',
        blush: '#F5E4E2',
        jade: '#1B4D3E',
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Cormorant Garamond'", 'serif'],
        sans: ["var(--font-inter)", "'Lato'", 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: ["bg-ivory", "text-foreground", "text-accent"], // ensures Tailwind generates them
};
