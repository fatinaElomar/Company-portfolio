/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7A1526',
          hover: '#5D0E1D',
          light: '#FDF2F4',
          muted: '#F8EAED',
          dark: '#4A0B17',
          accent: '#9E1B32',
        },
        dark: {
          950: '#09090B',
          900: '#111115',
          800: '#1C1C22',
          700: '#2A2A32',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F9FAFB',
          muted: '#F3F4F6',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'Cinzel', 'serif'],
      },
      backgroundImage: {
        'burgundy-gradient': 'linear-gradient(135deg, #8B1E3F 0%, #7A1526 50%, #5D0E1D 100%)',
        'burgundy-dark-gradient': 'linear-gradient(180deg, #111115 0%, #09090B 100%)',
      }
    },
  },
  plugins: [],
}
