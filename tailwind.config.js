/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F6F6EF',
        "border":"#F5F5F5",
        "text-color-black":"#414651",
        "gold-main":"#E9C46A",
        "bg-black-main":"#0F0E0C",
        "text-tertiary":"#94979C",
        "pink":"#FEE4E2",
        "green":"#095C37",
      },
    },
  },
  plugins: [],
}
