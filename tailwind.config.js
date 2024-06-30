/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-card': 'radial-gradient(circle at top, rgba(29, 78, 216, 0.5), transparent 90%)',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        space:['"Source Code Pro"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
