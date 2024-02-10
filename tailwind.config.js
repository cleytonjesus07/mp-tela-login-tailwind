/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        image: "url(https://th.bing.com/th/id/OIP.DWt6Za4hnzAnzyMw8CEE_QHaEo?rs=1&pid=ImgDetMain)"
      }
    },
  },
  plugins: [],
}