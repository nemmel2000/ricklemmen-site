// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      zIndex: {
        1: '1',
        99: '99',
        100: '100'
      },
      spacing: {
        15: '3.75rem'
      },
      borderRadius: {
        '3xl': '80px'
      },
      screens: {
        '3xl': '2000px'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#F78E3F'
        },
        secondary: {
          DEFAULT: '#30AEF5',
          light: '#DFF9FB'
        },
        tertiary: '#0D0D0E',
        bg: {
          DEFAULT: '#FCFCFC',
          dark: '#121212'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}