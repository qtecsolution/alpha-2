/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

      colors: {
       primary:'#E7F2EE',
       primaryLight:'#FAFEFE',
       primaryDeep:'#7DB89E',
       secondary:'#F6CCC3',
       border:'#DADADA',
       dark:'#333333',

      },
      fontFamily :{
        roboto :['Roboto', "sans-serif"]
      }
    },
    container: {
      center: false,
    },
  },
  plugins: [

    require("flowbite/plugin")
  ],

 
}