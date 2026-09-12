/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111816',
        light: '#f4f5ef',
        accent: '#269af9',
        surface: '#1b2420',
        muted: '#a6afa8',
        rules: '#334038',
      },
      spacing: {
        desktop: '64px',
        mobile: '24px',
      },
    },
  },
  plugins: [],
};
