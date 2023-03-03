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
    extend: {
      brightness:{
        15: '.15',
      },

      backgroundImage: {
        'gradient_bg' : "url('https://imgur.com/Po0PkKS.png')",
      }    
    },

    fontFamily:{
      poppins: ["Poppins"],
      inter: ["Inter"],
    },  
    
  },
  plugins: [],
}