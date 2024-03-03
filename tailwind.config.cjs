import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      '13': '3.25rem',
      '15': '3.75rem',
      '128': '32rem',
      '144': '36rem',
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {

    })
  ],
};

module.exports = config;

// https://daisyui.com/docs/themes/
