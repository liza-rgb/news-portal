/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        transparent: "#00000000",
        black: {
          main: "#2D2727",
          secondary: "#393333",
          background: "#F8F8F8",
          regular: "#000000",
        },
        purple: {
          main: "#7700B5",
        },
        green: {
          dark: "#218A61",
          light: "#48DA86",
        },
      },
      fontSize: {
        sm: ["12px", "15px"],
        md: ["16px", "20px"],
        lg: ["20px", "24px"],
        xl: ["32px", "36px"],
        "2xl": ["80px", "85px"],
      },
      screens: {
        xs: "660px",
        sm: "770px",
        md: "980px",
        lg: "1100px",
        xl: "1380px",
      },
    },
  },
  plugins: [],
};
