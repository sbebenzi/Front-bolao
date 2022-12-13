/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
     fontFamily:{
      sans:'Roboto, sans-serif'
     }
    },
    colors:{
      gray:{
        
        900 : '#121214',
        800 : '#323238',
        600 : '#202024',
        300 : '#8d8d99',
        100 : '#e1e1e6'

      },
      white:{
        900:'#ffff'
      },
      green:{
        500: '#129e57'
      },
      yellow:{
        500: '#f7dd43',
        700: '#f9dd24'
      }
      
    }
  },
  plugins: [],
}
