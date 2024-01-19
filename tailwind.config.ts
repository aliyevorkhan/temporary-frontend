import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-base": "rgb(231, 236, 240)",
        layer: "rgba(0, 0, 0, 0.5)",
        beige: "#FFF2D8",
        iridium: "#3A3A3A",
        black: "#000000",
        cornflowerBlue: "#DEE5F3",
        brand: "#FF3131",
        "brand-dark": "#C80D0D",
        gradients: {
          "card-gradient": "linear-gradient(180deg, #FFF 0%, #000 82.97%)",
        },
        blue: "#5288F4",
        blue2: "#82ACFF",
        orange: {
          100: "#FFF2D8",
          200: "#FFD2A3",
          300: "#FFB26E",
          400: "#FF9319",
          500: "#FF7400",
          600: "#CC5B00",
          700: "#994100",
          800: "#662800",
          900: "#331E00",
        },
        dark: {
          source: {
            opacity: {
              black: {
                "0.5": "rgba(0, 0, 0, 0.5)",
                "0.64": "rgba(0, 0, 0, 0.64)",
              },
            },
            error: "#F32828",
          },
        },
        light: {
          source: {
            opacity: {
              black: {
                "0.5": "rgba(0, 0, 0, 0.5)",
                "0.64": "rgba(0, 0, 0, 0.64)",
              },
            },
            error: "#F32828",
          },
        },
      },
      fontSize: {
        "7xl": [
          "72px",
          {
            lineHeight: "80px",
          },
        ],
        "6xl": [
          "56px",
          {
            lineHeight: "64px",
          },
        ],
        "5xl": [
          "40px",
          {
            lineHeight: "48px",
          },
        ],
        "4xl": [
          "36px",
          {
            lineHeight: "48px",
          },
        ],
        "3xl": [
          "24px",
          {
            lineHeight: "36px",
          },
        ],
        "2xl": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        xl: [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        lg: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        base: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        sm: [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        xs: [
          "10px",
          {
            lineHeight: "16px",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navigation: "0 3px 6px rgba(115, 125, 144, 0.25)",
        previewOfferCard: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        select: "0px 4.6255px 18.502px 0px rgba(20, 25, 26, 0.08)",
        default: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
