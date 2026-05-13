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
        viettel: {
          red: "#E30613",
          "red-dark": "#B30000",
        },
        brand: {
          black: "#0A0A0A",
          dark: "#1A1A1A",
          gray1: "#4A4A4A",
          gray2: "#7F7F7F",
          gray3: "#CCCCCC",
          gray4: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        enterprise: "0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)",
        "enterprise-hover":
          "0 4px 12px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)",
        header: "0 1px 0 rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
