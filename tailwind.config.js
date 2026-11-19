/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelana: "#F4EDE6",
        champagne: "#E7D8CB",
        "dourado-claro": "#D8C1AE",
        dourado: "#C2A087",
        caramelo: "#8A6A53",
        marrom: "#8D6D56",
        "marrom-profundo": "#453429",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8D6D56",
          foreground: "#F4EDE6",
        },
        secondary: {
          DEFAULT: "#E7D8CB",
          foreground: "#453429",
        },
      },
      fontFamily: {
        display: ["Open Sans", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Open Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
    },
  },
  plugins: [],
}
