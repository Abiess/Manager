
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html', './src/**/*.{html,ts}'], // Add any other paths that include Tailwind CSS classes in your project
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Enable tailwindcss/forms plugin
  ],
}

