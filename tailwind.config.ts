import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne: ['Syne', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        dark: '#17191B',
        primary: {
          50: '#f0fff6',
          100: '#c3fedd',
          200: '#97fdc4',
          300: '#6afbac',
          400: '#3efa93',
          500: '#36dd81',
          600: '#2ec16f',
          700: '#26a45d',
          800: '#1e874b',
        },
        secondary: {
          50: '#f8f5fc',
          100: '#e0cafd',
          200: '#c89efe',
          300: '#af73fe',
          400: '#9747ff',
          500: '#7f3cd8',
          600: '#6832b1',
          700: '#50278a',
          800: '#381c63',
        },
        tertiary: {
          50: '#fcf4e8',
          100: '#fce2b7',
          200: '#fbcf87',
          300: '#fbbd56',
          400: '#faaa25',
          500: '#eb961d',
          600: '#db8315',
          700: '#cc6f0c',
          800: '#bc5b04',
        },
        gray: {
          100: '#f6f6f6',
          200: '#e8e8e8',
          300: '#dadada',
          400: '#cccccc',
          500: '#b7b7b7',
          600: '#a3a3a3',
          700: '#8e8e8e',
        },
        success: {
          100: '#ecfdf4',
          200: '#a5ecc4',
          300: '#5eda94',
          400: '#17c964',
          500: '#119649',
          600: '#0a622f',
          700: '#042f14',
        },
        danger: {
          100: '#fddbd8',
          200: '#faa49c',
          300: '#f66d5f',
          400: '#f33623',
          500: '#b22617',
          600: '#71150c',
          700: '#300500',
        },
        info: {
          100: '#ebfbfe',
          200: '#9fe4f2',
          300: '#52cee7',
          400: '#06b7db',
          500: '#0488a3',
          600: '#03596a',
          700: '#012a32',
        },
        warning: {
          100: '#fef6ec',
          200: '#fbd6a9',
          300: '#f8b567',
          400: '#f59524',
          500: '#b76e18',
          600: '#78470c',
          700: '#3a2000',
        },
        transparent: 'transparent',
      },
      borderRadius: {
        main: '64px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  daisyui: {
    themes: [
      {
        arsi: {
          // primary: '#3efa93',
          // secondary: '#9747ff',
          // accent: '#faaa25',
          // neutral: '#2a323c',
          // 'base-100': '#17191B',
          // info: '#3abff8',
          // success: '#36d399',
          // warning: '#fde047',
          // error: '#f87272',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme } : { matchUtilities: any, theme: any }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
export default config
