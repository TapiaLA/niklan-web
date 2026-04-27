/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#131314",
        "on-surface": "#e5e2e3",
        "surface-variant": "#353436",
        "on-surface-variant": "#b9cacb",
        "primary-fixed": "#7df4ff",
        "primary": "#dbfcff",
        "primary-container": "#00f0ff",
        "on-primary-container": "#006970",
        "secondary-container": "#0050ee",
        "on-secondary-fixed": "#001550",
        "tertiary-container": "#ffd0ac",
        "tertiary-fixed": "#ffdcc2",
        "tertiary-fixed-dim": "#ffb77b",
        "outline": "#849495",
        "error": "#ffb4ab",
        "surface-container-low": "#1c1b1c",
        "surface-container-lowest": "#0e0e0f",
        "surface-container": "#201f20",
      },
      spacing: {
        "xs": "4px", "sm": "12px", "md": "24px", "lg": "48px", "xl": "80px",
        "grid-margin": "32px", "grid-gutter": "24px"
      },
      fontFamily: {
        "h1": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "h2": ["Inter", "sans-serif"],
        "h3": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}