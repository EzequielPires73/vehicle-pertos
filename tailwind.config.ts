import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #0072ff, #9e00ff)',
        'gradient': 'linear-gradient(45deg, #0072ff, #9e00ff)',
      },
      colors: {
        section: "#050B20",
        card: "#050B20",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
