import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    textColor: {
      'primary': '#6C727F'
    },
    extend: {
      
      fontFamily: {
        sans: [ "'Be Vietnam Pro'", ...defaultTheme.fontFamily.sans ],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config