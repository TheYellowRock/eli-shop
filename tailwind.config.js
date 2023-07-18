const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {

        // -------- Mobile Screens --------

        'sm': '390px',
        // => @media (min-width: 576px) { 390×844 ... }
  
        'md': '414px',
        // => @media (min-width: 960px) { 414×896 ... }



        // -------- Tablet Screens --------

        'tab':'768px',
        // => @media (min-width: 1280px) { 768×1024 ... }



        // Desktop Screens --------
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { 1024x640 ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) {  1280×720 ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { 1440×900 ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { 1920×1080 ... }


      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        header: 'Ephesis',
        paris: 'Parisienne'
      },
      colors: {
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889',
        athensGray: '#E2E6EC',
        loblolly: '#BBC3CD',
        sandal: '#AE816F',
        ebony: '#2A293E',
        violetLight: '#ddd6f3',
        rose: '#e9a1a4',
        roseLight: '#f5d9d0',
        offWhite: '#f3f3ec',
        teal: '#addbda',
        tealLight: '#CBE4E1'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        heroCarousel: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 30s linear infinite',
        blink: 'blink 1.4s both infinite',
        hero: 'heroCarousel blink 30s linear infinit'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
