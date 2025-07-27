/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        heading: ["Poppins", "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
      letterSpacing: {
        "tight-corporate": "-0.02em",
        "normal-corporate": "0.01em",
        "wide-corporate": "0.005em",
      },
      fontWeight: {
        "corporate-light": "300",
        "corporate-normal": "400",
        "corporate-medium": "500",
        "corporate-semibold": "600",
        "corporate-bold": "700",
        "corporate-extrabold": "800",
        "corporate-black": "900",
      },
    },
  },
  plugins: [],
};
