import type { Config } from "tailwindcss";

export interface ColorsModel {
  clear: string;
  medium: string;
  dark: string;
  cream: string;
  lightGreen: string;
  green: string;
  darkGreen: string;
  purple: string;
  yellow: string;
  red: string;
}

export const defaultColors = {
  clear: "#E8E8E8",
  medium: "#888888",
  dark: "#3D3D3D",
  cream: "#F8FFE5",
  lightGreen: "#B2E6D4",
  green: "#898952",
  darkGreen: "#082D0F",
  purple: "#694873",
  yellow: "#FAA916",
  red: "#CD5D67"
};

const config: Config = {
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
      colors: {
        "clear": defaultColors.clear,
        "medium": defaultColors.medium,
        "dark": defaultColors.dark,
        "cream": defaultColors.cream,
        "light-green": defaultColors.lightGreen,
        "green": defaultColors.green,
        "dark-green": defaultColors.darkGreen,
        "purple": defaultColors.purple,
        "yellow": defaultColors.yellow,
        "red": defaultColors.red,
      }
    },
  },
  plugins: [],
};
export default config;
