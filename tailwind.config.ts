import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "n-navy": "#161A30",
        "n-light-navy": "#31304D",
        "n-gray": "#B6BBC4",
        "n-white": "#F0ECE5",
      },
    },
  },
  plugins: [],
};
export default config;
