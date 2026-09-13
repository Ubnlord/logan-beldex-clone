/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dev-index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A18',
        'dark-card': '#1E1E32',
        'dark-border': '#2A2A40',
        'accent': '#2AF5D4',
        'accent-light': '#20E0C0',
        'error': '#EF4444',
        'warning': '#FBBF24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
