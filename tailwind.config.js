/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--background)",
      },
      boxShadow: {
        main_: "0 1px 4px var(--shadow)",
      },
      borderColor: {
        main_: "var(--border)",
      },
      colors: {
        main: "var(--color)",
        primary: "var(--primary)",
      },
      backgroundImage: {
        main_linear_t: "linear-gradient(var(--background), transparent)",
        main_linear_t2: "linear-gradient(var(--background) 40%, transparent)",
        main_linear_tb:
          "linear-gradient(var(--background) 30%, transparent, var(--background))",
        main_linear_b:
          "linear-gradient(to top, var(--background), transparent)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
