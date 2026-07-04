/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00f0ff", // Neon Cyan cho cảm giác công nghệ
          dark: "#080c14", // Deep Space Dark làm nền chủ đạo
          card: "#111827", // Màu nền cho cards
          accent: "#8b5cf6", // Tím làm điểm nhấn
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
