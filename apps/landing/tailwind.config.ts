import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0E1116",
        "canvas-2": "#14181F",
        "canvas-3": "#1B2029",
        ink: "#F4F2EC",
        brass: "#C99540",
        "brass-2": "#B5832F",
        signal: "#D8443E",
        graphite: "#8B8A85",
      },
      fontFamily: {
        display: ["'Source Serif 4'", "'Source Serif Pro'", "Georgia", "serif"],
        body: ["'Geist'", "'Söhne'", "system-ui", "sans-serif"],
        sans: ["'Geist'", "'Söhne'", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
