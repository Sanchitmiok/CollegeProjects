/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        myCustomColor: 'RGB(52, 53, 65)',
        hoverCO:'#343440',
      },
      fontSize: {
        'myFontSize': '24px',
        'px12':'12px',
      }
    },
  },
  plugins: [],
}

