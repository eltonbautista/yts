/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "1rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "auth-background": "linear-gradient(90deg, neutral 70%, accent 70%)",
      },
    },
  },
  plugins: [],
}
