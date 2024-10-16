/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color1': '#E8F4FF',
        'color2': '#2487E5',
        'color3': '#1B7BD4'
      },
    },
  },
  plugins: [],
}