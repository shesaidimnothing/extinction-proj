/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A651',
        primaryDark: '#008C45',
        primaryLight: '#4CD3A5',
        secondary: '#F5F5F5',
        accent: '#00BFB3',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00A651, #00BFB3)',
      },
    },
  },
  plugins: [],
}; 