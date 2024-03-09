/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'ControllerPrim': "#05386B",
        'ControllerSec': "#18B05C",
        'primary':"#124E70",
        'secondary':"#DCAA15",
        'grey':"#D9D9D9",
        'dark':"#373B3F",
        'linear':"#949079",
        'white':"#FFFFFF",
        'black':"#000000",
        'lightblue':"#dbeafe",
        'langGrey':'#6D6969',
        'titleBlue':'#1E65A3',
        'menuBlue':'#1D4176',
        'green':'#18B05C',
        'fontGray':'#050202',
        'mapGreen':'#5CDB95'
      },
      fontFamily:{
        sans:[
          'Apple Color Emoji'
        ],
        serif:['Times'],
        mono:['monospace']

      },

      keyframes: {
        blinkingBg: {
            '0%, 100%': { backgroundColor: '#ef4444' },
            '50%': { backgroundColor: '#fee2e2' },
        }
    },
    animation: {
        blinkingBg: 'blinkingBg 2s ease-in-out infinite',
    }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

