/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: { min: '640px' },
        md: { min: '768px' },
        lg: { min: '1024px' },
        xl: { min: '1280px' },
        xxl: { min: '1536px' },
      },
      colors: {
        lightBlack: 'rgba(0, 0, 0, 0.5)',
        Clr94AFB6: '#94AFB6',
        Cyan: '#2DD3E3',
        LightBlue: ' #2DD3E3',
      },
      backgroundImage: {
        'pink-card': "url('/public/Group 167.svg')",
        'blue-card': "url('/public/Group 168.svg')",
        'yellow-card': "url('/public/Group 169.svg')",
      },
      height: {
        eight: '8vh',
        sixteen: '16vh',
        fifty: '50%',
        middle: '76vh',
        eighteen: '18%',
        twentOne: '21%',
        webkit: ' -webkit-fill-available',
      },
    },
  },
};
