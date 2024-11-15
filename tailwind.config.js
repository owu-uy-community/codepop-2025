const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: 'var(--bagners-font)',
        inter: 'var(--inter-font)',
        'cutive-mono': 'var(--cutive-mono-font)',
        'sour-gummy': 'var(--sour-gummy-font)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
