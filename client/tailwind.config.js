export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
        colors: {
          midnight: '#f8fafc',
          horizon: '#ffffff',
          glow: '#e2e8f0',
          glass: '#ffffff',
         accent: '#2563eb',
         accent2: '#3b82f6'
      },
      boxShadow: {
        glass: '0 24px 80px rgba(2, 15, 45, 0.22)'
      }
    }
  },
  plugins: []
};
