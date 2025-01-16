import type { Config } from "tailwindcss";

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
        primary: {
          DEFAULT: "#5C45FD",
          light: "#A89BFF",
        },
        secondary: "#161616",
        accent: "#969799",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
        'jakarta': ['var(--font-jakarta)', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} satisfies Config;
