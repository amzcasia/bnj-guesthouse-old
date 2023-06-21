/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js,jsx}","./src/sectionComponents/*.jsx","index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B1200',
          light: '#564D47'
        },
        accent: '#F7BA0A'
        
      }
    },
  },
  plugins: [],
}

