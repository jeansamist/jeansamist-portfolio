import type { Config } from "tailwindcss";
import getPalette from "tailwindcss-palette-generator";

const palette = getPalette([
  {
    color: "#DBFF00",
    name: "primary",
  },
]);
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1416px",
      },
    },
    extend: {
      colors: {
        background: "#040404",
        foreground: "#969696",
        title: "#FFFFFF",
        primary: palette.primary,
        muted: "#6F6F6F",
        accent: "#101010",
      },
    },
  },
  plugins: [],
};
export default config;
