const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#1276FF',
        secondary: '#D6E7FF',
        header: '#1B2D4F',
        tableHeader: '#DCE2F0',
        tableRow: '#F6F5FB',
        badge: '#ECF3FE',
        background: '#F4F5FC',
        buttonText: '#E9EAED'
      }
    },
    fontFamily: {
      man: ['Manrope']
    },
    fontSize: {
      sm: ['12px', '20px'],
      md: ['14px', '20px'],
      lg: ['20px', '20px'],
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    }
  },
  plugins: []
};
export default config;
