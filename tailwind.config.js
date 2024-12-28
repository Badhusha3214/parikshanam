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
        elarge: ['74px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        large: ['64px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        mid: ['48px', { lineHeight: '1.3' }],
        cdh: ['24px', { lineHeight: '1.4' }],
        pch: ['22px', { lineHeight: '1.5' }],
        normal: ['18px', { lineHeight: '1.6' }],
        th: ['48px', { lineHeight: '1.3' }],
        tn: ['17px', { lineHeight: '1.6' }],
        tsh: ['16px', { lineHeight: '1.6' }],
        ph: ['45px', { lineHeight: '1.3' }],
        pn: ['17px', { lineHeight: '1.6' }],
        psh: ['15px', { lineHeight: '1.6' }],

        // Responsive variants
        'mobile-elarge': ['42px', { lineHeight: '1.1' }],
        'mobile-large': ['36px', { lineHeight: '1.2' }],
        'mobile-mid': ['32px', { lineHeight: '1.3' }],
        'mobile-cdh': ['20px', { lineHeight: '1.4' }],
        'mobile-th': ['32px', { lineHeight: '1.3' }],
      },
      screens:{
        sm:'600px',
        md: '728px',
        lg: '984px',
        xl: '1240px'
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
