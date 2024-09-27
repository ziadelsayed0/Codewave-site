/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        background:"var(--background)",
        textColor:"var(--textColor)",
        // grape:"",
      },
    },
  },
  plugins: [],
}

