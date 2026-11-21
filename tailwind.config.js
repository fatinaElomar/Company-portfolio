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
          950: '#09090B',
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
          muted: '#F4F4F5',
          border: '#E4E4E7',
          hover: '#F1F1F4'
        },
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E4C6',
          300: '#EBD19D',
          400: '#DFBD71',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#946B08',
          800: '#755407',
          900: '#4E3805',
          accent: '#D97706',
          light: '#FFFBEB'
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'Cinzel', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3D079 0%, #D4AF37 50%, #B8860B 100%)',
        'gold-soft-gradient': 'linear-gradient(135deg, #FFFDF8 0%, #FAF4E8 50%, #F5E8CE 100%)',
        'light-card': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -5px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 20px 40px -10px rgba(212, 175, 55, 0.35)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 35px -5px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
