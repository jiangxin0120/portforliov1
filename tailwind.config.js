/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '7.5': '1.875rem',
      },
      backdropBlur: {
        sm: '5px',
      },
    },
  },
  plugins: [],
} 
