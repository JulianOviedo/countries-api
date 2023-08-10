/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     'd-blue': 'hsl(209, 23%, 22%)',
     'd-blue-bg': 'hsl(207, 26%, 17%)',
     'l-blue-text': 'hsl(200, 15%, 8%)',
     'l-gray-input': 'hsl(0, 0%, 52%)',
     'l-gray-bg': 'hsl(0, 0%, 98%)',
     'white': 'hsl(0, 0%, 100%)',
     'error': 'hsl(0, 100%, 63%)',
    },
    extend: {},
    gridTemplateColumns:{
      '16': 'repeat(auto-fit, minmax(16rem, 1fr))',
      '2' : 'repeat(2, minmax(0, 1fr))'
    },
    fontFamily: {
      primary: "'Nunito Sans', sans-serif"
    }

  },
  plugins: [],
  darkMode: 'class',
}

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)


// - Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
// - Weights: 300, 600, 800