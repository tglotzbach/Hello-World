import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  safelist: [
    // Gradient classes used in project frontmatter
    "from-stone-200", "to-stone-100",
    "from-slate-200", "to-slate-100",
    "from-amber-100", "to-orange-50",
    "from-zinc-200", "to-neutral-100",
    "from-rose-100",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        cream: "#faf9f7",
        accent: "#c0392b",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
