/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        League: ["League Spartan", "sans-serif"],
      },
        colors: {
          theme1: {
            background: {
              main: 'hsl(222, 26%, 31%)',
              toggle: 'hsl(223, 31%, 20%)',
              screen: 'hsl(224, 36%, 15%)',
            },
            key: {
              bg: 'hsl(225, 21%, 49%)',
              shadow: 'hsl(224, 28%, 35%)',
              toggleBg: 'hsl(6, 63%, 50%)',
              toggleShadow: 'hsl(6, 70%, 34%)',
              lightBg: 'hsl(30, 25%, 89%)',
              lightShadow: 'hsl(28, 16%, 65%)',
            },
            text: {
              darkBlue: 'hsl(221, 14%, 31%)',
              white: 'hsl(0, 0%, 100%)',
            },
          },
  
          theme2: {
            background: {
              main: 'hsl(0, 0%, 90%)',
              toggle: 'hsl(0, 5%, 81%)',
              screen: 'hsl(0, 0%, 93%)',
            },
            key: {
              bg: 'hsl(185, 42%, 37%)',
              shadow: 'hsl(185, 58%, 25%)',
              toggleBg: 'hsl(25, 98%, 40%)',
              toggleShadow: 'hsl(25, 99%, 27%)',
              lightBg: 'hsl(45, 7%, 89%)',
              lightShadow: 'hsl(35, 11%, 61%)',
            },
            text: {
              darkYellow: 'hsl(60, 10%, 19%)',
              white: 'hsl(0, 0%, 100%)',
            },
          },
  
          theme3: {
            background: {
              main: 'hsl(268, 75%, 9%)',
              toggle: 'hsl(268, 71%, 12%)',
              screen: 'hsl(268, 71%, 12%)',
            },
            key: {
              bg: 'hsl(281, 89%, 26%)',
              shadow: 'hsl(285, 91%, 52%)',
              toggleBg: 'hsl(176, 100%, 44%)',
              toggleShadow: 'hsl(177, 92%, 70%)',
              darkBg: 'hsl(268, 47%, 21%)',
              darkShadow: 'hsl(290, 70%, 36%)',
            },
            text: {
              yellow: 'hsl(52, 100%, 62%)',
              darkBlue: 'hsl(198, 20%, 13%)',
              white: 'hsl(0, 0%, 100%)',
            },
          },
        },
    },
  },
  plugins: [],
}
