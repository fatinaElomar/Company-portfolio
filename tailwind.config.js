/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#111111',
          800: '#171717',
          700: '#222222',
          600: '#2E2E2E',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D6',
          200: '#EDDC9E',
          300: '#E4C766',
          400: '#DDB339',
          500: '#D4AF37', // Classic metallic gold
          600: '#B89223',
          700: '#8C6C13',
          800: '#5F480C',
          900: '#362705',
          light: '#F3E5AB',
          accent: '#FFD700',
          champagne: '#F7E7CE'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9E7B9 0%, #D4AF37 50%, #997B20 100%)',
        'gold-shimmer': 'linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.4) 50%, rgba(212,175,55,0) 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #000000 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
