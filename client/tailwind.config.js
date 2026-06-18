export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
        colors: {
        midnight: '#fafaf9',
        horizon: '#ffffff',
        glow: '#f3f4f6',
        accent: '#c9a227',
        accent2: '#d4af37'
      },
      boxShadow: {
        glass: '0 24px 80px rgba(2, 15, 45, 0.22)'
      }
    }
  },
  plugins: []
};
