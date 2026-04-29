/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["var(--font-open-sans)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        teko: ["var(--font-teko)", "sans-serif"],
      },
    },
  },
};
