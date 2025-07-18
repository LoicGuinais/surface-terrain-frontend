/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1f2937',   // gray-800 (neutral black)
          light: '#4b5563',     // gray-600
          dark: '#111827',      // gray-900
        },
        link: {
          DEFAULT: '#2563eb',   // same as brand
          hover: '#1d4ed8',     // slightly darker blue
        },
        text: {
          primary: '#1f2937',   // gray-800 → readable dark text
          secondary: '#4b5563', // gray-600 → for helper text
        },
        surface: {
          base: '#ffffff',      // white
          soft: '#f9fafb',      // gray-50
          border: '#e5e7eb',    // gray-200
        },
      },
    },
  },
  plugins: [],
};
