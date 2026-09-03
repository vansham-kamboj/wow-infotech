/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        panel: '#F7F7F5',
        dark: '#12110F',
        accent: '#F5B301',
        'accent-light': '#FFF8E1',
        border: '#EAEAE7',
        muted: '#999894',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'cell-lg': '28px',
        'cell-md': '20px',
        'cell-sm': '14px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    }
  },
  plugins: [],
}
