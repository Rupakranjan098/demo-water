/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2C6F', // Deep navy blue
          dark: '#05183F',
          light: '#133E94',
        },
        accent: {
          DEFAULT: '#3D7FF5', // Bright blue
          light: '#EAF2FF', // Very pale blue
          dark: '#1C5CC9',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
