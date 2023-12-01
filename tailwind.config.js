
// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ['./src/index.html', './src/**/*.{html,ts}'], // Add any other paths that include Tailwind CSS classes in your project
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/forms'), // Enable tailwindcss/forms plugin
//   ],
// }

module.exports = {
  purge: {
    enabled: process?.argv?.indexOf("build") !== -1,
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./projects/**/*.html",
      "./projects/**/*.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
 }