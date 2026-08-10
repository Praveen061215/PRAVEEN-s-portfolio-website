/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Testimonials.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Adjust according to portfolio's primary color
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
