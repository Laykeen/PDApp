/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    extend: {
      '13': '3.25rem',
      '15': '3.75rem',
      '128': '32rem',
      '144': '36rem',
    },
  },

  plugins: [],
};

module.exports = config;

// https://daisyui.com/docs/themes/
