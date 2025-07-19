import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(280 100% 70%)", // Яркий фиолетовый как на Astronomer
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220 30% 15%)", // Темно-синий для карточек
          foreground: "hsl(0 0% 90%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(220 20% 25%)",
          foreground: "hsl(0 0% 70%)",
        },
        accent: {
          DEFAULT: "hsl(260 100% 80%)", // Светло-фиолетовый для акцентов
          foreground: "hsl(220 30% 10%)",
        },
        popover: {
          DEFAULT: "hsl(220 30% 15%)",
          foreground: "hsl(0 0% 90%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)", // Белые карточки как на Astronomer
          foreground: "hsl(220 30% 15%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
