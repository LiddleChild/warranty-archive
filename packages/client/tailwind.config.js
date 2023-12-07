/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "c-gray": "#393E46",
        "c-green": "#6D9886",
        "c-cream": "#F2E7D5",
        "c-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
