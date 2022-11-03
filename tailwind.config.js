/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
      colors: {
        transparent: "#00000000",
        black: {
          main: "#2D2727",
          secondary: "#393333",
        },
        purple: {
          main: "#7700B5",
        },
      },
    },
  },
  plugins: [],
};
