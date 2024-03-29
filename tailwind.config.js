/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

