import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F2EEE5",
        "paper-2": "#E7E1D2",
        ink: "#13171F",
        brass: "#A87E2C",
        "brass-2": "#8A6622",
        signal: "#B0241F",
        graphite: "#5C5A55",
      },
      fontFamily: {
        display: ["'Source Serif 4'", "'Source Serif Pro'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
