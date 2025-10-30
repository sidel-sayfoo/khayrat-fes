/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "rgb(229 231 235)",
        input: "rgb(229 231 235)",
        ring: "rgb(59 130 246)",
        background: "rgb(255 255 255)",
        foreground: "rgb(9 9 11)",
        primary: {
          DEFAULT: "rgb(59 130 246)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(244 244 245)",
          foreground: "rgb(9 9 11)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(244 244 245)",
          foreground: "rgb(113 113 122)",
        },
        accent: {
          DEFAULT: "rgb(244 244 245)",
          foreground: "rgb(9 9 11)",
        },
        card: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(9 9 11)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
}
