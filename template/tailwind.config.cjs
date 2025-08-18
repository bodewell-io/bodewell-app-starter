/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@bodewell/ui/tailwind.preset.js')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // This path goes UP one level to find node_modules
    "../node_modules/@bodewell/ui/dist/**/*.js",
  ],
}