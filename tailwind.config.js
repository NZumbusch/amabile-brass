/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'powder-blue': {
          50: '#eef3f6',
          100: '#dee6ed',
          200: '#bdcddb',
          300: '#9cb4c9',
          400: '#7a9bb8',
          500: '#5982a6',
          600: '#476885',
          700: '#364e63',
          800: '#243442',
          900: '#121a21',
          950: '#0c1217',
          DEFAULT: '#95AFC6'
        },
        'pale-oak': {
          50: '#f6f4ee',
          100: '#ede8de',
          200: '#dcd2bc',
          300: '#cabb9b',
          400: '#b9a579',
          500: '#a78e58',
          600: '#867246',
          700: '#645535',
          800: '#433923',
          900: '#211c12',
          950: '#17140c',
          DEFAULT: '#D8CDB5'
        },
        'blushed-brick': {
          50: '#f9ebec',
          100: '#f3d8d9',
          200: '#e7b1b4',
          300: '#db8a8e',
          400: '#cf6368',
          500: '#c33c43',
          600: '#9c3035',
          700: '#752428',
          800: '#4e181b',
          900: '#270c0d',
          950: '#1b0809',
          DEFAULT: '#C43E45'
        },
        'wine-plum': {
          50: '#f6eef0',
          100: '#eddee0',
          200: '#dbbdc1',
          300: '#c99ca2',
          400: '#b87a84',
          500: '#a65965',
          600: '#854751',
          700: '#63363c',
          800: '#422428',
          900: '#211214',
          950: '#170c0e',
          DEFAULT: '#743F47'
        },
        'carbon-black': {
          50: '#f1f3f4',
          100: '#e2e6e9',
          200: '#c6cdd2',
          300: '#a9b5bc',
          400: '#8d9ca5',
          500: '#70838f',
          600: '#5a6972',
          700: '#434f56',
          800: '#2d3439',
          900: '#161a1d',
          950: '#101214',
          DEFAULT: '#1D2225'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['monospace']
      }
    }
  }
};
