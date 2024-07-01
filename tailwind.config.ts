import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      light: "#FFFFFF",
      dark: "#ECECEC",
      "dark-1": "#D9D9D9",
      "dark-2": "#ACACAC",
      "dark-3": "#595959",
    },
    backgroundColor: {
      dark: "#121212",
      "dark-1": "#1E1E1E",
      "dark-2": "#252525",
      "dark-3": "#2E2E2E",
    },
    borderColor: {
      dark: "#E0E0E0",
      "dark-1": "#A0A0A0",
      "dark-2": "#4D4D4D",
      "dark-3": "#2A2A2A",
    },
  },
  plugins: [nextui()],
};
export default config;
