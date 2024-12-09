module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palladium: '#3A9F98',  // Adjust Palladium color
        darkgray: '#333333',    // Dark background color
        lightgray: '#F4F4F4',   // Lighter background color
        accent: '#f9b826',      // Accent color for highlights
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],  // More modern fonts
      },
    },
  },
  plugins: [],
}
