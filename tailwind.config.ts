import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkLime: "#4CAF4F",
        silver: "#F5F7FA",
        greyText: "#717171",
        greyDark: "#263238",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
