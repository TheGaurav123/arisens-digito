/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#38C67A",
        support: "#000000",
        buttonBg: '#6BEAA5'
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}