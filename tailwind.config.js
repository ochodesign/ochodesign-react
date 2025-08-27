/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Arial', 'sans-serif'],
      },
      colors: {
        dark: '#0d0d0d',
        accent: {
          cyan: '#00fff7',
          magenta: '#ff00ea',
          green: '#00ff85',
        },
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'bg-light': 'var(--bg-light)',
        'bg-gray': 'var(--bg-gray)',
        'bg-dark': 'var(--bg-dark)',
        'bg-blue-dark': 'var(--bg-blue-dark)',
        'bg-blue-light': 'var(--bg-blue-light)',
      },
    },
  },
  plugins: [],
};
