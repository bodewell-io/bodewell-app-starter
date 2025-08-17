/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@bodewell/ui/tailwind.preset.js')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@bodewell/ui/dist/**/*.js",
  ],
}