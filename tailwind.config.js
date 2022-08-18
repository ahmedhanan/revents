/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        revents: ['Lato'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
