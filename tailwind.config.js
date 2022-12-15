/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

      colors: {
       primary:'#E7F2EE',
       primaryLight:'#FAFEFE',
       primaryDeep:'#7DB89E',
       buttonBg:'#CEE4DA',
       buttonBg2:'#F5F5F5',
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