/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        "soft-pink": "#FFE5D9",
      },
      fontSize: {
        xs: ["0.6rem"],
        sm: ["0.8rem"],
        base: ["1rem"],
        lg: ["1.2rem"],
        xl: ["1.4rem"],
        "2xl": ["2.0rem"],
        "3xl": ["2.6rem"],
        "4xl": ["3.8rem"],
        "5xl": ["5.0rem"],
        "6xl": ["6.2rem"],
        "7xl": ["8.6rem"],
        "8xl": ["11.8rem"],
      },
    },
  },
  plugins: [],
};
