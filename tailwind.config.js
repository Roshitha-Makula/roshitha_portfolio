module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#5E4B41', // Lighter brown
        secondary: '#F2F3F4', // Light gray
        tertiary: '#D8D9DB', // Lighter gray
        accent: {
          DEFAULT: '#EBAF7F', // Lighter orange
          hover: '#CE925A', // Lighter brown on hover
        },
        paragraph: '#878E99',
      },
    },
  },
  plugins: [],
};