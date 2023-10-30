/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'sm-custom': '320px',
        'md-custom': '420px',
        'lg-custom': '500px',
        '2lg-custom': '1100px',
        '1xl-custom': '1250px',
        '2xl-custom': '1350px',
        '3xl-custom': '1700px',
        '4xl-custom': '2100px',



      },
    },
  },
  plugins: [],
}

