/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  
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
        'esfihasdash' : "url('https://imgur.com/k1QU14i.png')",
        'portfolio': "url('https://imgur.com/IbTomHr.png')",
        'pfp': "url('https://imgur.com/ci295gT.png')",
      }    
    },

    fontFamily:{
      poppins: ["Poppins"],
      inter: ["Inter"],
    },  
    
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}