/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
     logoFont:[ 'Itim','cursive'],
     Poppins:['Poppins', 'sans-serif']
     
    },
    // fontFamily:{
    //   Poppins:['Poppins', 'sans-serif']
    // }
  },
  plugins: [],
}