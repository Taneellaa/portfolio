/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#1a1a1a',
        },
        foreground: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
        },
        primary: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
