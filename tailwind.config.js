
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import animated from 'tailwindcss-animated';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'days-one': ['Days One', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    typography,
    animated,
  ],
};
