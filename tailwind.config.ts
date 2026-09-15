import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2C150F",
        "lake-dawn": "#6F8B8F",
        "karst-mist": "#D3D8D3",
        "stilt-timber": "#8A6F5C",
        apricot: "#D8C1BC",
        "apricot-blossom": "#D8C1BC",
        bamboo: "#9AA487",
        "bamboo-shoot": "#9AA487",
        terracotta: "#B56E5A",
        "warm-paper": "#F7F3EE",
        "soft-sand": "#EDE4D8",
        charcoal: "#1F1F1F",
      },
      fontFamily: {
        display: "var(--font-fraunces)",
        body: "var(--font-be-vietnam-pro)",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-2xl": ["1.5rem", { lineHeight: "1.5" }],
        "body-xl": ["clamp(1.125rem, 2vw, 1.25rem)", { lineHeight: "1.6" }],
        "body-lg": ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.65" }],
        "body-base": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "ui-base": ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
export default config;
