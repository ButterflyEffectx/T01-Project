/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCream: '#FFF3E3', 
        customCoffee: '#B98E2F', 
        customSoftCream: '#FCF9F4', 
      },
    },
  },
  plugins: [],
}