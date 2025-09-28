/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f5f5",
          100: "#eaeaea",
          200: "#d5d5d5",
          300: "#b0b0b0",
          400: "#8a8a8a",
          500: "#4a3426",   // Café oscuro
          600: "#3c2b20",   // Más profundo
          700: "#2d2018",
          800: "#1e1510",
          900: "#120c08",
        },
        accent: {
          500: "#d4a373",   // tono beige/acento cálido
          600: "#c98c5c",
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"], // ejemplo
      },
    },
  },
  plugins: [],
}
