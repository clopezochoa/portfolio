import type { Config } from "tailwindcss";

export class ColorObject {
  hex: string;
  name: string;
  bg: string;
  text: string;
  
  constructor (
    hex: string,
    name: string
  ) {
    if(hex[0] === "#") {
      this.hex = hex;
    } else {
      this.hex = `#${hex}`;
    }
    this.name = name;
    this.bg = `bg-${name}`
    this.text = `text-${name}`
  }
}

export const defaultColors = {
  clear: new ColorObject("E8E8E8", "clear"),
  medium: new ColorObject("888888", "medium"),
  dark: new ColorObject("3D3D3D", "dark"),
  green: new ColorObject("2A9D8F", "green"),
  blue: new ColorObject("264653", "blue"),
  yellow: new ColorObject("E9C46A", "yellow"),
  orange: new ColorObject("F4A261", "orange"),
  red: new ColorObject("E76F51", "red")
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clear": defaultColors.clear.hex,
        "medium": defaultColors.medium.hex,
        "dark": defaultColors.dark.hex,
        "green": defaultColors.green.hex,
        "blue": defaultColors.blue.hex,
        "yellow": defaultColors.yellow.hex,
        "red": defaultColors.red.hex,
      }
    },
  },
  plugins: [],
};
export default config;
