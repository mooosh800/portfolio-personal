import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        surface: '#151515',
        paper: '#F2F0EC',
        accent: '#C9232D',
        muted: '#858585',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.28em',
      },
    },
  },
  plugins: [],
} satisfies Config;
