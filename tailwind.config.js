/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0d0d0d',
          50: '#f5f5f4',
          100: '#e8e8e6',
          200: '#d1d1cd',
          300: '#b0afa9',
          400: '#8a8980',
          500: '#6e6d63',
          600: '#585750',
          700: '#484742',
          800: '#3d3c38',
          900: '#363530',
          950: '#1c1c19',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c97e',
          dark: '#a07c2e',
        },
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
