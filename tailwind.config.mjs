import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['davis-sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        loafer: {
          50: '#f2f8ed',
          100: '#e9f2e1', // Fondo claro
          200: '#c9dfb7',
          300: '#a6cb8b',
          400: '#87b566',
          500: '#699949',
          600: '#517937',
          700: '#3f5e2d',
          800: '#354c28',
          900: '#304126',
          950: '#162310'
        },
        eden: {
          50: '#f0fdfc',
          100: '#ccfbf8',
          200: '#99f6f0',
          300: '#5eeae1',
          400: '#2dd4c9',
          500: '#14b8ad',
          600: '#0d948b',
          700: '#0f766f',
          800: '#115e59', // Letras Strong Claro
          900: '#134e4a',
          950: '#042f2c'
        },
        'jungle-green': {
          50: '#ebfef7',
          100: '#d0fbea',
          200: '#a4f6d9',
          300: '#6aebc7',
          400: '#2fd8ad',
          500: '#0abf97',
          600: '#00ac8a', // Letras Claro
          700: '#007c67',
          800: '#036252',
          900: '#045045',
          950: '#012d28'
        },
        'pale-leaf': {
          50: '#f6f9f4',
          100: '#ecf2e6',
          200: '#cdddc0', // Letras Acentuadas
          300: '#b8cea7',
          400: '#91b078',
          500: '#709255',
          600: '#597742',
          700: '#485f36',
          800: '#3b4c2f',
          900: '#313f28',
          950: '#182112'
        },
        'swamp-green': {
          50: '#f4f7f2',
          100: '#e7ebe0',
          200: '#ced8c2',
          300: '#a1b58f', // Text-Primary-Medium
          400: '#809a6d',
          500: '#607d4c',
          600: '#496239',
          700: '#3a4f2d',
          800: '#2f3f26',
          900: '#273420',
          950: '#151d11'
        }
      }
    }
  },
  plugins: []
}
