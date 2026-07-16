/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#F5F5F0',
        'ink-mid': '#888888',
        'ink-light': '#B0B0A8',
        'ink-faint': '#D4D4CC',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        hand: ['Caveat', 'cursive'],
      }
    }
  },
  plugins: [],
}
