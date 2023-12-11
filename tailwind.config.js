module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1700px',
    },
    extend: {
      colors: {
        'dark-blue': '#334C75',
        'light-blue': '#4a84c6',
        'aqua-blue': '#a7dfde',
        'off-white': '#f6f6f0',
        'light-grey': '#848484',
      },
      shadow: {
        'nav-bar': '0 4px 8px rgba(0,0,0,.16)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}