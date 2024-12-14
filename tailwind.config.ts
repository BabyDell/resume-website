import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-white': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #548FBA 20%, #819bd4 80%)',
      },
      animation: {
        'meteor-effect': 'meteor linear',
        'meteor-star-effect': 'meteor-star linear',
      },
      fontFamily: {
        Playfair_Display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
