import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        char: "#121212",
        panel: "#181818",
        line: "#2B2B2B",
        ivory: "#F3EEE4",
        mute: "#A8A29A",
        gold: {
          300: "#E3CB8E",
          400: "#D2AF63",
          500: "#B98F3F",
          600: "#A9782B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.22em" },
      maxWidth: { page: "1240px" },
    },
  },
  plugins: [],
};

export default config;
