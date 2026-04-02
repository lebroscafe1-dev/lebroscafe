/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f7f7f7",
          accent: "#8B5E3C",
          sand: "#E3D7C1",
          text: "#2b2b2b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      animation: {
        shine: 'shine 3s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
      },
    },
  },
  plugins: [],
};
