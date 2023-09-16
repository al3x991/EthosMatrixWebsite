/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       fontFamily: {
        sans: ['var(--font-nunito-sans)'],
      },
    },
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'EB Garamond', variants: ['400', '500', '600', '700'] },
        // Add more font families if needed
      ],
    }),
  ],
}
