/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1900px",
      },
      fontFamily: {
        neueMachina: ["neueMachina", "sans-serif"],
        neueMontreal: ["neueMontreal", "sans-serif"],
        ppEiko: ["ppEiko", "sans-serif"],
        editorialOld: ["editorialOld", "sans-serif"],
      },
    },
  },
  plugins: [],
};
