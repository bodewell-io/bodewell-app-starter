const path = require('path');

// This finds the absolute path to the @bodewell/ui package's directory
const bodewellUiPath = path.dirname(require.resolve('@bodewell/ui/package.json'));

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    // Load the preset from the absolute path we found
    require(path.join(bodewellUiPath, 'tailwind.preset.js'))
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Scan the library's files for classes using the absolute path
    path.join(bodewellUiPath, 'dist/**/*.js'),
  ],
}