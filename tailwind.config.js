/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        yashil : "#4E9F0D",
        yashilhover : "#4f9f0db5",
        yashillight : "#cbf8a7b5",
      },
      screens:{
        'max1260' : {'max' : '1260px'}, 
        'max1020' : {'max' : '1020px'}, 
        'max800' : {'max' : '800px'}, 
        'max730' : {'max' : '730px'}, 
        'max600' : {'max' : '600px'}, 
        'max500' : {'max' : '500px'}, 
      },
      backgroundImage: {
        'heroBG': "url('../src/Components/Images/headerBG.png')",
        'aboutBG': "url('../src/Components/Images/aboutBG.png')",
      }
    },
  },
  plugins: [],
}
