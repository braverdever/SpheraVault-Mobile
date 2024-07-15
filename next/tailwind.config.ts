/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF7F2A',
        'black-50': 'rgba(0, 0, 0, 0.50)',
        'white-7': 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
};
