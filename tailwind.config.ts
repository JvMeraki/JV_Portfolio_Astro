import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        kitrotate: "kitrotate 3s linear infinite both",
        rotateborder: "rotateborder 3s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        kitrotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        rotateborder: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      fontFamily: {
        rampart: ['"Rampart One"', 'system-ui'],
        potta: ['"Potta One"', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config;
