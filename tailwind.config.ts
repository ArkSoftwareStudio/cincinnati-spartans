import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "heroBanner" : "url('/heroBanner2.png')",
      },
      fontFamily: {
        chakra: ['var(--font-chakra)'],
        lobster: ['var(--font-lobster)'],
        marker: ['var(--font-marker)']
      },
      screens: {
        tablet : '640px',
        laptop : '1024px',
        desktop: '1440px'
      }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
  experimental: {
    optimizeUniversalDefaults: true
  }
};
export default config;
