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
          teal: "#00a396",     // Section 1: Teal/Green của Lovebug
          dark: "#2d2f4c",     // Section 2: Dark Slate/Indigo của Lovebug
          coral: "#e86b62",    // Section 3: Coral/Salmon của Lovebug
          yellow: "#ffc526",   // Section 4: Vibrant Yellow/Gold của Lovebug
          navy: "#1b223c",     // Section 5: Deep Navy/Dark Slate của Lovebug
          card: "rgba(255, 255, 255, 0.95)", // White card for testimonials
        }
      },
      fontFamily: {
        sans: ['Recoleta', 'Inter', 'sans-serif'], // Thay phông sans thành Recoleta làm mặc định
        display: ['Recoleta', 'Playfair Display', 'serif'], // Đặt Recoleta lên hàng đầu cho display
      }
    },
  },
  plugins: [],
}
