import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // STICK Blue — azul cobalt/periwinkle principal de la marca
        brand: {
          50:  '#f0f2fb',
          100: '#dde3f5',
          200: '#d0d9f6',
          300: '#95b2ee',
          400: '#6678d3',
          500: '#4a5bbf',
          600: '#3d4f8a', // Azul principal STICK
          700: '#334278',
          800: '#2b3665',
          900: '#232c52',
          950: '#171d38',
        },
        // STICK Lima — chartreuse/amarillo-verde de la marca
        lime: {
          50:  '#f8fde8',
          100: '#f0fbd0',
          200: '#e4f7aa',
          300: '#dcf09a', // Lima principal STICK
          400: '#c8e472',
          500: '#b0d44a',
          600: '#8db030',
          700: '#6e8c24',
          800: '#566e1d',
          900: '#415518',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans:    ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
