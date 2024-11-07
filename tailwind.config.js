/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_orange: "#F15B25",
        border_color: "#DEDEDE",
        selected_bg: "#FFE5DC",
        text_color: "#979797",
      },
    },
  },
  plugins: [],
};
