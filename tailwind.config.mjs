/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#03070E',
          900: '#060D18',
          850: '#091322',
          800: '#0E1D32',
          700: '#142742',
          600: '#1C3456',
        },
        amber: {
          gold: '#D4AF37',
          construction: '#C5A059',
          warm: '#E5A93C',
          glow: '#F59E0B',
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F5E7CC',
          300: '#EED5A5',
          400: '#E4BF74',
          500: '#C5A059',
          600: '#A8833E',
          700: '#7E6028',
          800: '#553F19',
          900: '#32240D',
          950: '#1A1205',
        },
        steel: {
          900: '#1D303D',
          800: '#2C4454',
          700: '#3D5E74',
          600: '#4A728A',
          500: '#5B8296',
          400: '#7B9EAF',
          300: '#A1BCC9',
          200: '#CBE0EA',
          100: '#E7F1F6',
          50: '#F4F9FB',
        },
        navy: {
          950: '#050D18',
          900: '#0B1F38',
          850: '#0F2644',
          800: '#143156',
          700: '#1C4374',
          600: '#26599A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '14px',
        'xl': '18px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'amber-glow': '0 0 25px -5px rgba(212, 175, 55, 0.28)',
        'amber-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.4)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'dark-card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.85), 0 0 20px 0 rgba(212, 175, 55, 0.15)',
        'steel-glow': '0 0 25px -5px rgba(91, 130, 150, 0.3)',
      },
      letterSpacing: {
        widest: '.2em',
        architect: '.25em',
      }
    },
  },
  plugins: [],
};
