/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     'd-blue': 'hsl(209, 23%, 22%)',
     'd-blue-bg': 'hsl(209, 23%, 22%)',
     'l-blue-text': 'hsl(209, 23%, 22%)',
     'l-gray-input': 'hsl(209, 23%, 22%)',
     'd-gray-input': 'hsl(209, 23%, 22%)',
     'l-gray-bg': 'hsl(209, 23%, 22%)',
     'white': 'hsl(209, 23%, 22%)',

    },
    extend: {},
  },
  plugins: [],
}

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)