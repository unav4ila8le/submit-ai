import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "rgba(255, 255, 255, <alpha-value>)",
        primary: {
          DEFAULT: "rgba(59, 130, 246, <alpha-value>)",
          50: "rgba(239, 246, 255, <alpha-value>)",
          100: "rgba(219, 234, 254, <alpha-value>)",
          200: "rgba(191, 219, 254, <alpha-value>)",
          300: "rgba(147, 196, 253, <alpha-value>)",
          400: "rgba(96, 165, 250, <alpha-value>)",
          500: "rgba(59, 130, 246, <alpha-value>)",
          600: "rgba(37, 99, 235, <alpha-value>)",
          700: "rgba(29, 79, 216, <alpha-value>)",
          800: "rgba(30, 64, 175, <alpha-value>)",
          900: "rgba(30, 59, 138, <alpha-value>)",
          950: "rgba(23, 37, 84, <alpha-value>)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
