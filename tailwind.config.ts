import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        'loveya': ['Love Ya Like A Sister', 'cursive'],
        'sans': ['Teachers', 'sans-serif'],
        'rocksalt': ['Rock Salt', 'cursive']
      },
    },
  },
  plugins: [],
} satisfies Config

