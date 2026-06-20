import type { Config } from "tailwindcss";

/* ============================================================
   WORK COMP TEXAS — "Lone Star" palette
   clay = deep Texas red · sage = navy blue · gold = rust amber
   cream = warm ivory · sand = light warm sand
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F5",
        sand: "#EFE8E4",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#9B1C1C",
          dark: "#7A1212",
          light: "#C42B2B",
          50: "#FDF2F2",
          100: "#FCDEDE",
          200: "#F8BBBB",
          300: "#F29191",
          400: "#E85C5C",
          500: "#C42B2B",
          600: "#9B1C1C",
          700: "#7A1212",
          800: "#5C0D0D",
          900: "#400808",
        },
        sage: {
          DEFAULT: "#1E3A6E",
          dark: "#14285A",
          light: "#2E5099",
          50: "#EEF1F8",
          100: "#D4DCEF",
          200: "#A8BADF",
          300: "#6E91C8",
          400: "#3E6AB5",
          500: "#2E5099",
          600: "#1E3A6E",
          700: "#14285A",
        },
        gold: {
          DEFAULT: "#C94B1F",
          dark: "#A33912",
          light: "#E06840",
          50: "#FDF3EF",
          100: "#FAE3D8",
          200: "#F5C5AD",
          300: "#EDA07A",
          400: "#E47B4E",
          500: "#E06840",
          600: "#C94B1F",
          700: "#A33912",
        },
        espresso: "#1A1414",
        cocoa: "#3D2B2B",
        mocha: "#7A6060",
        adobe: "#DDD0C8",
        adobeDark: "#C5B4A8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF7F5 0%, #EFE8E4 40%, #F5EDE8 70%, #FBF7F5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(155,28,28,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30,58,110,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #9B1C1C 0%, #C42B2B 100%)",
        "sage-gradient": "linear-gradient(135deg, #1E3A6E 0%, #2E5099 100%)",
        "gold-gradient": "linear-gradient(135deg, #C94B1F 0%, #E06840 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(122,18,18,0.22), 0 4px 12px -6px rgba(26,20,20,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(122,18,18,0.28), 0 10px 30px -10px rgba(26,20,20,0.10)",
        card: "0 2px 8px -2px rgba(26,20,20,0.06), 0 1px 3px -1px rgba(26,20,20,0.04)",
        "card-hover": "0 20px 50px -15px rgba(122,18,18,0.24), 0 8px 20px -8px rgba(26,20,20,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(122,18,18,0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
