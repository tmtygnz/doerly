/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Cabinet Grotesk"], serif: ["Zodiak"] },
      colors: {
        emdark: {
          acc: "#262626",
          hvr: "#2A2A2A",
          brdr: "#808080",
        },
      },
    },
  },
  plugins: [],
};
