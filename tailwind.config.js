module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        'pastel-pink': '#ffcdd2',
        'pastel-purple': '#e1bee7',
        'pastel-blue': '#bbdefb',
        'pastel-green': '#c8e6c9',
        'pastel-yellow': '#fff9c4',
        'retro-yellow': '#FFE800',
        'retro-pink': '#FF00FF',
        'retro-cyan': '#00FFFF',
        'retro-green': '#00FF00',
        'retro-orange': '#FF8B00',
        'retro-purple': '#9D00FF',
      },
      backgroundImage: {
        'retro-grid': 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
      },
    },
  },
  plugins: [],
}
