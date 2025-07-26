module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float-in': 'floatIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        monograph: ['Monograph', 'sans-serif'], // Add Monograph font
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font
        lora: ['Lora', 'serif'], // Add Lora font
      },
    },
  },
  plugins: [],
};
