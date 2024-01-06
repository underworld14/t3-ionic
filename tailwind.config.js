const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  konsta: {
    colors: {
      primary: '#009788',
      secondary: '#EABD00',
      tertiary: '#CCD2D2',
      light: '#f4f5f8',
      medium: '#92949c',
      dark: '#222428',
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#009788',
        secondary: '#EABD00',
        tertiary: '#CCD2D2',
        light: '#f4f5f8',
        medium: '#92949c',
        dark: '#222428',
      },
      boxShadow: {
        'top-md': '4px 0px 15px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
