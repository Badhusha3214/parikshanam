/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        elarge: '74px',
        large: '64px',
        mid: '48px', // New font size added
        base: '18px',
      },
      colors: {
        brand: {
          DEFAULT: '#FFDD00',
          secondary: '#8B8000',
          subtle: '#FFFDF3',
        },
        fontColor: {
          primary: '#636363',
          heading: '#2B2B2B',
          'sub-heading': '#141414',
          secondary: '#25324B',
          tertiary: '#333333',
          muted: '#515B6F',
          subtle: '#7C8493',
        },
      },
      // Example for extending maxWidth if needed
      // maxWidth: {
      //   '1440': '1440px',
      // },
    },
  },
  plugins: [],
};
