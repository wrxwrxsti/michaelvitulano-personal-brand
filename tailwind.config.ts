import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAF8F3',
        'muted-blue': '#A8B5C0',
        'slate-blue': '#3B5168',
        gold: '#D4A24C',
        'near-black': '#1C1C1C',
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        body: '1.5',
      },
    },
  },
  plugins: [],
}
export default config
